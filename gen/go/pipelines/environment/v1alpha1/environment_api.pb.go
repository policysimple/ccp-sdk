// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.2
// source: pipelines/environment/v1alpha1/environment_api.proto

package environmentv1alpha1

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

type CreateEnvironmentRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Environment *Environment `protobuf:"bytes,1,opt,name=environment,proto3" json:"environment,omitempty"`
}

func (x *CreateEnvironmentRequest) Reset() {
	*x = CreateEnvironmentRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateEnvironmentRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateEnvironmentRequest) ProtoMessage() {}

func (x *CreateEnvironmentRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateEnvironmentRequest.ProtoReflect.Descriptor instead.
func (*CreateEnvironmentRequest) Descriptor() ([]byte, []int) {
	return file_pipelines_environment_v1alpha1_environment_api_proto_rawDescGZIP(), []int{0}
}

func (x *CreateEnvironmentRequest) GetEnvironment() *Environment {
	if x != nil {
		return x.Environment
	}
	return nil
}

type CreateEnvironmentResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Environment *Environment `protobuf:"bytes,1,opt,name=environment,proto3" json:"environment,omitempty"`
	Status      string       `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *CreateEnvironmentResponse) Reset() {
	*x = CreateEnvironmentResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateEnvironmentResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateEnvironmentResponse) ProtoMessage() {}

func (x *CreateEnvironmentResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateEnvironmentResponse.ProtoReflect.Descriptor instead.
func (*CreateEnvironmentResponse) Descriptor() ([]byte, []int) {
	return file_pipelines_environment_v1alpha1_environment_api_proto_rawDescGZIP(), []int{1}
}

func (x *CreateEnvironmentResponse) GetEnvironment() *Environment {
	if x != nil {
		return x.Environment
	}
	return nil
}

func (x *CreateEnvironmentResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

var File_pipelines_environment_v1alpha1_environment_api_proto protoreflect.FileDescriptor

var file_pipelines_environment_v1alpha1_environment_api_proto_rawDesc = []byte{
	0x0a, 0x34, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x61, 0x70, 0x69,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65,
	0x73, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x30, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65,
	0x73, 0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x69, 0x0a, 0x18, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x4d, 0x0a, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e,
	0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72,
	0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x22, 0x82, 0x01, 0x0a, 0x19, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x4d, 0x0a, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x52, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x32, 0xa4, 0x01, 0x0a, 0x15, 0x45, 0x6e, 0x76,
	0x69, 0x6e, 0x72, 0x6f, 0x6d, 0x65, 0x6e, 0x74, 0x41, 0x50, 0x49, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x8a, 0x01, 0x0a, 0x11, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x38, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x39, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x65,
	0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42,
	0xc6, 0x01, 0x0a, 0x28, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x13, 0x45, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x41, 0x50, 0x49, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x50, 0x01, 0x5a, 0x3b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x65, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa, 0x02, 0x1e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x56,
	0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x1e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x5c, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5c,
	0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pipelines_environment_v1alpha1_environment_api_proto_rawDescOnce sync.Once
	file_pipelines_environment_v1alpha1_environment_api_proto_rawDescData = file_pipelines_environment_v1alpha1_environment_api_proto_rawDesc
)

func file_pipelines_environment_v1alpha1_environment_api_proto_rawDescGZIP() []byte {
	file_pipelines_environment_v1alpha1_environment_api_proto_rawDescOnce.Do(func() {
		file_pipelines_environment_v1alpha1_environment_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_pipelines_environment_v1alpha1_environment_api_proto_rawDescData)
	})
	return file_pipelines_environment_v1alpha1_environment_api_proto_rawDescData
}

var file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_pipelines_environment_v1alpha1_environment_api_proto_goTypes = []interface{}{
	(*CreateEnvironmentRequest)(nil),  // 0: pipelines.environment.v1alpha1.CreateEnvironmentRequest
	(*CreateEnvironmentResponse)(nil), // 1: pipelines.environment.v1alpha1.CreateEnvironmentResponse
	(*Environment)(nil),               // 2: pipelines.environment.v1alpha1.Environment
}
var file_pipelines_environment_v1alpha1_environment_api_proto_depIdxs = []int32{
	2, // 0: pipelines.environment.v1alpha1.CreateEnvironmentRequest.environment:type_name -> pipelines.environment.v1alpha1.Environment
	2, // 1: pipelines.environment.v1alpha1.CreateEnvironmentResponse.environment:type_name -> pipelines.environment.v1alpha1.Environment
	0, // 2: pipelines.environment.v1alpha1.EnvinromentAPIService.CreateEnvironment:input_type -> pipelines.environment.v1alpha1.CreateEnvironmentRequest
	1, // 3: pipelines.environment.v1alpha1.EnvinromentAPIService.CreateEnvironment:output_type -> pipelines.environment.v1alpha1.CreateEnvironmentResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pipelines_environment_v1alpha1_environment_api_proto_init() }
func file_pipelines_environment_v1alpha1_environment_api_proto_init() {
	if File_pipelines_environment_v1alpha1_environment_api_proto != nil {
		return
	}
	file_pipelines_environment_v1alpha1_environment_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateEnvironmentRequest); i {
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
		file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateEnvironmentResponse); i {
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
			RawDescriptor: file_pipelines_environment_v1alpha1_environment_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pipelines_environment_v1alpha1_environment_api_proto_goTypes,
		DependencyIndexes: file_pipelines_environment_v1alpha1_environment_api_proto_depIdxs,
		MessageInfos:      file_pipelines_environment_v1alpha1_environment_api_proto_msgTypes,
	}.Build()
	File_pipelines_environment_v1alpha1_environment_api_proto = out.File
	file_pipelines_environment_v1alpha1_environment_api_proto_rawDesc = nil
	file_pipelines_environment_v1alpha1_environment_api_proto_goTypes = nil
	file_pipelines_environment_v1alpha1_environment_api_proto_depIdxs = nil
}
