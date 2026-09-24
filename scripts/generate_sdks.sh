#!/bin/bash
set -euo pipefail

# Run from this script's directory so relative paths and openapitools.json (version pin) resolve.
cd "$(dirname "$0")"

# Use the official scoped package. The unscoped "openapi-generator-cli" on npm is a
# dependency-confusion placeholder that prints a warning and exits 0.
# Override with OPENAPI_GENERATOR_CLI to use a different install.
read -r -a GEN <<< "${OPENAPI_GENERATOR_CLI:-npx --yes @openapitools/openapi-generator-cli}"

"${GEN[@]}" version

# Validate before touching the existing SDKs.
"${GEN[@]}" validate -i ../headless-api.yaml

rm -rf ../sdks
mkdir -p ../sdks

echo "Generating SDKs..."
generate() {
  local name=$1 generator=$2
  shift 2
  "${GEN[@]}" generate -i ../headless-api.yaml -o "../sdks/$name" --api-package TebexHeadless --package-name TebexHeadless -g "$generator" "$@"
}

pids=()
generate python python & pids+=($!)
generate php php --invoker-package TebexHeadless & pids+=($!)
generate markdown markdown --invoker-package TebexHeadless & pids+=($!)
generate java java --invoker-package TebexHeadless & pids+=($!)
generate nodejs javascript --invoker-package TebexHeadless & pids+=($!)
generate typescript typescript-node --invoker-package TebexHeadless & pids+=($!)
generate go go --invoker-package TebexHeadless & pids+=($!)
generate csharp csharp --invoker-package TebexHeadless & pids+=($!)
generate openapi openapi --invoker-package TebexHeadless & pids+=($!)
generate postman postman-collection --invoker-package TebexHeadless & pids+=($!)

failed=0
for pid in "${pids[@]}"; do
  wait "$pid" || failed=1
done

echo "---------------------"
if [ "$failed" -ne 0 ]; then
  echo "Generation FAILED for one or more SDKs."
  exit 1
fi
echo "Generation completed."
