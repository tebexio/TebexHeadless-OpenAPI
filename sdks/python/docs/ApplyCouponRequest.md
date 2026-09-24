# ApplyCouponRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coupon_code** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.apply_coupon_request import ApplyCouponRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyCouponRequest from a JSON string
apply_coupon_request_instance = ApplyCouponRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyCouponRequest.to_json())

# convert the object into a dict
apply_coupon_request_dict = apply_coupon_request_instance.to_dict()
# create an instance of ApplyCouponRequest from a dict
apply_coupon_request_from_dict = ApplyCouponRequest.from_dict(apply_coupon_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


