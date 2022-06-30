// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: pipelines/tekton/v1alpha1/tekton.proto

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

type Params struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	ValueString string   `protobuf:"bytes,2,opt,name=value_string,json=valueString,proto3" json:"value_string,omitempty"`
	ValueArray  []string `protobuf:"bytes,3,rep,name=value_array,json=valueArray,proto3" json:"value_array,omitempty"`
	ValueType   string   `protobuf:"bytes,4,opt,name=value_type,json=valueType,proto3" json:"value_type,omitempty"`
}

func (x *Params) Reset() {
	*x = Params{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Params) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Params) ProtoMessage() {}

func (x *Params) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Params.ProtoReflect.Descriptor instead.
func (*Params) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_proto_rawDescGZIP(), []int{0}
}

func (x *Params) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Params) GetValueString() string {
	if x != nil {
		return x.ValueString
	}
	return ""
}

func (x *Params) GetValueArray() []string {
	if x != nil {
		return x.ValueArray
	}
	return nil
}

func (x *Params) GetValueType() string {
	if x != nil {
		return x.ValueType
	}
	return ""
}

type TaskParams struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ParamName       string   `protobuf:"bytes,1,opt,name=param_name,json=paramName,proto3" json:"param_name,omitempty"`
	ParamValueType  string   `protobuf:"bytes,2,opt,name=param_value_type,json=paramValueType,proto3" json:"param_value_type,omitempty"`
	ParamValue      string   `protobuf:"bytes,3,opt,name=param_value,json=paramValue,proto3" json:"param_value,omitempty"`
	ParamValueArray []string `protobuf:"bytes,4,rep,name=param_value_array,json=paramValueArray,proto3" json:"param_value_array,omitempty"`
}

func (x *TaskParams) Reset() {
	*x = TaskParams{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TaskParams) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TaskParams) ProtoMessage() {}

func (x *TaskParams) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TaskParams.ProtoReflect.Descriptor instead.
func (*TaskParams) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_proto_rawDescGZIP(), []int{1}
}

func (x *TaskParams) GetParamName() string {
	if x != nil {
		return x.ParamName
	}
	return ""
}

func (x *TaskParams) GetParamValueType() string {
	if x != nil {
		return x.ParamValueType
	}
	return ""
}

func (x *TaskParams) GetParamValue() string {
	if x != nil {
		return x.ParamValue
	}
	return ""
}

func (x *TaskParams) GetParamValueArray() []string {
	if x != nil {
		return x.ParamValueArray
	}
	return nil
}

type Workspaces struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Main string `protobuf:"bytes,2,opt,name=main,proto3" json:"main,omitempty"`
	Type string `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
}

func (x *Workspaces) Reset() {
	*x = Workspaces{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Workspaces) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Workspaces) ProtoMessage() {}

func (x *Workspaces) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Workspaces.ProtoReflect.Descriptor instead.
func (*Workspaces) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_proto_rawDescGZIP(), []int{2}
}

func (x *Workspaces) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Workspaces) GetMain() string {
	if x != nil {
		return x.Main
	}
	return ""
}

func (x *Workspaces) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

type Task struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           string        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	TaskName     string        `protobuf:"bytes,2,opt,name=task_name,json=taskName,proto3" json:"task_name,omitempty"`
	TaskRefName  string        `protobuf:"bytes,3,opt,name=task_ref_name,json=taskRefName,proto3" json:"task_ref_name,omitempty"`
	TaskKind     string        `protobuf:"bytes,4,opt,name=task_kind,json=taskKind,proto3" json:"task_kind,omitempty"`
	TaskRunAfter []string      `protobuf:"bytes,5,rep,name=task_run_after,json=taskRunAfter,proto3" json:"task_run_after,omitempty"`
	Workspaces   []*Workspaces `protobuf:"bytes,6,rep,name=workspaces,proto3" json:"workspaces,omitempty"`
	TaskParams   []*TaskParams `protobuf:"bytes,7,rep,name=task_params,json=taskParams,proto3" json:"task_params,omitempty"`
	Description  string        `protobuf:"bytes,8,opt,name=description,proto3" json:"description,omitempty"`
}

func (x *Task) Reset() {
	*x = Task{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Task) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Task) ProtoMessage() {}

func (x *Task) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Task.ProtoReflect.Descriptor instead.
func (*Task) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_proto_rawDescGZIP(), []int{3}
}

func (x *Task) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Task) GetTaskName() string {
	if x != nil {
		return x.TaskName
	}
	return ""
}

func (x *Task) GetTaskRefName() string {
	if x != nil {
		return x.TaskRefName
	}
	return ""
}

func (x *Task) GetTaskKind() string {
	if x != nil {
		return x.TaskKind
	}
	return ""
}

func (x *Task) GetTaskRunAfter() []string {
	if x != nil {
		return x.TaskRunAfter
	}
	return nil
}

func (x *Task) GetWorkspaces() []*Workspaces {
	if x != nil {
		return x.Workspaces
	}
	return nil
}

func (x *Task) GetTaskParams() []*TaskParams {
	if x != nil {
		return x.TaskParams
	}
	return nil
}

func (x *Task) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

// Pipeline ...
type Pipeline struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                   string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	OrganizationId       uint32            `protobuf:"varint,2,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId            uint32            `protobuf:"varint,3,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	TypeMetaKind         string            `protobuf:"bytes,4,opt,name=type_meta_kind,json=typeMetaKind,proto3" json:"type_meta_kind,omitempty"`
	TypeMetaApiVersion   string            `protobuf:"bytes,5,opt,name=type_meta_api_version,json=typeMetaApiVersion,proto3" json:"type_meta_api_version,omitempty"`
	ObjectMetaName       string            `protobuf:"bytes,6,opt,name=object_meta_name,json=objectMetaName,proto3" json:"object_meta_name,omitempty"`
	ObjectMetaNamespace  string            `protobuf:"bytes,7,opt,name=object_meta_namespace,json=objectMetaNamespace,proto3" json:"object_meta_namespace,omitempty"`
	Params               []*Params         `protobuf:"bytes,8,rep,name=params,proto3" json:"params,omitempty"`
	Tasks                []*Task           `protobuf:"bytes,9,rep,name=tasks,proto3" json:"tasks,omitempty"`
	StatusType           string            `protobuf:"bytes,10,opt,name=status_type,json=statusType,proto3" json:"status_type,omitempty"`
	Integration          map[string]string `protobuf:"bytes,11,rep,name=integration,proto3" json:"integration,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	EnvironmentVariables map[string]string `protobuf:"bytes,12,rep,name=environment_variables,json=environmentVariables,proto3" json:"environment_variables,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Commands             map[string]string `protobuf:"bytes,13,rep,name=commands,proto3" json:"commands,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Secrets              map[string]string `protobuf:"bytes,14,rep,name=secrets,proto3" json:"secrets,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Labels               map[string]string `protobuf:"bytes,15,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Active               bool              `protobuf:"varint,16,opt,name=active,proto3" json:"active,omitempty"`
	InstanceType         string            `protobuf:"bytes,17,opt,name=instance_type,json=instanceType,proto3" json:"instance_type,omitempty"`
	WorkspacesMain       []*Workspaces     `protobuf:"bytes,18,rep,name=workspaces_main,json=workspacesMain,proto3" json:"workspaces_main,omitempty"`
	TrafficType          int32             `protobuf:"varint,19,opt,name=traffic_type,json=trafficType,proto3" json:"traffic_type,omitempty"`
}

func (x *Pipeline) Reset() {
	*x = Pipeline{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Pipeline) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Pipeline) ProtoMessage() {}

func (x *Pipeline) ProtoReflect() protoreflect.Message {
	mi := &file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Pipeline.ProtoReflect.Descriptor instead.
func (*Pipeline) Descriptor() ([]byte, []int) {
	return file_pipelines_tekton_v1alpha1_tekton_proto_rawDescGZIP(), []int{4}
}

func (x *Pipeline) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Pipeline) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *Pipeline) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *Pipeline) GetTypeMetaKind() string {
	if x != nil {
		return x.TypeMetaKind
	}
	return ""
}

func (x *Pipeline) GetTypeMetaApiVersion() string {
	if x != nil {
		return x.TypeMetaApiVersion
	}
	return ""
}

func (x *Pipeline) GetObjectMetaName() string {
	if x != nil {
		return x.ObjectMetaName
	}
	return ""
}

func (x *Pipeline) GetObjectMetaNamespace() string {
	if x != nil {
		return x.ObjectMetaNamespace
	}
	return ""
}

func (x *Pipeline) GetParams() []*Params {
	if x != nil {
		return x.Params
	}
	return nil
}

func (x *Pipeline) GetTasks() []*Task {
	if x != nil {
		return x.Tasks
	}
	return nil
}

func (x *Pipeline) GetStatusType() string {
	if x != nil {
		return x.StatusType
	}
	return ""
}

func (x *Pipeline) GetIntegration() map[string]string {
	if x != nil {
		return x.Integration
	}
	return nil
}

func (x *Pipeline) GetEnvironmentVariables() map[string]string {
	if x != nil {
		return x.EnvironmentVariables
	}
	return nil
}

func (x *Pipeline) GetCommands() map[string]string {
	if x != nil {
		return x.Commands
	}
	return nil
}

func (x *Pipeline) GetSecrets() map[string]string {
	if x != nil {
		return x.Secrets
	}
	return nil
}

func (x *Pipeline) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *Pipeline) GetActive() bool {
	if x != nil {
		return x.Active
	}
	return false
}

func (x *Pipeline) GetInstanceType() string {
	if x != nil {
		return x.InstanceType
	}
	return ""
}

func (x *Pipeline) GetWorkspacesMain() []*Workspaces {
	if x != nil {
		return x.WorkspacesMain
	}
	return nil
}

func (x *Pipeline) GetTrafficType() int32 {
	if x != nil {
		return x.TrafficType
	}
	return 0
}

var File_pipelines_tekton_v1alpha1_tekton_proto protoreflect.FileDescriptor

var file_pipelines_tekton_v1alpha1_tekton_proto_rawDesc = []byte{
	0x0a, 0x26, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2f, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x74, 0x65, 0x6b, 0x74,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x22, 0x7f, 0x0a, 0x06, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x21, 0x0a, 0x0c, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x73, 0x74, 0x72, 0x69, 0x6e,
	0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x53, 0x74,
	0x72, 0x69, 0x6e, 0x67, 0x12, 0x1f, 0x0a, 0x0b, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x61, 0x72,
	0x72, 0x61, 0x79, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x41, 0x72, 0x72, 0x61, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x22, 0xa2, 0x01, 0x0a, 0x0a, 0x54, 0x61, 0x73, 0x6b, 0x50, 0x61, 0x72,
	0x61, 0x6d, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x28, 0x0a, 0x10, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x5f, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x70, 0x61,
	0x72, 0x61, 0x6d, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1f, 0x0a, 0x0b,
	0x70, 0x61, 0x72, 0x61, 0x6d, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x2a, 0x0a,
	0x11, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x61, 0x72, 0x72,
	0x61, 0x79, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x41, 0x72, 0x72, 0x61, 0x79, 0x22, 0x48, 0x0a, 0x0a, 0x57, 0x6f, 0x72,
	0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6d,
	0x61, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6d, 0x61, 0x69, 0x6e, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x22, 0xcb, 0x02, 0x0a, 0x04, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1b, 0x0a, 0x09,
	0x74, 0x61, 0x73, 0x6b, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x74, 0x61, 0x73, 0x6b, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x22, 0x0a, 0x0d, 0x74, 0x61, 0x73,
	0x6b, 0x5f, 0x72, 0x65, 0x66, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x74, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x66, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a,
	0x09, 0x74, 0x61, 0x73, 0x6b, 0x5f, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x74, 0x61, 0x73, 0x6b, 0x4b, 0x69, 0x6e, 0x64, 0x12, 0x24, 0x0a, 0x0e, 0x74, 0x61,
	0x73, 0x6b, 0x5f, 0x72, 0x75, 0x6e, 0x5f, 0x61, 0x66, 0x74, 0x65, 0x72, 0x18, 0x05, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x0c, 0x74, 0x61, 0x73, 0x6b, 0x52, 0x75, 0x6e, 0x41, 0x66, 0x74, 0x65, 0x72,
	0x12, 0x45, 0x0a, 0x0a, 0x77, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x18, 0x06,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73,
	0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x57, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x52, 0x0a, 0x77, 0x6f, 0x72,
	0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x12, 0x46, 0x0a, 0x0b, 0x74, 0x61, 0x73, 0x6b, 0x5f,
	0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x70,
	0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x50, 0x61, 0x72,
	0x61, 0x6d, 0x73, 0x52, 0x0a, 0x74, 0x61, 0x73, 0x6b, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x12,
	0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x08,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x22, 0xc9, 0x0a, 0x0a, 0x08, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x27,
	0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12, 0x24, 0x0a, 0x0e, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6d,
	0x65, 0x74, 0x61, 0x5f, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c,
	0x74, 0x79, 0x70, 0x65, 0x4d, 0x65, 0x74, 0x61, 0x4b, 0x69, 0x6e, 0x64, 0x12, 0x31, 0x0a, 0x15,
	0x74, 0x79, 0x70, 0x65, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x61, 0x70, 0x69, 0x5f, 0x76, 0x65,
	0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x74, 0x79, 0x70,
	0x65, 0x4d, 0x65, 0x74, 0x61, 0x41, 0x70, 0x69, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12,
	0x28, 0x0a, 0x10, 0x6f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x6f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x4d, 0x65, 0x74, 0x61, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x32, 0x0a, 0x15, 0x6f, 0x62, 0x6a,
	0x65, 0x63, 0x74, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61,
	0x63, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x13, 0x6f, 0x62, 0x6a, 0x65, 0x63, 0x74,
	0x4d, 0x65, 0x74, 0x61, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x39, 0x0a,
	0x06, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x18, 0x08, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e,
	0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e,
	0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x73,
	0x52, 0x06, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x12, 0x35, 0x0a, 0x05, 0x74, 0x61, 0x73, 0x6b,
	0x73, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x12,
	0x1f, 0x0a, 0x0b, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0a,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x56, 0x0a, 0x0b, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x0b, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x34, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65,
	0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x2e, 0x49, 0x6e, 0x74, 0x65, 0x67,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0b, 0x69, 0x6e, 0x74,
	0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x72, 0x0a, 0x15, 0x65, 0x6e, 0x76, 0x69,
	0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65,
	0x73, 0x18, 0x0c, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3d, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x2e, 0x45, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x14, 0x65, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x12, 0x4d, 0x0a, 0x08,
	0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x18, 0x0d, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x31,
	0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f,
	0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c,
	0x69, 0x6e, 0x65, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x08, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x12, 0x4a, 0x0a, 0x07, 0x73,
	0x65, 0x63, 0x72, 0x65, 0x74, 0x73, 0x18, 0x0e, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x70,
	0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x2e, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07,
	0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x73, 0x12, 0x47, 0x0a, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c,
	0x73, 0x18, 0x0f, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69,
	0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x2e, 0x4c, 0x61, 0x62,
	0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73,
	0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x10, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x69, 0x6e, 0x73, 0x74,
	0x61, 0x6e, 0x63, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6e, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x4e, 0x0a,
	0x0f, 0x77, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x5f, 0x6d, 0x61, 0x69, 0x6e,
	0x18, 0x12, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x57, 0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x52, 0x0e, 0x77,
	0x6f, 0x72, 0x6b, 0x73, 0x70, 0x61, 0x63, 0x65, 0x73, 0x4d, 0x61, 0x69, 0x6e, 0x12, 0x21, 0x0a,
	0x0c, 0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x13, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x0b, 0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x54, 0x79, 0x70, 0x65,
	0x1a, 0x3e, 0x0a, 0x10, 0x49, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x1a, 0x47, 0x0a, 0x19, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x56,
	0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a,
	0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3b, 0x0a, 0x0d, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3a, 0x0a, 0x0c, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0xae, 0x01,
	0x0a, 0x23, 0x69, 0x6f, 0x2e, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2e, 0x70, 0x69, 0x70, 0x65,
	0x6c, 0x69, 0x6e, 0x65, 0x73, 0x2e, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x0b, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f, 0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73,
	0x2f, 0x74, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0xa2, 0x02, 0x03, 0x50, 0x50, 0x58, 0xaa, 0x02, 0x19, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e,
	0x65, 0x73, 0x2e, 0x54, 0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0xca, 0x02, 0x19, 0x50, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x5c, 0x54,
	0x65, 0x6b, 0x74, 0x6f, 0x6e, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pipelines_tekton_v1alpha1_tekton_proto_rawDescOnce sync.Once
	file_pipelines_tekton_v1alpha1_tekton_proto_rawDescData = file_pipelines_tekton_v1alpha1_tekton_proto_rawDesc
)

func file_pipelines_tekton_v1alpha1_tekton_proto_rawDescGZIP() []byte {
	file_pipelines_tekton_v1alpha1_tekton_proto_rawDescOnce.Do(func() {
		file_pipelines_tekton_v1alpha1_tekton_proto_rawDescData = protoimpl.X.CompressGZIP(file_pipelines_tekton_v1alpha1_tekton_proto_rawDescData)
	})
	return file_pipelines_tekton_v1alpha1_tekton_proto_rawDescData
}

var file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_pipelines_tekton_v1alpha1_tekton_proto_goTypes = []interface{}{
	(*Params)(nil),     // 0: pipelines.tekton.v1alpha1.Params
	(*TaskParams)(nil), // 1: pipelines.tekton.v1alpha1.TaskParams
	(*Workspaces)(nil), // 2: pipelines.tekton.v1alpha1.Workspaces
	(*Task)(nil),       // 3: pipelines.tekton.v1alpha1.Task
	(*Pipeline)(nil),   // 4: pipelines.tekton.v1alpha1.Pipeline
	nil,                // 5: pipelines.tekton.v1alpha1.Pipeline.IntegrationEntry
	nil,                // 6: pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntry
	nil,                // 7: pipelines.tekton.v1alpha1.Pipeline.CommandsEntry
	nil,                // 8: pipelines.tekton.v1alpha1.Pipeline.SecretsEntry
	nil,                // 9: pipelines.tekton.v1alpha1.Pipeline.LabelsEntry
}
var file_pipelines_tekton_v1alpha1_tekton_proto_depIdxs = []int32{
	2,  // 0: pipelines.tekton.v1alpha1.Task.workspaces:type_name -> pipelines.tekton.v1alpha1.Workspaces
	1,  // 1: pipelines.tekton.v1alpha1.Task.task_params:type_name -> pipelines.tekton.v1alpha1.TaskParams
	0,  // 2: pipelines.tekton.v1alpha1.Pipeline.params:type_name -> pipelines.tekton.v1alpha1.Params
	3,  // 3: pipelines.tekton.v1alpha1.Pipeline.tasks:type_name -> pipelines.tekton.v1alpha1.Task
	5,  // 4: pipelines.tekton.v1alpha1.Pipeline.integration:type_name -> pipelines.tekton.v1alpha1.Pipeline.IntegrationEntry
	6,  // 5: pipelines.tekton.v1alpha1.Pipeline.environment_variables:type_name -> pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntry
	7,  // 6: pipelines.tekton.v1alpha1.Pipeline.commands:type_name -> pipelines.tekton.v1alpha1.Pipeline.CommandsEntry
	8,  // 7: pipelines.tekton.v1alpha1.Pipeline.secrets:type_name -> pipelines.tekton.v1alpha1.Pipeline.SecretsEntry
	9,  // 8: pipelines.tekton.v1alpha1.Pipeline.labels:type_name -> pipelines.tekton.v1alpha1.Pipeline.LabelsEntry
	2,  // 9: pipelines.tekton.v1alpha1.Pipeline.workspaces_main:type_name -> pipelines.tekton.v1alpha1.Workspaces
	10, // [10:10] is the sub-list for method output_type
	10, // [10:10] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_pipelines_tekton_v1alpha1_tekton_proto_init() }
func file_pipelines_tekton_v1alpha1_tekton_proto_init() {
	if File_pipelines_tekton_v1alpha1_tekton_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Params); i {
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
		file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TaskParams); i {
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
		file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Workspaces); i {
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
		file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Task); i {
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
		file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Pipeline); i {
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
			RawDescriptor: file_pipelines_tekton_v1alpha1_tekton_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_pipelines_tekton_v1alpha1_tekton_proto_goTypes,
		DependencyIndexes: file_pipelines_tekton_v1alpha1_tekton_proto_depIdxs,
		MessageInfos:      file_pipelines_tekton_v1alpha1_tekton_proto_msgTypes,
	}.Build()
	File_pipelines_tekton_v1alpha1_tekton_proto = out.File
	file_pipelines_tekton_v1alpha1_tekton_proto_rawDesc = nil
	file_pipelines_tekton_v1alpha1_tekton_proto_goTypes = nil
	file_pipelines_tekton_v1alpha1_tekton_proto_depIdxs = nil
}
