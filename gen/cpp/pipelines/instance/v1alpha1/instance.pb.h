// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/instance/v1alpha1/instance.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_pipelines_2finstance_2fv1alpha1_2finstance_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_pipelines_2finstance_2fv1alpha1_2finstance_2eproto

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
#include <google/protobuf/map.h>  // IWYU pragma: export
#include <google/protobuf/map_entry.h>
#include <google/protobuf/map_field_inl.h>
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_pipelines_2finstance_2fv1alpha1_2finstance_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_pipelines_2finstance_2fv1alpha1_2finstance_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxiliaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[3]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_pipelines_2finstance_2fv1alpha1_2finstance_2eproto;
namespace pipelines {
namespace instance {
namespace v1alpha1 {
class Instance;
struct InstanceDefaultTypeInternal;
extern InstanceDefaultTypeInternal _Instance_default_instance_;
class Instance_EnvVariablesEntry_DoNotUse;
struct Instance_EnvVariablesEntry_DoNotUseDefaultTypeInternal;
extern Instance_EnvVariablesEntry_DoNotUseDefaultTypeInternal _Instance_EnvVariablesEntry_DoNotUse_default_instance_;
class TypeGitProvider;
struct TypeGitProviderDefaultTypeInternal;
extern TypeGitProviderDefaultTypeInternal _TypeGitProvider_default_instance_;
}  // namespace v1alpha1
}  // namespace instance
}  // namespace pipelines
PROTOBUF_NAMESPACE_OPEN
template<> ::pipelines::instance::v1alpha1::Instance* Arena::CreateMaybeMessage<::pipelines::instance::v1alpha1::Instance>(Arena*);
template<> ::pipelines::instance::v1alpha1::Instance_EnvVariablesEntry_DoNotUse* Arena::CreateMaybeMessage<::pipelines::instance::v1alpha1::Instance_EnvVariablesEntry_DoNotUse>(Arena*);
template<> ::pipelines::instance::v1alpha1::TypeGitProvider* Arena::CreateMaybeMessage<::pipelines::instance::v1alpha1::TypeGitProvider>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace pipelines {
namespace instance {
namespace v1alpha1 {

enum InstanceType : int {
  INSTANCE_TYPE_UNSPECIFIED = 0,
  INSTANCE_TYPE_GIT = 1,
  InstanceType_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  InstanceType_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool InstanceType_IsValid(int value);
constexpr InstanceType InstanceType_MIN = INSTANCE_TYPE_UNSPECIFIED;
constexpr InstanceType InstanceType_MAX = INSTANCE_TYPE_GIT;
constexpr int InstanceType_ARRAYSIZE = InstanceType_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* InstanceType_descriptor();
template<typename T>
inline const std::string& InstanceType_Name(T enum_t_value) {
  static_assert(::std::is_same<T, InstanceType>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function InstanceType_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    InstanceType_descriptor(), enum_t_value);
}
inline bool InstanceType_Parse(
    ::PROTOBUF_NAMESPACE_ID::ConstStringParam name, InstanceType* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<InstanceType>(
    InstanceType_descriptor(), name, value);
}
// ===================================================================

class TypeGitProvider final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pipelines.instance.v1alpha1.TypeGitProvider) */ {
 public:
  inline TypeGitProvider() : TypeGitProvider(nullptr) {}
  ~TypeGitProvider() override;
  explicit constexpr TypeGitProvider(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  TypeGitProvider(const TypeGitProvider& from);
  TypeGitProvider(TypeGitProvider&& from) noexcept
    : TypeGitProvider() {
    *this = ::std::move(from);
  }

  inline TypeGitProvider& operator=(const TypeGitProvider& from) {
    CopyFrom(from);
    return *this;
  }
  inline TypeGitProvider& operator=(TypeGitProvider&& from) noexcept {
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
  static const TypeGitProvider& default_instance() {
    return *internal_default_instance();
  }
  static inline const TypeGitProvider* internal_default_instance() {
    return reinterpret_cast<const TypeGitProvider*>(
               &_TypeGitProvider_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(TypeGitProvider& a, TypeGitProvider& b) {
    a.Swap(&b);
  }
  inline void Swap(TypeGitProvider* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(TypeGitProvider* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline TypeGitProvider* New() const final {
    return new TypeGitProvider();
  }

  TypeGitProvider* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<TypeGitProvider>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const TypeGitProvider& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const TypeGitProvider& from);
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
  void InternalSwap(TypeGitProvider* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pipelines.instance.v1alpha1.TypeGitProvider";
  }
  protected:
  explicit TypeGitProvider(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kSshUrlFieldNumber = 1,
    kBranchFieldNumber = 2,
    kSshPrivateKeyFieldNumber = 3,
  };
  // string ssh_url = 1 [json_name = "sshUrl"];
  void clear_ssh_url();
  const std::string& ssh_url() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_ssh_url(ArgT0&& arg0, ArgT... args);
  std::string* mutable_ssh_url();
  PROTOBUF_MUST_USE_RESULT std::string* release_ssh_url();
  void set_allocated_ssh_url(std::string* ssh_url);
  private:
  const std::string& _internal_ssh_url() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_ssh_url(const std::string& value);
  std::string* _internal_mutable_ssh_url();
  public:

  // string branch = 2 [json_name = "branch"];
  void clear_branch();
  const std::string& branch() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_branch(ArgT0&& arg0, ArgT... args);
  std::string* mutable_branch();
  PROTOBUF_MUST_USE_RESULT std::string* release_branch();
  void set_allocated_branch(std::string* branch);
  private:
  const std::string& _internal_branch() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_branch(const std::string& value);
  std::string* _internal_mutable_branch();
  public:

  // string ssh_private_key = 3 [json_name = "sshPrivateKey"];
  void clear_ssh_private_key();
  const std::string& ssh_private_key() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_ssh_private_key(ArgT0&& arg0, ArgT... args);
  std::string* mutable_ssh_private_key();
  PROTOBUF_MUST_USE_RESULT std::string* release_ssh_private_key();
  void set_allocated_ssh_private_key(std::string* ssh_private_key);
  private:
  const std::string& _internal_ssh_private_key() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_ssh_private_key(const std::string& value);
  std::string* _internal_mutable_ssh_private_key();
  public:

  // @@protoc_insertion_point(class_scope:pipelines.instance.v1alpha1.TypeGitProvider)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr ssh_url_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr branch_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr ssh_private_key_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_pipelines_2finstance_2fv1alpha1_2finstance_2eproto;
};
// -------------------------------------------------------------------

class Instance_EnvVariablesEntry_DoNotUse : public ::PROTOBUF_NAMESPACE_ID::internal::MapEntry<Instance_EnvVariablesEntry_DoNotUse, 
    std::string, std::string,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING> {
public:
  typedef ::PROTOBUF_NAMESPACE_ID::internal::MapEntry<Instance_EnvVariablesEntry_DoNotUse, 
    std::string, std::string,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING> SuperType;
  Instance_EnvVariablesEntry_DoNotUse();
  explicit constexpr Instance_EnvVariablesEntry_DoNotUse(
      ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);
  explicit Instance_EnvVariablesEntry_DoNotUse(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  void MergeFrom(const Instance_EnvVariablesEntry_DoNotUse& other);
  static const Instance_EnvVariablesEntry_DoNotUse* internal_default_instance() { return reinterpret_cast<const Instance_EnvVariablesEntry_DoNotUse*>(&_Instance_EnvVariablesEntry_DoNotUse_default_instance_); }
  static bool ValidateKey(std::string* s) {
    return ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(s->data(), static_cast<int>(s->size()), ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::PARSE, "pipelines.instance.v1alpha1.Instance.EnvVariablesEntry.key");
 }
  static bool ValidateValue(std::string* s) {
    return ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(s->data(), static_cast<int>(s->size()), ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::PARSE, "pipelines.instance.v1alpha1.Instance.EnvVariablesEntry.value");
 }
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
};

// -------------------------------------------------------------------

class Instance final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pipelines.instance.v1alpha1.Instance) */ {
 public:
  inline Instance() : Instance(nullptr) {}
  ~Instance() override;
  explicit constexpr Instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  Instance(const Instance& from);
  Instance(Instance&& from) noexcept
    : Instance() {
    *this = ::std::move(from);
  }

  inline Instance& operator=(const Instance& from) {
    CopyFrom(from);
    return *this;
  }
  inline Instance& operator=(Instance&& from) noexcept {
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
  static const Instance& default_instance() {
    return *internal_default_instance();
  }
  static inline const Instance* internal_default_instance() {
    return reinterpret_cast<const Instance*>(
               &_Instance_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    2;

  friend void swap(Instance& a, Instance& b) {
    a.Swap(&b);
  }
  inline void Swap(Instance* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(Instance* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Instance* New() const final {
    return new Instance();
  }

  Instance* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Instance>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const Instance& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const Instance& from);
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
  void InternalSwap(Instance* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pipelines.instance.v1alpha1.Instance";
  }
  protected:
  explicit Instance(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kEnvVariablesFieldNumber = 5,
    kNameFieldNumber = 1,
    kNamespaceFieldNumber = 2,
    kGitProviderFieldNumber = 4,
    kTypeSourceFieldNumber = 3,
  };
  // map<string, string> env_variables = 5 [json_name = "envVariables"];
  int env_variables_size() const;
  private:
  int _internal_env_variables_size() const;
  public:
  void clear_env_variables();
  private:
  const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
      _internal_env_variables() const;
  ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
      _internal_mutable_env_variables();
  public:
  const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
      env_variables() const;
  ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
      mutable_env_variables();

  // string name = 1 [json_name = "name"];
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

  // string namespace = 2 [json_name = "namespace"];
  void clear_namespace_();
  const std::string& namespace_() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_namespace_(ArgT0&& arg0, ArgT... args);
  std::string* mutable_namespace_();
  PROTOBUF_MUST_USE_RESULT std::string* release_namespace_();
  void set_allocated_namespace_(std::string* namespace_);
  private:
  const std::string& _internal_namespace_() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_namespace_(const std::string& value);
  std::string* _internal_mutable_namespace_();
  public:

  // .pipelines.instance.v1alpha1.TypeGitProvider git_provider = 4 [json_name = "gitProvider"];
  bool has_git_provider() const;
  private:
  bool _internal_has_git_provider() const;
  public:
  void clear_git_provider();
  const ::pipelines::instance::v1alpha1::TypeGitProvider& git_provider() const;
  PROTOBUF_MUST_USE_RESULT ::pipelines::instance::v1alpha1::TypeGitProvider* release_git_provider();
  ::pipelines::instance::v1alpha1::TypeGitProvider* mutable_git_provider();
  void set_allocated_git_provider(::pipelines::instance::v1alpha1::TypeGitProvider* git_provider);
  private:
  const ::pipelines::instance::v1alpha1::TypeGitProvider& _internal_git_provider() const;
  ::pipelines::instance::v1alpha1::TypeGitProvider* _internal_mutable_git_provider();
  public:
  void unsafe_arena_set_allocated_git_provider(
      ::pipelines::instance::v1alpha1::TypeGitProvider* git_provider);
  ::pipelines::instance::v1alpha1::TypeGitProvider* unsafe_arena_release_git_provider();

  // .pipelines.instance.v1alpha1.InstanceType type_source = 3 [json_name = "typeSource"];
  void clear_type_source();
  ::pipelines::instance::v1alpha1::InstanceType type_source() const;
  void set_type_source(::pipelines::instance::v1alpha1::InstanceType value);
  private:
  ::pipelines::instance::v1alpha1::InstanceType _internal_type_source() const;
  void _internal_set_type_source(::pipelines::instance::v1alpha1::InstanceType value);
  public:

  // @@protoc_insertion_point(class_scope:pipelines.instance.v1alpha1.Instance)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::MapField<
      Instance_EnvVariablesEntry_DoNotUse,
      std::string, std::string,
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING> env_variables_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr namespace__;
  ::pipelines::instance::v1alpha1::TypeGitProvider* git_provider_;
  int type_source_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_pipelines_2finstance_2fv1alpha1_2finstance_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// TypeGitProvider

// string ssh_url = 1 [json_name = "sshUrl"];
inline void TypeGitProvider::clear_ssh_url() {
  ssh_url_.ClearToEmpty();
}
inline const std::string& TypeGitProvider::ssh_url() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.TypeGitProvider.ssh_url)
  return _internal_ssh_url();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void TypeGitProvider::set_ssh_url(ArgT0&& arg0, ArgT... args) {
 
 ssh_url_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.instance.v1alpha1.TypeGitProvider.ssh_url)
}
inline std::string* TypeGitProvider::mutable_ssh_url() {
  std::string* _s = _internal_mutable_ssh_url();
  // @@protoc_insertion_point(field_mutable:pipelines.instance.v1alpha1.TypeGitProvider.ssh_url)
  return _s;
}
inline const std::string& TypeGitProvider::_internal_ssh_url() const {
  return ssh_url_.Get();
}
inline void TypeGitProvider::_internal_set_ssh_url(const std::string& value) {
  
  ssh_url_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* TypeGitProvider::_internal_mutable_ssh_url() {
  
  return ssh_url_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* TypeGitProvider::release_ssh_url() {
  // @@protoc_insertion_point(field_release:pipelines.instance.v1alpha1.TypeGitProvider.ssh_url)
  return ssh_url_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void TypeGitProvider::set_allocated_ssh_url(std::string* ssh_url) {
  if (ssh_url != nullptr) {
    
  } else {
    
  }
  ssh_url_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ssh_url,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.instance.v1alpha1.TypeGitProvider.ssh_url)
}

// string branch = 2 [json_name = "branch"];
inline void TypeGitProvider::clear_branch() {
  branch_.ClearToEmpty();
}
inline const std::string& TypeGitProvider::branch() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.TypeGitProvider.branch)
  return _internal_branch();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void TypeGitProvider::set_branch(ArgT0&& arg0, ArgT... args) {
 
 branch_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.instance.v1alpha1.TypeGitProvider.branch)
}
inline std::string* TypeGitProvider::mutable_branch() {
  std::string* _s = _internal_mutable_branch();
  // @@protoc_insertion_point(field_mutable:pipelines.instance.v1alpha1.TypeGitProvider.branch)
  return _s;
}
inline const std::string& TypeGitProvider::_internal_branch() const {
  return branch_.Get();
}
inline void TypeGitProvider::_internal_set_branch(const std::string& value) {
  
  branch_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* TypeGitProvider::_internal_mutable_branch() {
  
  return branch_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* TypeGitProvider::release_branch() {
  // @@protoc_insertion_point(field_release:pipelines.instance.v1alpha1.TypeGitProvider.branch)
  return branch_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void TypeGitProvider::set_allocated_branch(std::string* branch) {
  if (branch != nullptr) {
    
  } else {
    
  }
  branch_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), branch,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.instance.v1alpha1.TypeGitProvider.branch)
}

// string ssh_private_key = 3 [json_name = "sshPrivateKey"];
inline void TypeGitProvider::clear_ssh_private_key() {
  ssh_private_key_.ClearToEmpty();
}
inline const std::string& TypeGitProvider::ssh_private_key() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.TypeGitProvider.ssh_private_key)
  return _internal_ssh_private_key();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void TypeGitProvider::set_ssh_private_key(ArgT0&& arg0, ArgT... args) {
 
 ssh_private_key_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.instance.v1alpha1.TypeGitProvider.ssh_private_key)
}
inline std::string* TypeGitProvider::mutable_ssh_private_key() {
  std::string* _s = _internal_mutable_ssh_private_key();
  // @@protoc_insertion_point(field_mutable:pipelines.instance.v1alpha1.TypeGitProvider.ssh_private_key)
  return _s;
}
inline const std::string& TypeGitProvider::_internal_ssh_private_key() const {
  return ssh_private_key_.Get();
}
inline void TypeGitProvider::_internal_set_ssh_private_key(const std::string& value) {
  
  ssh_private_key_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* TypeGitProvider::_internal_mutable_ssh_private_key() {
  
  return ssh_private_key_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* TypeGitProvider::release_ssh_private_key() {
  // @@protoc_insertion_point(field_release:pipelines.instance.v1alpha1.TypeGitProvider.ssh_private_key)
  return ssh_private_key_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void TypeGitProvider::set_allocated_ssh_private_key(std::string* ssh_private_key) {
  if (ssh_private_key != nullptr) {
    
  } else {
    
  }
  ssh_private_key_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ssh_private_key,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.instance.v1alpha1.TypeGitProvider.ssh_private_key)
}

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// Instance

// string name = 1 [json_name = "name"];
inline void Instance::clear_name() {
  name_.ClearToEmpty();
}
inline const std::string& Instance::name() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.Instance.name)
  return _internal_name();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Instance::set_name(ArgT0&& arg0, ArgT... args) {
 
 name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.instance.v1alpha1.Instance.name)
}
inline std::string* Instance::mutable_name() {
  std::string* _s = _internal_mutable_name();
  // @@protoc_insertion_point(field_mutable:pipelines.instance.v1alpha1.Instance.name)
  return _s;
}
inline const std::string& Instance::_internal_name() const {
  return name_.Get();
}
inline void Instance::_internal_set_name(const std::string& value) {
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Instance::_internal_mutable_name() {
  
  return name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Instance::release_name() {
  // @@protoc_insertion_point(field_release:pipelines.instance.v1alpha1.Instance.name)
  return name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Instance::set_allocated_name(std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.instance.v1alpha1.Instance.name)
}

// string namespace = 2 [json_name = "namespace"];
inline void Instance::clear_namespace_() {
  namespace__.ClearToEmpty();
}
inline const std::string& Instance::namespace_() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.Instance.namespace)
  return _internal_namespace_();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void Instance::set_namespace_(ArgT0&& arg0, ArgT... args) {
 
 namespace__.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:pipelines.instance.v1alpha1.Instance.namespace)
}
inline std::string* Instance::mutable_namespace_() {
  std::string* _s = _internal_mutable_namespace_();
  // @@protoc_insertion_point(field_mutable:pipelines.instance.v1alpha1.Instance.namespace)
  return _s;
}
inline const std::string& Instance::_internal_namespace_() const {
  return namespace__.Get();
}
inline void Instance::_internal_set_namespace_(const std::string& value) {
  
  namespace__.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* Instance::_internal_mutable_namespace_() {
  
  return namespace__.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* Instance::release_namespace_() {
  // @@protoc_insertion_point(field_release:pipelines.instance.v1alpha1.Instance.namespace)
  return namespace__.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void Instance::set_allocated_namespace_(std::string* namespace_) {
  if (namespace_ != nullptr) {
    
  } else {
    
  }
  namespace__.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), namespace_,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:pipelines.instance.v1alpha1.Instance.namespace)
}

// .pipelines.instance.v1alpha1.InstanceType type_source = 3 [json_name = "typeSource"];
inline void Instance::clear_type_source() {
  type_source_ = 0;
}
inline ::pipelines::instance::v1alpha1::InstanceType Instance::_internal_type_source() const {
  return static_cast< ::pipelines::instance::v1alpha1::InstanceType >(type_source_);
}
inline ::pipelines::instance::v1alpha1::InstanceType Instance::type_source() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.Instance.type_source)
  return _internal_type_source();
}
inline void Instance::_internal_set_type_source(::pipelines::instance::v1alpha1::InstanceType value) {
  
  type_source_ = value;
}
inline void Instance::set_type_source(::pipelines::instance::v1alpha1::InstanceType value) {
  _internal_set_type_source(value);
  // @@protoc_insertion_point(field_set:pipelines.instance.v1alpha1.Instance.type_source)
}

// .pipelines.instance.v1alpha1.TypeGitProvider git_provider = 4 [json_name = "gitProvider"];
inline bool Instance::_internal_has_git_provider() const {
  return this != internal_default_instance() && git_provider_ != nullptr;
}
inline bool Instance::has_git_provider() const {
  return _internal_has_git_provider();
}
inline void Instance::clear_git_provider() {
  if (GetArenaForAllocation() == nullptr && git_provider_ != nullptr) {
    delete git_provider_;
  }
  git_provider_ = nullptr;
}
inline const ::pipelines::instance::v1alpha1::TypeGitProvider& Instance::_internal_git_provider() const {
  const ::pipelines::instance::v1alpha1::TypeGitProvider* p = git_provider_;
  return p != nullptr ? *p : reinterpret_cast<const ::pipelines::instance::v1alpha1::TypeGitProvider&>(
      ::pipelines::instance::v1alpha1::_TypeGitProvider_default_instance_);
}
inline const ::pipelines::instance::v1alpha1::TypeGitProvider& Instance::git_provider() const {
  // @@protoc_insertion_point(field_get:pipelines.instance.v1alpha1.Instance.git_provider)
  return _internal_git_provider();
}
inline void Instance::unsafe_arena_set_allocated_git_provider(
    ::pipelines::instance::v1alpha1::TypeGitProvider* git_provider) {
  if (GetArenaForAllocation() == nullptr) {
    delete reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(git_provider_);
  }
  git_provider_ = git_provider;
  if (git_provider) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:pipelines.instance.v1alpha1.Instance.git_provider)
}
inline ::pipelines::instance::v1alpha1::TypeGitProvider* Instance::release_git_provider() {
  
  ::pipelines::instance::v1alpha1::TypeGitProvider* temp = git_provider_;
  git_provider_ = nullptr;
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
inline ::pipelines::instance::v1alpha1::TypeGitProvider* Instance::unsafe_arena_release_git_provider() {
  // @@protoc_insertion_point(field_release:pipelines.instance.v1alpha1.Instance.git_provider)
  
  ::pipelines::instance::v1alpha1::TypeGitProvider* temp = git_provider_;
  git_provider_ = nullptr;
  return temp;
}
inline ::pipelines::instance::v1alpha1::TypeGitProvider* Instance::_internal_mutable_git_provider() {
  
  if (git_provider_ == nullptr) {
    auto* p = CreateMaybeMessage<::pipelines::instance::v1alpha1::TypeGitProvider>(GetArenaForAllocation());
    git_provider_ = p;
  }
  return git_provider_;
}
inline ::pipelines::instance::v1alpha1::TypeGitProvider* Instance::mutable_git_provider() {
  ::pipelines::instance::v1alpha1::TypeGitProvider* _msg = _internal_mutable_git_provider();
  // @@protoc_insertion_point(field_mutable:pipelines.instance.v1alpha1.Instance.git_provider)
  return _msg;
}
inline void Instance::set_allocated_git_provider(::pipelines::instance::v1alpha1::TypeGitProvider* git_provider) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaForAllocation();
  if (message_arena == nullptr) {
    delete git_provider_;
  }
  if (git_provider) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena =
        ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper<::pipelines::instance::v1alpha1::TypeGitProvider>::GetOwningArena(git_provider);
    if (message_arena != submessage_arena) {
      git_provider = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, git_provider, submessage_arena);
    }
    
  } else {
    
  }
  git_provider_ = git_provider;
  // @@protoc_insertion_point(field_set_allocated:pipelines.instance.v1alpha1.Instance.git_provider)
}

// map<string, string> env_variables = 5 [json_name = "envVariables"];
inline int Instance::_internal_env_variables_size() const {
  return env_variables_.size();
}
inline int Instance::env_variables_size() const {
  return _internal_env_variables_size();
}
inline void Instance::clear_env_variables() {
  env_variables_.Clear();
}
inline const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
Instance::_internal_env_variables() const {
  return env_variables_.GetMap();
}
inline const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
Instance::env_variables() const {
  // @@protoc_insertion_point(field_map:pipelines.instance.v1alpha1.Instance.env_variables)
  return _internal_env_variables();
}
inline ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
Instance::_internal_mutable_env_variables() {
  return env_variables_.MutableMap();
}
inline ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
Instance::mutable_env_variables() {
  // @@protoc_insertion_point(field_mutable_map:pipelines.instance.v1alpha1.Instance.env_variables)
  return _internal_mutable_env_variables();
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace v1alpha1
}  // namespace instance
}  // namespace pipelines

PROTOBUF_NAMESPACE_OPEN

template <> struct is_proto_enum< ::pipelines::instance::v1alpha1::InstanceType> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::pipelines::instance::v1alpha1::InstanceType>() {
  return ::pipelines::instance::v1alpha1::InstanceType_descriptor();
}

PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_pipelines_2finstance_2fv1alpha1_2finstance_2eproto