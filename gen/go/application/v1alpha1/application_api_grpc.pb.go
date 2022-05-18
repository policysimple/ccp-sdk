// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: application/v1alpha1/application.proto

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

// ApplicationServiceClient is the client API for ApplicationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ApplicationServiceClient interface {
	//Application
	CreateApplication(ctx context.Context, in *CreateApplicationRequest, opts ...grpc.CallOption) (*CreateApplicationResponse, error)
	ListApplication(ctx context.Context, in *ListApplicationRequest, opts ...grpc.CallOption) (*ListApplicationResponse, error)
	GetApplication(ctx context.Context, in *GetApplicationRequest, opts ...grpc.CallOption) (*GetApplicationResponse, error)
	DeleteApplication(ctx context.Context, in *DeleteApplicationRequest, opts ...grpc.CallOption) (*DeleteApplicationResponse, error)
	UpdateApplication(ctx context.Context, in *UpdateApplicationRequest, opts ...grpc.CallOption) (*UpdateApplicationResponse, error)
	DeleteApplicationsByIntegration(ctx context.Context, in *DeleteApplicationsByIntegrationRequest, opts ...grpc.CallOption) (*DeleteApplicationsByIntegrationResponse, error)
	ListApplicationsByOrganization(ctx context.Context, in *ListApplicationsByOrganizationRequest, opts ...grpc.CallOption) (*ListApplicationsByOrganizationResponse, error)
}

type applicationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewApplicationServiceClient(cc grpc.ClientConnInterface) ApplicationServiceClient {
	return &applicationServiceClient{cc}
}

func (c *applicationServiceClient) CreateApplication(ctx context.Context, in *CreateApplicationRequest, opts ...grpc.CallOption) (*CreateApplicationResponse, error) {
	out := new(CreateApplicationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/CreateApplication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applicationServiceClient) ListApplication(ctx context.Context, in *ListApplicationRequest, opts ...grpc.CallOption) (*ListApplicationResponse, error) {
	out := new(ListApplicationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/ListApplication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applicationServiceClient) GetApplication(ctx context.Context, in *GetApplicationRequest, opts ...grpc.CallOption) (*GetApplicationResponse, error) {
	out := new(GetApplicationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/GetApplication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applicationServiceClient) DeleteApplication(ctx context.Context, in *DeleteApplicationRequest, opts ...grpc.CallOption) (*DeleteApplicationResponse, error) {
	out := new(DeleteApplicationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/DeleteApplication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applicationServiceClient) UpdateApplication(ctx context.Context, in *UpdateApplicationRequest, opts ...grpc.CallOption) (*UpdateApplicationResponse, error) {
	out := new(UpdateApplicationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/UpdateApplication", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applicationServiceClient) DeleteApplicationsByIntegration(ctx context.Context, in *DeleteApplicationsByIntegrationRequest, opts ...grpc.CallOption) (*DeleteApplicationsByIntegrationResponse, error) {
	out := new(DeleteApplicationsByIntegrationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/DeleteApplicationsByIntegration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *applicationServiceClient) ListApplicationsByOrganization(ctx context.Context, in *ListApplicationsByOrganizationRequest, opts ...grpc.CallOption) (*ListApplicationsByOrganizationResponse, error) {
	out := new(ListApplicationsByOrganizationResponse)
	err := c.cc.Invoke(ctx, "/application.v1alpha1.ApplicationService/ListApplicationsByOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ApplicationServiceServer is the server API for ApplicationService service.
// All implementations should embed UnimplementedApplicationServiceServer
// for forward compatibility
type ApplicationServiceServer interface {
	//Application
	CreateApplication(context.Context, *CreateApplicationRequest) (*CreateApplicationResponse, error)
	ListApplication(context.Context, *ListApplicationRequest) (*ListApplicationResponse, error)
	GetApplication(context.Context, *GetApplicationRequest) (*GetApplicationResponse, error)
	DeleteApplication(context.Context, *DeleteApplicationRequest) (*DeleteApplicationResponse, error)
	UpdateApplication(context.Context, *UpdateApplicationRequest) (*UpdateApplicationResponse, error)
	DeleteApplicationsByIntegration(context.Context, *DeleteApplicationsByIntegrationRequest) (*DeleteApplicationsByIntegrationResponse, error)
	ListApplicationsByOrganization(context.Context, *ListApplicationsByOrganizationRequest) (*ListApplicationsByOrganizationResponse, error)
}

// UnimplementedApplicationServiceServer should be embedded to have forward compatible implementations.
type UnimplementedApplicationServiceServer struct {
}

func (UnimplementedApplicationServiceServer) CreateApplication(context.Context, *CreateApplicationRequest) (*CreateApplicationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateApplication not implemented")
}
func (UnimplementedApplicationServiceServer) ListApplication(context.Context, *ListApplicationRequest) (*ListApplicationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListApplication not implemented")
}
func (UnimplementedApplicationServiceServer) GetApplication(context.Context, *GetApplicationRequest) (*GetApplicationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetApplication not implemented")
}
func (UnimplementedApplicationServiceServer) DeleteApplication(context.Context, *DeleteApplicationRequest) (*DeleteApplicationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteApplication not implemented")
}
func (UnimplementedApplicationServiceServer) UpdateApplication(context.Context, *UpdateApplicationRequest) (*UpdateApplicationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateApplication not implemented")
}
func (UnimplementedApplicationServiceServer) DeleteApplicationsByIntegration(context.Context, *DeleteApplicationsByIntegrationRequest) (*DeleteApplicationsByIntegrationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteApplicationsByIntegration not implemented")
}
func (UnimplementedApplicationServiceServer) ListApplicationsByOrganization(context.Context, *ListApplicationsByOrganizationRequest) (*ListApplicationsByOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListApplicationsByOrganization not implemented")
}

// UnsafeApplicationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ApplicationServiceServer will
// result in compilation errors.
type UnsafeApplicationServiceServer interface {
	mustEmbedUnimplementedApplicationServiceServer()
}

func RegisterApplicationServiceServer(s grpc.ServiceRegistrar, srv ApplicationServiceServer) {
	s.RegisterService(&ApplicationService_ServiceDesc, srv)
}

func _ApplicationService_CreateApplication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateApplicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).CreateApplication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/CreateApplication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).CreateApplication(ctx, req.(*CreateApplicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApplicationService_ListApplication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListApplicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).ListApplication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/ListApplication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).ListApplication(ctx, req.(*ListApplicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApplicationService_GetApplication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetApplicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).GetApplication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/GetApplication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).GetApplication(ctx, req.(*GetApplicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApplicationService_DeleteApplication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteApplicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).DeleteApplication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/DeleteApplication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).DeleteApplication(ctx, req.(*DeleteApplicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApplicationService_UpdateApplication_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateApplicationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).UpdateApplication(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/UpdateApplication",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).UpdateApplication(ctx, req.(*UpdateApplicationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApplicationService_DeleteApplicationsByIntegration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteApplicationsByIntegrationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).DeleteApplicationsByIntegration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/DeleteApplicationsByIntegration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).DeleteApplicationsByIntegration(ctx, req.(*DeleteApplicationsByIntegrationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApplicationService_ListApplicationsByOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListApplicationsByOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApplicationServiceServer).ListApplicationsByOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/application.v1alpha1.ApplicationService/ListApplicationsByOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApplicationServiceServer).ListApplicationsByOrganization(ctx, req.(*ListApplicationsByOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ApplicationService_ServiceDesc is the grpc.ServiceDesc for ApplicationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ApplicationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "application.v1alpha1.ApplicationService",
	HandlerType: (*ApplicationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateApplication",
			Handler:    _ApplicationService_CreateApplication_Handler,
		},
		{
			MethodName: "ListApplication",
			Handler:    _ApplicationService_ListApplication_Handler,
		},
		{
			MethodName: "GetApplication",
			Handler:    _ApplicationService_GetApplication_Handler,
		},
		{
			MethodName: "DeleteApplication",
			Handler:    _ApplicationService_DeleteApplication_Handler,
		},
		{
			MethodName: "UpdateApplication",
			Handler:    _ApplicationService_UpdateApplication_Handler,
		},
		{
			MethodName: "DeleteApplicationsByIntegration",
			Handler:    _ApplicationService_DeleteApplicationsByIntegration_Handler,
		},
		{
			MethodName: "ListApplicationsByOrganization",
			Handler:    _ApplicationService_ListApplicationsByOrganization_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "application/v1alpha1/application_api.proto",
}
