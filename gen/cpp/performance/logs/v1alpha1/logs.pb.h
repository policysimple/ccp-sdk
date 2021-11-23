// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_performance_2flogs_2fv1alpha1_2flogs_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_performance_2flogs_2fv1alpha1_2flogs_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_performance_2flogs_2fv1alpha1_2flogs_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_performance_2flogs_2fv1alpha1_2flogs_2eproto {
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
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_performance_2flogs_2fv1alpha1_2flogs_2eproto;
namespace performance {
namespace logs {
namespace v1alpha1 {
class LogItem;
struct LogItemDefaultTypeInternal;
extern LogItemDefaultTypeInternal _LogItem_default_instance_;
}  // namespace v1alpha1
}  // namespace logs
}  // namespace performance
PROTOBUF_NAMESPACE_OPEN
template<> ::performance::logs::v1alpha1::LogItem* Arena::CreateMaybeMessage<::performance::logs::v1alpha1::LogItem>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace performance {
namespace logs {
namespace v1alpha1 {

// ===================================================================

class LogItem final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:performance.logs.v1alpha1.LogItem) */ {
 public:
  inline LogItem() : LogItem(nullptr) {}
  ~LogItem() override;
  explicit constexpr LogItem(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  LogItem(const LogItem& from);
  LogItem(LogItem&& from) noexcept
    : LogItem() {
    *this = ::std::move(from);
  }

  inline LogItem& operator=(const LogItem& from) {
    CopyFrom(from);
    return *this;
  }
  inline LogItem& operator=(LogItem&& from) noexcept {
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
  static const LogItem& default_instance() {
    return *internal_default_instance();
  }
  static inline const LogItem* internal_default_instance() {
    return reinterpret_cast<const LogItem*>(
               &_LogItem_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(LogItem& a, LogItem& b) {
    a.Swap(&b);
  }
  inline void Swap(LogItem* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(LogItem* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline LogItem* New() const final {
    return new LogItem();
  }

  LogItem* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<LogItem>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const LogItem& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const LogItem& from);
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
  void InternalSwap(LogItem* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "performance.logs.v1alpha1.LogItem";
  }
  protected:
  explicit LogItem(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kDateFieldNumber = 1,
    kContainerFieldNumber = 2,
    kPodNameFieldNumber = 3,
    kNamespaceFieldNumber = 4,
    kMessageFieldNumber = 5,
  };
  // string date = 1 [json_name = "date"];
  void clear_date();
  const std::string& date() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_date(ArgT0&& arg0, ArgT... args);
  std::string* mutable_date();
  PROTOBUF_MUST_USE_RESULT std::string* release_date();
  void set_allocated_date(std::string* date);
  private:
  const std::string& _internal_date() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_date(const std::string& value);
  std::string* _internal_mutable_date();
  public:

  // string container = 2 [json_name = "container"];
  void clear_container();
  const std::string& container() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_container(ArgT0&& arg0, ArgT... args);
  std::string* mutable_container();
  PROTOBUF_MUST_USE_RESULT std::string* release_container();
  void set_allocated_container(std::string* container);
  private:
  const std::string& _internal_container() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_container(const std::string& value);
  std::string* _internal_mutable_container();
  public:

  // string pod_name = 3 [json_name = "podName"];
  void clear_pod_name();
  const std::string& pod_name() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_pod_name(ArgT0&& arg0, ArgT... args);
  std::string* mutable_pod_name();
  PROTOBUF_MUST_USE_RESULT std::string* release_pod_name();
  void set_allocated_pod_name(std::string* pod_name);
  private:
  const std::string& _internal_pod_name() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_pod_name(const std::string& value);
  std::string* _internal_mutable_pod_name();
  public:

  // string namespace = 4 [json_name = "namespace"];
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

  // string message = 5 [json_name = "message"];
  void clear_message();
  const std::string& message() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_message(ArgT0&& arg0, ArgT... args);
  std::string* mutable_message();
  PROTOBUF_MUST_USE_RESULT std::string* release_message();
  void set_allocated_message(std::string* message);
  private:
  const std::string& _internal_message() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_message(const std::string& value);
  std::string* _internal_mutable_message();
  public:

  // @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.LogItem)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr date_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr container_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr pod_name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr namespace__;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr message_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_performance_2flogs_2fv1alpha1_2flogs_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// LogItem

// string date = 1 [json_name = "date"];
inline void LogItem::clear_date() {
  date_.ClearToEmpty();
}
inline const std::string& LogItem::date() const {
  // @@protoc_insertion_point(field_get:performance.logs.v1alpha1.LogItem.date)
  return _internal_date();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void LogItem::set_date(ArgT0&& arg0, ArgT... args) {
 
 date_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:performance.logs.v1alpha1.LogItem.date)
}
inline std::string* LogItem::mutable_date() {
  std::string* _s = _internal_mutable_date();
  // @@protoc_insertion_point(field_mutable:performance.logs.v1alpha1.LogItem.date)
  return _s;
}
inline const std::string& LogItem::_internal_date() const {
  return date_.Get();
}
inline void LogItem::_internal_set_date(const std::string& value) {
  
  date_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* LogItem::_internal_mutable_date() {
  
  return date_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* LogItem::release_date() {
  // @@protoc_insertion_point(field_release:performance.logs.v1alpha1.LogItem.date)
  return date_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void LogItem::set_allocated_date(std::string* date) {
  if (date != nullptr) {
    
  } else {
    
  }
  date_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), date,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:performance.logs.v1alpha1.LogItem.date)
}

// string container = 2 [json_name = "container"];
inline void LogItem::clear_container() {
  container_.ClearToEmpty();
}
inline const std::string& LogItem::container() const {
  // @@protoc_insertion_point(field_get:performance.logs.v1alpha1.LogItem.container)
  return _internal_container();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void LogItem::set_container(ArgT0&& arg0, ArgT... args) {
 
 container_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:performance.logs.v1alpha1.LogItem.container)
}
inline std::string* LogItem::mutable_container() {
  std::string* _s = _internal_mutable_container();
  // @@protoc_insertion_point(field_mutable:performance.logs.v1alpha1.LogItem.container)
  return _s;
}
inline const std::string& LogItem::_internal_container() const {
  return container_.Get();
}
inline void LogItem::_internal_set_container(const std::string& value) {
  
  container_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* LogItem::_internal_mutable_container() {
  
  return container_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* LogItem::release_container() {
  // @@protoc_insertion_point(field_release:performance.logs.v1alpha1.LogItem.container)
  return container_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void LogItem::set_allocated_container(std::string* container) {
  if (container != nullptr) {
    
  } else {
    
  }
  container_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), container,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:performance.logs.v1alpha1.LogItem.container)
}

// string pod_name = 3 [json_name = "podName"];
inline void LogItem::clear_pod_name() {
  pod_name_.ClearToEmpty();
}
inline const std::string& LogItem::pod_name() const {
  // @@protoc_insertion_point(field_get:performance.logs.v1alpha1.LogItem.pod_name)
  return _internal_pod_name();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void LogItem::set_pod_name(ArgT0&& arg0, ArgT... args) {
 
 pod_name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:performance.logs.v1alpha1.LogItem.pod_name)
}
inline std::string* LogItem::mutable_pod_name() {
  std::string* _s = _internal_mutable_pod_name();
  // @@protoc_insertion_point(field_mutable:performance.logs.v1alpha1.LogItem.pod_name)
  return _s;
}
inline const std::string& LogItem::_internal_pod_name() const {
  return pod_name_.Get();
}
inline void LogItem::_internal_set_pod_name(const std::string& value) {
  
  pod_name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* LogItem::_internal_mutable_pod_name() {
  
  return pod_name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* LogItem::release_pod_name() {
  // @@protoc_insertion_point(field_release:performance.logs.v1alpha1.LogItem.pod_name)
  return pod_name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void LogItem::set_allocated_pod_name(std::string* pod_name) {
  if (pod_name != nullptr) {
    
  } else {
    
  }
  pod_name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), pod_name,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:performance.logs.v1alpha1.LogItem.pod_name)
}

// string namespace = 4 [json_name = "namespace"];
inline void LogItem::clear_namespace_() {
  namespace__.ClearToEmpty();
}
inline const std::string& LogItem::namespace_() const {
  // @@protoc_insertion_point(field_get:performance.logs.v1alpha1.LogItem.namespace)
  return _internal_namespace_();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void LogItem::set_namespace_(ArgT0&& arg0, ArgT... args) {
 
 namespace__.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:performance.logs.v1alpha1.LogItem.namespace)
}
inline std::string* LogItem::mutable_namespace_() {
  std::string* _s = _internal_mutable_namespace_();
  // @@protoc_insertion_point(field_mutable:performance.logs.v1alpha1.LogItem.namespace)
  return _s;
}
inline const std::string& LogItem::_internal_namespace_() const {
  return namespace__.Get();
}
inline void LogItem::_internal_set_namespace_(const std::string& value) {
  
  namespace__.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* LogItem::_internal_mutable_namespace_() {
  
  return namespace__.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* LogItem::release_namespace_() {
  // @@protoc_insertion_point(field_release:performance.logs.v1alpha1.LogItem.namespace)
  return namespace__.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void LogItem::set_allocated_namespace_(std::string* namespace_) {
  if (namespace_ != nullptr) {
    
  } else {
    
  }
  namespace__.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), namespace_,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:performance.logs.v1alpha1.LogItem.namespace)
}

// string message = 5 [json_name = "message"];
inline void LogItem::clear_message() {
  message_.ClearToEmpty();
}
inline const std::string& LogItem::message() const {
  // @@protoc_insertion_point(field_get:performance.logs.v1alpha1.LogItem.message)
  return _internal_message();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void LogItem::set_message(ArgT0&& arg0, ArgT... args) {
 
 message_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:performance.logs.v1alpha1.LogItem.message)
}
inline std::string* LogItem::mutable_message() {
  std::string* _s = _internal_mutable_message();
  // @@protoc_insertion_point(field_mutable:performance.logs.v1alpha1.LogItem.message)
  return _s;
}
inline const std::string& LogItem::_internal_message() const {
  return message_.Get();
}
inline void LogItem::_internal_set_message(const std::string& value) {
  
  message_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* LogItem::_internal_mutable_message() {
  
  return message_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* LogItem::release_message() {
  // @@protoc_insertion_point(field_release:performance.logs.v1alpha1.LogItem.message)
  return message_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void LogItem::set_allocated_message(std::string* message) {
  if (message != nullptr) {
    
  } else {
    
  }
  message_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), message,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:performance.logs.v1alpha1.LogItem.message)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace v1alpha1
}  // namespace logs
}  // namespace performance

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_performance_2flogs_2fv1alpha1_2flogs_2eproto