// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: pipelines/environment/v1alpha1/environment.proto

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

// Environment ...
type Environment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OrganizationId uint32 `protobuf:"varint,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId      uint32 `protobuf:"varint,3,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	Name           string `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Active         bool   `protobuf:"varint,5,opt,name=active,proto3" json:"active,omitempty"`
	StatusType     string `protobuf:"bytes,6,opt,name=status_type,json=statusType,proto3" json:"status_type,omitempty"`
}

func (x *Environment) Reset() {
	*x = Environment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_environment_v1alpha1_environment_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Environment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Environment) ProtoMessage() {}

func (x *Environment) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_environment_v1alpha1_environment_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Environment.ProtoReflect.Descriptor instead.
func (*Environment) Descriptor() ([]byte, []int) {
	return file_pipelines_environment_v1alpha1_environment_proto_rawDescGZIP(), []int{0}
}

func (x *Environment) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Environment) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Environment) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *Environment) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Environment) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

func (x *Environment) GetStatusType() string {
	if x != nil {
		return x.StatusType
	}
	return ""
}

var File_pipelines_environment_v1alpha1_environment_proto protoreflect.FileDescriptor

var file_pipelines_environment_v1alpha1_environment_proto_rawDesc = []byte{
	0x0a, 0x30, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x1e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x65, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x22, 0xb2, 0x01, 0x0a, 0x0b, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16,
	0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06,
	0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x54, 0x79, 0x70, 0x65, 0x42, 0xc7, 0x01, 0x0a, 0x28, 0x69, 0x6f, 0x2e, 0x63,
	0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e,
	0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x42, 0x10, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e,
	0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d,
	0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa,
	0x02, 0x1e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x45, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0xca, 0x02, 0x1e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x5c, 0x45, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pipelines_environment_v1alpha1_environment_proto_rawDescOnce sync.Once
	file_pipelines_environment_v1alpha1_environment_proto_rawDescData = file_pipelines_environment_v1alpha1_environment_proto_rawDesc
)

func file_pipelines_environment_v1alpha1_environment_proto_rawDescGZIP() []byte {
	file_pipelines_environment_v1alpha1_environment_proto_rawDescOnce.Do(func() {
		file_pipelines_environment_v1alpha1_environment_proto_rawDescData = protoimpl.X.CompressGZIP(file_pipelines_environment_v1alpha1_environment_proto_rawDescData)
	})
	return file_pipelines_environment_v1alpha1_environment_proto_rawDescData
}

var file_pipelines_environment_v1alpha1_environment_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_pipelines_environment_v1alpha1_environment_proto_goTypes = []interface{}{
	(*Environment)(nil), // 0: pipelines.environment.v1alpha1.Environment
}
var file_pipelines_environment_v1alpha1_environment_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_pipelines_environment_v1alpha1_environment_proto_init() }
func file_pipelines_environment_v1alpha1_environment_proto_init() {
	if File_pipelines_environment_v1alpha1_environment_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pipelines_environment_v1alpha1_environment_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Environment); i {
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
			RawDescriptor: file_pipelines_environment_v1alpha1_environment_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pipelines_environment_v1alpha1_environment_proto_goTypes,
		DependencyIndexes: file_pipelines_environment_v1alpha1_environment_proto_depIdxs,
		MessageInfos:      file_pipelines_environment_v1alpha1_environment_proto_msgTypes,
	}.Build()
	File_pipelines_environment_v1alpha1_environment_proto = out.File
	file_pipelines_environment_v1alpha1_environment_proto_rawDesc = nil
	file_pipelines_environment_v1alpha1_environment_proto_goTypes = nil
	file_pipelines_environment_v1alpha1_environment_proto_depIdxs = nil
}
