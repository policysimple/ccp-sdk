// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: accounts/v1alpha1/tokens/tokens_api.proto

package tokens

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

// TokenServiceClient is the client API for TokenService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TokenServiceClient interface {
	//TOKEN CCP
	CreateTokenCCP(ctx context.Context, in *CreateTokenCCPRequest, opts ...grpc.CallOption) (*CreateTokenCCPResponse, error)
	GetOneTokenCCP(ctx context.Context, in *GetOneTokenCCPRequest, opts ...grpc.CallOption) (*GetOneTokenCCPResponse, error)
	//Get Users Email filter
	//LOGS REDIS
	Logs(ctx context.Context, in *LogsRequest, opts ...grpc.CallOption) (*LogsResponse, error)
	SaveLogs(ctx context.Context, in *SaveLogsRequest, opts ...grpc.CallOption) (*SaveLogsResponse, error)
	//DOBLE AUTHETICATION
	MFA(ctx context.Context, in *MFARequest, opts ...grpc.CallOption) (*MFAResponse, error)
	EnableOrDisableMFA(ctx context.Context, in *EnableOrDisableMFARequest, opts ...grpc.CallOption) (*EnableOrDisableMFAResponse, error)
}

type tokenServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTokenServiceClient(cc grpc.ClientConnInterface) TokenServiceClient {
	return &tokenServiceClient{cc}
}

func (c *tokenServiceClient) CreateTokenCCP(ctx context.Context, in *CreateTokenCCPRequest, opts ...grpc.CallOption) (*CreateTokenCCPResponse, error) {
	out := new(CreateTokenCCPResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.tokens.v1.TokenService/CreateTokenCCP", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokenServiceClient) GetOneTokenCCP(ctx context.Context, in *GetOneTokenCCPRequest, opts ...grpc.CallOption) (*GetOneTokenCCPResponse, error) {
	out := new(GetOneTokenCCPResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.tokens.v1.TokenService/GetOneTokenCCP", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokenServiceClient) Logs(ctx context.Context, in *LogsRequest, opts ...grpc.CallOption) (*LogsResponse, error) {
	out := new(LogsResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.tokens.v1.TokenService/Logs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokenServiceClient) SaveLogs(ctx context.Context, in *SaveLogsRequest, opts ...grpc.CallOption) (*SaveLogsResponse, error) {
	out := new(SaveLogsResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.tokens.v1.TokenService/SaveLogs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokenServiceClient) MFA(ctx context.Context, in *MFARequest, opts ...grpc.CallOption) (*MFAResponse, error) {
	out := new(MFAResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.tokens.v1.TokenService/MFA", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tokenServiceClient) EnableOrDisableMFA(ctx context.Context, in *EnableOrDisableMFARequest, opts ...grpc.CallOption) (*EnableOrDisableMFAResponse, error) {
	out := new(EnableOrDisableMFAResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.tokens.v1.TokenService/EnableOrDisableMFA", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TokenServiceServer is the server API for TokenService service.
// All implementations should embed UnimplementedTokenServiceServer
// for forward compatibility
type TokenServiceServer interface {
	//TOKEN CCP
	CreateTokenCCP(context.Context, *CreateTokenCCPRequest) (*CreateTokenCCPResponse, error)
	GetOneTokenCCP(context.Context, *GetOneTokenCCPRequest) (*GetOneTokenCCPResponse, error)
	//Get Users Email filter
	//LOGS REDIS
	Logs(context.Context, *LogsRequest) (*LogsResponse, error)
	SaveLogs(context.Context, *SaveLogsRequest) (*SaveLogsResponse, error)
	//DOBLE AUTHETICATION
	MFA(context.Context, *MFARequest) (*MFAResponse, error)
	EnableOrDisableMFA(context.Context, *EnableOrDisableMFARequest) (*EnableOrDisableMFAResponse, error)
}

// UnimplementedTokenServiceServer should be embedded to have forward compatible implementations.
type UnimplementedTokenServiceServer struct {
}

func (UnimplementedTokenServiceServer) CreateTokenCCP(context.Context, *CreateTokenCCPRequest) (*CreateTokenCCPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateTokenCCP not implemented")
}
func (UnimplementedTokenServiceServer) GetOneTokenCCP(context.Context, *GetOneTokenCCPRequest) (*GetOneTokenCCPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneTokenCCP not implemented")
}
func (UnimplementedTokenServiceServer) Logs(context.Context, *LogsRequest) (*LogsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Logs not implemented")
}
func (UnimplementedTokenServiceServer) SaveLogs(context.Context, *SaveLogsRequest) (*SaveLogsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SaveLogs not implemented")
}
func (UnimplementedTokenServiceServer) MFA(context.Context, *MFARequest) (*MFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MFA not implemented")
}
func (UnimplementedTokenServiceServer) EnableOrDisableMFA(context.Context, *EnableOrDisableMFARequest) (*EnableOrDisableMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method EnableOrDisableMFA not implemented")
}

// UnsafeTokenServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TokenServiceServer will
// result in compilation errors.
type UnsafeTokenServiceServer interface {
	mustEmbedUnimplementedTokenServiceServer()
}

func RegisterTokenServiceServer(s grpc.ServiceRegistrar, srv TokenServiceServer) {
	s.RegisterService(&TokenService_ServiceDesc, srv)
}

func _TokenService_CreateTokenCCP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateTokenCCPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokenServiceServer).CreateTokenCCP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.tokens.v1.TokenService/CreateTokenCCP",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokenServiceServer).CreateTokenCCP(ctx, req.(*CreateTokenCCPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TokenService_GetOneTokenCCP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneTokenCCPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokenServiceServer).GetOneTokenCCP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.tokens.v1.TokenService/GetOneTokenCCP",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokenServiceServer).GetOneTokenCCP(ctx, req.(*GetOneTokenCCPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TokenService_Logs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LogsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokenServiceServer).Logs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.tokens.v1.TokenService/Logs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokenServiceServer).Logs(ctx, req.(*LogsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TokenService_SaveLogs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SaveLogsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokenServiceServer).SaveLogs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.tokens.v1.TokenService/SaveLogs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokenServiceServer).SaveLogs(ctx, req.(*SaveLogsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TokenService_MFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokenServiceServer).MFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.tokens.v1.TokenService/MFA",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokenServiceServer).MFA(ctx, req.(*MFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TokenService_EnableOrDisableMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EnableOrDisableMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TokenServiceServer).EnableOrDisableMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.tokens.v1.TokenService/EnableOrDisableMFA",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TokenServiceServer).EnableOrDisableMFA(ctx, req.(*EnableOrDisableMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

// TokenService_ServiceDesc is the grpc.ServiceDesc for TokenService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TokenService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "accounts.v1alpha1.tokens.v1.TokenService",
	HandlerType: (*TokenServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateTokenCCP",
			Handler:    _TokenService_CreateTokenCCP_Handler,
		},
		{
			MethodName: "GetOneTokenCCP",
			Handler:    _TokenService_GetOneTokenCCP_Handler,
		},
		{
			MethodName: "Logs",
			Handler:    _TokenService_Logs_Handler,
		},
		{
			MethodName: "SaveLogs",
			Handler:    _TokenService_SaveLogs_Handler,
		},
		{
			MethodName: "MFA",
			Handler:    _TokenService_MFA_Handler,
		},
		{
			MethodName: "EnableOrDisableMFA",
			Handler:    _TokenService_EnableOrDisableMFA_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "accounts/v1alpha1/tokens/tokens_api.proto",
}