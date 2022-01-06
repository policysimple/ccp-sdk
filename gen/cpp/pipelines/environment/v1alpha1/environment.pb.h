// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxiliaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[1]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto;
namespace pipelines {
namespace environment {
namespace v1alpha1 {
class Environment;
struct EnvironmentDefaultTypeInternal;
extern EnvironmentDefaultTypeInternal _Environment_default_instance_;
}  // namespace v1alpha1
}  // namespace environment
}  // namespace pipelines
PROTOBUF_NAMESPACE_OPEN
template<> ::pipelines::environment::v1alpha1::Environment* Arena::CreateMaybeMessage<::pipelines::environment::v1alpha1::Environment>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace pipelines {
namespace environment {
namespace v1alpha1 {

// ===================================================================

class Environment final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pipelines.environment.v1alpha1.Environment) */ {
 public:
  inline Environment() : Environment(nullptr) {}
  ~Environment() override;
  explicit constexpr Environment(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  Environment(const Environment& from);
  Environment(Environment&& from) noexcept
    : Environment() {
    *this = ::std::move(from);
  }

  inline Environment& operator=(const Environment& from) {
    CopyFrom(from);
    return *this;
  }
  inline Environment& operator=(Environment&& from) noexcept {
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
  static const Environment& default_instance() {
    return *internal_default_instance();
  }
  static inline const Environment* internal_default_instance() {
    return reinterpret_cast<const Environment*>(
               &_Environment_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(Environment& a, Environment& b) {
    a.Swap(&b);
  }
  inline void Swap(Environment* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(Environment* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Environment* New() const final {
    return new Environment();
  }

  Environment* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Environment>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const Environment& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const Environment& from);
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
  void InternalSwap(Environment* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pipelines.environment.v1alpha1.Environment";
  }
  protected:
  explicit Environment(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kOrganizationIdFieldNumber = 2,
    kProjectIdFieldNumber = 3,
    kNameFieldNumber = 4,
    kStatusTypeFieldNumber = 6,
    kActiveFieldNumber = 5,
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

  // string organization_id = 2 [json_name = "organizationId"];
  void clear_organization_id();
  const std::string& organization_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_organization_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_organization_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_organization_id();
  void set_allocated_organization_id(std::string* organization_id);
  private:
  const std::string& _internal_organization_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_organization_id(const std::string& value);
  std::string* _internal_mutable_organization_id();
  public:

  // string project_id = 3 [json_name = "projectId"];
  void clear_project_id();
  const std::string& project_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_project_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_project_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_project_id();
  void set_allocated_project_id(std::string* project_id);
  private:
  const std::string& _internal_project_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_project_id(const std::string& value);
  std::string* _internal_mutable_project_id();
  public:

  // string name = 4 [json_name = "name"];
  void clear_name();
  const std::string& name() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_name(ArgT0&& arg0, ArgT... args);
  std::string* mutable_name();
  PROTOBUF_MUST_USE_RESULT std::string* release_name();
  void set_allocated_name(std::string* name);
  private:
  const std::string& _internal_name() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_name(const std::string& value);
  std::string* _internal_mutable_name();
  public:

  // string status_type = 6 [json_name = "statusType"];
  void clear_status_type();
  const std::string& status_type() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_status_type(ArgT0&& arg0, ArgT... args);
  std::string* mutable_status_type();
  PROTOBUF_MUST_USE_RESULT std::string* release_status_type();
  void set_allocated_status_type(std::string* status_type);
  private:
  const std::string& _internal_status_type() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_status_type(const std::string& value);
  std::string* _internal_mutable_status_type();
  public:

  // bool active = 5 [json_name = "active"];
  void clear_active();
  bool active() const;
  void set_active(bool value);
  private:
  bool _internal_active() const;
  void _internal_set_active(bool value);
  public:

  // @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.Environment)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr organization_id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr project_id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr status_type_;
  bool active_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Environment

// string id = 1 [json_name = "id"];
inline void Environment::clear_id() {
  id_.ClearToEmpty();
}
inline const std::string& Environment::id() const {
  // @@protoc_insertion_point(field_get:pipelines.environment.v1alpha1.Environment.id)
  return _internal_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Environment::set_id(ArgT0&& arg0, ArgT... args) {
 
 id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.environment.v1alpha1.Environment.id)
}
inline std::string* Environment::mutable_id() {
  std::string* _s = _internal_mutable_id();
  // @@protoc_insertion_point(field_mutable:pipelines.environment.v1alpha1.Environment.id)
  return _s;
}
inline const std::string& Environment::_internal_id() const {
  return id_.Get();
}
inline void Environment::_internal_set_id(const std::string& value) {
  
  id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Environment::_internal_mutable_id() {
  
  return id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Environment::release_id() {
  // @@protoc_insertion_point(field_release:pipelines.environment.v1alpha1.Environment.id)
  return id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Environment::set_allocated_id(std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.environment.v1alpha1.Environment.id)
}

// string organization_id = 2 [json_name = "organizationId"];
inline void Environment::clear_organization_id() {
  organization_id_.ClearToEmpty();
}
inline const std::string& Environment::organization_id() const {
  // @@protoc_insertion_point(field_get:pipelines.environment.v1alpha1.Environment.organization_id)
  return _internal_organization_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Environment::set_organization_id(ArgT0&& arg0, ArgT... args) {
 
 organization_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.environment.v1alpha1.Environment.organization_id)
}
inline std::string* Environment::mutable_organization_id() {
  std::string* _s = _internal_mutable_organization_id();
  // @@protoc_insertion_point(field_mutable:pipelines.environment.v1alpha1.Environment.organization_id)
  return _s;
}
inline const std::string& Environment::_internal_organization_id() const {
  return organization_id_.Get();
}
inline void Environment::_internal_set_organization_id(const std::string& value) {
  
  organization_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Environment::_internal_mutable_organization_id() {
  
  return organization_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Environment::release_organization_id() {
  // @@protoc_insertion_point(field_release:pipelines.environment.v1alpha1.Environment.organization_id)
  return organization_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Environment::set_allocated_organization_id(std::string* organization_id) {
  if (organization_id != nullptr) {
    
  } else {
    
  }
  organization_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), organization_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.environment.v1alpha1.Environment.organization_id)
}

// string project_id = 3 [json_name = "projectId"];
inline void Environment::clear_project_id() {
  project_id_.ClearToEmpty();
}
inline const std::string& Environment::project_id() const {
  // @@protoc_insertion_point(field_get:pipelines.environment.v1alpha1.Environment.project_id)
  return _internal_project_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Environment::set_project_id(ArgT0&& arg0, ArgT... args) {
 
 project_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.environment.v1alpha1.Environment.project_id)
}
inline std::string* Environment::mutable_project_id() {
  std::string* _s = _internal_mutable_project_id();
  // @@protoc_insertion_point(field_mutable:pipelines.environment.v1alpha1.Environment.project_id)
  return _s;
}
inline const std::string& Environment::_internal_project_id() const {
  return project_id_.Get();
}
inline void Environment::_internal_set_project_id(const std::string& value) {
  
  project_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Environment::_internal_mutable_project_id() {
  
  return project_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Environment::release_project_id() {
  // @@protoc_insertion_point(field_release:pipelines.environment.v1alpha1.Environment.project_id)
  return project_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Environment::set_allocated_project_id(std::string* project_id) {
  if (project_id != nullptr) {
    
  } else {
    
  }
  project_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), project_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.environment.v1alpha1.Environment.project_id)
}

// string name = 4 [json_name = "name"];
inline void Environment::clear_name() {
  name_.ClearToEmpty();
}
inline const std::string& Environment::name() const {
  // @@protoc_insertion_point(field_get:pipelines.environment.v1alpha1.Environment.name)
  return _internal_name();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Environment::set_name(ArgT0&& arg0, ArgT... args) {
 
 name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.environment.v1alpha1.Environment.name)
}
inline std::string* Environment::mutable_name() {
  std::string* _s = _internal_mutable_name();
  // @@protoc_insertion_point(field_mutable:pipelines.environment.v1alpha1.Environment.name)
  return _s;
}
inline const std::string& Environment::_internal_name() const {
  return name_.Get();
}
inline void Environment::_internal_set_name(const std::string& value) {
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Environment::_internal_mutable_name() {
  
  return name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Environment::release_name() {
  // @@protoc_insertion_point(field_release:pipelines.environment.v1alpha1.Environment.name)
  return name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Environment::set_allocated_name(std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.environment.v1alpha1.Environment.name)
}

// bool active = 5 [json_name = "active"];
inline void Environment::clear_active() {
  active_ = false;
}
inline bool Environment::_internal_active() const {
  return active_;
}
inline bool Environment::active() const {
  // @@protoc_insertion_point(field_get:pipelines.environment.v1alpha1.Environment.active)
  return _internal_active();
}
inline void Environment::_internal_set_active(bool value) {
  
  active_ = value;
}
inline void Environment::set_active(bool value) {
  _internal_set_active(value);
  // @@protoc_insertion_point(field_set:pipelines.environment.v1alpha1.Environment.active)
}

// string status_type = 6 [json_name = "statusType"];
inline void Environment::clear_status_type() {
  status_type_.ClearToEmpty();
}
inline const std::string& Environment::status_type() const {
  // @@protoc_insertion_point(field_get:pipelines.environment.v1alpha1.Environment.status_type)
  return _internal_status_type();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Environment::set_status_type(ArgT0&& arg0, ArgT... args) {
 
 status_type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.environment.v1alpha1.Environment.status_type)
}
inline std::string* Environment::mutable_status_type() {
  std::string* _s = _internal_mutable_status_type();
  // @@protoc_insertion_point(field_mutable:pipelines.environment.v1alpha1.Environment.status_type)
  return _s;
}
inline const std::string& Environment::_internal_status_type() const {
  return status_type_.Get();
}
inline void Environment::_internal_set_status_type(const std::string& value) {
  
  status_type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Environment::_internal_mutable_status_type() {
  
  return status_type_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Environment::release_status_type() {
  // @@protoc_insertion_point(field_release:pipelines.environment.v1alpha1.Environment.status_type)
  return status_type_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Environment::set_allocated_status_type(std::string* status_type) {
  if (status_type != nullptr) {
    
  } else {
    
  }
  status_type_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), status_type,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.environment.v1alpha1.Environment.status_type)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace v1alpha1
}  // namespace environment
}  // namespace pipelines

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_pipelines_2fenvironment_2fv1alpha1_2fenvironment_2eproto
