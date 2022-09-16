// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: pipelines/tekton/v1alpha1/tekton_api.proto
#ifndef GRPC_pipelines_2ftekton_2fv1alpha1_2ftekton_5fapi_2eproto__INCLUDED
#define GRPC_pipelines_2ftekton_2fv1alpha1_2ftekton_5fapi_2eproto__INCLUDED

#include "pipelines/tekton/v1alpha1/tekton_api.pb.h"

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

namespace pipelines {
namespace tekton {
namespace v1alpha1 {

class TektonPipelineAPIService final {
 public:
  static constexpr char const* service_full_name() {
    return "pipelines.tekton.v1alpha1.TektonPipelineAPIService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status CreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>> AsyncCreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>>(AsyncCreateTektonPipelineRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>> PrepareAsyncCreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>>(PrepareAsyncCreateTektonPipelineRaw(context, request, cq));
    }
    virtual ::grpc::Status DeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>> AsyncDeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>>(AsyncDeleteTektonPipelineRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>> PrepareAsyncDeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>>(PrepareAsyncDeleteTektonPipelineRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void CreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void DeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>* AsyncCreateTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>* PrepareAsyncCreateTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>* AsyncDeleteTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>* PrepareAsyncDeleteTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status CreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>> AsyncCreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>>(AsyncCreateTektonPipelineRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>> PrepareAsyncCreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>>(PrepareAsyncCreateTektonPipelineRaw(context, request, cq));
    }
    ::grpc::Status DeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>> AsyncDeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>>(AsyncDeleteTektonPipelineRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>> PrepareAsyncDeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>>(PrepareAsyncDeleteTektonPipelineRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void CreateTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response, std::function<void(::grpc::Status)>) override;
      void DeleteTektonPipeline(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>* AsyncCreateTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>* PrepareAsyncCreateTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>* AsyncDeleteTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>* PrepareAsyncDeleteTektonPipelineRaw(::grpc::ClientContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_CreateTektonPipeline_;
    const ::grpc::internal::RpcMethod rpcmethod_DeleteTektonPipeline_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status CreateTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response);
    virtual ::grpc::Status DeleteTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_CreateTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_CreateTektonPipeline() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_CreateTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateTektonPipeline(::grpc::ServerContext* context, ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::grpc::ServerAsyncResponseWriter< ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_DeleteTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_DeleteTektonPipeline() {
      ::grpc::Service::MarkMethodAsync(1);
    }
    ~WithAsyncMethod_DeleteTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DeleteTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestDeleteTektonPipeline(::grpc::ServerContext* context, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::grpc::ServerAsyncResponseWriter< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_CreateTektonPipeline<WithAsyncMethod_DeleteTektonPipeline<Service > > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_CreateTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_CreateTektonPipeline() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_CreateTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_DeleteTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_DeleteTektonPipeline() {
      ::grpc::Service::MarkMethodGeneric(1);
    }
    ~WithGenericMethod_DeleteTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DeleteTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_CreateTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_CreateTektonPipeline() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_CreateTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateTektonPipeline(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_DeleteTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_DeleteTektonPipeline() {
      ::grpc::Service::MarkMethodRaw(1);
    }
    ~WithRawMethod_DeleteTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DeleteTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestDeleteTektonPipeline(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_CreateTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_CreateTektonPipeline() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>(std::bind(&WithStreamedUnaryMethod_CreateTektonPipeline<BaseClass>::StreamedCreateTektonPipeline, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_CreateTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status CreateTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedCreateTektonPipeline(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::pipelines::tekton::v1alpha1::CreateTektonPipelineRequest,::pipelines::tekton::v1alpha1::CreateTektonPipelineResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_DeleteTektonPipeline : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_DeleteTektonPipeline() {
      ::grpc::Service::MarkMethodStreamed(1,
        new ::grpc::internal::StreamedUnaryHandler< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>(std::bind(&WithStreamedUnaryMethod_DeleteTektonPipeline<BaseClass>::StreamedDeleteTektonPipeline, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_DeleteTektonPipeline() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status DeleteTektonPipeline(::grpc::ServerContext* context, const ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest* request, ::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedDeleteTektonPipeline(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::pipelines::tekton::v1alpha1::DeleteTektonPipelineRequest,::pipelines::tekton::v1alpha1::DeleteTektonPipelineResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_CreateTektonPipeline<WithStreamedUnaryMethod_DeleteTektonPipeline<Service > > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_CreateTektonPipeline<WithStreamedUnaryMethod_DeleteTektonPipeline<Service > > StreamedService;
};

}  // namespace v1alpha1
}  // namespace tekton
}  // namespace pipelines


#endif  // GRPC_pipelines_2ftekton_2fv1alpha1_2ftekton_5fapi_2eproto__INCLUDED
