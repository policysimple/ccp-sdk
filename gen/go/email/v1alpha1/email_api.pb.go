// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: email/v1alpha1/email_api.proto

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

type SendEmailRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	To             string `protobuf:"bytes,1,opt,name=to,proto3" json:"to,omitempty"`
	Subject        string `protobuf:"bytes,2,opt,name=subject,proto3" json:"subject,omitempty"`
	Message        string `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
	InvitationCode string `protobuf:"bytes,4,opt,name=invitation_code,json=invitationCode,proto3" json:"invitation_code,omitempty"`
}

func (x *SendEmailRequest) Reset() {
	*x = SendEmailRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_email_v1alpha1_email_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendEmailRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendEmailRequest) ProtoMessage() {}

func (x *SendEmailRequest) ProtoReflect() protoreflect.Message {
	mi := &file_email_v1alpha1_email_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendEmailRequest.ProtoReflect.Descriptor instead.
func (*SendEmailRequest) Descriptor() ([]byte, []int) {
	return file_email_v1alpha1_email_api_proto_rawDescGZIP(), []int{0}
}

func (x *SendEmailRequest) GetTo() string {
	if x != nil {
		return x.To
	}
	return ""
}

func (x *SendEmailRequest) GetSubject() string {
	if x != nil {
		return x.Subject
	}
	return ""
}

func (x *SendEmailRequest) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *SendEmailRequest) GetInvitationCode() string {
	if x != nil {
		return x.InvitationCode
	}
	return ""
}

type SendEmailResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result string `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *SendEmailResponse) Reset() {
	*x = SendEmailResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_email_v1alpha1_email_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendEmailResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendEmailResponse) ProtoMessage() {}

func (x *SendEmailResponse) ProtoReflect() protoreflect.Message {
	mi := &file_email_v1alpha1_email_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendEmailResponse.ProtoReflect.Descriptor instead.
func (*SendEmailResponse) Descriptor() ([]byte, []int) {
	return file_email_v1alpha1_email_api_proto_rawDescGZIP(), []int{1}
}

func (x *SendEmailResponse) GetResult() string {
	if x != nil {
		return x.Result
	}
	return ""
}

var File_email_v1alpha1_email_api_proto protoreflect.FileDescriptor

var file_email_v1alpha1_email_api_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0e, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x22, 0x7f, 0x0a, 0x10, 0x53, 0x65, 0x6e, 0x64, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x74, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x74, 0x6f, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x73, 0x75, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x18,
	0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x69, 0x6e, 0x76, 0x69,
	0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0e, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x64,
	0x65, 0x22, 0x2b, 0x0a, 0x11, 0x53, 0x65, 0x6e, 0x64, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x32, 0x60,
	0x0a, 0x0c, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x50,
	0x0a, 0x09, 0x53, 0x65, 0x6e, 0x64, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x20, 0x2e, 0x65, 0x6d,
	0x61, 0x69, 0x6c, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65, 0x6e,
	0x64, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53,
	0x65, 0x6e, 0x64, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x42, 0x31, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63,
	0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65,
	0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_email_v1alpha1_email_api_proto_rawDescOnce sync.Once
	file_email_v1alpha1_email_api_proto_rawDescData = file_email_v1alpha1_email_api_proto_rawDesc
)

func file_email_v1alpha1_email_api_proto_rawDescGZIP() []byte {
	file_email_v1alpha1_email_api_proto_rawDescOnce.Do(func() {
		file_email_v1alpha1_email_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_email_v1alpha1_email_api_proto_rawDescData)
	})
	return file_email_v1alpha1_email_api_proto_rawDescData
}

var file_email_v1alpha1_email_api_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_email_v1alpha1_email_api_proto_goTypes = []interface{}{
	(*SendEmailRequest)(nil),  // 0: email.v1alpha1.SendEmailRequest
	(*SendEmailResponse)(nil), // 1: email.v1alpha1.SendEmailResponse
}
var file_email_v1alpha1_email_api_proto_depIdxs = []int32{
	0, // 0: email.v1alpha1.EmailService.SendEmail:input_type -> email.v1alpha1.SendEmailRequest
	1, // 1: email.v1alpha1.EmailService.SendEmail:output_type -> email.v1alpha1.SendEmailResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_email_v1alpha1_email_api_proto_init() }
func file_email_v1alpha1_email_api_proto_init() {
	if File_email_v1alpha1_email_api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_email_v1alpha1_email_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendEmailRequest); i {
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
		file_email_v1alpha1_email_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendEmailResponse); i {
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
			RawDescriptor: file_email_v1alpha1_email_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_email_v1alpha1_email_api_proto_goTypes,
		DependencyIndexes: file_email_v1alpha1_email_api_proto_depIdxs,
		MessageInfos:      file_email_v1alpha1_email_api_proto_msgTypes,
	}.Build()
	File_email_v1alpha1_email_api_proto = out.File
	file_email_v1alpha1_email_api_proto_rawDesc = nil
	file_email_v1alpha1_email_api_proto_goTypes = nil
	file_email_v1alpha1_email_api_proto_depIdxs = nil
}
