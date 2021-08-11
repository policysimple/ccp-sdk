// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.1
// source: performance/autoscaling/v1alpha1/autoscaling.proto

package autoscalingv1alpha1

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

// Metadata ...
type Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string            `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Namespace   string            `protobuf:"bytes,2,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Labels      map[string]string `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Annotations map[string]string `protobuf:"bytes,4,rep,name=annotations,proto3" json:"annotations,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Metadata) Reset() {
	*x = Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Metadata) ProtoMessage() {}

func (x *Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Metadata.ProtoReflect.Descriptor instead.
func (*Metadata) Descriptor() ([]byte, []int) {
	return file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescGZIP(), []int{0}
}

func (x *Metadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Metadata) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *Metadata) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *Metadata) GetAnnotations() map[string]string {
	if x != nil {
		return x.Annotations
	}
	return nil
}

// AutoScalingSpecTarget ...
type AutoScalingSpecTarget struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApiVersion string `protobuf:"bytes,1,opt,name=api_version,json=apiVersion,proto3" json:"api_version,omitempty"`
	Kind       string `protobuf:"bytes,2,opt,name=kind,proto3" json:"kind,omitempty"`
	Name       string `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Container  string `protobuf:"bytes,4,opt,name=container,proto3" json:"container,omitempty"`
}

func (x *AutoScalingSpecTarget) Reset() {
	*x = AutoScalingSpecTarget{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AutoScalingSpecTarget) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AutoScalingSpecTarget) ProtoMessage() {}

func (x *AutoScalingSpecTarget) ProtoReflect() protoreflect.Message {
	mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AutoScalingSpecTarget.ProtoReflect.Descriptor instead.
func (*AutoScalingSpecTarget) Descriptor() ([]byte, []int) {
	return file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescGZIP(), []int{1}
}

func (x *AutoScalingSpecTarget) GetApiVersion() string {
	if x != nil {
		return x.ApiVersion
	}
	return ""
}

func (x *AutoScalingSpecTarget) GetKind() string {
	if x != nil {
		return x.Kind
	}
	return ""
}

func (x *AutoScalingSpecTarget) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AutoScalingSpecTarget) GetContainer() string {
	if x != nil {
		return x.Container
	}
	return ""
}

// AutoscalingSpecRule ...
type AutoscalingSpecRule struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metric   string            `protobuf:"bytes,1,opt,name=metric,proto3" json:"metric,omitempty"`
	Value    string            `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	Type     string            `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
	Metadata map[string]string `protobuf:"bytes,4,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *AutoscalingSpecRule) Reset() {
	*x = AutoscalingSpecRule{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AutoscalingSpecRule) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AutoscalingSpecRule) ProtoMessage() {}

func (x *AutoscalingSpecRule) ProtoReflect() protoreflect.Message {
	mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AutoscalingSpecRule.ProtoReflect.Descriptor instead.
func (*AutoscalingSpecRule) Descriptor() ([]byte, []int) {
	return file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescGZIP(), []int{2}
}

func (x *AutoscalingSpecRule) GetMetric() string {
	if x != nil {
		return x.Metric
	}
	return ""
}

func (x *AutoscalingSpecRule) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

func (x *AutoscalingSpecRule) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *AutoscalingSpecRule) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

// AutoscalingSpec ...
type AutoscalingSpec struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TargetRef       *AutoScalingSpecTarget `protobuf:"bytes,1,opt,name=target_ref,json=targetRef,proto3" json:"target_ref,omitempty"`
	Min             int32                  `protobuf:"varint,2,opt,name=min,proto3" json:"min,omitempty"`
	Max             int32                  `protobuf:"varint,3,opt,name=max,proto3" json:"max,omitempty"`
	PollingInterval int32                  `protobuf:"varint,4,opt,name=polling_interval,json=pollingInterval,proto3" json:"polling_interval,omitempty"`
	CooldownPeriod  int32                  `protobuf:"varint,5,opt,name=cooldown_period,json=cooldownPeriod,proto3" json:"cooldown_period,omitempty"`
	Rules           []*AutoscalingSpecRule `protobuf:"bytes,6,rep,name=rules,proto3" json:"rules,omitempty"`
}

func (x *AutoscalingSpec) Reset() {
	*x = AutoscalingSpec{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AutoscalingSpec) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AutoscalingSpec) ProtoMessage() {}

func (x *AutoscalingSpec) ProtoReflect() protoreflect.Message {
	mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AutoscalingSpec.ProtoReflect.Descriptor instead.
func (*AutoscalingSpec) Descriptor() ([]byte, []int) {
	return file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescGZIP(), []int{3}
}

func (x *AutoscalingSpec) GetTargetRef() *AutoScalingSpecTarget {
	if x != nil {
		return x.TargetRef
	}
	return nil
}

func (x *AutoscalingSpec) GetMin() int32 {
	if x != nil {
		return x.Min
	}
	return 0
}

func (x *AutoscalingSpec) GetMax() int32 {
	if x != nil {
		return x.Max
	}
	return 0
}

func (x *AutoscalingSpec) GetPollingInterval() int32 {
	if x != nil {
		return x.PollingInterval
	}
	return 0
}

func (x *AutoscalingSpec) GetCooldownPeriod() int32 {
	if x != nil {
		return x.CooldownPeriod
	}
	return 0
}

func (x *AutoscalingSpec) GetRules() []*AutoscalingSpecRule {
	if x != nil {
		return x.Rules
	}
	return nil
}

// Autoscaling ...
type Autoscaling struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata *Metadata        `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Spec     *AutoscalingSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
}

func (x *Autoscaling) Reset() {
	*x = Autoscaling{}
	if protoimpl.UnsafeEnabled {
		mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Autoscaling) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Autoscaling) ProtoMessage() {}

func (x *Autoscaling) ProtoReflect() protoreflect.Message {
	mi := &file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Autoscaling.ProtoReflect.Descriptor instead.
func (*Autoscaling) Descriptor() ([]byte, []int) {
	return file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescGZIP(), []int{4}
}

func (x *Autoscaling) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *Autoscaling) GetSpec() *AutoscalingSpec {
	if x != nil {
		return x.Spec
	}
	return nil
}

var File_performance_autoscaling_v1alpha1_autoscaling_proto protoreflect.FileDescriptor

var file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDesc = []byte{
	0x0a, 0x32, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2f, 0x61, 0x75,
	0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2f, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x20, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63,
	0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x22, 0xe6, 0x02, 0x0a, 0x08, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x4e, 0x0a, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x36, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61,
	0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x2e, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c,
	0x61, 0x62, 0x65, 0x6c, 0x73, 0x12, 0x5d, 0x0a, 0x0b, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3b, 0x2e, 0x70, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61,
	0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0b, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a,
	0x3e, 0x0a, 0x10, 0x41, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22,
	0x7e, 0x0a, 0x15, 0x41, 0x75, 0x74, 0x6f, 0x53, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53, 0x70,
	0x65, 0x63, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x70, 0x69, 0x5f,
	0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61,
	0x70, 0x69, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6b, 0x69, 0x6e,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x22,
	0xf5, 0x01, 0x0a, 0x13, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53,
	0x70, 0x65, 0x63, 0x52, 0x75, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x65, 0x74, 0x72, 0x69,
	0x63, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x5f, 0x0a, 0x08, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x43, 0x2e, 0x70, 0x65,
	0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63,
	0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41,
	0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53, 0x70, 0x65, 0x63, 0x52, 0x75,
	0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0xae, 0x02, 0x0a, 0x0f, 0x41, 0x75, 0x74, 0x6f,
	0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53, 0x70, 0x65, 0x63, 0x12, 0x56, 0x0a, 0x0a, 0x74,
	0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x72, 0x65, 0x66, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x37, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75,
	0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x41, 0x75, 0x74, 0x6f, 0x53, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53, 0x70,
	0x65, 0x63, 0x54, 0x61, 0x72, 0x67, 0x65, 0x74, 0x52, 0x09, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74,
	0x52, 0x65, 0x66, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x03, 0x6d, 0x69, 0x6e, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x61, 0x78, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x03, 0x6d, 0x61, 0x78, 0x12, 0x29, 0x0a, 0x10, 0x70, 0x6f, 0x6c, 0x6c, 0x69,
	0x6e, 0x67, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x76, 0x61, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x0f, 0x70, 0x6f, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x76,
	0x61, 0x6c, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6f, 0x6c, 0x64, 0x6f, 0x77, 0x6e, 0x5f, 0x70,
	0x65, 0x72, 0x69, 0x6f, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x63, 0x6f, 0x6f,
	0x6c, 0x64, 0x6f, 0x77, 0x6e, 0x50, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x12, 0x4b, 0x0a, 0x05, 0x72,
	0x75, 0x6c, 0x65, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x35, 0x2e, 0x70, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61,
	0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x41, 0x75,
	0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53, 0x70, 0x65, 0x63, 0x52, 0x75, 0x6c,
	0x65, 0x52, 0x05, 0x72, 0x75, 0x6c, 0x65, 0x73, 0x22, 0x9c, 0x01, 0x0a, 0x0b, 0x41, 0x75, 0x74,
	0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x12, 0x46, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x70, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61,
	0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x12, 0x45, 0x0a, 0x04, 0x73, 0x70, 0x65, 0x63, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x31,
	0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x61, 0x75, 0x74,
	0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x53, 0x70, 0x65,
	0x63, 0x52, 0x04, 0x73, 0x70, 0x65, 0x63, 0x42, 0xc1, 0x01, 0x0a, 0x2a, 0x69, 0x6f, 0x2e, 0x63,
	0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e, 0x63,
	0x65, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x10, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c,
	0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x33, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x6e,
	0x63, 0x65, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x61, 0x75, 0x74, 0x6f,
	0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2,
	0x02, 0x03, 0x50, 0x46, 0x58, 0xaa, 0x02, 0x20, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x61,
	0x6e, 0x63, 0x65, 0x2e, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69, 0x6e, 0x67, 0x2e,
	0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x20, 0x50, 0x65, 0x72, 0x66, 0x6f,
	0x72, 0x6d, 0x61, 0x6e, 0x63, 0x65, 0x5c, 0x41, 0x75, 0x74, 0x6f, 0x73, 0x63, 0x61, 0x6c, 0x69,
	0x6e, 0x67, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescOnce sync.Once
	file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescData = file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDesc
)

func file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescGZIP() []byte {
	file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescOnce.Do(func() {
		file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescData = protoimpl.X.CompressGZIP(file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescData)
	})
	return file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDescData
}

var file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_performance_autoscaling_v1alpha1_autoscaling_proto_goTypes = []interface{}{
	(*Metadata)(nil),              // 0: performance.autoscaling.v1alpha1.Metadata
	(*AutoScalingSpecTarget)(nil), // 1: performance.autoscaling.v1alpha1.AutoScalingSpecTarget
	(*AutoscalingSpecRule)(nil),   // 2: performance.autoscaling.v1alpha1.AutoscalingSpecRule
	(*AutoscalingSpec)(nil),       // 3: performance.autoscaling.v1alpha1.AutoscalingSpec
	(*Autoscaling)(nil),           // 4: performance.autoscaling.v1alpha1.Autoscaling
	nil,                           // 5: performance.autoscaling.v1alpha1.Metadata.LabelsEntry
	nil,                           // 6: performance.autoscaling.v1alpha1.Metadata.AnnotationsEntry
	nil,                           // 7: performance.autoscaling.v1alpha1.AutoscalingSpecRule.MetadataEntry
}
var file_performance_autoscaling_v1alpha1_autoscaling_proto_depIdxs = []int32{
	5, // 0: performance.autoscaling.v1alpha1.Metadata.labels:type_name -> performance.autoscaling.v1alpha1.Metadata.LabelsEntry
	6, // 1: performance.autoscaling.v1alpha1.Metadata.annotations:type_name -> performance.autoscaling.v1alpha1.Metadata.AnnotationsEntry
	7, // 2: performance.autoscaling.v1alpha1.AutoscalingSpecRule.metadata:type_name -> performance.autoscaling.v1alpha1.AutoscalingSpecRule.MetadataEntry
	1, // 3: performance.autoscaling.v1alpha1.AutoscalingSpec.target_ref:type_name -> performance.autoscaling.v1alpha1.AutoScalingSpecTarget
	2, // 4: performance.autoscaling.v1alpha1.AutoscalingSpec.rules:type_name -> performance.autoscaling.v1alpha1.AutoscalingSpecRule
	0, // 5: performance.autoscaling.v1alpha1.Autoscaling.metadata:type_name -> performance.autoscaling.v1alpha1.Metadata
	3, // 6: performance.autoscaling.v1alpha1.Autoscaling.spec:type_name -> performance.autoscaling.v1alpha1.AutoscalingSpec
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_performance_autoscaling_v1alpha1_autoscaling_proto_init() }
func file_performance_autoscaling_v1alpha1_autoscaling_proto_init() {
	if File_performance_autoscaling_v1alpha1_autoscaling_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Metadata); i {
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
		file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AutoScalingSpecTarget); i {
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
		file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AutoscalingSpecRule); i {
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
		file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AutoscalingSpec); i {
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
		file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Autoscaling); i {
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
			RawDescriptor: file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_performance_autoscaling_v1alpha1_autoscaling_proto_goTypes,
		DependencyIndexes: file_performance_autoscaling_v1alpha1_autoscaling_proto_depIdxs,
		MessageInfos:      file_performance_autoscaling_v1alpha1_autoscaling_proto_msgTypes,
	}.Build()
	File_performance_autoscaling_v1alpha1_autoscaling_proto = out.File
	file_performance_autoscaling_v1alpha1_autoscaling_proto_rawDesc = nil
	file_performance_autoscaling_v1alpha1_autoscaling_proto_goTypes = nil
	file_performance_autoscaling_v1alpha1_autoscaling_proto_depIdxs = nil
}