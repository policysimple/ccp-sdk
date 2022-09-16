// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.17.3
// source: accounts/v1alpha1/permissions/permissions.proto

package permissions

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

//
// Requests
type ListPermissionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListPermissionRequest) Reset() {
	*x = ListPermissionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPermissionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPermissionRequest) ProtoMessage() {}

func (x *ListPermissionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPermissionRequest.ProtoReflect.Descriptor instead.
func (*ListPermissionRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{0}
}

type CreatePermissionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name     string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Type     string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Category string `protobuf:"bytes,3,opt,name=category,proto3" json:"category,omitempty"`
	Action   string `protobuf:"bytes,4,opt,name=action,proto3" json:"action,omitempty"`
}

func (x *CreatePermissionRequest) Reset() {
	*x = CreatePermissionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreatePermissionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreatePermissionRequest) ProtoMessage() {}

func (x *CreatePermissionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreatePermissionRequest.ProtoReflect.Descriptor instead.
func (*CreatePermissionRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{1}
}

func (x *CreatePermissionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreatePermissionRequest) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *CreatePermissionRequest) GetCategory() string {
	if x != nil {
		return x.Category
	}
	return ""
}

func (x *CreatePermissionRequest) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

type UpdatePermissionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PermissionId uint32 `protobuf:"varint,1,opt,name=permission_id,json=permissionId,proto3" json:"permission_id,omitempty"`
	Name         string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Type         string `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
}

func (x *UpdatePermissionRequest) Reset() {
	*x = UpdatePermissionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePermissionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePermissionRequest) ProtoMessage() {}

func (x *UpdatePermissionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePermissionRequest.ProtoReflect.Descriptor instead.
func (*UpdatePermissionRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{2}
}

func (x *UpdatePermissionRequest) GetPermissionId() uint32 {
	if x != nil {
		return x.PermissionId
	}
	return 0
}

func (x *UpdatePermissionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdatePermissionRequest) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

type GetOnePermissionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PermissionId uint32 `protobuf:"varint,1,opt,name=permission_id,json=permissionId,proto3" json:"permission_id,omitempty"`
}

func (x *GetOnePermissionRequest) Reset() {
	*x = GetOnePermissionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOnePermissionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOnePermissionRequest) ProtoMessage() {}

func (x *GetOnePermissionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOnePermissionRequest.ProtoReflect.Descriptor instead.
func (*GetOnePermissionRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{3}
}

func (x *GetOnePermissionRequest) GetPermissionId() uint32 {
	if x != nil {
		return x.PermissionId
	}
	return 0
}

type GetOnePermissionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Type string `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
}

func (x *GetOnePermissionResponse) Reset() {
	*x = GetOnePermissionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOnePermissionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOnePermissionResponse) ProtoMessage() {}

func (x *GetOnePermissionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOnePermissionResponse.ProtoReflect.Descriptor instead.
func (*GetOnePermissionResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{4}
}

func (x *GetOnePermissionResponse) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *GetOnePermissionResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetOnePermissionResponse) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

type DeletePermissionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PermissionId uint32 `protobuf:"varint,1,opt,name=permission_id,json=permissionId,proto3" json:"permission_id,omitempty"`
}

func (x *DeletePermissionRequest) Reset() {
	*x = DeletePermissionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePermissionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePermissionRequest) ProtoMessage() {}

func (x *DeletePermissionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePermissionRequest.ProtoReflect.Descriptor instead.
func (*DeletePermissionRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{5}
}

func (x *DeletePermissionRequest) GetPermissionId() uint32 {
	if x != nil {
		return x.PermissionId
	}
	return 0
}

//
// Responses
type UpdatePermissionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg   string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
	Error string `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *UpdatePermissionResponse) Reset() {
	*x = UpdatePermissionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdatePermissionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdatePermissionResponse) ProtoMessage() {}

func (x *UpdatePermissionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdatePermissionResponse.ProtoReflect.Descriptor instead.
func (*UpdatePermissionResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{6}
}

func (x *UpdatePermissionResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *UpdatePermissionResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

type DeletePermissionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg   string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
	Error string `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *DeletePermissionResponse) Reset() {
	*x = DeletePermissionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePermissionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePermissionResponse) ProtoMessage() {}

func (x *DeletePermissionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePermissionResponse.ProtoReflect.Descriptor instead.
func (*DeletePermissionResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{7}
}

func (x *DeletePermissionResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *DeletePermissionResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

type CreatePermissionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg   string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
	Error string `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *CreatePermissionResponse) Reset() {
	*x = CreatePermissionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreatePermissionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreatePermissionResponse) ProtoMessage() {}

func (x *CreatePermissionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreatePermissionResponse.ProtoReflect.Descriptor instead.
func (*CreatePermissionResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{8}
}

func (x *CreatePermissionResponse) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *CreatePermissionResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

type ListPermissionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoriesPermissions []*CategoryPermission `protobuf:"bytes,1,rep,name=categories_permissions,json=categoriesPermissions,proto3" json:"categories_permissions,omitempty"`
}

func (x *ListPermissionResponse) Reset() {
	*x = ListPermissionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPermissionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPermissionResponse) ProtoMessage() {}

func (x *ListPermissionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPermissionResponse.ProtoReflect.Descriptor instead.
func (*ListPermissionResponse) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{9}
}

func (x *ListPermissionResponse) GetCategoriesPermissions() []*CategoryPermission {
	if x != nil {
		return x.CategoriesPermissions
	}
	return nil
}

type AssignPermissionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId       uint32 `protobuf:"varint,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	PermissionId uint32 `protobuf:"varint,2,opt,name=permission_id,json=permissionId,proto3" json:"permission_id,omitempty"`
}

func (x *AssignPermissionRequest) Reset() {
	*x = AssignPermissionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssignPermissionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssignPermissionRequest) ProtoMessage() {}

func (x *AssignPermissionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssignPermissionRequest.ProtoReflect.Descriptor instead.
func (*AssignPermissionRequest) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{10}
}

func (x *AssignPermissionRequest) GetUserId() uint32 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *AssignPermissionRequest) GetPermissionId() uint32 {
	if x != nil {
		return x.PermissionId
	}
	return 0
}

type GroupPermission struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string                 `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Permissions []*v1alpha1.Permission `protobuf:"bytes,3,rep,name=permissions,proto3" json:"permissions,omitempty"`
}

func (x *GroupPermission) Reset() {
	*x = GroupPermission{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupPermission) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupPermission) ProtoMessage() {}

func (x *GroupPermission) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupPermission.ProtoReflect.Descriptor instead.
func (*GroupPermission) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{11}
}

func (x *GroupPermission) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GroupPermission) GetPermissions() []*v1alpha1.Permission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

type CategoryPermission struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name             string             `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Type             string             `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	GroupPermissions []*GroupPermission `protobuf:"bytes,3,rep,name=group_permissions,json=groupPermissions,proto3" json:"group_permissions,omitempty"`
}

func (x *CategoryPermission) Reset() {
	*x = CategoryPermission{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CategoryPermission) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CategoryPermission) ProtoMessage() {}

func (x *CategoryPermission) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CategoryPermission.ProtoReflect.Descriptor instead.
func (*CategoryPermission) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP(), []int{12}
}

func (x *CategoryPermission) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CategoryPermission) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *CategoryPermission) GetGroupPermissions() []*GroupPermission {
	if x != nil {
		return x.GroupPermissions
	}
	return nil
}

var File_accounts_v1alpha1_permissions_permissions_proto protoreflect.FileDescriptor

var file_accounts_v1alpha1_permissions_permissions_proto_rawDesc = []byte{
	0x0a, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2f, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2f,
	0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73,
	0x2e, 0x76, 0x31, 0x1a, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x17, 0x0a, 0x15, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x75,
	0x0a, 0x17, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x16, 0x0a,
	0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x66, 0x0a, 0x17, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x23, 0x0a, 0x0d, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0c, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x22, 0x3e, 0x0a,
	0x17, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x70, 0x65, 0x72, 0x6d,
	0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0c, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x52, 0x0a,
	0x18, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x22, 0x3e, 0x0a, 0x17, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d,
	0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x0c, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49,
	0x64, 0x22, 0x42, 0x0a, 0x18, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a,
	0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12,
	0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x42, 0x0a, 0x18, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6d, 0x73, 0x67, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x42, 0x0a, 0x18, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x85, 0x01,
	0x0a, 0x16, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6b, 0x0a, 0x16, 0x63, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x5f, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x34, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x70, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x15,
	0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x57, 0x0a, 0x17, 0x41, 0x73, 0x73, 0x69, 0x67, 0x6e, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x70, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x0c, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x66,
	0x0a, 0x0f, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3f, 0x0a, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x9c, 0x01, 0x0a, 0x12, 0x43, 0x61, 0x74, 0x65, 0x67,
	0x6f, 0x72, 0x79, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x5e, 0x0a, 0x11, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x70,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x31, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73,
	0x2e, 0x76, 0x31, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x52, 0x10, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x42, 0x40, 0x5a, 0x3e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73,
	0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x70, 0x65, 0x72, 0x6d,
	0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_accounts_v1alpha1_permissions_permissions_proto_rawDescOnce sync.Once
	file_accounts_v1alpha1_permissions_permissions_proto_rawDescData = file_accounts_v1alpha1_permissions_permissions_proto_rawDesc
)

func file_accounts_v1alpha1_permissions_permissions_proto_rawDescGZIP() []byte {
	file_accounts_v1alpha1_permissions_permissions_proto_rawDescOnce.Do(func() {
		file_accounts_v1alpha1_permissions_permissions_proto_rawDescData = protoimpl.X.CompressGZIP(file_accounts_v1alpha1_permissions_permissions_proto_rawDescData)
	})
	return file_accounts_v1alpha1_permissions_permissions_proto_rawDescData
}

var file_accounts_v1alpha1_permissions_permissions_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_accounts_v1alpha1_permissions_permissions_proto_goTypes = []interface{}{
	(*ListPermissionRequest)(nil),    // 0: accounts.v1alpha1.permissions.v1.ListPermissionRequest
	(*CreatePermissionRequest)(nil),  // 1: accounts.v1alpha1.permissions.v1.CreatePermissionRequest
	(*UpdatePermissionRequest)(nil),  // 2: accounts.v1alpha1.permissions.v1.UpdatePermissionRequest
	(*GetOnePermissionRequest)(nil),  // 3: accounts.v1alpha1.permissions.v1.GetOnePermissionRequest
	(*GetOnePermissionResponse)(nil), // 4: accounts.v1alpha1.permissions.v1.GetOnePermissionResponse
	(*DeletePermissionRequest)(nil),  // 5: accounts.v1alpha1.permissions.v1.DeletePermissionRequest
	(*UpdatePermissionResponse)(nil), // 6: accounts.v1alpha1.permissions.v1.UpdatePermissionResponse
	(*DeletePermissionResponse)(nil), // 7: accounts.v1alpha1.permissions.v1.DeletePermissionResponse
	(*CreatePermissionResponse)(nil), // 8: accounts.v1alpha1.permissions.v1.CreatePermissionResponse
	(*ListPermissionResponse)(nil),   // 9: accounts.v1alpha1.permissions.v1.ListPermissionResponse
	(*AssignPermissionRequest)(nil),  // 10: accounts.v1alpha1.permissions.v1.AssignPermissionRequest
	(*GroupPermission)(nil),          // 11: accounts.v1alpha1.permissions.v1.GroupPermission
	(*CategoryPermission)(nil),       // 12: accounts.v1alpha1.permissions.v1.CategoryPermission
	(*v1alpha1.Permission)(nil),      // 13: accounts.v1alpha1.Permission
}
var file_accounts_v1alpha1_permissions_permissions_proto_depIdxs = []int32{
	12, // 0: accounts.v1alpha1.permissions.v1.ListPermissionResponse.categories_permissions:type_name -> accounts.v1alpha1.permissions.v1.CategoryPermission
	13, // 1: accounts.v1alpha1.permissions.v1.GroupPermission.permissions:type_name -> accounts.v1alpha1.Permission
	11, // 2: accounts.v1alpha1.permissions.v1.CategoryPermission.group_permissions:type_name -> accounts.v1alpha1.permissions.v1.GroupPermission
	3,  // [3:3] is the sub-list for method output_type
	3,  // [3:3] is the sub-list for method input_type
	3,  // [3:3] is the sub-list for extension type_name
	3,  // [3:3] is the sub-list for extension extendee
	0,  // [0:3] is the sub-list for field type_name
}

func init() { file_accounts_v1alpha1_permissions_permissions_proto_init() }
func file_accounts_v1alpha1_permissions_permissions_proto_init() {
	if File_accounts_v1alpha1_permissions_permissions_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPermissionRequest); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreatePermissionRequest); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdatePermissionRequest); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOnePermissionRequest); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOnePermissionResponse); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePermissionRequest); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdatePermissionResponse); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePermissionResponse); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreatePermissionResponse); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPermissionResponse); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssignPermissionRequest); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GroupPermission); i {
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
		file_accounts_v1alpha1_permissions_permissions_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CategoryPermission); i {
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
			RawDescriptor: file_accounts_v1alpha1_permissions_permissions_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_accounts_v1alpha1_permissions_permissions_proto_goTypes,
		DependencyIndexes: file_accounts_v1alpha1_permissions_permissions_proto_depIdxs,
		MessageInfos:      file_accounts_v1alpha1_permissions_permissions_proto_msgTypes,
	}.Build()
	File_accounts_v1alpha1_permissions_permissions_proto = out.File
	file_accounts_v1alpha1_permissions_permissions_proto_rawDesc = nil
	file_accounts_v1alpha1_permissions_permissions_proto_goTypes = nil
	file_accounts_v1alpha1_permissions_permissions_proto_depIdxs = nil
}
