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

// RegistryUsersAPIServiceClient is the client API for RegistryUsersAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RegistryUsersAPIServiceClient interface {
	CreateUserRegistry(ctx context.Context, in *CreateUserRegistryRequest, opts ...grpc.CallOption) (*CreateUserRegistryResponse, error)
	DeleteUserRegistry(ctx context.Context, in *DeleteUserRegistryRequest, opts ...grpc.CallOption) (*DeleteUserRegistryResponse, error)
}

type registryUsersAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewRegistryUsersAPIServiceClient(cc grpc.ClientConnInterface) RegistryUsersAPIServiceClient {
	return &registryUsersAPIServiceClient{cc}
}

func (c *registryUsersAPIServiceClient) CreateUserRegistry(ctx context.Context, in *CreateUserRegistryRequest, opts ...grpc.CallOption) (*CreateUserRegistryResponse, error) {
	out := new(CreateUserRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.users.v1alpha1.RegistryUsersAPIService/CreateUserRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *registryUsersAPIServiceClient) DeleteUserRegistry(ctx context.Context, in *DeleteUserRegistryRequest, opts ...grpc.CallOption) (*DeleteUserRegistryResponse, error) {
	out := new(DeleteUserRegistryResponse)
	err := c.cc.Invoke(ctx, "/artifacts.users.v1alpha1.RegistryUsersAPIService/DeleteUserRegistry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RegistryUsersAPIServiceServer is the server API for RegistryUsersAPIService service.
// All implementations should embed UnimplementedRegistryUsersAPIServiceServer
// for forward compatibility
type RegistryUsersAPIServiceServer interface {
	CreateUserRegistry(context.Context, *CreateUserRegistryRequest) (*CreateUserRegistryResponse, error)
	DeleteUserRegistry(context.Context, *DeleteUserRegistryRequest) (*DeleteUserRegistryResponse, error)
}

// UnimplementedRegistryUsersAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedRegistryUsersAPIServiceServer struct {
}

func (UnimplementedRegistryUsersAPIServiceServer) CreateUserRegistry(context.Context, *CreateUserRegistryRequest) (*CreateUserRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUserRegistry not implemented")
}
func (UnimplementedRegistryUsersAPIServiceServer) DeleteUserRegistry(context.Context, *DeleteUserRegistryRequest) (*DeleteUserRegistryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUserRegistry not implemented")
}

// UnsafeRegistryUsersAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RegistryUsersAPIServiceServer will
// result in compilation errors.
type UnsafeRegistryUsersAPIServiceServer interface {
	mustEmbedUnimplementedRegistryUsersAPIServiceServer()
}

func RegisterRegistryUsersAPIServiceServer(s grpc.ServiceRegistrar, srv RegistryUsersAPIServiceServer) {
	s.RegisterService(&RegistryUsersAPIService_ServiceDesc, srv)
}

func _RegistryUsersAPIService_CreateUserRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateUserRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryUsersAPIServiceServer).CreateUserRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.users.v1alpha1.RegistryUsersAPIService/CreateUserRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryUsersAPIServiceServer).CreateUserRegistry(ctx, req.(*CreateUserRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RegistryUsersAPIService_DeleteUserRegistry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUserRegistryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RegistryUsersAPIServiceServer).DeleteUserRegistry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/artifacts.users.v1alpha1.RegistryUsersAPIService/DeleteUserRegistry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RegistryUsersAPIServiceServer).DeleteUserRegistry(ctx, req.(*DeleteUserRegistryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RegistryUsersAPIService_ServiceDesc is the grpc.ServiceDesc for RegistryUsersAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RegistryUsersAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "artifacts.users.v1alpha1.RegistryUsersAPIService",
	HandlerType: (*RegistryUsersAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateUserRegistry",
			Handler:    _RegistryUsersAPIService_CreateUserRegistry_Handler,
		},
		{
			MethodName: "DeleteUserRegistry",
			Handler:    _RegistryUsersAPIService_DeleteUserRegistry_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "artifacts/users/v1alpha1/registry_users_api.proto",
}