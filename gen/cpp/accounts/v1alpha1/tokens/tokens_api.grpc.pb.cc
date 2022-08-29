// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: accounts/v1alpha1/tokens/tokens_api.proto

#include "accounts/v1alpha1/tokens/tokens_api.pb.h"
#include "accounts/v1alpha1/tokens/tokens_api.grpc.pb.h"

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
namespace tokens {
namespace v1 {

static const char* TokenService_method_names[] = {
  "/accounts.v1alpha1.tokens.v1.TokenService/CreateTokenCCP",
  "/accounts.v1alpha1.tokens.v1.TokenService/GetOneTokenCCP",
  "/accounts.v1alpha1.tokens.v1.TokenService/Logs",
  "/accounts.v1alpha1.tokens.v1.TokenService/SaveLogs",
  "/accounts.v1alpha1.tokens.v1.TokenService/MFA",
  "/accounts.v1alpha1.tokens.v1.TokenService/EnableOrDisableMFA",
};

std::unique_ptr< TokenService::Stub> TokenService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< TokenService::Stub> stub(new TokenService::Stub(channel));
  return stub;
}

TokenService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateTokenCCP_(TokenService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetOneTokenCCP_(TokenService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_Logs_(TokenService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_SaveLogs_(TokenService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_MFA_(TokenService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_EnableOrDisableMFA_(TokenService_method_names[5], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status TokenService::Stub::CreateTokenCCP(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::CreateTokenCCPRequest& request, ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateTokenCCP_, context, request, response);
}

void TokenService::Stub::experimental_async::CreateTokenCCP(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::CreateTokenCCPRequest* request, ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateTokenCCP_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse>* TokenService::Stub::AsyncCreateTokenCCPRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::CreateTokenCCPRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse>::Create(channel_.get(), cq, rpcmethod_CreateTokenCCP_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse>* TokenService::Stub::PrepareAsyncCreateTokenCCPRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::CreateTokenCCPRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse>::Create(channel_.get(), cq, rpcmethod_CreateTokenCCP_, context, request, false);
}

::grpc::Status TokenService::Stub::GetOneTokenCCP(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPRequest& request, ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetOneTokenCCP_, context, request, response);
}

void TokenService::Stub::experimental_async::GetOneTokenCCP(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPRequest* request, ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetOneTokenCCP_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse>* TokenService::Stub::AsyncGetOneTokenCCPRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse>::Create(channel_.get(), cq, rpcmethod_GetOneTokenCCP_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse>* TokenService::Stub::PrepareAsyncGetOneTokenCCPRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse>::Create(channel_.get(), cq, rpcmethod_GetOneTokenCCP_, context, request, false);
}

::grpc::Status TokenService::Stub::Logs(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::LogsRequest& request, ::accounts::v1alpha1::tokens::v1::LogsResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_Logs_, context, request, response);
}

void TokenService::Stub::experimental_async::Logs(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::LogsRequest* request, ::accounts::v1alpha1::tokens::v1::LogsResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Logs_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::LogsResponse>* TokenService::Stub::AsyncLogsRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::LogsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::LogsResponse>::Create(channel_.get(), cq, rpcmethod_Logs_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::LogsResponse>* TokenService::Stub::PrepareAsyncLogsRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::LogsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::LogsResponse>::Create(channel_.get(), cq, rpcmethod_Logs_, context, request, false);
}

::grpc::Status TokenService::Stub::SaveLogs(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::SaveLogsRequest& request, ::accounts::v1alpha1::tokens::v1::SaveLogsResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_SaveLogs_, context, request, response);
}

void TokenService::Stub::experimental_async::SaveLogs(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::SaveLogsRequest* request, ::accounts::v1alpha1::tokens::v1::SaveLogsResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_SaveLogs_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::SaveLogsResponse>* TokenService::Stub::AsyncSaveLogsRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::SaveLogsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::SaveLogsResponse>::Create(channel_.get(), cq, rpcmethod_SaveLogs_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::SaveLogsResponse>* TokenService::Stub::PrepareAsyncSaveLogsRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::SaveLogsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::SaveLogsResponse>::Create(channel_.get(), cq, rpcmethod_SaveLogs_, context, request, false);
}

::grpc::Status TokenService::Stub::MFA(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::MFARequest& request, ::accounts::v1alpha1::tokens::v1::MFAResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_MFA_, context, request, response);
}

void TokenService::Stub::experimental_async::MFA(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::MFARequest* request, ::accounts::v1alpha1::tokens::v1::MFAResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_MFA_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::MFAResponse>* TokenService::Stub::AsyncMFARaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::MFARequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::MFAResponse>::Create(channel_.get(), cq, rpcmethod_MFA_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::MFAResponse>* TokenService::Stub::PrepareAsyncMFARaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::MFARequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::MFAResponse>::Create(channel_.get(), cq, rpcmethod_MFA_, context, request, false);
}

::grpc::Status TokenService::Stub::EnableOrDisableMFA(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFARequest& request, ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_EnableOrDisableMFA_, context, request, response);
}

void TokenService::Stub::experimental_async::EnableOrDisableMFA(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFARequest* request, ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_EnableOrDisableMFA_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse>* TokenService::Stub::AsyncEnableOrDisableMFARaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFARequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse>::Create(channel_.get(), cq, rpcmethod_EnableOrDisableMFA_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse>* TokenService::Stub::PrepareAsyncEnableOrDisableMFARaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFARequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse>::Create(channel_.get(), cq, rpcmethod_EnableOrDisableMFA_, context, request, false);
}

TokenService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      TokenService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< TokenService::Service, ::accounts::v1alpha1::tokens::v1::CreateTokenCCPRequest, ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse>(
          std::mem_fn(&TokenService::Service::CreateTokenCCP), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      TokenService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< TokenService::Service, ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPRequest, ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse>(
          std::mem_fn(&TokenService::Service::GetOneTokenCCP), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      TokenService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< TokenService::Service, ::accounts::v1alpha1::tokens::v1::LogsRequest, ::accounts::v1alpha1::tokens::v1::LogsResponse>(
          std::mem_fn(&TokenService::Service::Logs), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      TokenService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< TokenService::Service, ::accounts::v1alpha1::tokens::v1::SaveLogsRequest, ::accounts::v1alpha1::tokens::v1::SaveLogsResponse>(
          std::mem_fn(&TokenService::Service::SaveLogs), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      TokenService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< TokenService::Service, ::accounts::v1alpha1::tokens::v1::MFARequest, ::accounts::v1alpha1::tokens::v1::MFAResponse>(
          std::mem_fn(&TokenService::Service::MFA), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      TokenService_method_names[5],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< TokenService::Service, ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFARequest, ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse>(
          std::mem_fn(&TokenService::Service::EnableOrDisableMFA), this)));
}

TokenService::Service::~Service() {
}

::grpc::Status TokenService::Service::CreateTokenCCP(::grpc::ServerContext* context, const ::accounts::v1alpha1::tokens::v1::CreateTokenCCPRequest* request, ::accounts::v1alpha1::tokens::v1::CreateTokenCCPResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status TokenService::Service::GetOneTokenCCP(::grpc::ServerContext* context, const ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPRequest* request, ::accounts::v1alpha1::tokens::v1::GetOneTokenCCPResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status TokenService::Service::Logs(::grpc::ServerContext* context, const ::accounts::v1alpha1::tokens::v1::LogsRequest* request, ::accounts::v1alpha1::tokens::v1::LogsResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status TokenService::Service::SaveLogs(::grpc::ServerContext* context, const ::accounts::v1alpha1::tokens::v1::SaveLogsRequest* request, ::accounts::v1alpha1::tokens::v1::SaveLogsResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status TokenService::Service::MFA(::grpc::ServerContext* context, const ::accounts::v1alpha1::tokens::v1::MFARequest* request, ::accounts::v1alpha1::tokens::v1::MFAResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status TokenService::Service::EnableOrDisableMFA(::grpc::ServerContext* context, const ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFARequest* request, ::accounts::v1alpha1::tokens::v1::EnableOrDisableMFAResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace accounts
}  // namespace v1alpha1
}  // namespace tokens
}  // namespace v1
