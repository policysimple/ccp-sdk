// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: payment/v1alpha1/payment_api.proto

#include "payment/v1alpha1/payment_api.pb.h"
#include "payment/v1alpha1/payment_api.grpc.pb.h"

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
namespace payment {
namespace v1alpha1 {

static const char* PaymentAPIService_method_names[] = {
  "/payment.v1alpha1.PaymentAPIService/GetPayment",
  "/payment.v1alpha1.PaymentAPIService/CreatePayment",
  "/payment.v1alpha1.PaymentAPIService/UpdatePayment",
  "/payment.v1alpha1.PaymentAPIService/DeletePayment",
  "/payment.v1alpha1.PaymentAPIService/ListPayment",
};

std::unique_ptr< PaymentAPIService::Stub> PaymentAPIService::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< PaymentAPIService::Stub> stub(new PaymentAPIService::Stub(channel));
  return stub;
}

PaymentAPIService::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_GetPayment_(PaymentAPIService_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_CreatePayment_(PaymentAPIService_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_UpdatePayment_(PaymentAPIService_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DeletePayment_(PaymentAPIService_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ListPayment_(PaymentAPIService_method_names[4], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status PaymentAPIService::Stub::GetPayment(::grpc::ClientContext* context, const ::payment::v1alpha1::GetPaymentRequest& request, ::payment::v1alpha1::GetPaymentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetPayment_, context, request, response);
}

void PaymentAPIService::Stub::experimental_async::GetPayment(::grpc::ClientContext* context, const ::payment::v1alpha1::GetPaymentRequest* request, ::payment::v1alpha1::GetPaymentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetPayment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::GetPaymentResponse>* PaymentAPIService::Stub::AsyncGetPaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::GetPaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::GetPaymentResponse>::Create(channel_.get(), cq, rpcmethod_GetPayment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::GetPaymentResponse>* PaymentAPIService::Stub::PrepareAsyncGetPaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::GetPaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::GetPaymentResponse>::Create(channel_.get(), cq, rpcmethod_GetPayment_, context, request, false);
}

::grpc::Status PaymentAPIService::Stub::CreatePayment(::grpc::ClientContext* context, const ::payment::v1alpha1::CreatePaymentRequest& request, ::payment::v1alpha1::CreatePaymentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CreatePayment_, context, request, response);
}

void PaymentAPIService::Stub::experimental_async::CreatePayment(::grpc::ClientContext* context, const ::payment::v1alpha1::CreatePaymentRequest* request, ::payment::v1alpha1::CreatePaymentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CreatePayment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::CreatePaymentResponse>* PaymentAPIService::Stub::AsyncCreatePaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::CreatePaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::CreatePaymentResponse>::Create(channel_.get(), cq, rpcmethod_CreatePayment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::CreatePaymentResponse>* PaymentAPIService::Stub::PrepareAsyncCreatePaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::CreatePaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::CreatePaymentResponse>::Create(channel_.get(), cq, rpcmethod_CreatePayment_, context, request, false);
}

::grpc::Status PaymentAPIService::Stub::UpdatePayment(::grpc::ClientContext* context, const ::payment::v1alpha1::UpdatePaymentRequest& request, ::payment::v1alpha1::UpdatePaymentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_UpdatePayment_, context, request, response);
}

void PaymentAPIService::Stub::experimental_async::UpdatePayment(::grpc::ClientContext* context, const ::payment::v1alpha1::UpdatePaymentRequest* request, ::payment::v1alpha1::UpdatePaymentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_UpdatePayment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::UpdatePaymentResponse>* PaymentAPIService::Stub::AsyncUpdatePaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::UpdatePaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::UpdatePaymentResponse>::Create(channel_.get(), cq, rpcmethod_UpdatePayment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::UpdatePaymentResponse>* PaymentAPIService::Stub::PrepareAsyncUpdatePaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::UpdatePaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::UpdatePaymentResponse>::Create(channel_.get(), cq, rpcmethod_UpdatePayment_, context, request, false);
}

::grpc::Status PaymentAPIService::Stub::DeletePayment(::grpc::ClientContext* context, const ::payment::v1alpha1::DeletePaymentRequest& request, ::payment::v1alpha1::DeletePaymentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DeletePayment_, context, request, response);
}

void PaymentAPIService::Stub::experimental_async::DeletePayment(::grpc::ClientContext* context, const ::payment::v1alpha1::DeletePaymentRequest* request, ::payment::v1alpha1::DeletePaymentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DeletePayment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::DeletePaymentResponse>* PaymentAPIService::Stub::AsyncDeletePaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::DeletePaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::DeletePaymentResponse>::Create(channel_.get(), cq, rpcmethod_DeletePayment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::DeletePaymentResponse>* PaymentAPIService::Stub::PrepareAsyncDeletePaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::DeletePaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::DeletePaymentResponse>::Create(channel_.get(), cq, rpcmethod_DeletePayment_, context, request, false);
}

::grpc::Status PaymentAPIService::Stub::ListPayment(::grpc::ClientContext* context, const ::payment::v1alpha1::ListPaymentRequest& request, ::payment::v1alpha1::ListPaymentResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_ListPayment_, context, request, response);
}

void PaymentAPIService::Stub::experimental_async::ListPayment(::grpc::ClientContext* context, const ::payment::v1alpha1::ListPaymentRequest* request, ::payment::v1alpha1::ListPaymentResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_ListPayment_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::ListPaymentResponse>* PaymentAPIService::Stub::AsyncListPaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::ListPaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::ListPaymentResponse>::Create(channel_.get(), cq, rpcmethod_ListPayment_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::payment::v1alpha1::ListPaymentResponse>* PaymentAPIService::Stub::PrepareAsyncListPaymentRaw(::grpc::ClientContext* context, const ::payment::v1alpha1::ListPaymentRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::payment::v1alpha1::ListPaymentResponse>::Create(channel_.get(), cq, rpcmethod_ListPayment_, context, request, false);
}

PaymentAPIService::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PaymentAPIService_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PaymentAPIService::Service, ::payment::v1alpha1::GetPaymentRequest, ::payment::v1alpha1::GetPaymentResponse>(
          std::mem_fn(&PaymentAPIService::Service::GetPayment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PaymentAPIService_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PaymentAPIService::Service, ::payment::v1alpha1::CreatePaymentRequest, ::payment::v1alpha1::CreatePaymentResponse>(
          std::mem_fn(&PaymentAPIService::Service::CreatePayment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PaymentAPIService_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PaymentAPIService::Service, ::payment::v1alpha1::UpdatePaymentRequest, ::payment::v1alpha1::UpdatePaymentResponse>(
          std::mem_fn(&PaymentAPIService::Service::UpdatePayment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PaymentAPIService_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PaymentAPIService::Service, ::payment::v1alpha1::DeletePaymentRequest, ::payment::v1alpha1::DeletePaymentResponse>(
          std::mem_fn(&PaymentAPIService::Service::DeletePayment), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      PaymentAPIService_method_names[4],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< PaymentAPIService::Service, ::payment::v1alpha1::ListPaymentRequest, ::payment::v1alpha1::ListPaymentResponse>(
          std::mem_fn(&PaymentAPIService::Service::ListPayment), this)));
}

PaymentAPIService::Service::~Service() {
}

::grpc::Status PaymentAPIService::Service::GetPayment(::grpc::ServerContext* context, const ::payment::v1alpha1::GetPaymentRequest* request, ::payment::v1alpha1::GetPaymentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PaymentAPIService::Service::CreatePayment(::grpc::ServerContext* context, const ::payment::v1alpha1::CreatePaymentRequest* request, ::payment::v1alpha1::CreatePaymentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PaymentAPIService::Service::UpdatePayment(::grpc::ServerContext* context, const ::payment::v1alpha1::UpdatePaymentRequest* request, ::payment::v1alpha1::UpdatePaymentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PaymentAPIService::Service::DeletePayment(::grpc::ServerContext* context, const ::payment::v1alpha1::DeletePaymentRequest* request, ::payment::v1alpha1::DeletePaymentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status PaymentAPIService::Service::ListPayment(::grpc::ServerContext* context, const ::payment::v1alpha1::ListPaymentRequest* request, ::payment::v1alpha1::ListPaymentResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace payment
}  // namespace v1alpha1

