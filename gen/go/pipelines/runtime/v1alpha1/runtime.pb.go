// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.17.3
// source: pipelines/runtime/v1alpha1/runtime.proto

package runtimev1alpha1

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

type TrafficType int32

const (
	TrafficType_TRAFFIC_TYPE_UNSPECIFIED TrafficType = 0
	TrafficType_TRAFFIC_TYPE_EXTERNAL    TrafficType = 1
	TrafficType_TRAFFIC_TYPE_INTERNAL    TrafficType = 2
)

// Enum value maps for TrafficType.
var (
	TrafficType_name = map[int32]string{
		0: "TRAFFIC_TYPE_UNSPECIFIED",
		1: "TRAFFIC_TYPE_EXTERNAL",
		2: "TRAFFIC_TYPE_INTERNAL",
	}
	TrafficType_value = map[string]int32{
		"TRAFFIC_TYPE_UNSPECIFIED": 0,
		"TRAFFIC_TYPE_EXTERNAL":    1,
		"TRAFFIC_TYPE_INTERNAL":    2,
	}
)

func (x TrafficType) Enum() *TrafficType {
	p := new(TrafficType)
	*p = x
	return p
}

func (x TrafficType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TrafficType) Descriptor() protoreflect.EnumDescriptor {
	return file_pipelines_runtime_v1alpha1_runtime_proto_enumTypes[0].Descriptor()
}

func (TrafficType) Type() protoreflect.EnumType {
	return &file_pipelines_runtime_v1alpha1_runtime_proto_enumTypes[0]
}

func (x TrafficType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TrafficType.Descriptor instead.
func (TrafficType) EnumDescriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{0}
}

// Runtime ...
type Runtime struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                      string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                    string            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	InstanceTypes           []*IntanceType    `protobuf:"bytes,4,rep,name=instance_types,json=instanceTypes,proto3" json:"instance_types,omitempty"`
	OrganizationId          uint32            `protobuf:"varint,5,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId               uint32            `protobuf:"varint,6,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	ApplicationId           string            `protobuf:"bytes,7,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
	WorkspaceId             string            `protobuf:"bytes,8,opt,name=workspace_id,json=workspaceId,proto3" json:"workspace_id,omitempty"`
	EnvironmentId           string            `protobuf:"bytes,9,opt,name=environment_id,json=environmentId,proto3" json:"environment_id,omitempty"`
	Scaler                  string            `protobuf:"bytes,10,opt,name=scaler,proto3" json:"scaler,omitempty"`
	PodStatus               string            `protobuf:"bytes,11,opt,name=pod_status,json=podStatus,proto3" json:"pod_status,omitempty"`
	PodStatusMsg            string            `protobuf:"bytes,12,opt,name=pod_status_msg,json=podStatusMsg,proto3" json:"pod_status_msg,omitempty"`
	Integration             map[string]string `protobuf:"bytes,13,rep,name=integration,proto3" json:"integration,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	EnvironmentVariables    map[string]string `protobuf:"bytes,14,rep,name=environment_variables,json=environmentVariables,proto3" json:"environment_variables,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Commands                map[string]string `protobuf:"bytes,15,rep,name=commands,proto3" json:"commands,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Secrets                 map[string]string `protobuf:"bytes,16,rep,name=secrets,proto3" json:"secrets,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	ExtraArgs               map[string]string `protobuf:"bytes,17,rep,name=extra_args,json=extraArgs,proto3" json:"extra_args,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Autoscaling             map[string]string `protobuf:"bytes,18,rep,name=autoscaling,proto3" json:"autoscaling,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	TrafficType             TrafficType       `protobuf:"varint,19,opt,name=traffic_type,json=trafficType,proto3,enum=pipelines.runtime.v1alpha1.TrafficType" json:"traffic_type,omitempty"`
	ResponseMessage         string            `protobuf:"bytes,20,opt,name=response_message,json=responseMessage,proto3" json:"response_message,omitempty"`
	EnvironmentName         string            `protobuf:"bytes,21,opt,name=environment_name,json=environmentName,proto3" json:"environment_name,omitempty"`
	EnvironmentInternalName string            `protobuf:"bytes,22,opt,name=environment_internal_name,json=environmentInternalName,proto3" json:"environment_internal_name,omitempty"`
	ApplicationName         string            `protobuf:"bytes,23,opt,name=application_name,json=applicationName,proto3" json:"application_name,omitempty"`
	StorageUsed             uint32            `protobuf:"varint,24,opt,name=storage_used,json=storageUsed,proto3" json:"storage_used,omitempty"`
	StorageLimit            uint32            `protobuf:"varint,25,opt,name=storage_limit,json=storageLimit,proto3" json:"storage_limit,omitempty"`
}

func (x *Runtime) Reset() {
	*x = Runtime{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Runtime) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Runtime) ProtoMessage() {}

func (x *Runtime) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Runtime.ProtoReflect.Descriptor instead.
func (*Runtime) Descriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{0}
}

func (x *Runtime) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Runtime) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Runtime) GetInstanceTypes() []*IntanceType {
	if x != nil {
		return x.InstanceTypes
	}
	return nil
}

func (x *Runtime) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Runtime) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *Runtime) GetApplicationId() string {
	if x != nil {
		return x.ApplicationId
	}
	return ""
}

func (x *Runtime) GetWorkspaceId() string {
	if x != nil {
		return x.WorkspaceId
	}
	return ""
}

func (x *Runtime) GetEnvironmentId() string {
	if x != nil {
		return x.EnvironmentId
	}
	return ""
}

func (x *Runtime) GetScaler() string {
	if x != nil {
		return x.Scaler
	}
	return ""
}

func (x *Runtime) GetPodStatus() string {
	if x != nil {
		return x.PodStatus
	}
	return ""
}

func (x *Runtime) GetPodStatusMsg() string {
	if x != nil {
		return x.PodStatusMsg
	}
	return ""
}

func (x *Runtime) GetIntegration() map[string]string {
	if x != nil {
		return x.Integration
	}
	return nil
}

func (x *Runtime) GetEnvironmentVariables() map[string]string {
	if x != nil {
		return x.EnvironmentVariables
	}
	return nil
}

func (x *Runtime) GetCommands() map[string]string {
	if x != nil {
		return x.Commands
	}
	return nil
}

func (x *Runtime) GetSecrets() map[string]string {
	if x != nil {
		return x.Secrets
	}
	return nil
}

func (x *Runtime) GetExtraArgs() map[string]string {
	if x != nil {
		return x.ExtraArgs
	}
	return nil
}

func (x *Runtime) GetAutoscaling() map[string]string {
	if x != nil {
		return x.Autoscaling
	}
	return nil
}

func (x *Runtime) GetTrafficType() TrafficType {
	if x != nil {
		return x.TrafficType
	}
	return TrafficType_TRAFFIC_TYPE_UNSPECIFIED
}

func (x *Runtime) GetResponseMessage() string {
	if x != nil {
		return x.ResponseMessage
	}
	return ""
}

func (x *Runtime) GetEnvironmentName() string {
	if x != nil {
		return x.EnvironmentName
	}
	return ""
}

func (x *Runtime) GetEnvironmentInternalName() string {
	if x != nil {
		return x.EnvironmentInternalName
	}
	return ""
}

func (x *Runtime) GetApplicationName() string {
	if x != nil {
		return x.ApplicationName
	}
	return ""
}

func (x *Runtime) GetStorageUsed() uint32 {
	if x != nil {
		return x.StorageUsed
	}
	return 0
}

func (x *Runtime) GetStorageLimit() uint32 {
	if x != nil {
		return x.StorageLimit
	}
	return 0
}

type RuntimeList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Items []*Runtime `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
}

func (x *RuntimeList) Reset() {
	*x = RuntimeList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RuntimeList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RuntimeList) ProtoMessage() {}

func (x *RuntimeList) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RuntimeList.ProtoReflect.Descriptor instead.
func (*RuntimeList) Descriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{1}
}

func (x *RuntimeList) GetItems() []*Runtime {
	if x != nil {
		return x.Items
	}
	return nil
}

type IntanceType struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name           string            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	ResourcesRules []*ResourcesRules `protobuf:"bytes,3,rep,name=resources_rules,json=resourcesRules,proto3" json:"resources_rules,omitempty"`
}

func (x *IntanceType) Reset() {
	*x = IntanceType{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IntanceType) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IntanceType) ProtoMessage() {}

func (x *IntanceType) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IntanceType.ProtoReflect.Descriptor instead.
func (*IntanceType) Descriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{2}
}

func (x *IntanceType) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *IntanceType) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *IntanceType) GetResourcesRules() []*ResourcesRules {
	if x != nil {
		return x.ResourcesRules
	}
	return nil
}

type ResourcesRules struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit   []*Limit   `protobuf:"bytes,3,rep,name=limit,proto3" json:"limit,omitempty"`
	Request []*Request `protobuf:"bytes,4,rep,name=request,proto3" json:"request,omitempty"`
}

func (x *ResourcesRules) Reset() {
	*x = ResourcesRules{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResourcesRules) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResourcesRules) ProtoMessage() {}

func (x *ResourcesRules) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResourcesRules.ProtoReflect.Descriptor instead.
func (*ResourcesRules) Descriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{3}
}

func (x *ResourcesRules) GetLimit() []*Limit {
	if x != nil {
		return x.Limit
	}
	return nil
}

func (x *ResourcesRules) GetRequest() []*Request {
	if x != nil {
		return x.Request
	}
	return nil
}

type Limit struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Cpu string `protobuf:"bytes,1,opt,name=cpu,proto3" json:"cpu,omitempty"`
	Ram string `protobuf:"bytes,2,opt,name=ram,proto3" json:"ram,omitempty"`
}

func (x *Limit) Reset() {
	*x = Limit{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Limit) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Limit) ProtoMessage() {}

func (x *Limit) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Limit.ProtoReflect.Descriptor instead.
func (*Limit) Descriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{4}
}

func (x *Limit) GetCpu() string {
	if x != nil {
		return x.Cpu
	}
	return ""
}

func (x *Limit) GetRam() string {
	if x != nil {
		return x.Ram
	}
	return ""
}

type Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Cpu string `protobuf:"bytes,1,opt,name=cpu,proto3" json:"cpu,omitempty"`
	Ram string `protobuf:"bytes,2,opt,name=ram,proto3" json:"ram,omitempty"`
}

func (x *Request) Reset() {
	*x = Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

func (x *Request) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Request.ProtoReflect.Descriptor instead.
func (*Request) Descriptor() ([]byte, []int) {
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP(), []int{5}
}

func (x *Request) GetCpu() string {
	if x != nil {
		return x.Cpu
	}
	return ""
}

func (x *Request) GetRam() string {
	if x != nil {
		return x.Ram
	}
	return ""
}

var File_pipelines_runtime_v1alpha1_runtime_proto protoreflect.FileDescriptor

var file_pipelines_runtime_v1alpha1_runtime_proto_rawDesc = []byte{
	0x0a, 0x28, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x72, 0x75, 0x6e, 0x74,
	0x69, 0x6d, 0x65, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x75, 0x6e,
	0x74, 0x69, 0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1a, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0xf6, 0x0c, 0x0a, 0x07, 0x52, 0x75, 0x6e, 0x74, 0x69,
	0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x4e, 0x0a, 0x0e, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27,
	0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69,
	0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x49, 0x6e, 0x74, 0x61,
	0x6e, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0d, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x73, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69,
	0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12,
	0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x25,
	0x0a, 0x0e, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x77, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61,
	0x63, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x77, 0x6f, 0x72,
	0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12,
	0x16, 0x0a, 0x06, 0x73, 0x63, 0x61, 0x6c, 0x65, 0x72, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x73, 0x63, 0x61, 0x6c, 0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x6f, 0x64, 0x5f, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x6f, 0x64,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x24, 0x0a, 0x0e, 0x70, 0x6f, 0x64, 0x5f, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x5f, 0x6d, 0x73, 0x67, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c,
	0x70, 0x6f, 0x64, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x4d, 0x73, 0x67, 0x12, 0x56, 0x0a, 0x0b,
	0x69, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0d, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x34, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75,
	0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52,
	0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x49, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0b, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x72, 0x0a, 0x15, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x18, 0x0e, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x3d, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e,
	0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x52, 0x14, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56,
	0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x12, 0x4d, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x73, 0x18, 0x0f, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x31, 0x2e, 0x70, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x63,
	0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x12, 0x4a, 0x0a, 0x07, 0x73, 0x65, 0x63, 0x72, 0x65,
	0x74, 0x73, 0x18, 0x10, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x53, 0x65,
	0x63, 0x72, 0x65, 0x74, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x73, 0x65, 0x63, 0x72,
	0x65, 0x74, 0x73, 0x12, 0x51, 0x0a, 0x0a, 0x65, 0x78, 0x74, 0x72, 0x61, 0x5f, 0x61, 0x72, 0x67,
	0x73, 0x18, 0x11, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x45, 0x78, 0x74,
	0x72, 0x61, 0x41, 0x72, 0x67, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x09, 0x65, 0x78, 0x74,
	0x72, 0x61, 0x41, 0x72, 0x67, 0x73, 0x12, 0x56, 0x0a, 0x0b, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63,
	0x61, 0x6c, 0x69, 0x6e, 0x67, 0x18, 0x12, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x34, 0x2e, 0x70, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65,
	0x2e, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x0b, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x12, 0x4a,
	0x0a, 0x0c, 0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x13,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73,
	0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x54, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0b, 0x74,
	0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x54, 0x79, 0x70, 0x65, 0x12, 0x29, 0x0a, 0x10, 0x72, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x14,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x29, 0x0a, 0x10, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x15, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0f, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x3a, 0x0a, 0x19, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f,
	0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x16, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x17, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74,
	0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x29, 0x0a, 0x10,
	0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x17, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x73, 0x74, 0x6f, 0x72, 0x61,
	0x67, 0x65, 0x5f, 0x75, 0x73, 0x65, 0x64, 0x18, 0x18, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0b, 0x73,
	0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x55, 0x73, 0x65, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x74,
	0x6f, 0x72, 0x61, 0x67, 0x65, 0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x19, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x0c, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x1a,
	0x3e, 0x0a, 0x10, 0x49, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a,
	0x47, 0x0a, 0x19, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56, 0x61,
	0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3b, 0x0a, 0x0d, 0x43, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3a, 0x0a, 0x0c, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38,
	0x01, 0x1a, 0x3c, 0x0a, 0x0e, 0x45, 0x78, 0x74, 0x72, 0x61, 0x41, 0x72, 0x67, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a,
	0x3e, 0x0a, 0x10, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22,
	0x48, 0x0a, 0x0b, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x39,
	0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e,
	0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d,
	0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x75, 0x6e, 0x74, 0x69,
	0x6d, 0x65, 0x52, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x22, 0x86, 0x01, 0x0a, 0x0b, 0x49, 0x6e,
	0x74, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x53, 0x0a,
	0x0f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x5f, 0x72, 0x75, 0x6c, 0x65, 0x73,
	0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x52, 0x75, 0x6c,
	0x65, 0x73, 0x52, 0x0e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x52, 0x75, 0x6c,
	0x65, 0x73, 0x22, 0x88, 0x01, 0x0a, 0x0e, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73,
	0x52, 0x75, 0x6c, 0x65, 0x73, 0x12, 0x37, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73,
	0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x3d,
	0x0a, 0x07, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x23, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74,
	0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x52, 0x07, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x2b, 0x0a,
	0x05, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x70, 0x75, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x63, 0x70, 0x75, 0x12, 0x10, 0x0a, 0x03, 0x72, 0x61, 0x6d, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x72, 0x61, 0x6d, 0x22, 0x2d, 0x0a, 0x07, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x70, 0x75, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x63, 0x70, 0x75, 0x12, 0x10, 0x0a, 0x03, 0x72, 0x61, 0x6d, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x72, 0x61, 0x6d, 0x2a, 0x61, 0x0a, 0x0b, 0x54, 0x72, 0x61,
	0x66, 0x66, 0x69, 0x63, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1c, 0x0a, 0x18, 0x54, 0x52, 0x41, 0x46,
	0x46, 0x49, 0x43, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49,
	0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x19, 0x0a, 0x15, 0x54, 0x52, 0x41, 0x46, 0x46, 0x49,
	0x43, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x45, 0x58, 0x54, 0x45, 0x52, 0x4e, 0x41, 0x4c, 0x10,
	0x01, 0x12, 0x19, 0x0a, 0x15, 0x54, 0x52, 0x41, 0x46, 0x46, 0x49, 0x43, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x4e, 0x41, 0x4c, 0x10, 0x02, 0x42, 0xad, 0x01, 0x0a,
	0x24, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2e, 0x72, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0c, 0x52, 0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x72, 0x75, 0x6e,
	0x74, 0x69, 0x6d, 0x65, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x72, 0x75, 0x6e,
	0x74, 0x69, 0x6d, 0x65, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50,
	0x50, 0x58, 0xaa, 0x02, 0x1a, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x52,
	0x75, 0x6e, 0x74, 0x69, 0x6d, 0x65, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca,
	0x02, 0x1a, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x5c, 0x52, 0x75, 0x6e, 0x74,
	0x69, 0x6d, 0x65, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pipelines_runtime_v1alpha1_runtime_proto_rawDescOnce sync.Once
	file_pipelines_runtime_v1alpha1_runtime_proto_rawDescData = file_pipelines_runtime_v1alpha1_runtime_proto_rawDesc
)

func file_pipelines_runtime_v1alpha1_runtime_proto_rawDescGZIP() []byte {
	file_pipelines_runtime_v1alpha1_runtime_proto_rawDescOnce.Do(func() {
		file_pipelines_runtime_v1alpha1_runtime_proto_rawDescData = protoimpl.X.CompressGZIP(file_pipelines_runtime_v1alpha1_runtime_proto_rawDescData)
	})
	return file_pipelines_runtime_v1alpha1_runtime_proto_rawDescData
}

var file_pipelines_runtime_v1alpha1_runtime_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_pipelines_runtime_v1alpha1_runtime_proto_goTypes = []interface{}{
	(TrafficType)(0),       // 0: pipelines.runtime.v1alpha1.TrafficType
	(*Runtime)(nil),        // 1: pipelines.runtime.v1alpha1.Runtime
	(*RuntimeList)(nil),    // 2: pipelines.runtime.v1alpha1.RuntimeList
	(*IntanceType)(nil),    // 3: pipelines.runtime.v1alpha1.IntanceType
	(*ResourcesRules)(nil), // 4: pipelines.runtime.v1alpha1.ResourcesRules
	(*Limit)(nil),          // 5: pipelines.runtime.v1alpha1.Limit
	(*Request)(nil),        // 6: pipelines.runtime.v1alpha1.Request
	nil,                    // 7: pipelines.runtime.v1alpha1.Runtime.IntegrationEntry
	nil,                    // 8: pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntry
	nil,                    // 9: pipelines.runtime.v1alpha1.Runtime.CommandsEntry
	nil,                    // 10: pipelines.runtime.v1alpha1.Runtime.SecretsEntry
	nil,                    // 11: pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntry
	nil,                    // 12: pipelines.runtime.v1alpha1.Runtime.AutoscalingEntry
}
var file_pipelines_runtime_v1alpha1_runtime_proto_depIdxs = []int32{
	3,  // 0: pipelines.runtime.v1alpha1.Runtime.instance_types:type_name -> pipelines.runtime.v1alpha1.IntanceType
	7,  // 1: pipelines.runtime.v1alpha1.Runtime.integration:type_name -> pipelines.runtime.v1alpha1.Runtime.IntegrationEntry
	8,  // 2: pipelines.runtime.v1alpha1.Runtime.environment_variables:type_name -> pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntry
	9,  // 3: pipelines.runtime.v1alpha1.Runtime.commands:type_name -> pipelines.runtime.v1alpha1.Runtime.CommandsEntry
	10, // 4: pipelines.runtime.v1alpha1.Runtime.secrets:type_name -> pipelines.runtime.v1alpha1.Runtime.SecretsEntry
	11, // 5: pipelines.runtime.v1alpha1.Runtime.extra_args:type_name -> pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntry
	12, // 6: pipelines.runtime.v1alpha1.Runtime.autoscaling:type_name -> pipelines.runtime.v1alpha1.Runtime.AutoscalingEntry
	0,  // 7: pipelines.runtime.v1alpha1.Runtime.traffic_type:type_name -> pipelines.runtime.v1alpha1.TrafficType
	1,  // 8: pipelines.runtime.v1alpha1.RuntimeList.items:type_name -> pipelines.runtime.v1alpha1.Runtime
	4,  // 9: pipelines.runtime.v1alpha1.IntanceType.resources_rules:type_name -> pipelines.runtime.v1alpha1.ResourcesRules
	5,  // 10: pipelines.runtime.v1alpha1.ResourcesRules.limit:type_name -> pipelines.runtime.v1alpha1.Limit
	6,  // 11: pipelines.runtime.v1alpha1.ResourcesRules.request:type_name -> pipelines.runtime.v1alpha1.Request
	12, // [12:12] is the sub-list for method output_type
	12, // [12:12] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_pipelines_runtime_v1alpha1_runtime_proto_init() }
func file_pipelines_runtime_v1alpha1_runtime_proto_init() {
	if File_pipelines_runtime_v1alpha1_runtime_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Runtime); i {
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
		file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RuntimeList); i {
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
		file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IntanceType); i {
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
		file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResourcesRules); i {
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
		file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Limit); i {
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
		file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Request); i {
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
			RawDescriptor: file_pipelines_runtime_v1alpha1_runtime_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   12,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pipelines_runtime_v1alpha1_runtime_proto_goTypes,
		DependencyIndexes: file_pipelines_runtime_v1alpha1_runtime_proto_depIdxs,
		EnumInfos:         file_pipelines_runtime_v1alpha1_runtime_proto_enumTypes,
		MessageInfos:      file_pipelines_runtime_v1alpha1_runtime_proto_msgTypes,
	}.Build()
	File_pipelines_runtime_v1alpha1_runtime_proto = out.File
	file_pipelines_runtime_v1alpha1_runtime_proto_rawDesc = nil
	file_pipelines_runtime_v1alpha1_runtime_proto_goTypes = nil
	file_pipelines_runtime_v1alpha1_runtime_proto_depIdxs = nil
}
