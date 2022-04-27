// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: payment/v1alpha1/payment.proto

package paymentv1alpha1

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

// Payment
type Payment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CardHolderName string `protobuf:"bytes,2,opt,name=card_holder_name,json=cardHolderName,proto3" json:"card_holder_name,omitempty"`
	CardType       string `protobuf:"bytes,3,opt,name=card_type,json=cardType,proto3" json:"card_type,omitempty"`
	CardNumber     int32  `protobuf:"varint,4,opt,name=card_number,json=cardNumber,proto3" json:"card_number,omitempty"`
	CvvNumber      int32  `protobuf:"varint,5,opt,name=cvv_number,json=cvvNumber,proto3" json:"cvv_number,omitempty"`
	ExpiryDate     int32  `protobuf:"varint,6,opt,name=expiry_date,json=expiryDate,proto3" json:"expiry_date,omitempty"`
	OrganizationId uint32 `protobuf:"varint,7,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId      uint32 `protobuf:"varint,8,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	ApplicationId  string `protobuf:"bytes,9,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
}

func (x *Payment) Reset() {
	*x = Payment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_payment_v1alpha1_payment_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Payment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Payment) ProtoMessage() {}

func (x *Payment) ProtoReflect() protoreflect.Message {
	mi := &file_payment_v1alpha1_payment_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Payment.ProtoReflect.Descriptor instead.
func (*Payment) Descriptor() ([]byte, []int) {
	return file_payment_v1alpha1_payment_proto_rawDescGZIP(), []int{0}
}

func (x *Payment) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Payment) GetCardHolderName() string {
	if x != nil {
		return x.CardHolderName
	}
	return ""
}

func (x *Payment) GetCardType() string {
	if x != nil {
		return x.CardType
	}
	return ""
}

func (x *Payment) GetCardNumber() int32 {
	if x != nil {
		return x.CardNumber
	}
	return 0
}

func (x *Payment) GetCvvNumber() int32 {
	if x != nil {
		return x.CvvNumber
	}
	return 0
}

func (x *Payment) GetExpiryDate() int32 {
	if x != nil {
		return x.ExpiryDate
	}
	return 0
}

func (x *Payment) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Payment) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *Payment) GetApplicationId() string {
	if x != nil {
		return x.ApplicationId
	}
	return ""
}

type PaymentList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Items []*Payment `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
}

func (x *PaymentList) Reset() {
	*x = PaymentList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_payment_v1alpha1_payment_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PaymentList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaymentList) ProtoMessage() {}

func (x *PaymentList) ProtoReflect() protoreflect.Message {
	mi := &file_payment_v1alpha1_payment_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaymentList.ProtoReflect.Descriptor instead.
func (*PaymentList) Descriptor() ([]byte, []int) {
	return file_payment_v1alpha1_payment_proto_rawDescGZIP(), []int{1}
}

func (x *PaymentList) GetItems() []*Payment {
	if x != nil {
		return x.Items
	}
	return nil
}

var File_payment_v1alpha1_payment_proto protoreflect.FileDescriptor

var file_payment_v1alpha1_payment_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x70, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2f, 0x70, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x10, 0x70, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x22, 0xb0, 0x02, 0x0a, 0x07, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x28,
	0x0a, 0x10, 0x63, 0x61, 0x72, 0x64, 0x5f, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x5f, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x63, 0x61, 0x72, 0x64, 0x48, 0x6f,
	0x6c, 0x64, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x61, 0x72, 0x64,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x61, 0x72,
	0x64, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x61, 0x72, 0x64, 0x5f, 0x6e, 0x75,
	0x6d, 0x62, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x63, 0x61, 0x72, 0x64,
	0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x76, 0x76, 0x5f, 0x6e, 0x75,
	0x6d, 0x62, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x63, 0x76, 0x76, 0x4e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x65, 0x78, 0x70, 0x69, 0x72, 0x79, 0x5f,
	0x64, 0x61, 0x74, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x65, 0x78, 0x70, 0x69,
	0x72, 0x79, 0x44, 0x61, 0x74, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12,
	0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x25,
	0x0a, 0x0e, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64,
	0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x3e, 0x0a, 0x0b, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74,
	0x4c, 0x69, 0x73, 0x74, 0x12, 0x2f, 0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x70, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x05,
	0x69, 0x74, 0x65, 0x6d, 0x73, 0x42, 0x37, 0x5a, 0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x70,
	0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x70,
	0x61, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_payment_v1alpha1_payment_proto_rawDescOnce sync.Once
	file_payment_v1alpha1_payment_proto_rawDescData = file_payment_v1alpha1_payment_proto_rawDesc
)

func file_payment_v1alpha1_payment_proto_rawDescGZIP() []byte {
	file_payment_v1alpha1_payment_proto_rawDescOnce.Do(func() {
		file_payment_v1alpha1_payment_proto_rawDescData = protoimpl.X.CompressGZIP(file_payment_v1alpha1_payment_proto_rawDescData)
	})
	return file_payment_v1alpha1_payment_proto_rawDescData
}

var file_payment_v1alpha1_payment_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_payment_v1alpha1_payment_proto_goTypes = []interface{}{
	(*Payment)(nil),     // 0: payment.v1alpha1.Payment
	(*PaymentList)(nil), // 1: payment.v1alpha1.PaymentList
}
var file_payment_v1alpha1_payment_proto_depIdxs = []int32{
	0, // 0: payment.v1alpha1.PaymentList.items:type_name -> payment.v1alpha1.Payment
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_payment_v1alpha1_payment_proto_init() }
func file_payment_v1alpha1_payment_proto_init() {
	if File_payment_v1alpha1_payment_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_payment_v1alpha1_payment_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Payment); i {
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
		file_payment_v1alpha1_payment_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PaymentList); i {
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
			RawDescriptor: file_payment_v1alpha1_payment_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_payment_v1alpha1_payment_proto_goTypes,
		DependencyIndexes: file_payment_v1alpha1_payment_proto_depIdxs,
		MessageInfos:      file_payment_v1alpha1_payment_proto_msgTypes,
	}.Build()
	File_payment_v1alpha1_payment_proto = out.File
	file_payment_v1alpha1_payment_proto_rawDesc = nil
	file_payment_v1alpha1_payment_proto_goTypes = nil
	file_payment_v1alpha1_payment_proto_depIdxs = nil
}
