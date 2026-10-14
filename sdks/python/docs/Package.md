# Package


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The package&#39;s numeric ID. For external packages this is synthetic; use &#x60;ident&#x60; instead. | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**category** | [**PackageCategory**](PackageCategory.md) |  | [optional] 
**base_price** | **float** |  | [optional] 
**sales_tax** | **float** |  | [optional] 
**total_price** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 
**prorate_price** | **float** | If this package is part of a tiered category, this is the difference on upgrade pricing from the current active tier. | [optional] 
**discount** | **float** |  | [optional] 
**disable_quantity** | **bool** |  | [optional] 
**disable_gifting** | **bool** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**media** | [**List[PackageMedia]**](PackageMedia.md) |  | [optional] 
**order** | **int** |  | [optional] 
**slug** | **str** |  | [optional] 
**user_limit** | **int** |  | [optional] 
**creator_meta_data** | **object** |  | [optional] 
**options** | **List[str]** |  | [optional] 
**variables** | **List[str]** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**ident** | **str** | The package&#39;s string identifier, returned on every package (standard, dynamic and external). Treat it as an opaque string: store it and send it back as-is to &#x60;getPackage&#x60; and &#x60;addBasketPackage&#x60;; don&#39;t build or parse it.  It has the form &#x60;{prefix}_{categoryId}_{id}&#x60;, where &#x60;prefix&#x60; is &#x60;pkg&#x60; (standard), &#x60;dyn&#x60; (dynamic, numeric id) or &#x60;ext&#x60; (external, e.g. &#x60;ext_10_{asset-uuid}&#x60; for INTRACT, with the provider&#39;s identifier URL-encoded). | [optional] 
**vip_status** | **str** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. | [optional] 

## Example

```python
from TebexHeadless.models.package import Package

# TODO update the JSON string below
json = "{}"
# create an instance of Package from a JSON string
package_instance = Package.from_json(json)
# print the JSON string representation of the object
print(Package.to_json())

# convert the object into a dict
package_dict = package_instance.to_dict()
# create an instance of Package from a dict
package_from_dict = Package.from_dict(package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


