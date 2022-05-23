// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/quotas/v1alpha1/registry_quotas_api.proto

package io.cuemby.artifacts.quotas.v1alpha1;

public final class RegistryQuotasProtoAPI {
  private RegistryQuotasProtoAPI() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n3artifacts/quotas/v1alpha1/registry_quo" +
      "tas_api.proto\022\031artifacts.quotas.v1alpha1" +
      "\032/artifacts/quotas/v1alpha1/registry_quo" +
      "tas.proto\"\217\001\n!ListQuotaArtifactRegistryR" +
      "esponse\022R\n\017quotas_registry\030\001 \003(\0132).artif" +
      "acts.quotas.v1alpha1.QuotasRegistryR\016quo" +
      "tasRegistry\022\026\n\006status\030\002 \001(\tR\006status\"n\n\032U" +
      "pdateQuotaRegistryRequest\022P\n\016quota_regis" +
      "try\030\001 \001(\0132).artifacts.quotas.v1alpha1.Qu" +
      "otasRegistryR\rquotaRegistry\"\207\001\n\033UpdateQu" +
      "otaRegistryResponse\022P\n\016quota_registry\030\001 " +
      "\001(\0132).artifacts.quotas.v1alpha1.QuotasRe" +
      "gistryR\rquotaRegistry\022\026\n\006status\030\002 \001(\tR\006s" +
      "tatus\"\212\002\n\031ListQuotasRegistryRequest\022\'\n\017o" +
      "rganization_id\030\001 \001(\rR\016organizationId\022\035\n\n" +
      "project_id\030\002 \001(\rR\tprojectId\022\'\n\017repositor" +
      "y_name\030\003 \001(\tR\016repositoryName\022\024\n\005query\030\004 " +
      "\001(\tR\005query\022\022\n\004page\030\005 \001(\rR\004page\022\033\n\tpage_s" +
      "ize\030\006 \001(\rR\010pageSize\022\022\n\004sort\030\007 \001(\tR\004sort\022" +
      "!\n\014reference_id\030\010 \001(\tR\013referenceId\"\256\004\n L" +
      "istQuotaArtifactRegistryRequest\022\016\n\002id\030\001 " +
      "\001(\tR\002id\022\'\n\017organization_id\030\002 \001(\rR\016organi" +
      "zationId\022\035\n\nproject_id\030\003 \001(\rR\tprojectId\022" +
      "\'\n\017repository_name\030\004 \001(\tR\016repositoryName" +
      "\022\024\n\005query\030\005 \001(\tR\005query\022\022\n\004page\030\006 \001(\rR\004pa" +
      "ge\022\033\n\tpage_size\030\007 \001(\rR\010pageSize\022\022\n\004sort\030" +
      "\010 \001(\tR\004sort\022!\n\014reference_id\030\t \001(\tR\013refer" +
      "enceId\022!\n\014project_name\030\n \001(\tR\013projectNam" +
      "e\022\031\n\010with_tag\030\013 \001(\010R\007withTag\022\035\n\nwith_lab" +
      "el\030\014 \001(\010R\twithLabel\022,\n\022with_scan_overvie" +
      "w\030\r \001(\010R\020withScanOverview\022%\n\016with_signat" +
      "ure\030\016 \001(\010R\rwithSignature\0222\n\025with_immutab" +
      "le_status\030\017 \001(\010R\023withImmutableStatus\022%\n\016" +
      "with_accessory\030\020 \001(\010R\rwithAccessory\"\210\001\n\032" +
      "ListQuotasRegistryResponse\022R\n\017quotas_reg" +
      "istry\030\001 \003(\0132).artifacts.quotas.v1alpha1." +
      "QuotasRegistryR\016quotasRegistry\022\026\n\006status" +
      "\030\002 \001(\tR\006status2\276\003\n\030RegistryQuotasAPIServ" +
      "ice\022\201\001\n\022ListQuotasRegistry\0224.artifacts.q" +
      "uotas.v1alpha1.ListQuotasRegistryRequest" +
      "\0325.artifacts.quotas.v1alpha1.ListQuotasR" +
      "egistryResponse\022\204\001\n\023UpdateQuotaRegistry\022" +
      "5.artifacts.quotas.v1alpha1.UpdateQuotaR" +
      "egistryRequest\0326.artifacts.quotas.v1alph" +
      "a1.UpdateQuotaRegistryResponse\022\226\001\n\031ListQ" +
      "uotaArtifactRegistry\022;.artifacts.quotas." +
      "v1alpha1.ListQuotaArtifactRegistryReques" +
      "t\032<.artifacts.quotas.v1alpha1.ListQuotaA" +
      "rtifactRegistryResponseB\271\001\n#io.cuemby.ar" +
      "tifacts.quotas.v1alpha1B\026RegistryQuotasP" +
      "rotoAPIP\001Z:github.com/cuemby/ccp-sdk/gen" +
      "/go/artifacts/quotas/v1alpha1\242\002\003PPX\252\002\031Ar" +
      "tifacts.Quotas.V1Alpha1\312\002\031Artifacts\\Quot" +
      "as\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProto.getDescriptor(),
        });
    internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryResponse_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryResponse_descriptor,
        new java.lang.String[] { "QuotasRegistry", "Status", });
    internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest_descriptor,
        new java.lang.String[] { "QuotaRegistry", });
    internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_descriptor,
        new java.lang.String[] { "QuotaRegistry", "Status", });
    internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest_descriptor,
        new java.lang.String[] { "OrganizationId", "ProjectId", "RepositoryName", "Query", "Page", "PageSize", "Sort", "ReferenceId", });
    internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_quotas_v1alpha1_ListQuotaArtifactRegistryRequest_descriptor,
        new java.lang.String[] { "Id", "OrganizationId", "ProjectId", "RepositoryName", "Query", "Page", "PageSize", "Sort", "ReferenceId", "ProjectName", "WithTag", "WithLabel", "WithScanOverview", "WithSignature", "WithImmutableStatus", "WithAccessory", });
    internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse_descriptor,
        new java.lang.String[] { "QuotasRegistry", "Status", });
    io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}