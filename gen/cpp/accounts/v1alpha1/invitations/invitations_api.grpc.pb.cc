// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: accounts/v1alpha1/invitations/invitations_api.proto

#include "accounts/v1alpha1/invitations/invitations_api.pb.h"
#include "accounts/v1alpha1/invitations/invitations_api.grpc.pb.h"

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
namespace invitations {
namespace v1 {

static const char* InvitationService_method_names[] = {
  "/accounts.v1alpha1.invitations.v1.InvitationService/SendInvitationUser",
  "/accounts.v1alpha1.invitations.v1.InvitationService/GetInvitationUser",
  "/accounts.v1alpha1.invitations.v1.InvitationService/AgreeInvitationUser",
  "/accounts.v1alpha1.invitations.v1.InvitationService/ListInvitationSend",
  "/accounts.v1alpha1.invitations.v1.InvitationService/DeleteInvitation",
  "/accounts.v1alpha1.invitations.v1.InvitationService/ReactivateInvitation",
};

std::unique_ptr< InvitationService::Stub> InvitationService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< InvitationService::Stub> stub(new InvitationService::Stub(channel));
  return stub;
}

InvitationService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_SendInvitationUser_(InvitationService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetInvitationUser_(InvitationService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_AgreeInvitationUser_(InvitationService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ListInvitationSend_(InvitationService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeleteInvitation_(InvitationService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ReactivateInvitation_(InvitationService_method_names[5], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status InvitationService::Stub::SendInvitationUser(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::SendInvitationUserRequest& request, ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_SendInvitationUser_, context, request, response);
}

void InvitationService::Stub::experimental_async::SendInvitationUser(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::SendInvitationUserRequest* request, ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_SendInvitationUser_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse>* InvitationService::Stub::AsyncSendInvitationUserRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::SendInvitationUserRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse>::Create(channel_.get(), cq, rpcmethod_SendInvitationUser_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse>* InvitationService::Stub::PrepareAsyncSendInvitationUserRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::SendInvitationUserRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse>::Create(channel_.get(), cq, rpcmethod_SendInvitationUser_, context, request, false);
}

::grpc::Status InvitationService::Stub::GetInvitationUser(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::GetInvitationUserRequest& request, ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetInvitationUser_, context, request, response);
}

void InvitationService::Stub::experimental_async::GetInvitationUser(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::GetInvitationUserRequest* request, ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetInvitationUser_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse>* InvitationService::Stub::AsyncGetInvitationUserRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::GetInvitationUserRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse>::Create(channel_.get(), cq, rpcmethod_GetInvitationUser_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse>* InvitationService::Stub::PrepareAsyncGetInvitationUserRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::GetInvitationUserRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse>::Create(channel_.get(), cq, rpcmethod_GetInvitationUser_, context, request, false);
}

::grpc::Status InvitationService::Stub::AgreeInvitationUser(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserRequest& request, ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AgreeInvitationUser_, context, request, response);
}

void InvitationService::Stub::experimental_async::AgreeInvitationUser(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserRequest* request, ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AgreeInvitationUser_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse>* InvitationService::Stub::AsyncAgreeInvitationUserRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse>::Create(channel_.get(), cq, rpcmethod_AgreeInvitationUser_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse>* InvitationService::Stub::PrepareAsyncAgreeInvitationUserRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse>::Create(channel_.get(), cq, rpcmethod_AgreeInvitationUser_, context, request, false);
}

::grpc::Status InvitationService::Stub::ListInvitationSend(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ListInvitationSendRequest& request, ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ListInvitationSend_, context, request, response);
}

void InvitationService::Stub::experimental_async::ListInvitationSend(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ListInvitationSendRequest* request, ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ListInvitationSend_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse>* InvitationService::Stub::AsyncListInvitationSendRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ListInvitationSendRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse>::Create(channel_.get(), cq, rpcmethod_ListInvitationSend_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse>* InvitationService::Stub::PrepareAsyncListInvitationSendRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ListInvitationSendRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse>::Create(channel_.get(), cq, rpcmethod_ListInvitationSend_, context, request, false);
}

::grpc::Status InvitationService::Stub::DeleteInvitation(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::DeleteInvitationRequest& request, ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeleteInvitation_, context, request, response);
}

void InvitationService::Stub::experimental_async::DeleteInvitation(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::DeleteInvitationRequest* request, ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeleteInvitation_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse>* InvitationService::Stub::AsyncDeleteInvitationRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::DeleteInvitationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse>::Create(channel_.get(), cq, rpcmethod_DeleteInvitation_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse>* InvitationService::Stub::PrepareAsyncDeleteInvitationRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::DeleteInvitationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse>::Create(channel_.get(), cq, rpcmethod_DeleteInvitation_, context, request, false);
}

::grpc::Status InvitationService::Stub::ReactivateInvitation(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ReactivateInvitationRequest& request, ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ReactivateInvitation_, context, request, response);
}

void InvitationService::Stub::experimental_async::ReactivateInvitation(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ReactivateInvitationRequest* request, ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ReactivateInvitation_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse>* InvitationService::Stub::AsyncReactivateInvitationRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ReactivateInvitationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse>::Create(channel_.get(), cq, rpcmethod_ReactivateInvitation_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse>* InvitationService::Stub::PrepareAsyncReactivateInvitationRaw(::grpc::ClientContext* context, const ::accounts::v1alpha1::invitations::v1::ReactivateInvitationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse>::Create(channel_.get(), cq, rpcmethod_ReactivateInvitation_, context, request, false);
}

InvitationService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InvitationService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InvitationService::Service, ::accounts::v1alpha1::invitations::v1::SendInvitationUserRequest, ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse>(
          std::mem_fn(&InvitationService::Service::SendInvitationUser), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InvitationService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InvitationService::Service, ::accounts::v1alpha1::invitations::v1::GetInvitationUserRequest, ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse>(
          std::mem_fn(&InvitationService::Service::GetInvitationUser), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InvitationService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InvitationService::Service, ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserRequest, ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse>(
          std::mem_fn(&InvitationService::Service::AgreeInvitationUser), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InvitationService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InvitationService::Service, ::accounts::v1alpha1::invitations::v1::ListInvitationSendRequest, ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse>(
          std::mem_fn(&InvitationService::Service::ListInvitationSend), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InvitationService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InvitationService::Service, ::accounts::v1alpha1::invitations::v1::DeleteInvitationRequest, ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse>(
          std::mem_fn(&InvitationService::Service::DeleteInvitation), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InvitationService_method_names[5],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InvitationService::Service, ::accounts::v1alpha1::invitations::v1::ReactivateInvitationRequest, ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse>(
          std::mem_fn(&InvitationService::Service::ReactivateInvitation), this)));
}

InvitationService::Service::~Service() {
}

::grpc::Status InvitationService::Service::SendInvitationUser(::grpc::ServerContext* context, const ::accounts::v1alpha1::invitations::v1::SendInvitationUserRequest* request, ::accounts::v1alpha1::invitations::v1::SendInvitationUserResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status InvitationService::Service::GetInvitationUser(::grpc::ServerContext* context, const ::accounts::v1alpha1::invitations::v1::GetInvitationUserRequest* request, ::accounts::v1alpha1::invitations::v1::GetInvitationUserResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status InvitationService::Service::AgreeInvitationUser(::grpc::ServerContext* context, const ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserRequest* request, ::accounts::v1alpha1::invitations::v1::AgreeInvitationUserResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status InvitationService::Service::ListInvitationSend(::grpc::ServerContext* context, const ::accounts::v1alpha1::invitations::v1::ListInvitationSendRequest* request, ::accounts::v1alpha1::invitations::v1::ListInvitationSendResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status InvitationService::Service::DeleteInvitation(::grpc::ServerContext* context, const ::accounts::v1alpha1::invitations::v1::DeleteInvitationRequest* request, ::accounts::v1alpha1::invitations::v1::DeleteInvitationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status InvitationService::Service::ReactivateInvitation(::grpc::ServerContext* context, const ::accounts::v1alpha1::invitations::v1::ReactivateInvitationRequest* request, ::accounts::v1alpha1::invitations::v1::ReactivateInvitationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace accounts
}  // namespace v1alpha1
}  // namespace invitations
}  // namespace v1

