// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: pipelines/instance/v1alpha1/instance_api.proto

#include "pipelines/instance/v1alpha1/instance_api.pb.h"
#include "pipelines/instance/v1alpha1/instance_api.grpc.pb.h"

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
namespace instance {
namespace v1alpha1 {

static const char* InstanceAPIService_method_names[] = {
  "/pipelines.instance.v1alpha1.InstanceAPIService/CreateInstance",
};

std::unique_ptr< InstanceAPIService::Stub> InstanceAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< InstanceAPIService::Stub> stub(new InstanceAPIService::Stub(channel));
  return stub;
}

InstanceAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CreateInstance_(InstanceAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status InstanceAPIService::Stub::CreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreateInstance_, context, request, response);
}

void InstanceAPIService::Stub::experimental_async::CreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreateInstance_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* InstanceAPIService::Stub::AsyncCreateInstanceRaw(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::instance::v1alpha1::CreateInstanceResponse>::Create(channel_.get(), cq, rpcmethod_CreateInstance_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* InstanceAPIService::Stub::PrepareAsyncCreateInstanceRaw(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::pipelines::instance::v1alpha1::CreateInstanceResponse>::Create(channel_.get(), cq, rpcmethod_CreateInstance_, context, request, false);
}

InstanceAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      InstanceAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< InstanceAPIService::Service, ::pipelines::instance::v1alpha1::CreateInstanceRequest, ::pipelines::instance::v1alpha1::CreateInstanceResponse>(
          std::mem_fn(&InstanceAPIService::Service::CreateInstance), this)));
}

InstanceAPIService::Service::~Service() {
}

::grpc::Status InstanceAPIService::Service::CreateInstance(::grpc::ServerContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace pipelines
}  // namespace instance
}  // namespace v1alpha1
