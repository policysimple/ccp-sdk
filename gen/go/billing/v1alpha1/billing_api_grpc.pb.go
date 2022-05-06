// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package billingv1alpha1

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

// BillingServiceClient is the client API for BillingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BillingServiceClient interface {
	CreateBilling(ctx context.Context, in *CreateBillingRequest, opts ...grpc.CallOption) (*CreateBillingResponse, error)
	GetBilling(ctx context.Context, in *GetBillingRequest, opts ...grpc.CallOption) (*GetBillingResponse, error)
	UpdateBilling(ctx context.Context, in *UpdateBillingRequest, opts ...grpc.CallOption) (*UpdateBillingResponse, error)
}

type billingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBillingServiceClient(cc grpc.ClientConnInterface) BillingServiceClient {
	return &billingServiceClient{cc}
}

func (c *billingServiceClient) CreateBilling(ctx context.Context, in *CreateBillingRequest, opts ...grpc.CallOption) (*CreateBillingResponse, error) {
	out := new(CreateBillingResponse)
	err := c.cc.Invoke(ctx, "/billing.v1alpha1.BillingService/CreateBilling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billingServiceClient) GetBilling(ctx context.Context, in *GetBillingRequest, opts ...grpc.CallOption) (*GetBillingResponse, error) {
	out := new(GetBillingResponse)
	err := c.cc.Invoke(ctx, "/billing.v1alpha1.BillingService/GetBilling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *billingServiceClient) UpdateBilling(ctx context.Context, in *UpdateBillingRequest, opts ...grpc.CallOption) (*UpdateBillingResponse, error) {
	out := new(UpdateBillingResponse)
	err := c.cc.Invoke(ctx, "/billing.v1alpha1.BillingService/UpdateBilling", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BillingServiceServer is the server API for BillingService service.
// All implementations should embed UnimplementedBillingServiceServer
// for forward compatibility
type BillingServiceServer interface {
	CreateBilling(context.Context, *CreateBillingRequest) (*CreateBillingResponse, error)
	GetBilling(context.Context, *GetBillingRequest) (*GetBillingResponse, error)
	UpdateBilling(context.Context, *UpdateBillingRequest) (*UpdateBillingResponse, error)
}

// UnimplementedBillingServiceServer should be embedded to have forward compatible implementations.
type UnimplementedBillingServiceServer struct {
}

func (UnimplementedBillingServiceServer) CreateBilling(context.Context, *CreateBillingRequest) (*CreateBillingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateBilling not implemented")
}
func (UnimplementedBillingServiceServer) GetBilling(context.Context, *GetBillingRequest) (*GetBillingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBilling not implemented")
}
func (UnimplementedBillingServiceServer) UpdateBilling(context.Context, *UpdateBillingRequest) (*UpdateBillingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateBilling not implemented")
}

// UnsafeBillingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BillingServiceServer will
// result in compilation errors.
type UnsafeBillingServiceServer interface {
	mustEmbedUnimplementedBillingServiceServer()
}

func RegisterBillingServiceServer(s grpc.ServiceRegistrar, srv BillingServiceServer) {
	s.RegisterService(&BillingService_ServiceDesc, srv)
}

func _BillingService_CreateBilling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateBillingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).CreateBilling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.v1alpha1.BillingService/CreateBilling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).CreateBilling(ctx, req.(*CreateBillingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BillingService_GetBilling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBillingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).GetBilling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.v1alpha1.BillingService/GetBilling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).GetBilling(ctx, req.(*GetBillingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BillingService_UpdateBilling_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateBillingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BillingServiceServer).UpdateBilling(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/billing.v1alpha1.BillingService/UpdateBilling",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BillingServiceServer).UpdateBilling(ctx, req.(*UpdateBillingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BillingService_ServiceDesc is the grpc.ServiceDesc for BillingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BillingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "billing.v1alpha1.BillingService",
	HandlerType: (*BillingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateBilling",
			Handler:    _BillingService_CreateBilling_Handler,
		},
		{
			MethodName: "GetBilling",
			Handler:    _BillingService_GetBilling_Handler,
		},
		{
			MethodName: "UpdateBilling",
			Handler:    _BillingService_UpdateBilling_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "billing/v1alpha1/billing_api.proto",
}