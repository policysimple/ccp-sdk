// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: blockchain/members/v1alpha1/member_api.proto

package io.cuemby.blockchain.members.v1alpha1;

public final class MembersInvitationProtoApi {
  private MembersInvitationProtoApi() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_blockchain_members_v1alpha1_CreateOrganizationResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_blockchain_members_v1alpha1_CreateOrganizationResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_blockchain_members_v1alpha1_CreateInvitationResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_blockchain_members_v1alpha1_CreateInvitationResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_blockchain_members_v1alpha1_CreateOrganizationRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_blockchain_members_v1alpha1_CreateOrganizationRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_blockchain_members_v1alpha1_CreateInvitationRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_blockchain_members_v1alpha1_CreateInvitationRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n,blockchain/members/v1alpha1/member_api" +
      ".proto\022\033blockchain.members.v1alpha1\032(blo" +
      "ckchain/members/v1alpha1/member.proto\"\224\001" +
      "\n\032CreateOrganizationResponse\022^\n\025register" +
      "_organization\030\001 \001(\0132).blockchain.members" +
      ".v1alpha1.OrganizationR\024registerOrganiza" +
      "tion\022\026\n\006status\030\002 \001(\tR\006status\"4\n\030CreateIn" +
      "vitationResponse\022\030\n\007message\030\001 \001(\tR\007messa" +
      "ge\"\255\001\n\031CreateOrganizationRequest\022+\n\022user" +
      "_id_new_member\030\001 \001(\rR\017userIdNewMember\022\035\n" +
      "\norg_domain\030\002 \001(\tR\torgDomain\022%\n\016admin_pa" +
      "ssword\030\003 \001(\tR\radminPassword\022\035\n\nadmin_use" +
      "r\030\004 \001(\tR\tadminUser\"b\n\027CreateInvitationRe" +
      "quest\022G\n\ninvitation\030\001 \001(\0132\'.blockchain.m" +
      "embers.v1alpha1.InvitationR\ninvitation2\251" +
      "\002\n\036BlockchainInvitationAPIService\022\205\001\n\022Cr" +
      "eateOrganization\0226.blockchain.members.v1" +
      "alpha1.CreateOrganizationRequest\0327.block" +
      "chain.members.v1alpha1.CreateOrganizatio" +
      "nResponse\022\177\n\020CreateInvitation\0224.blockcha" +
      "in.members.v1alpha1.CreateInvitationRequ" +
      "est\0325.blockchain.members.v1alpha1.Create" +
      "InvitationResponseB\303\001\n%io.cuemby.blockch" +
      "ain.members.v1alpha1B\031MembersInvitationP" +
      "rotoApiP\001Z<github.com/cuemby/ccp-sdk/gen" +
      "/go/blockchain/members/v1alpha1\242\002\003PPX\252\002\032" +
      "Blockchain.Member.V1Alpha1\312\002\033Blockchain\\" +
      "Members\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.blockchain.members.v1alpha1.MembersInvitationProto.getDescriptor(),
        });
    internal_static_blockchain_members_v1alpha1_CreateOrganizationResponse_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_blockchain_members_v1alpha1_CreateOrganizationResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_blockchain_members_v1alpha1_CreateOrganizationResponse_descriptor,
        new java.lang.String[] { "RegisterOrganization", "Status", });
    internal_static_blockchain_members_v1alpha1_CreateInvitationResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_blockchain_members_v1alpha1_CreateInvitationResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_blockchain_members_v1alpha1_CreateInvitationResponse_descriptor,
        new java.lang.String[] { "Message", });
    internal_static_blockchain_members_v1alpha1_CreateOrganizationRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_blockchain_members_v1alpha1_CreateOrganizationRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_blockchain_members_v1alpha1_CreateOrganizationRequest_descriptor,
        new java.lang.String[] { "UserIdNewMember", "OrgDomain", "AdminPassword", "AdminUser", });
    internal_static_blockchain_members_v1alpha1_CreateInvitationRequest_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_blockchain_members_v1alpha1_CreateInvitationRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_blockchain_members_v1alpha1_CreateInvitationRequest_descriptor,
        new java.lang.String[] { "Invitation", });
    io.cuemby.blockchain.members.v1alpha1.MembersInvitationProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
