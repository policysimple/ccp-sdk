// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault_api.proto

package io.cuemby.vault.v1alpha1;

public final class VaultAPIProto {
  private VaultAPIProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_CreateSecretRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_CreateSecretRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_CreateSecretResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_CreateSecretResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_UpdateSecretRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_UpdateSecretRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_UpdateSecretResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_UpdateSecretResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_DeleteSecretRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_DeleteSecretRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_DeleteSecretResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_DeleteSecretResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_GetSecretRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_GetSecretRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_GetSecretResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_GetSecretResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_DeleteOrganizationRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_DeleteOrganizationRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_DeleteOrganizationResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_DeleteOrganizationResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_SaveTokenIntegrationsRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_SaveTokenIntegrationsRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_SaveTokenIntegrationsResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_SaveTokenIntegrationsResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_GetTokenIntegrationsRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_GetTokenIntegrationsRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_GetTokenIntegrationsResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_GetTokenIntegrationsResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\036vault/v1alpha1/vault_api.proto\022\016vault." +
      "v1alpha1\032\032vault/v1alpha1/vault.proto\"E\n\023" +
      "CreateSecretRequest\022.\n\006secret\030\001 \001(\0132\026.va" +
      "ult.v1alpha1.SecretR\006secret\">\n\024CreateSec" +
      "retResponse\022\024\n\005error\030\001 \001(\tR\005error\022\020\n\003msg" +
      "\030\002 \001(\tR\003msg\"\322\001\n\023UpdateSecretRequest\022\'\n\017o" +
      "rganization_id\030\001 \001(\rR\016organizationId\022\035\n\n" +
      "project_id\030\002 \001(\tR\tprojectId\022\034\n\tnamespace" +
      "\030\003 \001(\tR\tnamespace\022%\n\016application_id\030\004 \001(" +
      "\tR\rapplicationId\022.\n\006secret\030\005 \001(\0132\026.vault" +
      ".v1alpha1.SecretR\006secret\">\n\024UpdateSecret" +
      "Response\022\020\n\003msg\030\001 \001(\tR\003msg\022\024\n\005error\030\002 \001(" +
      "\tR\005error\"\266\001\n\023DeleteSecretRequest\022\'\n\017orga" +
      "nization_id\030\001 \001(\rR\016organizationId\022\035\n\npro" +
      "ject_id\030\002 \001(\rR\tprojectId\022%\n\016application_" +
      "id\030\003 \001(\tR\rapplicationId\022\034\n\tnamespace\030\004 \001" +
      "(\tR\tnamespace\022\022\n\004name\030\005 \001(\tR\004name\">\n\024Del" +
      "eteSecretResponse\022\020\n\003msg\030\001 \001(\tR\003msg\022\024\n\005e" +
      "rror\030\002 \001(\tR\005error\"\263\001\n\020GetSecretRequest\022\'" +
      "\n\017organization_id\030\001 \001(\rR\016organizationId\022" +
      "\035\n\nproject_id\030\002 \001(\rR\tprojectId\022%\n\016applic" +
      "ation_id\030\003 \001(\tR\rapplicationId\022\034\n\tnamespa" +
      "ce\030\004 \001(\tR\tnamespace\022\022\n\004name\030\005 \001(\tR\004name\"" +
      "Y\n\021GetSecretResponse\022.\n\006secret\030\001 \001(\0132\026.v" +
      "ault.v1alpha1.SecretR\006secret\022\024\n\005error\030\002 " +
      "\001(\tR\005error\"D\n\031DeleteOrganizationRequest\022" +
      "\'\n\017organization_id\030\001 \001(\rR\016organizationId" +
      "\"D\n\032DeleteOrganizationResponse\022\020\n\003msg\030\001 " +
      "\001(\tR\003msg\022\024\n\005error\030\002 \001(\tR\005error\"[\n\034SaveTo" +
      "kenIntegrationsRequest\022%\n\016integration_id" +
      "\030\001 \001(\tR\rintegrationId\022\024\n\005token\030\002 \001(\tR\005to" +
      "ken\"G\n\035SaveTokenIntegrationsResponse\022\020\n\003" +
      "msg\030\001 \001(\tR\003msg\022\024\n\005error\030\002 \001(\tR\005error\"D\n\033" +
      "GetTokenIntegrationsRequest\022%\n\016integrati" +
      "on_id\030\001 \001(\tR\rintegrationId\"J\n\034GetTokenIn" +
      "tegrationsResponse\022\024\n\005token\030\001 \001(\tR\005token" +
      "\022\024\n\005error\030\002 \001(\tR\005error2\330\005\n\017VaultAPIServi" +
      "ce\022[\n\014CreateSecret\022#.vault.v1alpha1.Crea" +
      "teSecretRequest\032$.vault.v1alpha1.CreateS" +
      "ecretResponse\"\000\022[\n\014UpdateSecret\022#.vault." +
      "v1alpha1.UpdateSecretRequest\032$.vault.v1a" +
      "lpha1.UpdateSecretResponse\"\000\022[\n\014DeleteSe" +
      "cret\022#.vault.v1alpha1.DeleteSecretReques" +
      "t\032$.vault.v1alpha1.DeleteSecretResponse\"" +
      "\000\022R\n\tGetSecret\022 .vault.v1alpha1.GetSecre" +
      "tRequest\032!.vault.v1alpha1.GetSecretRespo" +
      "nse\"\000\022m\n\022DeleteOrganization\022).vault.v1al" +
      "pha1.DeleteOrganizationRequest\032*.vault.v" +
      "1alpha1.DeleteOrganizationResponse\"\000\022v\n\025" +
      "SaveTokenIntegrations\022,.vault.v1alpha1.S" +
      "aveTokenIntegrationsRequest\032-.vault.v1al" +
      "pha1.SaveTokenIntegrationsResponse\"\000\022s\n\024" +
      "GetTokenIntegrations\022+.vault.v1alpha1.Ge" +
      "tTokenIntegrationsRequest\032,.vault.v1alph" +
      "a1.GetTokenIntegrationsResponse\"\000B\206\001\n\030io" +
      ".cuemby.vault.v1alpha1B\rVaultAPIProtoP\001Z" +
      "1github.com/cuemby/ccp-vault-service/vau" +
      "ltv1alpha1\242\002\003PPX\252\002\016Vault.V1Alpha1\312\002\016Vaul" +
      "t\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.vault.v1alpha1.VaultProto.getDescriptor(),
        });
    internal_static_vault_v1alpha1_CreateSecretRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_vault_v1alpha1_CreateSecretRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_CreateSecretRequest_descriptor,
        new java.lang.String[] { "Secret", });
    internal_static_vault_v1alpha1_CreateSecretResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_vault_v1alpha1_CreateSecretResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_CreateSecretResponse_descriptor,
        new java.lang.String[] { "Error", "Msg", });
    internal_static_vault_v1alpha1_UpdateSecretRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_vault_v1alpha1_UpdateSecretRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_UpdateSecretRequest_descriptor,
        new java.lang.String[] { "OrganizationId", "ProjectId", "Namespace", "ApplicationId", "Secret", });
    internal_static_vault_v1alpha1_UpdateSecretResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_vault_v1alpha1_UpdateSecretResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_UpdateSecretResponse_descriptor,
        new java.lang.String[] { "Msg", "Error", });
    internal_static_vault_v1alpha1_DeleteSecretRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_vault_v1alpha1_DeleteSecretRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_DeleteSecretRequest_descriptor,
        new java.lang.String[] { "OrganizationId", "ProjectId", "ApplicationId", "Namespace", "Name", });
    internal_static_vault_v1alpha1_DeleteSecretResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_vault_v1alpha1_DeleteSecretResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_DeleteSecretResponse_descriptor,
        new java.lang.String[] { "Msg", "Error", });
    internal_static_vault_v1alpha1_GetSecretRequest_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_vault_v1alpha1_GetSecretRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_GetSecretRequest_descriptor,
        new java.lang.String[] { "OrganizationId", "ProjectId", "ApplicationId", "Namespace", "Name", });
    internal_static_vault_v1alpha1_GetSecretResponse_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_vault_v1alpha1_GetSecretResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_GetSecretResponse_descriptor,
        new java.lang.String[] { "Secret", "Error", });
    internal_static_vault_v1alpha1_DeleteOrganizationRequest_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_vault_v1alpha1_DeleteOrganizationRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_DeleteOrganizationRequest_descriptor,
        new java.lang.String[] { "OrganizationId", });
    internal_static_vault_v1alpha1_DeleteOrganizationResponse_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_vault_v1alpha1_DeleteOrganizationResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_DeleteOrganizationResponse_descriptor,
        new java.lang.String[] { "Msg", "Error", });
    internal_static_vault_v1alpha1_SaveTokenIntegrationsRequest_descriptor =
      getDescriptor().getMessageTypes().get(10);
    internal_static_vault_v1alpha1_SaveTokenIntegrationsRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_SaveTokenIntegrationsRequest_descriptor,
        new java.lang.String[] { "IntegrationId", "Token", });
    internal_static_vault_v1alpha1_SaveTokenIntegrationsResponse_descriptor =
      getDescriptor().getMessageTypes().get(11);
    internal_static_vault_v1alpha1_SaveTokenIntegrationsResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_SaveTokenIntegrationsResponse_descriptor,
        new java.lang.String[] { "Msg", "Error", });
    internal_static_vault_v1alpha1_GetTokenIntegrationsRequest_descriptor =
      getDescriptor().getMessageTypes().get(12);
    internal_static_vault_v1alpha1_GetTokenIntegrationsRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_GetTokenIntegrationsRequest_descriptor,
        new java.lang.String[] { "IntegrationId", });
    internal_static_vault_v1alpha1_GetTokenIntegrationsResponse_descriptor =
      getDescriptor().getMessageTypes().get(13);
    internal_static_vault_v1alpha1_GetTokenIntegrationsResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_GetTokenIntegrationsResponse_descriptor,
        new java.lang.String[] { "Token", "Error", });
    io.cuemby.vault.v1alpha1.VaultProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
