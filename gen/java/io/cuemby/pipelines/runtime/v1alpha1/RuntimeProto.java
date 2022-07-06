// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public final class RuntimeProto {
  private RuntimeProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_RuntimeList_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n(pipelines/runtime/v1alpha1/runtime.pro" +
      "to\022\032pipelines.runtime.v1alpha1\"\314\t\n\007Runti" +
      "me\022\016\n\002id\030\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\tR\004name\022\034" +
      "\n\tnamespace\030\003 \001(\tR\tnamespace\022#\n\rinstance" +
      "_type\030\004 \001(\tR\014instanceType\022\'\n\017organizatio" +
      "n_id\030\005 \001(\rR\016organizationId\022\035\n\nproject_id" +
      "\030\006 \001(\rR\tprojectId\022%\n\016application_id\030\007 \001(" +
      "\tR\rapplicationId\022!\n\014workspace_id\030\010 \001(\tR\013" +
      "workspaceId\022%\n\016environment_id\030\t \001(\tR\renv" +
      "ironmentId\022\026\n\006scaler\030\n \001(\tR\006scaler\022\035\n\npo" +
      "d_status\030\013 \001(\tR\tpodStatus\022$\n\016pod_status_" +
      "msg\030\014 \001(\tR\014podStatusMsg\022V\n\013integration\030\r" +
      " \003(\01324.pipelines.runtime.v1alpha1.Runtim" +
      "e.IntegrationEntryR\013integration\022r\n\025envir" +
      "onment_variables\030\016 \003(\0132=.pipelines.runti" +
      "me.v1alpha1.Runtime.EnvironmentVariables" +
      "EntryR\024environmentVariables\022M\n\010commands\030" +
      "\017 \003(\01321.pipelines.runtime.v1alpha1.Runti" +
      "me.CommandsEntryR\010commands\022J\n\007secrets\030\020 " +
      "\003(\01320.pipelines.runtime.v1alpha1.Runtime" +
      ".SecretsEntryR\007secrets\022Q\n\nextra_args\030\021 \003" +
      "(\01322.pipelines.runtime.v1alpha1.Runtime." +
      "ExtraArgsEntryR\textraArgs\022J\n\014traffic_typ" +
      "e\030\022 \001(\0162\'.pipelines.runtime.v1alpha1.Tra" +
      "fficTypeR\013trafficType\032>\n\020IntegrationEntr" +
      "y\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005valu" +
      "e:\0028\001\032G\n\031EnvironmentVariablesEntry\022\020\n\003ke" +
      "y\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032;" +
      "\n\rCommandsEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005val" +
      "ue\030\002 \001(\tR\005value:\0028\001\032:\n\014SecretsEntry\022\020\n\003k" +
      "ey\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032" +
      "<\n\016ExtraArgsEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005v" +
      "alue\030\002 \001(\tR\005value:\0028\001\"H\n\013RuntimeList\0229\n\005" +
      "items\030\001 \003(\0132#.pipelines.runtime.v1alpha1" +
      ".RuntimeR\005items*a\n\013TrafficType\022\034\n\030TRAFFI" +
      "C_TYPE_UNSPECIFIED\020\000\022\031\n\025TRAFFIC_TYPE_EXT" +
      "ERNAL\020\001\022\031\n\025TRAFFIC_TYPE_INTERNAL\020\002B\255\001\n$i" +
      "o.cuemby.pipelines.runtime.v1alpha1B\014Run" +
      "timeProtoP\001Z5github.com/cuemby/ccp-runti" +
      "me-service/runtimev1alpha1\242\002\003PPX\252\002\032Pipel" +
      "ines.Runtime.V1Alpha1\312\002\032Pipelines\\Runtim" +
      "e\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_pipelines_runtime_v1alpha1_Runtime_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor,
        new java.lang.String[] { "Id", "Name", "Namespace", "InstanceType", "OrganizationId", "ProjectId", "ApplicationId", "WorkspaceId", "EnvironmentId", "Scaler", "PodStatus", "PodStatusMsg", "Integration", "EnvironmentVariables", "Commands", "Secrets", "ExtraArgs", "TrafficType", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(0);
    internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_IntegrationEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(1);
    internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_EnvironmentVariablesEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(2);
    internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_CommandsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(3);
    internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_SecretsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(4);
    internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_ExtraArgsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor,
        new java.lang.String[] { "Items", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
