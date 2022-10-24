// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: accounts/v1alpha1/apikeys/apikeys.proto

package apikeys

import (
	v1alpha1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateApiKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name           string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	UserId         string   `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	PermissionsIds []uint32 `protobuf:"varint,4,rep,packed,name=permissions_ids,json=permissionsIds,proto3" json:"permissions_ids,omitempty"`
	OrganizationId uint32   `protobuf:"varint,5,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	IsActive       bool     `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	ProjectId      uint32   `protobuf:"varint,7,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	ExpiredAt      string   `protobuf:"bytes,8,opt,name=expired_at,json=expiredAt,proto3" json:"expired_at,omitempty"`
}

func (x *CreateApiKeyRequest) Reset() {
	*x = CreateApiKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateApiKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateApiKeyRequest) ProtoMessage() {}

func (x *CreateApiKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateApiKeyRequest.ProtoReflect.Descriptor instead.
func (*CreateApiKeyRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{0}
}

func (x *CreateApiKeyRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateApiKeyRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *CreateApiKeyRequest) GetPermissionsIds() []uint32 {
	if x != nil {
		return x.PermissionsIds
	}
	return nil
}

func (x *CreateApiKeyRequest) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *CreateApiKeyRequest) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *CreateApiKeyRequest) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *CreateApiKeyRequest) GetExpiredAt() string {
	if x != nil {
		return x.ExpiredAt
	}
	return ""
}

type CreateApiKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg    string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
	ApiKey string `protobuf:"bytes,2,opt,name=api_key,json=apiKey,proto3" json:"api_key,omitempty"`
	Uuid   string `protobuf:"bytes,4,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Error  string `protobuf:"bytes,5,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *CreateApiKeyResponse) Reset() {
	*x = CreateApiKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateApiKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateApiKeyResponse) ProtoMessage() {}

func (x *CreateApiKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateApiKeyResponse.ProtoReflect.Descriptor instead.
func (*CreateApiKeyResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{1}
}

func (x *CreateApiKeyResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *CreateApiKeyResponse) GetApiKey() string {
	if x != nil {
		return x.ApiKey
	}
	return ""
}

func (x *CreateApiKeyResponse) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *CreateApiKeyResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

type GetOneApiKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid  string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Value string `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *GetOneApiKeyRequest) Reset() {
	*x = GetOneApiKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOneApiKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOneApiKeyRequest) ProtoMessage() {}

func (x *GetOneApiKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOneApiKeyRequest.ProtoReflect.Descriptor instead.
func (*GetOneApiKeyRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{2}
}

func (x *GetOneApiKeyRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *GetOneApiKeyRequest) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

type GetOneApiKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid         string                 `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	ApiKey       string                 `protobuf:"bytes,2,opt,name=api_key,json=apiKey,proto3" json:"api_key,omitempty"`
	Name         string                 `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	UserId       string                 `protobuf:"bytes,4,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Role         *v1alpha1.Role         `protobuf:"bytes,5,opt,name=role,proto3" json:"role,omitempty"`
	Permissions  []*v1alpha1.Permission `protobuf:"bytes,6,rep,name=permissions,proto3" json:"permissions,omitempty"`
	IsActive     bool                   `protobuf:"varint,8,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	Project      *v1alpha1.Project      `protobuf:"bytes,9,opt,name=project,proto3" json:"project,omitempty"`
	Organization *v1alpha1.Organization `protobuf:"bytes,10,opt,name=organization,proto3" json:"organization,omitempty"`
}

func (x *GetOneApiKeyResponse) Reset() {
	*x = GetOneApiKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOneApiKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOneApiKeyResponse) ProtoMessage() {}

func (x *GetOneApiKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOneApiKeyResponse.ProtoReflect.Descriptor instead.
func (*GetOneApiKeyResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{3}
}

func (x *GetOneApiKeyResponse) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *GetOneApiKeyResponse) GetApiKey() string {
	if x != nil {
		return x.ApiKey
	}
	return ""
}

func (x *GetOneApiKeyResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetOneApiKeyResponse) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *GetOneApiKeyResponse) GetRole() *v1alpha1.Role {
	if x != nil {
		return x.Role
	}
	return nil
}

func (x *GetOneApiKeyResponse) GetPermissions() []*v1alpha1.Permission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

func (x *GetOneApiKeyResponse) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *GetOneApiKeyResponse) GetProject() *v1alpha1.Project {
	if x != nil {
		return x.Project
	}
	return nil
}

func (x *GetOneApiKeyResponse) GetOrganization() *v1alpha1.Organization {
	if x != nil {
		return x.Organization
	}
	return nil
}

//
// Tokens List
type ListApiKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId         string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	OrganizationId uint32 `protobuf:"varint,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
}

func (x *ListApiKeyRequest) Reset() {
	*x = ListApiKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListApiKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListApiKeyRequest) ProtoMessage() {}

func (x *ListApiKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListApiKeyRequest.ProtoReflect.Descriptor instead.
func (*ListApiKeyRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{4}
}

func (x *ListApiKeyRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *ListApiKeyRequest) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

type ApiKeyList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid         string                 `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	ApiKey       string                 `protobuf:"bytes,2,opt,name=api_key,json=apiKey,proto3" json:"api_key,omitempty"`
	Name         string                 `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	UserId       string                 `protobuf:"bytes,4,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	IsActive     bool                   `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	Project      *v1alpha1.Project      `protobuf:"bytes,7,opt,name=project,proto3" json:"project,omitempty"`
	Organization *v1alpha1.Organization `protobuf:"bytes,8,opt,name=organization,proto3" json:"organization,omitempty"`
}

func (x *ApiKeyList) Reset() {
	*x = ApiKeyList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiKeyList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiKeyList) ProtoMessage() {}

func (x *ApiKeyList) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiKeyList.ProtoReflect.Descriptor instead.
func (*ApiKeyList) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{5}
}

func (x *ApiKeyList) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ApiKeyList) GetApiKey() string {
	if x != nil {
		return x.ApiKey
	}
	return ""
}

func (x *ApiKeyList) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ApiKeyList) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *ApiKeyList) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *ApiKeyList) GetProject() *v1alpha1.Project {
	if x != nil {
		return x.Project
	}
	return nil
}

func (x *ApiKeyList) GetOrganization() *v1alpha1.Organization {
	if x != nil {
		return x.Organization
	}
	return nil
}

type ListApiKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApiKeys []*ApiKeyList `protobuf:"bytes,1,rep,name=api_keys,json=apiKeys,proto3" json:"api_keys,omitempty"`
}

func (x *ListApiKeyResponse) Reset() {
	*x = ListApiKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListApiKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListApiKeyResponse) ProtoMessage() {}

func (x *ListApiKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListApiKeyResponse.ProtoReflect.Descriptor instead.
func (*ListApiKeyResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{6}
}

func (x *ListApiKeyResponse) GetApiKeys() []*ApiKeyList {
	if x != nil {
		return x.ApiKeys
	}
	return nil
}

type UpdateApiKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid   string               `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	ApiKey *CreateApiKeyRequest `protobuf:"bytes,6,opt,name=api_key,json=apiKey,proto3" json:"api_key,omitempty"`
}

func (x *UpdateApiKeyRequest) Reset() {
	*x = UpdateApiKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateApiKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateApiKeyRequest) ProtoMessage() {}

func (x *UpdateApiKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateApiKeyRequest.ProtoReflect.Descriptor instead.
func (*UpdateApiKeyRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateApiKeyRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *UpdateApiKeyRequest) GetApiKey() *CreateApiKeyRequest {
	if x != nil {
		return x.ApiKey
	}
	return nil
}

type UpdateApiKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg    string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
	ApiKey string `protobuf:"bytes,2,opt,name=api_key,json=apiKey,proto3" json:"api_key,omitempty"`
	Error  string `protobuf:"bytes,3,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *UpdateApiKeyResponse) Reset() {
	*x = UpdateApiKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateApiKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateApiKeyResponse) ProtoMessage() {}

func (x *UpdateApiKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateApiKeyResponse.ProtoReflect.Descriptor instead.
func (*UpdateApiKeyResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{8}
}

func (x *UpdateApiKeyResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *UpdateApiKeyResponse) GetApiKey() string {
	if x != nil {
		return x.ApiKey
	}
	return ""
}

func (x *UpdateApiKeyResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

type DeleteApiKeyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *DeleteApiKeyRequest) Reset() {
	*x = DeleteApiKeyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteApiKeyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteApiKeyRequest) ProtoMessage() {}

func (x *DeleteApiKeyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteApiKeyRequest.ProtoReflect.Descriptor instead.
func (*DeleteApiKeyRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{9}
}

func (x *DeleteApiKeyRequest) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type DeleteApiKeyResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg    string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
	ApiKey string `protobuf:"bytes,2,opt,name=api_key,json=apiKey,proto3" json:"api_key,omitempty"`
	Error  string `protobuf:"bytes,3,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *DeleteApiKeyResponse) Reset() {
	*x = DeleteApiKeyResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteApiKeyResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteApiKeyResponse) ProtoMessage() {}

func (x *DeleteApiKeyResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteApiKeyResponse.ProtoReflect.Descriptor instead.
func (*DeleteApiKeyResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP(), []int{10}
}

func (x *DeleteApiKeyResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *DeleteApiKeyResponse) GetApiKey() string {
	if x != nil {
		return x.ApiKey
	}
	return ""
}

func (x *DeleteApiKeyResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

var File_accounts_v1alpha1_apikeys_apikeys_proto protoreflect.FileDescriptor

var file_accounts_v1alpha1_apikeys_apikeys_proto_rawDesc = []byte{
	0x0a, 0x27, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2f, 0x61, 0x70, 0x69, 0x6b, 0x65, 0x79, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x6b,
	0x65, 0x79, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x61, 0x70, 0x69,
	0x6b, 0x65, 0x79, 0x73, 0x2e, 0x76, 0x31, 0x1a, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xef, 0x01, 0x0a, 0x13, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x27,
	0x0a, 0x0f, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x69, 0x64,
	0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0d, 0x52, 0x0e, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x73, 0x49, 0x64, 0x73, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64,
	0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x1d, 0x0a,
	0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a,
	0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64, 0x41, 0x74, 0x22, 0x6b, 0x0a, 0x14, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x17, 0x0a, 0x07, 0x61, 0x70, 0x69, 0x5f, 0x6b, 0x65, 0x79,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x12, 0x12,
	0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75,
	0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x3f, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x4f,
	0x6e, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75,
	0x75, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0xf6, 0x02, 0x0a, 0x14, 0x47, 0x65,
	0x74, 0x4f, 0x6e, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x61, 0x70, 0x69, 0x5f, 0x6b, 0x65,
	0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x2b, 0x0a, 0x04,
	0x72, 0x6f, 0x6c, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x04, 0x72, 0x6f, 0x6c, 0x65, 0x12, 0x3f, 0x0a, 0x0b, 0x70, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d,
	0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x70,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73,
	0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69,
	0x73, 0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x34, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x43, 0x0a,
	0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x22, 0x55, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0xfe, 0x01, 0x0a, 0x0a, 0x41, 0x70,
	0x69, 0x4b, 0x65, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07,
	0x61, 0x70, 0x69, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61,
	0x70, 0x69, 0x4b, 0x65, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12,
	0x34, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x43, 0x0a, 0x0c, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e,
	0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c, 0x6f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x59, 0x0a, 0x12, 0x4c, 0x69,
	0x73, 0x74, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x43, 0x0a, 0x08, 0x61, 0x70, 0x69, 0x5f, 0x6b, 0x65, 0x79, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x28, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x6b, 0x65, 0x79, 0x73, 0x2e, 0x76,
	0x31, 0x2e, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x07, 0x61, 0x70,
	0x69, 0x4b, 0x65, 0x79, 0x73, 0x22, 0x75, 0x0a, 0x13, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41,
	0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x12, 0x4a, 0x0a, 0x07, 0x61, 0x70, 0x69, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x31, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x61, 0x70, 0x69, 0x6b, 0x65, 0x79, 0x73, 0x2e, 0x76, 0x31,
	0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x52, 0x06, 0x61, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x22, 0x57, 0x0a, 0x14,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x17, 0x0a, 0x07, 0x61, 0x70, 0x69, 0x5f, 0x6b, 0x65,
	0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x70, 0x69, 0x4b, 0x65, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x29, 0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41,
	0x70, 0x69, 0x4b, 0x65, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x22, 0x57, 0x0a, 0x14, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x70, 0x69, 0x4b, 0x65, 0x79,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x17, 0x0a, 0x07, 0x61, 0x70,
	0x69, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x70, 0x69,
	0x4b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63,
	0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x61, 0x70, 0x69, 0x6b, 0x65, 0x79, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescOnce sync.Once
	file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescData = file_accounts_v1alpha1_apikeys_apikeys_proto_rawDesc
)

func file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescGZIP() []byte {
	file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescOnce.Do(func() {
		file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescData = protoimpl.X.CompressGZIP(file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescData)
	})
	return file_accounts_v1alpha1_apikeys_apikeys_proto_rawDescData
}

var file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_accounts_v1alpha1_apikeys_apikeys_proto_goTypes = []interface{}{
	(*CreateApiKeyRequest)(nil),   // 0: accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest
	(*CreateApiKeyResponse)(nil),  // 1: accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse
	(*GetOneApiKeyRequest)(nil),   // 2: accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest
	(*GetOneApiKeyResponse)(nil),  // 3: accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse
	(*ListApiKeyRequest)(nil),     // 4: accounts.v1alpha1.apikeys.v1.ListApiKeyRequest
	(*ApiKeyList)(nil),            // 5: accounts.v1alpha1.apikeys.v1.ApiKeyList
	(*ListApiKeyResponse)(nil),    // 6: accounts.v1alpha1.apikeys.v1.ListApiKeyResponse
	(*UpdateApiKeyRequest)(nil),   // 7: accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest
	(*UpdateApiKeyResponse)(nil),  // 8: accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse
	(*DeleteApiKeyRequest)(nil),   // 9: accounts.v1alpha1.apikeys.v1.DeleteApiKeyRequest
	(*DeleteApiKeyResponse)(nil),  // 10: accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponse
	(*v1alpha1.Role)(nil),         // 11: accounts.v1alpha1.Role
	(*v1alpha1.Permission)(nil),   // 12: accounts.v1alpha1.Permission
	(*v1alpha1.Project)(nil),      // 13: accounts.v1alpha1.Project
	(*v1alpha1.Organization)(nil), // 14: accounts.v1alpha1.Organization
}
var file_accounts_v1alpha1_apikeys_apikeys_proto_depIdxs = []int32{
	11, // 0: accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.role:type_name -> accounts.v1alpha1.Role
	12, // 1: accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.permissions:type_name -> accounts.v1alpha1.Permission
	13, // 2: accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.project:type_name -> accounts.v1alpha1.Project
	14, // 3: accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse.organization:type_name -> accounts.v1alpha1.Organization
	13, // 4: accounts.v1alpha1.apikeys.v1.ApiKeyList.project:type_name -> accounts.v1alpha1.Project
	14, // 5: accounts.v1alpha1.apikeys.v1.ApiKeyList.organization:type_name -> accounts.v1alpha1.Organization
	5,  // 6: accounts.v1alpha1.apikeys.v1.ListApiKeyResponse.api_keys:type_name -> accounts.v1alpha1.apikeys.v1.ApiKeyList
	0,  // 7: accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest.api_key:type_name -> accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest
	8,  // [8:8] is the sub-list for method output_type
	8,  // [8:8] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_accounts_v1alpha1_apikeys_apikeys_proto_init() }
func file_accounts_v1alpha1_apikeys_apikeys_proto_init() {
	if File_accounts_v1alpha1_apikeys_apikeys_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateApiKeyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateApiKeyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOneApiKeyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOneApiKeyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListApiKeyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiKeyList); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListApiKeyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateApiKeyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateApiKeyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteApiKeyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteApiKeyResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_accounts_v1alpha1_apikeys_apikeys_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_accounts_v1alpha1_apikeys_apikeys_proto_goTypes,
		DependencyIndexes: file_accounts_v1alpha1_apikeys_apikeys_proto_depIdxs,
		MessageInfos:      file_accounts_v1alpha1_apikeys_apikeys_proto_msgTypes,
	}.Build()
	File_accounts_v1alpha1_apikeys_apikeys_proto = out.File
	file_accounts_v1alpha1_apikeys_apikeys_proto_rawDesc = nil
	file_accounts_v1alpha1_apikeys_apikeys_proto_goTypes = nil
	file_accounts_v1alpha1_apikeys_apikeys_proto_depIdxs = nil
}
