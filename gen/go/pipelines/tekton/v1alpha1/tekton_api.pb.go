// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: pipelines/tekton/v1alpha1/tekton_api.proto

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

type CreateTektonPipelineRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TektonPipeline *Pipeline `protobuf:"bytes,1,opt,name=tekton_pipeline,json=tektonPipeline,proto3" json:"tekton_pipeline,omitempty"`
	UserId         string    `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *CreateTektonPipelineRequest) Reset() {
	*x = CreateTektonPipelineRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTektonPipelineRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTektonPipelineRequest) ProtoMessage() {}

func (x *CreateTektonPipelineRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTektonPipelineRequest.ProtoReflect.Descriptor instead.
func (*CreateTektonPipelineRequest) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{0}
}

func (x *CreateTektonPipelineRequest) GetTektonPipeline() *Pipeline {
	if x != nil {
		return x.TektonPipeline
	}
	return nil
}

func (x *CreateTektonPipelineRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type CreateTektonPipelineResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TektonPipeline *Pipeline `protobuf:"bytes,1,opt,name=tekton_pipeline,json=tektonPipeline,proto3" json:"tekton_pipeline,omitempty"`
	Status         string    `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *CreateTektonPipelineResponse) Reset() {
	*x = CreateTektonPipelineResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTektonPipelineResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTektonPipelineResponse) ProtoMessage() {}

func (x *CreateTektonPipelineResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTektonPipelineResponse.ProtoReflect.Descriptor instead.
func (*CreateTektonPipelineResponse) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{1}
}

func (x *CreateTektonPipelineResponse) GetTektonPipeline() *Pipeline {
	if x != nil {
		return x.TektonPipeline
	}
	return nil
}

func (x *CreateTektonPipelineResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type GetOneTektonPipelineRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TektonPipelineId string `protobuf:"bytes,1,opt,name=tekton_pipeline_id,json=tektonPipelineId,proto3" json:"tekton_pipeline_id,omitempty"`
}

func (x *GetOneTektonPipelineRequest) Reset() {
	*x = GetOneTektonPipelineRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOneTektonPipelineRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOneTektonPipelineRequest) ProtoMessage() {}

func (x *GetOneTektonPipelineRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOneTektonPipelineRequest.ProtoReflect.Descriptor instead.
func (*GetOneTektonPipelineRequest) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{2}
}

func (x *GetOneTektonPipelineRequest) GetTektonPipelineId() string {
	if x != nil {
		return x.TektonPipelineId
	}
	return ""
}

type GetOneTektonPipelineResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TektonPipeline *Pipeline `protobuf:"bytes,1,opt,name=tekton_pipeline,json=tektonPipeline,proto3" json:"tekton_pipeline,omitempty"`
	Status         string    `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *GetOneTektonPipelineResponse) Reset() {
	*x = GetOneTektonPipelineResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetOneTektonPipelineResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetOneTektonPipelineResponse) ProtoMessage() {}

func (x *GetOneTektonPipelineResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetOneTektonPipelineResponse.ProtoReflect.Descriptor instead.
func (*GetOneTektonPipelineResponse) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{3}
}

func (x *GetOneTektonPipelineResponse) GetTektonPipeline() *Pipeline {
	if x != nil {
		return x.TektonPipeline
	}
	return nil
}

func (x *GetOneTektonPipelineResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type ListTektonPipelineRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectId uint32 `protobuf:"varint,1,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
}

func (x *ListTektonPipelineRequest) Reset() {
	*x = ListTektonPipelineRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTektonPipelineRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTektonPipelineRequest) ProtoMessage() {}

func (x *ListTektonPipelineRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTektonPipelineRequest.ProtoReflect.Descriptor instead.
func (*ListTektonPipelineRequest) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{4}
}

func (x *ListTektonPipelineRequest) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

type ListTektonPipelineResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TektonPipeline []*Pipeline `protobuf:"bytes,1,rep,name=tekton_pipeline,json=tektonPipeline,proto3" json:"tekton_pipeline,omitempty"`
}

func (x *ListTektonPipelineResponse) Reset() {
	*x = ListTektonPipelineResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTektonPipelineResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTektonPipelineResponse) ProtoMessage() {}

func (x *ListTektonPipelineResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTektonPipelineResponse.ProtoReflect.Descriptor instead.
func (*ListTektonPipelineResponse) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{5}
}

func (x *ListTektonPipelineResponse) GetTektonPipeline() []*Pipeline {
	if x != nil {
		return x.TektonPipeline
	}
	return nil
}

type DeleteTektonPipelineRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TektonPipelineId string `protobuf:"bytes,1,opt,name=tekton_pipeline_id,json=tektonPipelineId,proto3" json:"tekton_pipeline_id,omitempty"`
	UserId           string `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *DeleteTektonPipelineRequest) Reset() {
	*x = DeleteTektonPipelineRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTektonPipelineRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTektonPipelineRequest) ProtoMessage() {}

func (x *DeleteTektonPipelineRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTektonPipelineRequest.ProtoReflect.Descriptor instead.
func (*DeleteTektonPipelineRequest) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{6}
}

func (x *DeleteTektonPipelineRequest) GetTektonPipelineId() string {
	if x != nil {
		return x.TektonPipelineId
	}
	return ""
}

func (x *DeleteTektonPipelineRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type DeleteTektonPipelineResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status string `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *DeleteTektonPipelineResponse) Reset() {
	*x = DeleteTektonPipelineResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTektonPipelineResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTektonPipelineResponse) ProtoMessage() {}

func (x *DeleteTektonPipelineResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTektonPipelineResponse.ProtoReflect.Descriptor instead.
func (*DeleteTektonPipelineResponse) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{7}
}

func (x *DeleteTektonPipelineResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type ListTektonTaskRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListTektonTaskRequest) Reset() {
	*x = ListTektonTaskRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTektonTaskRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTektonTaskRequest) ProtoMessage() {}

func (x *ListTektonTaskRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTektonTaskRequest.ProtoReflect.Descriptor instead.
func (*ListTektonTaskRequest) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{8}
}

type ListTektonTaskResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tasks  []*Task `protobuf:"bytes,1,rep,name=tasks,proto3" json:"tasks,omitempty"`
	Status string  `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *ListTektonTaskResponse) Reset() {
	*x = ListTektonTaskResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTektonTaskResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTektonTaskResponse) ProtoMessage() {}

func (x *ListTektonTaskResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTektonTaskResponse.ProtoReflect.Descriptor instead.
func (*ListTektonTaskResponse) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP(), []int{9}
}

func (x *ListTektonTaskResponse) GetTasks() []*Task {
	if x != nil {
		return x.Tasks
	}
	return nil
}

func (x *ListTektonTaskResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

var File_pipelines_tekton_v1alpha1_tekton_api_proto protoreflect.FileDescriptor

var file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDesc = []byte{
	0x0a, 0x2a, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x70, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x26, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2f, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2f, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x84, 0x01, 0x0a, 0x1b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e,
	0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x4c, 0x0a, 0x0f, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x0e, 0x74,
	0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x17, 0x0a,
	0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0x84, 0x01, 0x0a, 0x1c, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4c, 0x0a, 0x0f, 0x74, 0x65, 0x6b, 0x74, 0x6f,
	0x6e, 0x5f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x23, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b,
	0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x0e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x4b, 0x0a,
	0x1b, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2c, 0x0a, 0x12,
	0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e,
	0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x49, 0x64, 0x22, 0x84, 0x01, 0x0a, 0x1c, 0x47,
	0x65, 0x74, 0x4f, 0x6e, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4c, 0x0a, 0x0f, 0x74,
	0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73,
	0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x0e, 0x74, 0x65, 0x6b, 0x74, 0x6f,
	0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x22, 0x3a, 0x0a, 0x19, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50,
	0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d,
	0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x22, 0x6a, 0x0a,
	0x1a, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4c, 0x0a, 0x0f, 0x74,
	0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73,
	0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x0e, 0x74, 0x65, 0x6b, 0x74, 0x6f,
	0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x22, 0x64, 0x0a, 0x1b, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2c, 0x0a, 0x12, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x5f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22,
	0x36, 0x0a, 0x1c, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50,
	0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x17, 0x0a, 0x15, 0x4c, 0x69, 0x73, 0x74, 0x54,
	0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x22, 0x67, 0x0a, 0x16, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x54, 0x61,
	0x73, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x05, 0x74, 0x61,
	0x73, 0x6b, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b,
	0x73, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x32, 0xb3, 0x05, 0x0a, 0x18, 0x54, 0x65,
	0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x41, 0x50, 0x49, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x87, 0x01, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12,
	0x36, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x37, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e,
	0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x87, 0x01, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f,
	0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x36, 0x2e, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x6e, 0x65, 0x54, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x37, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65,
	0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x47, 0x65,
	0x74, 0x4f, 0x6e, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x81, 0x01, 0x0a, 0x12, 0x4c,
	0x69, 0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x12, 0x34, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65,
	0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x35, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x87,
	0x01, 0x0a, 0x14, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50,
	0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x36, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e,
	0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x37, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x75, 0x0a, 0x0e, 0x4c, 0x69, 0x73, 0x74,
	0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x30, 0x2e, 0x70, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x65, 0x6b, 0x74, 0x6f,
	0x6e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x31, 0x2e, 0x70,
	0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x65, 0x6b,
	0x74, 0x6f, 0x6e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42,
	0xb1, 0x01, 0x0a, 0x23, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0e, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x41,
	0x50, 0x49, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70,
	0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa, 0x02, 0x19, 0x50, 0x69,
	0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x56,
	0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x19, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x5c, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescOnce sync.Once
	file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescData = file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDesc
)

func file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescGZIP() []byte {
	file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescOnce.Do(func() {
		file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescData)
	})
	return file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDescData
}

var file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_pipelines_tekton_v1alpha1_tekton_api_proto_goTypes = []interface{}{
	(*CreateTektonPipelineRequest)(nil),  // 0: pipelines.tekton.v1alpha1.CreateTektonPipelineRequest
	(*CreateTektonPipelineResponse)(nil), // 1: pipelines.tekton.v1alpha1.CreateTektonPipelineResponse
	(*GetOneTektonPipelineRequest)(nil),  // 2: pipelines.tekton.v1alpha1.GetOneTektonPipelineRequest
	(*GetOneTektonPipelineResponse)(nil), // 3: pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse
	(*ListTektonPipelineRequest)(nil),    // 4: pipelines.tekton.v1alpha1.ListTektonPipelineRequest
	(*ListTektonPipelineResponse)(nil),   // 5: pipelines.tekton.v1alpha1.ListTektonPipelineResponse
	(*DeleteTektonPipelineRequest)(nil),  // 6: pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest
	(*DeleteTektonPipelineResponse)(nil), // 7: pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse
	(*ListTektonTaskRequest)(nil),        // 8: pipelines.tekton.v1alpha1.ListTektonTaskRequest
	(*ListTektonTaskResponse)(nil),       // 9: pipelines.tekton.v1alpha1.ListTektonTaskResponse
	(*Pipeline)(nil),                     // 10: pipelines.tekton.v1alpha1.Pipeline
	(*Task)(nil),                         // 11: pipelines.tekton.v1alpha1.Task
}
var file_pipelines_tekton_v1alpha1_tekton_api_proto_depIdxs = []int32{
	10, // 0: pipelines.tekton.v1alpha1.CreateTektonPipelineRequest.tekton_pipeline:type_name -> pipelines.tekton.v1alpha1.Pipeline
	10, // 1: pipelines.tekton.v1alpha1.CreateTektonPipelineResponse.tekton_pipeline:type_name -> pipelines.tekton.v1alpha1.Pipeline
	10, // 2: pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.tekton_pipeline:type_name -> pipelines.tekton.v1alpha1.Pipeline
	10, // 3: pipelines.tekton.v1alpha1.ListTektonPipelineResponse.tekton_pipeline:type_name -> pipelines.tekton.v1alpha1.Pipeline
	11, // 4: pipelines.tekton.v1alpha1.ListTektonTaskResponse.tasks:type_name -> pipelines.tekton.v1alpha1.Task
	0,  // 5: pipelines.tekton.v1alpha1.TektonPipelineAPIService.CreateTektonPipeline:input_type -> pipelines.tekton.v1alpha1.CreateTektonPipelineRequest
	2,  // 6: pipelines.tekton.v1alpha1.TektonPipelineAPIService.GetOneTektonPipeline:input_type -> pipelines.tekton.v1alpha1.GetOneTektonPipelineRequest
	4,  // 7: pipelines.tekton.v1alpha1.TektonPipelineAPIService.ListTektonPipeline:input_type -> pipelines.tekton.v1alpha1.ListTektonPipelineRequest
	6,  // 8: pipelines.tekton.v1alpha1.TektonPipelineAPIService.DeleteTektonPipeline:input_type -> pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest
	8,  // 9: pipelines.tekton.v1alpha1.TektonPipelineAPIService.ListTektonTask:input_type -> pipelines.tekton.v1alpha1.ListTektonTaskRequest
	1,  // 10: pipelines.tekton.v1alpha1.TektonPipelineAPIService.CreateTektonPipeline:output_type -> pipelines.tekton.v1alpha1.CreateTektonPipelineResponse
	3,  // 11: pipelines.tekton.v1alpha1.TektonPipelineAPIService.GetOneTektonPipeline:output_type -> pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse
	5,  // 12: pipelines.tekton.v1alpha1.TektonPipelineAPIService.ListTektonPipeline:output_type -> pipelines.tekton.v1alpha1.ListTektonPipelineResponse
	7,  // 13: pipelines.tekton.v1alpha1.TektonPipelineAPIService.DeleteTektonPipeline:output_type -> pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse
	9,  // 14: pipelines.tekton.v1alpha1.TektonPipelineAPIService.ListTektonTask:output_type -> pipelines.tekton.v1alpha1.ListTektonTaskResponse
	10, // [10:15] is the sub-list for method output_type
	5,  // [5:10] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_pipelines_tekton_v1alpha1_tekton_api_proto_init() }
func file_pipelines_tekton_v1alpha1_tekton_api_proto_init() {
	if File_pipelines_tekton_v1alpha1_tekton_api_proto != nil {
		return
	}
	file_pipelines_tekton_v1alpha1_tekton_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTektonPipelineRequest); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTektonPipelineResponse); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOneTektonPipelineRequest); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetOneTektonPipelineResponse); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTektonPipelineRequest); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTektonPipelineResponse); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTektonPipelineRequest); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTektonPipelineResponse); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTektonTaskRequest); i {
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
		file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTektonTaskResponse); i {
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
			RawDescriptor: file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pipelines_tekton_v1alpha1_tekton_api_proto_goTypes,
		DependencyIndexes: file_pipelines_tekton_v1alpha1_tekton_api_proto_depIdxs,
		MessageInfos:      file_pipelines_tekton_v1alpha1_tekton_api_proto_msgTypes,
	}.Build()
	File_pipelines_tekton_v1alpha1_tekton_api_proto = out.File
	file_pipelines_tekton_v1alpha1_tekton_api_proto_rawDesc = nil
	file_pipelines_tekton_v1alpha1_tekton_api_proto_goTypes = nil
	file_pipelines_tekton_v1alpha1_tekton_api_proto_depIdxs = nil
}
