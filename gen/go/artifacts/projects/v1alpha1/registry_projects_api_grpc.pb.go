// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

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

// RegistryProjectsAPIServiceClient is the client API for RegistryProjectsAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RegistryProjectsAPIServiceClient interface {
	CreateProjectRegistry(ctx context.Context, in *CreateProjectRegistryRequest, opts ...grpc.CallOption) (*CreateProjectRegistryResponse, error)
	ListProjectsRegistry(ctx context.Context, in *ListProjectsRegistryRequest, opts ...grpc.CallOption) (*ListProjectsRegistryResponse, error)
	UpdateProjectRegistry(ctx context.Context, in *UpdateProjectRegistryRequest, opts ...grpc.CallOption) (*UpdateProjectRegistryResponse, error)
	DeleteProjectRegistry(ctx context.Context, in *DeleteProjectRegistryRequest, opts ...grpc.CallOption) (*DeleteProjectRegistryResponse, error)
}

type registryProjectsAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewRegistryProjectsAPIServiceClient(cc grpc.ClientConnInterface) RegistryProjectsAPIServiceClient {
	return &registryProjectsAPIServiceClient{cc}
}

func (c *registryProjectsAPIServiceClient) CreateProjectRegistry(ctx context.Context, in *CreateProjectRegistryRequest, opts ...grpc.CallOption) (*CreateProjectRegistryResponse, error) {
	out := new(CreateProjectRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/CreateProjectRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *registryProjectsAPIServiceClient) ListProjectsRegistry(ctx context.Context, in *ListProjectsRegistryRequest, opts ...grpc.CallOption) (*ListProjectsRegistryResponse, error) {
	out := new(ListProjectsRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/ListProjectsRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *registryProjectsAPIServiceClient) UpdateProjectRegistry(ctx context.Context, in *UpdateProjectRegistryRequest, opts ...grpc.CallOption) (*UpdateProjectRegistryResponse, error) {
	out := new(UpdateProjectRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/UpdateProjectRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *registryProjectsAPIServiceClient) DeleteProjectRegistry(ctx context.Context, in *DeleteProjectRegistryRequest, opts ...grpc.CallOption) (*DeleteProjectRegistryResponse, error) {
	out := new(DeleteProjectRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/DeleteProjectRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RegistryProjectsAPIServiceServer is the server API for RegistryProjectsAPIService service.
// All implementations should embed UnimplementedRegistryProjectsAPIServiceServer
// for forward compatibility
type RegistryProjectsAPIServiceServer interface {
	CreateProjectRegistry(context.Context, *CreateProjectRegistryRequest) (*CreateProjectRegistryResponse, error)
	ListProjectsRegistry(context.Context, *ListProjectsRegistryRequest) (*ListProjectsRegistryResponse, error)
	UpdateProjectRegistry(context.Context, *UpdateProjectRegistryRequest) (*UpdateProjectRegistryResponse, error)
	DeleteProjectRegistry(context.Context, *DeleteProjectRegistryRequest) (*DeleteProjectRegistryResponse, error)
}

// UnimplementedRegistryProjectsAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedRegistryProjectsAPIServiceServer struct {
}

func (UnimplementedRegistryProjectsAPIServiceServer) CreateProjectRegistry(context.Context, *CreateProjectRegistryRequest) (*CreateProjectRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProjectRegistry not implemented")
}
func (UnimplementedRegistryProjectsAPIServiceServer) ListProjectsRegistry(context.Context, *ListProjectsRegistryRequest) (*ListProjectsRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListProjectsRegistry not implemented")
}
func (UnimplementedRegistryProjectsAPIServiceServer) UpdateProjectRegistry(context.Context, *UpdateProjectRegistryRequest) (*UpdateProjectRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProjectRegistry not implemented")
}
func (UnimplementedRegistryProjectsAPIServiceServer) DeleteProjectRegistry(context.Context, *DeleteProjectRegistryRequest) (*DeleteProjectRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProjectRegistry not implemented")
}

// UnsafeRegistryProjectsAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RegistryProjectsAPIServiceServer will
// result in compilation errors.
type UnsafeRegistryProjectsAPIServiceServer interface {
	mustEmbedUnimplementedRegistryProjectsAPIServiceServer()
}

func RegisterRegistryProjectsAPIServiceServer(s grpc.ServiceRegistrar, srv RegistryProjectsAPIServiceServer) {
	s.RegisterService(&RegistryProjectsAPIService_ServiceDesc, srv)
}

func _RegistryProjectsAPIService_CreateProjectRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProjectRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryProjectsAPIServiceServer).CreateProjectRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/CreateProjectRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryProjectsAPIServiceServer).CreateProjectRegistry(ctx, req.(*CreateProjectRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RegistryProjectsAPIService_ListProjectsRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListProjectsRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryProjectsAPIServiceServer).ListProjectsRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/ListProjectsRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryProjectsAPIServiceServer).ListProjectsRegistry(ctx, req.(*ListProjectsRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RegistryProjectsAPIService_UpdateProjectRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProjectRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryProjectsAPIServiceServer).UpdateProjectRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/UpdateProjectRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryProjectsAPIServiceServer).UpdateProjectRegistry(ctx, req.(*UpdateProjectRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RegistryProjectsAPIService_DeleteProjectRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteProjectRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryProjectsAPIServiceServer).DeleteProjectRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.projects.v1alpha1.RegistryProjectsAPIService/DeleteProjectRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryProjectsAPIServiceServer).DeleteProjectRegistry(ctx, req.(*DeleteProjectRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RegistryProjectsAPIService_ServiceDesc is the grpc.ServiceDesc for RegistryProjectsAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RegistryProjectsAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "artifacts.projects.v1alpha1.RegistryProjectsAPIService",
	HandlerType: (*RegistryProjectsAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProjectRegistry",
			Handler:    _RegistryProjectsAPIService_CreateProjectRegistry_Handler,
		},
		{
			MethodName: "ListProjectsRegistry",
			Handler:    _RegistryProjectsAPIService_ListProjectsRegistry_Handler,
		},
		{
			MethodName: "UpdateProjectRegistry",
			Handler:    _RegistryProjectsAPIService_UpdateProjectRegistry_Handler,
		},
		{
			MethodName: "DeleteProjectRegistry",
			Handler:    _RegistryProjectsAPIService_DeleteProjectRegistry_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "artifacts/projects/v1alpha1/registry_projects_api.proto",
}