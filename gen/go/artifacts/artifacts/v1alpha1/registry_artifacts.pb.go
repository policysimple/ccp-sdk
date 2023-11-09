// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: artifacts/artifacts/v1alpha1/registry_artifacts.proto

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

type Tags struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	PullTime     string `protobuf:"bytes,2,opt,name=pull_time,json=pullTime,proto3" json:"pull_time,omitempty"`
	PushTime     string `protobuf:"bytes,3,opt,name=push_time,json=pushTime,proto3" json:"push_time,omitempty"`
	StorageLimit uint32 `protobuf:"varint,4,opt,name=storage_limit,json=storageLimit,proto3" json:"storage_limit,omitempty"`
}

func (x *Tags) Reset() {
	*x = Tags{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Tags) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Tags) ProtoMessage() {}

func (x *Tags) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Tags.ProtoReflect.Descriptor instead.
func (*Tags) Descriptor() ([]byte, []int) {
	return file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescGZIP(), []int{0}
}

func (x *Tags) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Tags) GetPullTime() string {
	if x != nil {
		return x.PullTime
	}
	return ""
}

func (x *Tags) GetPushTime() string {
	if x != nil {
		return x.PushTime
	}
	return ""
}

func (x *Tags) GetStorageLimit() uint32 {
	if x != nil {
		return x.StorageLimit
	}
	return 0
}

type ArtifactsRegistry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Digest   string `protobuf:"bytes,2,opt,name=digest,proto3" json:"digest,omitempty"`
	PullTime string `protobuf:"bytes,3,opt,name=pull_time,json=pullTime,proto3" json:"pull_time,omitempty"`
	PushTime string `protobuf:"bytes,4,opt,name=push_time,json=pushTime,proto3" json:"push_time,omitempty"`
	Size     uint32 `protobuf:"varint,5,opt,name=size,proto3" json:"size,omitempty"`
	Active   bool   `protobuf:"varint,6,opt,name=active,proto3" json:"active,omitempty"`
	Tags     *Tags  `protobuf:"bytes,7,opt,name=tags,proto3" json:"tags,omitempty"`
}

func (x *ArtifactsRegistry) Reset() {
	*x = ArtifactsRegistry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ArtifactsRegistry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ArtifactsRegistry) ProtoMessage() {}

func (x *ArtifactsRegistry) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ArtifactsRegistry.ProtoReflect.Descriptor instead.
func (*ArtifactsRegistry) Descriptor() ([]byte, []int) {
	return file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescGZIP(), []int{1}
}

func (x *ArtifactsRegistry) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ArtifactsRegistry) GetDigest() string {
	if x != nil {
		return x.Digest
	}
	return ""
}

func (x *ArtifactsRegistry) GetPullTime() string {
	if x != nil {
		return x.PullTime
	}
	return ""
}

func (x *ArtifactsRegistry) GetPushTime() string {
	if x != nil {
		return x.PushTime
	}
	return ""
}

func (x *ArtifactsRegistry) GetSize() uint32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *ArtifactsRegistry) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

func (x *ArtifactsRegistry) GetTags() *Tags {
	if x != nil {
		return x.Tags
	}
	return nil
}

var File_artifacts_artifacts_v1alpha1_registry_artifacts_proto protoreflect.FileDescriptor

var file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDesc = []byte{
	0x0a, 0x35, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x61, 0x72, 0x74, 0x69,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72,
	0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x5f, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63,
	0x74, 0x73, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x79, 0x0a, 0x04, 0x54, 0x61, 0x67, 0x73, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x75, 0x6c, 0x6c, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x75, 0x6c, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x1b,
	0x0a, 0x09, 0x70, 0x75, 0x73, 0x68, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x70, 0x75, 0x73, 0x68, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x73,
	0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x0c, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x4c, 0x69, 0x6d, 0x69, 0x74,
	0x22, 0xd9, 0x01, 0x0a, 0x11, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x69, 0x67, 0x65, 0x73, 0x74, 0x12, 0x1b,
	0x0a, 0x09, 0x70, 0x75, 0x6c, 0x6c, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x70, 0x75, 0x6c, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x70,
	0x75, 0x73, 0x68, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x70, 0x75, 0x73, 0x68, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x16, 0x0a, 0x06,
	0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x61, 0x63,
	0x74, 0x69, 0x76, 0x65, 0x12, 0x36, 0x0a, 0x04, 0x74, 0x61, 0x67, 0x73, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x22, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x61,
	0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x54, 0x61, 0x67, 0x73, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x42, 0xc5, 0x01, 0x0a,
	0x26, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x16, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72,
	0x79, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x3d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75,
	0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e,
	0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x61, 0x72,
	0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa, 0x02, 0x1c, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63,
	0x74, 0x73, 0x2e, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x56, 0x31, 0x41,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x1c, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74,
	0x73, 0x5c, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x5c, 0x56, 0x31, 0x41, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescOnce sync.Once
	file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescData = file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDesc
)

func file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescGZIP() []byte {
	file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescOnce.Do(func() {
		file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescData = protoimpl.X.CompressGZIP(file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescData)
	})
	return file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDescData
}

var file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_goTypes = []interface{}{
	(*Tags)(nil),              // 0: artifacts.artifacts.v1alpha1.Tags
	(*ArtifactsRegistry)(nil), // 1: artifacts.artifacts.v1alpha1.ArtifactsRegistry
}
var file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_depIdxs = []int32{
	0, // 0: artifacts.artifacts.v1alpha1.ArtifactsRegistry.tags:type_name -> artifacts.artifacts.v1alpha1.Tags
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_init() }
func file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_init() {
	if File_artifacts_artifacts_v1alpha1_registry_artifacts_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Tags); i {
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
		file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ArtifactsRegistry); i {
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
			RawDescriptor: file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_goTypes,
		DependencyIndexes: file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_depIdxs,
		MessageInfos:      file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_msgTypes,
	}.Build()
	File_artifacts_artifacts_v1alpha1_registry_artifacts_proto = out.File
	file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_rawDesc = nil
	file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_goTypes = nil
	file_artifacts_artifacts_v1alpha1_registry_artifacts_proto_depIdxs = nil
}
