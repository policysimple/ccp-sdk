// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: search/v1alpha1/search.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_search_2fv1alpha1_2fsearch_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_search_2fv1alpha1_2fsearch_2eproto

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
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_search_2fv1alpha1_2fsearch_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_search_2fv1alpha1_2fsearch_2eproto {
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
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_search_2fv1alpha1_2fsearch_2eproto;
namespace search {
namespace v1alpha1 {
class SearchItem;
struct SearchItemDefaultTypeInternal;
extern SearchItemDefaultTypeInternal _SearchItem_default_instance_;
class SearchItem_DataEntry_DoNotUse;
struct SearchItem_DataEntry_DoNotUseDefaultTypeInternal;
extern SearchItem_DataEntry_DoNotUseDefaultTypeInternal _SearchItem_DataEntry_DoNotUse_default_instance_;
}  // namespace v1alpha1
}  // namespace search
PROTOBUF_NAMESPACE_OPEN
template<> ::search::v1alpha1::SearchItem* Arena::CreateMaybeMessage<::search::v1alpha1::SearchItem>(Arena*);
template<> ::search::v1alpha1::SearchItem_DataEntry_DoNotUse* Arena::CreateMaybeMessage<::search::v1alpha1::SearchItem_DataEntry_DoNotUse>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace search {
namespace v1alpha1 {

// ===================================================================

class SearchItem_DataEntry_DoNotUse : public ::PROTOBUF_NAMESPACE_ID::internal::MapEntry<SearchItem_DataEntry_DoNotUse, 
    std::string, std::string,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING> {
public:
  typedef ::PROTOBUF_NAMESPACE_ID::internal::MapEntry<SearchItem_DataEntry_DoNotUse, 
    std::string, std::string,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING> SuperType;
  SearchItem_DataEntry_DoNotUse();
  explicit constexpr SearchItem_DataEntry_DoNotUse(
      ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);
  explicit SearchItem_DataEntry_DoNotUse(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  void MergeFrom(const SearchItem_DataEntry_DoNotUse& other);
  static const SearchItem_DataEntry_DoNotUse* internal_default_instance() { return reinterpret_cast<const SearchItem_DataEntry_DoNotUse*>(&_SearchItem_DataEntry_DoNotUse_default_instance_); }
  static bool ValidateKey(std::string* s) {
    return ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(s->data(), static_cast<int>(s->size()), ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::PARSE, "search.v1alpha1.SearchItem.DataEntry.key");
 }
  static bool ValidateValue(std::string* s) {
    return ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(s->data(), static_cast<int>(s->size()), ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::PARSE, "search.v1alpha1.SearchItem.DataEntry.value");
 }
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
};

// -------------------------------------------------------------------

class SearchItem final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:search.v1alpha1.SearchItem) */ {
 public:
  inline SearchItem() : SearchItem(nullptr) {}
  ~SearchItem() override;
  explicit constexpr SearchItem(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  SearchItem(const SearchItem& from);
  SearchItem(SearchItem&& from) noexcept
    : SearchItem() {
    *this = ::std::move(from);
  }

  inline SearchItem& operator=(const SearchItem& from) {
    CopyFrom(from);
    return *this;
  }
  inline SearchItem& operator=(SearchItem&& from) noexcept {
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
  static const SearchItem& default_instance() {
    return *internal_default_instance();
  }
  static inline const SearchItem* internal_default_instance() {
    return reinterpret_cast<const SearchItem*>(
               &_SearchItem_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(SearchItem& a, SearchItem& b) {
    a.Swap(&b);
  }
  inline void Swap(SearchItem* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(SearchItem* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline SearchItem* New() const final {
    return new SearchItem();
  }

  SearchItem* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<SearchItem>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const SearchItem& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const SearchItem& from);
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
  void InternalSwap(SearchItem* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "search.v1alpha1.SearchItem";
  }
  protected:
  explicit SearchItem(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kDataFieldNumber = 7,
    kObjectIdFieldNumber = 1,
    kTypeFieldNumber = 2,
    kNameFieldNumber = 3,
    kOrgIdFieldNumber = 4,
    kDescriptionFieldNumber = 5,
    kMetadataFieldNumber = 6,
  };
  // map<string, string> data = 7 [json_name = "data"];
  int data_size() const;
  private:
  int _internal_data_size() const;
  public:
  void clear_data();
  private:
  const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
      _internal_data() const;
  ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
      _internal_mutable_data();
  public:
  const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
      data() const;
  ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
      mutable_data();

  // string object_id = 1 [json_name = "objectId"];
  void clear_object_id();
  const std::string& object_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_object_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_object_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_object_id();
  void set_allocated_object_id(std::string* object_id);
  private:
  const std::string& _internal_object_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_object_id(const std::string& value);
  std::string* _internal_mutable_object_id();
  public:

  // string type = 2 [json_name = "type"];
  void clear_type();
  const std::string& type() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_type(ArgT0&& arg0, ArgT... args);
  std::string* mutable_type();
  PROTOBUF_MUST_USE_RESULT std::string* release_type();
  void set_allocated_type(std::string* type);
  private:
  const std::string& _internal_type() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_type(const std::string& value);
  std::string* _internal_mutable_type();
  public:

  // string name = 3 [json_name = "name"];
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

  // string org_id = 4 [json_name = "orgId"];
  void clear_org_id();
  const std::string& org_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_org_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_org_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_org_id();
  void set_allocated_org_id(std::string* org_id);
  private:
  const std::string& _internal_org_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_org_id(const std::string& value);
  std::string* _internal_mutable_org_id();
  public:

  // string description = 5 [json_name = "description"];
  void clear_description();
  const std::string& description() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_description(ArgT0&& arg0, ArgT... args);
  std::string* mutable_description();
  PROTOBUF_MUST_USE_RESULT std::string* release_description();
  void set_allocated_description(std::string* description);
  private:
  const std::string& _internal_description() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_description(const std::string& value);
  std::string* _internal_mutable_description();
  public:

  // string metadata = 6 [json_name = "metadata"];
  void clear_metadata();
  const std::string& metadata() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_metadata(ArgT0&& arg0, ArgT... args);
  std::string* mutable_metadata();
  PROTOBUF_MUST_USE_RESULT std::string* release_metadata();
  void set_allocated_metadata(std::string* metadata);
  private:
  const std::string& _internal_metadata() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_metadata(const std::string& value);
  std::string* _internal_mutable_metadata();
  public:

  // @@protoc_insertion_point(class_scope:search.v1alpha1.SearchItem)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::MapField<
      SearchItem_DataEntry_DoNotUse,
      std::string, std::string,
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING> data_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr object_id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr type_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr org_id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr description_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr metadata_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_search_2fv1alpha1_2fsearch_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// -------------------------------------------------------------------

// SearchItem

// string object_id = 1 [json_name = "objectId"];
inline void SearchItem::clear_object_id() {
  object_id_.ClearToEmpty();
}
inline const std::string& SearchItem::object_id() const {
  // @@protoc_insertion_point(field_get:search.v1alpha1.SearchItem.object_id)
  return _internal_object_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void SearchItem::set_object_id(ArgT0&& arg0, ArgT... args) {
 
 object_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:search.v1alpha1.SearchItem.object_id)
}
inline std::string* SearchItem::mutable_object_id() {
  std::string* _s = _internal_mutable_object_id();
  // @@protoc_insertion_point(field_mutable:search.v1alpha1.SearchItem.object_id)
  return _s;
}
inline const std::string& SearchItem::_internal_object_id() const {
  return object_id_.Get();
}
inline void SearchItem::_internal_set_object_id(const std::string& value) {
  
  object_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* SearchItem::_internal_mutable_object_id() {
  
  return object_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* SearchItem::release_object_id() {
  // @@protoc_insertion_point(field_release:search.v1alpha1.SearchItem.object_id)
  return object_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void SearchItem::set_allocated_object_id(std::string* object_id) {
  if (object_id != nullptr) {
    
  } else {
    
  }
  object_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), object_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:search.v1alpha1.SearchItem.object_id)
}

// string type = 2 [json_name = "type"];
inline void SearchItem::clear_type() {
  type_.ClearToEmpty();
}
inline const std::string& SearchItem::type() const {
  // @@protoc_insertion_point(field_get:search.v1alpha1.SearchItem.type)
  return _internal_type();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void SearchItem::set_type(ArgT0&& arg0, ArgT... args) {
 
 type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:search.v1alpha1.SearchItem.type)
}
inline std::string* SearchItem::mutable_type() {
  std::string* _s = _internal_mutable_type();
  // @@protoc_insertion_point(field_mutable:search.v1alpha1.SearchItem.type)
  return _s;
}
inline const std::string& SearchItem::_internal_type() const {
  return type_.Get();
}
inline void SearchItem::_internal_set_type(const std::string& value) {
  
  type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* SearchItem::_internal_mutable_type() {
  
  return type_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* SearchItem::release_type() {
  // @@protoc_insertion_point(field_release:search.v1alpha1.SearchItem.type)
  return type_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void SearchItem::set_allocated_type(std::string* type) {
  if (type != nullptr) {
    
  } else {
    
  }
  type_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), type,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:search.v1alpha1.SearchItem.type)
}

// string name = 3 [json_name = "name"];
inline void SearchItem::clear_name() {
  name_.ClearToEmpty();
}
inline const std::string& SearchItem::name() const {
  // @@protoc_insertion_point(field_get:search.v1alpha1.SearchItem.name)
  return _internal_name();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void SearchItem::set_name(ArgT0&& arg0, ArgT... args) {
 
 name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:search.v1alpha1.SearchItem.name)
}
inline std::string* SearchItem::mutable_name() {
  std::string* _s = _internal_mutable_name();
  // @@protoc_insertion_point(field_mutable:search.v1alpha1.SearchItem.name)
  return _s;
}
inline const std::string& SearchItem::_internal_name() const {
  return name_.Get();
}
inline void SearchItem::_internal_set_name(const std::string& value) {
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* SearchItem::_internal_mutable_name() {
  
  return name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* SearchItem::release_name() {
  // @@protoc_insertion_point(field_release:search.v1alpha1.SearchItem.name)
  return name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void SearchItem::set_allocated_name(std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:search.v1alpha1.SearchItem.name)
}

// string org_id = 4 [json_name = "orgId"];
inline void SearchItem::clear_org_id() {
  org_id_.ClearToEmpty();
}
inline const std::string& SearchItem::org_id() const {
  // @@protoc_insertion_point(field_get:search.v1alpha1.SearchItem.org_id)
  return _internal_org_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void SearchItem::set_org_id(ArgT0&& arg0, ArgT... args) {
 
 org_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:search.v1alpha1.SearchItem.org_id)
}
inline std::string* SearchItem::mutable_org_id() {
  std::string* _s = _internal_mutable_org_id();
  // @@protoc_insertion_point(field_mutable:search.v1alpha1.SearchItem.org_id)
  return _s;
}
inline const std::string& SearchItem::_internal_org_id() const {
  return org_id_.Get();
}
inline void SearchItem::_internal_set_org_id(const std::string& value) {
  
  org_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* SearchItem::_internal_mutable_org_id() {
  
  return org_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* SearchItem::release_org_id() {
  // @@protoc_insertion_point(field_release:search.v1alpha1.SearchItem.org_id)
  return org_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void SearchItem::set_allocated_org_id(std::string* org_id) {
  if (org_id != nullptr) {
    
  } else {
    
  }
  org_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), org_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:search.v1alpha1.SearchItem.org_id)
}

// string description = 5 [json_name = "description"];
inline void SearchItem::clear_description() {
  description_.ClearToEmpty();
}
inline const std::string& SearchItem::description() const {
  // @@protoc_insertion_point(field_get:search.v1alpha1.SearchItem.description)
  return _internal_description();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void SearchItem::set_description(ArgT0&& arg0, ArgT... args) {
 
 description_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:search.v1alpha1.SearchItem.description)
}
inline std::string* SearchItem::mutable_description() {
  std::string* _s = _internal_mutable_description();
  // @@protoc_insertion_point(field_mutable:search.v1alpha1.SearchItem.description)
  return _s;
}
inline const std::string& SearchItem::_internal_description() const {
  return description_.Get();
}
inline void SearchItem::_internal_set_description(const std::string& value) {
  
  description_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* SearchItem::_internal_mutable_description() {
  
  return description_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* SearchItem::release_description() {
  // @@protoc_insertion_point(field_release:search.v1alpha1.SearchItem.description)
  return description_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void SearchItem::set_allocated_description(std::string* description) {
  if (description != nullptr) {
    
  } else {
    
  }
  description_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), description,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:search.v1alpha1.SearchItem.description)
}

// string metadata = 6 [json_name = "metadata"];
inline void SearchItem::clear_metadata() {
  metadata_.ClearToEmpty();
}
inline const std::string& SearchItem::metadata() const {
  // @@protoc_insertion_point(field_get:search.v1alpha1.SearchItem.metadata)
  return _internal_metadata();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void SearchItem::set_metadata(ArgT0&& arg0, ArgT... args) {
 
 metadata_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:search.v1alpha1.SearchItem.metadata)
}
inline std::string* SearchItem::mutable_metadata() {
  std::string* _s = _internal_mutable_metadata();
  // @@protoc_insertion_point(field_mutable:search.v1alpha1.SearchItem.metadata)
  return _s;
}
inline const std::string& SearchItem::_internal_metadata() const {
  return metadata_.Get();
}
inline void SearchItem::_internal_set_metadata(const std::string& value) {
  
  metadata_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* SearchItem::_internal_mutable_metadata() {
  
  return metadata_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* SearchItem::release_metadata() {
  // @@protoc_insertion_point(field_release:search.v1alpha1.SearchItem.metadata)
  return metadata_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void SearchItem::set_allocated_metadata(std::string* metadata) {
  if (metadata != nullptr) {
    
  } else {
    
  }
  metadata_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), metadata,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:search.v1alpha1.SearchItem.metadata)
}

// map<string, string> data = 7 [json_name = "data"];
inline int SearchItem::_internal_data_size() const {
  return data_.size();
}
inline int SearchItem::data_size() const {
  return _internal_data_size();
}
inline void SearchItem::clear_data() {
  data_.Clear();
}
inline const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
SearchItem::_internal_data() const {
  return data_.GetMap();
}
inline const ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >&
SearchItem::data() const {
  // @@protoc_insertion_point(field_map:search.v1alpha1.SearchItem.data)
  return _internal_data();
}
inline ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
SearchItem::_internal_mutable_data() {
  return data_.MutableMap();
}
inline ::PROTOBUF_NAMESPACE_ID::Map< std::string, std::string >*
SearchItem::mutable_data() {
  // @@protoc_insertion_point(field_mutable_map:search.v1alpha1.SearchItem.data)
  return _internal_mutable_data();
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace v1alpha1
}  // namespace search

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_search_2fv1alpha1_2fsearch_2eproto
