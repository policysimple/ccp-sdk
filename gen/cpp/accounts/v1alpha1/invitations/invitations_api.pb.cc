// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: accounts/v1alpha1/invitations/invitations_api.proto

#include "accounts/v1alpha1/invitations/invitations_api.pb.h"

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
namespace accounts {
namespace v1alpha1 {
namespace invitations {
namespace v1 {
}  // namespace v1
}  // namespace invitations
}  // namespace v1alpha1
}  // namespace accounts
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto = nullptr;
const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto::offsets[1] = {};
static constexpr ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema* schemas = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::Message* const* file_default_instances = nullptr;

const char descriptor_table_protodef_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n3accounts/v1alpha1/invitations/invitati"
  "ons_api.proto\022 accounts.v1alpha1.invitat"
  "ions.v1\032/accounts/v1alpha1/invitations/i"
  "nvitations.proto2\347\005\n\021InvitationService\022\217"
  "\001\n\022SendInvitationUser\022;.accounts.v1alpha"
  "1.invitations.v1.SendInvitationUserReque"
  "st\032<.accounts.v1alpha1.invitations.v1.Se"
  "ndInvitationUserResponse\022\214\001\n\021GetInvitati"
  "onUser\022:.accounts.v1alpha1.invitations.v"
  "1.GetInvitationUserRequest\032;.accounts.v1"
  "alpha1.invitations.v1.GetInvitationUserR"
  "esponse\022\222\001\n\023AgreeInvitationUser\022<.accoun"
  "ts.v1alpha1.invitations.v1.AgreeInvitati"
  "onUserRequest\032=.accounts.v1alpha1.invita"
  "tions.v1.AgreeInvitationUserResponse\022\217\001\n"
  "\022ListInvitationSend\022;.accounts.v1alpha1."
  "invitations.v1.ListInvitationSendRequest"
  "\032<.accounts.v1alpha1.invitations.v1.List"
  "InvitationSendResponse\022\211\001\n\020DeleteInvitat"
  "ion\0229.accounts.v1alpha1.invitations.v1.D"
  "eleteInvitationRequest\032:.accounts.v1alph"
  "a1.invitations.v1.DeleteInvitationRespon"
  "seB@Z>github.com/cuemby/ccp-sdk/gen/go/a"
  "ccounts/v1alpha1/invitationsb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto_deps[1] = {
  &::descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto = {
  false, false, 956, descriptor_table_protodef_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto, "accounts/v1alpha1/invitations/invitations_api.proto", 
  &descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto_once, descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto_deps, 1, 0,
  schemas, file_default_instances, TableStruct_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto::offsets,
  nullptr, file_level_enum_descriptors_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto, file_level_service_descriptors_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto_getter() {
  return &descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto(&descriptor_table_accounts_2fv1alpha1_2finvitations_2finvitations_5fapi_2eproto);
namespace accounts {
namespace v1alpha1 {
namespace invitations {
namespace v1 {

// @@protoc_insertion_point(namespace_scope)
}  // namespace v1
}  // namespace invitations
}  // namespace v1alpha1
}  // namespace accounts
PROTOBUF_NAMESPACE_OPEN
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>