// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/instance/v1alpha1/instance_api.proto

#include "pipelines/instance/v1alpha1/instance_api.pb.h"

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
namespace instance {
namespace v1alpha1 {
constexpr CreateInstanceRequest::CreateInstanceRequest(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : instance_(nullptr){}
struct CreateInstanceRequestDefaultTypeInternal {
  constexpr CreateInstanceRequestDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~CreateInstanceRequestDefaultTypeInternal() {}
  union {
    CreateInstanceRequest _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT CreateInstanceRequestDefaultTypeInternal _CreateInstanceRequest_default_instance_;
constexpr CreateInstanceResponse::CreateInstanceResponse(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : status_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , instance_(nullptr){}
struct CreateInstanceResponseDefaultTypeInternal {
  constexpr CreateInstanceResponseDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~CreateInstanceResponseDefaultTypeInternal() {}
  union {
    CreateInstanceResponse _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT CreateInstanceResponseDefaultTypeInternal _CreateInstanceResponse_default_instance_;
}  // namespace v1alpha1
}  // namespace instance
}  // namespace pipelines
static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pipelines::instance::v1alpha1::CreateInstanceRequest, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::pipelines::instance::v1alpha1::CreateInstanceRequest, instance_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pipelines::instance::v1alpha1::CreateInstanceResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::pipelines::instance::v1alpha1::CreateInstanceResponse, instance_),
  PROTOBUF_FIELD_OFFSET(::pipelines::instance::v1alpha1::CreateInstanceResponse, status_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::pipelines::instance::v1alpha1::CreateInstanceRequest)},
  { 6, -1, sizeof(::pipelines::instance::v1alpha1::CreateInstanceResponse)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pipelines::instance::v1alpha1::_CreateInstanceRequest_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pipelines::instance::v1alpha1::_CreateInstanceResponse_default_instance_),
};

const char descriptor_table_protodef_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n.pipelines/instance/v1alpha1/instance_a"
  "pi.proto\022\033pipelines.instance.v1alpha1\032*p"
  "ipelines/instance/v1alpha1/instance.prot"
  "o\"Z\n\025CreateInstanceRequest\022A\n\010instance\030\001"
  " \001(\0132%.pipelines.instance.v1alpha1.Insta"
  "nceR\010instance\"s\n\026CreateInstanceResponse\022"
  "A\n\010instance\030\001 \001(\0132%.pipelines.instance.v"
  "1alpha1.InstanceR\010instance\022\026\n\006status\030\002 \001"
  "(\tR\006status2\221\001\n\022InstanceAPIService\022{\n\016Cre"
  "ateInstance\0222.pipelines.instance.v1alpha"
  "1.CreateInstanceRequest\0323.pipelines.inst"
  "ance.v1alpha1.CreateInstanceResponse\"\000B\270"
  "\001\n%io.cuemby.pipelines.instance.v1alpha1"
  "B\020InstanceAPIProtoP\001Z8github.com/cuemby/"
  "ccp-pipelines-service/instancev1alpha1\242\002"
  "\003PPX\252\002\034Pipelines.Instances.V1Alpha1\312\002\033Pi"
  "pelines\\Instance\\V1Alpha1b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_deps[1] = {
  &::descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto = {
  false, false, 673, descriptor_table_protodef_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto, "pipelines/instance/v1alpha1/instance_api.proto", 
  &descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_once, descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_deps, 1, 2,
  schemas, file_default_instances, TableStruct_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto::offsets,
  file_level_metadata_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto, file_level_enum_descriptors_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto, file_level_service_descriptors_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_getter() {
  return &descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto(&descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto);
namespace pipelines {
namespace instance {
namespace v1alpha1 {

// ===================================================================

class CreateInstanceRequest::_Internal {
 public:
  static const ::pipelines::instance::v1alpha1::Instance& instance(const CreateInstanceRequest* msg);
};

const ::pipelines::instance::v1alpha1::Instance&
CreateInstanceRequest::_Internal::instance(const CreateInstanceRequest* msg) {
  return *msg->instance_;
}
void CreateInstanceRequest::clear_instance() {
  if (GetArenaForAllocation() == nullptr && instance_ != nullptr) {
    delete instance_;
  }
  instance_ = nullptr;
}
CreateInstanceRequest::CreateInstanceRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:pipelines.instance.v1alpha1.CreateInstanceRequest)
}
CreateInstanceRequest::CreateInstanceRequest(const CreateInstanceRequest& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  if (from._internal_has_instance()) {
    instance_ = new ::pipelines::instance::v1alpha1::Instance(*from.instance_);
  } else {
    instance_ = nullptr;
  }
  // @@protoc_insertion_point(copy_constructor:pipelines.instance.v1alpha1.CreateInstanceRequest)
}

inline void CreateInstanceRequest::SharedCtor() {
instance_ = nullptr;
}

CreateInstanceRequest::~CreateInstanceRequest() {
  // @@protoc_insertion_point(destructor:pipelines.instance.v1alpha1.CreateInstanceRequest)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void CreateInstanceRequest::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  if (this != internal_default_instance()) delete instance_;
}

void CreateInstanceRequest::ArenaDtor(void* object) {
  CreateInstanceRequest* _this = reinterpret_cast< CreateInstanceRequest* >(object);
  (void)_this;
}
void CreateInstanceRequest::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void CreateInstanceRequest::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void CreateInstanceRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:pipelines.instance.v1alpha1.CreateInstanceRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  if (GetArenaForAllocation() == nullptr && instance_ != nullptr) {
    delete instance_;
  }
  instance_ = nullptr;
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* CreateInstanceRequest::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // .pipelines.instance.v1alpha1.Instance instance = 1 [json_name = "instance"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          ptr = ctx->ParseMessage(_internal_mutable_instance(), ptr);
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

::PROTOBUF_NAMESPACE_ID::uint8* CreateInstanceRequest::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pipelines.instance.v1alpha1.CreateInstanceRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .pipelines.instance.v1alpha1.Instance instance = 1 [json_name = "instance"];
  if (this->_internal_has_instance()) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(
        1, _Internal::instance(this), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pipelines.instance.v1alpha1.CreateInstanceRequest)
  return target;
}

size_t CreateInstanceRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pipelines.instance.v1alpha1.CreateInstanceRequest)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // .pipelines.instance.v1alpha1.Instance instance = 1 [json_name = "instance"];
  if (this->_internal_has_instance()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(
        *instance_);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData CreateInstanceRequest::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    CreateInstanceRequest::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*CreateInstanceRequest::GetClassData() const { return &_class_data_; }

void CreateInstanceRequest::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<CreateInstanceRequest *>(to)->MergeFrom(
      static_cast<const CreateInstanceRequest &>(from));
}


void CreateInstanceRequest::MergeFrom(const CreateInstanceRequest& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pipelines.instance.v1alpha1.CreateInstanceRequest)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from._internal_has_instance()) {
    _internal_mutable_instance()->::pipelines::instance::v1alpha1::Instance::MergeFrom(from._internal_instance());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void CreateInstanceRequest::CopyFrom(const CreateInstanceRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pipelines.instance.v1alpha1.CreateInstanceRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CreateInstanceRequest::IsInitialized() const {
  return true;
}

void CreateInstanceRequest::InternalSwap(CreateInstanceRequest* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  swap(instance_, other->instance_);
}

::PROTOBUF_NAMESPACE_ID::Metadata CreateInstanceRequest::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_getter, &descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_once,
      file_level_metadata_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto[0]);
}

// ===================================================================

class CreateInstanceResponse::_Internal {
 public:
  static const ::pipelines::instance::v1alpha1::Instance& instance(const CreateInstanceResponse* msg);
};

const ::pipelines::instance::v1alpha1::Instance&
CreateInstanceResponse::_Internal::instance(const CreateInstanceResponse* msg) {
  return *msg->instance_;
}
void CreateInstanceResponse::clear_instance() {
  if (GetArenaForAllocation() == nullptr && instance_ != nullptr) {
    delete instance_;
  }
  instance_ = nullptr;
}
CreateInstanceResponse::CreateInstanceResponse(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:pipelines.instance.v1alpha1.CreateInstanceResponse)
}
CreateInstanceResponse::CreateInstanceResponse(const CreateInstanceResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  status_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_status().empty()) {
    status_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_status(), 
      GetArenaForAllocation());
  }
  if (from._internal_has_instance()) {
    instance_ = new ::pipelines::instance::v1alpha1::Instance(*from.instance_);
  } else {
    instance_ = nullptr;
  }
  // @@protoc_insertion_point(copy_constructor:pipelines.instance.v1alpha1.CreateInstanceResponse)
}

inline void CreateInstanceResponse::SharedCtor() {
status_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
instance_ = nullptr;
}

CreateInstanceResponse::~CreateInstanceResponse() {
  // @@protoc_insertion_point(destructor:pipelines.instance.v1alpha1.CreateInstanceResponse)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void CreateInstanceResponse::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  status_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (this != internal_default_instance()) delete instance_;
}

void CreateInstanceResponse::ArenaDtor(void* object) {
  CreateInstanceResponse* _this = reinterpret_cast< CreateInstanceResponse* >(object);
  (void)_this;
}
void CreateInstanceResponse::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void CreateInstanceResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void CreateInstanceResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:pipelines.instance.v1alpha1.CreateInstanceResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  status_.ClearToEmpty();
  if (GetArenaForAllocation() == nullptr && instance_ != nullptr) {
    delete instance_;
  }
  instance_ = nullptr;
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* CreateInstanceResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // .pipelines.instance.v1alpha1.Instance instance = 1 [json_name = "instance"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          ptr = ctx->ParseMessage(_internal_mutable_instance(), ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string status = 2 [json_name = "status"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_status();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "pipelines.instance.v1alpha1.CreateInstanceResponse.status"));
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

::PROTOBUF_NAMESPACE_ID::uint8* CreateInstanceResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pipelines.instance.v1alpha1.CreateInstanceResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .pipelines.instance.v1alpha1.Instance instance = 1 [json_name = "instance"];
  if (this->_internal_has_instance()) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(
        1, _Internal::instance(this), target, stream);
  }

  // string status = 2 [json_name = "status"];
  if (!this->_internal_status().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_status().data(), static_cast<int>(this->_internal_status().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "pipelines.instance.v1alpha1.CreateInstanceResponse.status");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_status(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pipelines.instance.v1alpha1.CreateInstanceResponse)
  return target;
}

size_t CreateInstanceResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pipelines.instance.v1alpha1.CreateInstanceResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string status = 2 [json_name = "status"];
  if (!this->_internal_status().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_status());
  }

  // .pipelines.instance.v1alpha1.Instance instance = 1 [json_name = "instance"];
  if (this->_internal_has_instance()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(
        *instance_);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData CreateInstanceResponse::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    CreateInstanceResponse::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*CreateInstanceResponse::GetClassData() const { return &_class_data_; }

void CreateInstanceResponse::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<CreateInstanceResponse *>(to)->MergeFrom(
      static_cast<const CreateInstanceResponse &>(from));
}


void CreateInstanceResponse::MergeFrom(const CreateInstanceResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pipelines.instance.v1alpha1.CreateInstanceResponse)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_status().empty()) {
    _internal_set_status(from._internal_status());
  }
  if (from._internal_has_instance()) {
    _internal_mutable_instance()->::pipelines::instance::v1alpha1::Instance::MergeFrom(from._internal_instance());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void CreateInstanceResponse::CopyFrom(const CreateInstanceResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pipelines.instance.v1alpha1.CreateInstanceResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CreateInstanceResponse::IsInitialized() const {
  return true;
}

void CreateInstanceResponse::InternalSwap(CreateInstanceResponse* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &status_, GetArenaForAllocation(),
      &other->status_, other->GetArenaForAllocation()
  );
  swap(instance_, other->instance_);
}

::PROTOBUF_NAMESPACE_ID::Metadata CreateInstanceResponse::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_getter, &descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto_once,
      file_level_metadata_pipelines_2finstance_2fv1alpha1_2finstance_5fapi_2eproto[1]);
}

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1alpha1
}  // namespace instance
}  // namespace pipelines
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::pipelines::instance::v1alpha1::CreateInstanceRequest* Arena::CreateMaybeMessage< ::pipelines::instance::v1alpha1::CreateInstanceRequest >(Arena* arena) {
  return Arena::CreateMessageInternal< ::pipelines::instance::v1alpha1::CreateInstanceRequest >(arena);
}
template<> PROTOBUF_NOINLINE ::pipelines::instance::v1alpha1::CreateInstanceResponse* Arena::CreateMaybeMessage< ::pipelines::instance::v1alpha1::CreateInstanceResponse >(Arena* arena) {
  return Arena::CreateMessageInternal< ::pipelines::instance::v1alpha1::CreateInstanceResponse >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
