// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.17.3
// source: accounts/v1alpha1/accounts.proto

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

type Role struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             uint32        `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name           string        `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	ProjectId      uint32        `protobuf:"varint,3,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	OrganizationId uint32        `protobuf:"varint,4,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	Permissions    []*Permission `protobuf:"bytes,5,rep,name=permissions,proto3" json:"permissions,omitempty"`
	IsAdmin        bool          `protobuf:"varint,6,opt,name=is_admin,json=isAdmin,proto3" json:"is_admin,omitempty"`
}

func (x *Role) Reset() {
	*x = Role{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Role) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Role) ProtoMessage() {}

func (x *Role) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Role.ProtoReflect.Descriptor instead.
func (*Role) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_accounts_proto_rawDescGZIP(), []int{0}
}

func (x *Role) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Role) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Role) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *Role) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Role) GetPermissions() []*Permission {
	if x != nil {
		return x.Permissions
	}
	return nil
}

func (x *Role) GetIsAdmin() bool {
	if x != nil {
		return x.IsAdmin
	}
	return false
}

type UserList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	FirstName   string `protobuf:"bytes,2,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	LastName    string `protobuf:"bytes,3,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	Email       string `protobuf:"bytes,4,opt,name=email,proto3" json:"email,omitempty"`
	UserId      string `protobuf:"bytes,5,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	IsActive    bool   `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	IsSuperUser bool   `protobuf:"varint,7,opt,name=is_super_user,json=isSuperUser,proto3" json:"is_super_user,omitempty"`
}

func (x *UserList) Reset() {
	*x = UserList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserList) ProtoMessage() {}

func (x *UserList) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserList.ProtoReflect.Descriptor instead.
func (*UserList) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_accounts_proto_rawDescGZIP(), []int{1}
}

func (x *UserList) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UserList) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *UserList) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *UserList) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *UserList) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *UserList) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *UserList) GetIsSuperUser() bool {
	if x != nil {
		return x.IsSuperUser
	}
	return false
}

type MemberRol struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id      uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name    string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	IsAdmin bool   `protobuf:"varint,3,opt,name=is_admin,json=isAdmin,proto3" json:"is_admin,omitempty"`
}

func (x *MemberRol) Reset() {
	*x = MemberRol{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MemberRol) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MemberRol) ProtoMessage() {}

func (x *MemberRol) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MemberRol.ProtoReflect.Descriptor instead.
func (*MemberRol) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_accounts_proto_rawDescGZIP(), []int{2}
}

func (x *MemberRol) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *MemberRol) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *MemberRol) GetIsAdmin() bool {
	if x != nil {
		return x.IsAdmin
	}
	return false
}

type Permission struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Action   string `protobuf:"bytes,3,opt,name=action,proto3" json:"action,omitempty"`
	Type     string `protobuf:"bytes,4,opt,name=type,proto3" json:"type,omitempty"`
	FullName string `protobuf:"bytes,5,opt,name=full_name,json=fullName,proto3" json:"full_name,omitempty"`
}

func (x *Permission) Reset() {
	*x = Permission{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Permission) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Permission) ProtoMessage() {}

func (x *Permission) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Permission.ProtoReflect.Descriptor instead.
func (*Permission) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_accounts_proto_rawDescGZIP(), []int{3}
}

func (x *Permission) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Permission) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Permission) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (x *Permission) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Permission) GetFullName() string {
	if x != nil {
		return x.FullName
	}
	return ""
}

type Project struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             int32       `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name           string      `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Image          string      `protobuf:"bytes,3,opt,name=image,proto3" json:"image,omitempty"`
	OrganizationId uint32      `protobuf:"varint,4,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	Description    string      `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	CreatedAt      string      `protobuf:"bytes,6,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt      string      `protobuf:"bytes,7,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	Roles          []*Role     `protobuf:"bytes,8,rep,name=roles,proto3" json:"roles,omitempty"`
	Users          []*UserList `protobuf:"bytes,9,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *Project) Reset() {
	*x = Project{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Project) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Project) ProtoMessage() {}

func (x *Project) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Project.ProtoReflect.Descriptor instead.
func (*Project) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_accounts_proto_rawDescGZIP(), []int{4}
}

func (x *Project) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Project) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Project) GetImage() string {
	if x != nil {
		return x.Image
	}
	return ""
}

func (x *Project) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Project) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Project) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *Project) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

func (x *Project) GetRoles() []*Role {
	if x != nil {
		return x.Roles
	}
	return nil
}

func (x *Project) GetUsers() []*UserList {
	if x != nil {
		return x.Users
	}
	return nil
}

type Organization struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          uint32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string    `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Image       string    `protobuf:"bytes,3,opt,name=image,proto3" json:"image,omitempty"`
	Description string    `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Owner       *UserList `protobuf:"bytes,7,opt,name=owner,proto3" json:"owner,omitempty"`
	Roles       []*Role   `protobuf:"bytes,8,rep,name=roles,proto3" json:"roles,omitempty"`
	Slug        string    `protobuf:"bytes,9,opt,name=slug,proto3" json:"slug,omitempty"`
}

func (x *Organization) Reset() {
	*x = Organization{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Organization) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Organization) ProtoMessage() {}

func (x *Organization) ProtoReflect() protoreflect.Message {
	mi := &file_accounts_v1alpha1_accounts_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Organization.ProtoReflect.Descriptor instead.
func (*Organization) Descriptor() ([]byte, []int) {
	return file_accounts_v1alpha1_accounts_proto_rawDescGZIP(), []int{5}
}

func (x *Organization) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Organization) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Organization) GetImage() string {
	if x != nil {
		return x.Image
	}
	return ""
}

func (x *Organization) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Organization) GetOwner() *UserList {
	if x != nil {
		return x.Owner
	}
	return nil
}

func (x *Organization) GetRoles() []*Role {
	if x != nil {
		return x.Roles
	}
	return nil
}

func (x *Organization) GetSlug() string {
	if x != nil {
		return x.Slug
	}
	return ""
}

var File_accounts_v1alpha1_accounts_proto protoreflect.FileDescriptor

var file_accounts_v1alpha1_accounts_proto_rawDesc = []byte{
	0x0a, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x11, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0xce, 0x01, 0x0a, 0x04, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49,
	0x64, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x3f, 0x0a, 0x0b, 0x70, 0x65,
	0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x1d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x0b,
	0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x19, 0x0a, 0x08, 0x69,
	0x73, 0x5f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x69,
	0x73, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x22, 0xc6, 0x01, 0x0a, 0x08, 0x55, 0x73, 0x65, 0x72, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x66, 0x69, 0x72, 0x73, 0x74, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x66, 0x69, 0x72, 0x73, 0x74, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x61, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12,
	0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x1b,
	0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x22, 0x0a, 0x0d, 0x69,
	0x73, 0x5f, 0x73, 0x75, 0x70, 0x65, 0x72, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x0b, 0x69, 0x73, 0x53, 0x75, 0x70, 0x65, 0x72, 0x55, 0x73, 0x65, 0x72, 0x22,
	0x4a, 0x0a, 0x09, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x52, 0x6f, 0x6c, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x19, 0x0a, 0x08, 0x69, 0x73, 0x5f, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x07, 0x69, 0x73, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x22, 0x79, 0x0a, 0x0a, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x75, 0x6c,
	0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x75,
	0x6c, 0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0xae, 0x02, 0x0a, 0x07, 0x50, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x27, 0x0a, 0x0f,
	0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x2d, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x18, 0x08,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x05, 0x72,
	0x6f, 0x6c, 0x65, 0x73, 0x12, 0x31, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x18, 0x09, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x22, 0xe0, 0x01, 0x0a, 0x0c, 0x4f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x69, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6d, 0x61,
	0x67, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x31, 0x0a, 0x05, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x05, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x12, 0x2d, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73,
	0x18, 0x08, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x6f, 0x6c, 0x65, 0x52,
	0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x6c, 0x75, 0x67, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6c, 0x75, 0x67, 0x42, 0x34, 0x5a, 0x32, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f,
	0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_accounts_v1alpha1_accounts_proto_rawDescOnce sync.Once
	file_accounts_v1alpha1_accounts_proto_rawDescData = file_accounts_v1alpha1_accounts_proto_rawDesc
)

func file_accounts_v1alpha1_accounts_proto_rawDescGZIP() []byte {
	file_accounts_v1alpha1_accounts_proto_rawDescOnce.Do(func() {
		file_accounts_v1alpha1_accounts_proto_rawDescData = protoimpl.X.CompressGZIP(file_accounts_v1alpha1_accounts_proto_rawDescData)
	})
	return file_accounts_v1alpha1_accounts_proto_rawDescData
}

var file_accounts_v1alpha1_accounts_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_accounts_v1alpha1_accounts_proto_goTypes = []interface{}{
	(*Role)(nil),         // 0: accounts.v1alpha1.Role
	(*UserList)(nil),     // 1: accounts.v1alpha1.UserList
	(*MemberRol)(nil),    // 2: accounts.v1alpha1.MemberRol
	(*Permission)(nil),   // 3: accounts.v1alpha1.Permission
	(*Project)(nil),      // 4: accounts.v1alpha1.Project
	(*Organization)(nil), // 5: accounts.v1alpha1.Organization
}
var file_accounts_v1alpha1_accounts_proto_depIdxs = []int32{
	3, // 0: accounts.v1alpha1.Role.permissions:type_name -> accounts.v1alpha1.Permission
	0, // 1: accounts.v1alpha1.Project.roles:type_name -> accounts.v1alpha1.Role
	1, // 2: accounts.v1alpha1.Project.users:type_name -> accounts.v1alpha1.UserList
	1, // 3: accounts.v1alpha1.Organization.owner:type_name -> accounts.v1alpha1.UserList
	0, // 4: accounts.v1alpha1.Organization.roles:type_name -> accounts.v1alpha1.Role
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_accounts_v1alpha1_accounts_proto_init() }
func file_accounts_v1alpha1_accounts_proto_init() {
	if File_accounts_v1alpha1_accounts_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_accounts_v1alpha1_accounts_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Role); i {
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
		file_accounts_v1alpha1_accounts_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserList); i {
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
		file_accounts_v1alpha1_accounts_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MemberRol); i {
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
		file_accounts_v1alpha1_accounts_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Permission); i {
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
		file_accounts_v1alpha1_accounts_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Project); i {
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
		file_accounts_v1alpha1_accounts_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Organization); i {
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
			RawDescriptor: file_accounts_v1alpha1_accounts_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_accounts_v1alpha1_accounts_proto_goTypes,
		DependencyIndexes: file_accounts_v1alpha1_accounts_proto_depIdxs,
		MessageInfos:      file_accounts_v1alpha1_accounts_proto_msgTypes,
	}.Build()
	File_accounts_v1alpha1_accounts_proto = out.File
	file_accounts_v1alpha1_accounts_proto_rawDesc = nil
	file_accounts_v1alpha1_accounts_proto_goTypes = nil
	file_accounts_v1alpha1_accounts_proto_depIdxs = nil
}
