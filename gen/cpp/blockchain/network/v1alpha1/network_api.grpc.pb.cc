// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: blockchain/network/v1alpha1/network_api.proto

#include "blockchain/network/v1alpha1/network_api.pb.h"
#include "blockchain/network/v1alpha1/network_api.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/method_handler_impl.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace blockchain {
namespace network {
namespace v1alpha1 {

static const char* BlockchainAPIService_method_names[] = {
  "/blockchain.network.v1alpha1.BlockchainAPIService/CreateNetwork",
  "/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToOrganization",
  "/blockchain.network.v1alpha1.BlockchainAPIService/CreateChannel",
};

std::unique_ptr< BlockchainAPIService::Stub> BlockchainAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< BlockchainAPIService::Stub> stub(new BlockchainAPIService::Stub(channel));
  return stub;
}

BlockchainAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateNetwork_(BlockchainAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_AddPeerToOrganization_(BlockchainAPIService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_CreateChannel_(BlockchainAPIService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status BlockchainAPIService::Stub::CreateNetwork(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateNetworkRequest& request, ::blockchain::network::v1alpha1::CreateNetworkResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateNetwork_, context, request, response);
}

void BlockchainAPIService::Stub::experimental_async::CreateNetwork(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateNetworkRequest* request, ::blockchain::network::v1alpha1::CreateNetworkResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateNetwork_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::network::v1alpha1::CreateNetworkResponse>* BlockchainAPIService::Stub::AsyncCreateNetworkRaw(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateNetworkRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::network::v1alpha1::CreateNetworkResponse>::Create(channel_.get(), cq, rpcmethod_CreateNetwork_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::network::v1alpha1::CreateNetworkResponse>* BlockchainAPIService::Stub::PrepareAsyncCreateNetworkRaw(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateNetworkRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::network::v1alpha1::CreateNetworkResponse>::Create(channel_.get(), cq, rpcmethod_CreateNetwork_, context, request, false);
}

::grpc::Status BlockchainAPIService::Stub::AddPeerToOrganization(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::AddPeerToOrganizationRequest& request, ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AddPeerToOrganization_, context, request, response);
}

void BlockchainAPIService::Stub::experimental_async::AddPeerToOrganization(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::AddPeerToOrganizationRequest* request, ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AddPeerToOrganization_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse>* BlockchainAPIService::Stub::AsyncAddPeerToOrganizationRaw(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::AddPeerToOrganizationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse>::Create(channel_.get(), cq, rpcmethod_AddPeerToOrganization_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse>* BlockchainAPIService::Stub::PrepareAsyncAddPeerToOrganizationRaw(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::AddPeerToOrganizationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse>::Create(channel_.get(), cq, rpcmethod_AddPeerToOrganization_, context, request, false);
}

::grpc::Status BlockchainAPIService::Stub::CreateChannel(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateChannelRequest& request, ::blockchain::network::v1alpha1::CreateChannelResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateChannel_, context, request, response);
}

void BlockchainAPIService::Stub::experimental_async::CreateChannel(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateChannelRequest* request, ::blockchain::network::v1alpha1::CreateChannelResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateChannel_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::network::v1alpha1::CreateChannelResponse>* BlockchainAPIService::Stub::AsyncCreateChannelRaw(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateChannelRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::network::v1alpha1::CreateChannelResponse>::Create(channel_.get(), cq, rpcmethod_CreateChannel_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::network::v1alpha1::CreateChannelResponse>* BlockchainAPIService::Stub::PrepareAsyncCreateChannelRaw(::grpc::ClientContext* context, const ::blockchain::network::v1alpha1::CreateChannelRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::network::v1alpha1::CreateChannelResponse>::Create(channel_.get(), cq, rpcmethod_CreateChannel_, context, request, false);
}

BlockchainAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainAPIService::Service, ::blockchain::network::v1alpha1::CreateNetworkRequest, ::blockchain::network::v1alpha1::CreateNetworkResponse>(
          std::mem_fn(&BlockchainAPIService::Service::CreateNetwork), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainAPIService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainAPIService::Service, ::blockchain::network::v1alpha1::AddPeerToOrganizationRequest, ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse>(
          std::mem_fn(&BlockchainAPIService::Service::AddPeerToOrganization), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainAPIService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainAPIService::Service, ::blockchain::network::v1alpha1::CreateChannelRequest, ::blockchain::network::v1alpha1::CreateChannelResponse>(
          std::mem_fn(&BlockchainAPIService::Service::CreateChannel), this)));
}

BlockchainAPIService::Service::~Service() {
}

::grpc::Status BlockchainAPIService::Service::CreateNetwork(::grpc::ServerContext* context, const ::blockchain::network::v1alpha1::CreateNetworkRequest* request, ::blockchain::network::v1alpha1::CreateNetworkResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status BlockchainAPIService::Service::AddPeerToOrganization(::grpc::ServerContext* context, const ::blockchain::network::v1alpha1::AddPeerToOrganizationRequest* request, ::blockchain::network::v1alpha1::AddPeerToOrganizationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status BlockchainAPIService::Service::CreateChannel(::grpc::ServerContext* context, const ::blockchain::network::v1alpha1::CreateChannelRequest* request, ::blockchain::network::v1alpha1::CreateChannelResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace blockchain
}  // namespace network
}  // namespace v1alpha1

