// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: search/v1alpha1/search_api.proto

#include "search/v1alpha1/search_api.pb.h"

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
namespace search {
namespace v1alpha1 {
constexpr SearchRequest::SearchRequest(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : org_id_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , query_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , size_(0u)
  , page_(0u){}
struct SearchRequestDefaultTypeInternal {
  constexpr SearchRequestDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~SearchRequestDefaultTypeInternal() {}
  union {
    SearchRequest _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT SearchRequestDefaultTypeInternal _SearchRequest_default_instance_;
constexpr SearchResponse::SearchResponse(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : results_()
  , total_hits_(0u)
  , total_pages_(0u){}
struct SearchResponseDefaultTypeInternal {
  constexpr SearchResponseDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~SearchResponseDefaultTypeInternal() {}
  union {
    SearchResponse _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT SearchResponseDefaultTypeInternal _SearchResponse_default_instance_;
}  // namespace v1alpha1
}  // namespace search
static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_search_2fv1alpha1_2fsearch_5fapi_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_search_2fv1alpha1_2fsearch_5fapi_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_search_2fv1alpha1_2fsearch_5fapi_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_search_2fv1alpha1_2fsearch_5fapi_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchRequest, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchRequest, size_),
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchRequest, page_),
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchRequest, org_id_),
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchRequest, query_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchResponse, results_),
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchResponse, total_hits_),
  PROTOBUF_FIELD_OFFSET(::search::v1alpha1::SearchResponse, total_pages_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::search::v1alpha1::SearchRequest)},
  { 9, -1, sizeof(::search::v1alpha1::SearchResponse)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::search::v1alpha1::_SearchRequest_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::search::v1alpha1::_SearchResponse_default_instance_),
};

const char descriptor_table_protodef_search_2fv1alpha1_2fsearch_5fapi_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n search/v1alpha1/search_api.proto\022\017sear"
  "ch.v1alpha1\032\034search/v1alpha1/search.prot"
  "o\"d\n\rSearchRequest\022\022\n\004size\030\001 \001(\rR\004size\022\022"
  "\n\004page\030\002 \001(\rR\004page\022\025\n\006org_id\030\003 \001(\tR\005orgI"
  "d\022\024\n\005query\030\004 \001(\tR\005query\"\207\001\n\016SearchRespon"
  "se\0225\n\007results\030\001 \003(\0132\033.search.v1alpha1.Se"
  "archItemR\007results\022\035\n\ntotal_hits\030\002 \001(\rR\tt"
  "otalHits\022\037\n\013total_pages\030\003 \001(\rR\ntotalPage"
  "s2]\n\020SearchAPIService\022I\n\006Search\022\036.search"
  ".v1alpha1.SearchRequest\032\037.search.v1alpha"
  "1.SearchResponseB\211\001\n\031io.cuemby.Search.v1"
  "alpha1B\016SearchAPIProtoP\001Z0github.com/cue"
  "mby/ccp-sdk/gen/go/search/v1alpha1\242\002\003PPX"
  "\252\002\017Search.V1Alpha1\312\002\017Search\\V1Alpha1b\006pr"
  "oto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_deps[1] = {
  &::descriptor_table_search_2fv1alpha1_2fsearch_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto = {
  false, false, 564, descriptor_table_protodef_search_2fv1alpha1_2fsearch_5fapi_2eproto, "search/v1alpha1/search_api.proto", 
  &descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_once, descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_deps, 1, 2,
  schemas, file_default_instances, TableStruct_search_2fv1alpha1_2fsearch_5fapi_2eproto::offsets,
  file_level_metadata_search_2fv1alpha1_2fsearch_5fapi_2eproto, file_level_enum_descriptors_search_2fv1alpha1_2fsearch_5fapi_2eproto, file_level_service_descriptors_search_2fv1alpha1_2fsearch_5fapi_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_getter() {
  return &descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_search_2fv1alpha1_2fsearch_5fapi_2eproto(&descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto);
namespace search {
namespace v1alpha1 {

// ===================================================================

class SearchRequest::_Internal {
 public:
};

SearchRequest::SearchRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:search.v1alpha1.SearchRequest)
}
SearchRequest::SearchRequest(const SearchRequest& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  org_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_org_id().empty()) {
    org_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_org_id(), 
      GetArenaForAllocation());
  }
  query_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_query().empty()) {
    query_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_query(), 
      GetArenaForAllocation());
  }
  ::memcpy(&size_, &from.size_,
    static_cast<size_t>(reinterpret_cast<char*>(&page_) -
    reinterpret_cast<char*>(&size_)) + sizeof(page_));
  // @@protoc_insertion_point(copy_constructor:search.v1alpha1.SearchRequest)
}

inline void SearchRequest::SharedCtor() {
org_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
query_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
::memset(reinterpret_cast<char*>(this) + static_cast<size_t>(
    reinterpret_cast<char*>(&size_) - reinterpret_cast<char*>(this)),
    0, static_cast<size_t>(reinterpret_cast<char*>(&page_) -
    reinterpret_cast<char*>(&size_)) + sizeof(page_));
}

SearchRequest::~SearchRequest() {
  // @@protoc_insertion_point(destructor:search.v1alpha1.SearchRequest)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void SearchRequest::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  org_id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  query_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void SearchRequest::ArenaDtor(void* object) {
  SearchRequest* _this = reinterpret_cast< SearchRequest* >(object);
  (void)_this;
}
void SearchRequest::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void SearchRequest::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void SearchRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:search.v1alpha1.SearchRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  org_id_.ClearToEmpty();
  query_.ClearToEmpty();
  ::memset(&size_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&page_) -
      reinterpret_cast<char*>(&size_)) + sizeof(page_));
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* SearchRequest::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // uint32 size = 1 [json_name = "size"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 8)) {
          size_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 page = 2 [json_name = "page"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 16)) {
          page_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string org_id = 3 [json_name = "orgId"];
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          auto str = _internal_mutable_org_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "search.v1alpha1.SearchRequest.org_id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string query = 4 [json_name = "query"];
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 34)) {
          auto str = _internal_mutable_query();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "search.v1alpha1.SearchRequest.query"));
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

::PROTOBUF_NAMESPACE_ID::uint8* SearchRequest::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:search.v1alpha1.SearchRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // uint32 size = 1 [json_name = "size"];
  if (this->_internal_size() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(1, this->_internal_size(), target);
  }

  // uint32 page = 2 [json_name = "page"];
  if (this->_internal_page() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(2, this->_internal_page(), target);
  }

  // string org_id = 3 [json_name = "orgId"];
  if (!this->_internal_org_id().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_org_id().data(), static_cast<int>(this->_internal_org_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "search.v1alpha1.SearchRequest.org_id");
    target = stream->WriteStringMaybeAliased(
        3, this->_internal_org_id(), target);
  }

  // string query = 4 [json_name = "query"];
  if (!this->_internal_query().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_query().data(), static_cast<int>(this->_internal_query().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "search.v1alpha1.SearchRequest.query");
    target = stream->WriteStringMaybeAliased(
        4, this->_internal_query(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:search.v1alpha1.SearchRequest)
  return target;
}

size_t SearchRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:search.v1alpha1.SearchRequest)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string org_id = 3 [json_name = "orgId"];
  if (!this->_internal_org_id().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_org_id());
  }

  // string query = 4 [json_name = "query"];
  if (!this->_internal_query().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_query());
  }

  // uint32 size = 1 [json_name = "size"];
  if (this->_internal_size() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_size());
  }

  // uint32 page = 2 [json_name = "page"];
  if (this->_internal_page() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_page());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData SearchRequest::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    SearchRequest::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*SearchRequest::GetClassData() const { return &_class_data_; }

void SearchRequest::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<SearchRequest *>(to)->MergeFrom(
      static_cast<const SearchRequest &>(from));
}


void SearchRequest::MergeFrom(const SearchRequest& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:search.v1alpha1.SearchRequest)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_org_id().empty()) {
    _internal_set_org_id(from._internal_org_id());
  }
  if (!from._internal_query().empty()) {
    _internal_set_query(from._internal_query());
  }
  if (from._internal_size() != 0) {
    _internal_set_size(from._internal_size());
  }
  if (from._internal_page() != 0) {
    _internal_set_page(from._internal_page());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void SearchRequest::CopyFrom(const SearchRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:search.v1alpha1.SearchRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool SearchRequest::IsInitialized() const {
  return true;
}

void SearchRequest::InternalSwap(SearchRequest* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &org_id_, GetArenaForAllocation(),
      &other->org_id_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &query_, GetArenaForAllocation(),
      &other->query_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::memswap<
      PROTOBUF_FIELD_OFFSET(SearchRequest, page_)
      + sizeof(SearchRequest::page_)
      - PROTOBUF_FIELD_OFFSET(SearchRequest, size_)>(
          reinterpret_cast<char*>(&size_),
          reinterpret_cast<char*>(&other->size_));
}

::PROTOBUF_NAMESPACE_ID::Metadata SearchRequest::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_getter, &descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_once,
      file_level_metadata_search_2fv1alpha1_2fsearch_5fapi_2eproto[0]);
}

// ===================================================================

class SearchResponse::_Internal {
 public:
};

void SearchResponse::clear_results() {
  results_.Clear();
}
SearchResponse::SearchResponse(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned),
  results_(arena) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:search.v1alpha1.SearchResponse)
}
SearchResponse::SearchResponse(const SearchResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      results_(from.results_) {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  ::memcpy(&total_hits_, &from.total_hits_,
    static_cast<size_t>(reinterpret_cast<char*>(&total_pages_) -
    reinterpret_cast<char*>(&total_hits_)) + sizeof(total_pages_));
  // @@protoc_insertion_point(copy_constructor:search.v1alpha1.SearchResponse)
}

inline void SearchResponse::SharedCtor() {
::memset(reinterpret_cast<char*>(this) + static_cast<size_t>(
    reinterpret_cast<char*>(&total_hits_) - reinterpret_cast<char*>(this)),
    0, static_cast<size_t>(reinterpret_cast<char*>(&total_pages_) -
    reinterpret_cast<char*>(&total_hits_)) + sizeof(total_pages_));
}

SearchResponse::~SearchResponse() {
  // @@protoc_insertion_point(destructor:search.v1alpha1.SearchResponse)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void SearchResponse::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
}

void SearchResponse::ArenaDtor(void* object) {
  SearchResponse* _this = reinterpret_cast< SearchResponse* >(object);
  (void)_this;
}
void SearchResponse::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void SearchResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void SearchResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:search.v1alpha1.SearchResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  results_.Clear();
  ::memset(&total_hits_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&total_pages_) -
      reinterpret_cast<char*>(&total_hits_)) + sizeof(total_pages_));
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* SearchResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          ptr -= 1;
          do {
            ptr += 1;
            ptr = ctx->ParseMessage(_internal_add_results(), ptr);
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<10>(ptr));
        } else goto handle_unusual;
        continue;
      // uint32 total_hits = 2 [json_name = "totalHits"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 16)) {
          total_hits_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 total_pages = 3 [json_name = "totalPages"];
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 24)) {
          total_pages_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
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

::PROTOBUF_NAMESPACE_ID::uint8* SearchResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:search.v1alpha1.SearchResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->_internal_results_size()); i < n; i++) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(1, this->_internal_results(i), target, stream);
  }

  // uint32 total_hits = 2 [json_name = "totalHits"];
  if (this->_internal_total_hits() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(2, this->_internal_total_hits(), target);
  }

  // uint32 total_pages = 3 [json_name = "totalPages"];
  if (this->_internal_total_pages() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(3, this->_internal_total_pages(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:search.v1alpha1.SearchResponse)
  return target;
}

size_t SearchResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:search.v1alpha1.SearchResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];
  total_size += 1UL * this->_internal_results_size();
  for (const auto& msg : this->results_) {
    total_size +=
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(msg);
  }

  // uint32 total_hits = 2 [json_name = "totalHits"];
  if (this->_internal_total_hits() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_total_hits());
  }

  // uint32 total_pages = 3 [json_name = "totalPages"];
  if (this->_internal_total_pages() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_total_pages());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData SearchResponse::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    SearchResponse::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*SearchResponse::GetClassData() const { return &_class_data_; }

void SearchResponse::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<SearchResponse *>(to)->MergeFrom(
      static_cast<const SearchResponse &>(from));
}


void SearchResponse::MergeFrom(const SearchResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:search.v1alpha1.SearchResponse)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  results_.MergeFrom(from.results_);
  if (from._internal_total_hits() != 0) {
    _internal_set_total_hits(from._internal_total_hits());
  }
  if (from._internal_total_pages() != 0) {
    _internal_set_total_pages(from._internal_total_pages());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void SearchResponse::CopyFrom(const SearchResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:search.v1alpha1.SearchResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool SearchResponse::IsInitialized() const {
  return true;
}

void SearchResponse::InternalSwap(SearchResponse* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  results_.InternalSwap(&other->results_);
  ::PROTOBUF_NAMESPACE_ID::internal::memswap<
      PROTOBUF_FIELD_OFFSET(SearchResponse, total_pages_)
      + sizeof(SearchResponse::total_pages_)
      - PROTOBUF_FIELD_OFFSET(SearchResponse, total_hits_)>(
          reinterpret_cast<char*>(&total_hits_),
          reinterpret_cast<char*>(&other->total_hits_));
}

::PROTOBUF_NAMESPACE_ID::Metadata SearchResponse::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_getter, &descriptor_table_search_2fv1alpha1_2fsearch_5fapi_2eproto_once,
      file_level_metadata_search_2fv1alpha1_2fsearch_5fapi_2eproto[1]);
}

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1alpha1
}  // namespace search
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::search::v1alpha1::SearchRequest* Arena::CreateMaybeMessage< ::search::v1alpha1::SearchRequest >(Arena* arena) {
  return Arena::CreateMessageInternal< ::search::v1alpha1::SearchRequest >(arena);
}
template<> PROTOBUF_NOINLINE ::search::v1alpha1::SearchResponse* Arena::CreateMaybeMessage< ::search::v1alpha1::SearchResponse >(Arena* arena) {
  return Arena::CreateMessageInternal< ::search::v1alpha1::SearchResponse >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
