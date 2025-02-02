// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: performance/metrics/v1alpha1/metrics.proto

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

// MetricItem ...
type MetricItem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Date      string  `protobuf:"bytes,1,opt,name=date,proto3" json:"date,omitempty"`
	Container string  `protobuf:"bytes,2,opt,name=container,proto3" json:"container,omitempty"`
	Resource  string  `protobuf:"bytes,3,opt,name=resource,proto3" json:"resource,omitempty"`
	Value     float64 `protobuf:"fixed64,4,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *MetricItem) Reset() {
	*x = MetricItem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MetricItem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MetricItem) ProtoMessage() {}

func (x *MetricItem) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MetricItem.ProtoReflect.Descriptor instead.
func (*MetricItem) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_proto_rawDescGZIP(), []int{0}
}

func (x *MetricItem) GetDate() string {
	if x != nil {
		return x.Date
	}
	return ""
}

func (x *MetricItem) GetContainer() string {
	if x != nil {
		return x.Container
	}
	return ""
}

func (x *MetricItem) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

func (x *MetricItem) GetValue() float64 {
	if x != nil {
		return x.Value
	}
	return 0
}

type TektonMetricItem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Date              string  `protobuf:"bytes,1,opt,name=date,proto3" json:"date,omitempty"`
	Container         string  `protobuf:"bytes,2,opt,name=container,proto3" json:"container,omitempty"`
	Instance          string  `protobuf:"bytes,3,opt,name=instance,proto3" json:"instance,omitempty"`
	Pod               string  `protobuf:"bytes,4,opt,name=pod,proto3" json:"pod,omitempty"`
	CreatedAt         string  `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	Pipeline          string  `protobuf:"bytes,6,opt,name=pipeline,proto3" json:"pipeline,omitempty"`
	Endpoint          string  `protobuf:"bytes,7,opt,name=endpoint,proto3" json:"endpoint,omitempty"`
	Task              string  `protobuf:"bytes,8,opt,name=task,proto3" json:"task,omitempty"`
	Service           string  `protobuf:"bytes,9,opt,name=service,proto3" json:"service,omitempty"`
	Namespace         string  `protobuf:"bytes,10,opt,name=namespace,proto3" json:"namespace,omitempty"`
	ExportedNamespace string  `protobuf:"bytes,11,opt,name=exported_namespace,json=exportedNamespace,proto3" json:"exported_namespace,omitempty"`
	TektonQueryName   string  `protobuf:"bytes,12,opt,name=tekton_query_name,json=tektonQueryName,proto3" json:"tekton_query_name,omitempty"`
	Job               string  `protobuf:"bytes,13,opt,name=job,proto3" json:"job,omitempty"`
	Value             float64 `protobuf:"fixed64,14,opt,name=value,proto3" json:"value,omitempty"`
	Timestamp         string  `protobuf:"bytes,15,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Status            string  `protobuf:"bytes,16,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *TektonMetricItem) Reset() {
	*x = TektonMetricItem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_metrics_v1alpha1_metrics_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TektonMetricItem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TektonMetricItem) ProtoMessage() {}

func (x *TektonMetricItem) ProtoReflect() protoreflect.Message {
	mi := &file_performance_metrics_v1alpha1_metrics_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TektonMetricItem.ProtoReflect.Descriptor instead.
func (*TektonMetricItem) Descriptor() ([]byte, []int) {
	return file_performance_metrics_v1alpha1_metrics_proto_rawDescGZIP(), []int{1}
}

func (x *TektonMetricItem) GetDate() string {
	if x != nil {
		return x.Date
	}
	return ""
}

func (x *TektonMetricItem) GetContainer() string {
	if x != nil {
		return x.Container
	}
	return ""
}

func (x *TektonMetricItem) GetInstance() string {
	if x != nil {
		return x.Instance
	}
	return ""
}

func (x *TektonMetricItem) GetPod() string {
	if x != nil {
		return x.Pod
	}
	return ""
}

func (x *TektonMetricItem) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *TektonMetricItem) GetPipeline() string {
	if x != nil {
		return x.Pipeline
	}
	return ""
}

func (x *TektonMetricItem) GetEndpoint() string {
	if x != nil {
		return x.Endpoint
	}
	return ""
}

func (x *TektonMetricItem) GetTask() string {
	if x != nil {
		return x.Task
	}
	return ""
}

func (x *TektonMetricItem) GetService() string {
	if x != nil {
		return x.Service
	}
	return ""
}

func (x *TektonMetricItem) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *TektonMetricItem) GetExportedNamespace() string {
	if x != nil {
		return x.ExportedNamespace
	}
	return ""
}

func (x *TektonMetricItem) GetTektonQueryName() string {
	if x != nil {
		return x.TektonQueryName
	}
	return ""
}

func (x *TektonMetricItem) GetJob() string {
	if x != nil {
		return x.Job
	}
	return ""
}

func (x *TektonMetricItem) GetValue() float64 {
	if x != nil {
		return x.Value
	}
	return 0
}

func (x *TektonMetricItem) GetTimestamp() string {
	if x != nil {
		return x.Timestamp
	}
	return ""
}

func (x *TektonMetricItem) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

var File_performance_metrics_v1alpha1_metrics_proto protoreflect.FileDescriptor

var file_performance_metrics_v1alpha1_metrics_proto_rawDesc = []byte{
	0x0a, 0x2a, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x6d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6d,
	0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x70, 0x65,
	0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0x70, 0x0a, 0x0a, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x49, 0x74, 0x65, 0x6d, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1c, 0x0a, 0x09,
	0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x65,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0xce, 0x03, 0x0a,
	0x10, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x49, 0x74, 0x65,
	0x6d, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e,
	0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69,
	0x6e, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x12,
	0x10, 0x0a, 0x03, 0x70, 0x6f, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x70, 0x6f,
	0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74,
	0x12, 0x1a, 0x0a, 0x08, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x1a, 0x0a, 0x08,
	0x65, 0x6e, 0x64, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x65, 0x6e, 0x64, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x61, 0x73, 0x6b,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x61, 0x73, 0x6b, 0x12, 0x18, 0x0a, 0x07,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x12, 0x2d, 0x0a, 0x12, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x11, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x12, 0x2a, 0x0a, 0x11, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5f, 0x71, 0x75,
	0x65, 0x72, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f,
	0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12,
	0x10, 0x0a, 0x03, 0x6a, 0x6f, 0x62, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6a, 0x6f,
	0x62, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x01,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x42, 0xad, 0x01,
	0x0a, 0x26, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x65, 0x72, 0x66,
	0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0c, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63,
	0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
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
	file_performance_metrics_v1alpha1_metrics_proto_rawDescOnce sync.Once
	file_performance_metrics_v1alpha1_metrics_proto_rawDescData = file_performance_metrics_v1alpha1_metrics_proto_rawDesc
)

func file_performance_metrics_v1alpha1_metrics_proto_rawDescGZIP() []byte {
	file_performance_metrics_v1alpha1_metrics_proto_rawDescOnce.Do(func() {
		file_performance_metrics_v1alpha1_metrics_proto_rawDescData = protoimpl.X.CompressGZIP(file_performance_metrics_v1alpha1_metrics_proto_rawDescData)
	})
	return file_performance_metrics_v1alpha1_metrics_proto_rawDescData
}

var file_performance_metrics_v1alpha1_metrics_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_performance_metrics_v1alpha1_metrics_proto_goTypes = []interface{}{
	(*MetricItem)(nil),       // 0: performance.metrics.v1alpha1.MetricItem
	(*TektonMetricItem)(nil), // 1: performance.metrics.v1alpha1.TektonMetricItem
}
var file_performance_metrics_v1alpha1_metrics_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_performance_metrics_v1alpha1_metrics_proto_init() }
func file_performance_metrics_v1alpha1_metrics_proto_init() {
	if File_performance_metrics_v1alpha1_metrics_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_performance_metrics_v1alpha1_metrics_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MetricItem); i {
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
		file_performance_metrics_v1alpha1_metrics_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TektonMetricItem); i {
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
			RawDescriptor: file_performance_metrics_v1alpha1_metrics_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_performance_metrics_v1alpha1_metrics_proto_goTypes,
		DependencyIndexes: file_performance_metrics_v1alpha1_metrics_proto_depIdxs,
		MessageInfos:      file_performance_metrics_v1alpha1_metrics_proto_msgTypes,
	}.Build()
	File_performance_metrics_v1alpha1_metrics_proto = out.File
	file_performance_metrics_v1alpha1_metrics_proto_rawDesc = nil
	file_performance_metrics_v1alpha1_metrics_proto_goTypes = nil
	file_performance_metrics_v1alpha1_metrics_proto_depIdxs = nil
}
