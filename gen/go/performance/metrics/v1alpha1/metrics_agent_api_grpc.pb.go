// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: performance/metrics/v1alpha1/metrics_agent_api.proto

package metricsv1alpha1

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

// MetricsAgentAPIServiceClient is the client API for MetricsAgentAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MetricsAgentAPIServiceClient interface {
	SaveMetrics(ctx context.Context, opts ...grpc.CallOption) (MetricsAgentAPIService_SaveMetricsClient, error)
}

type metricsAgentAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMetricsAgentAPIServiceClient(cc grpc.ClientConnInterface) MetricsAgentAPIServiceClient {
	return &metricsAgentAPIServiceClient{cc}
}

func (c *metricsAgentAPIServiceClient) SaveMetrics(ctx context.Context, opts ...grpc.CallOption) (MetricsAgentAPIService_SaveMetricsClient, error) {
	stream, err := c.cc.NewStream(ctx, &MetricsAgentAPIService_ServiceDesc.Streams[0], "/performance.metrics.v1alpha1.MetricsAgentAPIService/SaveMetrics", opts...)
	if err != nil {
		return nil, err
	}
	x := &metricsAgentAPIServiceSaveMetricsClient{stream}
	return x, nil
}

type MetricsAgentAPIService_SaveMetricsClient interface {
	Send(*SaveMetricsRequest) error
	Recv() (*SaveMetricsResponse, error)
	grpc.ClientStream
}

type metricsAgentAPIServiceSaveMetricsClient struct {
	grpc.ClientStream
}

func (x *metricsAgentAPIServiceSaveMetricsClient) Send(m *SaveMetricsRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *metricsAgentAPIServiceSaveMetricsClient) Recv() (*SaveMetricsResponse, error) {
	m := new(SaveMetricsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MetricsAgentAPIServiceServer is the server API for MetricsAgentAPIService service.
// All implementations should embed UnimplementedMetricsAgentAPIServiceServer
// for forward compatibility
type MetricsAgentAPIServiceServer interface {
	SaveMetrics(MetricsAgentAPIService_SaveMetricsServer) error
}

// UnimplementedMetricsAgentAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedMetricsAgentAPIServiceServer struct {
}

func (UnimplementedMetricsAgentAPIServiceServer) SaveMetrics(MetricsAgentAPIService_SaveMetricsServer) error {
	return status.Errorf(codes.Unimplemented, "method SaveMetrics not implemented")
}

// UnsafeMetricsAgentAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetricsAgentAPIServiceServer will
// result in compilation errors.
type UnsafeMetricsAgentAPIServiceServer interface {
	mustEmbedUnimplementedMetricsAgentAPIServiceServer()
}

func RegisterMetricsAgentAPIServiceServer(s grpc.ServiceRegistrar, srv MetricsAgentAPIServiceServer) {
	s.RegisterService(&MetricsAgentAPIService_ServiceDesc, srv)
}

func _MetricsAgentAPIService_SaveMetrics_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MetricsAgentAPIServiceServer).SaveMetrics(&metricsAgentAPIServiceSaveMetricsServer{stream})
}

type MetricsAgentAPIService_SaveMetricsServer interface {
	Send(*SaveMetricsResponse) error
	Recv() (*SaveMetricsRequest, error)
	grpc.ServerStream
}

type metricsAgentAPIServiceSaveMetricsServer struct {
	grpc.ServerStream
}

func (x *metricsAgentAPIServiceSaveMetricsServer) Send(m *SaveMetricsResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *metricsAgentAPIServiceSaveMetricsServer) Recv() (*SaveMetricsRequest, error) {
	m := new(SaveMetricsRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MetricsAgentAPIService_ServiceDesc is the grpc.ServiceDesc for MetricsAgentAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MetricsAgentAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "performance.metrics.v1alpha1.MetricsAgentAPIService",
	HandlerType: (*MetricsAgentAPIServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "SaveMetrics",
			Handler:       _MetricsAgentAPIService_SaveMetrics_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "performance/metrics/v1alpha1/metrics_agent_api.proto",
}
