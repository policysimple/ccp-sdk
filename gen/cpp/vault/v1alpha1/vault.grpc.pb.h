// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: vault/v1alpha1/vault.proto
#ifndef GRPC_vault_2fv1alpha1_2fvault_2eproto__INCLUDED
#define GRPC_vault_2fv1alpha1_2fvault_2eproto__INCLUDED

#include "vault/v1alpha1/vault.pb.h"

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

namespace vault {
namespace v1alpha1 {

class VaultService final {
 public:
  static constexpr char const* service_full_name() {
    return "vault.v1alpha1.VaultService";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    // /CRUD
    virtual ::grpc::Status WriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::vault::v1alpha1::WriteSecretResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::WriteSecretResponse>> AsyncWriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::WriteSecretResponse>>(AsyncWriteSecretRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::WriteSecretResponse>> PrepareAsyncWriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::WriteSecretResponse>>(PrepareAsyncWriteSecretRaw(context, request, cq));
    }
    virtual ::grpc::Status ReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::vault::v1alpha1::ReadSecretResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::ReadSecretResponse>> AsyncReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::ReadSecretResponse>>(AsyncReadSecretRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::ReadSecretResponse>> PrepareAsyncReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::ReadSecretResponse>>(PrepareAsyncReadSecretRaw(context, request, cq));
    }
    virtual ::grpc::Status DeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::vault::v1alpha1::DeleteSecretResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::DeleteSecretResponse>> AsyncDeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::DeleteSecretResponse>>(AsyncDeleteSecretRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::DeleteSecretResponse>> PrepareAsyncDeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::DeleteSecretResponse>>(PrepareAsyncDeleteSecretRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      // /CRUD
      virtual void WriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void ReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void DeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response, std::function<void(::grpc::Status)>) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::WriteSecretResponse>* AsyncWriteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::WriteSecretResponse>* PrepareAsyncWriteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::ReadSecretResponse>* AsyncReadSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::ReadSecretResponse>* PrepareAsyncReadSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::DeleteSecretResponse>* AsyncDeleteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::vault::v1alpha1::DeleteSecretResponse>* PrepareAsyncDeleteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status WriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::vault::v1alpha1::WriteSecretResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::WriteSecretResponse>> AsyncWriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::WriteSecretResponse>>(AsyncWriteSecretRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::WriteSecretResponse>> PrepareAsyncWriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::WriteSecretResponse>>(PrepareAsyncWriteSecretRaw(context, request, cq));
    }
    ::grpc::Status ReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::vault::v1alpha1::ReadSecretResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::ReadSecretResponse>> AsyncReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::ReadSecretResponse>>(AsyncReadSecretRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::ReadSecretResponse>> PrepareAsyncReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::ReadSecretResponse>>(PrepareAsyncReadSecretRaw(context, request, cq));
    }
    ::grpc::Status DeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::vault::v1alpha1::DeleteSecretResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>> AsyncDeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>>(AsyncDeleteSecretRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>> PrepareAsyncDeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>>(PrepareAsyncDeleteSecretRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void WriteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response, std::function<void(::grpc::Status)>) override;
      void ReadSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response, std::function<void(::grpc::Status)>) override;
      void DeleteSecret(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response, std::function<void(::grpc::Status)>) override;
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
    ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::WriteSecretResponse>* AsyncWriteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::WriteSecretResponse>* PrepareAsyncWriteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::WriteSecretRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::ReadSecretResponse>* AsyncReadSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::ReadSecretResponse>* PrepareAsyncReadSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::ReadSecretRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>* AsyncDeleteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::vault::v1alpha1::DeleteSecretResponse>* PrepareAsyncDeleteSecretRaw(::grpc::ClientContext* context, const ::vault::v1alpha1::DeleteSecretRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_WriteSecret_;
    const ::grpc::internal::RpcMethod rpcmethod_ReadSecret_;
    const ::grpc::internal::RpcMethod rpcmethod_DeleteSecret_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    // /CRUD
    virtual ::grpc::Status WriteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response);
    virtual ::grpc::Status ReadSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response);
    virtual ::grpc::Status DeleteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_WriteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_WriteSecret() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_WriteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status WriteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestWriteSecret(::grpc::ServerContext* context, ::vault::v1alpha1::WriteSecretRequest* request, ::grpc::ServerAsyncResponseWriter< ::vault::v1alpha1::WriteSecretResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_ReadSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_ReadSecret() {
      ::grpc::Service::MarkMethodAsync(1);
    }
    ~WithAsyncMethod_ReadSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ReadSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestReadSecret(::grpc::ServerContext* context, ::vault::v1alpha1::ReadSecretRequest* request, ::grpc::ServerAsyncResponseWriter< ::vault::v1alpha1::ReadSecretResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_DeleteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithAsyncMethod_DeleteSecret() {
      ::grpc::Service::MarkMethodAsync(2);
    }
    ~WithAsyncMethod_DeleteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DeleteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestDeleteSecret(::grpc::ServerContext* context, ::vault::v1alpha1::DeleteSecretRequest* request, ::grpc::ServerAsyncResponseWriter< ::vault::v1alpha1::DeleteSecretResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(2, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_WriteSecret<WithAsyncMethod_ReadSecret<WithAsyncMethod_DeleteSecret<Service > > > AsyncService;
  template <class BaseClass>
  class WithGenericMethod_WriteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_WriteSecret() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_WriteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status WriteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_ReadSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_ReadSecret() {
      ::grpc::Service::MarkMethodGeneric(1);
    }
    ~WithGenericMethod_ReadSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ReadSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_DeleteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithGenericMethod_DeleteSecret() {
      ::grpc::Service::MarkMethodGeneric(2);
    }
    ~WithGenericMethod_DeleteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DeleteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_WriteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_WriteSecret() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_WriteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status WriteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestWriteSecret(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_ReadSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_ReadSecret() {
      ::grpc::Service::MarkMethodRaw(1);
    }
    ~WithRawMethod_ReadSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ReadSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestReadSecret(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_DeleteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithRawMethod_DeleteSecret() {
      ::grpc::Service::MarkMethodRaw(2);
    }
    ~WithRawMethod_DeleteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DeleteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestDeleteSecret(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(2, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_WriteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_WriteSecret() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::vault::v1alpha1::WriteSecretRequest, ::vault::v1alpha1::WriteSecretResponse>(std::bind(&WithStreamedUnaryMethod_WriteSecret<BaseClass>::StreamedWriteSecret, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_WriteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status WriteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::WriteSecretRequest* request, ::vault::v1alpha1::WriteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedWriteSecret(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::vault::v1alpha1::WriteSecretRequest,::vault::v1alpha1::WriteSecretResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_ReadSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_ReadSecret() {
      ::grpc::Service::MarkMethodStreamed(1,
        new ::grpc::internal::StreamedUnaryHandler< ::vault::v1alpha1::ReadSecretRequest, ::vault::v1alpha1::ReadSecretResponse>(std::bind(&WithStreamedUnaryMethod_ReadSecret<BaseClass>::StreamedReadSecret, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_ReadSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status ReadSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::ReadSecretRequest* request, ::vault::v1alpha1::ReadSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedReadSecret(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::vault::v1alpha1::ReadSecretRequest,::vault::v1alpha1::ReadSecretResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_DeleteSecret : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service *service) {}
   public:
    WithStreamedUnaryMethod_DeleteSecret() {
      ::grpc::Service::MarkMethodStreamed(2,
        new ::grpc::internal::StreamedUnaryHandler< ::vault::v1alpha1::DeleteSecretRequest, ::vault::v1alpha1::DeleteSecretResponse>(std::bind(&WithStreamedUnaryMethod_DeleteSecret<BaseClass>::StreamedDeleteSecret, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_DeleteSecret() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status DeleteSecret(::grpc::ServerContext* context, const ::vault::v1alpha1::DeleteSecretRequest* request, ::vault::v1alpha1::DeleteSecretResponse* response) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedDeleteSecret(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::vault::v1alpha1::DeleteSecretRequest,::vault::v1alpha1::DeleteSecretResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_WriteSecret<WithStreamedUnaryMethod_ReadSecret<WithStreamedUnaryMethod_DeleteSecret<Service > > > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_WriteSecret<WithStreamedUnaryMethod_ReadSecret<WithStreamedUnaryMethod_DeleteSecret<Service > > > StreamedService;
};

}  // namespace v1alpha1
}  // namespace vault


#endif  // GRPC_vault_2fv1alpha1_2fvault_2eproto__INCLUDED
