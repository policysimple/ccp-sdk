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

// TektonPipelineAPIServiceClient is the client API for TektonPipelineAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TektonPipelineAPIServiceClient interface {
	CreateTektonPipeline(ctx context.Context, in *CreateTektonPipelineRequest, opts ...grpc.CallOption) (*CreateTektonPipelineResponse, error)
	DeleteTektonPipeline(ctx context.Context, in *DeleteTektonPipelineRequest, opts ...grpc.CallOption) (*DeleteTektonPipelineResponse, error)
}

type tektonPipelineAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTektonPipelineAPIServiceClient(cc grpc.ClientConnInterface) TektonPipelineAPIServiceClient {
	return &tektonPipelineAPIServiceClient{cc}
}

func (c *tektonPipelineAPIServiceClient) CreateTektonPipeline(ctx context.Context, in *CreateTektonPipelineRequest, opts ...grpc.CallOption) (*CreateTektonPipelineResponse, error) {
	out := new(CreateTektonPipelineResponse)
	err := c.cc.Invoke(ctx, "/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateTektonPipeline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tektonPipelineAPIServiceClient) DeleteTektonPipeline(ctx context.Context, in *DeleteTektonPipelineRequest, opts ...grpc.CallOption) (*DeleteTektonPipelineResponse, error) {
	out := new(DeleteTektonPipelineResponse)
	err := c.cc.Invoke(ctx, "/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteTektonPipeline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TektonPipelineAPIServiceServer is the server API for TektonPipelineAPIService service.
// All implementations should embed UnimplementedTektonPipelineAPIServiceServer
// for forward compatibility
type TektonPipelineAPIServiceServer interface {
	CreateTektonPipeline(context.Context, *CreateTektonPipelineRequest) (*CreateTektonPipelineResponse, error)
	DeleteTektonPipeline(context.Context, *DeleteTektonPipelineRequest) (*DeleteTektonPipelineResponse, error)
}

// UnimplementedTektonPipelineAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedTektonPipelineAPIServiceServer struct {
}

func (UnimplementedTektonPipelineAPIServiceServer) CreateTektonPipeline(context.Context, *CreateTektonPipelineRequest) (*CreateTektonPipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateTektonPipeline not implemented")
}
func (UnimplementedTektonPipelineAPIServiceServer) DeleteTektonPipeline(context.Context, *DeleteTektonPipelineRequest) (*DeleteTektonPipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteTektonPipeline not implemented")
}

// UnsafeTektonPipelineAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TektonPipelineAPIServiceServer will
// result in compilation errors.
type UnsafeTektonPipelineAPIServiceServer interface {
	mustEmbedUnimplementedTektonPipelineAPIServiceServer()
}

func RegisterTektonPipelineAPIServiceServer(s grpc.ServiceRegistrar, srv TektonPipelineAPIServiceServer) {
	s.RegisterService(&TektonPipelineAPIService_ServiceDesc, srv)
}

func _TektonPipelineAPIService_CreateTektonPipeline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateTektonPipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TektonPipelineAPIServiceServer).CreateTektonPipeline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateTektonPipeline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TektonPipelineAPIServiceServer).CreateTektonPipeline(ctx, req.(*CreateTektonPipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TektonPipelineAPIService_DeleteTektonPipeline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteTektonPipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TektonPipelineAPIServiceServer).DeleteTektonPipeline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteTektonPipeline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TektonPipelineAPIServiceServer).DeleteTektonPipeline(ctx, req.(*DeleteTektonPipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// TektonPipelineAPIService_ServiceDesc is the grpc.ServiceDesc for TektonPipelineAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TektonPipelineAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pipelines.tekton.v1alpha1.TektonPipelineAPIService",
	HandlerType: (*TektonPipelineAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateTektonPipeline",
			Handler:    _TektonPipelineAPIService_CreateTektonPipeline_Handler,
		},
		{
			MethodName: "DeleteTektonPipeline",
			Handler:    _TektonPipelineAPIService_DeleteTektonPipeline_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pipelines/tekton/v1alpha1/tekton_api.proto",
}
