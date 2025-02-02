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

// EnvironmentAPIServiceClient is the client API for EnvironmentAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EnvironmentAPIServiceClient interface {
	CreateEnvironment(ctx context.Context, in *CreateEnvironmentRequest, opts ...grpc.CallOption) (*CreateEnvironmentResponse, error)
	GetOneEnvironment(ctx context.Context, in *GetOneEnvironmentRequest, opts ...grpc.CallOption) (*GetOneEnvironmentResponse, error)
	UpdateEnvironment(ctx context.Context, in *UpdateEnvironmentRequest, opts ...grpc.CallOption) (*UpdateEnvironmentResponse, error)
	ListEnvironment(ctx context.Context, in *ListEnvironmentRequest, opts ...grpc.CallOption) (*ListEnvironmentResponse, error)
	DeleteEnvironment(ctx context.Context, in *DeleteEnvironmentRequest, opts ...grpc.CallOption) (*DeleteEnvironmentResponse, error)
	GetByNameEnvironment(ctx context.Context, in *GetByNameEnvironmentRequest, opts ...grpc.CallOption) (*GetByNameEnvironmentResponse, error)
	CreateVclusterOrganization(ctx context.Context, in *CreateVclusterOrganizationRequest, opts ...grpc.CallOption) (*CreateVclusterOrganizationResponse, error)
	ListAllEnvironment(ctx context.Context, in *ListAllEnvironmentRequest, opts ...grpc.CallOption) (*ListAllEnvironmentResponse, error)
	GetEnvironmentByName(ctx context.Context, in *GetEnvironmentByNameRequest, opts ...grpc.CallOption) (*GetEnvironmentByNameResponse, error)
}

type environmentAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEnvironmentAPIServiceClient(cc grpc.ClientConnInterface) EnvironmentAPIServiceClient {
	return &environmentAPIServiceClient{cc}
}

func (c *environmentAPIServiceClient) CreateEnvironment(ctx context.Context, in *CreateEnvironmentRequest, opts ...grpc.CallOption) (*CreateEnvironmentResponse, error) {
	out := new(CreateEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) GetOneEnvironment(ctx context.Context, in *GetOneEnvironmentRequest, opts ...grpc.CallOption) (*GetOneEnvironmentResponse, error) {
	out := new(GetOneEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetOneEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) UpdateEnvironment(ctx context.Context, in *UpdateEnvironmentRequest, opts ...grpc.CallOption) (*UpdateEnvironmentResponse, error) {
	out := new(UpdateEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/UpdateEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) ListEnvironment(ctx context.Context, in *ListEnvironmentRequest, opts ...grpc.CallOption) (*ListEnvironmentResponse, error) {
	out := new(ListEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/ListEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) DeleteEnvironment(ctx context.Context, in *DeleteEnvironmentRequest, opts ...grpc.CallOption) (*DeleteEnvironmentResponse, error) {
	out := new(DeleteEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/DeleteEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) GetByNameEnvironment(ctx context.Context, in *GetByNameEnvironmentRequest, opts ...grpc.CallOption) (*GetByNameEnvironmentResponse, error) {
	out := new(GetByNameEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetByNameEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) CreateVclusterOrganization(ctx context.Context, in *CreateVclusterOrganizationRequest, opts ...grpc.CallOption) (*CreateVclusterOrganizationResponse, error) {
	out := new(CreateVclusterOrganizationResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateVclusterOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) ListAllEnvironment(ctx context.Context, in *ListAllEnvironmentRequest, opts ...grpc.CallOption) (*ListAllEnvironmentResponse, error) {
	out := new(ListAllEnvironmentResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/ListAllEnvironment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *environmentAPIServiceClient) GetEnvironmentByName(ctx context.Context, in *GetEnvironmentByNameRequest, opts ...grpc.CallOption) (*GetEnvironmentByNameResponse, error) {
	out := new(GetEnvironmentByNameResponse)
	err := c.cc.Invoke(ctx, "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetEnvironmentByName", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EnvironmentAPIServiceServer is the server API for EnvironmentAPIService service.
// All implementations should embed UnimplementedEnvironmentAPIServiceServer
// for forward compatibility
type EnvironmentAPIServiceServer interface {
	CreateEnvironment(context.Context, *CreateEnvironmentRequest) (*CreateEnvironmentResponse, error)
	GetOneEnvironment(context.Context, *GetOneEnvironmentRequest) (*GetOneEnvironmentResponse, error)
	UpdateEnvironment(context.Context, *UpdateEnvironmentRequest) (*UpdateEnvironmentResponse, error)
	ListEnvironment(context.Context, *ListEnvironmentRequest) (*ListEnvironmentResponse, error)
	DeleteEnvironment(context.Context, *DeleteEnvironmentRequest) (*DeleteEnvironmentResponse, error)
	GetByNameEnvironment(context.Context, *GetByNameEnvironmentRequest) (*GetByNameEnvironmentResponse, error)
	CreateVclusterOrganization(context.Context, *CreateVclusterOrganizationRequest) (*CreateVclusterOrganizationResponse, error)
	ListAllEnvironment(context.Context, *ListAllEnvironmentRequest) (*ListAllEnvironmentResponse, error)
	GetEnvironmentByName(context.Context, *GetEnvironmentByNameRequest) (*GetEnvironmentByNameResponse, error)
}

// UnimplementedEnvironmentAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedEnvironmentAPIServiceServer struct {
}

func (UnimplementedEnvironmentAPIServiceServer) CreateEnvironment(context.Context, *CreateEnvironmentRequest) (*CreateEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) GetOneEnvironment(context.Context, *GetOneEnvironmentRequest) (*GetOneEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) UpdateEnvironment(context.Context, *UpdateEnvironmentRequest) (*UpdateEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) ListEnvironment(context.Context, *ListEnvironmentRequest) (*ListEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) DeleteEnvironment(context.Context, *DeleteEnvironmentRequest) (*DeleteEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) GetByNameEnvironment(context.Context, *GetByNameEnvironmentRequest) (*GetByNameEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByNameEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) CreateVclusterOrganization(context.Context, *CreateVclusterOrganizationRequest) (*CreateVclusterOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateVclusterOrganization not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) ListAllEnvironment(context.Context, *ListAllEnvironmentRequest) (*ListAllEnvironmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAllEnvironment not implemented")
}
func (UnimplementedEnvironmentAPIServiceServer) GetEnvironmentByName(context.Context, *GetEnvironmentByNameRequest) (*GetEnvironmentByNameResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEnvironmentByName not implemented")
}

// UnsafeEnvironmentAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EnvironmentAPIServiceServer will
// result in compilation errors.
type UnsafeEnvironmentAPIServiceServer interface {
	mustEmbedUnimplementedEnvironmentAPIServiceServer()
}

func RegisterEnvironmentAPIServiceServer(s grpc.ServiceRegistrar, srv EnvironmentAPIServiceServer) {
	s.RegisterService(&EnvironmentAPIService_ServiceDesc, srv)
}

func _EnvironmentAPIService_CreateEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).CreateEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).CreateEnvironment(ctx, req.(*CreateEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_GetOneEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).GetOneEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetOneEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).GetOneEnvironment(ctx, req.(*GetOneEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_UpdateEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).UpdateEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/UpdateEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).UpdateEnvironment(ctx, req.(*UpdateEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_ListEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).ListEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/ListEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).ListEnvironment(ctx, req.(*ListEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_DeleteEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).DeleteEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/DeleteEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).DeleteEnvironment(ctx, req.(*DeleteEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_GetByNameEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetByNameEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).GetByNameEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetByNameEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).GetByNameEnvironment(ctx, req.(*GetByNameEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_CreateVclusterOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateVclusterOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).CreateVclusterOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateVclusterOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).CreateVclusterOrganization(ctx, req.(*CreateVclusterOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_ListAllEnvironment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAllEnvironmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).ListAllEnvironment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/ListAllEnvironment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).ListAllEnvironment(ctx, req.(*ListAllEnvironmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EnvironmentAPIService_GetEnvironmentByName_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEnvironmentByNameRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EnvironmentAPIServiceServer).GetEnvironmentByName(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetEnvironmentByName",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EnvironmentAPIServiceServer).GetEnvironmentByName(ctx, req.(*GetEnvironmentByNameRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EnvironmentAPIService_ServiceDesc is the grpc.ServiceDesc for EnvironmentAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EnvironmentAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pipelines.environment.v1alpha1.EnvironmentAPIService",
	HandlerType: (*EnvironmentAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateEnvironment",
			Handler:    _EnvironmentAPIService_CreateEnvironment_Handler,
		},
		{
			MethodName: "GetOneEnvironment",
			Handler:    _EnvironmentAPIService_GetOneEnvironment_Handler,
		},
		{
			MethodName: "UpdateEnvironment",
			Handler:    _EnvironmentAPIService_UpdateEnvironment_Handler,
		},
		{
			MethodName: "ListEnvironment",
			Handler:    _EnvironmentAPIService_ListEnvironment_Handler,
		},
		{
			MethodName: "DeleteEnvironment",
			Handler:    _EnvironmentAPIService_DeleteEnvironment_Handler,
		},
		{
			MethodName: "GetByNameEnvironment",
			Handler:    _EnvironmentAPIService_GetByNameEnvironment_Handler,
		},
		{
			MethodName: "CreateVclusterOrganization",
			Handler:    _EnvironmentAPIService_CreateVclusterOrganization_Handler,
		},
		{
			MethodName: "ListAllEnvironment",
			Handler:    _EnvironmentAPIService_ListAllEnvironment_Handler,
		},
		{
			MethodName: "GetEnvironmentByName",
			Handler:    _EnvironmentAPIService_GetEnvironmentByName_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pipelines/environment/v1alpha1/environment_api.proto",
}
