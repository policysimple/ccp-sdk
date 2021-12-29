// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

#include "pipelines/environment/v1alpha1/environment_api.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>

PROTOBUF_PRAGMA_INIT_SEG
namespace pipelines {
namespace environment {
namespace v1alpha1 {
constexpr CreateEnvironmentRequest::CreateEnvironmentRequest(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : environment_(nullptr){}
struct CreateEnvironmentRequestDefaultTypeInternal {
  constexpr CreateEnvironmentRequestDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~CreateEnvironmentRequestDefaultTypeInternal() {}
  union {
    CreateEnvironmentRequest _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT CreateEnvironmentRequestDefaultTypeInternal _CreateEnvironmentRequest_default_instance_;
constexpr CreateEnvironmentResponse::CreateEnvironmentResponse(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized){}
struct CreateEnvironmentResponseDefaultTypeInternal {
  constexpr CreateEnvironmentResponseDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~CreateEnvironmentResponseDefaultTypeInternal() {}
  union {
    CreateEnvironmentResponse _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT CreateEnvironmentResponseDefaultTypeInternal _CreateEnvironmentResponse_default_instance_;
}  // namespace v1alpha1
}  // namespace environment
}  // namespace pipelines
static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pipelines::environment::v1alpha1::CreateEnvironmentRequest, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::pipelines::environment::v1alpha1::CreateEnvironmentRequest, environment_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pipelines::environment::v1alpha1::CreateEnvironmentResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::pipelines::environment::v1alpha1::CreateEnvironmentRequest)},
  { 6, -1, sizeof(::pipelines::environment::v1alpha1::CreateEnvironmentResponse)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pipelines::environment::v1alpha1::_CreateEnvironmentRequest_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pipelines::environment::v1alpha1::_CreateEnvironmentResponse_default_instance_),
};

const char descriptor_table_protodef_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n4pipelines/environment/v1alpha1/environ"
  "ment_api.proto\022\036pipelines.environment.v1"
  "alpha1\0320pipelines/environment/v1alpha1/e"
  "nvironment.proto\"i\n\030CreateEnvironmentReq"
  "uest\022M\n\013environment\030\001 \001(\0132+.pipelines.en"
  "vironment.v1alpha1.EnvironmentR\013environm"
  "ent\"\033\n\031CreateEnvironmentResponse2\242\001\n\025Env"
  "ironmentAPIService\022\210\001\n\021CreateEnvironment"
  "\0228.pipelines.environment.v1alpha1.Create"
  "EnvironmentRequest\0329.pipelines.environme"
  "nt.v1alpha1.CreateEnvironmentResponseB\312\001"
  "\n(io.cuemby.pipelines.environment.v1alph"
  "a1B\023EnvironmentAPIProtoP\001Z\?github.com/cu"
  "emby/ccp-sdk/gen/go/pipelines/environmen"
  "t/v1alpha1\242\002\003PPX\252\002\036Pipelines.Environment"
  ".V1Alpha1\312\002\036Pipelines\\Environment\\V1Alph"
  "a1b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_deps[1] = {
  &::descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto = {
  false, false, 650, descriptor_table_protodef_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto, "pipelines/environment/v1alpha1/environment_api.proto", 
  &descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_once, descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_deps, 1, 2,
  schemas, file_default_instances, TableStruct_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto::offsets,
  file_level_metadata_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto, file_level_enum_descriptors_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto, file_level_service_descriptors_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_getter() {
  return &descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto(&descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto);
namespace pipelines {
namespace environment {
namespace v1alpha1 {

// ===================================================================

class CreateEnvironmentRequest::_Internal {
 public:
  static const ::pipelines::environment::v1alpha1::Environment& environment(const CreateEnvironmentRequest* msg);
};

const ::pipelines::environment::v1alpha1::Environment&
CreateEnvironmentRequest::_Internal::environment(const CreateEnvironmentRequest* msg) {
  return *msg->environment_;
}
void CreateEnvironmentRequest::clear_environment() {
  if (GetArenaForAllocation() == nullptr && environment_ != nullptr) {
    delete environment_;
  }
  environment_ = nullptr;
}
CreateEnvironmentRequest::CreateEnvironmentRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
}
CreateEnvironmentRequest::CreateEnvironmentRequest(const CreateEnvironmentRequest& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  if (from._internal_has_environment()) {
    environment_ = new ::pipelines::environment::v1alpha1::Environment(*from.environment_);
  } else {
    environment_ = nullptr;
  }
  // @@protoc_insertion_point(copy_constructor:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
}

inline void CreateEnvironmentRequest::SharedCtor() {
environment_ = nullptr;
}

CreateEnvironmentRequest::~CreateEnvironmentRequest() {
  // @@protoc_insertion_point(destructor:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void CreateEnvironmentRequest::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  if (this != internal_default_instance()) delete environment_;
}

void CreateEnvironmentRequest::ArenaDtor(void* object) {
  CreateEnvironmentRequest* _this = reinterpret_cast< CreateEnvironmentRequest* >(object);
  (void)_this;
}
void CreateEnvironmentRequest::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void CreateEnvironmentRequest::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void CreateEnvironmentRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  if (GetArenaForAllocation() == nullptr && environment_ != nullptr) {
    delete environment_;
  }
  environment_ = nullptr;
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* CreateEnvironmentRequest::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          ptr = ctx->ParseMessage(_internal_mutable_environment(), ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag == 0) || ((tag & 7) == 4)) {
          CHK_(ptr);
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* CreateEnvironmentRequest::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];
  if (this->_internal_has_environment()) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(
        1, _Internal::environment(this), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  return target;
}

size_t CreateEnvironmentRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];
  if (this->_internal_has_environment()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(
        *environment_);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData CreateEnvironmentRequest::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    CreateEnvironmentRequest::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*CreateEnvironmentRequest::GetClassData() const { return &_class_data_; }

void CreateEnvironmentRequest::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<CreateEnvironmentRequest *>(to)->MergeFrom(
      static_cast<const CreateEnvironmentRequest &>(from));
}


void CreateEnvironmentRequest::MergeFrom(const CreateEnvironmentRequest& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from._internal_has_environment()) {
    _internal_mutable_environment()->::pipelines::environment::v1alpha1::Environment::MergeFrom(from._internal_environment());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void CreateEnvironmentRequest::CopyFrom(const CreateEnvironmentRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pipelines.environment.v1alpha1.CreateEnvironmentRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CreateEnvironmentRequest::IsInitialized() const {
  return true;
}

void CreateEnvironmentRequest::InternalSwap(CreateEnvironmentRequest* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  swap(environment_, other->environment_);
}

::PROTOBUF_NAMESPACE_ID::Metadata CreateEnvironmentRequest::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_getter, &descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_once,
      file_level_metadata_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto[0]);
}

// ===================================================================

class CreateEnvironmentResponse::_Internal {
 public:
};

CreateEnvironmentResponse::CreateEnvironmentResponse(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
}
CreateEnvironmentResponse::CreateEnvironmentResponse(const CreateEnvironmentResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
}

inline void CreateEnvironmentResponse::SharedCtor() {
}

CreateEnvironmentResponse::~CreateEnvironmentResponse() {
  // @@protoc_insertion_point(destructor:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void CreateEnvironmentResponse::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
}

void CreateEnvironmentResponse::ArenaDtor(void* object) {
  CreateEnvironmentResponse* _this = reinterpret_cast< CreateEnvironmentResponse* >(object);
  (void)_this;
}
void CreateEnvironmentResponse::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void CreateEnvironmentResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void CreateEnvironmentResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* CreateEnvironmentResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
        if ((tag == 0) || ((tag & 7) == 4)) {
          CHK_(ptr);
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* CreateEnvironmentResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  return target;
}

size_t CreateEnvironmentResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData CreateEnvironmentResponse::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    CreateEnvironmentResponse::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*CreateEnvironmentResponse::GetClassData() const { return &_class_data_; }

void CreateEnvironmentResponse::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<CreateEnvironmentResponse *>(to)->MergeFrom(
      static_cast<const CreateEnvironmentResponse &>(from));
}


void CreateEnvironmentResponse::MergeFrom(const CreateEnvironmentResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void CreateEnvironmentResponse::CopyFrom(const CreateEnvironmentResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pipelines.environment.v1alpha1.CreateEnvironmentResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CreateEnvironmentResponse::IsInitialized() const {
  return true;
}

void CreateEnvironmentResponse::InternalSwap(CreateEnvironmentResponse* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
}

::PROTOBUF_NAMESPACE_ID::Metadata CreateEnvironmentResponse::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_getter, &descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto_once,
      file_level_metadata_pipelines_2fenvironment_2fv1alpha1_2fenvironment_5fapi_2eproto[1]);
}

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1alpha1
}  // namespace environment
}  // namespace pipelines
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::pipelines::environment::v1alpha1::CreateEnvironmentRequest* Arena::CreateMaybeMessage< ::pipelines::environment::v1alpha1::CreateEnvironmentRequest >(Arena* arena) {
  return Arena::CreateMessageInternal< ::pipelines::environment::v1alpha1::CreateEnvironmentRequest >(arena);
}
template<> PROTOBUF_NOINLINE ::pipelines::environment::v1alpha1::CreateEnvironmentResponse* Arena::CreateMaybeMessage< ::pipelines::environment::v1alpha1::CreateEnvironmentResponse >(Arena* arena) {
  return Arena::CreateMessageInternal< ::pipelines::environment::v1alpha1::CreateEnvironmentResponse >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
