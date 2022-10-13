// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: blockchain/thepower/v1alpha1/thepower_api.proto
#ifndef GRPC_blockchain_2fthepower_2fv1alpha1_2fthepower_5fapi_2eproto__INCLUDED
#define GRPC_blockchain_2fthepower_2fv1alpha1_2fthepower_5fapi_2eproto__INCLUDED

#include "blockchain/thepower/v1alpha1/thepower_api.pb.h"

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

namespace blockchain {
namespace thepower {
namespace v1alpha1 {

class BlockchainThePowerService final {
 public:
  static constexpr char const* service_full_name() {
    return "blockchain.thepower.v1alpha1.BlockchainThePowerService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    virtual ::grpc::Status CreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>> AsyncCreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>>(AsyncCreateTpChainRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>> PrepareAsyncCreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>>(PrepareAsyncCreateTpChainRaw(context, request, cq));
    }
    virtual ::grpc::Status GetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>> AsyncGetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>>(AsyncGetTpChainsRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>> PrepareAsyncGetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>>(PrepareAsyncGetTpChainsRaw(context, request, cq));
    }
    virtual ::grpc::Status GetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>> AsyncGetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>>(AsyncGetTpChainsByUserIdRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>> PrepareAsyncGetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>>(PrepareAsyncGetTpChainsByUserIdRaw(context, request, cq));
    }
    virtual ::grpc::Status GetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>> AsyncGetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>>(AsyncGetTpChainByIdRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>> PrepareAsyncGetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>>(PrepareAsyncGetTpChainByIdRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      virtual void CreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void GetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void GetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void GetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* AsyncCreateTpChainRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* PrepareAsyncCreateTpChainRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* AsyncGetTpChainsRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* PrepareAsyncGetTpChainsRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* AsyncGetTpChainsByUserIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* PrepareAsyncGetTpChainsByUserIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* AsyncGetTpChainByIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* PrepareAsyncGetTpChainByIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status CreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>> AsyncCreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>>(AsyncCreateTpChainRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>> PrepareAsyncCreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>>(PrepareAsyncCreateTpChainRaw(context, request, cq));
    }
    ::grpc::Status GetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>> AsyncGetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>>(AsyncGetTpChainsRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>> PrepareAsyncGetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>>(PrepareAsyncGetTpChainsRaw(context, request, cq));
    }
    ::grpc::Status GetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>> AsyncGetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>>(AsyncGetTpChainsByUserIdRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>> PrepareAsyncGetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>>(PrepareAsyncGetTpChainsByUserIdRaw(context, request, cq));
    }
    ::grpc::Status GetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>> AsyncGetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>>(AsyncGetTpChainByIdRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>> PrepareAsyncGetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>>(PrepareAsyncGetTpChainByIdRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void CreateTpChain(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response, std::function<void(::grpc::Status)>) override;
      void GetTpChains(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response, std::function<void(::grpc::Status)>) override;
      void GetTpChainsByUserId(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response, std::function<void(::grpc::Status)>) override;
      void GetTpChainById(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* AsyncCreateTpChainRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* PrepareAsyncCreateTpChainRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* AsyncGetTpChainsRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* PrepareAsyncGetTpChainsRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* AsyncGetTpChainsByUserIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* PrepareAsyncGetTpChainsByUserIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* AsyncGetTpChainByIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* PrepareAsyncGetTpChainByIdRaw(::grpc::ClientContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_CreateTpChain_;
    const ::grpc::internal::RpcMethod rpcmethod_GetTpChains_;
    const ::grpc::internal::RpcMethod rpcmethod_GetTpChainsByUserId_;
    const ::grpc::internal::RpcMethod rpcmethod_GetTpChainById_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    virtual ::grpc::Status CreateTpChain(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response);
    virtual ::grpc::Status GetTpChains(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response);
    virtual ::grpc::Status GetTpChainsByUserId(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response);
    virtual ::grpc::Status GetTpChainById(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_CreateTpChain : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_CreateTpChain() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_CreateTpChain() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateTpChain(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateTpChain(::grpc::ServerContext* context, ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::grpc::ServerAsyncResponseWriter< ::blockchain::thepower::v1alpha1::CreateTpChainResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_GetTpChains : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_GetTpChains() {
      ::grpc::Service::MarkMethodAsync(1);
    }
    ~WithAsyncMethod_GetTpChains() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChains(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetTpChains(::grpc::ServerContext* context, ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::grpc::ServerAsyncResponseWriter< ::blockchain::thepower::v1alpha1::GetTpChainsResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_GetTpChainsByUserId : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_GetTpChainsByUserId() {
      ::grpc::Service::MarkMethodAsync(2);
    }
    ~WithAsyncMethod_GetTpChainsByUserId() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChainsByUserId(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetTpChainsByUserId(::grpc::ServerContext* context, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::grpc::ServerAsyncResponseWriter< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(2, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_GetTpChainById : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_GetTpChainById() {
      ::grpc::Service::MarkMethodAsync(3);
    }
    ~WithAsyncMethod_GetTpChainById() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChainById(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetTpChainById(::grpc::ServerContext* context, ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::grpc::ServerAsyncResponseWriter< ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(3, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_CreateTpChain<WithAsyncMethod_GetTpChains<WithAsyncMethod_GetTpChainsByUserId<WithAsyncMethod_GetTpChainById<Service > > > > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_CreateTpChain : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_CreateTpChain() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_CreateTpChain() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateTpChain(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_GetTpChains : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_GetTpChains() {
      ::grpc::Service::MarkMethodGeneric(1);
    }
    ~WithGenericMethod_GetTpChains() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChains(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_GetTpChainsByUserId : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_GetTpChainsByUserId() {
      ::grpc::Service::MarkMethodGeneric(2);
    }
    ~WithGenericMethod_GetTpChainsByUserId() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChainsByUserId(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_GetTpChainById : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_GetTpChainById() {
      ::grpc::Service::MarkMethodGeneric(3);
    }
    ~WithGenericMethod_GetTpChainById() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChainById(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_CreateTpChain : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_CreateTpChain() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_CreateTpChain() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status CreateTpChain(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestCreateTpChain(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_GetTpChains : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_GetTpChains() {
      ::grpc::Service::MarkMethodRaw(1);
    }
    ~WithRawMethod_GetTpChains() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChains(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetTpChains(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_GetTpChainsByUserId : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_GetTpChainsByUserId() {
      ::grpc::Service::MarkMethodRaw(2);
    }
    ~WithRawMethod_GetTpChainsByUserId() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChainsByUserId(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetTpChainsByUserId(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(2, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_GetTpChainById : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_GetTpChainById() {
      ::grpc::Service::MarkMethodRaw(3);
    }
    ~WithRawMethod_GetTpChainById() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status GetTpChainById(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestGetTpChainById(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(3, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_CreateTpChain : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_CreateTpChain() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::blockchain::thepower::v1alpha1::CreateTpChainRequest, ::blockchain::thepower::v1alpha1::CreateTpChainResponse>(std::bind(&WithStreamedUnaryMethod_CreateTpChain<BaseClass>::StreamedCreateTpChain, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_CreateTpChain() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status CreateTpChain(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::CreateTpChainRequest* request, ::blockchain::thepower::v1alpha1::CreateTpChainResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedCreateTpChain(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::blockchain::thepower::v1alpha1::CreateTpChainRequest,::blockchain::thepower::v1alpha1::CreateTpChainResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_GetTpChains : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_GetTpChains() {
      ::grpc::Service::MarkMethodStreamed(1,
        new ::grpc::internal::StreamedUnaryHandler< ::blockchain::thepower::v1alpha1::GetTpChainsRequest, ::blockchain::thepower::v1alpha1::GetTpChainsResponse>(std::bind(&WithStreamedUnaryMethod_GetTpChains<BaseClass>::StreamedGetTpChains, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_GetTpChains() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status GetTpChains(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedGetTpChains(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::blockchain::thepower::v1alpha1::GetTpChainsRequest,::blockchain::thepower::v1alpha1::GetTpChainsResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_GetTpChainsByUserId : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_GetTpChainsByUserId() {
      ::grpc::Service::MarkMethodStreamed(2,
        new ::grpc::internal::StreamedUnaryHandler< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>(std::bind(&WithStreamedUnaryMethod_GetTpChainsByUserId<BaseClass>::StreamedGetTpChainsByUserId, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_GetTpChainsByUserId() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status GetTpChainsByUserId(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedGetTpChainsByUserId(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::blockchain::thepower::v1alpha1::GetTpChainsByUserIdRequest,::blockchain::thepower::v1alpha1::GetTpChainsByUserIdResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_GetTpChainById : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_GetTpChainById() {
      ::grpc::Service::MarkMethodStreamed(3,
        new ::grpc::internal::StreamedUnaryHandler< ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>(std::bind(&WithStreamedUnaryMethod_GetTpChainById<BaseClass>::StreamedGetTpChainById, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_GetTpChainById() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status GetTpChainById(::grpc::ServerContext* context, const ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest* request, ::blockchain::thepower::v1alpha1::GetTpChainByIdResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedGetTpChainById(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::blockchain::thepower::v1alpha1::GetTpChainByIdRequest,::blockchain::thepower::v1alpha1::GetTpChainByIdResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_CreateTpChain<WithStreamedUnaryMethod_GetTpChains<WithStreamedUnaryMethod_GetTpChainsByUserId<WithStreamedUnaryMethod_GetTpChainById<Service > > > > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_CreateTpChain<WithStreamedUnaryMethod_GetTpChains<WithStreamedUnaryMethod_GetTpChainsByUserId<WithStreamedUnaryMethod_GetTpChainById<Service > > > > StreamedService;
};

}  // namespace v1alpha1
}  // namespace thepower
}  // namespace blockchain


#endif  // GRPC_blockchain_2fthepower_2fv1alpha1_2fthepower_5fapi_2eproto__INCLUDED
