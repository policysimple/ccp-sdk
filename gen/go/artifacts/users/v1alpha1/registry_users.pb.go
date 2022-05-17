// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: artifacts/users/v1alpha1/registry_users.proto

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

type AccessHarbor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Action   string `protobuf:"bytes,1,opt,name=action,proto3" json:"action,omitempty"`
	Resource string `protobuf:"bytes,2,opt,name=resource,proto3" json:"resource,omitempty"`
	Effect   string `protobuf:"bytes,3,opt,name=effect,proto3" json:"effect,omitempty"`
}

func (x *AccessHarbor) Reset() {
	*x = AccessHarbor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessHarbor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessHarbor) ProtoMessage() {}

func (x *AccessHarbor) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessHarbor.ProtoReflect.Descriptor instead.
func (*AccessHarbor) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_proto_rawDescGZIP(), []int{0}
}

func (x *AccessHarbor) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (x *AccessHarbor) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

func (x *AccessHarbor) GetEffect() string {
	if x != nil {
		return x.Effect
	}
	return ""
}

type PermissionsHarbor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Access    []*AccessHarbor `protobuf:"bytes,1,rep,name=access,proto3" json:"access,omitempty"`
	Kind      string          `protobuf:"bytes,2,opt,name=kind,proto3" json:"kind,omitempty"`
	Namespace string          `protobuf:"bytes,3,opt,name=namespace,proto3" json:"namespace,omitempty"`
}

func (x *PermissionsHarbor) Reset() {
	*x = PermissionsHarbor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PermissionsHarbor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PermissionsHarbor) ProtoMessage() {}

func (x *PermissionsHarbor) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PermissionsHarbor.ProtoReflect.Descriptor instead.
func (*PermissionsHarbor) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_proto_rawDescGZIP(), []int{1}
}

func (x *PermissionsHarbor) GetAccess() []*AccessHarbor {
	if x != nil {
		return x.Access
	}
	return nil
}

func (x *PermissionsHarbor) GetKind() string {
	if x != nil {
		return x.Kind
	}
	return ""
}

func (x *PermissionsHarbor) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

type Harbor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Secret            string               `protobuf:"bytes,1,opt,name=secret,proto3" json:"secret,omitempty"`
	Disable           bool                 `protobuf:"varint,2,opt,name=disable,proto3" json:"disable,omitempty"`
	Name              string               `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Level             string               `protobuf:"bytes,4,opt,name=level,proto3" json:"level,omitempty"`
	Duration          uint32               `protobuf:"varint,5,opt,name=duration,proto3" json:"duration,omitempty"`
	Description       string               `protobuf:"bytes,6,opt,name=description,proto3" json:"description,omitempty"`
	PermissionsHarbor []*PermissionsHarbor `protobuf:"bytes,7,rep,name=permissions_harbor,json=permissionsHarbor,proto3" json:"permissions_harbor,omitempty"`
}

func (x *Harbor) Reset() {
	*x = Harbor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Harbor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Harbor) ProtoMessage() {}

func (x *Harbor) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Harbor.ProtoReflect.Descriptor instead.
func (*Harbor) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_proto_rawDescGZIP(), []int{2}
}

func (x *Harbor) GetSecret() string {
	if x != nil {
		return x.Secret
	}
	return ""
}

func (x *Harbor) GetDisable() bool {
	if x != nil {
		return x.Disable
	}
	return false
}

func (x *Harbor) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Harbor) GetLevel() string {
	if x != nil {
		return x.Level
	}
	return ""
}

func (x *Harbor) GetDuration() uint32 {
	if x != nil {
		return x.Duration
	}
	return 0
}

func (x *Harbor) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Harbor) GetPermissionsHarbor() []*PermissionsHarbor {
	if x != nil {
		return x.PermissionsHarbor
	}
	return nil
}

// Environment ...
type UsersRegistry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OrganizationId uint32  `protobuf:"varint,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId      uint32  `protobuf:"varint,3,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	EnvironmentId  string  `protobuf:"bytes,4,opt,name=environment_id,json=environmentId,proto3" json:"environment_id,omitempty"`
	Active         bool    `protobuf:"varint,6,opt,name=active,proto3" json:"active,omitempty"`
	Harbor         *Harbor `protobuf:"bytes,7,opt,name=harbor,proto3" json:"harbor,omitempty"`
}

func (x *UsersRegistry) Reset() {
	*x = UsersRegistry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UsersRegistry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UsersRegistry) ProtoMessage() {}

func (x *UsersRegistry) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UsersRegistry.ProtoReflect.Descriptor instead.
func (*UsersRegistry) Descriptor() ([]byte, []int) {
	return file_artifacts_users_v1alpha1_registry_users_proto_rawDescGZIP(), []int{3}
}

func (x *UsersRegistry) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UsersRegistry) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *UsersRegistry) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *UsersRegistry) GetEnvironmentId() string {
	if x != nil {
		return x.EnvironmentId
	}
	return ""
}

func (x *UsersRegistry) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

func (x *UsersRegistry) GetHarbor() *Harbor {
	if x != nil {
		return x.Harbor
	}
	return nil
}

var File_artifacts_users_v1alpha1_registry_users_proto protoreflect.FileDescriptor

var file_artifacts_users_v1alpha1_registry_users_proto_rawDesc = []byte{
	0x0a, 0x2d, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72,
	0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x18, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x5a, 0x0a, 0x0c, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x65, 0x66, 0x66, 0x65, 0x63, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x65,
	0x66, 0x66, 0x65, 0x63, 0x74, 0x22, 0x85, 0x01, 0x0a, 0x11, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x12, 0x3e, 0x0a, 0x06, 0x61,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x61, 0x72,
	0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x48, 0x61, 0x72,
	0x62, 0x6f, 0x72, 0x52, 0x06, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6b,
	0x69, 0x6e, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12,
	0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x22, 0xfe, 0x01,
	0x0a, 0x06, 0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x65, 0x63, 0x72,
	0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74,
	0x12, 0x18, 0x0a, 0x07, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x07, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6c,
	0x65, 0x76, 0x65, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x5a, 0x0a, 0x12, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x73, 0x5f, 0x68, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2b,
	0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x52, 0x11, 0x70, 0x65, 0x72,
	0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x22, 0xe0,
	0x01, 0x0a, 0x0d, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12,
	0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x38, 0x0a, 0x06, 0x68, 0x61, 0x72, 0x62, 0x6f,
	0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61,
	0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x52, 0x06, 0x68, 0x61, 0x72, 0x62, 0x6f,
	0x72, 0x42, 0xb1, 0x01, 0x0a, 0x22, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e,
	0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x12, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x55, 0x73, 0x65, 0x72, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x39,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62,
	0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f,
	0x2f, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73,
	0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa,
	0x02, 0x18, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x55, 0x73, 0x65, 0x72,
	0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x18, 0x41, 0x72, 0x74,
	0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x5c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x5c, 0x56, 0x31, 0x41,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_artifacts_users_v1alpha1_registry_users_proto_rawDescOnce sync.Once
	file_artifacts_users_v1alpha1_registry_users_proto_rawDescData = file_artifacts_users_v1alpha1_registry_users_proto_rawDesc
)

func file_artifacts_users_v1alpha1_registry_users_proto_rawDescGZIP() []byte {
	file_artifacts_users_v1alpha1_registry_users_proto_rawDescOnce.Do(func() {
		file_artifacts_users_v1alpha1_registry_users_proto_rawDescData = protoimpl.X.CompressGZIP(file_artifacts_users_v1alpha1_registry_users_proto_rawDescData)
	})
	return file_artifacts_users_v1alpha1_registry_users_proto_rawDescData
}

var file_artifacts_users_v1alpha1_registry_users_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_artifacts_users_v1alpha1_registry_users_proto_goTypes = []interface{}{
	(*AccessHarbor)(nil),      // 0: artifacts.users.v1alpha1.AccessHarbor
	(*PermissionsHarbor)(nil), // 1: artifacts.users.v1alpha1.PermissionsHarbor
	(*Harbor)(nil),            // 2: artifacts.users.v1alpha1.Harbor
	(*UsersRegistry)(nil),     // 3: artifacts.users.v1alpha1.UsersRegistry
}
var file_artifacts_users_v1alpha1_registry_users_proto_depIdxs = []int32{
	0, // 0: artifacts.users.v1alpha1.PermissionsHarbor.access:type_name -> artifacts.users.v1alpha1.AccessHarbor
	1, // 1: artifacts.users.v1alpha1.Harbor.permissions_harbor:type_name -> artifacts.users.v1alpha1.PermissionsHarbor
	2, // 2: artifacts.users.v1alpha1.UsersRegistry.harbor:type_name -> artifacts.users.v1alpha1.Harbor
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_artifacts_users_v1alpha1_registry_users_proto_init() }
func file_artifacts_users_v1alpha1_registry_users_proto_init() {
	if File_artifacts_users_v1alpha1_registry_users_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessHarbor); i {
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
		file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PermissionsHarbor); i {
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
		file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Harbor); i {
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
		file_artifacts_users_v1alpha1_registry_users_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UsersRegistry); i {
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
			RawDescriptor: file_artifacts_users_v1alpha1_registry_users_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_artifacts_users_v1alpha1_registry_users_proto_goTypes,
		DependencyIndexes: file_artifacts_users_v1alpha1_registry_users_proto_depIdxs,
		MessageInfos:      file_artifacts_users_v1alpha1_registry_users_proto_msgTypes,
	}.Build()
	File_artifacts_users_v1alpha1_registry_users_proto = out.File
	file_artifacts_users_v1alpha1_registry_users_proto_rawDesc = nil
	file_artifacts_users_v1alpha1_registry_users_proto_goTypes = nil
	file_artifacts_users_v1alpha1_registry_users_proto_depIdxs = nil
}
