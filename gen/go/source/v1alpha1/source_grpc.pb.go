// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: source/v1alpha1/source.proto

package v1alpha1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// SourceServiceClient is the client API for SourceService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SourceServiceClient interface {
	//PROVIDERS
	CreateProvider(ctx context.Context, in *CreateProviderRequest, opts ...grpc.CallOption) (*CreateProviderResponse, error)
	ListProviders(ctx context.Context, in *ListProvidersRequest, opts ...grpc.CallOption) (*ListProvidersResponse, error)
	GetProvider(ctx context.Context, in *GetProviderRequest, opts ...grpc.CallOption) (*GetProviderResponse, error)
	GetOneProviderByName(ctx context.Context, in *GetOneProviderByNameRequest, opts ...grpc.CallOption) (*GetOneProviderByNameResponse, error)
	UpdateProvider(ctx context.Context, in *UpdateProviderRequest, opts ...grpc.CallOption) (*UpdateProviderResponse, error)
	DeleteProvider(ctx context.Context, in *DeleteProviderRequest, opts ...grpc.CallOption) (*DeleteProviderResponse, error)
	AccountsProviders(ctx context.Context, in *AccountsProvidersRequest, opts ...grpc.CallOption) (*AccountsProvidersResponse, error)
	//INTEGRATIONS
	CreateIntegration(ctx context.Context, in *CreateIntegrationRequest, opts ...grpc.CallOption) (*CreateIntegrationResponse, error)
	ListIntegrations(ctx context.Context, in *ListIntegrationsRequest, opts ...grpc.CallOption) (*ListIntegrationsResponse, error)
	GetIntegration(ctx context.Context, in *GetIntegrationRequest, opts ...grpc.CallOption) (*GetIntegrationResponse, error)
	UpdateIntegration(ctx context.Context, in *UpdateIntegrationRequest, opts ...grpc.CallOption) (*UpdateIntegrationResponse, error)
	DeleteIntegration(ctx context.Context, in *DeleteIntegrationRequest, opts ...grpc.CallOption) (*DeleteIntegrationResponse, error)
	DeleteIntegrationsByOrganization(ctx context.Context, in *DeleteIntegrationsByOrganizationRequest, opts ...grpc.CallOption) (*DeleteIntegrationsByOrganizationResponse, error)
	//List Repositories providers by integrations
	ListRepositoriesProvider(ctx context.Context, in *ListRepositoriesProviderRequest, opts ...grpc.CallOption) (*ListRepositoriesProviderResponse, error)
	GetRepositoryProvider(ctx context.Context, in *GetRepositoryProviderRequest, opts ...grpc.CallOption) (*GetRepositoryProviderResponse, error)
	//REPOSITORIES
	CreateRepository(ctx context.Context, in *CreateRepositoryRequest, opts ...grpc.CallOption) (*CreateRepositoryResponse, error)
	ListRepositories(ctx context.Context, in *ListRepositoriesRequest, opts ...grpc.CallOption) (*ListRepositoriesResponse, error)
	GetRepository(ctx context.Context, in *GetRepositoryRequest, opts ...grpc.CallOption) (*GetRepositoryResponse, error)
	DeleteRepository(ctx context.Context, in *DeleteRepositoryRequest, opts ...grpc.CallOption) (*DeleteRepositoryResponse, error)
	UpdateRepository(ctx context.Context, in *UpdateRepositoryRequest, opts ...grpc.CallOption) (*UpdateRepositoryResponse, error)
}

type sourceServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSourceServiceClient(cc grpc.ClientConnInterface) SourceServiceClient {
	return &sourceServiceClient{cc}
}

func (c *sourceServiceClient) CreateProvider(ctx context.Context, in *CreateProviderRequest, opts ...grpc.CallOption) (*CreateProviderResponse, error) {
	out := new(CreateProviderResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/CreateProvider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) ListProviders(ctx context.Context, in *ListProvidersRequest, opts ...grpc.CallOption) (*ListProvidersResponse, error) {
	out := new(ListProvidersResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/ListProviders", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) GetProvider(ctx context.Context, in *GetProviderRequest, opts ...grpc.CallOption) (*GetProviderResponse, error) {
	out := new(GetProviderResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/GetProvider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) GetOneProviderByName(ctx context.Context, in *GetOneProviderByNameRequest, opts ...grpc.CallOption) (*GetOneProviderByNameResponse, error) {
	out := new(GetOneProviderByNameResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/GetOneProviderByName", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) UpdateProvider(ctx context.Context, in *UpdateProviderRequest, opts ...grpc.CallOption) (*UpdateProviderResponse, error) {
	out := new(UpdateProviderResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/UpdateProvider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) DeleteProvider(ctx context.Context, in *DeleteProviderRequest, opts ...grpc.CallOption) (*DeleteProviderResponse, error) {
	out := new(DeleteProviderResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/DeleteProvider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) AccountsProviders(ctx context.Context, in *AccountsProvidersRequest, opts ...grpc.CallOption) (*AccountsProvidersResponse, error) {
	out := new(AccountsProvidersResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/AccountsProviders", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) CreateIntegration(ctx context.Context, in *CreateIntegrationRequest, opts ...grpc.CallOption) (*CreateIntegrationResponse, error) {
	out := new(CreateIntegrationResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/CreateIntegration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) ListIntegrations(ctx context.Context, in *ListIntegrationsRequest, opts ...grpc.CallOption) (*ListIntegrationsResponse, error) {
	out := new(ListIntegrationsResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/ListIntegrations", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) GetIntegration(ctx context.Context, in *GetIntegrationRequest, opts ...grpc.CallOption) (*GetIntegrationResponse, error) {
	out := new(GetIntegrationResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/GetIntegration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) UpdateIntegration(ctx context.Context, in *UpdateIntegrationRequest, opts ...grpc.CallOption) (*UpdateIntegrationResponse, error) {
	out := new(UpdateIntegrationResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/UpdateIntegration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) DeleteIntegration(ctx context.Context, in *DeleteIntegrationRequest, opts ...grpc.CallOption) (*DeleteIntegrationResponse, error) {
	out := new(DeleteIntegrationResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/DeleteIntegration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) DeleteIntegrationsByOrganization(ctx context.Context, in *DeleteIntegrationsByOrganizationRequest, opts ...grpc.CallOption) (*DeleteIntegrationsByOrganizationResponse, error) {
	out := new(DeleteIntegrationsByOrganizationResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/DeleteIntegrationsByOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) ListRepositoriesProvider(ctx context.Context, in *ListRepositoriesProviderRequest, opts ...grpc.CallOption) (*ListRepositoriesProviderResponse, error) {
	out := new(ListRepositoriesProviderResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/ListRepositoriesProvider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) GetRepositoryProvider(ctx context.Context, in *GetRepositoryProviderRequest, opts ...grpc.CallOption) (*GetRepositoryProviderResponse, error) {
	out := new(GetRepositoryProviderResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/GetRepositoryProvider", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) CreateRepository(ctx context.Context, in *CreateRepositoryRequest, opts ...grpc.CallOption) (*CreateRepositoryResponse, error) {
	out := new(CreateRepositoryResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/CreateRepository", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) ListRepositories(ctx context.Context, in *ListRepositoriesRequest, opts ...grpc.CallOption) (*ListRepositoriesResponse, error) {
	out := new(ListRepositoriesResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/ListRepositories", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) GetRepository(ctx context.Context, in *GetRepositoryRequest, opts ...grpc.CallOption) (*GetRepositoryResponse, error) {
	out := new(GetRepositoryResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/GetRepository", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) DeleteRepository(ctx context.Context, in *DeleteRepositoryRequest, opts ...grpc.CallOption) (*DeleteRepositoryResponse, error) {
	out := new(DeleteRepositoryResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/DeleteRepository", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sourceServiceClient) UpdateRepository(ctx context.Context, in *UpdateRepositoryRequest, opts ...grpc.CallOption) (*UpdateRepositoryResponse, error) {
	out := new(UpdateRepositoryResponse)
	err := c.cc.Invoke(ctx, "/source.v1alpha1.SourceService/UpdateRepository", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SourceServiceServer is the server API for SourceService service.
// All implementations should embed UnimplementedSourceServiceServer
// for forward compatibility
type SourceServiceServer interface {
	//PROVIDERS
	CreateProvider(context.Context, *CreateProviderRequest) (*CreateProviderResponse, error)
	ListProviders(context.Context, *ListProvidersRequest) (*ListProvidersResponse, error)
	GetProvider(context.Context, *GetProviderRequest) (*GetProviderResponse, error)
	GetOneProviderByName(context.Context, *GetOneProviderByNameRequest) (*GetOneProviderByNameResponse, error)
	UpdateProvider(context.Context, *UpdateProviderRequest) (*UpdateProviderResponse, error)
	DeleteProvider(context.Context, *DeleteProviderRequest) (*DeleteProviderResponse, error)
	AccountsProviders(context.Context, *AccountsProvidersRequest) (*AccountsProvidersResponse, error)
	//INTEGRATIONS
	CreateIntegration(context.Context, *CreateIntegrationRequest) (*CreateIntegrationResponse, error)
	ListIntegrations(context.Context, *ListIntegrationsRequest) (*ListIntegrationsResponse, error)
	GetIntegration(context.Context, *GetIntegrationRequest) (*GetIntegrationResponse, error)
	UpdateIntegration(context.Context, *UpdateIntegrationRequest) (*UpdateIntegrationResponse, error)
	DeleteIntegration(context.Context, *DeleteIntegrationRequest) (*DeleteIntegrationResponse, error)
	DeleteIntegrationsByOrganization(context.Context, *DeleteIntegrationsByOrganizationRequest) (*DeleteIntegrationsByOrganizationResponse, error)
	//List Repositories providers by integrations
	ListRepositoriesProvider(context.Context, *ListRepositoriesProviderRequest) (*ListRepositoriesProviderResponse, error)
	GetRepositoryProvider(context.Context, *GetRepositoryProviderRequest) (*GetRepositoryProviderResponse, error)
	//REPOSITORIES
	CreateRepository(context.Context, *CreateRepositoryRequest) (*CreateRepositoryResponse, error)
	ListRepositories(context.Context, *ListRepositoriesRequest) (*ListRepositoriesResponse, error)
	GetRepository(context.Context, *GetRepositoryRequest) (*GetRepositoryResponse, error)
	DeleteRepository(context.Context, *DeleteRepositoryRequest) (*DeleteRepositoryResponse, error)
	UpdateRepository(context.Context, *UpdateRepositoryRequest) (*UpdateRepositoryResponse, error)
}

// UnimplementedSourceServiceServer should be embedded to have forward compatible implementations.
type UnimplementedSourceServiceServer struct {
}

func (UnimplementedSourceServiceServer) CreateProvider(context.Context, *CreateProviderRequest) (*CreateProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProvider not implemented")
}
func (UnimplementedSourceServiceServer) ListProviders(context.Context, *ListProvidersRequest) (*ListProvidersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListProviders not implemented")
}
func (UnimplementedSourceServiceServer) GetProvider(context.Context, *GetProviderRequest) (*GetProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProvider not implemented")
}
func (UnimplementedSourceServiceServer) GetOneProviderByName(context.Context, *GetOneProviderByNameRequest) (*GetOneProviderByNameResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneProviderByName not implemented")
}
func (UnimplementedSourceServiceServer) UpdateProvider(context.Context, *UpdateProviderRequest) (*UpdateProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProvider not implemented")
}
func (UnimplementedSourceServiceServer) DeleteProvider(context.Context, *DeleteProviderRequest) (*DeleteProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProvider not implemented")
}
func (UnimplementedSourceServiceServer) AccountsProviders(context.Context, *AccountsProvidersRequest) (*AccountsProvidersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AccountsProviders not implemented")
}
func (UnimplementedSourceServiceServer) CreateIntegration(context.Context, *CreateIntegrationRequest) (*CreateIntegrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateIntegration not implemented")
}
func (UnimplementedSourceServiceServer) ListIntegrations(context.Context, *ListIntegrationsRequest) (*ListIntegrationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListIntegrations not implemented")
}
func (UnimplementedSourceServiceServer) GetIntegration(context.Context, *GetIntegrationRequest) (*GetIntegrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetIntegration not implemented")
}
func (UnimplementedSourceServiceServer) UpdateIntegration(context.Context, *UpdateIntegrationRequest) (*UpdateIntegrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateIntegration not implemented")
}
func (UnimplementedSourceServiceServer) DeleteIntegration(context.Context, *DeleteIntegrationRequest) (*DeleteIntegrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteIntegration not implemented")
}
func (UnimplementedSourceServiceServer) DeleteIntegrationsByOrganization(context.Context, *DeleteIntegrationsByOrganizationRequest) (*DeleteIntegrationsByOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteIntegrationsByOrganization not implemented")
}
func (UnimplementedSourceServiceServer) ListRepositoriesProvider(context.Context, *ListRepositoriesProviderRequest) (*ListRepositoriesProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListRepositoriesProvider not implemented")
}
func (UnimplementedSourceServiceServer) GetRepositoryProvider(context.Context, *GetRepositoryProviderRequest) (*GetRepositoryProviderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRepositoryProvider not implemented")
}
func (UnimplementedSourceServiceServer) CreateRepository(context.Context, *CreateRepositoryRequest) (*CreateRepositoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateRepository not implemented")
}
func (UnimplementedSourceServiceServer) ListRepositories(context.Context, *ListRepositoriesRequest) (*ListRepositoriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListRepositories not implemented")
}
func (UnimplementedSourceServiceServer) GetRepository(context.Context, *GetRepositoryRequest) (*GetRepositoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRepository not implemented")
}
func (UnimplementedSourceServiceServer) DeleteRepository(context.Context, *DeleteRepositoryRequest) (*DeleteRepositoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteRepository not implemented")
}
func (UnimplementedSourceServiceServer) UpdateRepository(context.Context, *UpdateRepositoryRequest) (*UpdateRepositoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateRepository not implemented")
}

// UnsafeSourceServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SourceServiceServer will
// result in compilation errors.
type UnsafeSourceServiceServer interface {
	mustEmbedUnimplementedSourceServiceServer()
}

func RegisterSourceServiceServer(s grpc.ServiceRegistrar, srv SourceServiceServer) {
	s.RegisterService(&SourceService_ServiceDesc, srv)
}

func _SourceService_CreateProvider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).CreateProvider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/CreateProvider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).CreateProvider(ctx, req.(*CreateProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_ListProviders_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListProvidersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).ListProviders(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/ListProviders",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).ListProviders(ctx, req.(*ListProvidersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_GetProvider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).GetProvider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/GetProvider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).GetProvider(ctx, req.(*GetProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_GetOneProviderByName_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneProviderByNameRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).GetOneProviderByName(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/GetOneProviderByName",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).GetOneProviderByName(ctx, req.(*GetOneProviderByNameRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_UpdateProvider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).UpdateProvider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/UpdateProvider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).UpdateProvider(ctx, req.(*UpdateProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_DeleteProvider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).DeleteProvider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/DeleteProvider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).DeleteProvider(ctx, req.(*DeleteProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_AccountsProviders_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AccountsProvidersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).AccountsProviders(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/AccountsProviders",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).AccountsProviders(ctx, req.(*AccountsProvidersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_CreateIntegration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).CreateIntegration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/CreateIntegration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).CreateIntegration(ctx, req.(*CreateIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_ListIntegrations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListIntegrationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).ListIntegrations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/ListIntegrations",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).ListIntegrations(ctx, req.(*ListIntegrationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_GetIntegration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).GetIntegration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/GetIntegration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).GetIntegration(ctx, req.(*GetIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_UpdateIntegration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).UpdateIntegration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/UpdateIntegration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).UpdateIntegration(ctx, req.(*UpdateIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_DeleteIntegration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).DeleteIntegration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/DeleteIntegration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).DeleteIntegration(ctx, req.(*DeleteIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_DeleteIntegrationsByOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteIntegrationsByOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).DeleteIntegrationsByOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/DeleteIntegrationsByOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).DeleteIntegrationsByOrganization(ctx, req.(*DeleteIntegrationsByOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_ListRepositoriesProvider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRepositoriesProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).ListRepositoriesProvider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/ListRepositoriesProvider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).ListRepositoriesProvider(ctx, req.(*ListRepositoriesProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_GetRepositoryProvider_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRepositoryProviderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).GetRepositoryProvider(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/GetRepositoryProvider",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).GetRepositoryProvider(ctx, req.(*GetRepositoryProviderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_CreateRepository_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRepositoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).CreateRepository(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/CreateRepository",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).CreateRepository(ctx, req.(*CreateRepositoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_ListRepositories_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRepositoriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).ListRepositories(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/ListRepositories",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).ListRepositories(ctx, req.(*ListRepositoriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_GetRepository_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRepositoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).GetRepository(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/GetRepository",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).GetRepository(ctx, req.(*GetRepositoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_DeleteRepository_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRepositoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).DeleteRepository(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/DeleteRepository",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).DeleteRepository(ctx, req.(*DeleteRepositoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SourceService_UpdateRepository_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateRepositoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SourceServiceServer).UpdateRepository(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/source.v1alpha1.SourceService/UpdateRepository",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SourceServiceServer).UpdateRepository(ctx, req.(*UpdateRepositoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// SourceService_ServiceDesc is the grpc.ServiceDesc for SourceService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SourceService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "source.v1alpha1.SourceService",
	HandlerType: (*SourceServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProvider",
			Handler:    _SourceService_CreateProvider_Handler,
		},
		{
			MethodName: "ListProviders",
			Handler:    _SourceService_ListProviders_Handler,
		},
		{
			MethodName: "GetProvider",
			Handler:    _SourceService_GetProvider_Handler,
		},
		{
			MethodName: "GetOneProviderByName",
			Handler:    _SourceService_GetOneProviderByName_Handler,
		},
		{
			MethodName: "UpdateProvider",
			Handler:    _SourceService_UpdateProvider_Handler,
		},
		{
			MethodName: "DeleteProvider",
			Handler:    _SourceService_DeleteProvider_Handler,
		},
		{
			MethodName: "AccountsProviders",
			Handler:    _SourceService_AccountsProviders_Handler,
		},
		{
			MethodName: "CreateIntegration",
			Handler:    _SourceService_CreateIntegration_Handler,
		},
		{
			MethodName: "ListIntegrations",
			Handler:    _SourceService_ListIntegrations_Handler,
		},
		{
			MethodName: "GetIntegration",
			Handler:    _SourceService_GetIntegration_Handler,
		},
		{
			MethodName: "UpdateIntegration",
			Handler:    _SourceService_UpdateIntegration_Handler,
		},
		{
			MethodName: "DeleteIntegration",
			Handler:    _SourceService_DeleteIntegration_Handler,
		},
		{
			MethodName: "DeleteIntegrationsByOrganization",
			Handler:    _SourceService_DeleteIntegrationsByOrganization_Handler,
		},
		{
			MethodName: "ListRepositoriesProvider",
			Handler:    _SourceService_ListRepositoriesProvider_Handler,
		},
		{
			MethodName: "GetRepositoryProvider",
			Handler:    _SourceService_GetRepositoryProvider_Handler,
		},
		{
			MethodName: "CreateRepository",
			Handler:    _SourceService_CreateRepository_Handler,
		},
		{
			MethodName: "ListRepositories",
			Handler:    _SourceService_ListRepositories_Handler,
		},
		{
			MethodName: "GetRepository",
			Handler:    _SourceService_GetRepository_Handler,
		},
		{
			MethodName: "DeleteRepository",
			Handler:    _SourceService_DeleteRepository_Handler,
		},
		{
			MethodName: "UpdateRepository",
			Handler:    _SourceService_UpdateRepository_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "source/v1alpha1/source.proto",
}
