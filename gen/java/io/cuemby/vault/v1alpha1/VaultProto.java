// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault.proto

package io.cuemby.vault.v1alpha1;

public final class VaultProto {
  private VaultProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_Metadata_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_Metadata_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_SecretData_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_SecretData_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_SecretData_DataEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_SecretData_DataEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_SecretWarnings_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_SecretWarnings_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_Secret_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_Secret_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_vault_v1alpha1_TokenIntegration_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_vault_v1alpha1_TokenIntegration_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\032vault/v1alpha1/vault.proto\022\016vault.v1al" +
      "pha1\"\305\001\n\010Metadata\022\020\n\003key\030\001 \001(\tR\003key\022!\n\014c" +
      "reated_time\030\002 \001(\tR\013createdTime\022\'\n\017custom" +
      "_metadata\030\003 \001(\tR\016customMetadata\022#\n\rdelet" +
      "ion_time\030\004 \001(\tR\014deletionTime\022\034\n\tdestroye" +
      "d\030\005 \001(\010R\tdestroyed\022\030\n\007version\030\006 \001(\005R\007ver" +
      "sion\"\177\n\nSecretData\0228\n\004data\030\001 \003(\0132$.vault" +
      ".v1alpha1.SecretData.DataEntryR\004data\0327\n\t" +
      "DataEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001" +
      "(\tR\005value:\0028\001\",\n\016SecretWarnings\022\032\n\010warni" +
      "ngs\030\001 \003(\tR\010warnings\"\313\002\n\006Secret\022\'\n\017organi" +
      "zation_id\030\001 \001(\rR\016organizationId\022\035\n\nproje" +
      "ct_id\030\002 \001(\rR\tprojectId\022%\n\016application_id" +
      "\030\003 \001(\tR\rapplicationId\022\034\n\tnamespace\030\004 \001(\t" +
      "R\tnamespace\022\022\n\004name\030\005 \001(\tR\004name\0224\n\010metad" +
      "ata\030\006 \001(\0132\030.vault.v1alpha1.MetadataR\010met" +
      "adata\022.\n\004data\030\007 \001(\0132\032.vault.v1alpha1.Sec" +
      "retDataR\004data\022:\n\010warnings\030\010 \001(\0132\036.vault." +
      "v1alpha1.SecretWarningsR\010warnings\"O\n\020Tok" +
      "enIntegration\022%\n\016integration_id\030\001 \001(\tR\ri" +
      "ntegrationId\022\024\n\005token\030\002 \001(\tR\005tokenB\203\001\n\030i" +
      "o.cuemby.vault.v1alpha1B\nVaultProtoP\001Z1g" +
      "ithub.com/cuemby/ccp-vault-service/vault" +
      "v1alpha1\242\002\003PPX\252\002\016Vault.V1Alpha1\312\002\016Vault\\" +
      "V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_vault_v1alpha1_Metadata_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_vault_v1alpha1_Metadata_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_Metadata_descriptor,
        new java.lang.String[] { "Key", "CreatedTime", "CustomMetadata", "DeletionTime", "Destroyed", "Version", });
    internal_static_vault_v1alpha1_SecretData_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_vault_v1alpha1_SecretData_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_SecretData_descriptor,
        new java.lang.String[] { "Data", });
    internal_static_vault_v1alpha1_SecretData_DataEntry_descriptor =
      internal_static_vault_v1alpha1_SecretData_descriptor.getNestedTypes().get(0);
    internal_static_vault_v1alpha1_SecretData_DataEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_SecretData_DataEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_vault_v1alpha1_SecretWarnings_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_vault_v1alpha1_SecretWarnings_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_SecretWarnings_descriptor,
        new java.lang.String[] { "Warnings", });
    internal_static_vault_v1alpha1_Secret_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_vault_v1alpha1_Secret_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_Secret_descriptor,
        new java.lang.String[] { "OrganizationId", "ProjectId", "ApplicationId", "Namespace", "Name", "Metadata", "Data", "Warnings", });
    internal_static_vault_v1alpha1_TokenIntegration_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_vault_v1alpha1_TokenIntegration_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_vault_v1alpha1_TokenIntegration_descriptor,
        new java.lang.String[] { "IntegrationId", "Token", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
