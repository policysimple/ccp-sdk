// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: pipelines/instance/v1alpha1/instance.proto

package instancev1alpha1

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

// InstanceType ...
type InstanceType int32

const (
	InstanceType_INSTANCE_TYPE_UNSPECIFIED InstanceType = 0
	InstanceType_INSTANCE_TYPE_GIT         InstanceType = 1
)

// Enum value maps for InstanceType.
var (
	InstanceType_name = map[int32]string{
		0: "INSTANCE_TYPE_UNSPECIFIED",
		1: "INSTANCE_TYPE_GIT",
	}
	InstanceType_value = map[string]int32{
		"INSTANCE_TYPE_UNSPECIFIED": 0,
		"INSTANCE_TYPE_GIT":         1,
	}
)

func (x InstanceType) Enum() *InstanceType {
	p := new(InstanceType)
	*p = x
	return p
}

func (x InstanceType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (InstanceType) Descriptor() protoreflect.EnumDescriptor {
	return file_pipelines_instance_v1alpha1_instance_proto_enumTypes[0].Descriptor()
}

func (InstanceType) Type() protoreflect.EnumType {
	return &file_pipelines_instance_v1alpha1_instance_proto_enumTypes[0]
}

func (x InstanceType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use InstanceType.Descriptor instead.
func (InstanceType) EnumDescriptor() ([]byte, []int) {
	return file_pipelines_instance_v1alpha1_instance_proto_rawDescGZIP(), []int{0}
}

// TypeGitProvider ...
type TypeGitProvider struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SshUrl        string `protobuf:"bytes,1,opt,name=ssh_url,json=sshUrl,proto3" json:"ssh_url,omitempty"`
	Branch        string `protobuf:"bytes,2,opt,name=branch,proto3" json:"branch,omitempty"`
	SshPrivateKey string `protobuf:"bytes,3,opt,name=ssh_private_key,json=sshPrivateKey,proto3" json:"ssh_private_key,omitempty"`
}

func (x *TypeGitProvider) Reset() {
	*x = TypeGitProvider{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_instance_v1alpha1_instance_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TypeGitProvider) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TypeGitProvider) ProtoMessage() {}

func (x *TypeGitProvider) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_instance_v1alpha1_instance_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TypeGitProvider.ProtoReflect.Descriptor instead.
func (*TypeGitProvider) Descriptor() ([]byte, []int) {
	return file_pipelines_instance_v1alpha1_instance_proto_rawDescGZIP(), []int{0}
}

func (x *TypeGitProvider) GetSshUrl() string {
	if x != nil {
		return x.SshUrl
	}
	return ""
}

func (x *TypeGitProvider) GetBranch() string {
	if x != nil {
		return x.Branch
	}
	return ""
}

func (x *TypeGitProvider) GetSshPrivateKey() string {
	if x != nil {
		return x.SshPrivateKey
	}
	return ""
}

// Instance ...
type Instance struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         string            `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Namespace    string            `protobuf:"bytes,2,opt,name=namespace,proto3" json:"namespace,omitempty"`
	TypeSource   InstanceType      `protobuf:"varint,3,opt,name=type_source,json=typeSource,proto3,enum=pipelines.instance.v1alpha1.InstanceType" json:"type_source,omitempty"`
	GitProvider  *TypeGitProvider  `protobuf:"bytes,4,opt,name=git_provider,json=gitProvider,proto3" json:"git_provider,omitempty"`
	EnvVariables map[string]string `protobuf:"bytes,5,rep,name=env_variables,json=envVariables,proto3" json:"env_variables,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Instance) Reset() {
	*x = Instance{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_instance_v1alpha1_instance_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Instance) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Instance) ProtoMessage() {}

func (x *Instance) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_instance_v1alpha1_instance_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Instance.ProtoReflect.Descriptor instead.
func (*Instance) Descriptor() ([]byte, []int) {
	return file_pipelines_instance_v1alpha1_instance_proto_rawDescGZIP(), []int{1}
}

func (x *Instance) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Instance) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *Instance) GetTypeSource() InstanceType {
	if x != nil {
		return x.TypeSource
	}
	return InstanceType_INSTANCE_TYPE_UNSPECIFIED
}

func (x *Instance) GetGitProvider() *TypeGitProvider {
	if x != nil {
		return x.GitProvider
	}
	return nil
}

func (x *Instance) GetEnvVariables() map[string]string {
	if x != nil {
		return x.EnvVariables
	}
	return nil
}

var File_pipelines_instance_v1alpha1_instance_proto protoreflect.FileDescriptor

var file_pipelines_instance_v1alpha1_instance_proto_rawDesc = []byte{
	0x0a, 0x2a, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x69, 0x6e, 0x73, 0x74,
	0x61, 0x6e, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x69, 0x6e,
	0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x70, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x6a, 0x0a, 0x0f, 0x54, 0x79, 0x70,
	0x65, 0x47, 0x69, 0x74, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x12, 0x17, 0x0a, 0x07,
	0x73, 0x73, 0x68, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x73, 0x68, 0x55, 0x72, 0x6c, 0x12, 0x16, 0x0a, 0x06, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x12, 0x26, 0x0a,
	0x0f, 0x73, 0x73, 0x68, 0x5f, 0x70, 0x72, 0x69, 0x76, 0x61, 0x74, 0x65, 0x5f, 0x6b, 0x65, 0x79,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x73, 0x73, 0x68, 0x50, 0x72, 0x69, 0x76, 0x61,
	0x74, 0x65, 0x4b, 0x65, 0x79, 0x22, 0xf8, 0x02, 0x0a, 0x08, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x12, 0x4a, 0x0a, 0x0b, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x29, 0x2e, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x0a, 0x74, 0x79, 0x70, 0x65, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x12, 0x4f, 0x0a, 0x0c, 0x67, 0x69, 0x74, 0x5f, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2c, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x47, 0x69, 0x74, 0x50, 0x72, 0x6f, 0x76,
	0x69, 0x64, 0x65, 0x72, 0x52, 0x0b, 0x67, 0x69, 0x74, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65,
	0x72, 0x12, 0x5c, 0x0a, 0x0d, 0x65, 0x6e, 0x76, 0x5f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c,
	0x65, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x37, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x45, 0x6e, 0x76, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x0c, 0x65, 0x6e, 0x76, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x1a,
	0x3f, 0x0a, 0x11, 0x45, 0x6e, 0x76, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x2a, 0x44, 0x0a, 0x0c, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x1d, 0x0a, 0x19, 0x49, 0x4e, 0x53, 0x54, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12,
	0x15, 0x0a, 0x11, 0x49, 0x4e, 0x53, 0x54, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45,
	0x5f, 0x47, 0x49, 0x54, 0x10, 0x01, 0x42, 0xb4, 0x01, 0x0a, 0x25, 0x69, 0x6f, 0x2e, 0x63, 0x75,
	0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x69,
	0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x42, 0x0d, 0x49, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75,
	0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x69, 0x6e, 0x73, 0x74, 0x61,
	0x6e, 0x63, 0x65, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50,
	0x58, 0xaa, 0x02, 0x1b, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x49, 0x6e,
	0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca,
	0x02, 0x1b, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x5c, 0x49, 0x6e, 0x73, 0x74,
	0x61, 0x6e, 0x63, 0x65, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pipelines_instance_v1alpha1_instance_proto_rawDescOnce sync.Once
	file_pipelines_instance_v1alpha1_instance_proto_rawDescData = file_pipelines_instance_v1alpha1_instance_proto_rawDesc
)

func file_pipelines_instance_v1alpha1_instance_proto_rawDescGZIP() []byte {
	file_pipelines_instance_v1alpha1_instance_proto_rawDescOnce.Do(func() {
		file_pipelines_instance_v1alpha1_instance_proto_rawDescData = protoimpl.X.CompressGZIP(file_pipelines_instance_v1alpha1_instance_proto_rawDescData)
	})
	return file_pipelines_instance_v1alpha1_instance_proto_rawDescData
}

var file_pipelines_instance_v1alpha1_instance_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_pipelines_instance_v1alpha1_instance_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_pipelines_instance_v1alpha1_instance_proto_goTypes = []interface{}{
	(InstanceType)(0),       // 0: pipelines.instance.v1alpha1.InstanceType
	(*TypeGitProvider)(nil), // 1: pipelines.instance.v1alpha1.TypeGitProvider
	(*Instance)(nil),        // 2: pipelines.instance.v1alpha1.Instance
	nil,                     // 3: pipelines.instance.v1alpha1.Instance.EnvVariablesEntry
}
var file_pipelines_instance_v1alpha1_instance_proto_depIdxs = []int32{
	0, // 0: pipelines.instance.v1alpha1.Instance.type_source:type_name -> pipelines.instance.v1alpha1.InstanceType
	1, // 1: pipelines.instance.v1alpha1.Instance.git_provider:type_name -> pipelines.instance.v1alpha1.TypeGitProvider
	3, // 2: pipelines.instance.v1alpha1.Instance.env_variables:type_name -> pipelines.instance.v1alpha1.Instance.EnvVariablesEntry
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_pipelines_instance_v1alpha1_instance_proto_init() }
func file_pipelines_instance_v1alpha1_instance_proto_init() {
	if File_pipelines_instance_v1alpha1_instance_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pipelines_instance_v1alpha1_instance_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TypeGitProvider); i {
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
		file_pipelines_instance_v1alpha1_instance_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Instance); i {
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
			RawDescriptor: file_pipelines_instance_v1alpha1_instance_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pipelines_instance_v1alpha1_instance_proto_goTypes,
		DependencyIndexes: file_pipelines_instance_v1alpha1_instance_proto_depIdxs,
		EnumInfos:         file_pipelines_instance_v1alpha1_instance_proto_enumTypes,
		MessageInfos:      file_pipelines_instance_v1alpha1_instance_proto_msgTypes,
	}.Build()
	File_pipelines_instance_v1alpha1_instance_proto = out.File
	file_pipelines_instance_v1alpha1_instance_proto_rawDesc = nil
	file_pipelines_instance_v1alpha1_instance_proto_goTypes = nil
	file_pipelines_instance_v1alpha1_instance_proto_depIdxs = nil
}
