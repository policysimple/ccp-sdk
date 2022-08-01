// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

#include "performance/autoscaling/v1alpha1/autoscaling_agent_api.pb.h"
#include "performance/autoscaling/v1alpha1/autoscaling_agent_api.grpc.pb.h"

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
namespace performance {
namespace autoscaling {
namespace v1alpha1 {

static const char* AutoscalingAgentAPIService_method_names[] = {
  "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling",
  "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling",
  "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling",
  "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling",
  "/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling",
};

std::unique_ptr< AutoscalingAgentAPIService::Stub> AutoscalingAgentAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< AutoscalingAgentAPIService::Stub> stub(new AutoscalingAgentAPIService::Stub(channel));
  return stub;
}

AutoscalingAgentAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_AgentCreateAutoscaling_(AutoscalingAgentAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_AgentUpdateAutoscaling_(AutoscalingAgentAPIService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_AgentDeleteAutoscaling_(AutoscalingAgentAPIService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_AgentGetAutoscaling_(AutoscalingAgentAPIService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_AgentListAutoscaling_(AutoscalingAgentAPIService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status AutoscalingAgentAPIService::Stub::AgentCreateAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingRequest& request, ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AgentCreateAutoscaling_, context, request, response);
}

void AutoscalingAgentAPIService::Stub::experimental_async::AgentCreateAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AgentCreateAutoscaling_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse>* AutoscalingAgentAPIService::Stub::AsyncAgentCreateAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentCreateAutoscaling_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse>* AutoscalingAgentAPIService::Stub::PrepareAsyncAgentCreateAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentCreateAutoscaling_, context, request, false);
}

::grpc::Status AutoscalingAgentAPIService::Stub::AgentUpdateAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingRequest& request, ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AgentUpdateAutoscaling_, context, request, response);
}

void AutoscalingAgentAPIService::Stub::experimental_async::AgentUpdateAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AgentUpdateAutoscaling_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse>* AutoscalingAgentAPIService::Stub::AsyncAgentUpdateAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentUpdateAutoscaling_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse>* AutoscalingAgentAPIService::Stub::PrepareAsyncAgentUpdateAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentUpdateAutoscaling_, context, request, false);
}

::grpc::Status AutoscalingAgentAPIService::Stub::AgentDeleteAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingRequest& request, ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AgentDeleteAutoscaling_, context, request, response);
}

void AutoscalingAgentAPIService::Stub::experimental_async::AgentDeleteAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AgentDeleteAutoscaling_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse>* AutoscalingAgentAPIService::Stub::AsyncAgentDeleteAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentDeleteAutoscaling_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse>* AutoscalingAgentAPIService::Stub::PrepareAsyncAgentDeleteAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentDeleteAutoscaling_, context, request, false);
}

::grpc::Status AutoscalingAgentAPIService::Stub::AgentGetAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentGetAutoscalingRequest& request, ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AgentGetAutoscaling_, context, request, response);
}

void AutoscalingAgentAPIService::Stub::experimental_async::AgentGetAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentGetAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AgentGetAutoscaling_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse>* AutoscalingAgentAPIService::Stub::AsyncAgentGetAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentGetAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentGetAutoscaling_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse>* AutoscalingAgentAPIService::Stub::PrepareAsyncAgentGetAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentGetAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentGetAutoscaling_, context, request, false);
}

::grpc::Status AutoscalingAgentAPIService::Stub::AgentListAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentListAutoscalingRequest& request, ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_AgentListAutoscaling_, context, request, response);
}

void AutoscalingAgentAPIService::Stub::experimental_async::AgentListAutoscaling(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentListAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_AgentListAutoscaling_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse>* AutoscalingAgentAPIService::Stub::AsyncAgentListAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentListAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentListAutoscaling_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse>* AutoscalingAgentAPIService::Stub::PrepareAsyncAgentListAutoscalingRaw(::grpc::ClientContext* context, const ::performance::autoscaling::v1alpha1::AgentListAutoscalingRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse>::Create(channel_.get(), cq, rpcmethod_AgentListAutoscaling_, context, request, false);
}

AutoscalingAgentAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      AutoscalingAgentAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< AutoscalingAgentAPIService::Service, ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingRequest, ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse>(
          std::mem_fn(&AutoscalingAgentAPIService::Service::AgentCreateAutoscaling), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      AutoscalingAgentAPIService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< AutoscalingAgentAPIService::Service, ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingRequest, ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse>(
          std::mem_fn(&AutoscalingAgentAPIService::Service::AgentUpdateAutoscaling), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      AutoscalingAgentAPIService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< AutoscalingAgentAPIService::Service, ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingRequest, ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse>(
          std::mem_fn(&AutoscalingAgentAPIService::Service::AgentDeleteAutoscaling), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      AutoscalingAgentAPIService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< AutoscalingAgentAPIService::Service, ::performance::autoscaling::v1alpha1::AgentGetAutoscalingRequest, ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse>(
          std::mem_fn(&AutoscalingAgentAPIService::Service::AgentGetAutoscaling), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      AutoscalingAgentAPIService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< AutoscalingAgentAPIService::Service, ::performance::autoscaling::v1alpha1::AgentListAutoscalingRequest, ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse>(
          std::mem_fn(&AutoscalingAgentAPIService::Service::AgentListAutoscaling), this)));
}

AutoscalingAgentAPIService::Service::~Service() {
}

::grpc::Status AutoscalingAgentAPIService::Service::AgentCreateAutoscaling(::grpc::ServerContext* context, const ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentCreateAutoscalingResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status AutoscalingAgentAPIService::Service::AgentUpdateAutoscaling(::grpc::ServerContext* context, const ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentUpdateAutoscalingResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status AutoscalingAgentAPIService::Service::AgentDeleteAutoscaling(::grpc::ServerContext* context, const ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentDeleteAutoscalingResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status AutoscalingAgentAPIService::Service::AgentGetAutoscaling(::grpc::ServerContext* context, const ::performance::autoscaling::v1alpha1::AgentGetAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentGetAutoscalingResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status AutoscalingAgentAPIService::Service::AgentListAutoscaling(::grpc::ServerContext* context, const ::performance::autoscaling::v1alpha1::AgentListAutoscalingRequest* request, ::performance::autoscaling::v1alpha1::AgentListAutoscalingResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace performance
}  // namespace autoscaling
}  // namespace v1alpha1

