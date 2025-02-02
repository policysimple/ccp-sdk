// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: search/v1alpha1/search.proto

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

type SearchItem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ObjectId    string            `protobuf:"bytes,1,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
	Type        string            `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Name        string            `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	OrgId       string            `protobuf:"bytes,4,opt,name=org_id,json=orgId,proto3" json:"org_id,omitempty"`
	Description string            `protobuf:"bytes,5,opt,name=description,proto3" json:"description,omitempty"`
	Metadata    string            `protobuf:"bytes,6,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Data        map[string]string `protobuf:"bytes,7,rep,name=data,proto3" json:"data,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *SearchItem) Reset() {
	*x = SearchItem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_search_v1alpha1_search_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchItem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchItem) ProtoMessage() {}

func (x *SearchItem) ProtoReflect() protoreflect.Message {
	mi := &file_search_v1alpha1_search_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchItem.ProtoReflect.Descriptor instead.
func (*SearchItem) Descriptor() ([]byte, []int) {
	return file_search_v1alpha1_search_proto_rawDescGZIP(), []int{0}
}

func (x *SearchItem) GetObjectId() string {
	if x != nil {
		return x.ObjectId
	}
	return ""
}

func (x *SearchItem) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *SearchItem) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SearchItem) GetOrgId() string {
	if x != nil {
		return x.OrgId
	}
	return ""
}

func (x *SearchItem) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *SearchItem) GetMetadata() string {
	if x != nil {
		return x.Metadata
	}
	return ""
}

func (x *SearchItem) GetData() map[string]string {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_search_v1alpha1_search_proto protoreflect.FileDescriptor

var file_search_v1alpha1_search_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2f, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f,
	0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22,
	0x9a, 0x02, 0x0a, 0x0a, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x49, 0x74, 0x65, 0x6d, 0x12, 0x1b,
	0x0a, 0x09, 0x6f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x6f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x15, 0x0a, 0x06, 0x6f, 0x72, 0x67, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x6f, 0x72, 0x67, 0x49, 0x64, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08,
	0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x39, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x49,
	0x74, 0x65, 0x6d, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x1a, 0x37, 0x0a, 0x09, 0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b,
	0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x32, 0x5a, 0x30,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62,
	0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f,
	0x2f, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_search_v1alpha1_search_proto_rawDescOnce sync.Once
	file_search_v1alpha1_search_proto_rawDescData = file_search_v1alpha1_search_proto_rawDesc
)

func file_search_v1alpha1_search_proto_rawDescGZIP() []byte {
	file_search_v1alpha1_search_proto_rawDescOnce.Do(func() {
		file_search_v1alpha1_search_proto_rawDescData = protoimpl.X.CompressGZIP(file_search_v1alpha1_search_proto_rawDescData)
	})
	return file_search_v1alpha1_search_proto_rawDescData
}

var file_search_v1alpha1_search_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_search_v1alpha1_search_proto_goTypes = []interface{}{
	(*SearchItem)(nil), // 0: search.v1alpha1.SearchItem
	nil,                // 1: search.v1alpha1.SearchItem.DataEntry
}
var file_search_v1alpha1_search_proto_depIdxs = []int32{
	1, // 0: search.v1alpha1.SearchItem.data:type_name -> search.v1alpha1.SearchItem.DataEntry
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_search_v1alpha1_search_proto_init() }
func file_search_v1alpha1_search_proto_init() {
	if File_search_v1alpha1_search_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_search_v1alpha1_search_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SearchItem); i {
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
			RawDescriptor: file_search_v1alpha1_search_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_search_v1alpha1_search_proto_goTypes,
		DependencyIndexes: file_search_v1alpha1_search_proto_depIdxs,
		MessageInfos:      file_search_v1alpha1_search_proto_msgTypes,
	}.Build()
	File_search_v1alpha1_search_proto = out.File
	file_search_v1alpha1_search_proto_rawDesc = nil
	file_search_v1alpha1_search_proto_goTypes = nil
	file_search_v1alpha1_search_proto_depIdxs = nil
}
