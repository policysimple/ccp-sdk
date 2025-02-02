// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: blockchain/thepower/v1alpha1/thepower.proto

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

type BlockchainEnv int32

const (
	BlockchainEnv_BLOCKCHAIN_ENV_UNSPECIFIED BlockchainEnv = 0
	BlockchainEnv_BLOCKCHAIN_ENV_TESTNET     BlockchainEnv = 1
	BlockchainEnv_BLOCKCHAIN_ENV_MAINNET     BlockchainEnv = 2
)

// Enum value maps for BlockchainEnv.
var (
	BlockchainEnv_name = map[int32]string{
		0: "BLOCKCHAIN_ENV_UNSPECIFIED",
		1: "BLOCKCHAIN_ENV_TESTNET",
		2: "BLOCKCHAIN_ENV_MAINNET",
	}
	BlockchainEnv_value = map[string]int32{
		"BLOCKCHAIN_ENV_UNSPECIFIED": 0,
		"BLOCKCHAIN_ENV_TESTNET":     1,
		"BLOCKCHAIN_ENV_MAINNET":     2,
	}
)

func (x BlockchainEnv) Enum() *BlockchainEnv {
	p := new(BlockchainEnv)
	*p = x
	return p
}

func (x BlockchainEnv) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BlockchainEnv) Descriptor() protoreflect.EnumDescriptor {
	return file_blockchain_thepower_v1alpha1_thepower_proto_enumTypes[0].Descriptor()
}

func (BlockchainEnv) Type() protoreflect.EnumType {
	return &file_blockchain_thepower_v1alpha1_thepower_proto_enumTypes[0]
}

func (x BlockchainEnv) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BlockchainEnv.Descriptor instead.
func (BlockchainEnv) EnumDescriptor() ([]byte, []int) {
	return file_blockchain_thepower_v1alpha1_thepower_proto_rawDescGZIP(), []int{0}
}

type TpChain struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                string               `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	ChainNumber       int32                `protobuf:"varint,2,opt,name=chain_number,json=chainNumber,proto3" json:"chain_number,omitempty"`
	UserId            string               `protobuf:"bytes,3,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	ChainNodes        []*TpNode            `protobuf:"bytes,4,rep,name=chain_nodes,json=chainNodes,proto3" json:"chain_nodes,omitempty"`
	Status            string               `protobuf:"bytes,5,opt,name=status,proto3" json:"status,omitempty"`
	ErrorDetails      string               `protobuf:"bytes,6,opt,name=error_details,json=errorDetails,proto3" json:"error_details,omitempty"`
	CreatedAt         string               `protobuf:"bytes,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt         string               `protobuf:"bytes,8,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	Settings          *TeaCeremonySettings `protobuf:"bytes,9,opt,name=settings,proto3" json:"settings,omitempty"`
	CcpOrganizationId string               `protobuf:"bytes,10,opt,name=ccp_organization_id,json=ccpOrganizationId,proto3" json:"ccp_organization_id,omitempty"`
	Environment       BlockchainEnv        `protobuf:"varint,12,opt,name=environment,proto3,enum=blockchain.thepower.v1alpha1.BlockchainEnv" json:"environment,omitempty"`
}

func (x *TpChain) Reset() {
	*x = TpChain{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TpChain) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TpChain) ProtoMessage() {}

func (x *TpChain) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TpChain.ProtoReflect.Descriptor instead.
func (*TpChain) Descriptor() ([]byte, []int) {
	return file_blockchain_thepower_v1alpha1_thepower_proto_rawDescGZIP(), []int{0}
}

func (x *TpChain) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *TpChain) GetChainNumber() int32 {
	if x != nil {
		return x.ChainNumber
	}
	return 0
}

func (x *TpChain) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *TpChain) GetChainNodes() []*TpNode {
	if x != nil {
		return x.ChainNodes
	}
	return nil
}

func (x *TpChain) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *TpChain) GetErrorDetails() string {
	if x != nil {
		return x.ErrorDetails
	}
	return ""
}

func (x *TpChain) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *TpChain) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

func (x *TpChain) GetSettings() *TeaCeremonySettings {
	if x != nil {
		return x.Settings
	}
	return nil
}

func (x *TpChain) GetCcpOrganizationId() string {
	if x != nil {
		return x.CcpOrganizationId
	}
	return ""
}

func (x *TpChain) GetEnvironment() BlockchainEnv {
	if x != nil {
		return x.Environment
	}
	return BlockchainEnv_BLOCKCHAIN_ENV_UNSPECIFIED
}

type TpNode struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Nodename           string                `protobuf:"bytes,1,opt,name=nodename,proto3" json:"nodename,omitempty"`
	TpicPort           int64                 `protobuf:"varint,2,opt,name=tpic_port,json=tpicPort,proto3" json:"tpic_port,omitempty"`
	ApiPort            int64                 `protobuf:"varint,3,opt,name=api_port,json=apiPort,proto3" json:"api_port,omitempty"`
	ApisPort           int64                 `protobuf:"varint,4,opt,name=apis_port,json=apisPort,proto3" json:"apis_port,omitempty"`
	CcPort             int64                 `protobuf:"varint,5,opt,name=cc_port,json=ccPort,proto3" json:"cc_port,omitempty"`
	CrosschainExternal []*CrosschainExternal `protobuf:"bytes,6,rep,name=crosschain_external,json=crosschainExternal,proto3" json:"crosschain_external,omitempty"`
}

func (x *TpNode) Reset() {
	*x = TpNode{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TpNode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TpNode) ProtoMessage() {}

func (x *TpNode) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TpNode.ProtoReflect.Descriptor instead.
func (*TpNode) Descriptor() ([]byte, []int) {
	return file_blockchain_thepower_v1alpha1_thepower_proto_rawDescGZIP(), []int{1}
}

func (x *TpNode) GetNodename() string {
	if x != nil {
		return x.Nodename
	}
	return ""
}

func (x *TpNode) GetTpicPort() int64 {
	if x != nil {
		return x.TpicPort
	}
	return 0
}

func (x *TpNode) GetApiPort() int64 {
	if x != nil {
		return x.ApiPort
	}
	return 0
}

func (x *TpNode) GetApisPort() int64 {
	if x != nil {
		return x.ApisPort
	}
	return 0
}

func (x *TpNode) GetCcPort() int64 {
	if x != nil {
		return x.CcPort
	}
	return 0
}

func (x *TpNode) GetCrosschainExternal() []*CrosschainExternal {
	if x != nil {
		return x.CrosschainExternal
	}
	return nil
}

type CrosschainExternal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Host string `protobuf:"bytes,1,opt,name=host,proto3" json:"host,omitempty"`
	Port int64  `protobuf:"varint,2,opt,name=port,proto3" json:"port,omitempty"`
}

func (x *CrosschainExternal) Reset() {
	*x = CrosschainExternal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CrosschainExternal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CrosschainExternal) ProtoMessage() {}

func (x *CrosschainExternal) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CrosschainExternal.ProtoReflect.Descriptor instead.
func (*CrosschainExternal) Descriptor() ([]byte, []int) {
	return file_blockchain_thepower_v1alpha1_thepower_proto_rawDescGZIP(), []int{2}
}

func (x *CrosschainExternal) GetHost() string {
	if x != nil {
		return x.Host
	}
	return ""
}

func (x *CrosschainExternal) GetPort() int64 {
	if x != nil {
		return x.Port
	}
	return 0
}

type TeaCeremonySettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChainBlocktime  int64 `protobuf:"varint,1,opt,name=chain_blocktime,json=chainBlocktime,proto3" json:"chain_blocktime,omitempty"`
	ChainMinsig     int64 `protobuf:"varint,2,opt,name=chain_minsig,json=chainMinsig,proto3" json:"chain_minsig,omitempty"`
	ChainAllowEmpty int64 `protobuf:"varint,3,opt,name=chain_allow_empty,json=chainAllowEmpty,proto3" json:"chain_allow_empty,omitempty"`
	ChainPatchSigs  int64 `protobuf:"varint,4,opt,name=chain_patch_sigs,json=chainPatchSigs,proto3" json:"chain_patch_sigs,omitempty"`
	AllocblockGroup int64 `protobuf:"varint,5,opt,name=allocblock_group,json=allocblockGroup,proto3" json:"allocblock_group,omitempty"`
	AllocblockLast  int64 `protobuf:"varint,6,opt,name=allocblock_last,json=allocblockLast,proto3" json:"allocblock_last,omitempty"`
	Freegas         int64 `protobuf:"varint,7,opt,name=freegas,proto3" json:"freegas,omitempty"`
	GasSk           int64 `protobuf:"varint,8,opt,name=gas_sk,json=gasSk,proto3" json:"gas_sk,omitempty"`
	Nosk            int64 `protobuf:"varint,9,opt,name=nosk,proto3" json:"nosk,omitempty"`
}

func (x *TeaCeremonySettings) Reset() {
	*x = TeaCeremonySettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TeaCeremonySettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TeaCeremonySettings) ProtoMessage() {}

func (x *TeaCeremonySettings) ProtoReflect() protoreflect.Message {
	mi := &file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TeaCeremonySettings.ProtoReflect.Descriptor instead.
func (*TeaCeremonySettings) Descriptor() ([]byte, []int) {
	return file_blockchain_thepower_v1alpha1_thepower_proto_rawDescGZIP(), []int{3}
}

func (x *TeaCeremonySettings) GetChainBlocktime() int64 {
	if x != nil {
		return x.ChainBlocktime
	}
	return 0
}

func (x *TeaCeremonySettings) GetChainMinsig() int64 {
	if x != nil {
		return x.ChainMinsig
	}
	return 0
}

func (x *TeaCeremonySettings) GetChainAllowEmpty() int64 {
	if x != nil {
		return x.ChainAllowEmpty
	}
	return 0
}

func (x *TeaCeremonySettings) GetChainPatchSigs() int64 {
	if x != nil {
		return x.ChainPatchSigs
	}
	return 0
}

func (x *TeaCeremonySettings) GetAllocblockGroup() int64 {
	if x != nil {
		return x.AllocblockGroup
	}
	return 0
}

func (x *TeaCeremonySettings) GetAllocblockLast() int64 {
	if x != nil {
		return x.AllocblockLast
	}
	return 0
}

func (x *TeaCeremonySettings) GetFreegas() int64 {
	if x != nil {
		return x.Freegas
	}
	return 0
}

func (x *TeaCeremonySettings) GetGasSk() int64 {
	if x != nil {
		return x.GasSk
	}
	return 0
}

func (x *TeaCeremonySettings) GetNosk() int64 {
	if x != nil {
		return x.Nosk
	}
	return 0
}

var File_blockchain_thepower_v1alpha1_thepower_proto protoreflect.FileDescriptor

var file_blockchain_thepower_v1alpha1_thepower_proto_rawDesc = []byte{
	0x0a, 0x2b, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2f, 0x74, 0x68, 0x65,
	0x70, 0x6f, 0x77, 0x65, 0x72, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x74,
	0x68, 0x65, 0x70, 0x6f, 0x77, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x62,
	0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x74, 0x68, 0x65, 0x70, 0x6f, 0x77,
	0x65, 0x72, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0xe5, 0x03, 0x0a, 0x07,
	0x54, 0x70, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x68, 0x61, 0x69, 0x6e,
	0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x12, 0x45, 0x0a, 0x0b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x6e, 0x6f, 0x64,
	0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b,
	0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x74, 0x68, 0x65, 0x70, 0x6f, 0x77, 0x65, 0x72, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x70, 0x4e, 0x6f, 0x64, 0x65, 0x52, 0x0a,
	0x63, 0x68, 0x61, 0x69, 0x6e, 0x4e, 0x6f, 0x64, 0x65, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x23, 0x0a, 0x0d, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x64, 0x65, 0x74, 0x61,
	0x69, 0x6c, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x65, 0x72, 0x72, 0x6f, 0x72,
	0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x4d, 0x0a, 0x08, 0x73, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67,
	0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x31, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x2e, 0x74, 0x68, 0x65, 0x70, 0x6f, 0x77, 0x65, 0x72, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x65, 0x61, 0x43, 0x65, 0x72, 0x65, 0x6d, 0x6f,
	0x6e, 0x79, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x52, 0x08, 0x73, 0x65, 0x74, 0x74,
	0x69, 0x6e, 0x67, 0x73, 0x12, 0x2e, 0x0a, 0x13, 0x63, 0x63, 0x70, 0x5f, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x11, 0x63, 0x63, 0x70, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x49, 0x64, 0x12, 0x4d, 0x0a, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2b, 0x2e, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2e, 0x74, 0x68, 0x65, 0x70, 0x6f, 0x77, 0x65, 0x72, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68,
	0x61, 0x69, 0x6e, 0x45, 0x6e, 0x76, 0x52, 0x0b, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x22, 0xf5, 0x01, 0x0a, 0x06, 0x54, 0x70, 0x4e, 0x6f, 0x64, 0x65, 0x12, 0x1a,
	0x0a, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x70,
	0x69, 0x63, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x74,
	0x70, 0x69, 0x63, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x61, 0x70, 0x69, 0x5f, 0x70,
	0x6f, 0x72, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x61, 0x70, 0x69, 0x50, 0x6f,
	0x72, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x61, 0x70, 0x69, 0x73, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x61, 0x70, 0x69, 0x73, 0x50, 0x6f, 0x72, 0x74, 0x12,
	0x17, 0x0a, 0x07, 0x63, 0x63, 0x5f, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x06, 0x63, 0x63, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x61, 0x0a, 0x13, 0x63, 0x72, 0x6f, 0x73,
	0x73, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x18,
	0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61,
	0x69, 0x6e, 0x2e, 0x74, 0x68, 0x65, 0x70, 0x6f, 0x77, 0x65, 0x72, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x6f, 0x73, 0x73, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x45,
	0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x52, 0x12, 0x63, 0x72, 0x6f, 0x73, 0x73, 0x63, 0x68,
	0x61, 0x69, 0x6e, 0x45, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x22, 0x3c, 0x0a, 0x12, 0x43,
	0x72, 0x6f, 0x73, 0x73, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x45, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61,
	0x6c, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x6f, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x68, 0x6f, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x22, 0xd0, 0x02, 0x0a, 0x13, 0x54, 0x65,
	0x61, 0x43, 0x65, 0x72, 0x65, 0x6d, 0x6f, 0x6e, 0x79, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67,
	0x73, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b,
	0x74, 0x69, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x63, 0x68, 0x61, 0x69,
	0x6e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x68,
	0x61, 0x69, 0x6e, 0x5f, 0x6d, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x0b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x4d, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x12, 0x2a, 0x0a,
	0x11, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x5f, 0x65, 0x6d, 0x70,
	0x74, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x41,
	0x6c, 0x6c, 0x6f, 0x77, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x28, 0x0a, 0x10, 0x63, 0x68, 0x61,
	0x69, 0x6e, 0x5f, 0x70, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x73, 0x69, 0x67, 0x73, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x0e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x50, 0x61, 0x74, 0x63, 0x68, 0x53,
	0x69, 0x67, 0x73, 0x12, 0x29, 0x0a, 0x10, 0x61, 0x6c, 0x6c, 0x6f, 0x63, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x5f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0f, 0x61,
	0x6c, 0x6c, 0x6f, 0x63, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x27,
	0x0a, 0x0f, 0x61, 0x6c, 0x6c, 0x6f, 0x63, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x6c, 0x61, 0x73,
	0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x61, 0x6c, 0x6c, 0x6f, 0x63, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x4c, 0x61, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x66, 0x72, 0x65, 0x65, 0x67,
	0x61, 0x73, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x66, 0x72, 0x65, 0x65, 0x67, 0x61,
	0x73, 0x12, 0x15, 0x0a, 0x06, 0x67, 0x61, 0x73, 0x5f, 0x73, 0x6b, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x05, 0x67, 0x61, 0x73, 0x53, 0x6b, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x6f, 0x73, 0x6b,
	0x18, 0x09, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x6e, 0x6f, 0x73, 0x6b, 0x2a, 0x67, 0x0a, 0x0d,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x45, 0x6e, 0x76, 0x12, 0x1e, 0x0a,
	0x1a, 0x42, 0x4c, 0x4f, 0x43, 0x4b, 0x43, 0x48, 0x41, 0x49, 0x4e, 0x5f, 0x45, 0x4e, 0x56, 0x5f,
	0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1a, 0x0a,
	0x16, 0x42, 0x4c, 0x4f, 0x43, 0x4b, 0x43, 0x48, 0x41, 0x49, 0x4e, 0x5f, 0x45, 0x4e, 0x56, 0x5f,
	0x54, 0x45, 0x53, 0x54, 0x4e, 0x45, 0x54, 0x10, 0x01, 0x12, 0x1a, 0x0a, 0x16, 0x42, 0x4c, 0x4f,
	0x43, 0x4b, 0x43, 0x48, 0x41, 0x49, 0x4e, 0x5f, 0x45, 0x4e, 0x56, 0x5f, 0x4d, 0x41, 0x49, 0x4e,
	0x4e, 0x45, 0x54, 0x10, 0x02, 0x42, 0x3f, 0x5a, 0x3d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73,
	0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x2f, 0x74, 0x68, 0x65, 0x70, 0x6f, 0x77, 0x65, 0x72, 0x2f, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_blockchain_thepower_v1alpha1_thepower_proto_rawDescOnce sync.Once
	file_blockchain_thepower_v1alpha1_thepower_proto_rawDescData = file_blockchain_thepower_v1alpha1_thepower_proto_rawDesc
)

func file_blockchain_thepower_v1alpha1_thepower_proto_rawDescGZIP() []byte {
	file_blockchain_thepower_v1alpha1_thepower_proto_rawDescOnce.Do(func() {
		file_blockchain_thepower_v1alpha1_thepower_proto_rawDescData = protoimpl.X.CompressGZIP(file_blockchain_thepower_v1alpha1_thepower_proto_rawDescData)
	})
	return file_blockchain_thepower_v1alpha1_thepower_proto_rawDescData
}

var file_blockchain_thepower_v1alpha1_thepower_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_blockchain_thepower_v1alpha1_thepower_proto_goTypes = []interface{}{
	(BlockchainEnv)(0),          // 0: blockchain.thepower.v1alpha1.BlockchainEnv
	(*TpChain)(nil),             // 1: blockchain.thepower.v1alpha1.TpChain
	(*TpNode)(nil),              // 2: blockchain.thepower.v1alpha1.TpNode
	(*CrosschainExternal)(nil),  // 3: blockchain.thepower.v1alpha1.CrosschainExternal
	(*TeaCeremonySettings)(nil), // 4: blockchain.thepower.v1alpha1.TeaCeremonySettings
}
var file_blockchain_thepower_v1alpha1_thepower_proto_depIdxs = []int32{
	2, // 0: blockchain.thepower.v1alpha1.TpChain.chain_nodes:type_name -> blockchain.thepower.v1alpha1.TpNode
	4, // 1: blockchain.thepower.v1alpha1.TpChain.settings:type_name -> blockchain.thepower.v1alpha1.TeaCeremonySettings
	0, // 2: blockchain.thepower.v1alpha1.TpChain.environment:type_name -> blockchain.thepower.v1alpha1.BlockchainEnv
	3, // 3: blockchain.thepower.v1alpha1.TpNode.crosschain_external:type_name -> blockchain.thepower.v1alpha1.CrosschainExternal
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_blockchain_thepower_v1alpha1_thepower_proto_init() }
func file_blockchain_thepower_v1alpha1_thepower_proto_init() {
	if File_blockchain_thepower_v1alpha1_thepower_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TpChain); i {
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
		file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TpNode); i {
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
		file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CrosschainExternal); i {
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
		file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TeaCeremonySettings); i {
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
			RawDescriptor: file_blockchain_thepower_v1alpha1_thepower_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_blockchain_thepower_v1alpha1_thepower_proto_goTypes,
		DependencyIndexes: file_blockchain_thepower_v1alpha1_thepower_proto_depIdxs,
		EnumInfos:         file_blockchain_thepower_v1alpha1_thepower_proto_enumTypes,
		MessageInfos:      file_blockchain_thepower_v1alpha1_thepower_proto_msgTypes,
	}.Build()
	File_blockchain_thepower_v1alpha1_thepower_proto = out.File
	file_blockchain_thepower_v1alpha1_thepower_proto_rawDesc = nil
	file_blockchain_thepower_v1alpha1_thepower_proto_goTypes = nil
	file_blockchain_thepower_v1alpha1_thepower_proto_depIdxs = nil
}
