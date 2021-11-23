// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package autoscalingv1alpha1

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
	AgentCreateAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentCreateAutoscalingClient, error)
	AgentUpdateAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentUpdateAutoscalingClient, error)
	AgentDeleteAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentDeleteAutoscalingClient, error)
	AgentGetAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentGetAutoscalingClient, error)
	AgentListAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentListAutoscalingClient, error)
}

type autoscalingAgentAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAutoscalingAgentAPIServiceClient(cc grpc.ClientConnInterface) AutoscalingAgentAPIServiceClient {
	return &autoscalingAgentAPIServiceClient{cc}
}

func (c *autoscalingAgentAPIServiceClient) AgentCreateAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentCreateAutoscalingClient, error) {
	stream, err := c.cc.NewStream(ctx, &AutoscalingAgentAPIService_ServiceDesc.Streams[0], "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling", opts...)
	if err != nil {
		return nil, err
	}
	x := &autoscalingAgentAPIServiceAgentCreateAutoscalingClient{stream}
	return x, nil
}

type AutoscalingAgentAPIService_AgentCreateAutoscalingClient interface {
	Send(*AgentCreateAutoscalingRequest) error
	Recv() (*AgentCreateAutoscalingResponse, error)
	grpc.ClientStream
}

type autoscalingAgentAPIServiceAgentCreateAutoscalingClient struct {
	grpc.ClientStream
}

func (x *autoscalingAgentAPIServiceAgentCreateAutoscalingClient) Send(m *AgentCreateAutoscalingRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentCreateAutoscalingClient) Recv() (*AgentCreateAutoscalingResponse, error) {
	m := new(AgentCreateAutoscalingResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentUpdateAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentUpdateAutoscalingClient, error) {
	stream, err := c.cc.NewStream(ctx, &AutoscalingAgentAPIService_ServiceDesc.Streams[1], "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling", opts...)
	if err != nil {
		return nil, err
	}
	x := &autoscalingAgentAPIServiceAgentUpdateAutoscalingClient{stream}
	return x, nil
}

type AutoscalingAgentAPIService_AgentUpdateAutoscalingClient interface {
	Send(*AgentUpdateAutoscalingRequest) error
	Recv() (*AgentUpdateAutoscalingResponse, error)
	grpc.ClientStream
}

type autoscalingAgentAPIServiceAgentUpdateAutoscalingClient struct {
	grpc.ClientStream
}

func (x *autoscalingAgentAPIServiceAgentUpdateAutoscalingClient) Send(m *AgentUpdateAutoscalingRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentUpdateAutoscalingClient) Recv() (*AgentUpdateAutoscalingResponse, error) {
	m := new(AgentUpdateAutoscalingResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentDeleteAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentDeleteAutoscalingClient, error) {
	stream, err := c.cc.NewStream(ctx, &AutoscalingAgentAPIService_ServiceDesc.Streams[2], "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling", opts...)
	if err != nil {
		return nil, err
	}
	x := &autoscalingAgentAPIServiceAgentDeleteAutoscalingClient{stream}
	return x, nil
}

type AutoscalingAgentAPIService_AgentDeleteAutoscalingClient interface {
	Send(*AgentDeleteAutoscalingRequest) error
	Recv() (*AgentDeleteAutoscalingResponse, error)
	grpc.ClientStream
}

type autoscalingAgentAPIServiceAgentDeleteAutoscalingClient struct {
	grpc.ClientStream
}

func (x *autoscalingAgentAPIServiceAgentDeleteAutoscalingClient) Send(m *AgentDeleteAutoscalingRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentDeleteAutoscalingClient) Recv() (*AgentDeleteAutoscalingResponse, error) {
	m := new(AgentDeleteAutoscalingResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentGetAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentGetAutoscalingClient, error) {
	stream, err := c.cc.NewStream(ctx, &AutoscalingAgentAPIService_ServiceDesc.Streams[3], "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling", opts...)
	if err != nil {
		return nil, err
	}
	x := &autoscalingAgentAPIServiceAgentGetAutoscalingClient{stream}
	return x, nil
}

type AutoscalingAgentAPIService_AgentGetAutoscalingClient interface {
	Send(*AgentGetAutoscalingRequest) error
	Recv() (*AgentGetAutoscalingResponse, error)
	grpc.ClientStream
}

type autoscalingAgentAPIServiceAgentGetAutoscalingClient struct {
	grpc.ClientStream
}

func (x *autoscalingAgentAPIServiceAgentGetAutoscalingClient) Send(m *AgentGetAutoscalingRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentGetAutoscalingClient) Recv() (*AgentGetAutoscalingResponse, error) {
	m := new(AgentGetAutoscalingResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *autoscalingAgentAPIServiceClient) AgentListAutoscaling(ctx context.Context, opts ...grpc.CallOption) (AutoscalingAgentAPIService_AgentListAutoscalingClient, error) {
	stream, err := c.cc.NewStream(ctx, &AutoscalingAgentAPIService_ServiceDesc.Streams[4], "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling", opts...)
	if err != nil {
		return nil, err
	}
	x := &autoscalingAgentAPIServiceAgentListAutoscalingClient{stream}
	return x, nil
}

type AutoscalingAgentAPIService_AgentListAutoscalingClient interface {
	Send(*AgentListAutoscalingRequest) error
	Recv() (*AgentListAutoscalingResponse, error)
	grpc.ClientStream
}

type autoscalingAgentAPIServiceAgentListAutoscalingClient struct {
	grpc.ClientStream
}

func (x *autoscalingAgentAPIServiceAgentListAutoscalingClient) Send(m *AgentListAutoscalingRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentListAutoscalingClient) Recv() (*AgentListAutoscalingResponse, error) {
	m := new(AgentListAutoscalingResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// AutoscalingAgentAPIServiceServer is the server API for AutoscalingAgentAPIService service.
// All implementations should embed UnimplementedAutoscalingAgentAPIServiceServer
// for forward compatibility
type AutoscalingAgentAPIServiceServer interface {
	AgentCreateAutoscaling(AutoscalingAgentAPIService_AgentCreateAutoscalingServer) error
	AgentUpdateAutoscaling(AutoscalingAgentAPIService_AgentUpdateAutoscalingServer) error
	AgentDeleteAutoscaling(AutoscalingAgentAPIService_AgentDeleteAutoscalingServer) error
	AgentGetAutoscaling(AutoscalingAgentAPIService_AgentGetAutoscalingServer) error
	AgentListAutoscaling(AutoscalingAgentAPIService_AgentListAutoscalingServer) error
}

// UnimplementedAutoscalingAgentAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedAutoscalingAgentAPIServiceServer struct {
}

func (UnimplementedAutoscalingAgentAPIServiceServer) AgentCreateAutoscaling(AutoscalingAgentAPIService_AgentCreateAutoscalingServer) error {
	return status.Errorf(codes.Unimplemented, "method AgentCreateAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentUpdateAutoscaling(AutoscalingAgentAPIService_AgentUpdateAutoscalingServer) error {
	return status.Errorf(codes.Unimplemented, "method AgentUpdateAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentDeleteAutoscaling(AutoscalingAgentAPIService_AgentDeleteAutoscalingServer) error {
	return status.Errorf(codes.Unimplemented, "method AgentDeleteAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentGetAutoscaling(AutoscalingAgentAPIService_AgentGetAutoscalingServer) error {
	return status.Errorf(codes.Unimplemented, "method AgentGetAutoscaling not implemented")
}
func (UnimplementedAutoscalingAgentAPIServiceServer) AgentListAutoscaling(AutoscalingAgentAPIService_AgentListAutoscalingServer) error {
	return status.Errorf(codes.Unimplemented, "method AgentListAutoscaling not implemented")
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

func _AutoscalingAgentAPIService_AgentCreateAutoscaling_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(AutoscalingAgentAPIServiceServer).AgentCreateAutoscaling(&autoscalingAgentAPIServiceAgentCreateAutoscalingServer{stream})
}

type AutoscalingAgentAPIService_AgentCreateAutoscalingServer interface {
	Send(*AgentCreateAutoscalingResponse) error
	Recv() (*AgentCreateAutoscalingRequest, error)
	grpc.ServerStream
}

type autoscalingAgentAPIServiceAgentCreateAutoscalingServer struct {
	grpc.ServerStream
}

func (x *autoscalingAgentAPIServiceAgentCreateAutoscalingServer) Send(m *AgentCreateAutoscalingResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentCreateAutoscalingServer) Recv() (*AgentCreateAutoscalingRequest, error) {
	m := new(AgentCreateAutoscalingRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _AutoscalingAgentAPIService_AgentUpdateAutoscaling_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(AutoscalingAgentAPIServiceServer).AgentUpdateAutoscaling(&autoscalingAgentAPIServiceAgentUpdateAutoscalingServer{stream})
}

type AutoscalingAgentAPIService_AgentUpdateAutoscalingServer interface {
	Send(*AgentUpdateAutoscalingResponse) error
	Recv() (*AgentUpdateAutoscalingRequest, error)
	grpc.ServerStream
}

type autoscalingAgentAPIServiceAgentUpdateAutoscalingServer struct {
	grpc.ServerStream
}

func (x *autoscalingAgentAPIServiceAgentUpdateAutoscalingServer) Send(m *AgentUpdateAutoscalingResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentUpdateAutoscalingServer) Recv() (*AgentUpdateAutoscalingRequest, error) {
	m := new(AgentUpdateAutoscalingRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _AutoscalingAgentAPIService_AgentDeleteAutoscaling_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(AutoscalingAgentAPIServiceServer).AgentDeleteAutoscaling(&autoscalingAgentAPIServiceAgentDeleteAutoscalingServer{stream})
}

type AutoscalingAgentAPIService_AgentDeleteAutoscalingServer interface {
	Send(*AgentDeleteAutoscalingResponse) error
	Recv() (*AgentDeleteAutoscalingRequest, error)
	grpc.ServerStream
}

type autoscalingAgentAPIServiceAgentDeleteAutoscalingServer struct {
	grpc.ServerStream
}

func (x *autoscalingAgentAPIServiceAgentDeleteAutoscalingServer) Send(m *AgentDeleteAutoscalingResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentDeleteAutoscalingServer) Recv() (*AgentDeleteAutoscalingRequest, error) {
	m := new(AgentDeleteAutoscalingRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _AutoscalingAgentAPIService_AgentGetAutoscaling_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(AutoscalingAgentAPIServiceServer).AgentGetAutoscaling(&autoscalingAgentAPIServiceAgentGetAutoscalingServer{stream})
}

type AutoscalingAgentAPIService_AgentGetAutoscalingServer interface {
	Send(*AgentGetAutoscalingResponse) error
	Recv() (*AgentGetAutoscalingRequest, error)
	grpc.ServerStream
}

type autoscalingAgentAPIServiceAgentGetAutoscalingServer struct {
	grpc.ServerStream
}

func (x *autoscalingAgentAPIServiceAgentGetAutoscalingServer) Send(m *AgentGetAutoscalingResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentGetAutoscalingServer) Recv() (*AgentGetAutoscalingRequest, error) {
	m := new(AgentGetAutoscalingRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _AutoscalingAgentAPIService_AgentListAutoscaling_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(AutoscalingAgentAPIServiceServer).AgentListAutoscaling(&autoscalingAgentAPIServiceAgentListAutoscalingServer{stream})
}

type AutoscalingAgentAPIService_AgentListAutoscalingServer interface {
	Send(*AgentListAutoscalingResponse) error
	Recv() (*AgentListAutoscalingRequest, error)
	grpc.ServerStream
}

type autoscalingAgentAPIServiceAgentListAutoscalingServer struct {
	grpc.ServerStream
}

func (x *autoscalingAgentAPIServiceAgentListAutoscalingServer) Send(m *AgentListAutoscalingResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *autoscalingAgentAPIServiceAgentListAutoscalingServer) Recv() (*AgentListAutoscalingRequest, error) {
	m := new(AgentListAutoscalingRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// AutoscalingAgentAPIService_ServiceDesc is the grpc.ServiceDesc for AutoscalingAgentAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AutoscalingAgentAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "performance.autoscaling.v1alpha1.AutoscalingAgentAPIService",
	HandlerType: (*AutoscalingAgentAPIServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "AgentCreateAutoscaling",
			Handler:       _AutoscalingAgentAPIService_AgentCreateAutoscaling_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "AgentUpdateAutoscaling",
			Handler:       _AutoscalingAgentAPIService_AgentUpdateAutoscaling_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "AgentDeleteAutoscaling",
			Handler:       _AutoscalingAgentAPIService_AgentDeleteAutoscaling_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "AgentGetAutoscaling",
			Handler:       _AutoscalingAgentAPIService_AgentGetAutoscaling_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "AgentListAutoscaling",
			Handler:       _AutoscalingAgentAPIService_AgentListAutoscaling_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "performance/autoscaling/v1alpha1/autoscaling_agent_api.proto",
}