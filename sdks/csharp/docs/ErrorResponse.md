# TebexHeadless.Model.ErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **Object** | A URI reference [RFC3986] that identifies the problem type.  This specification encourages that, when dereferenced, it provide human-readable documentation for the problem type (e.g., using HTML [W3C.REC-html5-20141028]).  When this member is not present, its value is assumed to be \&quot;about:blank\&quot;. | [optional] 
**Title** | **string** | A short, human-readable summary of the problem type.  It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization | [optional] 
**Status** | **int** | The HTTP status code generated by the origin server for the occurrence of the problem. | [optional] 
**Detail** | **string** | A human-readable explanation specific to this occurrence of the problem. | [optional] 
**Instance** | **string** | A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

