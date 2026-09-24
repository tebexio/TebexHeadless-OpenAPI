# ServerStatusData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Header** | **string** |  | 
**Hostname** | **string** |  | 
**Port** | **int32** |  | 
**Online** | **bool** |  | 
**Players** | [**NullablePlayers**](Players.md) |  | 

## Methods

### NewServerStatusData

`func NewServerStatusData(header string, hostname string, port int32, online bool, players NullablePlayers, ) *ServerStatusData`

NewServerStatusData instantiates a new ServerStatusData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServerStatusDataWithDefaults

`func NewServerStatusDataWithDefaults() *ServerStatusData`

NewServerStatusDataWithDefaults instantiates a new ServerStatusData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *ServerStatusData) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *ServerStatusData) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *ServerStatusData) SetHeader(v string)`

SetHeader sets Header field to given value.


### GetHostname

`func (o *ServerStatusData) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *ServerStatusData) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *ServerStatusData) SetHostname(v string)`

SetHostname sets Hostname field to given value.


### GetPort

`func (o *ServerStatusData) GetPort() int32`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *ServerStatusData) GetPortOk() (*int32, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *ServerStatusData) SetPort(v int32)`

SetPort sets Port field to given value.


### GetOnline

`func (o *ServerStatusData) GetOnline() bool`

GetOnline returns the Online field if non-nil, zero value otherwise.

### GetOnlineOk

`func (o *ServerStatusData) GetOnlineOk() (*bool, bool)`

GetOnlineOk returns a tuple with the Online field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnline

`func (o *ServerStatusData) SetOnline(v bool)`

SetOnline sets Online field to given value.


### GetPlayers

`func (o *ServerStatusData) GetPlayers() Players`

GetPlayers returns the Players field if non-nil, zero value otherwise.

### GetPlayersOk

`func (o *ServerStatusData) GetPlayersOk() (*Players, bool)`

GetPlayersOk returns a tuple with the Players field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayers

`func (o *ServerStatusData) SetPlayers(v Players)`

SetPlayers sets Players field to given value.


### SetPlayersNil

`func (o *ServerStatusData) SetPlayersNil(b bool)`

 SetPlayersNil sets the value for Players to be an explicit nil

### UnsetPlayers
`func (o *ServerStatusData) UnsetPlayers()`

UnsetPlayers ensures that no value is present for Players, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


