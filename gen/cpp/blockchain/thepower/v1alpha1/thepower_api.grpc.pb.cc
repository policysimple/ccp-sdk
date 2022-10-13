// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: blockchain/thepower/v1alpha1/thepower_api.proto

#include "blockchain/thepower/v1alpha1/thepower_api.pb.h"
#include "blockchain/thepower/v1alpha1/thepower_api.grpc.pb.h"

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
namespace thepower {
namespace v1alpha1 {

static const char* BlockchainThePowerService_method_names[] = {
  "/blockchain.thepower.v1alpha1.BlockchainThePowerService/CreateTpChain",
  "/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChains",
  "/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainsByUserId",
  "/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainById",
};

std::unique_ptr< BlockchainThePowerService::Stub> BlockchainThePowerService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< BlockchainThePowerService::Stub> stub(new BlockchainThePowerService::Stub(channel));
  return stub;
}

BlockchainThePowerService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateTpChain_(BlockchainThePowerService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetTpChains_(BlockchainThePowerService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetTpChainsByUserId_(BlockchainThePowerService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetTpChainById_(BlockchainThePowerService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status BlockchainThePowerService::Stub::CreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateTpChain_, context, request, response);
}

void BlockchainThePowerService::Stub::experimental_async::CreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateTpChain_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* BlockchainThePowerService::Stub::AsyncCreateTpChainRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>::Create(channel_.get(), cq, rpcmethod_CreateTpChain_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* BlockchainThePowerService::Stub::PrepareAsyncCreateTpChainRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>::Create(channel_.get(), cq, rpcmethod_CreateTpChain_, context, request, false);
}

::grpc::Status BlockchainThePowerService::Stub::GetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetTpChains_, context, request, response);
}

void BlockchainThePowerService::Stub::experimental_async::GetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetTpChains_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* BlockchainThePowerService::Stub::AsyncGetTpChainsRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>::Create(channel_.get(), cq, rpcmethod_GetTpChains_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* BlockchainThePowerService::Stub::PrepareAsyncGetTpChainsRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>::Create(channel_.get(), cq, rpcmethod_GetTpChains_, context, request, false);
}

::grpc::Status BlockchainThePowerService::Stub::GetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetTpChainsByUserId_, context, request, response);
}

void BlockchainThePowerService::Stub::experimental_async::GetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetTpChainsByUserId_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* BlockchainThePowerService::Stub::AsyncGetTpChainsByUserIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>::Create(channel_.get(), cq, rpcmethod_GetTpChainsByUserId_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* BlockchainThePowerService::Stub::PrepareAsyncGetTpChainsByUserIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>::Create(channel_.get(), cq, rpcmethod_GetTpChainsByUserId_, context, request, false);
}

::grpc::Status BlockchainThePowerService::Stub::GetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetTpChainById_, context, request, response);
}

void BlockchainThePowerService::Stub::experimental_async::GetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetTpChainById_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* BlockchainThePowerService::Stub::AsyncGetTpChainByIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>::Create(channel_.get(), cq, rpcmethod_GetTpChainById_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* BlockchainThePowerService::Stub::PrepareAsyncGetTpChainByIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>::Create(channel_.get(), cq, rpcmethod_GetTpChainById_, context, request, false);
}

BlockchainThePowerService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainThePowerService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainThePowerService::Service, ::blockchain::thepower::v1alpha1::CreateTpChainRequest, ::blockchain::thepower::v1alpha1::CreateTpChainResponse>(
          std::mem_fn(&BlockchainThePowerService::Service::CreateTpChain), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainThePowerService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainThePowerService::Service, ::blockchain::thepower::v1alpha1::GetTpChainsRequest, ::blockchain::thepower::v1alpha1::GetTpChainsResponse>(
          std::mem_fn(&BlockchainThePowerService::Service::GetTpChains), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainThePowerService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainThePowerService::Service, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>(
          std::mem_fn(&BlockchainThePowerService::Service::GetTpChainsByUserId), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BlockchainThePowerService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BlockchainThePowerService::Service, ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>(
          std::mem_fn(&BlockchainThePowerService::Service::GetTpChainById), this)));
}

BlockchainThePowerService::Service::~Service() {
}

::grpc::Status BlockchainThePowerService::Service::CreateTpChain(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status BlockchainThePowerService::Service::GetTpChains(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status BlockchainThePowerService::Service::GetTpChainsByUserId(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status BlockchainThePowerService::Service::GetTpChainById(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace blockchain
}  // namespace thepower
}  // namespace v1alpha1

