package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func addDynamicPackages(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	categoryId, err := intVar(s, "dynamicCategoryId") // must be a category of type dynamic
	if err != nil {
		return err
	}
	pkg := TebexHeadless.NewDynamicPackageInput("E2E Test Package", 1.0, "e2e-test-package")
	body := TebexHeadless.NewDynamicPackagesRequest(basketIdent, "e2e-test-user", categoryId, []TebexHeadless.DynamicPackageInput{*pkg})
	_, _, err = client.HeadlessAPI.CreateDynamicPackage(ctx, basketIdent).DynamicPackagesRequest(*body).Execute()
	return err
}
