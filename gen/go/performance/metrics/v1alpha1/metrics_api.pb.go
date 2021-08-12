// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: performance/metrics/v1alpha1/metrics_api.proto

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

type MetricsInterval int32

const (
	MetricsInterval_METRICS_INTERVAL_UNSPECIFIED MetricsInterval = 0
	MetricsInterval_METRICS_INTERVAL_1_MUNITE    MetricsInterval = 1
	MetricsInterval_METRICS_INTERVAL_5_MUNITES   MetricsInterval = 2
	MetricsInterval_METRICS_INTERVAL_15_MUNITES  MetricsInterval = 3
	MetricsInterval_METRICS_INTERVAL_30_MUNITES  MetricsInterval = 4
	MetricsInterval_METRICS_INTERVAL_1_HOUR      MetricsInterval = 5
	MetricsInterval_METRICS_INTERVAL_12_HOURS    MetricsInterval = 6
	MetricsInterval_METRICS_INTERVAL_1_DAY       MetricsInterval = 7
	MetricsInterval_METRICS_INTERVAL_1_WEEK      MetricsInterval = 8
)

// Enum value maps for MetricsInterval.
var (
	MetricsInterval_name = map[int32]string{
		0: "METRICS_INTERVAL_UNSPECIFIED",
		1: "METRICS_INTERVAL_1_MUNITE",
		2: "METRICS_INTERVAL_5_MUNITES",
		3: "METRICS_INTERVAL_15_MUNITES",
		4: "METRICS_INTERVAL_30_MUNITES",
		5: "METRICS_INTERVAL_1_HOUR",
		6: "METRICS_INTERVAL_12_HOURS",
		7: "METRICS_INTERVAL_1_DAY",
		8: "METRICS_INTERVAL_1_WEEK",
	}
	MetricsInterval_value = map[string]int32{
		"METRICS_INTERVAL_UNSPECIFIED": 0,
		"METRICS_INTERVAL_1_MUNITE":    1,
		"METRICS_INTERVAL_5_MUNITES":   2,
		"METRICS_INTERVAL_15_MUNITES":  3,
		"METRICS_INTERVAL_30_MUNITES":  4,
		"METRICS_INTERVAL_1_HOUR":      5,
		"METRICS_INTERVAL_12_HOURS":    6,
		"METRICS_INTERVAL_1_DAY":       7,
		"METRICS_INTERVAL_1_WEEK":      8,
	}
)

func (x MetricsInterval) Enum() *MetricsInterval {
	p := new(MetricsInterval)
	*p = x
	return p
}

func (x MetricsInterval) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MetricsInterval) Descriptor() protoreflect.EnumDescriptor {
	return file_performance_metrics_v1alpha1_metrics_api_proto_enumTypes[0].Descriptor()
}

func (MetricsInterval) Type() protoreflect.EnumType {
	return &file_performance_metrics_v1alpha1_metrics_api_proto_enumTypes[0]
}

func (x MetricsInterval) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MetricsInterval.Descriptor instead.
func (MetricsInterval) EnumDescriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_api_proto_rawDescGZIP(), []int{0}
}

type Range struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	DateFrom string `protobuf:"bytes,1,opt,name=date_from,json=dateFrom,proto3" json:"date_from,omitempty"`
	DateTo   string `protobuf:"bytes,2,opt,name=date_to,json=dateTo,proto3" json:"date_to,omitempty"`
	Timezone string `protobuf:"bytes,3,opt,name=timezone,proto3" json:"timezone,omitempty"`
}

func (x *Range) Reset() {
	*x = Range{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Range) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Range) ProtoMessage() {}

func (x *Range) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Range.ProtoReflect.Descriptor instead.
func (*Range) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_api_proto_rawDescGZIP(), []int{0}
}

func (x *Range) GetDateFrom() string {
	if x != nil {
		return x.DateFrom
	}
	return ""
}

func (x *Range) GetDateTo() string {
	if x != nil {
		return x.DateTo
	}
	return ""
}

func (x *Range) GetTimezone() string {
	if x != nil {
		return x.Timezone
	}
	return ""
}

type GetMetricsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Labels     map[string]string `protobuf:"bytes,1,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Containers []string          `protobuf:"bytes,2,rep,name=containers,proto3" json:"containers,omitempty"`
	Interval   MetricsInterval   `protobuf:"varint,3,opt,name=interval,proto3,enum=performance.metrics.v1alpha1.MetricsInterval" json:"interval,omitempty"`
	Range      *Range            `protobuf:"bytes,4,opt,name=range,proto3" json:"range,omitempty"`
}

func (x *GetMetricsRequest) Reset() {
	*x = GetMetricsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMetricsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMetricsRequest) ProtoMessage() {}

func (x *GetMetricsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMetricsRequest.ProtoReflect.Descriptor instead.
func (*GetMetricsRequest) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_api_proto_rawDescGZIP(), []int{1}
}

func (x *GetMetricsRequest) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *GetMetricsRequest) GetContainers() []string {
	if x != nil {
		return x.Containers
	}
	return nil
}

func (x *GetMetricsRequest) GetInterval() MetricsInterval {
	if x != nil {
		return x.Interval
	}
	return MetricsInterval_METRICS_INTERVAL_UNSPECIFIED
}

func (x *GetMetricsRequest) GetRange() *Range {
	if x != nil {
		return x.Range
	}
	return nil
}

type GetMetricsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Memory []*MetricItem `protobuf:"bytes,1,rep,name=memory,proto3" json:"memory,omitempty"`
	Cpu    []*MetricItem `protobuf:"bytes,2,rep,name=cpu,proto3" json:"cpu,omitempty"`
}

func (x *GetMetricsResponse) Reset() {
	*x = GetMetricsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMetricsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMetricsResponse) ProtoMessage() {}

func (x *GetMetricsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMetricsResponse.ProtoReflect.Descriptor instead.
func (*GetMetricsResponse) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_api_proto_rawDescGZIP(), []int{2}
}

func (x *GetMetricsResponse) GetMemory() []*MetricItem {
	if x != nil {
		return x.Memory
	}
	return nil
}

func (x *GetMetricsResponse) GetCpu() []*MetricItem {
	if x != nil {
		return x.Cpu
	}
	return nil
}

var File_performance_metrics_v1alpha1_metrics_api_proto protoreflect.FileDescriptor

var file_performance_metrics_v1alpha1_metrics_api_proto_rawDesc = []byte{
	0x0a, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x1c, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x2a,
	0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x6d, 0x65, 0x74, 0x72,
	0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6d, 0x65, 0x74,
	0x72, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x59, 0x0a, 0x05, 0x52, 0x61,
	0x6e, 0x67, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x66, 0x72, 0x6f, 0x6d,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x61, 0x74, 0x65, 0x46, 0x72, 0x6f, 0x6d,
	0x12, 0x17, 0x0a, 0x07, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x64, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x12, 0x1a, 0x0a, 0x08, 0x74, 0x69, 0x6d,
	0x65, 0x7a, 0x6f, 0x6e, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x69, 0x6d,
	0x65, 0x7a, 0x6f, 0x6e, 0x65, 0x22, 0xc9, 0x02, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x74,
	0x72, 0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x53, 0x0a, 0x06, 0x6c,
	0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3b, 0x2e, 0x70, 0x65,
	0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x4c, 0x61, 0x62,
	0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73,
	0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x73, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x73,
	0x12, 0x49, 0x0a, 0x08, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x76, 0x61, 0x6c, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x2d, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65,
	0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x76, 0x61,
	0x6c, 0x52, 0x08, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x76, 0x61, 0x6c, 0x12, 0x39, 0x0a, 0x05, 0x72,
	0x61, 0x6e, 0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x52, 0x61, 0x6e, 0x67, 0x65, 0x52,
	0x05, 0x72, 0x61, 0x6e, 0x67, 0x65, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38,
	0x01, 0x22, 0x92, 0x01, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x40, 0x0a, 0x06, 0x6d, 0x65, 0x6d, 0x6f,
	0x72, 0x79, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f,
	0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x49, 0x74,
	0x65, 0x6d, 0x52, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x12, 0x3a, 0x0a, 0x03, 0x63, 0x70,
	0x75, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72,
	0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x49, 0x74, 0x65,
	0x6d, 0x52, 0x03, 0x63, 0x70, 0x75, 0x2a, 0xa9, 0x02, 0x0a, 0x0f, 0x4d, 0x65, 0x74, 0x72, 0x69,
	0x63, 0x73, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x76, 0x61, 0x6c, 0x12, 0x20, 0x0a, 0x1c, 0x4d, 0x45,
	0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c, 0x5f, 0x55,
	0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1d, 0x0a, 0x19,
	0x4d, 0x45, 0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c,
	0x5f, 0x31, 0x5f, 0x4d, 0x55, 0x4e, 0x49, 0x54, 0x45, 0x10, 0x01, 0x12, 0x1e, 0x0a, 0x1a, 0x4d,
	0x45, 0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c, 0x5f,
	0x35, 0x5f, 0x4d, 0x55, 0x4e, 0x49, 0x54, 0x45, 0x53, 0x10, 0x02, 0x12, 0x1f, 0x0a, 0x1b, 0x4d,
	0x45, 0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c, 0x5f,
	0x31, 0x35, 0x5f, 0x4d, 0x55, 0x4e, 0x49, 0x54, 0x45, 0x53, 0x10, 0x03, 0x12, 0x1f, 0x0a, 0x1b,
	0x4d, 0x45, 0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c,
	0x5f, 0x33, 0x30, 0x5f, 0x4d, 0x55, 0x4e, 0x49, 0x54, 0x45, 0x53, 0x10, 0x04, 0x12, 0x1b, 0x0a,
	0x17, 0x4d, 0x45, 0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41,
	0x4c, 0x5f, 0x31, 0x5f, 0x48, 0x4f, 0x55, 0x52, 0x10, 0x05, 0x12, 0x1d, 0x0a, 0x19, 0x4d, 0x45,
	0x54, 0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c, 0x5f, 0x31,
	0x32, 0x5f, 0x48, 0x4f, 0x55, 0x52, 0x53, 0x10, 0x06, 0x12, 0x1a, 0x0a, 0x16, 0x4d, 0x45, 0x54,
	0x52, 0x49, 0x43, 0x53, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c, 0x5f, 0x31, 0x5f,
	0x44, 0x41, 0x59, 0x10, 0x07, 0x12, 0x1b, 0x0a, 0x17, 0x4d, 0x45, 0x54, 0x52, 0x49, 0x43, 0x53,
	0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x56, 0x41, 0x4c, 0x5f, 0x31, 0x5f, 0x57, 0x45, 0x45, 0x4b,
	0x10, 0x08, 0x32, 0x86, 0x01, 0x0a, 0x11, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x41, 0x50,
	0x49, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x71, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x4d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x12, 0x2f, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d,
	0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72,
	0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0xb0, 0x01, 0x0a, 0x26,
	0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72,
	0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0f, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x41,
	0x70, 0x69, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63,
	0x65, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x6d, 0x65, 0x74, 0x72, 0x69,
	0x63, 0x73, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x46, 0x58,
	0xaa, 0x02, 0x1c, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x4d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca,
	0x02, 0x1c, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x5c, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_performance_metrics_v1alpha1_metrics_api_proto_rawDescOnce sync.Once
	file_performance_metrics_v1alpha1_metrics_api_proto_rawDescData = file_performance_metrics_v1alpha1_metrics_api_proto_rawDesc
)

func file_performance_metrics_v1alpha1_metrics_api_proto_rawDescGZIP() []byte {
	file_performance_metrics_v1alpha1_metrics_api_proto_rawDescOnce.Do(func() {
		file_performance_metrics_v1alpha1_metrics_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_performance_metrics_v1alpha1_metrics_api_proto_rawDescData)
	})
	return file_performance_metrics_v1alpha1_metrics_api_proto_rawDescData
}

var file_performance_metrics_v1alpha1_metrics_api_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_performance_metrics_v1alpha1_metrics_api_proto_goTypes = []interface{}{
	(MetricsInterval)(0),       // 0: performance.metrics.v1alpha1.MetricsInterval
	(*Range)(nil),              // 1: performance.metrics.v1alpha1.Range
	(*GetMetricsRequest)(nil),  // 2: performance.metrics.v1alpha1.GetMetricsRequest
	(*GetMetricsResponse)(nil), // 3: performance.metrics.v1alpha1.GetMetricsResponse
	nil,                        // 4: performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntry
	(*MetricItem)(nil),         // 5: performance.metrics.v1alpha1.MetricItem
}
var file_performance_metrics_v1alpha1_metrics_api_proto_depIdxs = []int32{
	4, // 0: performance.metrics.v1alpha1.GetMetricsRequest.labels:type_name -> performance.metrics.v1alpha1.GetMetricsRequest.LabelsEntry
	0, // 1: performance.metrics.v1alpha1.GetMetricsRequest.interval:type_name -> performance.metrics.v1alpha1.MetricsInterval
	1, // 2: performance.metrics.v1alpha1.GetMetricsRequest.range:type_name -> performance.metrics.v1alpha1.Range
	5, // 3: performance.metrics.v1alpha1.GetMetricsResponse.memory:type_name -> performance.metrics.v1alpha1.MetricItem
	5, // 4: performance.metrics.v1alpha1.GetMetricsResponse.cpu:type_name -> performance.metrics.v1alpha1.MetricItem
	2, // 5: performance.metrics.v1alpha1.MetricsAPIService.GetMetrics:input_type -> performance.metrics.v1alpha1.GetMetricsRequest
	3, // 6: performance.metrics.v1alpha1.MetricsAPIService.GetMetrics:output_type -> performance.metrics.v1alpha1.GetMetricsResponse
	6, // [6:7] is the sub-list for method output_type
	5, // [5:6] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_performance_metrics_v1alpha1_metrics_api_proto_init() }
func file_performance_metrics_v1alpha1_metrics_api_proto_init() {
	if File_performance_metrics_v1alpha1_metrics_api_proto != nil {
		return
	}
	file_performance_metrics_v1alpha1_metrics_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Range); i {
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
		file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMetricsRequest); i {
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
		file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMetricsResponse); i {
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
			RawDescriptor: file_performance_metrics_v1alpha1_metrics_api_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_performance_metrics_v1alpha1_metrics_api_proto_goTypes,
		DependencyIndexes: file_performance_metrics_v1alpha1_metrics_api_proto_depIdxs,
		EnumInfos:         file_performance_metrics_v1alpha1_metrics_api_proto_enumTypes,
		MessageInfos:      file_performance_metrics_v1alpha1_metrics_api_proto_msgTypes,
	}.Build()
	File_performance_metrics_v1alpha1_metrics_api_proto = out.File
	file_performance_metrics_v1alpha1_metrics_api_proto_rawDesc = nil
	file_performance_metrics_v1alpha1_metrics_api_proto_goTypes = nil
	file_performance_metrics_v1alpha1_metrics_api_proto_depIdxs = nil
}
