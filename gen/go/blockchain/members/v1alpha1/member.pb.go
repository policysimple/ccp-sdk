// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: blockchain/members/v1alpha1/member.proto

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

type Organization struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId        string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	DomainOrg     string `protobuf:"bytes,2,opt,name=domain_org,json=domainOrg,proto3" json:"domain_org,omitempty"`
	AdminPassword string `protobuf:"bytes,3,opt,name=admin_password,json=adminPassword,proto3" json:"admin_password,omitempty"`
	AdminUser     string `protobuf:"bytes,4,opt,name=admin_user,json=adminUser,proto3" json:"admin_user,omitempty"`
	BcId          string `protobuf:"bytes,5,opt,name=bc_id,json=bcId,proto3" json:"bc_id,omitempty"`
}

func (x *Organization) Reset() {
	*x = Organization{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_members_v1alpha1_member_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Organization) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Organization) ProtoMessage() {}

func (x *Organization) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_members_v1alpha1_member_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Organization.ProtoReflect.Descriptor instead.
func (*Organization) Descriptor() ([]byte, []int) {
	return file_blockchain_members_v1alpha1_member_proto_rawDescGZIP(), []int{0}
}

func (x *Organization) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Organization) GetDomainOrg() string {
	if x != nil {
		return x.DomainOrg
	}
	return ""
}

func (x *Organization) GetAdminPassword() string {
	if x != nil {
		return x.AdminPassword
	}
	return ""
}

func (x *Organization) GetAdminUser() string {
	if x != nil {
		return x.AdminUser
	}
	return ""
}

func (x *Organization) GetBcId() string {
	if x != nil {
		return x.BcId
	}
	return ""
}

type Invitation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Email string `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	BcId  string `protobuf:"bytes,2,opt,name=bc_id,json=bcId,proto3" json:"bc_id,omitempty"`
}

func (x *Invitation) Reset() {
	*x = Invitation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_members_v1alpha1_member_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Invitation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Invitation) ProtoMessage() {}

func (x *Invitation) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_members_v1alpha1_member_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Invitation.ProtoReflect.Descriptor instead.
func (*Invitation) Descriptor() ([]byte, []int) {
	return file_blockchain_members_v1alpha1_member_proto_rawDescGZIP(), []int{1}
}

func (x *Invitation) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *Invitation) GetBcId() string {
	if x != nil {
		return x.BcId
	}
	return ""
}

var File_blockchain_members_v1alpha1_member_proto protoreflect.FileDescriptor

var file_blockchain_members_v1alpha1_member_proto_rawDesc = []byte{
	0x0a, 0x28, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2f, 0x6d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6d, 0x65,
	0x6d, 0x62, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0xa1, 0x01, 0x0a, 0x0c, 0x4f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x5f, 0x6f, 0x72, 0x67, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x4f, 0x72, 0x67,
	0x12, 0x25, 0x0a, 0x0e, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f,
	0x72, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x50,
	0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x5f, 0x75, 0x73, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x55, 0x73, 0x65, 0x72, 0x12, 0x13, 0x0a, 0x05, 0x62, 0x63, 0x5f, 0x69, 0x64, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x62, 0x63, 0x49, 0x64, 0x22, 0x37, 0x0a, 0x0a, 0x49,
	0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61,
	0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12,
	0x13, 0x0a, 0x05, 0x62, 0x63, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x62, 0x63, 0x49, 0x64, 0x42, 0xc0, 0x01, 0x0a, 0x25, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d,
	0x62, 0x79, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x6d, 0x65,
	0x6d, 0x62, 0x65, 0x72, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x16,
	0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d,
	0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b,
	0x63, 0x68, 0x61, 0x69, 0x6e, 0x2f, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x2f, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa, 0x02, 0x1a, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72,
	0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x1b, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5c, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x5c, 0x56,
	0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_blockchain_members_v1alpha1_member_proto_rawDescOnce sync.Once
	file_blockchain_members_v1alpha1_member_proto_rawDescData = file_blockchain_members_v1alpha1_member_proto_rawDesc
)

func file_blockchain_members_v1alpha1_member_proto_rawDescGZIP() []byte {
	file_blockchain_members_v1alpha1_member_proto_rawDescOnce.Do(func() {
		file_blockchain_members_v1alpha1_member_proto_rawDescData = protoimpl.X.CompressGZIP(file_blockchain_members_v1alpha1_member_proto_rawDescData)
	})
	return file_blockchain_members_v1alpha1_member_proto_rawDescData
}

var file_blockchain_members_v1alpha1_member_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_blockchain_members_v1alpha1_member_proto_goTypes = []interface{}{
	(*Organization)(nil), // 0: blockchain.members.v1alpha1.Organization
	(*Invitation)(nil),   // 1: blockchain.members.v1alpha1.Invitation
}
var file_blockchain_members_v1alpha1_member_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_blockchain_members_v1alpha1_member_proto_init() }
func file_blockchain_members_v1alpha1_member_proto_init() {
	if File_blockchain_members_v1alpha1_member_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_blockchain_members_v1alpha1_member_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Organization); i {
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
		file_blockchain_members_v1alpha1_member_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Invitation); i {
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
			RawDescriptor: file_blockchain_members_v1alpha1_member_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_blockchain_members_v1alpha1_member_proto_goTypes,
		DependencyIndexes: file_blockchain_members_v1alpha1_member_proto_depIdxs,
		MessageInfos:      file_blockchain_members_v1alpha1_member_proto_msgTypes,
	}.Build()
	File_blockchain_members_v1alpha1_member_proto = out.File
	file_blockchain_members_v1alpha1_member_proto_rawDesc = nil
	file_blockchain_members_v1alpha1_member_proto_goTypes = nil
	file_blockchain_members_v1alpha1_member_proto_depIdxs = nil
}
