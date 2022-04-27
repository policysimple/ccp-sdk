// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: billing/v1alpha1/billing_api.proto
#ifndef GRPC_billing_2fv1alpha1_2fbilling_5fapi_2eproto__INCLUDED
#define GRPC_billing_2fv1alpha1_2fbilling_5fapi_2eproto__INCLUDED

#include "billing/v1alpha1/billing_api.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_generic_service.h>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/method_handler_impl.h>
#include <grpcpp/impl/codegen/proto_utils.h>
#include <grpcpp/impl/codegen/rpc_method.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/status.h>
#include <grpcpp/impl/codegen/stub_options.h>
#include <grpcpp/impl/codegen/sync_stream.h>

namespace grpc {
class CompletionQueue;
class Channel;
class ServerCompletionQueue;
class ServerContext;
}  // namespace grpc

namespace billing {
namespace v1alpha1 {

class BillingService final {
 public:
  static constexpr char const* service_full_name() {
    return "billing.v1alpha1.BillingService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status CreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::billing::v1alpha1::CreateBillingResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::CreateBillingResponse>> AsyncCreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::CreateBillingResponse>>(AsyncCreateBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::CreateBillingResponse>> PrepareAsyncCreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::CreateBillingResponse>>(PrepareAsyncCreateBillingRaw(context, request, cq));
    }
    virtual ::grpc::Status GetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::billing::v1alpha1::GetBillingResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::GetBillingResponse>> AsyncGetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::GetBillingResponse>>(AsyncGetBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::GetBillingResponse>> PrepareAsyncGetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::GetBillingResponse>>(PrepareAsyncGetBillingRaw(context, request, cq));
    }
    virtual ::grpc::Status UpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::billing::v1alpha1::UpdateBillingResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::UpdateBillingResponse>> AsyncUpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::UpdateBillingResponse>>(AsyncUpdateBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::UpdateBillingResponse>> PrepareAsyncUpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::UpdateBillingResponse>>(PrepareAsyncUpdateBillingRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void CreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void GetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void UpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::CreateBillingResponse>* AsyncCreateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::CreateBillingResponse>* PrepareAsyncCreateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::GetBillingResponse>* AsyncGetBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::GetBillingResponse>* PrepareAsyncGetBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::UpdateBillingResponse>* AsyncUpdateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::UpdateBillingResponse>* PrepareAsyncUpdateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status CreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::billing::v1alpha1::CreateBillingResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::CreateBillingResponse>> AsyncCreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::CreateBillingResponse>>(AsyncCreateBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::CreateBillingResponse>> PrepareAsyncCreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::CreateBillingResponse>>(PrepareAsyncCreateBillingRaw(context, request, cq));
    }
    ::grpc::Status GetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::billing::v1alpha1::GetBillingResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::GetBillingResponse>> AsyncGetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::GetBillingResponse>>(AsyncGetBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::GetBillingResponse>> PrepareAsyncGetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::GetBillingResponse>>(PrepareAsyncGetBillingRaw(context, request, cq));
    }
    ::grpc::Status UpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::billing::v1alpha1::UpdateBillingResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::UpdateBillingResponse>> AsyncUpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::UpdateBillingResponse>>(AsyncUpdateBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::UpdateBillingResponse>> PrepareAsyncUpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::UpdateBillingResponse>>(PrepareAsyncUpdateBillingRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void CreateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response, std::function<void(::grpc::Status)>) override;
      void GetBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response, std::function<void(::grpc::Status)>) override;
      void UpdateBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response, std::function<void(::grpc::Status)>) override;
     private:
      friend class Stub;
      explicit experimental_async(Stub* stub): stub_(stub) { }
      Stub* stub() { return stub_; }
      Stub* stub_;
    };
    class experimental_async_interface* experimental_async() override { return &async_stub_; }

   private:
    std::shared_ptr< ::grpc::ChannelInterface> channel_;
    class experimental_async async_stub_{this};
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::CreateBillingResponse>* AsyncCreateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::CreateBillingResponse>* PrepareAsyncCreateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::CreateBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::GetBillingResponse>* AsyncGetBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::GetBillingResponse>* PrepareAsyncGetBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::GetBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::UpdateBillingResponse>* AsyncUpdateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::UpdateBillingResponse>* PrepareAsyncUpdateBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::UpdateBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_CreateBilling_;
    const ::grpc::internal::RpcMethod rpcmethod_GetBilling_;
    const ::grpc::internal::RpcMethod rpcmethod_UpdateBilling_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status CreateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response);
    virtual ::grpc::Status GetBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response);
    virtual ::grpc::Status UpdateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_CreateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_CreateBilling() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_CreateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateBilling(::grpc::ServerContext* context, ::billing::v1alpha1::CreateBillingRequest* request, ::grpc::ServerAsyncResponseWriter< ::billing::v1alpha1::CreateBillingResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_GetBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_GetBilling() {
      ::grpc::Service::MarkMethodAsync(1);
    }
    ~WithAsyncMethod_GetBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetBilling(::grpc::ServerContext* context, ::billing::v1alpha1::GetBillingRequest* request, ::grpc::ServerAsyncResponseWriter< ::billing::v1alpha1::GetBillingResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_UpdateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_UpdateBilling() {
      ::grpc::Service::MarkMethodAsync(2);
    }
    ~WithAsyncMethod_UpdateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UpdateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestUpdateBilling(::grpc::ServerContext* context, ::billing::v1alpha1::UpdateBillingRequest* request, ::grpc::ServerAsyncResponseWriter< ::billing::v1alpha1::UpdateBillingResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(2, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_CreateBilling<WithAsyncMethod_GetBilling<WithAsyncMethod_UpdateBilling<Service > > > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_CreateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_CreateBilling() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_CreateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_GetBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_GetBilling() {
      ::grpc::Service::MarkMethodGeneric(1);
    }
    ~WithGenericMethod_GetBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_UpdateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_UpdateBilling() {
      ::grpc::Service::MarkMethodGeneric(2);
    }
    ~WithGenericMethod_UpdateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UpdateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_CreateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_CreateBilling() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_CreateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateBilling(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_GetBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_GetBilling() {
      ::grpc::Service::MarkMethodRaw(1);
    }
    ~WithRawMethod_GetBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetBilling(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_UpdateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_UpdateBilling() {
      ::grpc::Service::MarkMethodRaw(2);
    }
    ~WithRawMethod_UpdateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UpdateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestUpdateBilling(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(2, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_CreateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_CreateBilling() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::billing::v1alpha1::CreateBillingRequest, ::billing::v1alpha1::CreateBillingResponse>(std::bind(&WithStreamedUnaryMethod_CreateBilling<BaseClass>::StreamedCreateBilling, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_CreateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status CreateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::CreateBillingRequest* request, ::billing::v1alpha1::CreateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedCreateBilling(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::billing::v1alpha1::CreateBillingRequest,::billing::v1alpha1::CreateBillingResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_GetBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_GetBilling() {
      ::grpc::Service::MarkMethodStreamed(1,
        new ::grpc::internal::StreamedUnaryHandler< ::billing::v1alpha1::GetBillingRequest, ::billing::v1alpha1::GetBillingResponse>(std::bind(&WithStreamedUnaryMethod_GetBilling<BaseClass>::StreamedGetBilling, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_GetBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status GetBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::GetBillingRequest* request, ::billing::v1alpha1::GetBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedGetBilling(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::billing::v1alpha1::GetBillingRequest,::billing::v1alpha1::GetBillingResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_UpdateBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_UpdateBilling() {
      ::grpc::Service::MarkMethodStreamed(2,
        new ::grpc::internal::StreamedUnaryHandler< ::billing::v1alpha1::UpdateBillingRequest, ::billing::v1alpha1::UpdateBillingResponse>(std::bind(&WithStreamedUnaryMethod_UpdateBilling<BaseClass>::StreamedUpdateBilling, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_UpdateBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status UpdateBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::UpdateBillingRequest* request, ::billing::v1alpha1::UpdateBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedUpdateBilling(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::billing::v1alpha1::UpdateBillingRequest,::billing::v1alpha1::UpdateBillingResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_CreateBilling<WithStreamedUnaryMethod_GetBilling<WithStreamedUnaryMethod_UpdateBilling<Service > > > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_CreateBilling<WithStreamedUnaryMethod_GetBilling<WithStreamedUnaryMethod_UpdateBilling<Service > > > StreamedService;
};

}  // namespace v1alpha1
}  // namespace billing


#endif  // GRPC_billing_2fv1alpha1_2fbilling_5fapi_2eproto__INCLUDED
