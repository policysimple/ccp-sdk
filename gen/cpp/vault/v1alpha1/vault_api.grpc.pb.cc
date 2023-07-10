// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: vault/v1alpha1/vault_api.proto

#include "vault/v1alpha1/vault_api.pb.h"
#include "vault/v1alpha1/vault_api.grpc.pb.h"

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
namespace vault {
namespace v1alpha1 {

static const char* VaultAPIService_method_names[] = {
  "/vault.v1alpha1.VaultAPIService/CreateSecret",
  "/vault.v1alpha1.VaultAPIService/UpdateSecret",
  "/vault.v1alpha1.VaultAPIService/DeleteSecret",
  "/vault.v1alpha1.VaultAPIService/GetSecret",
  "/vault.v1alpha1.VaultAPIService/DeleteOrganization",
  "/vault.v1alpha1.VaultAPIService/SaveTokenIntegrations",
  "/vault.v1alpha1.VaultAPIService/GetTokenIntegrations",
  "/vault.v1alpha1.VaultAPIService/SaveTokenBlockChain",
  "/vault.v1alpha1.VaultAPIService/GetTokenBlockChain",
  "/vault.v1alpha1.VaultAPIService/SaveTokenFirebase",
  "/vault.v1alpha1.VaultAPIService/GetTokenFirebase",
  "/vault.v1alpha1.VaultAPIService/GetSecretsService",
  "/vault.v1alpha1.VaultAPIService/GetSecretsServiceNotification",
};

std::unique_ptr< VaultAPIService::Stub> VaultAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< VaultAPIService::Stub> stub(new VaultAPIService::Stub(channel));
  return stub;
}

VaultAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateSecret_(VaultAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_UpdateSecret_(VaultAPIService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeleteSecret_(VaultAPIService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetSecret_(VaultAPIService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeleteOrganization_(VaultAPIService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_SaveTokenIntegrations_(VaultAPIService_method_names[5], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetTokenIntegrations_(VaultAPIService_method_names[6], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_SaveTokenBlockChain_(VaultAPIService_method_names[7], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetTokenBlockChain_(VaultAPIService_method_names[8], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_SaveTokenFirebase_(VaultAPIService_method_names[9], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetTokenFirebase_(VaultAPIService_method_names[10], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetSecretsService_(VaultAPIService_method_names[11], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetSecretsServiceNotification_(VaultAPIService_method_names[12], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status VaultAPIService::Stub::CreateSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::CreateSecretRequest& request, ::vault::v1alpha1::CreateSecretResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateSecret_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::CreateSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::CreateSecretRequest* request, ::vault::v1alpha1::CreateSecretResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateSecret_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::CreateSecretResponse>* VaultAPIService::Stub::AsyncCreateSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::CreateSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::CreateSecretResponse>::Create(channel_.get(), cq, rpcmethod_CreateSecret_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::CreateSecretResponse>* VaultAPIService::Stub::PrepareAsyncCreateSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::CreateSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::CreateSecretResponse>::Create(channel_.get(), cq, rpcmethod_CreateSecret_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::UpdateSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::UpdateSecretRequest& request, ::vault::v1alpha1::UpdateSecretResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_UpdateSecret_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::UpdateSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::UpdateSecretRequest* request, ::vault::v1alpha1::UpdateSecretResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_UpdateSecret_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::UpdateSecretResponse>* VaultAPIService::Stub::AsyncUpdateSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::UpdateSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::UpdateSecretResponse>::Create(channel_.get(), cq, rpcmethod_UpdateSecret_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::UpdateSecretResponse>* VaultAPIService::Stub::PrepareAsyncUpdateSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::UpdateSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::UpdateSecretResponse>::Create(channel_.get(), cq, rpcmethod_UpdateSecret_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::DeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::vault::v1alpha1::DeleteSecretResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeleteSecret_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::DeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeleteSecret_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>* VaultAPIService::Stub::AsyncDeleteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::DeleteSecretResponse>::Create(channel_.get(), cq, rpcmethod_DeleteSecret_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>* VaultAPIService::Stub::PrepareAsyncDeleteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::DeleteSecretResponse>::Create(channel_.get(), cq, rpcmethod_DeleteSecret_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::GetSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretRequest& request, ::vault::v1alpha1::GetSecretResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetSecret_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::GetSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretRequest* request, ::vault::v1alpha1::GetSecretResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetSecret_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetSecretResponse>* VaultAPIService::Stub::AsyncGetSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetSecretResponse>::Create(channel_.get(), cq, rpcmethod_GetSecret_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetSecretResponse>* VaultAPIService::Stub::PrepareAsyncGetSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetSecretResponse>::Create(channel_.get(), cq, rpcmethod_GetSecret_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::DeleteOrganization(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteOrganizationRequest& request, ::vault::v1alpha1::DeleteOrganizationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeleteOrganization_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::DeleteOrganization(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteOrganizationRequest* request, ::vault::v1alpha1::DeleteOrganizationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeleteOrganization_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteOrganizationResponse>* VaultAPIService::Stub::AsyncDeleteOrganizationRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteOrganizationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::DeleteOrganizationResponse>::Create(channel_.get(), cq, rpcmethod_DeleteOrganization_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteOrganizationResponse>* VaultAPIService::Stub::PrepareAsyncDeleteOrganizationRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteOrganizationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::DeleteOrganizationResponse>::Create(channel_.get(), cq, rpcmethod_DeleteOrganization_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::SaveTokenIntegrations(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenIntegrationsRequest& request, ::vault::v1alpha1::SaveTokenIntegrationsResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_SaveTokenIntegrations_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::SaveTokenIntegrations(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenIntegrationsRequest* request, ::vault::v1alpha1::SaveTokenIntegrationsResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_SaveTokenIntegrations_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::SaveTokenIntegrationsResponse>* VaultAPIService::Stub::AsyncSaveTokenIntegrationsRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenIntegrationsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::SaveTokenIntegrationsResponse>::Create(channel_.get(), cq, rpcmethod_SaveTokenIntegrations_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::SaveTokenIntegrationsResponse>* VaultAPIService::Stub::PrepareAsyncSaveTokenIntegrationsRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenIntegrationsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::SaveTokenIntegrationsResponse>::Create(channel_.get(), cq, rpcmethod_SaveTokenIntegrations_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::GetTokenIntegrations(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenIntegrationsRequest& request, ::vault::v1alpha1::GetTokenIntegrationsResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetTokenIntegrations_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::GetTokenIntegrations(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenIntegrationsRequest* request, ::vault::v1alpha1::GetTokenIntegrationsResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetTokenIntegrations_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetTokenIntegrationsResponse>* VaultAPIService::Stub::AsyncGetTokenIntegrationsRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenIntegrationsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetTokenIntegrationsResponse>::Create(channel_.get(), cq, rpcmethod_GetTokenIntegrations_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetTokenIntegrationsResponse>* VaultAPIService::Stub::PrepareAsyncGetTokenIntegrationsRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenIntegrationsRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetTokenIntegrationsResponse>::Create(channel_.get(), cq, rpcmethod_GetTokenIntegrations_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::SaveTokenBlockChain(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenBlockChainRequest& request, ::vault::v1alpha1::SaveTokenBlockChainResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_SaveTokenBlockChain_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::SaveTokenBlockChain(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenBlockChainRequest* request, ::vault::v1alpha1::SaveTokenBlockChainResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_SaveTokenBlockChain_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::SaveTokenBlockChainResponse>* VaultAPIService::Stub::AsyncSaveTokenBlockChainRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenBlockChainRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::SaveTokenBlockChainResponse>::Create(channel_.get(), cq, rpcmethod_SaveTokenBlockChain_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::SaveTokenBlockChainResponse>* VaultAPIService::Stub::PrepareAsyncSaveTokenBlockChainRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenBlockChainRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::SaveTokenBlockChainResponse>::Create(channel_.get(), cq, rpcmethod_SaveTokenBlockChain_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::GetTokenBlockChain(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenBlockChainRequest& request, ::vault::v1alpha1::GetTokenBlockChainResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetTokenBlockChain_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::GetTokenBlockChain(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenBlockChainRequest* request, ::vault::v1alpha1::GetTokenBlockChainResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetTokenBlockChain_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetTokenBlockChainResponse>* VaultAPIService::Stub::AsyncGetTokenBlockChainRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenBlockChainRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetTokenBlockChainResponse>::Create(channel_.get(), cq, rpcmethod_GetTokenBlockChain_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetTokenBlockChainResponse>* VaultAPIService::Stub::PrepareAsyncGetTokenBlockChainRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenBlockChainRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetTokenBlockChainResponse>::Create(channel_.get(), cq, rpcmethod_GetTokenBlockChain_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::SaveTokenFirebase(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenFirebaseRequest& request, ::vault::v1alpha1::SaveTokenFirebaseResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_SaveTokenFirebase_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::SaveTokenFirebase(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenFirebaseRequest* request, ::vault::v1alpha1::SaveTokenFirebaseResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_SaveTokenFirebase_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::SaveTokenFirebaseResponse>* VaultAPIService::Stub::AsyncSaveTokenFirebaseRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenFirebaseRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::SaveTokenFirebaseResponse>::Create(channel_.get(), cq, rpcmethod_SaveTokenFirebase_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::SaveTokenFirebaseResponse>* VaultAPIService::Stub::PrepareAsyncSaveTokenFirebaseRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::SaveTokenFirebaseRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::SaveTokenFirebaseResponse>::Create(channel_.get(), cq, rpcmethod_SaveTokenFirebase_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::GetTokenFirebase(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenFirebaseRequest& request, ::vault::v1alpha1::GetTokenFirebaseResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetTokenFirebase_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::GetTokenFirebase(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenFirebaseRequest* request, ::vault::v1alpha1::GetTokenFirebaseResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetTokenFirebase_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetTokenFirebaseResponse>* VaultAPIService::Stub::AsyncGetTokenFirebaseRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenFirebaseRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetTokenFirebaseResponse>::Create(channel_.get(), cq, rpcmethod_GetTokenFirebase_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetTokenFirebaseResponse>* VaultAPIService::Stub::PrepareAsyncGetTokenFirebaseRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetTokenFirebaseRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetTokenFirebaseResponse>::Create(channel_.get(), cq, rpcmethod_GetTokenFirebase_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::GetSecretsService(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceRequest& request, ::vault::v1alpha1::GetSecretsServiceResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetSecretsService_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::GetSecretsService(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceRequest* request, ::vault::v1alpha1::GetSecretsServiceResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetSecretsService_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetSecretsServiceResponse>* VaultAPIService::Stub::AsyncGetSecretsServiceRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetSecretsServiceResponse>::Create(channel_.get(), cq, rpcmethod_GetSecretsService_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetSecretsServiceResponse>* VaultAPIService::Stub::PrepareAsyncGetSecretsServiceRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetSecretsServiceResponse>::Create(channel_.get(), cq, rpcmethod_GetSecretsService_, context, request, false);
}

::grpc::Status VaultAPIService::Stub::GetSecretsServiceNotification(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceNotificationRequest& request, ::vault::v1alpha1::GetSecretsServiceNotificationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetSecretsServiceNotification_, context, request, response);
}

void VaultAPIService::Stub::experimental_async::GetSecretsServiceNotification(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceNotificationRequest* request, ::vault::v1alpha1::GetSecretsServiceNotificationResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetSecretsServiceNotification_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetSecretsServiceNotificationResponse>* VaultAPIService::Stub::AsyncGetSecretsServiceNotificationRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceNotificationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetSecretsServiceNotificationResponse>::Create(channel_.get(), cq, rpcmethod_GetSecretsServiceNotification_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::GetSecretsServiceNotificationResponse>* VaultAPIService::Stub::PrepareAsyncGetSecretsServiceNotificationRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::GetSecretsServiceNotificationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::vault::v1alpha1::GetSecretsServiceNotificationResponse>::Create(channel_.get(), cq, rpcmethod_GetSecretsServiceNotification_, context, request, false);
}

VaultAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::CreateSecretRequest, ::vault::v1alpha1::CreateSecretResponse>(
          std::mem_fn(&VaultAPIService::Service::CreateSecret), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::UpdateSecretRequest, ::vault::v1alpha1::UpdateSecretResponse>(
          std::mem_fn(&VaultAPIService::Service::UpdateSecret), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::DeleteSecretRequest, ::vault::v1alpha1::DeleteSecretResponse>(
          std::mem_fn(&VaultAPIService::Service::DeleteSecret), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::GetSecretRequest, ::vault::v1alpha1::GetSecretResponse>(
          std::mem_fn(&VaultAPIService::Service::GetSecret), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::DeleteOrganizationRequest, ::vault::v1alpha1::DeleteOrganizationResponse>(
          std::mem_fn(&VaultAPIService::Service::DeleteOrganization), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[5],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::SaveTokenIntegrationsRequest, ::vault::v1alpha1::SaveTokenIntegrationsResponse>(
          std::mem_fn(&VaultAPIService::Service::SaveTokenIntegrations), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[6],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::GetTokenIntegrationsRequest, ::vault::v1alpha1::GetTokenIntegrationsResponse>(
          std::mem_fn(&VaultAPIService::Service::GetTokenIntegrations), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[7],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::SaveTokenBlockChainRequest, ::vault::v1alpha1::SaveTokenBlockChainResponse>(
          std::mem_fn(&VaultAPIService::Service::SaveTokenBlockChain), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[8],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::GetTokenBlockChainRequest, ::vault::v1alpha1::GetTokenBlockChainResponse>(
          std::mem_fn(&VaultAPIService::Service::GetTokenBlockChain), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[9],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::SaveTokenFirebaseRequest, ::vault::v1alpha1::SaveTokenFirebaseResponse>(
          std::mem_fn(&VaultAPIService::Service::SaveTokenFirebase), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[10],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::GetTokenFirebaseRequest, ::vault::v1alpha1::GetTokenFirebaseResponse>(
          std::mem_fn(&VaultAPIService::Service::GetTokenFirebase), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[11],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::GetSecretsServiceRequest, ::vault::v1alpha1::GetSecretsServiceResponse>(
          std::mem_fn(&VaultAPIService::Service::GetSecretsService), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      VaultAPIService_method_names[12],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< VaultAPIService::Service, ::vault::v1alpha1::GetSecretsServiceNotificationRequest, ::vault::v1alpha1::GetSecretsServiceNotificationResponse>(
          std::mem_fn(&VaultAPIService::Service::GetSecretsServiceNotification), this)));
}

VaultAPIService::Service::~Service() {
}

::grpc::Status VaultAPIService::Service::CreateSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::CreateSecretRequest* request, ::vault::v1alpha1::CreateSecretResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::UpdateSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::UpdateSecretRequest* request, ::vault::v1alpha1::UpdateSecretResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::DeleteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::GetSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::GetSecretRequest* request, ::vault::v1alpha1::GetSecretResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::DeleteOrganization(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteOrganizationRequest* request, ::vault::v1alpha1::DeleteOrganizationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::SaveTokenIntegrations(::grpc::ServerContext* context, const ::vault::v1alpha1::SaveTokenIntegrationsRequest* request, ::vault::v1alpha1::SaveTokenIntegrationsResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::GetTokenIntegrations(::grpc::ServerContext* context, const ::vault::v1alpha1::GetTokenIntegrationsRequest* request, ::vault::v1alpha1::GetTokenIntegrationsResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::SaveTokenBlockChain(::grpc::ServerContext* context, const ::vault::v1alpha1::SaveTokenBlockChainRequest* request, ::vault::v1alpha1::SaveTokenBlockChainResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::GetTokenBlockChain(::grpc::ServerContext* context, const ::vault::v1alpha1::GetTokenBlockChainRequest* request, ::vault::v1alpha1::GetTokenBlockChainResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::SaveTokenFirebase(::grpc::ServerContext* context, const ::vault::v1alpha1::SaveTokenFirebaseRequest* request, ::vault::v1alpha1::SaveTokenFirebaseResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::GetTokenFirebase(::grpc::ServerContext* context, const ::vault::v1alpha1::GetTokenFirebaseRequest* request, ::vault::v1alpha1::GetTokenFirebaseResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::GetSecretsService(::grpc::ServerContext* context, const ::vault::v1alpha1::GetSecretsServiceRequest* request, ::vault::v1alpha1::GetSecretsServiceResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status VaultAPIService::Service::GetSecretsServiceNotification(::grpc::ServerContext* context, const ::vault::v1alpha1::GetSecretsServiceNotificationRequest* request, ::vault::v1alpha1::GetSecretsServiceNotificationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace vault
}  // namespace v1alpha1

