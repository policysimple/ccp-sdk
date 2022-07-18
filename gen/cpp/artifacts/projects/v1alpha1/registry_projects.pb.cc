// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects.proto

#include "artifacts/projects/v1alpha1/registry_projects.pb.h"

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
namespace artifacts {
namespace projects {
namespace v1alpha1 {
constexpr HarborProject::HarborProject(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : project_name_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , registry_id_(0u)
  , public__(false)
  , storage_limit_(0u){}
struct HarborProjectDefaultTypeInternal {
  constexpr HarborProjectDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~HarborProjectDefaultTypeInternal() {}
  union {
    HarborProject _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT HarborProjectDefaultTypeInternal _HarborProject_default_instance_;
constexpr ProjectsRegistry::ProjectsRegistry(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : id_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , environment_id_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , harbor_(nullptr)
  , organization_id_(0u)
  , project_id_(0u)
  , active_(false){}
struct ProjectsRegistryDefaultTypeInternal {
  constexpr ProjectsRegistryDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~ProjectsRegistryDefaultTypeInternal() {}
  union {
    ProjectsRegistry _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT ProjectsRegistryDefaultTypeInternal _ProjectsRegistry_default_instance_;
}  // namespace v1alpha1
}  // namespace projects
}  // namespace artifacts
static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::HarborProject, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::HarborProject, project_name_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::HarborProject, registry_id_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::HarborProject, public__),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::HarborProject, storage_limit_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, id_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, organization_id_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, project_id_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, environment_id_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, active_),
  PROTOBUF_FIELD_OFFSET(::artifacts::projects::v1alpha1::ProjectsRegistry, harbor_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::artifacts::projects::v1alpha1::HarborProject)},
  { 9, -1, sizeof(::artifacts::projects::v1alpha1::ProjectsRegistry)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::artifacts::projects::v1alpha1::_HarborProject_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::artifacts::projects::v1alpha1::_ProjectsRegistry_default_instance_),
};

const char descriptor_table_protodef_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n3artifacts/projects/v1alpha1/registry_p"
  "rojects.proto\022\033artifacts.projects.v1alph"
  "a1\"\220\001\n\rHarborProject\022!\n\014project_name\030\001 \001"
  "(\tR\013projectName\022\037\n\013registry_id\030\002 \001(\rR\nre"
  "gistryId\022\026\n\006public\030\003 \001(\010R\006public\022#\n\rstor"
  "age_limit\030\004 \001(\rR\014storageLimit\"\355\001\n\020Projec"
  "tsRegistry\022\016\n\002id\030\001 \001(\tR\002id\022\'\n\017organizati"
  "on_id\030\002 \001(\rR\016organizationId\022\035\n\nproject_i"
  "d\030\003 \001(\rR\tprojectId\022%\n\016environment_id\030\004 \001"
  "(\tR\renvironmentId\022\026\n\006active\030\006 \001(\010R\006activ"
  "e\022B\n\006harbor\030\007 \001(\0132*.artifacts.projects.v"
  "1alpha1.HarborProjectR\006harborB\300\001\n%io.cue"
  "mby.artifacts.projects.v1alpha1B\025Registr"
  "yProjectsProtoP\001Z<github.com/cuemby/ccp-"
  "sdk/gen/go/artifacts/projects/v1alpha1\242\002"
  "\003PPX\252\002\033Artifacts.Projects.V1Alpha1\312\002\033Art"
  "ifacts\\Projects\\V1Alpha1b\006proto3"
  ;
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto = {
  false, false, 672, descriptor_table_protodef_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto, "artifacts/projects/v1alpha1/registry_projects.proto", 
  &descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_once, nullptr, 0, 2,
  schemas, file_default_instances, TableStruct_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto::offsets,
  file_level_metadata_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto, file_level_enum_descriptors_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto, file_level_service_descriptors_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_getter() {
  return &descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto(&descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto);
namespace artifacts {
namespace projects {
namespace v1alpha1 {

// ===================================================================

class HarborProject::_Internal {
 public:
};

HarborProject::HarborProject(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:artifacts.projects.v1alpha1.HarborProject)
}
HarborProject::HarborProject(const HarborProject& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  project_name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_project_name().empty()) {
    project_name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_project_name(), 
      GetArenaForAllocation());
  }
  ::memcpy(&registry_id_, &from.registry_id_,
    static_cast<size_t>(reinterpret_cast<char*>(&storage_limit_) -
    reinterpret_cast<char*>(&registry_id_)) + sizeof(storage_limit_));
  // @@protoc_insertion_point(copy_constructor:artifacts.projects.v1alpha1.HarborProject)
}

inline void HarborProject::SharedCtor() {
project_name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
::memset(reinterpret_cast<char*>(this) + static_cast<size_t>(
    reinterpret_cast<char*>(&registry_id_) - reinterpret_cast<char*>(this)),
    0, static_cast<size_t>(reinterpret_cast<char*>(&storage_limit_) -
    reinterpret_cast<char*>(&registry_id_)) + sizeof(storage_limit_));
}

HarborProject::~HarborProject() {
  // @@protoc_insertion_point(destructor:artifacts.projects.v1alpha1.HarborProject)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void HarborProject::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  project_name_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void HarborProject::ArenaDtor(void* object) {
  HarborProject* _this = reinterpret_cast< HarborProject* >(object);
  (void)_this;
}
void HarborProject::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void HarborProject::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void HarborProject::Clear() {
// @@protoc_insertion_point(message_clear_start:artifacts.projects.v1alpha1.HarborProject)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  project_name_.ClearToEmpty();
  ::memset(&registry_id_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&storage_limit_) -
      reinterpret_cast<char*>(&registry_id_)) + sizeof(storage_limit_));
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* HarborProject::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // string project_name = 1 [json_name = "projectName"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_project_name();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "artifacts.projects.v1alpha1.HarborProject.project_name"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 registry_id = 2 [json_name = "registryId"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 16)) {
          registry_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // bool public = 3 [json_name = "public"];
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 24)) {
          public__ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 storage_limit = 4 [json_name = "storageLimit"];
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 32)) {
          storage_limit_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
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

::PROTOBUF_NAMESPACE_ID::uint8* HarborProject::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:artifacts.projects.v1alpha1.HarborProject)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string project_name = 1 [json_name = "projectName"];
  if (!this->_internal_project_name().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_project_name().data(), static_cast<int>(this->_internal_project_name().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "artifacts.projects.v1alpha1.HarborProject.project_name");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_project_name(), target);
  }

  // uint32 registry_id = 2 [json_name = "registryId"];
  if (this->_internal_registry_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(2, this->_internal_registry_id(), target);
  }

  // bool public = 3 [json_name = "public"];
  if (this->_internal_public_() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteBoolToArray(3, this->_internal_public_(), target);
  }

  // uint32 storage_limit = 4 [json_name = "storageLimit"];
  if (this->_internal_storage_limit() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(4, this->_internal_storage_limit(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:artifacts.projects.v1alpha1.HarborProject)
  return target;
}

size_t HarborProject::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:artifacts.projects.v1alpha1.HarborProject)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string project_name = 1 [json_name = "projectName"];
  if (!this->_internal_project_name().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_project_name());
  }

  // uint32 registry_id = 2 [json_name = "registryId"];
  if (this->_internal_registry_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_registry_id());
  }

  // bool public = 3 [json_name = "public"];
  if (this->_internal_public_() != 0) {
    total_size += 1 + 1;
  }

  // uint32 storage_limit = 4 [json_name = "storageLimit"];
  if (this->_internal_storage_limit() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_storage_limit());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData HarborProject::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    HarborProject::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*HarborProject::GetClassData() const { return &_class_data_; }

void HarborProject::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<HarborProject *>(to)->MergeFrom(
      static_cast<const HarborProject &>(from));
}


void HarborProject::MergeFrom(const HarborProject& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:artifacts.projects.v1alpha1.HarborProject)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_project_name().empty()) {
    _internal_set_project_name(from._internal_project_name());
  }
  if (from._internal_registry_id() != 0) {
    _internal_set_registry_id(from._internal_registry_id());
  }
  if (from._internal_public_() != 0) {
    _internal_set_public_(from._internal_public_());
  }
  if (from._internal_storage_limit() != 0) {
    _internal_set_storage_limit(from._internal_storage_limit());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void HarborProject::CopyFrom(const HarborProject& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:artifacts.projects.v1alpha1.HarborProject)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool HarborProject::IsInitialized() const {
  return true;
}

void HarborProject::InternalSwap(HarborProject* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &project_name_, GetArenaForAllocation(),
      &other->project_name_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::memswap<
      PROTOBUF_FIELD_OFFSET(HarborProject, storage_limit_)
      + sizeof(HarborProject::storage_limit_)
      - PROTOBUF_FIELD_OFFSET(HarborProject, registry_id_)>(
          reinterpret_cast<char*>(&registry_id_),
          reinterpret_cast<char*>(&other->registry_id_));
}

::PROTOBUF_NAMESPACE_ID::Metadata HarborProject::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_getter, &descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_once,
      file_level_metadata_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto[0]);
}

// ===================================================================

class ProjectsRegistry::_Internal {
 public:
  static const ::artifacts::projects::v1alpha1::HarborProject& harbor(const ProjectsRegistry* msg);
};

const ::artifacts::projects::v1alpha1::HarborProject&
ProjectsRegistry::_Internal::harbor(const ProjectsRegistry* msg) {
  return *msg->harbor_;
}
ProjectsRegistry::ProjectsRegistry(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:artifacts.projects.v1alpha1.ProjectsRegistry)
}
ProjectsRegistry::ProjectsRegistry(const ProjectsRegistry& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_id().empty()) {
    id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_id(), 
      GetArenaForAllocation());
  }
  environment_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_environment_id().empty()) {
    environment_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_environment_id(), 
      GetArenaForAllocation());
  }
  if (from._internal_has_harbor()) {
    harbor_ = new ::artifacts::projects::v1alpha1::HarborProject(*from.harbor_);
  } else {
    harbor_ = nullptr;
  }
  ::memcpy(&organization_id_, &from.organization_id_,
    static_cast<size_t>(reinterpret_cast<char*>(&active_) -
    reinterpret_cast<char*>(&organization_id_)) + sizeof(active_));
  // @@protoc_insertion_point(copy_constructor:artifacts.projects.v1alpha1.ProjectsRegistry)
}

inline void ProjectsRegistry::SharedCtor() {
id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
environment_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
::memset(reinterpret_cast<char*>(this) + static_cast<size_t>(
    reinterpret_cast<char*>(&harbor_) - reinterpret_cast<char*>(this)),
    0, static_cast<size_t>(reinterpret_cast<char*>(&active_) -
    reinterpret_cast<char*>(&harbor_)) + sizeof(active_));
}

ProjectsRegistry::~ProjectsRegistry() {
  // @@protoc_insertion_point(destructor:artifacts.projects.v1alpha1.ProjectsRegistry)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void ProjectsRegistry::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  environment_id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (this != internal_default_instance()) delete harbor_;
}

void ProjectsRegistry::ArenaDtor(void* object) {
  ProjectsRegistry* _this = reinterpret_cast< ProjectsRegistry* >(object);
  (void)_this;
}
void ProjectsRegistry::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void ProjectsRegistry::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void ProjectsRegistry::Clear() {
// @@protoc_insertion_point(message_clear_start:artifacts.projects.v1alpha1.ProjectsRegistry)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  id_.ClearToEmpty();
  environment_id_.ClearToEmpty();
  if (GetArenaForAllocation() == nullptr && harbor_ != nullptr) {
    delete harbor_;
  }
  harbor_ = nullptr;
  ::memset(&organization_id_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&active_) -
      reinterpret_cast<char*>(&organization_id_)) + sizeof(active_));
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* ProjectsRegistry::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // string id = 1 [json_name = "id"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "artifacts.projects.v1alpha1.ProjectsRegistry.id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 organization_id = 2 [json_name = "organizationId"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 16)) {
          organization_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 project_id = 3 [json_name = "projectId"];
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 24)) {
          project_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string environment_id = 4 [json_name = "environmentId"];
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 34)) {
          auto str = _internal_mutable_environment_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "artifacts.projects.v1alpha1.ProjectsRegistry.environment_id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // bool active = 6 [json_name = "active"];
      case 6:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 48)) {
          active_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // .artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];
      case 7:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 58)) {
          ptr = ctx->ParseMessage(_internal_mutable_harbor(), ptr);
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

::PROTOBUF_NAMESPACE_ID::uint8* ProjectsRegistry::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:artifacts.projects.v1alpha1.ProjectsRegistry)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string id = 1 [json_name = "id"];
  if (!this->_internal_id().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_id().data(), static_cast<int>(this->_internal_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "artifacts.projects.v1alpha1.ProjectsRegistry.id");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_id(), target);
  }

  // uint32 organization_id = 2 [json_name = "organizationId"];
  if (this->_internal_organization_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(2, this->_internal_organization_id(), target);
  }

  // uint32 project_id = 3 [json_name = "projectId"];
  if (this->_internal_project_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(3, this->_internal_project_id(), target);
  }

  // string environment_id = 4 [json_name = "environmentId"];
  if (!this->_internal_environment_id().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_environment_id().data(), static_cast<int>(this->_internal_environment_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "artifacts.projects.v1alpha1.ProjectsRegistry.environment_id");
    target = stream->WriteStringMaybeAliased(
        4, this->_internal_environment_id(), target);
  }

  // bool active = 6 [json_name = "active"];
  if (this->_internal_active() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteBoolToArray(6, this->_internal_active(), target);
  }

  // .artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];
  if (this->_internal_has_harbor()) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(
        7, _Internal::harbor(this), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:artifacts.projects.v1alpha1.ProjectsRegistry)
  return target;
}

size_t ProjectsRegistry::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:artifacts.projects.v1alpha1.ProjectsRegistry)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string id = 1 [json_name = "id"];
  if (!this->_internal_id().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_id());
  }

  // string environment_id = 4 [json_name = "environmentId"];
  if (!this->_internal_environment_id().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_environment_id());
  }

  // .artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];
  if (this->_internal_has_harbor()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(
        *harbor_);
  }

  // uint32 organization_id = 2 [json_name = "organizationId"];
  if (this->_internal_organization_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_organization_id());
  }

  // uint32 project_id = 3 [json_name = "projectId"];
  if (this->_internal_project_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_project_id());
  }

  // bool active = 6 [json_name = "active"];
  if (this->_internal_active() != 0) {
    total_size += 1 + 1;
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData ProjectsRegistry::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    ProjectsRegistry::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*ProjectsRegistry::GetClassData() const { return &_class_data_; }

void ProjectsRegistry::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<ProjectsRegistry *>(to)->MergeFrom(
      static_cast<const ProjectsRegistry &>(from));
}


void ProjectsRegistry::MergeFrom(const ProjectsRegistry& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:artifacts.projects.v1alpha1.ProjectsRegistry)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_id().empty()) {
    _internal_set_id(from._internal_id());
  }
  if (!from._internal_environment_id().empty()) {
    _internal_set_environment_id(from._internal_environment_id());
  }
  if (from._internal_has_harbor()) {
    _internal_mutable_harbor()->::artifacts::projects::v1alpha1::HarborProject::MergeFrom(from._internal_harbor());
  }
  if (from._internal_organization_id() != 0) {
    _internal_set_organization_id(from._internal_organization_id());
  }
  if (from._internal_project_id() != 0) {
    _internal_set_project_id(from._internal_project_id());
  }
  if (from._internal_active() != 0) {
    _internal_set_active(from._internal_active());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void ProjectsRegistry::CopyFrom(const ProjectsRegistry& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:artifacts.projects.v1alpha1.ProjectsRegistry)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool ProjectsRegistry::IsInitialized() const {
  return true;
}

void ProjectsRegistry::InternalSwap(ProjectsRegistry* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &id_, GetArenaForAllocation(),
      &other->id_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &environment_id_, GetArenaForAllocation(),
      &other->environment_id_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::memswap<
      PROTOBUF_FIELD_OFFSET(ProjectsRegistry, active_)
      + sizeof(ProjectsRegistry::active_)
      - PROTOBUF_FIELD_OFFSET(ProjectsRegistry, harbor_)>(
          reinterpret_cast<char*>(&harbor_),
          reinterpret_cast<char*>(&other->harbor_));
}

::PROTOBUF_NAMESPACE_ID::Metadata ProjectsRegistry::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_getter, &descriptor_table_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto_once,
      file_level_metadata_artifacts_2fprojects_2fv1alpha1_2fregistry_5fprojects_2eproto[1]);
}

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1alpha1
}  // namespace projects
}  // namespace artifacts
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::artifacts::projects::v1alpha1::HarborProject* Arena::CreateMaybeMessage< ::artifacts::projects::v1alpha1::HarborProject >(Arena* arena) {
  return Arena::CreateMessageInternal< ::artifacts::projects::v1alpha1::HarborProject >(arena);
}
template<> PROTOBUF_NOINLINE ::artifacts::projects::v1alpha1::ProjectsRegistry* Arena::CreateMaybeMessage< ::artifacts::projects::v1alpha1::ProjectsRegistry >(Arena* arena) {
  return Arena::CreateMessageInternal< ::artifacts::projects::v1alpha1::ProjectsRegistry >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
