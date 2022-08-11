// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package vaultv1alpha1

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

// VaultAPIServiceClient is the client API for VaultAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type VaultAPIServiceClient interface {
	CreateSecret(ctx context.Context, in *CreateSecretRequest, opts ...grpc.CallOption) (*CreateSecretResponse, error)
	UpdateSecret(ctx context.Context, in *UpdateSecretRequest, opts ...grpc.CallOption) (*UpdateSecretResponse, error)
	DeleteSecret(ctx context.Context, in *DeleteSecretRequest, opts ...grpc.CallOption) (*DeleteSecretResponse, error)
	GetSecret(ctx context.Context, in *GetSecretRequest, opts ...grpc.CallOption) (*GetSecretResponse, error)
	DeleteOrganization(ctx context.Context, in *DeleteOrganizationRequest, opts ...grpc.CallOption) (*DeleteOrganizationResponse, error)
}

type vaultAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewVaultAPIServiceClient(cc grpc.ClientConnInterface) VaultAPIServiceClient {
	return &vaultAPIServiceClient{cc}
}

func (c *vaultAPIServiceClient) CreateSecret(ctx context.Context, in *CreateSecretRequest, opts ...grpc.CallOption) (*CreateSecretResponse, error) {
	out := new(CreateSecretResponse)
	err := c.cc.Invoke(ctx, "/vault.v1alpha1.VaultAPIService/CreateSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *vaultAPIServiceClient) UpdateSecret(ctx context.Context, in *UpdateSecretRequest, opts ...grpc.CallOption) (*UpdateSecretResponse, error) {
	out := new(UpdateSecretResponse)
	err := c.cc.Invoke(ctx, "/vault.v1alpha1.VaultAPIService/UpdateSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *vaultAPIServiceClient) DeleteSecret(ctx context.Context, in *DeleteSecretRequest, opts ...grpc.CallOption) (*DeleteSecretResponse, error) {
	out := new(DeleteSecretResponse)
	err := c.cc.Invoke(ctx, "/vault.v1alpha1.VaultAPIService/DeleteSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *vaultAPIServiceClient) GetSecret(ctx context.Context, in *GetSecretRequest, opts ...grpc.CallOption) (*GetSecretResponse, error) {
	out := new(GetSecretResponse)
	err := c.cc.Invoke(ctx, "/vault.v1alpha1.VaultAPIService/GetSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *vaultAPIServiceClient) DeleteOrganization(ctx context.Context, in *DeleteOrganizationRequest, opts ...grpc.CallOption) (*DeleteOrganizationResponse, error) {
	out := new(DeleteOrganizationResponse)
	err := c.cc.Invoke(ctx, "/vault.v1alpha1.VaultAPIService/DeleteOrganization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VaultAPIServiceServer is the server API for VaultAPIService service.
// All implementations should embed UnimplementedVaultAPIServiceServer
// for forward compatibility
type VaultAPIServiceServer interface {
	CreateSecret(context.Context, *CreateSecretRequest) (*CreateSecretResponse, error)
	UpdateSecret(context.Context, *UpdateSecretRequest) (*UpdateSecretResponse, error)
	DeleteSecret(context.Context, *DeleteSecretRequest) (*DeleteSecretResponse, error)
	GetSecret(context.Context, *GetSecretRequest) (*GetSecretResponse, error)
	DeleteOrganization(context.Context, *DeleteOrganizationRequest) (*DeleteOrganizationResponse, error)
}

// UnimplementedVaultAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedVaultAPIServiceServer struct {
}

func (UnimplementedVaultAPIServiceServer) CreateSecret(context.Context, *CreateSecretRequest) (*CreateSecretResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSecret not implemented")
}
func (UnimplementedVaultAPIServiceServer) UpdateSecret(context.Context, *UpdateSecretRequest) (*UpdateSecretResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSecret not implemented")
}
func (UnimplementedVaultAPIServiceServer) DeleteSecret(context.Context, *DeleteSecretRequest) (*DeleteSecretResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteSecret not implemented")
}
func (UnimplementedVaultAPIServiceServer) GetSecret(context.Context, *GetSecretRequest) (*GetSecretResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSecret not implemented")
}
func (UnimplementedVaultAPIServiceServer) DeleteOrganization(context.Context, *DeleteOrganizationRequest) (*DeleteOrganizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteOrganization not implemented")
}

// UnsafeVaultAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to VaultAPIServiceServer will
// result in compilation errors.
type UnsafeVaultAPIServiceServer interface {
	mustEmbedUnimplementedVaultAPIServiceServer()
}

func RegisterVaultAPIServiceServer(s grpc.ServiceRegistrar, srv VaultAPIServiceServer) {
	s.RegisterService(&VaultAPIService_ServiceDesc, srv)
}

func _VaultAPIService_CreateSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateSecretRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VaultAPIServiceServer).CreateSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vault.v1alpha1.VaultAPIService/CreateSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VaultAPIServiceServer).CreateSecret(ctx, req.(*CreateSecretRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VaultAPIService_UpdateSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateSecretRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VaultAPIServiceServer).UpdateSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vault.v1alpha1.VaultAPIService/UpdateSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VaultAPIServiceServer).UpdateSecret(ctx, req.(*UpdateSecretRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VaultAPIService_DeleteSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteSecretRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VaultAPIServiceServer).DeleteSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vault.v1alpha1.VaultAPIService/DeleteSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VaultAPIServiceServer).DeleteSecret(ctx, req.(*DeleteSecretRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VaultAPIService_GetSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSecretRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VaultAPIServiceServer).GetSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vault.v1alpha1.VaultAPIService/GetSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VaultAPIServiceServer).GetSecret(ctx, req.(*GetSecretRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VaultAPIService_DeleteOrganization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteOrganizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VaultAPIServiceServer).DeleteOrganization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vault.v1alpha1.VaultAPIService/DeleteOrganization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VaultAPIServiceServer).DeleteOrganization(ctx, req.(*DeleteOrganizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// VaultAPIService_ServiceDesc is the grpc.ServiceDesc for VaultAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var VaultAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "vault.v1alpha1.VaultAPIService",
	HandlerType: (*VaultAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateSecret",
			Handler:    _VaultAPIService_CreateSecret_Handler,
		},
		{
			MethodName: "UpdateSecret",
			Handler:    _VaultAPIService_UpdateSecret_Handler,
		},
		{
			MethodName: "DeleteSecret",
			Handler:    _VaultAPIService_DeleteSecret_Handler,
		},
		{
			MethodName: "GetSecret",
			Handler:    _VaultAPIService_GetSecret_Handler,
		},
		{
			MethodName: "DeleteOrganization",
			Handler:    _VaultAPIService_DeleteOrganization_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "vault/v1alpha1/vault_api.proto",
}
