// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.1
// source: performance/metrics/v1alpha1/metrics_agent_api.proto

package metricsv1alpha1

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

type SaveMetricsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClusterName string            `protobuf:"bytes,1,opt,name=cluster_name,json=clusterName,proto3" json:"cluster_name,omitempty"`
	Meta        map[string]string `protobuf:"bytes,2,rep,name=meta,proto3" json:"meta,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Metrics     []*PodMetric      `protobuf:"bytes,3,rep,name=metrics,proto3" json:"metrics,omitempty"`
}

func (x *SaveMetricsRequest) Reset() {
	*x = SaveMetricsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SaveMetricsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SaveMetricsRequest) ProtoMessage() {}

func (x *SaveMetricsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SaveMetricsRequest.ProtoReflect.Descriptor instead.
func (*SaveMetricsRequest) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescGZIP(), []int{0}
}

func (x *SaveMetricsRequest) GetClusterName() string {
	if x != nil {
		return x.ClusterName
	}
	return ""
}

func (x *SaveMetricsRequest) GetMeta() map[string]string {
	if x != nil {
		return x.Meta
	}
	return nil
}

func (x *SaveMetricsRequest) GetMetrics() []*PodMetric {
	if x != nil {
		return x.Metrics
	}
	return nil
}

type SaveMetricsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *SaveMetricsResponse) Reset() {
	*x = SaveMetricsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SaveMetricsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SaveMetricsResponse) ProtoMessage() {}

func (x *SaveMetricsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SaveMetricsResponse.ProtoReflect.Descriptor instead.
func (*SaveMetricsResponse) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescGZIP(), []int{1}
}

func (x *SaveMetricsResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type PodMetric struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Namespace                   string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                        string            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	OwnerName                   string            `protobuf:"bytes,3,opt,name=owner_name,json=ownerName,proto3" json:"owner_name,omitempty"`
	OwnerKubernetesUid          string            `protobuf:"bytes,4,opt,name=owner_kubernetes_uid,json=ownerKubernetesUid,proto3" json:"owner_kubernetes_uid,omitempty"`
	OwnerKind                   string            `protobuf:"bytes,5,opt,name=owner_kind,json=ownerKind,proto3" json:"owner_kind,omitempty"`
	OwnerApiVersion             string            `protobuf:"bytes,6,opt,name=owner_api_version,json=ownerApiVersion,proto3" json:"owner_api_version,omitempty"`
	ContainerName               string            `protobuf:"bytes,7,opt,name=container_name,json=containerName,proto3" json:"container_name,omitempty"`
	Status                      string            `protobuf:"bytes,8,opt,name=status,proto3" json:"status,omitempty"`
	IsControlled                bool              `protobuf:"varint,9,opt,name=is_controlled,json=isControlled,proto3" json:"is_controlled,omitempty"`
	RestartCount                int32             `protobuf:"varint,10,opt,name=restart_count,json=restartCount,proto3" json:"restart_count,omitempty"`
	IsReady                     bool              `protobuf:"varint,11,opt,name=is_ready,json=isReady,proto3" json:"is_ready,omitempty"`
	ClusterName                 string            `protobuf:"bytes,12,opt,name=cluster_name,json=clusterName,proto3" json:"cluster_name,omitempty"`
	UsageCpu                    int64             `protobuf:"varint,13,opt,name=usage_cpu,json=usageCpu,proto3" json:"usage_cpu,omitempty"`
	UsageMemory                 int64             `protobuf:"varint,14,opt,name=usage_memory,json=usageMemory,proto3" json:"usage_memory,omitempty"`
	UsageStorage                int64             `protobuf:"varint,15,opt,name=usage_storage,json=usageStorage,proto3" json:"usage_storage,omitempty"`
	RequestCpu                  int64             `protobuf:"varint,16,opt,name=request_cpu,json=requestCpu,proto3" json:"request_cpu,omitempty"`
	RequestMemory               int64             `protobuf:"varint,17,opt,name=request_memory,json=requestMemory,proto3" json:"request_memory,omitempty"`
	LimitCpu                    int64             `protobuf:"varint,18,opt,name=limit_cpu,json=limitCpu,proto3" json:"limit_cpu,omitempty"`
	LimitMemory                 int64             `protobuf:"varint,19,opt,name=limit_memory,json=limitMemory,proto3" json:"limit_memory,omitempty"`
	Volumes                     []string          `protobuf:"bytes,20,rep,name=volumes,proto3" json:"volumes,omitempty"`
	Annotations                 map[string]string `protobuf:"bytes,21,rep,name=annotations,proto3" json:"annotations,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Labels                      map[string]string `protobuf:"bytes,22,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	ExternalIp                  string            `protobuf:"bytes,23,opt,name=external_ip,json=externalIp,proto3" json:"external_ip,omitempty"`
	InternalIp                  string            `protobuf:"bytes,24,opt,name=internal_ip,json=internalIp,proto3" json:"internal_ip,omitempty"`
	AllocatableStorageEphemeral int64             `protobuf:"varint,25,opt,name=allocatable_storage_ephemeral,json=allocatableStorageEphemeral,proto3" json:"allocatable_storage_ephemeral,omitempty"`
	AllocatableStorage          int64             `protobuf:"varint,26,opt,name=allocatable_storage,json=allocatableStorage,proto3" json:"allocatable_storage,omitempty"`
	NodeName                    string            `protobuf:"bytes,27,opt,name=node_name,json=nodeName,proto3" json:"node_name,omitempty"`
	KubernetesUid               string            `protobuf:"bytes,28,opt,name=kubernetes_uid,json=kubernetesUid,proto3" json:"kubernetes_uid,omitempty"`
}

func (x *PodMetric) Reset() {
	*x = PodMetric{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PodMetric) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PodMetric) ProtoMessage() {}

func (x *PodMetric) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PodMetric.ProtoReflect.Descriptor instead.
func (*PodMetric) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescGZIP(), []int{2}
}

func (x *PodMetric) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *PodMetric) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PodMetric) GetOwnerName() string {
	if x != nil {
		return x.OwnerName
	}
	return ""
}

func (x *PodMetric) GetOwnerKubernetesUid() string {
	if x != nil {
		return x.OwnerKubernetesUid
	}
	return ""
}

func (x *PodMetric) GetOwnerKind() string {
	if x != nil {
		return x.OwnerKind
	}
	return ""
}

func (x *PodMetric) GetOwnerApiVersion() string {
	if x != nil {
		return x.OwnerApiVersion
	}
	return ""
}

func (x *PodMetric) GetContainerName() string {
	if x != nil {
		return x.ContainerName
	}
	return ""
}

func (x *PodMetric) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *PodMetric) GetIsControlled() bool {
	if x != nil {
		return x.IsControlled
	}
	return false
}

func (x *PodMetric) GetRestartCount() int32 {
	if x != nil {
		return x.RestartCount
	}
	return 0
}

func (x *PodMetric) GetIsReady() bool {
	if x != nil {
		return x.IsReady
	}
	return false
}

func (x *PodMetric) GetClusterName() string {
	if x != nil {
		return x.ClusterName
	}
	return ""
}

func (x *PodMetric) GetUsageCpu() int64 {
	if x != nil {
		return x.UsageCpu
	}
	return 0
}

func (x *PodMetric) GetUsageMemory() int64 {
	if x != nil {
		return x.UsageMemory
	}
	return 0
}

func (x *PodMetric) GetUsageStorage() int64 {
	if x != nil {
		return x.UsageStorage
	}
	return 0
}

func (x *PodMetric) GetRequestCpu() int64 {
	if x != nil {
		return x.RequestCpu
	}
	return 0
}

func (x *PodMetric) GetRequestMemory() int64 {
	if x != nil {
		return x.RequestMemory
	}
	return 0
}

func (x *PodMetric) GetLimitCpu() int64 {
	if x != nil {
		return x.LimitCpu
	}
	return 0
}

func (x *PodMetric) GetLimitMemory() int64 {
	if x != nil {
		return x.LimitMemory
	}
	return 0
}

func (x *PodMetric) GetVolumes() []string {
	if x != nil {
		return x.Volumes
	}
	return nil
}

func (x *PodMetric) GetAnnotations() map[string]string {
	if x != nil {
		return x.Annotations
	}
	return nil
}

func (x *PodMetric) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *PodMetric) GetExternalIp() string {
	if x != nil {
		return x.ExternalIp
	}
	return ""
}

func (x *PodMetric) GetInternalIp() string {
	if x != nil {
		return x.InternalIp
	}
	return ""
}

func (x *PodMetric) GetAllocatableStorageEphemeral() int64 {
	if x != nil {
		return x.AllocatableStorageEphemeral
	}
	return 0
}

func (x *PodMetric) GetAllocatableStorage() int64 {
	if x != nil {
		return x.AllocatableStorage
	}
	return 0
}

func (x *PodMetric) GetNodeName() string {
	if x != nil {
		return x.NodeName
	}
	return ""
}

func (x *PodMetric) GetKubernetesUid() string {
	if x != nil {
		return x.KubernetesUid
	}
	return ""
}

var File_performance_metrics_v1alpha1_metrics_agent_api_proto protoreflect.FileDescriptor

var file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDesc = []byte{
	0x0a, 0x34, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x5f, 0x61, 0x67, 0x65, 0x6e, 0x74, 0x5f, 0x61, 0x70, 0x69,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61,
	0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x1a, 0x2a, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63,
	0x65, 0x2f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x83, 0x02, 0x0a, 0x12, 0x53, 0x61, 0x76, 0x65, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6c, 0x75, 0x73, 0x74,
	0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x4e, 0x0a, 0x04, 0x6d, 0x65,
	0x74, 0x61, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f,
	0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x61, 0x76, 0x65, 0x4d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x6d, 0x65, 0x74, 0x61, 0x12, 0x41, 0x0a, 0x07, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x70, 0x65,
	0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x6f, 0x64, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x52, 0x07, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x1a, 0x37, 0x0a,
	0x09, 0x4d, 0x65, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x2f, 0x0a, 0x13, 0x53, 0x61, 0x76, 0x65, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07,
	0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22, 0xc6, 0x09, 0x0a, 0x09, 0x50, 0x6f, 0x64, 0x4d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61,
	0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x6f, 0x77, 0x6e, 0x65, 0x72,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6f, 0x77, 0x6e,
	0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x30, 0x0a, 0x14, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x5f,
	0x6b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x5f, 0x75, 0x69, 0x64, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x4b, 0x75, 0x62, 0x65, 0x72,
	0x6e, 0x65, 0x74, 0x65, 0x73, 0x55, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x6f, 0x77, 0x6e, 0x65,
	0x72, 0x5f, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6f, 0x77,
	0x6e, 0x65, 0x72, 0x4b, 0x69, 0x6e, 0x64, 0x12, 0x2a, 0x0a, 0x11, 0x6f, 0x77, 0x6e, 0x65, 0x72,
	0x5f, 0x61, 0x70, 0x69, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0f, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x41, 0x70, 0x69, 0x56, 0x65, 0x72, 0x73,
	0x69, 0x6f, 0x6e, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f, 0x6e,
	0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x23, 0x0a, 0x0d, 0x69, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c,
	0x6c, 0x65, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x69, 0x73, 0x43, 0x6f, 0x6e,
	0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x73, 0x74, 0x61,
	0x72, 0x74, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c,
	0x72, 0x65, 0x73, 0x74, 0x61, 0x72, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x19, 0x0a, 0x08,
	0x69, 0x73, 0x5f, 0x72, 0x65, 0x61, 0x64, 0x79, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07,
	0x69, 0x73, 0x52, 0x65, 0x61, 0x64, 0x79, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6c, 0x75, 0x73, 0x74,
	0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63,
	0x6c, 0x75, 0x73, 0x74, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x75, 0x73,
	0x61, 0x67, 0x65, 0x5f, 0x63, 0x70, 0x75, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x75,
	0x73, 0x61, 0x67, 0x65, 0x43, 0x70, 0x75, 0x12, 0x21, 0x0a, 0x0c, 0x75, 0x73, 0x61, 0x67, 0x65,
	0x5f, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x75,
	0x73, 0x61, 0x67, 0x65, 0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12, 0x23, 0x0a, 0x0d, 0x75, 0x73,
	0x61, 0x67, 0x65, 0x5f, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x18, 0x0f, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x0c, 0x75, 0x73, 0x61, 0x67, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x12,
	0x1f, 0x0a, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x63, 0x70, 0x75, 0x18, 0x10,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x43, 0x70, 0x75,
	0x12, 0x25, 0x0a, 0x0e, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x6d, 0x65, 0x6d, 0x6f,
	0x72, 0x79, 0x18, 0x11, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12, 0x1b, 0x0a, 0x09, 0x6c, 0x69, 0x6d, 0x69, 0x74,
	0x5f, 0x63, 0x70, 0x75, 0x18, 0x12, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x6c, 0x69, 0x6d, 0x69,
	0x74, 0x43, 0x70, 0x75, 0x12, 0x21, 0x0a, 0x0c, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x5f, 0x6d, 0x65,
	0x6d, 0x6f, 0x72, 0x79, 0x18, 0x13, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x6c, 0x69, 0x6d, 0x69,
	0x74, 0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x6f, 0x6c, 0x75, 0x6d,
	0x65, 0x73, 0x18, 0x14, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x76, 0x6f, 0x6c, 0x75, 0x6d, 0x65,
	0x73, 0x12, 0x5a, 0x0a, 0x0b, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x18, 0x15, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x38, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d,
	0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x6f, 0x64, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x2e,
	0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x0b, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x4b, 0x0a,
	0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x16, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x33, 0x2e,
	0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x6f, 0x64,
	0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x2e, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x65, 0x78,
	0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x5f, 0x69, 0x70, 0x18, 0x17, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x49, 0x70, 0x12, 0x1f, 0x0a, 0x0b, 0x69,
	0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x5f, 0x69, 0x70, 0x18, 0x18, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x49, 0x70, 0x12, 0x42, 0x0a, 0x1d,
	0x61, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x73, 0x74, 0x6f, 0x72,
	0x61, 0x67, 0x65, 0x5f, 0x65, 0x70, 0x68, 0x65, 0x6d, 0x65, 0x72, 0x61, 0x6c, 0x18, 0x19, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x1b, 0x61, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x61, 0x62, 0x6c, 0x65,
	0x53, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x45, 0x70, 0x68, 0x65, 0x6d, 0x65, 0x72, 0x61, 0x6c,
	0x12, 0x2f, 0x0a, 0x13, 0x61, 0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x5f,
	0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x18, 0x1a, 0x20, 0x01, 0x28, 0x03, 0x52, 0x12, 0x61,
	0x6c, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x61, 0x67,
	0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x1b,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x25,
	0x0a, 0x0e, 0x6b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74, 0x65, 0x73, 0x5f, 0x75, 0x69, 0x64,
	0x18, 0x1c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6b, 0x75, 0x62, 0x65, 0x72, 0x6e, 0x65, 0x74,
	0x65, 0x73, 0x55, 0x69, 0x64, 0x1a, 0x3e, 0x0a, 0x10, 0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x32, 0x92, 0x01, 0x0a, 0x16, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x41, 0x67, 0x65, 0x6e,
	0x74, 0x41, 0x50, 0x49, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x78, 0x0a, 0x0b, 0x53,
	0x61, 0x76, 0x65, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x12, 0x30, 0x2e, 0x70, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x61, 0x76, 0x65, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x31, 0x2e, 0x70,
	0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69,
	0x63, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x61, 0x76, 0x65,
	0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x28, 0x01, 0x30, 0x01, 0x42, 0xb5, 0x01, 0x0a, 0x26, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65,
	0x6d, 0x62, 0x79, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x42, 0x14, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x41, 0x67, 0x65, 0x6e, 0x74, 0x41, 0x70,
	0x69, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65,
	0x2d, 0x67, 0x72, 0x70, 0x63, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x46, 0x58, 0xaa,
	0x02, 0x1c, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02,
	0x1c, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x5c, 0x4d, 0x65, 0x74,
	0x72, 0x69, 0x63, 0x73, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescOnce sync.Once
	file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescData = file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDesc
)

func file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescGZIP() []byte {
	file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescOnce.Do(func() {
		file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescData)
	})
	return file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDescData
}

var file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_performance_metrics_v1alpha1_metrics_agent_api_proto_goTypes = []interface{}{
	(*SaveMetricsRequest)(nil),  // 0: performance.metrics.v1alpha1.SaveMetricsRequest
	(*SaveMetricsResponse)(nil), // 1: performance.metrics.v1alpha1.SaveMetricsResponse
	(*PodMetric)(nil),           // 2: performance.metrics.v1alpha1.PodMetric
	nil,                         // 3: performance.metrics.v1alpha1.SaveMetricsRequest.MetaEntry
	nil,                         // 4: performance.metrics.v1alpha1.PodMetric.AnnotationsEntry
	nil,                         // 5: performance.metrics.v1alpha1.PodMetric.LabelsEntry
}
var file_performance_metrics_v1alpha1_metrics_agent_api_proto_depIdxs = []int32{
	3, // 0: performance.metrics.v1alpha1.SaveMetricsRequest.meta:type_name -> performance.metrics.v1alpha1.SaveMetricsRequest.MetaEntry
	2, // 1: performance.metrics.v1alpha1.SaveMetricsRequest.metrics:type_name -> performance.metrics.v1alpha1.PodMetric
	4, // 2: performance.metrics.v1alpha1.PodMetric.annotations:type_name -> performance.metrics.v1alpha1.PodMetric.AnnotationsEntry
	5, // 3: performance.metrics.v1alpha1.PodMetric.labels:type_name -> performance.metrics.v1alpha1.PodMetric.LabelsEntry
	0, // 4: performance.metrics.v1alpha1.MetricsAgentAPIService.SaveMetrics:input_type -> performance.metrics.v1alpha1.SaveMetricsRequest
	1, // 5: performance.metrics.v1alpha1.MetricsAgentAPIService.SaveMetrics:output_type -> performance.metrics.v1alpha1.SaveMetricsResponse
	5, // [5:6] is the sub-list for method output_type
	4, // [4:5] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_performance_metrics_v1alpha1_metrics_agent_api_proto_init() }
func file_performance_metrics_v1alpha1_metrics_agent_api_proto_init() {
	if File_performance_metrics_v1alpha1_metrics_agent_api_proto != nil {
		return
	}
	file_performance_metrics_v1alpha1_metrics_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SaveMetricsRequest); i {
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
		file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SaveMetricsResponse); i {
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
		file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PodMetric); i {
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
			RawDescriptor: file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_performance_metrics_v1alpha1_metrics_agent_api_proto_goTypes,
		DependencyIndexes: file_performance_metrics_v1alpha1_metrics_agent_api_proto_depIdxs,
		MessageInfos:      file_performance_metrics_v1alpha1_metrics_agent_api_proto_msgTypes,
	}.Build()
	File_performance_metrics_v1alpha1_metrics_agent_api_proto = out.File
	file_performance_metrics_v1alpha1_metrics_agent_api_proto_rawDesc = nil
	file_performance_metrics_v1alpha1_metrics_agent_api_proto_goTypes = nil
	file_performance_metrics_v1alpha1_metrics_agent_api_proto_depIdxs = nil
}
