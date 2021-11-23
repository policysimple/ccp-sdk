// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: performance/logs/v1alpha1/logs_agent_api.proto

package logsv1alpha1

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

type SaveLogsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClusterName string            `protobuf:"bytes,1,opt,name=cluster_name,json=clusterName,proto3" json:"cluster_name,omitempty"`
	Meta        map[string]string `protobuf:"bytes,2,rep,name=meta,proto3" json:"meta,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Logs        []*Log            `protobuf:"bytes,3,rep,name=logs,proto3" json:"logs,omitempty"`
}

func (x *SaveLogsRequest) Reset() {
	*x = SaveLogsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SaveLogsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SaveLogsRequest) ProtoMessage() {}

func (x *SaveLogsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SaveLogsRequest.ProtoReflect.Descriptor instead.
func (*SaveLogsRequest) Descriptor() ([]byte, []int) {
	return file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescGZIP(), []int{0}
}

func (x *SaveLogsRequest) GetClusterName() string {
	if x != nil {
		return x.ClusterName
	}
	return ""
}

func (x *SaveLogsRequest) GetMeta() map[string]string {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *SaveLogsRequest) GetLogs() []*Log {
	if x != nil {
		return x.Logs
	}
	return nil
}

type SaveLogsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *SaveLogsResponse) Reset() {
	*x = SaveLogsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SaveLogsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SaveLogsResponse) ProtoMessage() {}

func (x *SaveLogsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SaveLogsResponse.ProtoReflect.Descriptor instead.
func (*SaveLogsResponse) Descriptor() ([]byte, []int) {
	return file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescGZIP(), []int{1}
}

func (x *SaveLogsResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type Log struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Date       float64            `protobuf:"fixed64,1,opt,name=date,proto3" json:"date,omitempty"`
	Log        string             `protobuf:"bytes,2,opt,name=log,proto3" json:"log,omitempty"`
	Kubernetes *LogKuebrnetesInfo `protobuf:"bytes,3,opt,name=kubernetes,proto3" json:"kubernetes,omitempty"`
}

func (x *Log) Reset() {
	*x = Log{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Log) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Log) ProtoMessage() {}

func (x *Log) ProtoReflect() protoreflect.Message {
	mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Log.ProtoReflect.Descriptor instead.
func (*Log) Descriptor() ([]byte, []int) {
	return file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescGZIP(), []int{2}
}

func (x *Log) GetDate() float64 {
	if x != nil {
		return x.Date
	}
	return 0
}

func (x *Log) GetLog() string {
	if x != nil {
		return x.Log
	}
	return ""
}

func (x *Log) GetKubernetes() *LogKuebrnetesInfo {
	if x != nil {
		return x.Kubernetes
	}
	return nil
}

type LogKuebrnetesInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PodName        string            `protobuf:"bytes,1,opt,name=pod_name,json=podName,proto3" json:"pod_name,omitempty"`
	NamespaceName  string            `protobuf:"bytes,2,opt,name=namespace_name,json=namespaceName,proto3" json:"namespace_name,omitempty"`
	PodId          string            `protobuf:"bytes,3,opt,name=pod_id,json=podId,proto3" json:"pod_id,omitempty"`
	Labels         map[string]string `protobuf:"bytes,4,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Annotations    map[string]string `protobuf:"bytes,5,rep,name=annotations,proto3" json:"annotations,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Host           string            `protobuf:"bytes,6,opt,name=host,proto3" json:"host,omitempty"`
	ContainerName  string            `protobuf:"bytes,7,opt,name=container_name,json=containerName,proto3" json:"container_name,omitempty"`
	DockerId       string            `protobuf:"bytes,8,opt,name=docker_id,json=dockerId,proto3" json:"docker_id,omitempty"`
	ContainerHash  string            `protobuf:"bytes,10,opt,name=container_hash,json=containerHash,proto3" json:"container_hash,omitempty"`
	ContainerImage string            `protobuf:"bytes,11,opt,name=container_image,json=containerImage,proto3" json:"container_image,omitempty"`
}

func (x *LogKuebrnetesInfo) Reset() {
	*x = LogKuebrnetesInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LogKuebrnetesInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LogKuebrnetesInfo) ProtoMessage() {}

func (x *LogKuebrnetesInfo) ProtoReflect() protoreflect.Message {
	mi := &file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LogKuebrnetesInfo.ProtoReflect.Descriptor instead.
func (*LogKuebrnetesInfo) Descriptor() ([]byte, []int) {
	return file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescGZIP(), []int{3}
}

func (x *LogKuebrnetesInfo) GetPodName() string {
	if x != nil {
		return x.PodName
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetNamespaceName() string {
	if x != nil {
		return x.NamespaceName
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetPodId() string {
	if x != nil {
		return x.PodId
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *LogKuebrnetesInfo) GetAnnotations() map[string]string {
	if x != nil {
		return x.Annotations
	}
	return nil
}

func (x *LogKuebrnetesInfo) GetHost() string {
	if x != nil {
		return x.Host
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetContainerName() string {
	if x != nil {
		return x.ContainerName
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetDockerId() string {
	if x != nil {
		return x.DockerId
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetContainerHash() string {
	if x != nil {
		return x.ContainerHash
	}
	return ""
}

func (x *LogKuebrnetesInfo) GetContainerImage() string {
	if x != nil {
		return x.ContainerImage
	}
	return ""
}

var File_performance_logs_v1alpha1_logs_agent_api_proto protoreflect.FileDescriptor

var file_performance_logs_v1alpha1_logs_agent_api_proto_rawDesc = []byte{
	0x0a, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x6c, 0x6f,
	0x67, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6c, 0x6f, 0x67, 0x73,
	0x5f, 0x61, 0x67, 0x65, 0x6e, 0x74, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x19, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f,
	0x67, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x24, 0x70, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x6c, 0x6f, 0x67, 0x73, 0x2f, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0xeb, 0x01, 0x0a, 0x0f, 0x53, 0x61, 0x76, 0x65, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6c, 0x75, 0x73, 0x74, 0x65, 0x72,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x6c, 0x75,
	0x73, 0x74, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x48, 0x0a, 0x04, 0x6d, 0x65, 0x74, 0x61,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x34, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d,
	0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x53, 0x61, 0x76, 0x65, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x6d, 0x65,
	0x74, 0x61, 0x12, 0x32, 0x0a, 0x04, 0x6c, 0x6f, 0x67, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1e, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c,
	0x6f, 0x67, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x6f, 0x67,
	0x52, 0x04, 0x6c, 0x6f, 0x67, 0x73, 0x1a, 0x37, 0x0a, 0x09, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22,
	0x2c, 0x0a, 0x10, 0x53, 0x61, 0x76, 0x65, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22, 0x79, 0x0a,
	0x03, 0x4c, 0x6f, 0x67, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x01, 0x52, 0x04, 0x64, 0x61, 0x74, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x6f, 0x67, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6c, 0x6f, 0x67, 0x12, 0x4c, 0x0a, 0x0a, 0x6b, 0x75,
	0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2c,
	0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f, 0x67,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x4b, 0x75,
	0x65, 0x62, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0a, 0x6b, 0x75,
	0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x22, 0xc2, 0x04, 0x0a, 0x11, 0x4c, 0x6f, 0x67,
	0x4b, 0x75, 0x65, 0x62, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x19,
	0x0a, 0x08, 0x70, 0x6f, 0x64, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x70, 0x6f, 0x64, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x6e, 0x61, 0x6d,
	0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0d, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x15, 0x0a, 0x06, 0x70, 0x6f, 0x64, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x70, 0x6f, 0x64, 0x49, 0x64, 0x12, 0x50, 0x0a, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c,
	0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x38, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72,
	0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x4b, 0x75, 0x65, 0x62, 0x72, 0x6e, 0x65, 0x74, 0x65,
	0x73, 0x49, 0x6e, 0x66, 0x6f, 0x2e, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x12, 0x5f, 0x0a, 0x0b, 0x61, 0x6e, 0x6e,
	0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3d,
	0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f, 0x67,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x4b, 0x75,
	0x65, 0x62, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x2e, 0x41, 0x6e, 0x6e,
	0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0b, 0x61,
	0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x6f,
	0x73, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x6f, 0x73, 0x74, 0x12, 0x25,
	0x0a, 0x0e, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65,
	0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x64, 0x6f, 0x63, 0x6b, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x6f, 0x63, 0x6b, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x5f,
	0x68, 0x61, 0x73, 0x68, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f, 0x6e, 0x74,
	0x61, 0x69, 0x6e, 0x65, 0x72, 0x48, 0x61, 0x73, 0x68, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6e,
	0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x5f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x0b, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0e, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x49, 0x6d, 0x61,
	0x67, 0x65, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3e, 0x0a,
	0x10, 0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x32, 0x80, 0x01,
	0x0a, 0x13, 0x4c, 0x6f, 0x67, 0x73, 0x41, 0x67, 0x65, 0x6e, 0x74, 0x41, 0x50, 0x49, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x69, 0x0a, 0x08, 0x53, 0x61, 0x76, 0x65, 0x4c, 0x6f, 0x67,
	0x73, 0x12, 0x2a, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x61,
	0x76, 0x65, 0x4c, 0x6f, 0x67, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b, 0x2e,
	0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f, 0x67, 0x73,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x61, 0x76, 0x65, 0x4c, 0x6f,
	0x67, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x28, 0x01, 0x30, 0x01,
	0x42, 0xa6, 0x01, 0x0a, 0x23, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70,
	0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x11, 0x4c, 0x6f, 0x67, 0x73, 0x41, 0x67,
	0x65, 0x6e, 0x74, 0x41, 0x70, 0x69, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2c, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72,
	0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x6c,
	0x6f, 0x67, 0x73, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x46,
	0x58, 0xaa, 0x02, 0x19, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x4c, 0x6f, 0x67, 0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x19,
	0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x5c, 0x4c, 0x6f, 0x67, 0x73,
	0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescOnce sync.Once
	file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescData = file_performance_logs_v1alpha1_logs_agent_api_proto_rawDesc
)

func file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescGZIP() []byte {
	file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescOnce.Do(func() {
		file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescData)
	})
	return file_performance_logs_v1alpha1_logs_agent_api_proto_rawDescData
}

var file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_performance_logs_v1alpha1_logs_agent_api_proto_goTypes = []interface{}{
	(*SaveLogsRequest)(nil),   // 0: performance.logs.v1alpha1.SaveLogsRequest
	(*SaveLogsResponse)(nil),  // 1: performance.logs.v1alpha1.SaveLogsResponse
	(*Log)(nil),               // 2: performance.logs.v1alpha1.Log
	(*LogKuebrnetesInfo)(nil), // 3: performance.logs.v1alpha1.LogKuebrnetesInfo
	nil,                       // 4: performance.logs.v1alpha1.SaveLogsRequest.MetaEntry
	nil,                       // 5: performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntry
	nil,                       // 6: performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntry
}
var file_performance_logs_v1alpha1_logs_agent_api_proto_depIdxs = []int32{
	4, // 0: performance.logs.v1alpha1.SaveLogsRequest.meta:type_name -> performance.logs.v1alpha1.SaveLogsRequest.MetaEntry
	2, // 1: performance.logs.v1alpha1.SaveLogsRequest.logs:type_name -> performance.logs.v1alpha1.Log
	3, // 2: performance.logs.v1alpha1.Log.kubernetes:type_name -> performance.logs.v1alpha1.LogKuebrnetesInfo
	5, // 3: performance.logs.v1alpha1.LogKuebrnetesInfo.labels:type_name -> performance.logs.v1alpha1.LogKuebrnetesInfo.LabelsEntry
	6, // 4: performance.logs.v1alpha1.LogKuebrnetesInfo.annotations:type_name -> performance.logs.v1alpha1.LogKuebrnetesInfo.AnnotationsEntry
	0, // 5: performance.logs.v1alpha1.LogsAgentAPIService.SaveLogs:input_type -> performance.logs.v1alpha1.SaveLogsRequest
	1, // 6: performance.logs.v1alpha1.LogsAgentAPIService.SaveLogs:output_type -> performance.logs.v1alpha1.SaveLogsResponse
	6, // [6:7] is the sub-list for method output_type
	5, // [5:6] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_performance_logs_v1alpha1_logs_agent_api_proto_init() }
func file_performance_logs_v1alpha1_logs_agent_api_proto_init() {
	if File_performance_logs_v1alpha1_logs_agent_api_proto != nil {
		return
	}
	file_performance_logs_v1alpha1_logs_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SaveLogsRequest); i {
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
		file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SaveLogsResponse); i {
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
		file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Log); i {
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
		file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LogKuebrnetesInfo); i {
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
			RawDescriptor: file_performance_logs_v1alpha1_logs_agent_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_performance_logs_v1alpha1_logs_agent_api_proto_goTypes,
		DependencyIndexes: file_performance_logs_v1alpha1_logs_agent_api_proto_depIdxs,
		MessageInfos:      file_performance_logs_v1alpha1_logs_agent_api_proto_msgTypes,
	}.Build()
	File_performance_logs_v1alpha1_logs_agent_api_proto = out.File
	file_performance_logs_v1alpha1_logs_agent_api_proto_rawDesc = nil
	file_performance_logs_v1alpha1_logs_agent_api_proto_goTypes = nil
	file_performance_logs_v1alpha1_logs_agent_api_proto_depIdxs = nil
}