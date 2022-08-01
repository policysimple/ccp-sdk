// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: vault/v1alpha1/vault.proto

package vaultv1alpha1

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

// Vault secrets ...
type Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Key            string `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	CreatedTime    string `protobuf:"bytes,2,opt,name=created_time,json=createdTime,proto3" json:"created_time,omitempty"`
	CustomMetadata string `protobuf:"bytes,3,opt,name=custom_metadata,json=customMetadata,proto3" json:"custom_metadata,omitempty"`
	DeletionTime   string `protobuf:"bytes,4,opt,name=deletion_time,json=deletionTime,proto3" json:"deletion_time,omitempty"`
	Destroyed      bool   `protobuf:"varint,5,opt,name=destroyed,proto3" json:"destroyed,omitempty"`
	Version        int32  `protobuf:"varint,6,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *Metadata) Reset() {
	*x = Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vault_v1alpha1_vault_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Metadata) ProtoMessage() {}

func (x *Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_vault_v1alpha1_vault_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Metadata.ProtoReflect.Descriptor instead.
func (*Metadata) Descriptor() ([]byte, []int) {
	return file_vault_v1alpha1_vault_proto_rawDescGZIP(), []int{0}
}

func (x *Metadata) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *Metadata) GetCreatedTime() string {
	if x != nil {
		return x.CreatedTime
	}
	return ""
}

func (x *Metadata) GetCustomMetadata() string {
	if x != nil {
		return x.CustomMetadata
	}
	return ""
}

func (x *Metadata) GetDeletionTime() string {
	if x != nil {
		return x.DeletionTime
	}
	return ""
}

func (x *Metadata) GetDestroyed() bool {
	if x != nil {
		return x.Destroyed
	}
	return false
}

func (x *Metadata) GetVersion() int32 {
	if x != nil {
		return x.Version
	}
	return 0
}

type SecretData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data map[string]string `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *SecretData) Reset() {
	*x = SecretData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vault_v1alpha1_vault_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SecretData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SecretData) ProtoMessage() {}

func (x *SecretData) ProtoReflect() protoreflect.Message {
	mi := &file_vault_v1alpha1_vault_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SecretData.ProtoReflect.Descriptor instead.
func (*SecretData) Descriptor() ([]byte, []int) {
	return file_vault_v1alpha1_vault_proto_rawDescGZIP(), []int{1}
}

func (x *SecretData) GetData() map[string]string {
	if x != nil {
		return x.Data
	}
	return nil
}

type SecretWarnings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Warnings []string `protobuf:"bytes,1,rep,name=warnings,proto3" json:"warnings,omitempty"`
}

func (x *SecretWarnings) Reset() {
	*x = SecretWarnings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vault_v1alpha1_vault_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SecretWarnings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SecretWarnings) ProtoMessage() {}

func (x *SecretWarnings) ProtoReflect() protoreflect.Message {
	mi := &file_vault_v1alpha1_vault_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SecretWarnings.ProtoReflect.Descriptor instead.
func (*SecretWarnings) Descriptor() ([]byte, []int) {
	return file_vault_v1alpha1_vault_proto_rawDescGZIP(), []int{2}
}

func (x *SecretWarnings) GetWarnings() []string {
	if x != nil {
		return x.Warnings
	}
	return nil
}

type Secret struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OrganizationId uint32          `protobuf:"varint,1,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId      uint32          `protobuf:"varint,2,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	ApplicationId  string          `protobuf:"bytes,3,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
	Namespace      string          `protobuf:"bytes,4,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Metadata       *Metadata       `protobuf:"bytes,5,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Data           *SecretData     `protobuf:"bytes,6,opt,name=data,proto3" json:"data,omitempty"`
	Warnings       *SecretWarnings `protobuf:"bytes,7,opt,name=warnings,proto3" json:"warnings,omitempty"`
}

func (x *Secret) Reset() {
	*x = Secret{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vault_v1alpha1_vault_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Secret) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Secret) ProtoMessage() {}

func (x *Secret) ProtoReflect() protoreflect.Message {
	mi := &file_vault_v1alpha1_vault_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Secret.ProtoReflect.Descriptor instead.
func (*Secret) Descriptor() ([]byte, []int) {
	return file_vault_v1alpha1_vault_proto_rawDescGZIP(), []int{3}
}

func (x *Secret) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Secret) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *Secret) GetApplicationId() string {
	if x != nil {
		return x.ApplicationId
	}
	return ""
}

func (x *Secret) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *Secret) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *Secret) GetData() *SecretData {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *Secret) GetWarnings() *SecretWarnings {
	if x != nil {
		return x.Warnings
	}
	return nil
}

var File_vault_v1alpha1_vault_proto protoreflect.FileDescriptor

var file_vault_v1alpha1_vault_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x76, 0x61, 0x75, 0x6c, 0x74, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2f, 0x76, 0x61, 0x75, 0x6c, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x76, 0x61,
	0x75, 0x6c, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0xc5, 0x01, 0x0a,
	0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x21, 0x0a, 0x0c, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x27,
	0x0a, 0x0f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x23, 0x0a, 0x0d, 0x64, 0x65, 0x6c, 0x65, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c,
	0x64, 0x65, 0x6c, 0x65, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09,
	0x64, 0x65, 0x73, 0x74, 0x72, 0x6f, 0x79, 0x65, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x09, 0x64, 0x65, 0x73, 0x74, 0x72, 0x6f, 0x79, 0x65, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65,
	0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x76, 0x65, 0x72,
	0x73, 0x69, 0x6f, 0x6e, 0x22, 0x7f, 0x0a, 0x0a, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x44, 0x61,
	0x74, 0x61, 0x12, 0x38, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x24, 0x2e, 0x76, 0x61, 0x75, 0x6c, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x44, 0x61, 0x74, 0x61, 0x2e, 0x44, 0x61, 0x74,
	0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x37, 0x0a, 0x09,
	0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x2c, 0x0a, 0x0e, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x57,
	0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x77, 0x61, 0x72, 0x6e, 0x69,
	0x6e, 0x67, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x77, 0x61, 0x72, 0x6e, 0x69,
	0x6e, 0x67, 0x73, 0x22, 0xb7, 0x02, 0x0a, 0x06, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x12, 0x27,
	0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d,
	0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1c, 0x0a,
	0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x34, 0x0a, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e,
	0x76, 0x61, 0x75, 0x6c, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x12, 0x2e, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x76, 0x61, 0x75, 0x6c, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x44, 0x61, 0x74, 0x61, 0x52, 0x04, 0x64, 0x61, 0x74,
	0x61, 0x12, 0x3a, 0x0a, 0x08, 0x77, 0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x76, 0x61, 0x75, 0x6c, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x57, 0x61, 0x72, 0x6e, 0x69,
	0x6e, 0x67, 0x73, 0x52, 0x08, 0x77, 0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x42, 0x83, 0x01,
	0x0a, 0x18, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x76, 0x61, 0x75, 0x6c,
	0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0a, 0x56, 0x61, 0x75, 0x6c,
	0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d,
	0x76, 0x61, 0x75, 0x6c, 0x74, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x61,
	0x75, 0x6c, 0x74, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50,
	0x58, 0xaa, 0x02, 0x0e, 0x56, 0x61, 0x75, 0x6c, 0x74, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0xca, 0x02, 0x0e, 0x56, 0x61, 0x75, 0x6c, 0x74, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_vault_v1alpha1_vault_proto_rawDescOnce sync.Once
	file_vault_v1alpha1_vault_proto_rawDescData = file_vault_v1alpha1_vault_proto_rawDesc
)

func file_vault_v1alpha1_vault_proto_rawDescGZIP() []byte {
	file_vault_v1alpha1_vault_proto_rawDescOnce.Do(func() {
		file_vault_v1alpha1_vault_proto_rawDescData = protoimpl.X.CompressGZIP(file_vault_v1alpha1_vault_proto_rawDescData)
	})
	return file_vault_v1alpha1_vault_proto_rawDescData
}

var file_vault_v1alpha1_vault_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_vault_v1alpha1_vault_proto_goTypes = []interface{}{
	(*Metadata)(nil),       // 0: vault.v1alpha1.Metadata
	(*SecretData)(nil),     // 1: vault.v1alpha1.SecretData
	(*SecretWarnings)(nil), // 2: vault.v1alpha1.SecretWarnings
	(*Secret)(nil),         // 3: vault.v1alpha1.Secret
	nil,                    // 4: vault.v1alpha1.SecretData.DataEntry
}
var file_vault_v1alpha1_vault_proto_depIdxs = []int32{
	4, // 0: vault.v1alpha1.SecretData.data:type_name -> vault.v1alpha1.SecretData.DataEntry
	0, // 1: vault.v1alpha1.Secret.metadata:type_name -> vault.v1alpha1.Metadata
	1, // 2: vault.v1alpha1.Secret.data:type_name -> vault.v1alpha1.SecretData
	2, // 3: vault.v1alpha1.Secret.warnings:type_name -> vault.v1alpha1.SecretWarnings
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_vault_v1alpha1_vault_proto_init() }
func file_vault_v1alpha1_vault_proto_init() {
	if File_vault_v1alpha1_vault_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_vault_v1alpha1_vault_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Metadata); i {
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
		file_vault_v1alpha1_vault_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SecretData); i {
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
		file_vault_v1alpha1_vault_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SecretWarnings); i {
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
		file_vault_v1alpha1_vault_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Secret); i {
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
			RawDescriptor: file_vault_v1alpha1_vault_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_vault_v1alpha1_vault_proto_goTypes,
		DependencyIndexes: file_vault_v1alpha1_vault_proto_depIdxs,
		MessageInfos:      file_vault_v1alpha1_vault_proto_msgTypes,
	}.Build()
	File_vault_v1alpha1_vault_proto = out.File
	file_vault_v1alpha1_vault_proto_rawDesc = nil
	file_vault_v1alpha1_vault_proto_goTypes = nil
	file_vault_v1alpha1_vault_proto_depIdxs = nil
}
