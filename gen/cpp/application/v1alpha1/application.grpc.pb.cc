// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: application/v1alpha1/application.proto

#include "application/v1alpha1/application.pb.h"
#include "application/v1alpha1/application.grpc.pb.h"

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
namespace application {
namespace v1alpha1 {

static const char* ApplicationService_method_names[] = {
  "/application.v1alpha1.ApplicationService/CreateApplication",
  "/application.v1alpha1.ApplicationService/ListApplication",
  "/application.v1alpha1.ApplicationService/GetApplication",
  "/application.v1alpha1.ApplicationService/DeleteApplication",
  "/application.v1alpha1.ApplicationService/UpdateApplication",
};

std::unique_ptr< ApplicationService::Stub> ApplicationService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< ApplicationService::Stub> stub(new ApplicationService::Stub(channel));
  return stub;
}

ApplicationService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateApplication_(ApplicationService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ListApplication_(ApplicationService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetApplication_(ApplicationService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeleteApplication_(ApplicationService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_UpdateApplication_(ApplicationService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status ApplicationService::Stub::CreateApplication(::grpc::ClientContext* context, const ::application::v1alpha1::CreateApplicationRequest& request, ::application::v1alpha1::CreateApplicationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateApplication_, context, request, response);
}

void ApplicationService::Stub::experimental_async::CreateApplication(::grpc::ClientContext* context, const ::application::v1alpha1::CreateApplicationRequest* request, ::application::v1alpha1::CreateApplicationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateApplication_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::CreateApplicationResponse>* ApplicationService::Stub::AsyncCreateApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::CreateApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::CreateApplicationResponse>::Create(channel_.get(), cq, rpcmethod_CreateApplication_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::CreateApplicationResponse>* ApplicationService::Stub::PrepareAsyncCreateApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::CreateApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::CreateApplicationResponse>::Create(channel_.get(), cq, rpcmethod_CreateApplication_, context, request, false);
}

::grpc::Status ApplicationService::Stub::ListApplication(::grpc::ClientContext* context, const ::application::v1alpha1::ListApplicationRequest& request, ::application::v1alpha1::ListApplicationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ListApplication_, context, request, response);
}

void ApplicationService::Stub::experimental_async::ListApplication(::grpc::ClientContext* context, const ::application::v1alpha1::ListApplicationRequest* request, ::application::v1alpha1::ListApplicationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ListApplication_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::ListApplicationResponse>* ApplicationService::Stub::AsyncListApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::ListApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::ListApplicationResponse>::Create(channel_.get(), cq, rpcmethod_ListApplication_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::ListApplicationResponse>* ApplicationService::Stub::PrepareAsyncListApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::ListApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::ListApplicationResponse>::Create(channel_.get(), cq, rpcmethod_ListApplication_, context, request, false);
}

::grpc::Status ApplicationService::Stub::GetApplication(::grpc::ClientContext* context, const ::application::v1alpha1::GetApplicationRequest& request, ::application::v1alpha1::GetApplicationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetApplication_, context, request, response);
}

void ApplicationService::Stub::experimental_async::GetApplication(::grpc::ClientContext* context, const ::application::v1alpha1::GetApplicationRequest* request, ::application::v1alpha1::GetApplicationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetApplication_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::GetApplicationResponse>* ApplicationService::Stub::AsyncGetApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::GetApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::GetApplicationResponse>::Create(channel_.get(), cq, rpcmethod_GetApplication_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::GetApplicationResponse>* ApplicationService::Stub::PrepareAsyncGetApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::GetApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::GetApplicationResponse>::Create(channel_.get(), cq, rpcmethod_GetApplication_, context, request, false);
}

::grpc::Status ApplicationService::Stub::DeleteApplication(::grpc::ClientContext* context, const ::application::v1alpha1::DeleteApplicationRequest& request, ::application::v1alpha1::DeleteApplicationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeleteApplication_, context, request, response);
}

void ApplicationService::Stub::experimental_async::DeleteApplication(::grpc::ClientContext* context, const ::application::v1alpha1::DeleteApplicationRequest* request, ::application::v1alpha1::DeleteApplicationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeleteApplication_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::DeleteApplicationResponse>* ApplicationService::Stub::AsyncDeleteApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::DeleteApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::DeleteApplicationResponse>::Create(channel_.get(), cq, rpcmethod_DeleteApplication_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::DeleteApplicationResponse>* ApplicationService::Stub::PrepareAsyncDeleteApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::DeleteApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::DeleteApplicationResponse>::Create(channel_.get(), cq, rpcmethod_DeleteApplication_, context, request, false);
}

::grpc::Status ApplicationService::Stub::UpdateApplication(::grpc::ClientContext* context, const ::application::v1alpha1::UpdateApplicationRequest& request, ::application::v1alpha1::UpdateApplicationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_UpdateApplication_, context, request, response);
}

void ApplicationService::Stub::experimental_async::UpdateApplication(::grpc::ClientContext* context, const ::application::v1alpha1::UpdateApplicationRequest* request, ::application::v1alpha1::UpdateApplicationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_UpdateApplication_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::UpdateApplicationResponse>* ApplicationService::Stub::AsyncUpdateApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::UpdateApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::UpdateApplicationResponse>::Create(channel_.get(), cq, rpcmethod_UpdateApplication_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::application::v1alpha1::UpdateApplicationResponse>* ApplicationService::Stub::PrepareAsyncUpdateApplicationRaw(::grpc::ClientContext* context, const ::application::v1alpha1::UpdateApplicationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::application::v1alpha1::UpdateApplicationResponse>::Create(channel_.get(), cq, rpcmethod_UpdateApplication_, context, request, false);
}

ApplicationService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ApplicationService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< ApplicationService::Service, ::application::v1alpha1::CreateApplicationRequest, ::application::v1alpha1::CreateApplicationResponse>(
          std::mem_fn(&ApplicationService::Service::CreateApplication), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ApplicationService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< ApplicationService::Service, ::application::v1alpha1::ListApplicationRequest, ::application::v1alpha1::ListApplicationResponse>(
          std::mem_fn(&ApplicationService::Service::ListApplication), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ApplicationService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< ApplicationService::Service, ::application::v1alpha1::GetApplicationRequest, ::application::v1alpha1::GetApplicationResponse>(
          std::mem_fn(&ApplicationService::Service::GetApplication), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ApplicationService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< ApplicationService::Service, ::application::v1alpha1::DeleteApplicationRequest, ::application::v1alpha1::DeleteApplicationResponse>(
          std::mem_fn(&ApplicationService::Service::DeleteApplication), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ApplicationService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< ApplicationService::Service, ::application::v1alpha1::UpdateApplicationRequest, ::application::v1alpha1::UpdateApplicationResponse>(
          std::mem_fn(&ApplicationService::Service::UpdateApplication), this)));
}

ApplicationService::Service::~Service() {
}

::grpc::Status ApplicationService::Service::CreateApplication(::grpc::ServerContext* context, const ::application::v1alpha1::CreateApplicationRequest* request, ::application::v1alpha1::CreateApplicationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status ApplicationService::Service::ListApplication(::grpc::ServerContext* context, const ::application::v1alpha1::ListApplicationRequest* request, ::application::v1alpha1::ListApplicationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status ApplicationService::Service::GetApplication(::grpc::ServerContext* context, const ::application::v1alpha1::GetApplicationRequest* request, ::application::v1alpha1::GetApplicationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status ApplicationService::Service::DeleteApplication(::grpc::ServerContext* context, const ::application::v1alpha1::DeleteApplicationRequest* request, ::application::v1alpha1::DeleteApplicationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status ApplicationService::Service::UpdateApplication(::grpc::ServerContext* context, const ::application::v1alpha1::UpdateApplicationRequest* request, ::application::v1alpha1::UpdateApplicationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace application
}  // namespace v1alpha1

