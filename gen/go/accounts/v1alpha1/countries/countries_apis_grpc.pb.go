// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: accounts/v1alpha1/countries/countries_apis.proto

package countries

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

// CountriesServiceClient is the client API for CountriesService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CountriesServiceClient interface {
	ListCountries(ctx context.Context, in *ListCountriesRequest, opts ...grpc.CallOption) (*ListCountriesResponse, error)
	GetOneCountry(ctx context.Context, in *GetOneCountryRequest, opts ...grpc.CallOption) (*GetOneCountryResponse, error)
}

type countriesServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCountriesServiceClient(cc grpc.ClientConnInterface) CountriesServiceClient {
	return &countriesServiceClient{cc}
}

func (c *countriesServiceClient) ListCountries(ctx context.Context, in *ListCountriesRequest, opts ...grpc.CallOption) (*ListCountriesResponse, error) {
	out := new(ListCountriesResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.countries.v1.CountriesService/ListCountries", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *countriesServiceClient) GetOneCountry(ctx context.Context, in *GetOneCountryRequest, opts ...grpc.CallOption) (*GetOneCountryResponse, error) {
	out := new(GetOneCountryResponse)
	err := c.cc.Invoke(ctx, "/accounts.v1alpha1.countries.v1.CountriesService/GetOneCountry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CountriesServiceServer is the server API for CountriesService service.
// All implementations should embed UnimplementedCountriesServiceServer
// for forward compatibility
type CountriesServiceServer interface {
	ListCountries(context.Context, *ListCountriesRequest) (*ListCountriesResponse, error)
	GetOneCountry(context.Context, *GetOneCountryRequest) (*GetOneCountryResponse, error)
}

// UnimplementedCountriesServiceServer should be embedded to have forward compatible implementations.
type UnimplementedCountriesServiceServer struct {
}

func (UnimplementedCountriesServiceServer) ListCountries(context.Context, *ListCountriesRequest) (*ListCountriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListCountries not implemented")
}
func (UnimplementedCountriesServiceServer) GetOneCountry(context.Context, *GetOneCountryRequest) (*GetOneCountryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOneCountry not implemented")
}

// UnsafeCountriesServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CountriesServiceServer will
// result in compilation errors.
type UnsafeCountriesServiceServer interface {
	mustEmbedUnimplementedCountriesServiceServer()
}

func RegisterCountriesServiceServer(s grpc.ServiceRegistrar, srv CountriesServiceServer) {
	s.RegisterService(&CountriesService_ServiceDesc, srv)
}

func _CountriesService_ListCountries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListCountriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CountriesServiceServer).ListCountries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.countries.v1.CountriesService/ListCountries",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CountriesServiceServer).ListCountries(ctx, req.(*ListCountriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CountriesService_GetOneCountry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOneCountryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CountriesServiceServer).GetOneCountry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/accounts.v1alpha1.countries.v1.CountriesService/GetOneCountry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CountriesServiceServer).GetOneCountry(ctx, req.(*GetOneCountryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CountriesService_ServiceDesc is the grpc.ServiceDesc for CountriesService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CountriesService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "accounts.v1alpha1.countries.v1.CountriesService",
	HandlerType: (*CountriesServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListCountries",
			Handler:    _CountriesService_ListCountries_Handler,
		},
		{
			MethodName: "GetOneCountry",
			Handler:    _CountriesService_GetOneCountry_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "accounts/v1alpha1/countries/countries_apis.proto",
}
