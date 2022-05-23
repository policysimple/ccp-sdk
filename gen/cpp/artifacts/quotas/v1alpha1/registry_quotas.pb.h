// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/quotas/v1alpha1/registry_quotas.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3017000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3017003 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata_lite.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxiliaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[2]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto;
namespace artifacts {
namespace quotas {
namespace v1alpha1 {
class HarborQuotas;
struct HarborQuotasDefaultTypeInternal;
extern HarborQuotasDefaultTypeInternal _HarborQuotas_default_instance_;
class QuotasRegistry;
struct QuotasRegistryDefaultTypeInternal;
extern QuotasRegistryDefaultTypeInternal _QuotasRegistry_default_instance_;
}  // namespace v1alpha1
}  // namespace quotas
}  // namespace artifacts
PROTOBUF_NAMESPACE_OPEN
template<> ::artifacts::quotas::v1alpha1::HarborQuotas* Arena::CreateMaybeMessage<::artifacts::quotas::v1alpha1::HarborQuotas>(Arena*);
template<> ::artifacts::quotas::v1alpha1::QuotasRegistry* Arena::CreateMaybeMessage<::artifacts::quotas::v1alpha1::QuotasRegistry>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace artifacts {
namespace quotas {
namespace v1alpha1 {

// ===================================================================

class HarborQuotas final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:artifacts.quotas.v1alpha1.HarborQuotas) */ {
 public:
  inline HarborQuotas() : HarborQuotas(nullptr) {}
  ~HarborQuotas() override;
  explicit constexpr HarborQuotas(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  HarborQuotas(const HarborQuotas& from);
  HarborQuotas(HarborQuotas&& from) noexcept
    : HarborQuotas() {
    *this = ::std::move(from);
  }

  inline HarborQuotas& operator=(const HarborQuotas& from) {
    CopyFrom(from);
    return *this;
  }
  inline HarborQuotas& operator=(HarborQuotas&& from) noexcept {
    if (this == &from) return *this;
    if (GetOwningArena() == from.GetOwningArena()) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const HarborQuotas& default_instance() {
    return *internal_default_instance();
  }
  static inline const HarborQuotas* internal_default_instance() {
    return reinterpret_cast<const HarborQuotas*>(
               &_HarborQuotas_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(HarborQuotas& a, HarborQuotas& b) {
    a.Swap(&b);
  }
  inline void Swap(HarborQuotas* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(HarborQuotas* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline HarborQuotas* New() const final {
    return new HarborQuotas();
  }

  HarborQuotas* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<HarborQuotas>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const HarborQuotas& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const HarborQuotas& from);
  private:
  static void MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to, const ::PROTOBUF_NAMESPACE_ID::Message&from);
  public:
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(HarborQuotas* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "artifacts.quotas.v1alpha1.HarborQuotas";
  }
  protected:
  explicit HarborQuotas(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                       bool is_message_owned = false);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  public:

  static const ClassData _class_data_;
  const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*GetClassData() const final;

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kStorageUsedFieldNumber = 1,
    kStorageLimitFieldNumber = 2,
  };
  // uint32 storage_used = 1 [json_name = "storageUsed"];
  void clear_storage_used();
  ::PROTOBUF_NAMESPACE_ID::uint32 storage_used() const;
  void set_storage_used(::PROTOBUF_NAMESPACE_ID::uint32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::uint32 _internal_storage_used() const;
  void _internal_set_storage_used(::PROTOBUF_NAMESPACE_ID::uint32 value);
  public:

  // uint32 storage_limit = 2 [json_name = "storageLimit"];
  void clear_storage_limit();
  ::PROTOBUF_NAMESPACE_ID::uint32 storage_limit() const;
  void set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::uint32 _internal_storage_limit() const;
  void _internal_set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value);
  public:

  // @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.HarborQuotas)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::uint32 storage_used_;
  ::PROTOBUF_NAMESPACE_ID::uint32 storage_limit_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto;
};
// -------------------------------------------------------------------

class QuotasRegistry final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:artifacts.quotas.v1alpha1.QuotasRegistry) */ {
 public:
  inline QuotasRegistry() : QuotasRegistry(nullptr) {}
  ~QuotasRegistry() override;
  explicit constexpr QuotasRegistry(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  QuotasRegistry(const QuotasRegistry& from);
  QuotasRegistry(QuotasRegistry&& from) noexcept
    : QuotasRegistry() {
    *this = ::std::move(from);
  }

  inline QuotasRegistry& operator=(const QuotasRegistry& from) {
    CopyFrom(from);
    return *this;
  }
  inline QuotasRegistry& operator=(QuotasRegistry&& from) noexcept {
    if (this == &from) return *this;
    if (GetOwningArena() == from.GetOwningArena()) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const QuotasRegistry& default_instance() {
    return *internal_default_instance();
  }
  static inline const QuotasRegistry* internal_default_instance() {
    return reinterpret_cast<const QuotasRegistry*>(
               &_QuotasRegistry_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(QuotasRegistry& a, QuotasRegistry& b) {
    a.Swap(&b);
  }
  inline void Swap(QuotasRegistry* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(QuotasRegistry* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline QuotasRegistry* New() const final {
    return new QuotasRegistry();
  }

  QuotasRegistry* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<QuotasRegistry>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const QuotasRegistry& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const QuotasRegistry& from);
  private:
  static void MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to, const ::PROTOBUF_NAMESPACE_ID::Message&from);
  public:
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(QuotasRegistry* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "artifacts.quotas.v1alpha1.QuotasRegistry";
  }
  protected:
  explicit QuotasRegistry(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                       bool is_message_owned = false);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  public:

  static const ClassData _class_data_;
  const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*GetClassData() const final;

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kIdFieldNumber = 1,
    kEnvironmentIdFieldNumber = 4,
    kHarborFieldNumber = 7,
    kOrganizationIdFieldNumber = 2,
    kProjectIdFieldNumber = 3,
    kActiveFieldNumber = 6,
  };
  // string id = 1 [json_name = "id"];
  void clear_id();
  const std::string& id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_id();
  void set_allocated_id(std::string* id);
  private:
  const std::string& _internal_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_id(const std::string& value);
  std::string* _internal_mutable_id();
  public:

  // string environment_id = 4 [json_name = "environmentId"];
  void clear_environment_id();
  const std::string& environment_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_environment_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_environment_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_environment_id();
  void set_allocated_environment_id(std::string* environment_id);
  private:
  const std::string& _internal_environment_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_environment_id(const std::string& value);
  std::string* _internal_mutable_environment_id();
  public:

  // .artifacts.quotas.v1alpha1.HarborQuotas harbor = 7 [json_name = "harbor"];
  bool has_harbor() const;
  private:
  bool _internal_has_harbor() const;
  public:
  void clear_harbor();
  const ::artifacts::quotas::v1alpha1::HarborQuotas& harbor() const;
  PROTOBUF_MUST_USE_RESULT ::artifacts::quotas::v1alpha1::HarborQuotas* release_harbor();
  ::artifacts::quotas::v1alpha1::HarborQuotas* mutable_harbor();
  void set_allocated_harbor(::artifacts::quotas::v1alpha1::HarborQuotas* harbor);
  private:
  const ::artifacts::quotas::v1alpha1::HarborQuotas& _internal_harbor() const;
  ::artifacts::quotas::v1alpha1::HarborQuotas* _internal_mutable_harbor();
  public:
  void unsafe_arena_set_allocated_harbor(
      ::artifacts::quotas::v1alpha1::HarborQuotas* harbor);
  ::artifacts::quotas::v1alpha1::HarborQuotas* unsafe_arena_release_harbor();

  // uint32 organization_id = 2 [json_name = "organizationId"];
  void clear_organization_id();
  ::PROTOBUF_NAMESPACE_ID::uint32 organization_id() const;
  void set_organization_id(::PROTOBUF_NAMESPACE_ID::uint32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::uint32 _internal_organization_id() const;
  void _internal_set_organization_id(::PROTOBUF_NAMESPACE_ID::uint32 value);
  public:

  // uint32 project_id = 3 [json_name = "projectId"];
  void clear_project_id();
  ::PROTOBUF_NAMESPACE_ID::uint32 project_id() const;
  void set_project_id(::PROTOBUF_NAMESPACE_ID::uint32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::uint32 _internal_project_id() const;
  void _internal_set_project_id(::PROTOBUF_NAMESPACE_ID::uint32 value);
  public:

  // bool active = 6 [json_name = "active"];
  void clear_active();
  bool active() const;
  void set_active(bool value);
  private:
  bool _internal_active() const;
  void _internal_set_active(bool value);
  public:

  // @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.QuotasRegistry)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr environment_id_;
  ::artifacts::quotas::v1alpha1::HarborQuotas* harbor_;
  ::PROTOBUF_NAMESPACE_ID::uint32 organization_id_;
  ::PROTOBUF_NAMESPACE_ID::uint32 project_id_;
  bool active_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// HarborQuotas

// uint32 storage_used = 1 [json_name = "storageUsed"];
inline void HarborQuotas::clear_storage_used() {
  storage_used_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborQuotas::_internal_storage_used() const {
  return storage_used_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborQuotas::storage_used() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.HarborQuotas.storage_used)
  return _internal_storage_used();
}
inline void HarborQuotas::_internal_set_storage_used(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  storage_used_ = value;
}
inline void HarborQuotas::set_storage_used(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_storage_used(value);
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.HarborQuotas.storage_used)
}

// uint32 storage_limit = 2 [json_name = "storageLimit"];
inline void HarborQuotas::clear_storage_limit() {
  storage_limit_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborQuotas::_internal_storage_limit() const {
  return storage_limit_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborQuotas::storage_limit() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.HarborQuotas.storage_limit)
  return _internal_storage_limit();
}
inline void HarborQuotas::_internal_set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  storage_limit_ = value;
}
inline void HarborQuotas::set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_storage_limit(value);
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.HarborQuotas.storage_limit)
}

// -------------------------------------------------------------------

// QuotasRegistry

// string id = 1 [json_name = "id"];
inline void QuotasRegistry::clear_id() {
  id_.ClearToEmpty();
}
inline const std::string& QuotasRegistry::id() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.QuotasRegistry.id)
  return _internal_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void QuotasRegistry::set_id(ArgT0&& arg0, ArgT... args) {
 
 id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.QuotasRegistry.id)
}
inline std::string* QuotasRegistry::mutable_id() {
  std::string* _s = _internal_mutable_id();
  // @@protoc_insertion_point(field_mutable:artifacts.quotas.v1alpha1.QuotasRegistry.id)
  return _s;
}
inline const std::string& QuotasRegistry::_internal_id() const {
  return id_.Get();
}
inline void QuotasRegistry::_internal_set_id(const std::string& value) {
  
  id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* QuotasRegistry::_internal_mutable_id() {
  
  return id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* QuotasRegistry::release_id() {
  // @@protoc_insertion_point(field_release:artifacts.quotas.v1alpha1.QuotasRegistry.id)
  return id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void QuotasRegistry::set_allocated_id(std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:artifacts.quotas.v1alpha1.QuotasRegistry.id)
}

// uint32 organization_id = 2 [json_name = "organizationId"];
inline void QuotasRegistry::clear_organization_id() {
  organization_id_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 QuotasRegistry::_internal_organization_id() const {
  return organization_id_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 QuotasRegistry::organization_id() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.QuotasRegistry.organization_id)
  return _internal_organization_id();
}
inline void QuotasRegistry::_internal_set_organization_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  organization_id_ = value;
}
inline void QuotasRegistry::set_organization_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_organization_id(value);
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.QuotasRegistry.organization_id)
}

// uint32 project_id = 3 [json_name = "projectId"];
inline void QuotasRegistry::clear_project_id() {
  project_id_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 QuotasRegistry::_internal_project_id() const {
  return project_id_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 QuotasRegistry::project_id() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.QuotasRegistry.project_id)
  return _internal_project_id();
}
inline void QuotasRegistry::_internal_set_project_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  project_id_ = value;
}
inline void QuotasRegistry::set_project_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_project_id(value);
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.QuotasRegistry.project_id)
}

// string environment_id = 4 [json_name = "environmentId"];
inline void QuotasRegistry::clear_environment_id() {
  environment_id_.ClearToEmpty();
}
inline const std::string& QuotasRegistry::environment_id() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.QuotasRegistry.environment_id)
  return _internal_environment_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void QuotasRegistry::set_environment_id(ArgT0&& arg0, ArgT... args) {
 
 environment_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.QuotasRegistry.environment_id)
}
inline std::string* QuotasRegistry::mutable_environment_id() {
  std::string* _s = _internal_mutable_environment_id();
  // @@protoc_insertion_point(field_mutable:artifacts.quotas.v1alpha1.QuotasRegistry.environment_id)
  return _s;
}
inline const std::string& QuotasRegistry::_internal_environment_id() const {
  return environment_id_.Get();
}
inline void QuotasRegistry::_internal_set_environment_id(const std::string& value) {
  
  environment_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* QuotasRegistry::_internal_mutable_environment_id() {
  
  return environment_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* QuotasRegistry::release_environment_id() {
  // @@protoc_insertion_point(field_release:artifacts.quotas.v1alpha1.QuotasRegistry.environment_id)
  return environment_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void QuotasRegistry::set_allocated_environment_id(std::string* environment_id) {
  if (environment_id != nullptr) {
    
  } else {
    
  }
  environment_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), environment_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:artifacts.quotas.v1alpha1.QuotasRegistry.environment_id)
}

// bool active = 6 [json_name = "active"];
inline void QuotasRegistry::clear_active() {
  active_ = false;
}
inline bool QuotasRegistry::_internal_active() const {
  return active_;
}
inline bool QuotasRegistry::active() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.QuotasRegistry.active)
  return _internal_active();
}
inline void QuotasRegistry::_internal_set_active(bool value) {
  
  active_ = value;
}
inline void QuotasRegistry::set_active(bool value) {
  _internal_set_active(value);
  // @@protoc_insertion_point(field_set:artifacts.quotas.v1alpha1.QuotasRegistry.active)
}

// .artifacts.quotas.v1alpha1.HarborQuotas harbor = 7 [json_name = "harbor"];
inline bool QuotasRegistry::_internal_has_harbor() const {
  return this != internal_default_instance() && harbor_ != nullptr;
}
inline bool QuotasRegistry::has_harbor() const {
  return _internal_has_harbor();
}
inline void QuotasRegistry::clear_harbor() {
  if (GetArenaForAllocation() == nullptr && harbor_ != nullptr) {
    delete harbor_;
  }
  harbor_ = nullptr;
}
inline const ::artifacts::quotas::v1alpha1::HarborQuotas& QuotasRegistry::_internal_harbor() const {
  const ::artifacts::quotas::v1alpha1::HarborQuotas* p = harbor_;
  return p != nullptr ? *p : reinterpret_cast<const ::artifacts::quotas::v1alpha1::HarborQuotas&>(
      ::artifacts::quotas::v1alpha1::_HarborQuotas_default_instance_);
}
inline const ::artifacts::quotas::v1alpha1::HarborQuotas& QuotasRegistry::harbor() const {
  // @@protoc_insertion_point(field_get:artifacts.quotas.v1alpha1.QuotasRegistry.harbor)
  return _internal_harbor();
}
inline void QuotasRegistry::unsafe_arena_set_allocated_harbor(
    ::artifacts::quotas::v1alpha1::HarborQuotas* harbor) {
  if (GetArenaForAllocation() == nullptr) {
    delete reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(harbor_);
  }
  harbor_ = harbor;
  if (harbor) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:artifacts.quotas.v1alpha1.QuotasRegistry.harbor)
}
inline ::artifacts::quotas::v1alpha1::HarborQuotas* QuotasRegistry::release_harbor() {
  
  ::artifacts::quotas::v1alpha1::HarborQuotas* temp = harbor_;
  harbor_ = nullptr;
#ifdef PROTOBUF_FORCE_COPY_IN_RELEASE
  auto* old =  reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(temp);
  temp = ::PROTOBUF_NAMESPACE_ID::internal::DuplicateIfNonNull(temp);
  if (GetArenaForAllocation() == nullptr) { delete old; }
#else  // PROTOBUF_FORCE_COPY_IN_RELEASE
  if (GetArenaForAllocation() != nullptr) {
    temp = ::PROTOBUF_NAMESPACE_ID::internal::DuplicateIfNonNull(temp);
  }
#endif  // !PROTOBUF_FORCE_COPY_IN_RELEASE
  return temp;
}
inline ::artifacts::quotas::v1alpha1::HarborQuotas* QuotasRegistry::unsafe_arena_release_harbor() {
  // @@protoc_insertion_point(field_release:artifacts.quotas.v1alpha1.QuotasRegistry.harbor)
  
  ::artifacts::quotas::v1alpha1::HarborQuotas* temp = harbor_;
  harbor_ = nullptr;
  return temp;
}
inline ::artifacts::quotas::v1alpha1::HarborQuotas* QuotasRegistry::_internal_mutable_harbor() {
  
  if (harbor_ == nullptr) {
    auto* p = CreateMaybeMessage<::artifacts::quotas::v1alpha1::HarborQuotas>(GetArenaForAllocation());
    harbor_ = p;
  }
  return harbor_;
}
inline ::artifacts::quotas::v1alpha1::HarborQuotas* QuotasRegistry::mutable_harbor() {
  ::artifacts::quotas::v1alpha1::HarborQuotas* _msg = _internal_mutable_harbor();
  // @@protoc_insertion_point(field_mutable:artifacts.quotas.v1alpha1.QuotasRegistry.harbor)
  return _msg;
}
inline void QuotasRegistry::set_allocated_harbor(::artifacts::quotas::v1alpha1::HarborQuotas* harbor) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaForAllocation();
  if (message_arena == nullptr) {
    delete harbor_;
  }
  if (harbor) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena =
        ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper<::artifacts::quotas::v1alpha1::HarborQuotas>::GetOwningArena(harbor);
    if (message_arena != submessage_arena) {
      harbor = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, harbor, submessage_arena);
    }
    
  } else {
    
  }
  harbor_ = harbor;
  // @@protoc_insertion_point(field_set_allocated:artifacts.quotas.v1alpha1.QuotasRegistry.harbor)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace v1alpha1
}  // namespace quotas
}  // namespace artifacts

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_artifacts_2fquotas_2fv1alpha1_2fregistry_5fquotas_2eproto