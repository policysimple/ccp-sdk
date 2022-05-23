// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto {
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
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto;
namespace artifacts {
namespace projects {
namespace v1alpha1 {
class HarborProject;
struct HarborProjectDefaultTypeInternal;
extern HarborProjectDefaultTypeInternal _HarborProject_default_instance_;
class ProjectsRegistry;
struct ProjectsRegistryDefaultTypeInternal;
extern ProjectsRegistryDefaultTypeInternal _ProjectsRegistry_default_instance_;
}  // namespace v1alpha1
}  // namespace projects
}  // namespace artifacts
PROTOBUF_NAMESPACE_OPEN
template<> ::artifacts::projects::v1alpha1::HarborProject* Arena::CreateMaybeMessage<::artifacts::projects::v1alpha1::HarborProject>(Arena*);
template<> ::artifacts::projects::v1alpha1::ProjectsRegistry* Arena::CreateMaybeMessage<::artifacts::projects::v1alpha1::ProjectsRegistry>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace artifacts {
namespace projects {
namespace v1alpha1 {

// ===================================================================

class HarborProject final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:artifacts.projects.v1alpha1.HarborProject) */ {
 public:
  inline HarborProject() : HarborProject(nullptr) {}
  ~HarborProject() override;
  explicit constexpr HarborProject(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  HarborProject(const HarborProject& from);
  HarborProject(HarborProject&& from) noexcept
    : HarborProject() {
    *this = ::std::move(from);
  }

  inline HarborProject& operator=(const HarborProject& from) {
    CopyFrom(from);
    return *this;
  }
  inline HarborProject& operator=(HarborProject&& from) noexcept {
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
  static const HarborProject& default_instance() {
    return *internal_default_instance();
  }
  static inline const HarborProject* internal_default_instance() {
    return reinterpret_cast<const HarborProject*>(
               &_HarborProject_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(HarborProject& a, HarborProject& b) {
    a.Swap(&b);
  }
  inline void Swap(HarborProject* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(HarborProject* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline HarborProject* New() const final {
    return new HarborProject();
  }

  HarborProject* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<HarborProject>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const HarborProject& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const HarborProject& from);
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
  void InternalSwap(HarborProject* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "artifacts.projects.v1alpha1.HarborProject";
  }
  protected:
  explicit HarborProject(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kProjectNameFieldNumber = 1,
    kRegistryIdFieldNumber = 2,
    kPublicFieldNumber = 3,
    kStorageLimitFieldNumber = 4,
  };
  // string project_name = 1 [json_name = "projectName"];
  void clear_project_name();
  const std::string& project_name() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_project_name(ArgT0&& arg0, ArgT... args);
  std::string* mutable_project_name();
  PROTOBUF_MUST_USE_RESULT std::string* release_project_name();
  void set_allocated_project_name(std::string* project_name);
  private:
  const std::string& _internal_project_name() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_project_name(const std::string& value);
  std::string* _internal_mutable_project_name();
  public:

  // uint32 registry_id = 2 [json_name = "registryId"];
  void clear_registry_id();
  ::PROTOBUF_NAMESPACE_ID::uint32 registry_id() const;
  void set_registry_id(::PROTOBUF_NAMESPACE_ID::uint32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::uint32 _internal_registry_id() const;
  void _internal_set_registry_id(::PROTOBUF_NAMESPACE_ID::uint32 value);
  public:

  // bool public = 3 [json_name = "public"];
  void clear_public_();
  bool public_() const;
  void set_public_(bool value);
  private:
  bool _internal_public_() const;
  void _internal_set_public_(bool value);
  public:

  // uint32 storage_limit = 4 [json_name = "storageLimit"];
  void clear_storage_limit();
  ::PROTOBUF_NAMESPACE_ID::uint32 storage_limit() const;
  void set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::uint32 _internal_storage_limit() const;
  void _internal_set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value);
  public:

  // @@protoc_insertion_point(class_scope:artifacts.projects.v1alpha1.HarborProject)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr project_name_;
  ::PROTOBUF_NAMESPACE_ID::uint32 registry_id_;
  bool public__;
  ::PROTOBUF_NAMESPACE_ID::uint32 storage_limit_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto;
};
// -------------------------------------------------------------------

class ProjectsRegistry final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:artifacts.projects.v1alpha1.ProjectsRegistry) */ {
 public:
  inline ProjectsRegistry() : ProjectsRegistry(nullptr) {}
  ~ProjectsRegistry() override;
  explicit constexpr ProjectsRegistry(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  ProjectsRegistry(const ProjectsRegistry& from);
  ProjectsRegistry(ProjectsRegistry&& from) noexcept
    : ProjectsRegistry() {
    *this = ::std::move(from);
  }

  inline ProjectsRegistry& operator=(const ProjectsRegistry& from) {
    CopyFrom(from);
    return *this;
  }
  inline ProjectsRegistry& operator=(ProjectsRegistry&& from) noexcept {
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
  static const ProjectsRegistry& default_instance() {
    return *internal_default_instance();
  }
  static inline const ProjectsRegistry* internal_default_instance() {
    return reinterpret_cast<const ProjectsRegistry*>(
               &_ProjectsRegistry_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(ProjectsRegistry& a, ProjectsRegistry& b) {
    a.Swap(&b);
  }
  inline void Swap(ProjectsRegistry* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(ProjectsRegistry* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline ProjectsRegistry* New() const final {
    return new ProjectsRegistry();
  }

  ProjectsRegistry* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<ProjectsRegistry>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const ProjectsRegistry& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const ProjectsRegistry& from);
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
  void InternalSwap(ProjectsRegistry* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "artifacts.projects.v1alpha1.ProjectsRegistry";
  }
  protected:
  explicit ProjectsRegistry(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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

  // .artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];
  bool has_harbor() const;
  private:
  bool _internal_has_harbor() const;
  public:
  void clear_harbor();
  const ::artifacts::projects::v1alpha1::HarborProject& harbor() const;
  PROTOBUF_MUST_USE_RESULT ::artifacts::projects::v1alpha1::HarborProject* release_harbor();
  ::artifacts::projects::v1alpha1::HarborProject* mutable_harbor();
  void set_allocated_harbor(::artifacts::projects::v1alpha1::HarborProject* harbor);
  private:
  const ::artifacts::projects::v1alpha1::HarborProject& _internal_harbor() const;
  ::artifacts::projects::v1alpha1::HarborProject* _internal_mutable_harbor();
  public:
  void unsafe_arena_set_allocated_harbor(
      ::artifacts::projects::v1alpha1::HarborProject* harbor);
  ::artifacts::projects::v1alpha1::HarborProject* unsafe_arena_release_harbor();

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

  // @@protoc_insertion_point(class_scope:artifacts.projects.v1alpha1.ProjectsRegistry)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr environment_id_;
  ::artifacts::projects::v1alpha1::HarborProject* harbor_;
  ::PROTOBUF_NAMESPACE_ID::uint32 organization_id_;
  ::PROTOBUF_NAMESPACE_ID::uint32 project_id_;
  bool active_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// HarborProject

// string project_name = 1 [json_name = "projectName"];
inline void HarborProject::clear_project_name() {
  project_name_.ClearToEmpty();
}
inline const std::string& HarborProject::project_name() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.HarborProject.project_name)
  return _internal_project_name();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void HarborProject::set_project_name(ArgT0&& arg0, ArgT... args) {
 
 project_name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.HarborProject.project_name)
}
inline std::string* HarborProject::mutable_project_name() {
  std::string* _s = _internal_mutable_project_name();
  // @@protoc_insertion_point(field_mutable:artifacts.projects.v1alpha1.HarborProject.project_name)
  return _s;
}
inline const std::string& HarborProject::_internal_project_name() const {
  return project_name_.Get();
}
inline void HarborProject::_internal_set_project_name(const std::string& value) {
  
  project_name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* HarborProject::_internal_mutable_project_name() {
  
  return project_name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* HarborProject::release_project_name() {
  // @@protoc_insertion_point(field_release:artifacts.projects.v1alpha1.HarborProject.project_name)
  return project_name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void HarborProject::set_allocated_project_name(std::string* project_name) {
  if (project_name != nullptr) {
    
  } else {
    
  }
  project_name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), project_name,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:artifacts.projects.v1alpha1.HarborProject.project_name)
}

// uint32 registry_id = 2 [json_name = "registryId"];
inline void HarborProject::clear_registry_id() {
  registry_id_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborProject::_internal_registry_id() const {
  return registry_id_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborProject::registry_id() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.HarborProject.registry_id)
  return _internal_registry_id();
}
inline void HarborProject::_internal_set_registry_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  registry_id_ = value;
}
inline void HarborProject::set_registry_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_registry_id(value);
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.HarborProject.registry_id)
}

// bool public = 3 [json_name = "public"];
inline void HarborProject::clear_public_() {
  public__ = false;
}
inline bool HarborProject::_internal_public_() const {
  return public__;
}
inline bool HarborProject::public_() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.HarborProject.public)
  return _internal_public_();
}
inline void HarborProject::_internal_set_public_(bool value) {
  
  public__ = value;
}
inline void HarborProject::set_public_(bool value) {
  _internal_set_public_(value);
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.HarborProject.public)
}

// uint32 storage_limit = 4 [json_name = "storageLimit"];
inline void HarborProject::clear_storage_limit() {
  storage_limit_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborProject::_internal_storage_limit() const {
  return storage_limit_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 HarborProject::storage_limit() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.HarborProject.storage_limit)
  return _internal_storage_limit();
}
inline void HarborProject::_internal_set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  storage_limit_ = value;
}
inline void HarborProject::set_storage_limit(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_storage_limit(value);
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.HarborProject.storage_limit)
}

// -------------------------------------------------------------------

// ProjectsRegistry

// string id = 1 [json_name = "id"];
inline void ProjectsRegistry::clear_id() {
  id_.ClearToEmpty();
}
inline const std::string& ProjectsRegistry::id() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.ProjectsRegistry.id)
  return _internal_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void ProjectsRegistry::set_id(ArgT0&& arg0, ArgT... args) {
 
 id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.ProjectsRegistry.id)
}
inline std::string* ProjectsRegistry::mutable_id() {
  std::string* _s = _internal_mutable_id();
  // @@protoc_insertion_point(field_mutable:artifacts.projects.v1alpha1.ProjectsRegistry.id)
  return _s;
}
inline const std::string& ProjectsRegistry::_internal_id() const {
  return id_.Get();
}
inline void ProjectsRegistry::_internal_set_id(const std::string& value) {
  
  id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* ProjectsRegistry::_internal_mutable_id() {
  
  return id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* ProjectsRegistry::release_id() {
  // @@protoc_insertion_point(field_release:artifacts.projects.v1alpha1.ProjectsRegistry.id)
  return id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void ProjectsRegistry::set_allocated_id(std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:artifacts.projects.v1alpha1.ProjectsRegistry.id)
}

// uint32 organization_id = 2 [json_name = "organizationId"];
inline void ProjectsRegistry::clear_organization_id() {
  organization_id_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 ProjectsRegistry::_internal_organization_id() const {
  return organization_id_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 ProjectsRegistry::organization_id() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.ProjectsRegistry.organization_id)
  return _internal_organization_id();
}
inline void ProjectsRegistry::_internal_set_organization_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  organization_id_ = value;
}
inline void ProjectsRegistry::set_organization_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_organization_id(value);
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.ProjectsRegistry.organization_id)
}

// uint32 project_id = 3 [json_name = "projectId"];
inline void ProjectsRegistry::clear_project_id() {
  project_id_ = 0u;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 ProjectsRegistry::_internal_project_id() const {
  return project_id_;
}
inline ::PROTOBUF_NAMESPACE_ID::uint32 ProjectsRegistry::project_id() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.ProjectsRegistry.project_id)
  return _internal_project_id();
}
inline void ProjectsRegistry::_internal_set_project_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  
  project_id_ = value;
}
inline void ProjectsRegistry::set_project_id(::PROTOBUF_NAMESPACE_ID::uint32 value) {
  _internal_set_project_id(value);
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.ProjectsRegistry.project_id)
}

// string environment_id = 4 [json_name = "environmentId"];
inline void ProjectsRegistry::clear_environment_id() {
  environment_id_.ClearToEmpty();
}
inline const std::string& ProjectsRegistry::environment_id() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.ProjectsRegistry.environment_id)
  return _internal_environment_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void ProjectsRegistry::set_environment_id(ArgT0&& arg0, ArgT... args) {
 
 environment_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.ProjectsRegistry.environment_id)
}
inline std::string* ProjectsRegistry::mutable_environment_id() {
  std::string* _s = _internal_mutable_environment_id();
  // @@protoc_insertion_point(field_mutable:artifacts.projects.v1alpha1.ProjectsRegistry.environment_id)
  return _s;
}
inline const std::string& ProjectsRegistry::_internal_environment_id() const {
  return environment_id_.Get();
}
inline void ProjectsRegistry::_internal_set_environment_id(const std::string& value) {
  
  environment_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* ProjectsRegistry::_internal_mutable_environment_id() {
  
  return environment_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* ProjectsRegistry::release_environment_id() {
  // @@protoc_insertion_point(field_release:artifacts.projects.v1alpha1.ProjectsRegistry.environment_id)
  return environment_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void ProjectsRegistry::set_allocated_environment_id(std::string* environment_id) {
  if (environment_id != nullptr) {
    
  } else {
    
  }
  environment_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), environment_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:artifacts.projects.v1alpha1.ProjectsRegistry.environment_id)
}

// bool active = 6 [json_name = "active"];
inline void ProjectsRegistry::clear_active() {
  active_ = false;
}
inline bool ProjectsRegistry::_internal_active() const {
  return active_;
}
inline bool ProjectsRegistry::active() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.ProjectsRegistry.active)
  return _internal_active();
}
inline void ProjectsRegistry::_internal_set_active(bool value) {
  
  active_ = value;
}
inline void ProjectsRegistry::set_active(bool value) {
  _internal_set_active(value);
  // @@protoc_insertion_point(field_set:artifacts.projects.v1alpha1.ProjectsRegistry.active)
}

// .artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];
inline bool ProjectsRegistry::_internal_has_harbor() const {
  return this != internal_default_instance() && harbor_ != nullptr;
}
inline bool ProjectsRegistry::has_harbor() const {
  return _internal_has_harbor();
}
inline void ProjectsRegistry::clear_harbor() {
  if (GetArenaForAllocation() == nullptr && harbor_ != nullptr) {
    delete harbor_;
  }
  harbor_ = nullptr;
}
inline const ::artifacts::projects::v1alpha1::HarborProject& ProjectsRegistry::_internal_harbor() const {
  const ::artifacts::projects::v1alpha1::HarborProject* p = harbor_;
  return p != nullptr ? *p : reinterpret_cast<const ::artifacts::projects::v1alpha1::HarborProject&>(
      ::artifacts::projects::v1alpha1::_HarborProject_default_instance_);
}
inline const ::artifacts::projects::v1alpha1::HarborProject& ProjectsRegistry::harbor() const {
  // @@protoc_insertion_point(field_get:artifacts.projects.v1alpha1.ProjectsRegistry.harbor)
  return _internal_harbor();
}
inline void ProjectsRegistry::unsafe_arena_set_allocated_harbor(
    ::artifacts::projects::v1alpha1::HarborProject* harbor) {
  if (GetArenaForAllocation() == nullptr) {
    delete reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(harbor_);
  }
  harbor_ = harbor;
  if (harbor) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:artifacts.projects.v1alpha1.ProjectsRegistry.harbor)
}
inline ::artifacts::projects::v1alpha1::HarborProject* ProjectsRegistry::release_harbor() {
  
  ::artifacts::projects::v1alpha1::HarborProject* temp = harbor_;
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
inline ::artifacts::projects::v1alpha1::HarborProject* ProjectsRegistry::unsafe_arena_release_harbor() {
  // @@protoc_insertion_point(field_release:artifacts.projects.v1alpha1.ProjectsRegistry.harbor)
  
  ::artifacts::projects::v1alpha1::HarborProject* temp = harbor_;
  harbor_ = nullptr;
  return temp;
}
inline ::artifacts::projects::v1alpha1::HarborProject* ProjectsRegistry::_internal_mutable_harbor() {
  
  if (harbor_ == nullptr) {
    auto* p = CreateMaybeMessage<::artifacts::projects::v1alpha1::HarborProject>(GetArenaForAllocation());
    harbor_ = p;
  }
  return harbor_;
}
inline ::artifacts::projects::v1alpha1::HarborProject* ProjectsRegistry::mutable_harbor() {
  ::artifacts::projects::v1alpha1::HarborProject* _msg = _internal_mutable_harbor();
  // @@protoc_insertion_point(field_mutable:artifacts.projects.v1alpha1.ProjectsRegistry.harbor)
  return _msg;
}
inline void ProjectsRegistry::set_allocated_harbor(::artifacts::projects::v1alpha1::HarborProject* harbor) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaForAllocation();
  if (message_arena == nullptr) {
    delete harbor_;
  }
  if (harbor) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena =
        ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper<::artifacts::projects::v1alpha1::HarborProject>::GetOwningArena(harbor);
    if (message_arena != submessage_arena) {
      harbor = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, harbor, submessage_arena);
    }
    
  } else {
    
  }
  harbor_ = harbor;
  // @@protoc_insertion_point(field_set_allocated:artifacts.projects.v1alpha1.ProjectsRegistry.harbor)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace v1alpha1
}  // namespace projects
}  // namespace artifacts

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto