// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: accounts/v1alpha1/users/users_api.proto

package users

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

// UserServiceClient is the client API for UserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UserServiceClient interface {
	///AUTH
	CreateUser(ctx context.Context, in *CreateUserRequest, opts ...grpc.CallOption) (*CreateUserResponse, error)
	ListUser(ctx context.Context, in *ListUserRequest, opts ...grpc.CallOption) (*ListUserResponse, error)
	GetOneUser(ctx context.Context, in *GetOneUserRequest, opts ...grpc.CallOption) (*GetOneUserResponse, error)
	UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error)
	DeleteUser(ctx context.Context, in *DeleteUserRequest, opts ...grpc.CallOption) (*DeleteUserResponse, error)
	ListUserPagination(ctx context.Context, in *ListUserPaginationRequest, opts ...grpc.CallOption) (*ListUserPaginationResponse, error)
	//invitation
	SendInvitationUser(ctx context.Context, in *SendInvitationUserRequest, opts ...grpc.CallOption) (*SendInvitationUserResponse, error)
	GetInvitationUser(ctx context.Context, in *GetInvitationUserRequest, opts ...grpc.CallOption) (*GetInvitationUserResponse, error)
	AgreeInvitationUser(ctx context.Context, in *AgreeInvitationUserRequest, opts ...grpc.CallOption) (*AgreeInvitationUserResponse, error)
	ListInvitationUser(ctx context.Context, in *ListInvitationUserRequest, opts ...grpc.CallOption) (*ListInvitationUserResponse, error)
	//CHECK USER
	CheckUser(ctx context.Context, in *CheckUserRequest, opts ...grpc.CallOption) (*CheckUserResponse, error)
	SendVerificationEmail(ctx context.Context, in *SendVerificationEmailRequest, opts ...grpc.CallOption) (*SendVerificationEmailResponse, error)
	VerifyEmail(ctx context.Context, in *VerifyEmailRequest, opts ...grpc.CallOption) (*VerifyEmailResponse, error)
	//FILTER
	GetUsersEmailFilter(ctx context.Context, in *GetUsersEmailFilterRequest, opts ...grpc.CallOption) (*GetUsersEmailFilterResponse, error)
	//DEX
	GetListUserDex(ctx context.Context, in *GetListUserDexRequest, opts ...grpc.CallOption) (*GetListUserDexResponse, error)
	GetOneUserDex(ctx context.Context, in *GetOneUserDexRequest, opts ...grpc.CallOption) (*GetOneUserDexResponse, error)
}

type userServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserServiceClient(cc grpc.ClientConnInterface) UserServiceClient {
	return &userServiceClient{cc}
}

func (c *userServiceClient) CreateUser(ctx context.Context, in *CreateUserRequest, opts ...grpc.CallOption) (*CreateUserResponse, error) {
	out := new(CreateUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/CreateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ListUser(ctx context.Context, in *ListUserRequest, opts ...grpc.CallOption) (*ListUserResponse, error) {
	out := new(ListUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/ListUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetOneUser(ctx context.Context, in *GetOneUserRequest, opts ...grpc.CallOption) (*GetOneUserResponse, error) {
	out := new(GetOneUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/GetOneUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error) {
	out := new(UpdateUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/UpdateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) DeleteUser(ctx context.Context, in *DeleteUserRequest, opts ...grpc.CallOption) (*DeleteUserResponse, error) {
	out := new(DeleteUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/DeleteUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ListUserPagination(ctx context.Context, in *ListUserPaginationRequest, opts ...grpc.CallOption) (*ListUserPaginationResponse, error) {
	out := new(ListUserPaginationResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/ListUserPagination", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) SendInvitationUser(ctx context.Context, in *SendInvitationUserRequest, opts ...grpc.CallOption) (*SendInvitationUserResponse, error) {
	out := new(SendInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/SendInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetInvitationUser(ctx context.Context, in *GetInvitationUserRequest, opts ...grpc.CallOption) (*GetInvitationUserResponse, error) {
	out := new(GetInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/GetInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) AgreeInvitationUser(ctx context.Context, in *AgreeInvitationUserRequest, opts ...grpc.CallOption) (*AgreeInvitationUserResponse, error) {
	out := new(AgreeInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/AgreeInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ListInvitationUser(ctx context.Context, in *ListInvitationUserRequest, opts ...grpc.CallOption) (*ListInvitationUserResponse, error) {
	out := new(ListInvitationUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/ListInvitationUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) CheckUser(ctx context.Context, in *CheckUserRequest, opts ...grpc.CallOption) (*CheckUserResponse, error) {
	out := new(CheckUserResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/CheckUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) SendVerificationEmail(ctx context.Context, in *SendVerificationEmailRequest, opts ...grpc.CallOption) (*SendVerificationEmailResponse, error) {
	out := new(SendVerificationEmailResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/SendVerificationEmail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) VerifyEmail(ctx context.Context, in *VerifyEmailRequest, opts ...grpc.CallOption) (*VerifyEmailResponse, error) {
	out := new(VerifyEmailResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/VerifyEmail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetUsersEmailFilter(ctx context.Context, in *GetUsersEmailFilterRequest, opts ...grpc.CallOption) (*GetUsersEmailFilterResponse, error) {
	out := new(GetUsersEmailFilterResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/GetUsersEmailFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetListUserDex(ctx context.Context, in *GetListUserDexRequest, opts ...grpc.CallOption) (*GetListUserDexResponse, error) {
	out := new(GetListUserDexResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/GetListUserDex", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetOneUserDex(ctx context.Context, in *GetOneUserDexRequest, opts ...grpc.CallOption) (*GetOneUserDexResponse, error) {
	out := new(GetOneUserDexResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.users.v1.UserService/GetOneUserDex", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServiceServer is the server API for UserService service.
// All implementations should embed UnimplementedUserServiceServer
// for forward compatibility
type UserServiceServer interface {
	///AUTH
	CreateUser(context.Context, *CreateUserRequest) (*CreateUserResponse, error)
	ListUser(context.Context, *ListUserRequest) (*ListUserResponse, error)
	GetOneUser(context.Context, *GetOneUserRequest) (*GetOneUserResponse, error)
	UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error)
	DeleteUser(context.Context, *DeleteUserRequest) (*DeleteUserResponse, error)
	ListUserPagination(context.Context, *ListUserPaginationRequest) (*ListUserPaginationResponse, error)
	//invitation
	SendInvitationUser(context.Context, *SendInvitationUserRequest) (*SendInvitationUserResponse, error)
	GetInvitationUser(context.Context, *GetInvitationUserRequest) (*GetInvitationUserResponse, error)
	AgreeInvitationUser(context.Context, *AgreeInvitationUserRequest) (*AgreeInvitationUserResponse, error)
	ListInvitationUser(context.Context, *ListInvitationUserRequest) (*ListInvitationUserResponse, error)
	//CHECK USER
	CheckUser(context.Context, *CheckUserRequest) (*CheckUserResponse, error)
	SendVerificationEmail(context.Context, *SendVerificationEmailRequest) (*SendVerificationEmailResponse, error)
	VerifyEmail(context.Context, *VerifyEmailRequest) (*VerifyEmailResponse, error)
	//FILTER
	GetUsersEmailFilter(context.Context, *GetUsersEmailFilterRequest) (*GetUsersEmailFilterResponse, error)
	//DEX
	GetListUserDex(context.Context, *GetListUserDexRequest) (*GetListUserDexResponse, error)
	GetOneUserDex(context.Context, *GetOneUserDexRequest) (*GetOneUserDexResponse, error)
}

// UnimplementedUserServiceServer should be embedded to have forward compatible implementations.
type UnimplementedUserServiceServer struct {
}

func (UnimplementedUserServiceServer) CreateUser(context.Context, *CreateUserRequest) (*CreateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (UnimplementedUserServiceServer) ListUser(context.Context, *ListUserRequest) (*ListUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUser not implemented")
}
func (UnimplementedUserServiceServer) GetOneUser(context.Context, *GetOneUserRequest) (*GetOneUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneUser not implemented")
}
func (UnimplementedUserServiceServer) UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUser not implemented")
}
func (UnimplementedUserServiceServer) DeleteUser(context.Context, *DeleteUserRequest) (*DeleteUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUser not implemented")
}
func (UnimplementedUserServiceServer) ListUserPagination(context.Context, *ListUserPaginationRequest) (*ListUserPaginationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUserPagination not implemented")
}
func (UnimplementedUserServiceServer) SendInvitationUser(context.Context, *SendInvitationUserRequest) (*SendInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendInvitationUser not implemented")
}
func (UnimplementedUserServiceServer) GetInvitationUser(context.Context, *GetInvitationUserRequest) (*GetInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInvitationUser not implemented")
}
func (UnimplementedUserServiceServer) AgreeInvitationUser(context.Context, *AgreeInvitationUserRequest) (*AgreeInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AgreeInvitationUser not implemented")
}
func (UnimplementedUserServiceServer) ListInvitationUser(context.Context, *ListInvitationUserRequest) (*ListInvitationUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListInvitationUser not implemented")
}
func (UnimplementedUserServiceServer) CheckUser(context.Context, *CheckUserRequest) (*CheckUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckUser not implemented")
}
func (UnimplementedUserServiceServer) SendVerificationEmail(context.Context, *SendVerificationEmailRequest) (*SendVerificationEmailResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendVerificationEmail not implemented")
}
func (UnimplementedUserServiceServer) VerifyEmail(context.Context, *VerifyEmailRequest) (*VerifyEmailResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method VerifyEmail not implemented")
}
func (UnimplementedUserServiceServer) GetUsersEmailFilter(context.Context, *GetUsersEmailFilterRequest) (*GetUsersEmailFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUsersEmailFilter not implemented")
}
func (UnimplementedUserServiceServer) GetListUserDex(context.Context, *GetListUserDexRequest) (*GetListUserDexResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListUserDex not implemented")
}
func (UnimplementedUserServiceServer) GetOneUserDex(context.Context, *GetOneUserDexRequest) (*GetOneUserDexResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneUserDex not implemented")
}

// UnsafeUserServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UserServiceServer will
// result in compilation errors.
type UnsafeUserServiceServer interface {
	mustEmbedUnimplementedUserServiceServer()
}

func RegisterUserServiceServer(s grpc.ServiceRegistrar, srv UserServiceServer) {
	s.RegisterService(&UserService_ServiceDesc, srv)
}

func _UserService_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/CreateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).CreateUser(ctx, req.(*CreateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_ListUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ListUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/ListUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ListUser(ctx, req.(*ListUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetOneUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetOneUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/GetOneUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetOneUser(ctx, req.(*GetOneUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/UpdateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).UpdateUser(ctx, req.(*UpdateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_DeleteUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).DeleteUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/DeleteUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).DeleteUser(ctx, req.(*DeleteUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_ListUserPagination_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserPaginationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ListUserPagination(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/ListUserPagination",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ListUserPagination(ctx, req.(*ListUserPaginationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_SendInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).SendInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/SendInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).SendInvitationUser(ctx, req.(*SendInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/GetInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetInvitationUser(ctx, req.(*GetInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_AgreeInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AgreeInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).AgreeInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/AgreeInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).AgreeInvitationUser(ctx, req.(*AgreeInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_ListInvitationUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListInvitationUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ListInvitationUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/ListInvitationUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ListInvitationUser(ctx, req.(*ListInvitationUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_CheckUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).CheckUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/CheckUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).CheckUser(ctx, req.(*CheckUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_SendVerificationEmail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendVerificationEmailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).SendVerificationEmail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/SendVerificationEmail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).SendVerificationEmail(ctx, req.(*SendVerificationEmailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_VerifyEmail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VerifyEmailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).VerifyEmail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/VerifyEmail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).VerifyEmail(ctx, req.(*VerifyEmailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetUsersEmailFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUsersEmailFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetUsersEmailFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/GetUsersEmailFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetUsersEmailFilter(ctx, req.(*GetUsersEmailFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetListUserDex_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetListUserDexRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetListUserDex(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/GetListUserDex",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetListUserDex(ctx, req.(*GetListUserDexRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetOneUserDex_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneUserDexRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetOneUserDex(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.users.v1.UserService/GetOneUserDex",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetOneUserDex(ctx, req.(*GetOneUserDexRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UserService_ServiceDesc is the grpc.ServiceDesc for UserService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UserService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "accounts.v1alpha1.users.v1.UserService",
	HandlerType: (*UserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateUser",
			Handler:    _UserService_CreateUser_Handler,
		},
		{
			MethodName: "ListUser",
			Handler:    _UserService_ListUser_Handler,
		},
		{
			MethodName: "GetOneUser",
			Handler:    _UserService_GetOneUser_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _UserService_UpdateUser_Handler,
		},
		{
			MethodName: "DeleteUser",
			Handler:    _UserService_DeleteUser_Handler,
		},
		{
			MethodName: "ListUserPagination",
			Handler:    _UserService_ListUserPagination_Handler,
		},
		{
			MethodName: "SendInvitationUser",
			Handler:    _UserService_SendInvitationUser_Handler,
		},
		{
			MethodName: "GetInvitationUser",
			Handler:    _UserService_GetInvitationUser_Handler,
		},
		{
			MethodName: "AgreeInvitationUser",
			Handler:    _UserService_AgreeInvitationUser_Handler,
		},
		{
			MethodName: "ListInvitationUser",
			Handler:    _UserService_ListInvitationUser_Handler,
		},
		{
			MethodName: "CheckUser",
			Handler:    _UserService_CheckUser_Handler,
		},
		{
			MethodName: "SendVerificationEmail",
			Handler:    _UserService_SendVerificationEmail_Handler,
		},
		{
			MethodName: "VerifyEmail",
			Handler:    _UserService_VerifyEmail_Handler,
		},
		{
			MethodName: "GetUsersEmailFilter",
			Handler:    _UserService_GetUsersEmailFilter_Handler,
		},
		{
			MethodName: "GetListUserDex",
			Handler:    _UserService_GetListUserDex_Handler,
		},
		{
			MethodName: "GetOneUserDex",
			Handler:    _UserService_GetOneUserDex_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "accounts/v1alpha1/users/users_api.proto",
}