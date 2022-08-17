// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: artifacts/users/v1alpha1/registry_users_api.proto

package v1alpha1

import (
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

type CreateUserRegistryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserRegistry *UsersRegistry `protobuf:"bytes,1,opt,name=user_registry,json=userRegistry,proto3" json:"user_registry,omitempty"`
}

func (x *CreateUserRegistryRequest) Reset() {
	*x = CreateUserRegistryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateUserRegistryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateUserRegistryRequest) ProtoMessage() {}

func (x *CreateUserRegistryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateUserRegistryRequest.ProtoReflect.Descriptor instead.
func (*CreateUserRegistryRequest) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescGZIP(), []int{0}
}

func (x *CreateUserRegistryRequest) GetUserRegistry() *UsersRegistry {
	if x != nil {
		return x.UserRegistry
	}
	return nil
}

type CreateUserRegistryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserRegistry *UsersRegistry `protobuf:"bytes,1,opt,name=user_registry,json=userRegistry,proto3" json:"user_registry,omitempty"`
	Status       string         `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *CreateUserRegistryResponse) Reset() {
	*x = CreateUserRegistryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateUserRegistryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateUserRegistryResponse) ProtoMessage() {}

func (x *CreateUserRegistryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateUserRegistryResponse.ProtoReflect.Descriptor instead.
func (*CreateUserRegistryResponse) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescGZIP(), []int{1}
}

func (x *CreateUserRegistryResponse) GetUserRegistry() *UsersRegistry {
	if x != nil {
		return x.UserRegistry
	}
	return nil
}

func (x *CreateUserRegistryResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type DeleteUserRegistryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserRegistryId uint32 `protobuf:"varint,1,opt,name=user_registry_id,json=userRegistryId,proto3" json:"user_registry_id,omitempty"`
}

func (x *DeleteUserRegistryRequest) Reset() {
	*x = DeleteUserRegistryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteUserRegistryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteUserRegistryRequest) ProtoMessage() {}

func (x *DeleteUserRegistryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteUserRegistryRequest.ProtoReflect.Descriptor instead.
func (*DeleteUserRegistryRequest) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescGZIP(), []int{2}
}

func (x *DeleteUserRegistryRequest) GetUserRegistryId() uint32 {
	if x != nil {
		return x.UserRegistryId
	}
	return 0
}

type DeleteUserRegistryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status string `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *DeleteUserRegistryResponse) Reset() {
	*x = DeleteUserRegistryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteUserRegistryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteUserRegistryResponse) ProtoMessage() {}

func (x *DeleteUserRegistryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteUserRegistryResponse.ProtoReflect.Descriptor instead.
func (*DeleteUserRegistryResponse) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescGZIP(), []int{3}
}

func (x *DeleteUserRegistryResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

var File_artifacts_users_v1alpha1_registry_users_api_proto protoreflect.FileDescriptor

var file_artifacts_users_v1alpha1_registry_users_api_proto_rawDesc = []byte{
	0x0a, 0x31, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72,
	0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x18, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75,
	0x73, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x2d, 0x61,
	0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2f, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79,
	0x5f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x69, 0x0a, 0x19,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x4c, 0x0a, 0x0d, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x27, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x55, 0x73, 0x65, 0x72,
	0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x52,
	0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x22, 0x82, 0x01, 0x0a, 0x1a, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4c, 0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x72,
	0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e,
	0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x72, 0x79, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x45, 0x0a, 0x19,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x10, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x0e, 0x75, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72,
	0x79, 0x49, 0x64, 0x22, 0x34, 0x0a, 0x1a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65,
	0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x32, 0x9b, 0x02, 0x0a, 0x17, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x55, 0x73, 0x65, 0x72, 0x73, 0x41, 0x50, 0x49, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x7f, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12, 0x33, 0x2e, 0x61, 0x72,
	0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65,
	0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x34, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65,
	0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x7f, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12, 0x33, 0x2e, 0x61,
	0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x34, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73,
	0x65, 0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0xb4, 0x01, 0x0a, 0x22, 0x69, 0x6f, 0x2e, 0x63,
	0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e,
	0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x15,
	0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x55, 0x73, 0x65, 0x72, 0x73, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x41, 0x50, 0x49, 0x50, 0x01, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73,
	0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61,
	0x63, 0x74, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa, 0x02, 0x18, 0x41, 0x72, 0x74, 0x69, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0xca, 0x02, 0x18, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x5c,
	0x55, 0x73, 0x65, 0x72, 0x73, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescOnce sync.Once
	file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescData = file_artifacts_users_v1alpha1_registry_users_api_proto_rawDesc
)

func file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescGZIP() []byte {
	file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescOnce.Do(func() {
		file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescData)
	})
	return file_artifacts_users_v1alpha1_registry_users_api_proto_rawDescData
}

var file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_artifacts_users_v1alpha1_registry_users_api_proto_goTypes = []interface{}{
	(*CreateUserRegistryRequest)(nil),  // 0: artifacts.users.v1alpha1.CreateUserRegistryRequest
	(*CreateUserRegistryResponse)(nil), // 1: artifacts.users.v1alpha1.CreateUserRegistryResponse
	(*DeleteUserRegistryRequest)(nil),  // 2: artifacts.users.v1alpha1.DeleteUserRegistryRequest
	(*DeleteUserRegistryResponse)(nil), // 3: artifacts.users.v1alpha1.DeleteUserRegistryResponse
	(*UsersRegistry)(nil),              // 4: artifacts.users.v1alpha1.UsersRegistry
}
var file_artifacts_users_v1alpha1_registry_users_api_proto_depIdxs = []int32{
	4, // 0: artifacts.users.v1alpha1.CreateUserRegistryRequest.user_registry:type_name -> artifacts.users.v1alpha1.UsersRegistry
	4, // 1: artifacts.users.v1alpha1.CreateUserRegistryResponse.user_registry:type_name -> artifacts.users.v1alpha1.UsersRegistry
	0, // 2: artifacts.users.v1alpha1.RegistryUsersAPIService.CreateUserRegistry:input_type -> artifacts.users.v1alpha1.CreateUserRegistryRequest
	2, // 3: artifacts.users.v1alpha1.RegistryUsersAPIService.DeleteUserRegistry:input_type -> artifacts.users.v1alpha1.DeleteUserRegistryRequest
	1, // 4: artifacts.users.v1alpha1.RegistryUsersAPIService.CreateUserRegistry:output_type -> artifacts.users.v1alpha1.CreateUserRegistryResponse
	3, // 5: artifacts.users.v1alpha1.RegistryUsersAPIService.DeleteUserRegistry:output_type -> artifacts.users.v1alpha1.DeleteUserRegistryResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_artifacts_users_v1alpha1_registry_users_api_proto_init() }
func file_artifacts_users_v1alpha1_registry_users_api_proto_init() {
	if File_artifacts_users_v1alpha1_registry_users_api_proto != nil {
		return
	}
	file_artifacts_users_v1alpha1_registry_users_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateUserRegistryRequest); i {
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
		file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateUserRegistryResponse); i {
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
		file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteUserRegistryRequest); i {
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
		file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteUserRegistryResponse); i {
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
			RawDescriptor: file_artifacts_users_v1alpha1_registry_users_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_artifacts_users_v1alpha1_registry_users_api_proto_goTypes,
		DependencyIndexes: file_artifacts_users_v1alpha1_registry_users_api_proto_depIdxs,
		MessageInfos:      file_artifacts_users_v1alpha1_registry_users_api_proto_msgTypes,
	}.Build()
	File_artifacts_users_v1alpha1_registry_users_api_proto = out.File
	file_artifacts_users_v1alpha1_registry_users_api_proto_rawDesc = nil
	file_artifacts_users_v1alpha1_registry_users_api_proto_goTypes = nil
	file_artifacts_users_v1alpha1_registry_users_api_proto_depIdxs = nil
}
