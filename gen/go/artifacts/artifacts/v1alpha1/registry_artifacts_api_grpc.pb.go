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

// RegistryArtifactsAPIServiceClient is the client API for RegistryArtifactsAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RegistryArtifactsAPIServiceClient interface {
	ListArtifactsRegistry(ctx context.Context, in *ListArtifactsRegistryRequest, opts ...grpc.CallOption) (*ListArtifactsRegistryResponse, error)
}

type registryArtifactsAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewRegistryArtifactsAPIServiceClient(cc grpc.ClientConnInterface) RegistryArtifactsAPIServiceClient {
	return &registryArtifactsAPIServiceClient{cc}
}

func (c *registryArtifactsAPIServiceClient) ListArtifactsRegistry(ctx context.Context, in *ListArtifactsRegistryRequest, opts ...grpc.CallOption) (*ListArtifactsRegistryResponse, error) {
	out := new(ListArtifactsRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/ListArtifactsRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RegistryArtifactsAPIServiceServer is the server API for RegistryArtifactsAPIService service.
// All implementations should embed UnimplementedRegistryArtifactsAPIServiceServer
// for forward compatibility
type RegistryArtifactsAPIServiceServer interface {
	ListArtifactsRegistry(context.Context, *ListArtifactsRegistryRequest) (*ListArtifactsRegistryResponse, error)
}

// UnimplementedRegistryArtifactsAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedRegistryArtifactsAPIServiceServer struct {
}

func (UnimplementedRegistryArtifactsAPIServiceServer) ListArtifactsRegistry(context.Context, *ListArtifactsRegistryRequest) (*ListArtifactsRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListArtifactsRegistry not implemented")
}

// UnsafeRegistryArtifactsAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RegistryArtifactsAPIServiceServer will
// result in compilation errors.
type UnsafeRegistryArtifactsAPIServiceServer interface {
	mustEmbedUnimplementedRegistryArtifactsAPIServiceServer()
}

func RegisterRegistryArtifactsAPIServiceServer(s grpc.ServiceRegistrar, srv RegistryArtifactsAPIServiceServer) {
	s.RegisterService(&RegistryArtifactsAPIService_ServiceDesc, srv)
}

func _RegistryArtifactsAPIService_ListArtifactsRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListArtifactsRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryArtifactsAPIServiceServer).ListArtifactsRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/ListArtifactsRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryArtifactsAPIServiceServer).ListArtifactsRegistry(ctx, req.(*ListArtifactsRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RegistryArtifactsAPIService_ServiceDesc is the grpc.ServiceDesc for RegistryArtifactsAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RegistryArtifactsAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService",
	HandlerType: (*RegistryArtifactsAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListArtifactsRegistry",
			Handler:    _RegistryArtifactsAPIService_ListArtifactsRegistry_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "artifacts/artifacts/v1alpha1/registry_artifacts_api.proto",
}
