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

// BlockchainAPIServiceClient is the client API for BlockchainAPIService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BlockchainAPIServiceClient interface {
	CreateNetwork(ctx context.Context, in *CreateNetworkRequest, opts ...grpc.CallOption) (*CreateNetworkResponse, error)
	AddPeerToCorporation(ctx context.Context, in *AddPeerToCorporationRequest, opts ...grpc.CallOption) (*AddPeerToCorporationResponse, error)
	GetBlockchains(ctx context.Context, in *GetBlockchainsRequest, opts ...grpc.CallOption) (*GetBlockchainsResponse, error)
	GetBlockchainsByUserId(ctx context.Context, in *GetBlockchainsByUserIdRequest, opts ...grpc.CallOption) (*GetBlockchainsByUserIdResponse, error)
	GetBlockchainById(ctx context.Context, in *GetBlockchainByIdRequest, opts ...grpc.CallOption) (*GetBlockchainByIdResponse, error)
	GetCorporationsByBlockchainId(ctx context.Context, in *GetCorporationsByBlockchainIdRequest, opts ...grpc.CallOption) (*GetCorporationsByBlockchainIdResponse, error)
	SendInvitation(ctx context.Context, in *SendInvitationRequest, opts ...grpc.CallOption) (*SendInvitationResponse, error)
	CreateCorporation(ctx context.Context, in *CreateCorporationRequest, opts ...grpc.CallOption) (*CreateCorporationResponse, error)
	CreateChannel(ctx context.Context, in *CreateChannelRequest, opts ...grpc.CallOption) (*CreateChannelResponse, error)
	GetPeersByCorporationId(ctx context.Context, in *GetPeersByCorporationIdRequest, opts ...grpc.CallOption) (*GetPeersByCorporationIdResponse, error)
	GetOrderersByNetworkId(ctx context.Context, in *GetOrderersByNetworkIdRequest, opts ...grpc.CallOption) (*GetOrderersByNetworkIdResponse, error)
	AddOrdererByNetworkId(ctx context.Context, in *AddOrdererByNetworkIdRequest, opts ...grpc.CallOption) (*AddOrdererByNetworkIdResponse, error)
}

type blockchainAPIServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBlockchainAPIServiceClient(cc grpc.ClientConnInterface) BlockchainAPIServiceClient {
	return &blockchainAPIServiceClient{cc}
}

func (c *blockchainAPIServiceClient) CreateNetwork(ctx context.Context, in *CreateNetworkRequest, opts ...grpc.CallOption) (*CreateNetworkResponse, error) {
	out := new(CreateNetworkResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/CreateNetwork", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) AddPeerToCorporation(ctx context.Context, in *AddPeerToCorporationRequest, opts ...grpc.CallOption) (*AddPeerToCorporationResponse, error) {
	out := new(AddPeerToCorporationResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToCorporation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) GetBlockchains(ctx context.Context, in *GetBlockchainsRequest, opts ...grpc.CallOption) (*GetBlockchainsResponse, error) {
	out := new(GetBlockchainsResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchains", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) GetBlockchainsByUserId(ctx context.Context, in *GetBlockchainsByUserIdRequest, opts ...grpc.CallOption) (*GetBlockchainsByUserIdResponse, error) {
	out := new(GetBlockchainsByUserIdResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainsByUserId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) GetBlockchainById(ctx context.Context, in *GetBlockchainByIdRequest, opts ...grpc.CallOption) (*GetBlockchainByIdResponse, error) {
	out := new(GetBlockchainByIdResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) GetCorporationsByBlockchainId(ctx context.Context, in *GetCorporationsByBlockchainIdRequest, opts ...grpc.CallOption) (*GetCorporationsByBlockchainIdResponse, error) {
	out := new(GetCorporationsByBlockchainIdResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/GetCorporationsByBlockchainId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) SendInvitation(ctx context.Context, in *SendInvitationRequest, opts ...grpc.CallOption) (*SendInvitationResponse, error) {
	out := new(SendInvitationResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/SendInvitation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) CreateCorporation(ctx context.Context, in *CreateCorporationRequest, opts ...grpc.CallOption) (*CreateCorporationResponse, error) {
	out := new(CreateCorporationResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/CreateCorporation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) CreateChannel(ctx context.Context, in *CreateChannelRequest, opts ...grpc.CallOption) (*CreateChannelResponse, error) {
	out := new(CreateChannelResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/CreateChannel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) GetPeersByCorporationId(ctx context.Context, in *GetPeersByCorporationIdRequest, opts ...grpc.CallOption) (*GetPeersByCorporationIdResponse, error) {
	out := new(GetPeersByCorporationIdResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/GetPeersByCorporationId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) GetOrderersByNetworkId(ctx context.Context, in *GetOrderersByNetworkIdRequest, opts ...grpc.CallOption) (*GetOrderersByNetworkIdResponse, error) {
	out := new(GetOrderersByNetworkIdResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/GetOrderersByNetworkId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *blockchainAPIServiceClient) AddOrdererByNetworkId(ctx context.Context, in *AddOrdererByNetworkIdRequest, opts ...grpc.CallOption) (*AddOrdererByNetworkIdResponse, error) {
	out := new(AddOrdererByNetworkIdResponse)
	err := c.cc.Invoke(ctx, "/blockchain.network.v1alpha1.BlockchainAPIService/AddOrdererByNetworkId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BlockchainAPIServiceServer is the server API for BlockchainAPIService service.
// All implementations should embed UnimplementedBlockchainAPIServiceServer
// for forward compatibility
type BlockchainAPIServiceServer interface {
	CreateNetwork(context.Context, *CreateNetworkRequest) (*CreateNetworkResponse, error)
	AddPeerToCorporation(context.Context, *AddPeerToCorporationRequest) (*AddPeerToCorporationResponse, error)
	GetBlockchains(context.Context, *GetBlockchainsRequest) (*GetBlockchainsResponse, error)
	GetBlockchainsByUserId(context.Context, *GetBlockchainsByUserIdRequest) (*GetBlockchainsByUserIdResponse, error)
	GetBlockchainById(context.Context, *GetBlockchainByIdRequest) (*GetBlockchainByIdResponse, error)
	GetCorporationsByBlockchainId(context.Context, *GetCorporationsByBlockchainIdRequest) (*GetCorporationsByBlockchainIdResponse, error)
	SendInvitation(context.Context, *SendInvitationRequest) (*SendInvitationResponse, error)
	CreateCorporation(context.Context, *CreateCorporationRequest) (*CreateCorporationResponse, error)
	CreateChannel(context.Context, *CreateChannelRequest) (*CreateChannelResponse, error)
	GetPeersByCorporationId(context.Context, *GetPeersByCorporationIdRequest) (*GetPeersByCorporationIdResponse, error)
	GetOrderersByNetworkId(context.Context, *GetOrderersByNetworkIdRequest) (*GetOrderersByNetworkIdResponse, error)
	AddOrdererByNetworkId(context.Context, *AddOrdererByNetworkIdRequest) (*AddOrdererByNetworkIdResponse, error)
}

// UnimplementedBlockchainAPIServiceServer should be embedded to have forward compatible implementations.
type UnimplementedBlockchainAPIServiceServer struct {
}

func (UnimplementedBlockchainAPIServiceServer) CreateNetwork(context.Context, *CreateNetworkRequest) (*CreateNetworkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNetwork not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) AddPeerToCorporation(context.Context, *AddPeerToCorporationRequest) (*AddPeerToCorporationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddPeerToCorporation not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) GetBlockchains(context.Context, *GetBlockchainsRequest) (*GetBlockchainsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBlockchains not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) GetBlockchainsByUserId(context.Context, *GetBlockchainsByUserIdRequest) (*GetBlockchainsByUserIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBlockchainsByUserId not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) GetBlockchainById(context.Context, *GetBlockchainByIdRequest) (*GetBlockchainByIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBlockchainById not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) GetCorporationsByBlockchainId(context.Context, *GetCorporationsByBlockchainIdRequest) (*GetCorporationsByBlockchainIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCorporationsByBlockchainId not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) SendInvitation(context.Context, *SendInvitationRequest) (*SendInvitationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendInvitation not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) CreateCorporation(context.Context, *CreateCorporationRequest) (*CreateCorporationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateCorporation not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) CreateChannel(context.Context, *CreateChannelRequest) (*CreateChannelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateChannel not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) GetPeersByCorporationId(context.Context, *GetPeersByCorporationIdRequest) (*GetPeersByCorporationIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPeersByCorporationId not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) GetOrderersByNetworkId(context.Context, *GetOrderersByNetworkIdRequest) (*GetOrderersByNetworkIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrderersByNetworkId not implemented")
}
func (UnimplementedBlockchainAPIServiceServer) AddOrdererByNetworkId(context.Context, *AddOrdererByNetworkIdRequest) (*AddOrdererByNetworkIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddOrdererByNetworkId not implemented")
}

// UnsafeBlockchainAPIServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BlockchainAPIServiceServer will
// result in compilation errors.
type UnsafeBlockchainAPIServiceServer interface {
	mustEmbedUnimplementedBlockchainAPIServiceServer()
}

func RegisterBlockchainAPIServiceServer(s grpc.ServiceRegistrar, srv BlockchainAPIServiceServer) {
	s.RegisterService(&BlockchainAPIService_ServiceDesc, srv)
}

func _BlockchainAPIService_CreateNetwork_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateNetworkRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).CreateNetwork(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/CreateNetwork",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).CreateNetwork(ctx, req.(*CreateNetworkRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_AddPeerToCorporation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddPeerToCorporationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).AddPeerToCorporation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToCorporation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).AddPeerToCorporation(ctx, req.(*AddPeerToCorporationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_GetBlockchains_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBlockchainsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).GetBlockchains(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchains",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).GetBlockchains(ctx, req.(*GetBlockchainsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_GetBlockchainsByUserId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBlockchainsByUserIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).GetBlockchainsByUserId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainsByUserId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).GetBlockchainsByUserId(ctx, req.(*GetBlockchainsByUserIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_GetBlockchainById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBlockchainByIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).GetBlockchainById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).GetBlockchainById(ctx, req.(*GetBlockchainByIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_GetCorporationsByBlockchainId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCorporationsByBlockchainIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).GetCorporationsByBlockchainId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/GetCorporationsByBlockchainId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).GetCorporationsByBlockchainId(ctx, req.(*GetCorporationsByBlockchainIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_SendInvitation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendInvitationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).SendInvitation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/SendInvitation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).SendInvitation(ctx, req.(*SendInvitationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_CreateCorporation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateCorporationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).CreateCorporation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/CreateCorporation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).CreateCorporation(ctx, req.(*CreateCorporationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_CreateChannel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateChannelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).CreateChannel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/CreateChannel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).CreateChannel(ctx, req.(*CreateChannelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_GetPeersByCorporationId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPeersByCorporationIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).GetPeersByCorporationId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/GetPeersByCorporationId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).GetPeersByCorporationId(ctx, req.(*GetPeersByCorporationIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_GetOrderersByNetworkId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOrderersByNetworkIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).GetOrderersByNetworkId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/GetOrderersByNetworkId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).GetOrderersByNetworkId(ctx, req.(*GetOrderersByNetworkIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BlockchainAPIService_AddOrdererByNetworkId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddOrdererByNetworkIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BlockchainAPIServiceServer).AddOrdererByNetworkId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/blockchain.network.v1alpha1.BlockchainAPIService/AddOrdererByNetworkId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BlockchainAPIServiceServer).AddOrdererByNetworkId(ctx, req.(*AddOrdererByNetworkIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BlockchainAPIService_ServiceDesc is the grpc.ServiceDesc for BlockchainAPIService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BlockchainAPIService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "blockchain.network.v1alpha1.BlockchainAPIService",
	HandlerType: (*BlockchainAPIServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateNetwork",
			Handler:    _BlockchainAPIService_CreateNetwork_Handler,
		},
		{
			MethodName: "AddPeerToCorporation",
			Handler:    _BlockchainAPIService_AddPeerToCorporation_Handler,
		},
		{
			MethodName: "GetBlockchains",
			Handler:    _BlockchainAPIService_GetBlockchains_Handler,
		},
		{
			MethodName: "GetBlockchainsByUserId",
			Handler:    _BlockchainAPIService_GetBlockchainsByUserId_Handler,
		},
		{
			MethodName: "GetBlockchainById",
			Handler:    _BlockchainAPIService_GetBlockchainById_Handler,
		},
		{
			MethodName: "GetCorporationsByBlockchainId",
			Handler:    _BlockchainAPIService_GetCorporationsByBlockchainId_Handler,
		},
		{
			MethodName: "SendInvitation",
			Handler:    _BlockchainAPIService_SendInvitation_Handler,
		},
		{
			MethodName: "CreateCorporation",
			Handler:    _BlockchainAPIService_CreateCorporation_Handler,
		},
		{
			MethodName: "CreateChannel",
			Handler:    _BlockchainAPIService_CreateChannel_Handler,
		},
		{
			MethodName: "GetPeersByCorporationId",
			Handler:    _BlockchainAPIService_GetPeersByCorporationId_Handler,
		},
		{
			MethodName: "GetOrderersByNetworkId",
			Handler:    _BlockchainAPIService_GetOrderersByNetworkId_Handler,
		},
		{
			MethodName: "AddOrdererByNetworkId",
			Handler:    _BlockchainAPIService_AddOrdererByNetworkId_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "blockchain/network/v1alpha1/network_api.proto",
}
