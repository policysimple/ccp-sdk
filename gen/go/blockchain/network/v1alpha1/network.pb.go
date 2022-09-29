// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: blockchain/network/v1alpha1/network.proto

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

type Network struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	NetworkName string `protobuf:"bytes,2,opt,name=network_name,json=networkName,proto3" json:"network_name,omitempty"`
	Framework   string `protobuf:"bytes,3,opt,name=framework,proto3" json:"framework,omitempty"`
	Type        string `protobuf:"bytes,4,opt,name=type,proto3" json:"type,omitempty"`
	UserId      string `protobuf:"bytes,5,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Status      string `protobuf:"bytes,6,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *Network) Reset() {
	*x = Network{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Network) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Network) ProtoMessage() {}

func (x *Network) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Network.ProtoReflect.Descriptor instead.
func (*Network) Descriptor() ([]byte, []int) {
	return file_blockchain_network_v1alpha1_network_proto_rawDescGZIP(), []int{0}
}

func (x *Network) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Network) GetNetworkName() string {
	if x != nil {
		return x.NetworkName
	}
	return ""
}

func (x *Network) GetFramework() string {
	if x != nil {
		return x.Framework
	}
	return ""
}

func (x *Network) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Network) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Network) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type Organization struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	UserId        string `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Domain        string `protobuf:"bytes,3,opt,name=domain,proto3" json:"domain,omitempty"`
	AdminPassword string `protobuf:"bytes,4,opt,name=admin_password,json=adminPassword,proto3" json:"admin_password,omitempty"`
	AdminUser     string `protobuf:"bytes,5,opt,name=admin_user,json=adminUser,proto3" json:"admin_user,omitempty"`
	BlockchainId  string `protobuf:"bytes,6,opt,name=blockchain_id,json=blockchainId,proto3" json:"blockchain_id,omitempty"`
}

func (x *Organization) Reset() {
	*x = Organization{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Organization) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Organization) ProtoMessage() {}

func (x *Organization) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[1]
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
	return file_blockchain_network_v1alpha1_network_proto_rawDescGZIP(), []int{1}
}

func (x *Organization) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Organization) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *Organization) GetDomain() string {
	if x != nil {
		return x.Domain
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

func (x *Organization) GetBlockchainId() string {
	if x != nil {
		return x.BlockchainId
	}
	return ""
}

type Channel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OrganizationId string   `protobuf:"bytes,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"` // Organizations that creates the channel
	BlockchainId   string   `protobuf:"bytes,3,opt,name=blockchain_id,json=blockchainId,proto3" json:"blockchain_id,omitempty"`
	Name           string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	OrgIds         []string `protobuf:"bytes,5,rep,name=org_ids,json=orgIds,proto3" json:"org_ids,omitempty"`
}

func (x *Channel) Reset() {
	*x = Channel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Channel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Channel) ProtoMessage() {}

func (x *Channel) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Channel.ProtoReflect.Descriptor instead.
func (*Channel) Descriptor() ([]byte, []int) {
	return file_blockchain_network_v1alpha1_network_proto_rawDescGZIP(), []int{2}
}

func (x *Channel) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Channel) GetOrganizationId() string {
	if x != nil {
		return x.OrganizationId
	}
	return ""
}

func (x *Channel) GetBlockchainId() string {
	if x != nil {
		return x.BlockchainId
	}
	return ""
}

func (x *Channel) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Channel) GetOrgIds() []string {
	if x != nil {
		return x.OrgIds
	}
	return nil
}

type Invitation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	FromUserId   string `protobuf:"bytes,2,opt,name=from_user_id,json=fromUserId,proto3" json:"from_user_id,omitempty"`
	Email        string `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	Status       string `protobuf:"bytes,4,opt,name=status,proto3" json:"status,omitempty"`
	BlockchainId string `protobuf:"bytes,5,opt,name=blockchain_id,json=blockchainId,proto3" json:"blockchain_id,omitempty"`
}

func (x *Invitation) Reset() {
	*x = Invitation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Invitation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Invitation) ProtoMessage() {}

func (x *Invitation) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_network_v1alpha1_network_proto_msgTypes[3]
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
	return file_blockchain_network_v1alpha1_network_proto_rawDescGZIP(), []int{3}
}

func (x *Invitation) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Invitation) GetFromUserId() string {
	if x != nil {
		return x.FromUserId
	}
	return ""
}

func (x *Invitation) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *Invitation) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *Invitation) GetBlockchainId() string {
	if x != nil {
		return x.BlockchainId
	}
	return ""
}

var File_blockchain_network_v1alpha1_network_proto protoreflect.FileDescriptor

var file_blockchain_network_v1alpha1_network_proto_rawDesc = []byte{
	0x0a, 0x29, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2f, 0x6e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x62, 0x6c, 0x6f,
	0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x9f, 0x01, 0x0a, 0x07, 0x4e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x66, 0x72, 0x61, 0x6d, 0x65,
	0x77, 0x6f, 0x72, 0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x66, 0x72, 0x61, 0x6d,
	0x65, 0x77, 0x6f, 0x72, 0x6b, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0xba, 0x01, 0x0a, 0x0c, 0x4f,
	0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75,
	0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12, 0x25, 0x0a, 0x0e,
	0x61, 0x64, 0x6d, 0x69, 0x6e, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x50, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x5f, 0x75, 0x73, 0x65,
	0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x55, 0x73,
	0x65, 0x72, 0x12, 0x23, 0x0a, 0x0d, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x62, 0x6c, 0x6f, 0x63, 0x6b,
	0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x22, 0x94, 0x01, 0x0a, 0x07, 0x43, 0x68, 0x61, 0x6e,
	0x6e, 0x65, 0x6c, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x6f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x23, 0x0a, 0x0d,
	0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x6f, 0x72, 0x67, 0x5f, 0x69, 0x64, 0x73,
	0x18, 0x05, 0x20, 0x03, 0x28, 0x09, 0x52, 0x06, 0x6f, 0x72, 0x67, 0x49, 0x64, 0x73, 0x22, 0x91,
	0x01, 0x0a, 0x0a, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x20, 0x0a,
	0x0c, 0x66, 0x72, 0x6f, 0x6d, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x66, 0x72, 0x6f, 0x6d, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12,
	0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x23, 0x0a,
	0x0d, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e,
	0x49, 0x64, 0x42, 0x3e, 0x5a, 0x3c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69,
	0x6e, 0x2f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_blockchain_network_v1alpha1_network_proto_rawDescOnce sync.Once
	file_blockchain_network_v1alpha1_network_proto_rawDescData = file_blockchain_network_v1alpha1_network_proto_rawDesc
)

func file_blockchain_network_v1alpha1_network_proto_rawDescGZIP() []byte {
	file_blockchain_network_v1alpha1_network_proto_rawDescOnce.Do(func() {
		file_blockchain_network_v1alpha1_network_proto_rawDescData = protoimpl.X.CompressGZIP(file_blockchain_network_v1alpha1_network_proto_rawDescData)
	})
	return file_blockchain_network_v1alpha1_network_proto_rawDescData
}

var file_blockchain_network_v1alpha1_network_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_blockchain_network_v1alpha1_network_proto_goTypes = []interface{}{
	(*Network)(nil),      // 0: blockchain.network.v1alpha1.Network
	(*Organization)(nil), // 1: blockchain.network.v1alpha1.Organization
	(*Channel)(nil),      // 2: blockchain.network.v1alpha1.Channel
	(*Invitation)(nil),   // 3: blockchain.network.v1alpha1.Invitation
}
var file_blockchain_network_v1alpha1_network_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_blockchain_network_v1alpha1_network_proto_init() }
func file_blockchain_network_v1alpha1_network_proto_init() {
	if File_blockchain_network_v1alpha1_network_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_blockchain_network_v1alpha1_network_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Network); i {
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
		file_blockchain_network_v1alpha1_network_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
		file_blockchain_network_v1alpha1_network_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Channel); i {
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
		file_blockchain_network_v1alpha1_network_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
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
			RawDescriptor: file_blockchain_network_v1alpha1_network_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_blockchain_network_v1alpha1_network_proto_goTypes,
		DependencyIndexes: file_blockchain_network_v1alpha1_network_proto_depIdxs,
		MessageInfos:      file_blockchain_network_v1alpha1_network_proto_msgTypes,
	}.Build()
	File_blockchain_network_v1alpha1_network_proto = out.File
	file_blockchain_network_v1alpha1_network_proto_rawDesc = nil
	file_blockchain_network_v1alpha1_network_proto_goTypes = nil
	file_blockchain_network_v1alpha1_network_proto_depIdxs = nil
}