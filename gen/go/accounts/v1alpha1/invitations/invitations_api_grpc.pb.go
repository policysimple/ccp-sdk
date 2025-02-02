// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package invitations

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

// InvitationServiceClient is the client API for InvitationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InvitationServiceClient interface {
	//invitation
	SendInvitationUser(ctx context.Context, in *SendInvitationUserRequest, opts ...grpc.CallOption) (*SendInvitationUserResponse, error)
	GetInvitationUser(ctx context.Context, in *GetInvitationUserRequest, opts ...grpc.CallOption) (*GetInvitationUserResponse, error)
	AgreeInvitationUser(ctx context.Context, in *AgreeInvitationUserRequest, opts ...grpc.CallOption) (*AgreeInvitationUserResponse, error)
	ListInvitationSend(ctx context.Context, in *ListInvitationSendRequest, opts ...grpc.CallOption) (*ListInvitationSendResponse, error)
	DeleteInvitation(ctx context.Context, in *DeleteInvitationRequest, opts ...grpc.CallOption) (*DeleteInvitationResponse, error)
	ReactivateInvitation(ctx context.Context, in *ReactivateInvitationRequest, opts ...grpc.CallOption) (*ReactivateInvitationResponse, error)
}

type invitationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewInvitationServiceClient(cc grpc.ClientConnInterface) InvitationServiceClient {
	return &invitationServiceClient{cc}
}

func (c *invitationServiceClient) SendInvitationUser(ctx context.Context, in *SendInvitationUserRequest, opts ...grpc.CallOption) (*SendInvitationUserResponse, error) {
	out := new(SendInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.invitations.v1.InvitationService/SendInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *invitationServiceClient) GetInvitationUser(ctx context.Context, in *GetInvitationUserRequest, opts ...grpc.CallOption) (*GetInvitationUserResponse, error) {
	out := new(GetInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.invitations.v1.InvitationService/GetInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *invitationServiceClient) AgreeInvitationUser(ctx context.Context, in *AgreeInvitationUserRequest, opts ...grpc.CallOption) (*AgreeInvitationUserResponse, error) {
	out := new(AgreeInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.invitations.v1.InvitationService/AgreeInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *invitationServiceClient) ListInvitationSend(ctx context.Context, in *ListInvitationSendRequest, opts ...grpc.CallOption) (*ListInvitationSendResponse, error) {
	out := new(ListInvitationSendResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.invitations.v1.InvitationService/ListInvitationSend", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *invitationServiceClient) DeleteInvitation(ctx context.Context, in *DeleteInvitationRequest, opts ...grpc.CallOption) (*DeleteInvitationResponse, error) {
	out := new(DeleteInvitationResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.invitations.v1.InvitationService/DeleteInvitation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *invitationServiceClient) ReactivateInvitation(ctx context.Context, in *ReactivateInvitationRequest, opts ...grpc.CallOption) (*ReactivateInvitationResponse, error) {
	out := new(ReactivateInvitationResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.invitations.v1.InvitationService/ReactivateInvitation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InvitationServiceServer is the server API for InvitationService service.
// All implementations should embed UnimplementedInvitationServiceServer
// for forward compatibility
type InvitationServiceServer interface {
	//invitation
	SendInvitationUser(context.Context, *SendInvitationUserRequest) (*SendInvitationUserResponse, error)
	GetInvitationUser(context.Context, *GetInvitationUserRequest) (*GetInvitationUserResponse, error)
	AgreeInvitationUser(context.Context, *AgreeInvitationUserRequest) (*AgreeInvitationUserResponse, error)
	ListInvitationSend(context.Context, *ListInvitationSendRequest) (*ListInvitationSendResponse, error)
	DeleteInvitation(context.Context, *DeleteInvitationRequest) (*DeleteInvitationResponse, error)
	ReactivateInvitation(context.Context, *ReactivateInvitationRequest) (*ReactivateInvitationResponse, error)
}

// UnimplementedInvitationServiceServer should be embedded to have forward compatible implementations.
type UnimplementedInvitationServiceServer struct {
}

func (UnimplementedInvitationServiceServer) SendInvitationUser(context.Context, *SendInvitationUserRequest) (*SendInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendInvitationUser not implemented")
}
func (UnimplementedInvitationServiceServer) GetInvitationUser(context.Context, *GetInvitationUserRequest) (*GetInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInvitationUser not implemented")
}
func (UnimplementedInvitationServiceServer) AgreeInvitationUser(context.Context, *AgreeInvitationUserRequest) (*AgreeInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgreeInvitationUser not implemented")
}
func (UnimplementedInvitationServiceServer) ListInvitationSend(context.Context, *ListInvitationSendRequest) (*ListInvitationSendResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListInvitationSend not implemented")
}
func (UnimplementedInvitationServiceServer) DeleteInvitation(context.Context, *DeleteInvitationRequest) (*DeleteInvitationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteInvitation not implemented")
}
func (UnimplementedInvitationServiceServer) ReactivateInvitation(context.Context, *ReactivateInvitationRequest) (*ReactivateInvitationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReactivateInvitation not implemented")
}

// UnsafeInvitationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InvitationServiceServer will
// result in compilation errors.
type UnsafeInvitationServiceServer interface {
	mustEmbedUnimplementedInvitationServiceServer()
}

func RegisterInvitationServiceServer(s grpc.ServiceRegistrar, srv InvitationServiceServer) {
	s.RegisterService(&InvitationService_ServiceDesc, srv)
}

func _InvitationService_SendInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InvitationServiceServer).SendInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.invitations.v1.InvitationService/SendInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InvitationServiceServer).SendInvitationUser(ctx, req.(*SendInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InvitationService_GetInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InvitationServiceServer).GetInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.invitations.v1.InvitationService/GetInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InvitationServiceServer).GetInvitationUser(ctx, req.(*GetInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InvitationService_AgreeInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgreeInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InvitationServiceServer).AgreeInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.invitations.v1.InvitationService/AgreeInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InvitationServiceServer).AgreeInvitationUser(ctx, req.(*AgreeInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InvitationService_ListInvitationSend_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListInvitationSendRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InvitationServiceServer).ListInvitationSend(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.invitations.v1.InvitationService/ListInvitationSend",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InvitationServiceServer).ListInvitationSend(ctx, req.(*ListInvitationSendRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InvitationService_DeleteInvitation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteInvitationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InvitationServiceServer).DeleteInvitation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.invitations.v1.InvitationService/DeleteInvitation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InvitationServiceServer).DeleteInvitation(ctx, req.(*DeleteInvitationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InvitationService_ReactivateInvitation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReactivateInvitationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InvitationServiceServer).ReactivateInvitation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.invitations.v1.InvitationService/ReactivateInvitation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InvitationServiceServer).ReactivateInvitation(ctx, req.(*ReactivateInvitationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// InvitationService_ServiceDesc is the grpc.ServiceDesc for InvitationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InvitationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "accounts.v1alpha1.invitations.v1.InvitationService",
	HandlerType: (*InvitationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SendInvitationUser",
			Handler:    _InvitationService_SendInvitationUser_Handler,
		},
		{
			MethodName: "GetInvitationUser",
			Handler:    _InvitationService_GetInvitationUser_Handler,
		},
		{
			MethodName: "AgreeInvitationUser",
			Handler:    _InvitationService_AgreeInvitationUser_Handler,
		},
		{
			MethodName: "ListInvitationSend",
			Handler:    _InvitationService_ListInvitationSend_Handler,
		},
		{
			MethodName: "DeleteInvitation",
			Handler:    _InvitationService_DeleteInvitation_Handler,
		},
		{
			MethodName: "ReactivateInvitation",
			Handler:    _InvitationService_ReactivateInvitation_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "accounts/v1alpha1/invitations/invitations_api.proto",
}
