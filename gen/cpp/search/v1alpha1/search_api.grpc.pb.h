// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: search/v1alpha1/search_api.proto
#ifndef GRPC_search_2fv1alpha1_2fsearch_5fapi_2eproto__INCLUDED
#define GRPC_search_2fv1alpha1_2fsearch_5fapi_2eproto__INCLUDED

#include "search/v1alpha1/search_api.pb.h"

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

namespace search {
namespace v1alpha1 {

class SearchAPIService final {
 public:
  static constexpr char const* service_full_name() {
    return "search.v1alpha1.SearchAPIService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status Search(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::search::v1alpha1::SearchResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::search::v1alpha1::SearchResponse>> AsyncSearch(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::search::v1alpha1::SearchResponse>>(AsyncSearchRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::search::v1alpha1::SearchResponse>> PrepareAsyncSearch(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::search::v1alpha1::SearchResponse>>(PrepareAsyncSearchRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void Search(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::search::v1alpha1::SearchResponse>* AsyncSearchRaw(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::search::v1alpha1::SearchResponse>* PrepareAsyncSearchRaw(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status Search(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::search::v1alpha1::SearchResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::search::v1alpha1::SearchResponse>> AsyncSearch(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::search::v1alpha1::SearchResponse>>(AsyncSearchRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::search::v1alpha1::SearchResponse>> PrepareAsyncSearch(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::search::v1alpha1::SearchResponse>>(PrepareAsyncSearchRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void Search(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::search::v1alpha1::SearchResponse>* AsyncSearchRaw(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::search::v1alpha1::SearchResponse>* PrepareAsyncSearchRaw(::grpc::ClientContext* context, const ::search::v1alpha1::SearchRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_Search_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status Search(::grpc::ServerContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_Search : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_Search() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_Search() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Search(::grpc::ServerContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestSearch(::grpc::ServerContext* context, ::search::v1alpha1::SearchRequest* request, ::grpc::ServerAsyncResponseWriter< ::search::v1alpha1::SearchResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_Search<Service > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_Search : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_Search() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_Search() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Search(::grpc::ServerContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_Search : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_Search() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_Search() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Search(::grpc::ServerContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestSearch(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_Search : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_Search() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::search::v1alpha1::SearchRequest, ::search::v1alpha1::SearchResponse>(std::bind(&WithStreamedUnaryMethod_Search<BaseClass>::StreamedSearch, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_Search() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status Search(::grpc::ServerContext* context, const ::search::v1alpha1::SearchRequest* request, ::search::v1alpha1::SearchResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedSearch(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::search::v1alpha1::SearchRequest,::search::v1alpha1::SearchResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_Search<Service > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_Search<Service > StreamedService;
};

}  // namespace v1alpha1
}  // namespace search


#endif  // GRPC_search_2fv1alpha1_2fsearch_5fapi_2eproto__INCLUDED
