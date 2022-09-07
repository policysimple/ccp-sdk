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

// AutoscalingAgentAPIServiceClient is the client API for AutoscalingAgentAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AutoscalingAgentAPIServiceClient interface {
	AgentCreateAutoscaling(ctx context.Context, in *AgentCreateAutoscalingRequest, opts ...grpc.CallOption) (*AgentCreateAutoscalingResponse, error)
	AgentUpdateAutoscaling(ctx context.Context, in *AgentUpdateAutoscalingRequest, opts ...grpc.CallOption) (*AgentUpdateAutoscalingResponse, error)
	AgentDeleteAutoscaling(ctx context.Context, in *AgentDeleteAutoscalingRequest, opts ...grpc.CallOption) (*AgentDeleteAutoscalingResponse, error)
	AgentGetAutoscaling(ctx context.Context, in *AgentGetAutoscalingRequest, opts ...grpc.CallOption) (*AgentGetAutoscalingResponse, error)
	AgentListAutoscaling(ctx context.Context, in *AgentListAutoscalingRequest, opts ...grpc.CallOption) (*AgentListAutoscalingResponse, error)
}

type autoscalingAgentAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAutoscalingAgentAPIServiceClient(cc grpc.ClientConnInterface) AutoscalingAgentAPIServiceClient {
	return &autoscalingAgentAPIServiceClient{cc}
}

func (c *autoscalingAgentAPIServiceClient) AgentCreateAutoscaling(ctx context.Context, in *AgentCreateAutoscalingRequest, opts ...grpc.CallOption) (*AgentCreateAutoscalingResponse, error) {
	out := new(AgentCreateAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentUpdateAutoscaling(ctx context.Context, in *AgentUpdateAutoscalingRequest, opts ...grpc.CallOption) (*AgentUpdateAutoscalingResponse, error) {
	out := new(AgentUpdateAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentDeleteAutoscaling(ctx context.Context, in *AgentDeleteAutoscalingRequest, opts ...grpc.CallOption) (*AgentDeleteAutoscalingResponse, error) {
	out := new(AgentDeleteAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentGetAutoscaling(ctx context.Context, in *AgentGetAutoscalingRequest, opts ...grpc.CallOption) (*AgentGetAutoscalingResponse, error) {
	out := new(AgentGetAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentListAutoscaling(ctx context.Context, in *AgentListAutoscalingRequest, opts ...grpc.CallOption) (*AgentListAutoscalingResponse, error) {
	out := new(AgentListAutoscalingResponse)
	err := c.cc.Invoke(ctx, "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AutoscalingAgentAPIServiceServer is the server API for AutoscalingAgentAPIService service.
// All implementations should embed UnimplementedAutoscalingAgentAPIServiceServer
// for forward compatibility
type AutoscalingAgentAPIServiceServer interface {
	AgentCreateAutoscaling(context.Context, *AgentCreateAutoscalingRequest) (*AgentCreateAutoscalingResponse, error)
	AgentUpdateAutoscaling(context.Context, *AgentUpdateAutoscalingRequest) (*AgentUpdateAutoscalingResponse, error)
	AgentDeleteAutoscaling(context.Context, *AgentDeleteAutoscalingRequest) (*AgentDeleteAutoscalingResponse, error)
	AgentGetAutoscaling(context.Context, *AgentGetAutoscalingRequest) (*AgentGetAutoscalingResponse, error)
	AgentListAutoscaling(context.Context, *AgentListAutoscalingRequest) (*AgentListAutoscalingResponse, error)
}

// UnimplementedAutoscalingAgentAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedAutoscalingAgentAPIServiceServer struct {
}

func (UnimplementedAutoscalingAgentAPIServiceServer) AgentCreateAutoscaling(context.Context, *AgentCreateAutoscalingRequest) (*AgentCreateAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgentCreateAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentUpdateAutoscaling(context.Context, *AgentUpdateAutoscalingRequest) (*AgentUpdateAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgentUpdateAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentDeleteAutoscaling(context.Context, *AgentDeleteAutoscalingRequest) (*AgentDeleteAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgentDeleteAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentGetAutoscaling(context.Context, *AgentGetAutoscalingRequest) (*AgentGetAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgentGetAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentListAutoscaling(context.Context, *AgentListAutoscalingRequest) (*AgentListAutoscalingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgentListAutoscaling not implemented")
}

// UnsafeAutoscalingAgentAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AutoscalingAgentAPIServiceServer will
// result in compilation errors.
type UnsafeAutoscalingAgentAPIServiceServer interface {
	mustEmbedUnimplementedAutoscalingAgentAPIServiceServer()
}

func RegisterAutoscalingAgentAPIServiceServer(s grpc.ServiceRegistrar, srv AutoscalingAgentAPIServiceServer) {
	s.RegisterService(&AutoscalingAgentAPIService_ServiceDesc, srv)
}

func _AutoscalingAgentAPIService_AgentCreateAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgentCreateAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAgentAPIServiceServer).AgentCreateAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAgentAPIServiceServer).AgentCreateAutoscaling(ctx, req.(*AgentCreateAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAgentAPIService_AgentUpdateAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgentUpdateAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAgentAPIServiceServer).AgentUpdateAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAgentAPIServiceServer).AgentUpdateAutoscaling(ctx, req.(*AgentUpdateAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAgentAPIService_AgentDeleteAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgentDeleteAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAgentAPIServiceServer).AgentDeleteAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAgentAPIServiceServer).AgentDeleteAutoscaling(ctx, req.(*AgentDeleteAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAgentAPIService_AgentGetAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgentGetAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAgentAPIServiceServer).AgentGetAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAgentAPIServiceServer).AgentGetAutoscaling(ctx, req.(*AgentGetAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AutoscalingAgentAPIService_AgentListAutoscaling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgentListAutoscalingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AutoscalingAgentAPIServiceServer).AgentListAutoscaling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AutoscalingAgentAPIServiceServer).AgentListAutoscaling(ctx, req.(*AgentListAutoscalingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AutoscalingAgentAPIService_ServiceDesc is the grpc.ServiceDesc for AutoscalingAgentAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AutoscalingAgentAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "performance.autoscaling.v1alpha1.AutoscalingAgentAPIService",
	HandlerType: (*AutoscalingAgentAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AgentCreateAutoscaling",
			Handler:    _AutoscalingAgentAPIService_AgentCreateAutoscaling_Handler,
		},
		{
			MethodName: "AgentUpdateAutoscaling",
			Handler:    _AutoscalingAgentAPIService_AgentUpdateAutoscaling_Handler,
		},
		{
			MethodName: "AgentDeleteAutoscaling",
			Handler:    _AutoscalingAgentAPIService_AgentDeleteAutoscaling_Handler,
		},
		{
			MethodName: "AgentGetAutoscaling",
			Handler:    _AutoscalingAgentAPIService_AgentGetAutoscaling_Handler,
		},
		{
			MethodName: "AgentListAutoscaling",
			Handler:    _AutoscalingAgentAPIService_AgentListAutoscaling_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "performance/autoscaling/v1alpha1/autoscaling_agent_api.proto",
}
