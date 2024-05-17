#!/bin/bash

rm -rf ../sdks
mkdir -p ../sdks
openapi-generator-cli validate -i ../openapi.yaml

echo "Generating SDKs..."
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/python --api-package TebexHeadless --package-name TebexHeadless -g python &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/php --api-package TebexHeadless --package-name TebexHeadless -g php --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/python --api-package TebexHeadless --package-name TebexHeadless -g python --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/markdown --api-package TebexHeadless --package-name TebexHeadless -g markdown --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/java --api-package TebexHeadless --package-name TebexHeadless -g java --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/nodejs --api-package TebexHeadless --package-name TebexHeadless -g javascript --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/go --api-package TebexHeadless --package-name TebexHeadless -g go --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/csharp --api-package TebexHeadless --package-name TebexHeadless -g csharp --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/openapi --api-package TebexHeadless --package-name TebexHeadless -g openapi --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/openapi-yaml --api-package TebexHeadless --package-name TebexHeadless -g openapi-yaml --invoker-package TebexHeadless &
openapi-generator-cli generate -i ../openapi.yaml -o ../sdks/postman --api-package TebexHeadless --package-name TebexHeadless -g postman-collection --invoker-package TebexHeadless &

wait
echo "---------------------"
echo "Generation completed."