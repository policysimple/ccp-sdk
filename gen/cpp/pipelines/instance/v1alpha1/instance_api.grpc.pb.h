// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: pipelines/instance/v1alpha1/instance_api.proto
#ifndef GRPC_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto__INCLUDED
#define GRPC_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto__INCLUDED

#include "pipelines/instance/v1alpha1/instance_api.pb.h"

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
namespace instance {
namespace v1alpha1 {

class InstanceAPIService final {
 public:
  static constexpr char const* service_full_name() {
    return "pipelines.instance.v1alpha1.InstanceAPIService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status CreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::instance::v1alpha1::CreateInstanceResponse>> AsyncCreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::instance::v1alpha1::CreateInstanceResponse>>(AsyncCreateInstanceRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::instance::v1alpha1::CreateInstanceResponse>> PrepareAsyncCreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::instance::v1alpha1::CreateInstanceResponse>>(PrepareAsyncCreateInstanceRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void CreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* AsyncCreateInstanceRaw(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* PrepareAsyncCreateInstanceRaw(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status CreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>> AsyncCreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>>(AsyncCreateInstanceRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>> PrepareAsyncCreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>>(PrepareAsyncCreateInstanceRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void CreateInstance(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* AsyncCreateInstanceRaw(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* PrepareAsyncCreateInstanceRaw(::grpc::ClientContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_CreateInstance_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status CreateInstance(::grpc::ServerContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_CreateInstance : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_CreateInstance() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_CreateInstance() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateInstance(::grpc::ServerContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateInstance(::grpc::ServerContext* context, ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::grpc::ServerAsyncResponseWriter< ::pipelines::instance::v1alpha1::CreateInstanceResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_CreateInstance<Service > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_CreateInstance : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_CreateInstance() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_CreateInstance() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateInstance(::grpc::ServerContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_CreateInstance : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_CreateInstance() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_CreateInstance() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateInstance(::grpc::ServerContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateInstance(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_CreateInstance : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_CreateInstance() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::pipelines::instance::v1alpha1::CreateInstanceRequest, ::pipelines::instance::v1alpha1::CreateInstanceResponse>(std::bind(&WithStreamedUnaryMethod_CreateInstance<BaseClass>::StreamedCreateInstance, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_CreateInstance() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status CreateInstance(::grpc::ServerContext* context, const ::pipelines::instance::v1alpha1::CreateInstanceRequest* request, ::pipelines::instance::v1alpha1::CreateInstanceResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedCreateInstance(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::pipelines::instance::v1alpha1::CreateInstanceRequest,::pipelines::instance::v1alpha1::CreateInstanceResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_CreateInstance<Service > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_CreateInstance<Service > StreamedService;
};

}  // namespace v1alpha1
}  // namespace instance
}  // namespace pipelines


#endif  // GRPC_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto__INCLUDED