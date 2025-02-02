// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: performance/logs/v1alpha1/logs_api.proto
#ifndef GRPC_performance_2flogs_2fv1alpha1_2flogs_5fapi_2eproto__INCLUDED
#define GRPC_performance_2flogs_2fv1alpha1_2flogs_5fapi_2eproto__INCLUDED

#include "performance/logs/v1alpha1/logs_api.pb.h"

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

namespace performance {
namespace logs {
namespace v1alpha1 {

class LogsAPIService final {
 public:
  static constexpr char const* service_full_name() {
    return "performance.logs.v1alpha1.LogsAPIService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status GetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::performance::logs::v1alpha1::GetLogsResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::performance::logs::v1alpha1::GetLogsResponse>> AsyncGetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::performance::logs::v1alpha1::GetLogsResponse>>(AsyncGetLogsRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::performance::logs::v1alpha1::GetLogsResponse>> PrepareAsyncGetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::performance::logs::v1alpha1::GetLogsResponse>>(PrepareAsyncGetLogsRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void GetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::performance::logs::v1alpha1::GetLogsResponse>* AsyncGetLogsRaw(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::performance::logs::v1alpha1::GetLogsResponse>* PrepareAsyncGetLogsRaw(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status GetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::performance::logs::v1alpha1::GetLogsResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::performance::logs::v1alpha1::GetLogsResponse>> AsyncGetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::performance::logs::v1alpha1::GetLogsResponse>>(AsyncGetLogsRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::performance::logs::v1alpha1::GetLogsResponse>> PrepareAsyncGetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::performance::logs::v1alpha1::GetLogsResponse>>(PrepareAsyncGetLogsRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void GetLogs(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::performance::logs::v1alpha1::GetLogsResponse>* AsyncGetLogsRaw(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::performance::logs::v1alpha1::GetLogsResponse>* PrepareAsyncGetLogsRaw(::grpc::ClientContext* context, const ::performance::logs::v1alpha1::GetLogsRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_GetLogs_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status GetLogs(::grpc::ServerContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_GetLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_GetLogs() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_GetLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetLogs(::grpc::ServerContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetLogs(::grpc::ServerContext* context, ::performance::logs::v1alpha1::GetLogsRequest* request, ::grpc::ServerAsyncResponseWriter< ::performance::logs::v1alpha1::GetLogsResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_GetLogs<Service > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_GetLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_GetLogs() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_GetLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetLogs(::grpc::ServerContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_GetLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_GetLogs() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_GetLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetLogs(::grpc::ServerContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetLogs(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_GetLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_GetLogs() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::performance::logs::v1alpha1::GetLogsRequest, ::performance::logs::v1alpha1::GetLogsResponse>(std::bind(&WithStreamedUnaryMethod_GetLogs<BaseClass>::StreamedGetLogs, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_GetLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status GetLogs(::grpc::ServerContext* context, const ::performance::logs::v1alpha1::GetLogsRequest* request, ::performance::logs::v1alpha1::GetLogsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedGetLogs(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::performance::logs::v1alpha1::GetLogsRequest,::performance::logs::v1alpha1::GetLogsResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_GetLogs<Service > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_GetLogs<Service > StreamedService;
};

}  // namespace v1alpha1
}  // namespace logs
}  // namespace performance


#endif  // GRPC_performance_2flogs_2fv1alpha1_2flogs_5fapi_2eproto__INCLUDED
