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
    virtual ::grpc::Status ReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::billing::v1alpha1::ReadBillingResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::ReadBillingResponse>> AsyncReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::ReadBillingResponse>>(AsyncReadBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::ReadBillingResponse>> PrepareAsyncReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::ReadBillingResponse>>(PrepareAsyncReadBillingRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void ReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::ReadBillingResponse>* AsyncReadBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::billing::v1alpha1::ReadBillingResponse>* PrepareAsyncReadBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status ReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::billing::v1alpha1::ReadBillingResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::ReadBillingResponse>> AsyncReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::ReadBillingResponse>>(AsyncReadBillingRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::ReadBillingResponse>> PrepareAsyncReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::ReadBillingResponse>>(PrepareAsyncReadBillingRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void ReadBilling(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::ReadBillingResponse>* AsyncReadBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::billing::v1alpha1::ReadBillingResponse>* PrepareAsyncReadBillingRaw(::grpc::ClientContext* context, const ::billing::v1alpha1::ReadBillingRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_ReadBilling_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status ReadBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_ReadBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_ReadBilling() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_ReadBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ReadBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestReadBilling(::grpc::ServerContext* context, ::billing::v1alpha1::ReadBillingRequest* request, ::grpc::ServerAsyncResponseWriter< ::billing::v1alpha1::ReadBillingResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_ReadBilling<Service > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_ReadBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_ReadBilling() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_ReadBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ReadBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_ReadBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_ReadBilling() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_ReadBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ReadBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestReadBilling(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_ReadBilling : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_ReadBilling() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::billing::v1alpha1::ReadBillingRequest, ::billing::v1alpha1::ReadBillingResponse>(std::bind(&WithStreamedUnaryMethod_ReadBilling<BaseClass>::StreamedReadBilling, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_ReadBilling() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status ReadBilling(::grpc::ServerContext* context, const ::billing::v1alpha1::ReadBillingRequest* request, ::billing::v1alpha1::ReadBillingResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedReadBilling(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::billing::v1alpha1::ReadBillingRequest,::billing::v1alpha1::ReadBillingResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_ReadBilling<Service > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_ReadBilling<Service > StreamedService;
};

}  // namespace v1alpha1
}  // namespace billing


#endif  // GRPC_billing_2fv1alpha1_2fbilling_5fapi_2eproto__INCLUDED
