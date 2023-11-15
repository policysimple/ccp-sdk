// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: artifacts/artifacts/v1alpha1/registry_artifacts_api.proto

#include "artifacts/artifacts/v1alpha1/registry_artifacts_api.pb.h"
#include "artifacts/artifacts/v1alpha1/registry_artifacts_api.grpc.pb.h"

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
namespace artifacts {
namespace artifacts {
namespace v1alpha1 {

static const char* RegistryArtifactsAPIService_method_names[] = {
  "/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/ListArtifactsRegistry",
};

std::unique_ptr< RegistryArtifactsAPIService::Stub> RegistryArtifactsAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< RegistryArtifactsAPIService::Stub> stub(new RegistryArtifactsAPIService::Stub(channel));
  return stub;
}

RegistryArtifactsAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_ListArtifactsRegistry_(RegistryArtifactsAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status RegistryArtifactsAPIService::Stub::ListArtifactsRegistry(::grpc::ClientContext* context, const ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryRequest& request, ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ListArtifactsRegistry_, context, request, response);
}

void RegistryArtifactsAPIService::Stub::experimental_async::ListArtifactsRegistry(::grpc::ClientContext* context, const ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryRequest* request, ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ListArtifactsRegistry_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse>* RegistryArtifactsAPIService::Stub::AsyncListArtifactsRegistryRaw(::grpc::ClientContext* context, const ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse>::Create(channel_.get(), cq, rpcmethod_ListArtifactsRegistry_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse>* RegistryArtifactsAPIService::Stub::PrepareAsyncListArtifactsRegistryRaw(::grpc::ClientContext* context, const ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse>::Create(channel_.get(), cq, rpcmethod_ListArtifactsRegistry_, context, request, false);
}

RegistryArtifactsAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RegistryArtifactsAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RegistryArtifactsAPIService::Service, ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryRequest, ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse>(
          std::mem_fn(&RegistryArtifactsAPIService::Service::ListArtifactsRegistry), this)));
}

RegistryArtifactsAPIService::Service::~Service() {
}

::grpc::Status RegistryArtifactsAPIService::Service::ListArtifactsRegistry(::grpc::ServerContext* context, const ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryRequest* request, ::artifacts::artifacts::v1alpha1::ListArtifactsRegistryResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace artifacts
}  // namespace artifacts
}  // namespace v1alpha1
