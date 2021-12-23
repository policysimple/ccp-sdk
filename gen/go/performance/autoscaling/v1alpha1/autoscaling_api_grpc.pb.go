// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: performance/autoscaling/v1alpha1/autoscaling_api.proto

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

// AutoscalingAPIServiceClient is the client API for AutoscalingAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AutoscalingAPIServiceClient interface {
	CreateAutoscaling(ctx context.Context, in *CreateAutoscalingRequest, opts ...grpc.CallOption) (*CreateAutoscalingResponse, error)
	UpdateAutoscaling(ctx context.Context, in *UpdateAutoscalingRequest, opts ...grpc.CallOption) (*UpdateAutoscalingResponse, error)
	DeleteAutoscaling(ctx context.Context, in *DeleteAutoscalingRequest, opts ...grpc.CallOption) (*DeleteAutoscalingResponse, error)
	GetAutoscaling(ctx context.Context, in *GetAutoscalingRequest, opts ...grpc.CallOption) (*GetAutoscalingResponse, error)
	ListAutoscaling(ctx context.Context, in *ListAutoscalingRequest, opts ...grpc.CallOption) (*ListAutoscalingResponse, error)
}

type autoscalingAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAutoscalingAPIServiceClient(cc grpc.ClientConnInterface) AutoscalingAPIServiceClient {
	return &autoscalingAPIServiceClient{cc}
}

func (c *autoscalingAPIServiceClient) CreateAutoscaling(ctx context.Context, in *CreateAutoscalingRequest, opts ...grpc.CallOption) (*CreateAutoscalingResponse, error) {
	out := new(CreateAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAPIService/CreateAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAPIServiceClient) UpdateAutoscaling(ctx context.Context, in *UpdateAutoscalingRequest, opts ...grpc.CallOption) (*UpdateAutoscalingResponse, error) {
	out := new(UpdateAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAPIService/UpdateAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAPIServiceClient) DeleteAutoscaling(ctx context.Context, in *DeleteAutoscalingRequest, opts ...grpc.CallOption) (*DeleteAutoscalingResponse, error) {
	out := new(DeleteAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAPIService/DeleteAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAPIServiceClient) GetAutoscaling(ctx context.Context, in *GetAutoscalingRequest, opts ...grpc.CallOption) (*GetAutoscalingResponse, error) {
	out := new(GetAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAPIService/GetAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAPIServiceClient) ListAutoscaling(ctx context.Context, in *ListAutoscalingRequest, opts ...grpc.CallOption) (*ListAutoscalingResponse, error) {
	out := new(ListAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAPIService/ListAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AutoscalingAPIServiceServer is the server API for AutoscalingAPIService service.
// All implementations should embed UnimplementedAutoscalingAPIServiceServer
// for forward compatibility
type AutoscalingAPIServiceServer interface {
	CreateAutoscaling(context.Context, *CreateAutoscalingRequest) (*CreateAutoscalingResponse, error)
	UpdateAutoscaling(context.Context, *UpdateAutoscalingRequest) (*UpdateAutoscalingResponse, error)
	DeleteAutoscaling(context.Context, *DeleteAutoscalingRequest) (*DeleteAutoscalingResponse, error)
	GetAutoscaling(context.Context, *GetAutoscalingRequest) (*GetAutoscalingResponse, error)
	ListAutoscaling(context.Context, *ListAutoscalingRequest) (*ListAutoscalingResponse, error)
}

// UnimplementedAutoscalingAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedAutoscalingAPIServiceServer struct {
}

func (UnimplementedAutoscalingAPIServiceServer) CreateAutoscaling(context.Context, *CreateAutoscalingRequest) (*CreateAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAutoscaling not implemented")
}
func (UnimplementedAutoscalingAPIServiceServer) UpdateAutoscaling(context.Context, *UpdateAutoscalingRequest) (*UpdateAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateAutoscaling not implemented")
}
func (UnimplementedAutoscalingAPIServiceServer) DeleteAutoscaling(context.Context, *DeleteAutoscalingRequest) (*DeleteAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAutoscaling not implemented")
}
func (UnimplementedAutoscalingAPIServiceServer) GetAutoscaling(context.Context, *GetAutoscalingRequest) (*GetAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAutoscaling not implemented")
}
func (UnimplementedAutoscalingAPIServiceServer) ListAutoscaling(context.Context, *ListAutoscalingRequest) (*ListAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAutoscaling not implemented")
}

// UnsafeAutoscalingAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AutoscalingAPIServiceServer will
// result in compilation errors.
type UnsafeAutoscalingAPIServiceServer interface {
	mustEmbedUnimplementedAutoscalingAPIServiceServer()
}

func RegisterAutoscalingAPIServiceServer(s grpc.ServiceRegistrar, srv AutoscalingAPIServiceServer) {
	s.RegisterService(&AutoscalingAPIService_ServiceDesc, srv)
}

func _AutoscalingAPIService_CreateAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAPIServiceServer).CreateAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAPIService/CreateAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAPIServiceServer).CreateAutoscaling(ctx, req.(*CreateAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAPIService_UpdateAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAPIServiceServer).UpdateAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAPIService/UpdateAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAPIServiceServer).UpdateAutoscaling(ctx, req.(*UpdateAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAPIService_DeleteAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAPIServiceServer).DeleteAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAPIService/DeleteAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAPIServiceServer).DeleteAutoscaling(ctx, req.(*DeleteAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAPIService_GetAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAPIServiceServer).GetAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAPIService/GetAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAPIServiceServer).GetAutoscaling(ctx, req.(*GetAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAPIService_ListAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAPIServiceServer).ListAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAPIService/ListAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAPIServiceServer).ListAutoscaling(ctx, req.(*ListAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AutoscalingAPIService_ServiceDesc is the grpc.ServiceDesc for AutoscalingAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AutoscalingAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "performance.autoscaling.v1alpha1.AutoscalingAPIService",
	HandlerType: (*AutoscalingAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateAutoscaling",
			Handler:    _AutoscalingAPIService_CreateAutoscaling_Handler,
		},
		{
			MethodName: "UpdateAutoscaling",
			Handler:    _AutoscalingAPIService_UpdateAutoscaling_Handler,
		},
		{
			MethodName: "DeleteAutoscaling",
			Handler:    _AutoscalingAPIService_DeleteAutoscaling_Handler,
		},
		{
			MethodName: "GetAutoscaling",
			Handler:    _AutoscalingAPIService_GetAutoscaling_Handler,
		},
		{
			MethodName: "ListAutoscaling",
			Handler:    _AutoscalingAPIService_ListAutoscaling_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "performance/autoscaling/v1alpha1/autoscaling_api.proto",
}
