// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: artifacts/quotas/v1alpha1/registry_quotas.proto

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

type HarborQuotas struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	StorageUsed  uint32 `protobuf:"varint,1,opt,name=storage_used,json=storageUsed,proto3" json:"storage_used,omitempty"`
	StorageLimit uint32 `protobuf:"varint,2,opt,name=storage_limit,json=storageLimit,proto3" json:"storage_limit,omitempty"`
}

func (x *HarborQuotas) Reset() {
	*x = HarborQuotas{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HarborQuotas) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HarborQuotas) ProtoMessage() {}

func (x *HarborQuotas) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HarborQuotas.ProtoReflect.Descriptor instead.
func (*HarborQuotas) Descriptor() ([]byte, []int) {
	return file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescGZIP(), []int{0}
}

func (x *HarborQuotas) GetStorageUsed() uint32 {
	if x != nil {
		return x.StorageUsed
	}
	return 0
}

func (x *HarborQuotas) GetStorageLimit() uint32 {
	if x != nil {
		return x.StorageLimit
	}
	return 0
}

type QuotasRegistry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OrganizationId uint32        `protobuf:"varint,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId      uint32        `protobuf:"varint,3,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	EnvironmentId  string        `protobuf:"bytes,4,opt,name=environment_id,json=environmentId,proto3" json:"environment_id,omitempty"`
	Active         bool          `protobuf:"varint,6,opt,name=active,proto3" json:"active,omitempty"`
	Harbor         *HarborQuotas `protobuf:"bytes,7,opt,name=harbor,proto3" json:"harbor,omitempty"`
}

func (x *QuotasRegistry) Reset() {
	*x = QuotasRegistry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuotasRegistry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuotasRegistry) ProtoMessage() {}

func (x *QuotasRegistry) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuotasRegistry.ProtoReflect.Descriptor instead.
func (*QuotasRegistry) Descriptor() ([]byte, []int) {
	return file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescGZIP(), []int{1}
}

func (x *QuotasRegistry) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *QuotasRegistry) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *QuotasRegistry) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *QuotasRegistry) GetEnvironmentId() string {
	if x != nil {
		return x.EnvironmentId
	}
	return ""
}

func (x *QuotasRegistry) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

func (x *QuotasRegistry) GetHarbor() *HarborQuotas {
	if x != nil {
		return x.Harbor
	}
	return nil
}

var File_artifacts_quotas_v1alpha1_registry_quotas_proto protoreflect.FileDescriptor

var file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDesc = []byte{
	0x0a, 0x2f, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x71, 0x75, 0x6f, 0x74,
	0x61, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x72, 0x79, 0x5f, 0x71, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x19, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x71, 0x75, 0x6f,
	0x74, 0x61, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x56, 0x0a, 0x0c,
	0x48, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x51, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x12, 0x21, 0x0a, 0x0c,
	0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x5f, 0x75, 0x73, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x0b, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x55, 0x73, 0x65, 0x64, 0x12,
	0x23, 0x0a, 0x0d, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0c, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x4c,
	0x69, 0x6d, 0x69, 0x74, 0x22, 0xe8, 0x01, 0x0a, 0x0e, 0x51, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x52,
	0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64,
	0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12,
	0x25, 0x0a, 0x0e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69,
	0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x3f,
	0x0a, 0x06, 0x68, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27,
	0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x61,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x48, 0x61, 0x72, 0x62, 0x6f,
	0x72, 0x51, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x52, 0x06, 0x68, 0x61, 0x72, 0x62, 0x6f, 0x72, 0x42,
	0xb6, 0x01, 0x0a, 0x23, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x61, 0x72,
	0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x71, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x13, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72,
	0x79, 0x51, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3a,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62,
	0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f,
	0x2f, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x71, 0x75, 0x6f, 0x74, 0x61,
	0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58,
	0xaa, 0x02, 0x19, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x51, 0x75, 0x6f,
	0x74, 0x61, 0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x19, 0x41,
	0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x5c, 0x51, 0x75, 0x6f, 0x74, 0x61, 0x73, 0x5c,
	0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescOnce sync.Once
	file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescData = file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDesc
)

func file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescGZIP() []byte {
	file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescOnce.Do(func() {
		file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescData = protoimpl.X.CompressGZIP(file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescData)
	})
	return file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDescData
}

var file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_artifacts_quotas_v1alpha1_registry_quotas_proto_goTypes = []interface{}{
	(*HarborQuotas)(nil),   // 0: artifacts.quotas.v1alpha1.HarborQuotas
	(*QuotasRegistry)(nil), // 1: artifacts.quotas.v1alpha1.QuotasRegistry
}
var file_artifacts_quotas_v1alpha1_registry_quotas_proto_depIdxs = []int32{
	0, // 0: artifacts.quotas.v1alpha1.QuotasRegistry.harbor:type_name -> artifacts.quotas.v1alpha1.HarborQuotas
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_artifacts_quotas_v1alpha1_registry_quotas_proto_init() }
func file_artifacts_quotas_v1alpha1_registry_quotas_proto_init() {
	if File_artifacts_quotas_v1alpha1_registry_quotas_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HarborQuotas); i {
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
		file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuotasRegistry); i {
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
			RawDescriptor: file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_artifacts_quotas_v1alpha1_registry_quotas_proto_goTypes,
		DependencyIndexes: file_artifacts_quotas_v1alpha1_registry_quotas_proto_depIdxs,
		MessageInfos:      file_artifacts_quotas_v1alpha1_registry_quotas_proto_msgTypes,
	}.Build()
	File_artifacts_quotas_v1alpha1_registry_quotas_proto = out.File
	file_artifacts_quotas_v1alpha1_registry_quotas_proto_rawDesc = nil
	file_artifacts_quotas_v1alpha1_registry_quotas_proto_goTypes = nil
	file_artifacts_quotas_v1alpha1_registry_quotas_proto_depIdxs = nil
}
