// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: artifacts/projects/v1alpha1/registry_projects_api.proto

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

type CreateProjectRegistryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectRegistry *ProjectsRegistry `protobuf:"bytes,1,opt,name=project_registry,json=projectRegistry,proto3" json:"project_registry,omitempty"`
}

func (x *CreateProjectRegistryRequest) Reset() {
	*x = CreateProjectRegistryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateProjectRegistryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateProjectRegistryRequest) ProtoMessage() {}

func (x *CreateProjectRegistryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateProjectRegistryRequest.ProtoReflect.Descriptor instead.
func (*CreateProjectRegistryRequest) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{0}
}

func (x *CreateProjectRegistryRequest) GetProjectRegistry() *ProjectsRegistry {
	if x != nil {
		return x.ProjectRegistry
	}
	return nil
}

type CreateProjectRegistryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectRegistry *ProjectsRegistry `protobuf:"bytes,1,opt,name=project_registry,json=projectRegistry,proto3" json:"project_registry,omitempty"`
	Status          string            `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *CreateProjectRegistryResponse) Reset() {
	*x = CreateProjectRegistryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateProjectRegistryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateProjectRegistryResponse) ProtoMessage() {}

func (x *CreateProjectRegistryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateProjectRegistryResponse.ProtoReflect.Descriptor instead.
func (*CreateProjectRegistryResponse) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{1}
}

func (x *CreateProjectRegistryResponse) GetProjectRegistry() *ProjectsRegistry {
	if x != nil {
		return x.ProjectRegistry
	}
	return nil
}

func (x *CreateProjectRegistryResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type UpdateProjectRegistryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectRegistry *ProjectsRegistry `protobuf:"bytes,1,opt,name=project_registry,json=projectRegistry,proto3" json:"project_registry,omitempty"`
}

func (x *UpdateProjectRegistryRequest) Reset() {
	*x = UpdateProjectRegistryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateProjectRegistryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateProjectRegistryRequest) ProtoMessage() {}

func (x *UpdateProjectRegistryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateProjectRegistryRequest.ProtoReflect.Descriptor instead.
func (*UpdateProjectRegistryRequest) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateProjectRegistryRequest) GetProjectRegistry() *ProjectsRegistry {
	if x != nil {
		return x.ProjectRegistry
	}
	return nil
}

type UpdateProjectRegistryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectRegistry *ProjectsRegistry `protobuf:"bytes,1,opt,name=project_registry,json=projectRegistry,proto3" json:"project_registry,omitempty"`
	Status          string            `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *UpdateProjectRegistryResponse) Reset() {
	*x = UpdateProjectRegistryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateProjectRegistryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateProjectRegistryResponse) ProtoMessage() {}

func (x *UpdateProjectRegistryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateProjectRegistryResponse.ProtoReflect.Descriptor instead.
func (*UpdateProjectRegistryResponse) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{3}
}

func (x *UpdateProjectRegistryResponse) GetProjectRegistry() *ProjectsRegistry {
	if x != nil {
		return x.ProjectRegistry
	}
	return nil
}

func (x *UpdateProjectRegistryResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type ListProjectsRegistryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OrganizationId uint32 `protobuf:"varint,1,opt,name=organization_id,json=organizationId,proto3" json:"organization_id,omitempty"`
	ProjectId      uint32 `protobuf:"varint,2,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
	Query          string `protobuf:"bytes,3,opt,name=query,proto3" json:"query,omitempty"`
	Page           uint32 `protobuf:"varint,4,opt,name=page,proto3" json:"page,omitempty"`
	Size           uint32 `protobuf:"varint,5,opt,name=size,proto3" json:"size,omitempty"`
	Sort           string `protobuf:"bytes,6,opt,name=sort,proto3" json:"sort,omitempty"`
	Public         bool   `protobuf:"varint,7,opt,name=public,proto3" json:"public,omitempty"`
	WithDetail     bool   `protobuf:"varint,8,opt,name=with_detail,json=withDetail,proto3" json:"with_detail,omitempty"`
}

func (x *ListProjectsRegistryRequest) Reset() {
	*x = ListProjectsRegistryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListProjectsRegistryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListProjectsRegistryRequest) ProtoMessage() {}

func (x *ListProjectsRegistryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListProjectsRegistryRequest.ProtoReflect.Descriptor instead.
func (*ListProjectsRegistryRequest) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{4}
}

func (x *ListProjectsRegistryRequest) GetOrganizationId() uint32 {
	if x != nil {
		return x.OrganizationId
	}
	return 0
}

func (x *ListProjectsRegistryRequest) GetProjectId() uint32 {
	if x != nil {
		return x.ProjectId
	}
	return 0
}

func (x *ListProjectsRegistryRequest) GetQuery() string {
	if x != nil {
		return x.Query
	}
	return ""
}

func (x *ListProjectsRegistryRequest) GetPage() uint32 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *ListProjectsRegistryRequest) GetSize() uint32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *ListProjectsRegistryRequest) GetSort() string {
	if x != nil {
		return x.Sort
	}
	return ""
}

func (x *ListProjectsRegistryRequest) GetPublic() bool {
	if x != nil {
		return x.Public
	}
	return false
}

func (x *ListProjectsRegistryRequest) GetWithDetail() bool {
	if x != nil {
		return x.WithDetail
	}
	return false
}

type ListProjectsRegistryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectRegistry []*ProjectsRegistry `protobuf:"bytes,1,rep,name=project_registry,json=projectRegistry,proto3" json:"project_registry,omitempty"`
	Status          string              `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *ListProjectsRegistryResponse) Reset() {
	*x = ListProjectsRegistryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListProjectsRegistryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListProjectsRegistryResponse) ProtoMessage() {}

func (x *ListProjectsRegistryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListProjectsRegistryResponse.ProtoReflect.Descriptor instead.
func (*ListProjectsRegistryResponse) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{5}
}

func (x *ListProjectsRegistryResponse) GetProjectRegistry() []*ProjectsRegistry {
	if x != nil {
		return x.ProjectRegistry
	}
	return nil
}

func (x *ListProjectsRegistryResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type DeleteProjectRegistryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProjectRegistryId string `protobuf:"bytes,1,opt,name=project_registry_id,json=projectRegistryId,proto3" json:"project_registry_id,omitempty"`
}

func (x *DeleteProjectRegistryRequest) Reset() {
	*x = DeleteProjectRegistryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteProjectRegistryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteProjectRegistryRequest) ProtoMessage() {}

func (x *DeleteProjectRegistryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteProjectRegistryRequest.ProtoReflect.Descriptor instead.
func (*DeleteProjectRegistryRequest) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{6}
}

func (x *DeleteProjectRegistryRequest) GetProjectRegistryId() string {
	if x != nil {
		return x.ProjectRegistryId
	}
	return ""
}

type DeleteProjectRegistryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status string `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *DeleteProjectRegistryResponse) Reset() {
	*x = DeleteProjectRegistryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteProjectRegistryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteProjectRegistryResponse) ProtoMessage() {}

func (x *DeleteProjectRegistryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteProjectRegistryResponse.ProtoReflect.Descriptor instead.
func (*DeleteProjectRegistryResponse) Descriptor() ([]byte, []int) {
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP(), []int{7}
}

func (x *DeleteProjectRegistryResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

var File_artifacts_projects_v1alpha1_registry_projects_api_proto protoreflect.FileDescriptor

var file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDesc = []byte{
	0x0a, 0x37, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x72, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x5f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x5f,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x61, 0x72, 0x74, 0x69, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x33, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74,
	0x73, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x5f, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x78, 0x0a, 0x1c, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x58, 0x0a, 0x10, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x72, 0x79, 0x52, 0x0f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x72, 0x79, 0x22, 0x91, 0x01, 0x0a, 0x1d, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x58, 0x0a, 0x10, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x2d, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79,
	0x52, 0x0f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72,
	0x79, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x78, 0x0a, 0x1c, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x58, 0x0a, 0x10, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x52, 0x0f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x22, 0x91, 0x01, 0x0a, 0x1d, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x58, 0x0a, 0x10, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x2d, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x0f,
	0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12,
	0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0xf0, 0x01, 0x0a, 0x1b, 0x4c, 0x69, 0x73, 0x74,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x27, 0x0a, 0x0f, 0x6f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x0e, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64,
	0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x64, 0x12,
	0x14, 0x0a, 0x05, 0x71, 0x75, 0x65, 0x72, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x71, 0x75, 0x65, 0x72, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x73, 0x6f, 0x72, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6f, 0x72,
	0x74, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x18, 0x07, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x06, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x12, 0x1f, 0x0a, 0x0b, 0x77, 0x69, 0x74,
	0x68, 0x5f, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0a,
	0x77, 0x69, 0x74, 0x68, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x22, 0x90, 0x01, 0x0a, 0x1c, 0x4c,
	0x69, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x58, 0x0a, 0x10, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x72, 0x79, 0x52, 0x0f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x72, 0x79, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x4e, 0x0a,
	0x1c, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2e, 0x0a,
	0x13, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72,
	0x79, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x49, 0x64, 0x22, 0x37, 0x0a,
	0x1d, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x32, 0xdd, 0x04, 0x0a, 0x1a, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x41, 0x50, 0x49, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x8e, 0x01, 0x0a, 0x15, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12,
	0x39, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x3a, 0x2e, 0x61, 0x72, 0x74,
	0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x8b, 0x01, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12,
	0x38, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x39, 0x2e, 0x61, 0x72, 0x74, 0x69,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x8e, 0x01, 0x0a, 0x15, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12, 0x39,
	0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x3a, 0x2e, 0x61, 0x72, 0x74, 0x69,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x8e, 0x01, 0x0a, 0x15, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x12,
	0x39, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x3a, 0x2e, 0x61, 0x72, 0x74,
	0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0xc3, 0x01, 0x0a, 0x25, 0x69, 0x6f, 0x2e, 0x63, 0x75,
	0x65, 0x6d, 0x62, 0x79, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x42, 0x18, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x79, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x41, 0x50, 0x49, 0x50, 0x01, 0x5a, 0x3c, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x75, 0x65, 0x6d, 0x62, 0x79, 0x2f,
	0x63, 0x63, 0x70, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x61,
	0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x73, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x50, 0x50, 0x58,
	0xaa, 0x02, 0x1b, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x73, 0x2e, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02,
	0x1b, 0x41, 0x72, 0x74, 0x69, 0x66, 0x61, 0x63, 0x74, 0x73, 0x5c, 0x50, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x73, 0x5c, 0x56, 0x31, 0x41, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescOnce sync.Once
	file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescData = file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDesc
)

func file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescGZIP() []byte {
	file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescOnce.Do(func() {
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescData)
	})
	return file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDescData
}

var file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_artifacts_projects_v1alpha1_registry_projects_api_proto_goTypes = []interface{}{
	(*CreateProjectRegistryRequest)(nil),  // 0: artifacts.projects.v1alpha1.CreateProjectRegistryRequest
	(*CreateProjectRegistryResponse)(nil), // 1: artifacts.projects.v1alpha1.CreateProjectRegistryResponse
	(*UpdateProjectRegistryRequest)(nil),  // 2: artifacts.projects.v1alpha1.UpdateProjectRegistryRequest
	(*UpdateProjectRegistryResponse)(nil), // 3: artifacts.projects.v1alpha1.UpdateProjectRegistryResponse
	(*ListProjectsRegistryRequest)(nil),   // 4: artifacts.projects.v1alpha1.ListProjectsRegistryRequest
	(*ListProjectsRegistryResponse)(nil),  // 5: artifacts.projects.v1alpha1.ListProjectsRegistryResponse
	(*DeleteProjectRegistryRequest)(nil),  // 6: artifacts.projects.v1alpha1.DeleteProjectRegistryRequest
	(*DeleteProjectRegistryResponse)(nil), // 7: artifacts.projects.v1alpha1.DeleteProjectRegistryResponse
	(*ProjectsRegistry)(nil),              // 8: artifacts.projects.v1alpha1.ProjectsRegistry
}
var file_artifacts_projects_v1alpha1_registry_projects_api_proto_depIdxs = []int32{
	8, // 0: artifacts.projects.v1alpha1.CreateProjectRegistryRequest.project_registry:type_name -> artifacts.projects.v1alpha1.ProjectsRegistry
	8, // 1: artifacts.projects.v1alpha1.CreateProjectRegistryResponse.project_registry:type_name -> artifacts.projects.v1alpha1.ProjectsRegistry
	8, // 2: artifacts.projects.v1alpha1.UpdateProjectRegistryRequest.project_registry:type_name -> artifacts.projects.v1alpha1.ProjectsRegistry
	8, // 3: artifacts.projects.v1alpha1.UpdateProjectRegistryResponse.project_registry:type_name -> artifacts.projects.v1alpha1.ProjectsRegistry
	8, // 4: artifacts.projects.v1alpha1.ListProjectsRegistryResponse.project_registry:type_name -> artifacts.projects.v1alpha1.ProjectsRegistry
	0, // 5: artifacts.projects.v1alpha1.RegistryProjectsAPIService.CreateProjectRegistry:input_type -> artifacts.projects.v1alpha1.CreateProjectRegistryRequest
	4, // 6: artifacts.projects.v1alpha1.RegistryProjectsAPIService.ListProjectsRegistry:input_type -> artifacts.projects.v1alpha1.ListProjectsRegistryRequest
	2, // 7: artifacts.projects.v1alpha1.RegistryProjectsAPIService.UpdateProjectRegistry:input_type -> artifacts.projects.v1alpha1.UpdateProjectRegistryRequest
	6, // 8: artifacts.projects.v1alpha1.RegistryProjectsAPIService.DeleteProjectRegistry:input_type -> artifacts.projects.v1alpha1.DeleteProjectRegistryRequest
	1, // 9: artifacts.projects.v1alpha1.RegistryProjectsAPIService.CreateProjectRegistry:output_type -> artifacts.projects.v1alpha1.CreateProjectRegistryResponse
	5, // 10: artifacts.projects.v1alpha1.RegistryProjectsAPIService.ListProjectsRegistry:output_type -> artifacts.projects.v1alpha1.ListProjectsRegistryResponse
	3, // 11: artifacts.projects.v1alpha1.RegistryProjectsAPIService.UpdateProjectRegistry:output_type -> artifacts.projects.v1alpha1.UpdateProjectRegistryResponse
	7, // 12: artifacts.projects.v1alpha1.RegistryProjectsAPIService.DeleteProjectRegistry:output_type -> artifacts.projects.v1alpha1.DeleteProjectRegistryResponse
	9, // [9:13] is the sub-list for method output_type
	5, // [5:9] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_artifacts_projects_v1alpha1_registry_projects_api_proto_init() }
func file_artifacts_projects_v1alpha1_registry_projects_api_proto_init() {
	if File_artifacts_projects_v1alpha1_registry_projects_api_proto != nil {
		return
	}
	file_artifacts_projects_v1alpha1_registry_projects_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateProjectRegistryRequest); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateProjectRegistryResponse); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateProjectRegistryRequest); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateProjectRegistryResponse); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListProjectsRegistryRequest); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListProjectsRegistryResponse); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteProjectRegistryRequest); i {
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
		file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteProjectRegistryResponse); i {
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
			RawDescriptor: file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_artifacts_projects_v1alpha1_registry_projects_api_proto_goTypes,
		DependencyIndexes: file_artifacts_projects_v1alpha1_registry_projects_api_proto_depIdxs,
		MessageInfos:      file_artifacts_projects_v1alpha1_registry_projects_api_proto_msgTypes,
	}.Build()
	File_artifacts_projects_v1alpha1_registry_projects_api_proto = out.File
	file_artifacts_projects_v1alpha1_registry_projects_api_proto_rawDesc = nil
	file_artifacts_projects_v1alpha1_registry_projects_api_proto_goTypes = nil
	file_artifacts_projects_v1alpha1_registry_projects_api_proto_depIdxs = nil
}
