// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: performance/logs/v1alpha1/logs_agent_api.proto
#ifndef GRPC_performance_2flogs_2fv1alpha1_2flogs_5fagent_5fapi_2eproto__INCLUDED
#define GRPC_performance_2flogs_2fv1alpha1_2flogs_5fagent_5fapi_2eproto__INCLUDED

#include "performance/logs/v1alpha1/logs_agent_api.pb.h"

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

class LogsAgentAPIService final {
 public:
  static constexpr char const* service_full_name() {
    return "performance.logs.v1alpha1.LogsAgentAPIService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    std::unique_ptr< ::grpc::ClientReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>> SaveLogs(::grpc::ClientContext* context) {
      return std::unique_ptr< ::grpc::ClientReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>>(SaveLogsRaw(context));
    }
    std::unique_ptr< ::grpc::ClientAsyncReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>> AsyncSaveLogs(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq, void* tag) {
      return std::unique_ptr< ::grpc::ClientAsyncReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>>(AsyncSaveLogsRaw(context, cq, tag));
    }
    std::unique_ptr< ::grpc::ClientAsyncReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>> PrepareAsyncSaveLogs(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>>(PrepareAsyncSaveLogsRaw(context, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>* SaveLogsRaw(::grpc::ClientContext* context) = 0;
    virtual ::grpc::ClientAsyncReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>* AsyncSaveLogsRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq, void* tag) = 0;
    virtual ::grpc::ClientAsyncReaderWriterInterface< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>* PrepareAsyncSaveLogsRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    std::unique_ptr< ::grpc::ClientReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>> SaveLogs(::grpc::ClientContext* context) {
      return std::unique_ptr< ::grpc::ClientReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>>(SaveLogsRaw(context));
    }
    std::unique_ptr<  ::grpc::ClientAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>> AsyncSaveLogs(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq, void* tag) {
      return std::unique_ptr< ::grpc::ClientAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>>(AsyncSaveLogsRaw(context, cq, tag));
    }
    std::unique_ptr<  ::grpc::ClientAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>> PrepareAsyncSaveLogs(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>>(PrepareAsyncSaveLogsRaw(context, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
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
    ::grpc::ClientReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>* SaveLogsRaw(::grpc::ClientContext* context) override;
    ::grpc::ClientAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>* AsyncSaveLogsRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq, void* tag) override;
    ::grpc::ClientAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsRequest, ::performance::logs::v1alpha1::SaveLogsResponse>* PrepareAsyncSaveLogsRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_SaveLogs_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status SaveLogs(::grpc::ServerContext* context, ::grpc::ServerReaderWriter< ::performance::logs::v1alpha1::SaveLogsResponse, ::performance::logs::v1alpha1::SaveLogsRequest>* stream);
  };
  template <class BaseClass>
  class WithAsyncMethod_SaveLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_SaveLogs() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_SaveLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status SaveLogs(::grpc::ServerContext* context, ::grpc::ServerReaderWriter< ::performance::logs::v1alpha1::SaveLogsResponse, ::performance::logs::v1alpha1::SaveLogsRequest>* stream)  override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestSaveLogs(::grpc::ServerContext* context, ::grpc::ServerAsyncReaderWriter< ::performance::logs::v1alpha1::SaveLogsResponse, ::performance::logs::v1alpha1::SaveLogsRequest>* stream, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncBidiStreaming(0, context, stream, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_SaveLogs<Service > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_SaveLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_SaveLogs() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_SaveLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status SaveLogs(::grpc::ServerContext* context, ::grpc::ServerReaderWriter< ::performance::logs::v1alpha1::SaveLogsResponse, ::performance::logs::v1alpha1::SaveLogsRequest>* stream)  override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_SaveLogs : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_SaveLogs() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_SaveLogs() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status SaveLogs(::grpc::ServerContext* context, ::grpc::ServerReaderWriter< ::performance::logs::v1alpha1::SaveLogsResponse, ::performance::logs::v1alpha1::SaveLogsRequest>* stream)  override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestSaveLogs(::grpc::ServerContext* context, ::grpc::ServerAsyncReaderWriter< ::grpc::ByteBuffer, ::grpc::ByteBuffer>* stream, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncBidiStreaming(0, context, stream, new_call_cq, notification_cq, tag);
    }
  };
  typedef Service StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef Service StreamedService;
};

}  // namespace v1alpha1
}  // namespace logs
}  // namespace performance


#endif  // GRPC_performance_2flogs_2fv1alpha1_2flogs_5fagent_5fapi_2eproto__INCLUDED
