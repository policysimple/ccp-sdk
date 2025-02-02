// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: accounts/v1alpha1/permissions/permissions_apis.proto

#include "accounts/v1alpha1/permissions/permissions_apis.pb.h"
#include "accounts/v1alpha1/permissions/permissions_apis.grpc.pb.h"

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
namespace accounts {
namespace v1alpha1 {
namespace permissions {
namespace v1 {

static const char* PermissionService_method_names[] = {
  "/accounts.v1alpha1.permissions.v1.PermissionService/CreatePermission",
  "/accounts.v1alpha1.permissions.v1.PermissionService/ListPermission",
  "/accounts.v1alpha1.permissions.v1.PermissionService/GetOnePermission",
  "/accounts.v1alpha1.permissions.v1.PermissionService/UpdatePermission",
  "/accounts.v1alpha1.permissions.v1.PermissionService/DeletePermission",
};

std::unique_ptr< PermissionService::Stub> PermissionService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< PermissionService::Stub> stub(new PermissionService::Stub(channel));
  return stub;
}

PermissionService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreatePermission_(PermissionService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ListPermission_(PermissionService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetOnePermission_(PermissionService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_UpdatePermission_(PermissionService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeletePermission_(PermissionService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status PermissionService::Stub::CreatePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::CreatePermissionRequest& request, ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreatePermission_, context, request, response);
}

void PermissionService::Stub::experimental_async::CreatePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::CreatePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreatePermission_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse>* PermissionService::Stub::AsyncCreatePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::CreatePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse>::Create(channel_.get(), cq, rpcmethod_CreatePermission_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse>* PermissionService::Stub::PrepareAsyncCreatePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::CreatePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse>::Create(channel_.get(), cq, rpcmethod_CreatePermission_, context, request, false);
}

::grpc::Status PermissionService::Stub::ListPermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::ListPermissionRequest& request, ::accounts::v1alpha1::permissions::v1::ListPermissionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ListPermission_, context, request, response);
}

void PermissionService::Stub::experimental_async::ListPermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::ListPermissionRequest* request, ::accounts::v1alpha1::permissions::v1::ListPermissionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ListPermission_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::ListPermissionResponse>* PermissionService::Stub::AsyncListPermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::ListPermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::ListPermissionResponse>::Create(channel_.get(), cq, rpcmethod_ListPermission_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::ListPermissionResponse>* PermissionService::Stub::PrepareAsyncListPermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::ListPermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::ListPermissionResponse>::Create(channel_.get(), cq, rpcmethod_ListPermission_, context, request, false);
}

::grpc::Status PermissionService::Stub::GetOnePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::GetOnePermissionRequest& request, ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetOnePermission_, context, request, response);
}

void PermissionService::Stub::experimental_async::GetOnePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::GetOnePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetOnePermission_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse>* PermissionService::Stub::AsyncGetOnePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::GetOnePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse>::Create(channel_.get(), cq, rpcmethod_GetOnePermission_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse>* PermissionService::Stub::PrepareAsyncGetOnePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::GetOnePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse>::Create(channel_.get(), cq, rpcmethod_GetOnePermission_, context, request, false);
}

::grpc::Status PermissionService::Stub::UpdatePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::UpdatePermissionRequest& request, ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_UpdatePermission_, context, request, response);
}

void PermissionService::Stub::experimental_async::UpdatePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::UpdatePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_UpdatePermission_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse>* PermissionService::Stub::AsyncUpdatePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::UpdatePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse>::Create(channel_.get(), cq, rpcmethod_UpdatePermission_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse>* PermissionService::Stub::PrepareAsyncUpdatePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::UpdatePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse>::Create(channel_.get(), cq, rpcmethod_UpdatePermission_, context, request, false);
}

::grpc::Status PermissionService::Stub::DeletePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::DeletePermissionRequest& request, ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeletePermission_, context, request, response);
}

void PermissionService::Stub::experimental_async::DeletePermission(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::DeletePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeletePermission_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse>* PermissionService::Stub::AsyncDeletePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::DeletePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse>::Create(channel_.get(), cq, rpcmethod_DeletePermission_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse>* PermissionService::Stub::PrepareAsyncDeletePermissionRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::permissions::v1::DeletePermissionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse>::Create(channel_.get(), cq, rpcmethod_DeletePermission_, context, request, false);
}

PermissionService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PermissionService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PermissionService::Service, ::accounts::v1alpha1::permissions::v1::CreatePermissionRequest, ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse>(
          std::mem_fn(&PermissionService::Service::CreatePermission), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PermissionService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PermissionService::Service, ::accounts::v1alpha1::permissions::v1::ListPermissionRequest, ::accounts::v1alpha1::permissions::v1::ListPermissionResponse>(
          std::mem_fn(&PermissionService::Service::ListPermission), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PermissionService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PermissionService::Service, ::accounts::v1alpha1::permissions::v1::GetOnePermissionRequest, ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse>(
          std::mem_fn(&PermissionService::Service::GetOnePermission), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PermissionService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PermissionService::Service, ::accounts::v1alpha1::permissions::v1::UpdatePermissionRequest, ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse>(
          std::mem_fn(&PermissionService::Service::UpdatePermission), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PermissionService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PermissionService::Service, ::accounts::v1alpha1::permissions::v1::DeletePermissionRequest, ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse>(
          std::mem_fn(&PermissionService::Service::DeletePermission), this)));
}

PermissionService::Service::~Service() {
}

::grpc::Status PermissionService::Service::CreatePermission(::grpc::ServerContext* context, const ::accounts::v1alpha1::permissions::v1::CreatePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::CreatePermissionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PermissionService::Service::ListPermission(::grpc::ServerContext* context, const ::accounts::v1alpha1::permissions::v1::ListPermissionRequest* request, ::accounts::v1alpha1::permissions::v1::ListPermissionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PermissionService::Service::GetOnePermission(::grpc::ServerContext* context, const ::accounts::v1alpha1::permissions::v1::GetOnePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::GetOnePermissionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PermissionService::Service::UpdatePermission(::grpc::ServerContext* context, const ::accounts::v1alpha1::permissions::v1::UpdatePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::UpdatePermissionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PermissionService::Service::DeletePermission(::grpc::ServerContext* context, const ::accounts::v1alpha1::permissions::v1::DeletePermissionRequest* request, ::accounts::v1alpha1::permissions::v1::DeletePermissionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace accounts
}  // namespace v1alpha1
}  // namespace permissions
}  // namespace v1

