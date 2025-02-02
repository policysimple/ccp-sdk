// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package permissions

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

// PermissionServiceClient is the client API for PermissionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PermissionServiceClient interface {
	CreatePermission(ctx context.Context, in *CreatePermissionRequest, opts ...grpc.CallOption) (*CreatePermissionResponse, error)
	ListPermission(ctx context.Context, in *ListPermissionRequest, opts ...grpc.CallOption) (*ListPermissionResponse, error)
	GetOnePermission(ctx context.Context, in *GetOnePermissionRequest, opts ...grpc.CallOption) (*GetOnePermissionResponse, error)
	UpdatePermission(ctx context.Context, in *UpdatePermissionRequest, opts ...grpc.CallOption) (*UpdatePermissionResponse, error)
	DeletePermission(ctx context.Context, in *DeletePermissionRequest, opts ...grpc.CallOption) (*DeletePermissionResponse, error)
}

type permissionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPermissionServiceClient(cc grpc.ClientConnInterface) PermissionServiceClient {
	return &permissionServiceClient{cc}
}

func (c *permissionServiceClient) CreatePermission(ctx context.Context, in *CreatePermissionRequest, opts ...grpc.CallOption) (*CreatePermissionResponse, error) {
	out := new(CreatePermissionResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.permissions.v1.PermissionService/CreatePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *permissionServiceClient) ListPermission(ctx context.Context, in *ListPermissionRequest, opts ...grpc.CallOption) (*ListPermissionResponse, error) {
	out := new(ListPermissionResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.permissions.v1.PermissionService/ListPermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *permissionServiceClient) GetOnePermission(ctx context.Context, in *GetOnePermissionRequest, opts ...grpc.CallOption) (*GetOnePermissionResponse, error) {
	out := new(GetOnePermissionResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.permissions.v1.PermissionService/GetOnePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *permissionServiceClient) UpdatePermission(ctx context.Context, in *UpdatePermissionRequest, opts ...grpc.CallOption) (*UpdatePermissionResponse, error) {
	out := new(UpdatePermissionResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.permissions.v1.PermissionService/UpdatePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *permissionServiceClient) DeletePermission(ctx context.Context, in *DeletePermissionRequest, opts ...grpc.CallOption) (*DeletePermissionResponse, error) {
	out := new(DeletePermissionResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.permissions.v1.PermissionService/DeletePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PermissionServiceServer is the server API for PermissionService service.
// All implementations should embed UnimplementedPermissionServiceServer
// for forward compatibility
type PermissionServiceServer interface {
	CreatePermission(context.Context, *CreatePermissionRequest) (*CreatePermissionResponse, error)
	ListPermission(context.Context, *ListPermissionRequest) (*ListPermissionResponse, error)
	GetOnePermission(context.Context, *GetOnePermissionRequest) (*GetOnePermissionResponse, error)
	UpdatePermission(context.Context, *UpdatePermissionRequest) (*UpdatePermissionResponse, error)
	DeletePermission(context.Context, *DeletePermissionRequest) (*DeletePermissionResponse, error)
}

// UnimplementedPermissionServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPermissionServiceServer struct {
}

func (UnimplementedPermissionServiceServer) CreatePermission(context.Context, *CreatePermissionRequest) (*CreatePermissionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePermission not implemented")
}
func (UnimplementedPermissionServiceServer) ListPermission(context.Context, *ListPermissionRequest) (*ListPermissionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPermission not implemented")
}
func (UnimplementedPermissionServiceServer) GetOnePermission(context.Context, *GetOnePermissionRequest) (*GetOnePermissionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOnePermission not implemented")
}
func (UnimplementedPermissionServiceServer) UpdatePermission(context.Context, *UpdatePermissionRequest) (*UpdatePermissionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePermission not implemented")
}
func (UnimplementedPermissionServiceServer) DeletePermission(context.Context, *DeletePermissionRequest) (*DeletePermissionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePermission not implemented")
}

// UnsafePermissionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PermissionServiceServer will
// result in compilation errors.
type UnsafePermissionServiceServer interface {
	mustEmbedUnimplementedPermissionServiceServer()
}

func RegisterPermissionServiceServer(s grpc.ServiceRegistrar, srv PermissionServiceServer) {
	s.RegisterService(&PermissionService_ServiceDesc, srv)
}

func _PermissionService_CreatePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePermissionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PermissionServiceServer).CreatePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.permissions.v1.PermissionService/CreatePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PermissionServiceServer).CreatePermission(ctx, req.(*CreatePermissionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PermissionService_ListPermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPermissionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PermissionServiceServer).ListPermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.permissions.v1.PermissionService/ListPermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PermissionServiceServer).ListPermission(ctx, req.(*ListPermissionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PermissionService_GetOnePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOnePermissionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PermissionServiceServer).GetOnePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.permissions.v1.PermissionService/GetOnePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PermissionServiceServer).GetOnePermission(ctx, req.(*GetOnePermissionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PermissionService_UpdatePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePermissionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PermissionServiceServer).UpdatePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.permissions.v1.PermissionService/UpdatePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PermissionServiceServer).UpdatePermission(ctx, req.(*UpdatePermissionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PermissionService_DeletePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePermissionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PermissionServiceServer).DeletePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.permissions.v1.PermissionService/DeletePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PermissionServiceServer).DeletePermission(ctx, req.(*DeletePermissionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PermissionService_ServiceDesc is the grpc.ServiceDesc for PermissionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PermissionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "accounts.v1alpha1.permissions.v1.PermissionService",
	HandlerType: (*PermissionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePermission",
			Handler:    _PermissionService_CreatePermission_Handler,
		},
		{
			MethodName: "ListPermission",
			Handler:    _PermissionService_ListPermission_Handler,
		},
		{
			MethodName: "GetOnePermission",
			Handler:    _PermissionService_GetOnePermission_Handler,
		},
		{
			MethodName: "UpdatePermission",
			Handler:    _PermissionService_UpdatePermission_Handler,
		},
		{
			MethodName: "DeletePermission",
			Handler:    _PermissionService_DeletePermission_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "accounts/v1alpha1/permissions/permissions_apis.proto",
}
