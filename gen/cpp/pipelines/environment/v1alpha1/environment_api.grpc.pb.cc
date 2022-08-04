// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: pipelines/environment/v1alpha1/environment_api.proto

#include "pipelines/environment/v1alpha1/environment_api.pb.h"
#include "pipelines/environment/v1alpha1/environment_api.grpc.pb.h"

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
namespace pipelines {
namespace environment {
namespace v1alpha1 {

static const char* EnvironmentAPIService_method_names[] = {
  "/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateEnvironment",
  "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetOneEnvironment",
  "/pipelines.environment.v1alpha1.EnvironmentAPIService/UpdateEnvironment",
  "/pipelines.environment.v1alpha1.EnvironmentAPIService/ListEnvironment",
  "/pipelines.environment.v1alpha1.EnvironmentAPIService/DeleteEnvironment",
  "/pipelines.environment.v1alpha1.EnvironmentAPIService/GetByNameEnvironment",
};

std::unique_ptr< EnvironmentAPIService::Stub> EnvironmentAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< EnvironmentAPIService::Stub> stub(new EnvironmentAPIService::Stub(channel));
  return stub;
}

EnvironmentAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateEnvironment_(EnvironmentAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetOneEnvironment_(EnvironmentAPIService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_UpdateEnvironment_(EnvironmentAPIService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ListEnvironment_(EnvironmentAPIService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeleteEnvironment_(EnvironmentAPIService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetByNameEnvironment_(EnvironmentAPIService_method_names[5], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status EnvironmentAPIService::Stub::CreateEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::CreateEnvironmentRequest& request, ::pipelines::environment::v1alpha1::CreateEnvironmentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateEnvironment_, context, request, response);
}

void EnvironmentAPIService::Stub::experimental_async::CreateEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::CreateEnvironmentRequest* request, ::pipelines::environment::v1alpha1::CreateEnvironmentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateEnvironment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::CreateEnvironmentResponse>* EnvironmentAPIService::Stub::AsyncCreateEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::CreateEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::CreateEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_CreateEnvironment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::CreateEnvironmentResponse>* EnvironmentAPIService::Stub::PrepareAsyncCreateEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::CreateEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::CreateEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_CreateEnvironment_, context, request, false);
}

::grpc::Status EnvironmentAPIService::Stub::GetOneEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetOneEnvironmentRequest& request, ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetOneEnvironment_, context, request, response);
}

void EnvironmentAPIService::Stub::experimental_async::GetOneEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetOneEnvironmentRequest* request, ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetOneEnvironment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse>* EnvironmentAPIService::Stub::AsyncGetOneEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetOneEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_GetOneEnvironment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse>* EnvironmentAPIService::Stub::PrepareAsyncGetOneEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetOneEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_GetOneEnvironment_, context, request, false);
}

::grpc::Status EnvironmentAPIService::Stub::UpdateEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::UpdateEnvironmentRequest& request, ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_UpdateEnvironment_, context, request, response);
}

void EnvironmentAPIService::Stub::experimental_async::UpdateEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::UpdateEnvironmentRequest* request, ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_UpdateEnvironment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse>* EnvironmentAPIService::Stub::AsyncUpdateEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::UpdateEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_UpdateEnvironment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse>* EnvironmentAPIService::Stub::PrepareAsyncUpdateEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::UpdateEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_UpdateEnvironment_, context, request, false);
}

::grpc::Status EnvironmentAPIService::Stub::ListEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::ListEnvironmentRequest& request, ::pipelines::environment::v1alpha1::ListEnvironmentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ListEnvironment_, context, request, response);
}

void EnvironmentAPIService::Stub::experimental_async::ListEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::ListEnvironmentRequest* request, ::pipelines::environment::v1alpha1::ListEnvironmentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ListEnvironment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::ListEnvironmentResponse>* EnvironmentAPIService::Stub::AsyncListEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::ListEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::ListEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_ListEnvironment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::ListEnvironmentResponse>* EnvironmentAPIService::Stub::PrepareAsyncListEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::ListEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::ListEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_ListEnvironment_, context, request, false);
}

::grpc::Status EnvironmentAPIService::Stub::DeleteEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::DeleteEnvironmentRequest& request, ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeleteEnvironment_, context, request, response);
}

void EnvironmentAPIService::Stub::experimental_async::DeleteEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::DeleteEnvironmentRequest* request, ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeleteEnvironment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse>* EnvironmentAPIService::Stub::AsyncDeleteEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::DeleteEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_DeleteEnvironment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse>* EnvironmentAPIService::Stub::PrepareAsyncDeleteEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::DeleteEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_DeleteEnvironment_, context, request, false);
}

::grpc::Status EnvironmentAPIService::Stub::GetByNameEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetByNameEnvironmentRequest& request, ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetByNameEnvironment_, context, request, response);
}

void EnvironmentAPIService::Stub::experimental_async::GetByNameEnvironment(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetByNameEnvironmentRequest* request, ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetByNameEnvironment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse>* EnvironmentAPIService::Stub::AsyncGetByNameEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetByNameEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_GetByNameEnvironment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse>* EnvironmentAPIService::Stub::PrepareAsyncGetByNameEnvironmentRaw(::grpc::ClientContext* context, const ::pipelines::environment::v1alpha1::GetByNameEnvironmentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse>::Create(channel_.get(), cq, rpcmethod_GetByNameEnvironment_, context, request, false);
}

EnvironmentAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      EnvironmentAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< EnvironmentAPIService::Service, ::pipelines::environment::v1alpha1::CreateEnvironmentRequest, ::pipelines::environment::v1alpha1::CreateEnvironmentResponse>(
          std::mem_fn(&EnvironmentAPIService::Service::CreateEnvironment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      EnvironmentAPIService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< EnvironmentAPIService::Service, ::pipelines::environment::v1alpha1::GetOneEnvironmentRequest, ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse>(
          std::mem_fn(&EnvironmentAPIService::Service::GetOneEnvironment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      EnvironmentAPIService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< EnvironmentAPIService::Service, ::pipelines::environment::v1alpha1::UpdateEnvironmentRequest, ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse>(
          std::mem_fn(&EnvironmentAPIService::Service::UpdateEnvironment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      EnvironmentAPIService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< EnvironmentAPIService::Service, ::pipelines::environment::v1alpha1::ListEnvironmentRequest, ::pipelines::environment::v1alpha1::ListEnvironmentResponse>(
          std::mem_fn(&EnvironmentAPIService::Service::ListEnvironment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      EnvironmentAPIService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< EnvironmentAPIService::Service, ::pipelines::environment::v1alpha1::DeleteEnvironmentRequest, ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse>(
          std::mem_fn(&EnvironmentAPIService::Service::DeleteEnvironment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      EnvironmentAPIService_method_names[5],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< EnvironmentAPIService::Service, ::pipelines::environment::v1alpha1::GetByNameEnvironmentRequest, ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse>(
          std::mem_fn(&EnvironmentAPIService::Service::GetByNameEnvironment), this)));
}

EnvironmentAPIService::Service::~Service() {
}

::grpc::Status EnvironmentAPIService::Service::CreateEnvironment(::grpc::ServerContext* context, const ::pipelines::environment::v1alpha1::CreateEnvironmentRequest* request, ::pipelines::environment::v1alpha1::CreateEnvironmentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status EnvironmentAPIService::Service::GetOneEnvironment(::grpc::ServerContext* context, const ::pipelines::environment::v1alpha1::GetOneEnvironmentRequest* request, ::pipelines::environment::v1alpha1::GetOneEnvironmentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status EnvironmentAPIService::Service::UpdateEnvironment(::grpc::ServerContext* context, const ::pipelines::environment::v1alpha1::UpdateEnvironmentRequest* request, ::pipelines::environment::v1alpha1::UpdateEnvironmentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status EnvironmentAPIService::Service::ListEnvironment(::grpc::ServerContext* context, const ::pipelines::environment::v1alpha1::ListEnvironmentRequest* request, ::pipelines::environment::v1alpha1::ListEnvironmentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status EnvironmentAPIService::Service::DeleteEnvironment(::grpc::ServerContext* context, const ::pipelines::environment::v1alpha1::DeleteEnvironmentRequest* request, ::pipelines::environment::v1alpha1::DeleteEnvironmentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status EnvironmentAPIService::Service::GetByNameEnvironment(::grpc::ServerContext* context, const ::pipelines::environment::v1alpha1::GetByNameEnvironmentRequest* request, ::pipelines::environment::v1alpha1::GetByNameEnvironmentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace pipelines
}  // namespace environment
}  // namespace v1alpha1

