// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: payment/v1alpha1/payment.proto

#include "payment/v1alpha1/payment.pb.h"

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
namespace payment {
namespace v1alpha1 {
constexpr Payment::Payment(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : id_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , card_holder_name_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , card_type_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , expiry_date_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , application_id_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , card_number_(0)
  , cvv_number_(0)
  , organization_id_(0u)
  , project_id_(0u){}
struct PaymentDefaultTypeInternal {
  constexpr PaymentDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~PaymentDefaultTypeInternal() {}
  union {
    Payment _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT PaymentDefaultTypeInternal _Payment_default_instance_;
constexpr PaymentList::PaymentList(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : items_(){}
struct PaymentListDefaultTypeInternal {
  constexpr PaymentListDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~PaymentListDefaultTypeInternal() {}
  union {
    PaymentList _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT PaymentListDefaultTypeInternal _PaymentList_default_instance_;
}  // namespace v1alpha1
}  // namespace payment
static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_payment_2fv1alpha1_2fpayment_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_payment_2fv1alpha1_2fpayment_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_payment_2fv1alpha1_2fpayment_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_payment_2fv1alpha1_2fpayment_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, id_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, card_holder_name_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, card_type_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, card_number_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, cvv_number_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, expiry_date_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, organization_id_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, project_id_),
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::Payment, application_id_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::PaymentList, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::payment::v1alpha1::PaymentList, items_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::payment::v1alpha1::Payment)},
  { 14, -1, sizeof(::payment::v1alpha1::PaymentList)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::payment::v1alpha1::_Payment_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::payment::v1alpha1::_PaymentList_default_instance_),
};

const char descriptor_table_protodef_payment_2fv1alpha1_2fpayment_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\036payment/v1alpha1/payment.proto\022\020paymen"
  "t.v1alpha1\"\260\002\n\007Payment\022\016\n\002id\030\001 \001(\tR\002id\022("
  "\n\020card_holder_name\030\002 \001(\tR\016cardHolderName"
  "\022\033\n\tcard_type\030\003 \001(\tR\010cardType\022\037\n\013card_nu"
  "mber\030\004 \001(\005R\ncardNumber\022\035\n\ncvv_number\030\005 \001"
  "(\005R\tcvvNumber\022\037\n\013expiry_date\030\006 \001(\tR\nexpi"
  "ryDate\022\'\n\017organization_id\030\007 \001(\rR\016organiz"
  "ationId\022\035\n\nproject_id\030\010 \001(\rR\tprojectId\022%"
  "\n\016application_id\030\t \001(\tR\rapplicationId\">\n"
  "\013PaymentList\022/\n\005items\030\001 \003(\0132\031.payment.v1"
  "alpha1.PaymentR\005itemsB\213\001\n\032io.cuemby.paym"
  "ent.v1alpha1B\014PaymentProtoP\001Z1github.com"
  "/cuemby/ccp-sdk/gen/go/payment/v1alpha1\242"
  "\002\003PPX\252\002\020Payment.V1Alpha1\312\002\020Payment\\V1Alp"
  "ha1b\006proto3"
  ;
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_payment_2fv1alpha1_2fpayment_2eproto = {
  false, false, 571, descriptor_table_protodef_payment_2fv1alpha1_2fpayment_2eproto, "payment/v1alpha1/payment.proto", 
  &descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_once, nullptr, 0, 2,
  schemas, file_default_instances, TableStruct_payment_2fv1alpha1_2fpayment_2eproto::offsets,
  file_level_metadata_payment_2fv1alpha1_2fpayment_2eproto, file_level_enum_descriptors_payment_2fv1alpha1_2fpayment_2eproto, file_level_service_descriptors_payment_2fv1alpha1_2fpayment_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_getter() {
  return &descriptor_table_payment_2fv1alpha1_2fpayment_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_payment_2fv1alpha1_2fpayment_2eproto(&descriptor_table_payment_2fv1alpha1_2fpayment_2eproto);
namespace payment {
namespace v1alpha1 {

// ===================================================================

class Payment::_Internal {
 public:
};

Payment::Payment(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:payment.v1alpha1.Payment)
}
Payment::Payment(const Payment& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_id().empty()) {
    id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_id(), 
      GetArenaForAllocation());
  }
  card_holder_name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_card_holder_name().empty()) {
    card_holder_name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_card_holder_name(), 
      GetArenaForAllocation());
  }
  card_type_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_card_type().empty()) {
    card_type_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_card_type(), 
      GetArenaForAllocation());
  }
  expiry_date_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_expiry_date().empty()) {
    expiry_date_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_expiry_date(), 
      GetArenaForAllocation());
  }
  application_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_application_id().empty()) {
    application_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_application_id(), 
      GetArenaForAllocation());
  }
  ::memcpy(&card_number_, &from.card_number_,
    static_cast<size_t>(reinterpret_cast<char*>(&project_id_) -
    reinterpret_cast<char*>(&card_number_)) + sizeof(project_id_));
  // @@protoc_insertion_point(copy_constructor:payment.v1alpha1.Payment)
}

inline void Payment::SharedCtor() {
id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
card_holder_name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
card_type_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
expiry_date_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
application_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
::memset(reinterpret_cast<char*>(this) + static_cast<size_t>(
    reinterpret_cast<char*>(&card_number_) - reinterpret_cast<char*>(this)),
    0, static_cast<size_t>(reinterpret_cast<char*>(&project_id_) -
    reinterpret_cast<char*>(&card_number_)) + sizeof(project_id_));
}

Payment::~Payment() {
  // @@protoc_insertion_point(destructor:payment.v1alpha1.Payment)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void Payment::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  card_holder_name_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  card_type_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  expiry_date_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  application_id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void Payment::ArenaDtor(void* object) {
  Payment* _this = reinterpret_cast< Payment* >(object);
  (void)_this;
}
void Payment::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void Payment::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void Payment::Clear() {
// @@protoc_insertion_point(message_clear_start:payment.v1alpha1.Payment)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  id_.ClearToEmpty();
  card_holder_name_.ClearToEmpty();
  card_type_.ClearToEmpty();
  expiry_date_.ClearToEmpty();
  application_id_.ClearToEmpty();
  ::memset(&card_number_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&project_id_) -
      reinterpret_cast<char*>(&card_number_)) + sizeof(project_id_));
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* Payment::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
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
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "payment.v1alpha1.Payment.id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string card_holder_name = 2 [json_name = "cardHolderName"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_card_holder_name();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "payment.v1alpha1.Payment.card_holder_name"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string card_type = 3 [json_name = "cardType"];
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          auto str = _internal_mutable_card_type();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "payment.v1alpha1.Payment.card_type"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // int32 card_number = 4 [json_name = "cardNumber"];
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 32)) {
          card_number_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // int32 cvv_number = 5 [json_name = "cvvNumber"];
      case 5:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 40)) {
          cvv_number_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string expiry_date = 6 [json_name = "expiryDate"];
      case 6:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 50)) {
          auto str = _internal_mutable_expiry_date();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "payment.v1alpha1.Payment.expiry_date"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 organization_id = 7 [json_name = "organizationId"];
      case 7:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 56)) {
          organization_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 project_id = 8 [json_name = "projectId"];
      case 8:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 64)) {
          project_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string application_id = 9 [json_name = "applicationId"];
      case 9:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 74)) {
          auto str = _internal_mutable_application_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "payment.v1alpha1.Payment.application_id"));
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

::PROTOBUF_NAMESPACE_ID::uint8* Payment::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:payment.v1alpha1.Payment)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string id = 1 [json_name = "id"];
  if (!this->_internal_id().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_id().data(), static_cast<int>(this->_internal_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "payment.v1alpha1.Payment.id");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_id(), target);
  }

  // string card_holder_name = 2 [json_name = "cardHolderName"];
  if (!this->_internal_card_holder_name().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_card_holder_name().data(), static_cast<int>(this->_internal_card_holder_name().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "payment.v1alpha1.Payment.card_holder_name");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_card_holder_name(), target);
  }

  // string card_type = 3 [json_name = "cardType"];
  if (!this->_internal_card_type().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_card_type().data(), static_cast<int>(this->_internal_card_type().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "payment.v1alpha1.Payment.card_type");
    target = stream->WriteStringMaybeAliased(
        3, this->_internal_card_type(), target);
  }

  // int32 card_number = 4 [json_name = "cardNumber"];
  if (this->_internal_card_number() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt32ToArray(4, this->_internal_card_number(), target);
  }

  // int32 cvv_number = 5 [json_name = "cvvNumber"];
  if (this->_internal_cvv_number() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt32ToArray(5, this->_internal_cvv_number(), target);
  }

  // string expiry_date = 6 [json_name = "expiryDate"];
  if (!this->_internal_expiry_date().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_expiry_date().data(), static_cast<int>(this->_internal_expiry_date().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "payment.v1alpha1.Payment.expiry_date");
    target = stream->WriteStringMaybeAliased(
        6, this->_internal_expiry_date(), target);
  }

  // uint32 organization_id = 7 [json_name = "organizationId"];
  if (this->_internal_organization_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(7, this->_internal_organization_id(), target);
  }

  // uint32 project_id = 8 [json_name = "projectId"];
  if (this->_internal_project_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(8, this->_internal_project_id(), target);
  }

  // string application_id = 9 [json_name = "applicationId"];
  if (!this->_internal_application_id().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_application_id().data(), static_cast<int>(this->_internal_application_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "payment.v1alpha1.Payment.application_id");
    target = stream->WriteStringMaybeAliased(
        9, this->_internal_application_id(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:payment.v1alpha1.Payment)
  return target;
}

size_t Payment::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:payment.v1alpha1.Payment)
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

  // string card_holder_name = 2 [json_name = "cardHolderName"];
  if (!this->_internal_card_holder_name().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_card_holder_name());
  }

  // string card_type = 3 [json_name = "cardType"];
  if (!this->_internal_card_type().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_card_type());
  }

  // string expiry_date = 6 [json_name = "expiryDate"];
  if (!this->_internal_expiry_date().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_expiry_date());
  }

  // string application_id = 9 [json_name = "applicationId"];
  if (!this->_internal_application_id().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_application_id());
  }

  // int32 card_number = 4 [json_name = "cardNumber"];
  if (this->_internal_card_number() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int32Size(
        this->_internal_card_number());
  }

  // int32 cvv_number = 5 [json_name = "cvvNumber"];
  if (this->_internal_cvv_number() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int32Size(
        this->_internal_cvv_number());
  }

  // uint32 organization_id = 7 [json_name = "organizationId"];
  if (this->_internal_organization_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_organization_id());
  }

  // uint32 project_id = 8 [json_name = "projectId"];
  if (this->_internal_project_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_project_id());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData Payment::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    Payment::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*Payment::GetClassData() const { return &_class_data_; }

void Payment::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<Payment *>(to)->MergeFrom(
      static_cast<const Payment &>(from));
}


void Payment::MergeFrom(const Payment& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:payment.v1alpha1.Payment)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_id().empty()) {
    _internal_set_id(from._internal_id());
  }
  if (!from._internal_card_holder_name().empty()) {
    _internal_set_card_holder_name(from._internal_card_holder_name());
  }
  if (!from._internal_card_type().empty()) {
    _internal_set_card_type(from._internal_card_type());
  }
  if (!from._internal_expiry_date().empty()) {
    _internal_set_expiry_date(from._internal_expiry_date());
  }
  if (!from._internal_application_id().empty()) {
    _internal_set_application_id(from._internal_application_id());
  }
  if (from._internal_card_number() != 0) {
    _internal_set_card_number(from._internal_card_number());
  }
  if (from._internal_cvv_number() != 0) {
    _internal_set_cvv_number(from._internal_cvv_number());
  }
  if (from._internal_organization_id() != 0) {
    _internal_set_organization_id(from._internal_organization_id());
  }
  if (from._internal_project_id() != 0) {
    _internal_set_project_id(from._internal_project_id());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void Payment::CopyFrom(const Payment& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:payment.v1alpha1.Payment)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Payment::IsInitialized() const {
  return true;
}

void Payment::InternalSwap(Payment* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &id_, GetArenaForAllocation(),
      &other->id_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &card_holder_name_, GetArenaForAllocation(),
      &other->card_holder_name_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &card_type_, GetArenaForAllocation(),
      &other->card_type_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &expiry_date_, GetArenaForAllocation(),
      &other->expiry_date_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &application_id_, GetArenaForAllocation(),
      &other->application_id_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::memswap<
      PROTOBUF_FIELD_OFFSET(Payment, project_id_)
      + sizeof(Payment::project_id_)
      - PROTOBUF_FIELD_OFFSET(Payment, card_number_)>(
          reinterpret_cast<char*>(&card_number_),
          reinterpret_cast<char*>(&other->card_number_));
}

::PROTOBUF_NAMESPACE_ID::Metadata Payment::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_getter, &descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_once,
      file_level_metadata_payment_2fv1alpha1_2fpayment_2eproto[0]);
}

// ===================================================================

class PaymentList::_Internal {
 public:
};

PaymentList::PaymentList(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned),
  items_(arena) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:payment.v1alpha1.PaymentList)
}
PaymentList::PaymentList(const PaymentList& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      items_(from.items_) {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:payment.v1alpha1.PaymentList)
}

inline void PaymentList::SharedCtor() {
}

PaymentList::~PaymentList() {
  // @@protoc_insertion_point(destructor:payment.v1alpha1.PaymentList)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void PaymentList::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
}

void PaymentList::ArenaDtor(void* object) {
  PaymentList* _this = reinterpret_cast< PaymentList* >(object);
  (void)_this;
}
void PaymentList::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void PaymentList::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void PaymentList::Clear() {
// @@protoc_insertion_point(message_clear_start:payment.v1alpha1.PaymentList)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  items_.Clear();
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* PaymentList::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          ptr -= 1;
          do {
            ptr += 1;
            ptr = ctx->ParseMessage(_internal_add_items(), ptr);
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<10>(ptr));
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

::PROTOBUF_NAMESPACE_ID::uint8* PaymentList::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:payment.v1alpha1.PaymentList)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->_internal_items_size()); i < n; i++) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(1, this->_internal_items(i), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:payment.v1alpha1.PaymentList)
  return target;
}

size_t PaymentList::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:payment.v1alpha1.PaymentList)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];
  total_size += 1UL * this->_internal_items_size();
  for (const auto& msg : this->items_) {
    total_size +=
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(msg);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData PaymentList::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    PaymentList::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*PaymentList::GetClassData() const { return &_class_data_; }

void PaymentList::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<PaymentList *>(to)->MergeFrom(
      static_cast<const PaymentList &>(from));
}


void PaymentList::MergeFrom(const PaymentList& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:payment.v1alpha1.PaymentList)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  items_.MergeFrom(from.items_);
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void PaymentList::CopyFrom(const PaymentList& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:payment.v1alpha1.PaymentList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool PaymentList::IsInitialized() const {
  return true;
}

void PaymentList::InternalSwap(PaymentList* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  items_.InternalSwap(&other->items_);
}

::PROTOBUF_NAMESPACE_ID::Metadata PaymentList::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_getter, &descriptor_table_payment_2fv1alpha1_2fpayment_2eproto_once,
      file_level_metadata_payment_2fv1alpha1_2fpayment_2eproto[1]);
}

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1alpha1
}  // namespace payment
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::payment::v1alpha1::Payment* Arena::CreateMaybeMessage< ::payment::v1alpha1::Payment >(Arena* arena) {
  return Arena::CreateMessageInternal< ::payment::v1alpha1::Payment >(arena);
}
template<> PROTOBUF_NOINLINE ::payment::v1alpha1::PaymentList* Arena::CreateMaybeMessage< ::payment::v1alpha1::PaymentList >(Arena* arena) {
  return Arena::CreateMessageInternal< ::payment::v1alpha1::PaymentList >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>