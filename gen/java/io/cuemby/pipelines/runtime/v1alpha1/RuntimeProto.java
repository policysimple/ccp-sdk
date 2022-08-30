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
    internal_static_pipelines_runtime_v1alpha1_Runtime_AutoscalingEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Runtime_AutoscalingEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_RuntimeList_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_IntanceType_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_IntanceType_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_ResourcesRules_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_ResourcesRules_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Limit_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Limit_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_Request_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_Request_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n(pipelines/runtime/v1alpha1/runtime.pro" +
      "to\022\032pipelines.runtime.v1alpha1\"\361\n\n\007Runti" +
<<<<<<< HEAD
      "me\022\016\n\002id\030\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\tR\004name\022N" +
      "\n\016instance_types\030\004 \003(\0132\'.pipelines.runti" +
      "me.v1alpha1.IntanceTypeR\rinstanceTypes\022\'" +
      "\n\017organization_id\030\005 \001(\rR\016organizationId\022" +
      "\035\n\nproject_id\030\006 \001(\rR\tprojectId\022%\n\016applic" +
      "ation_id\030\007 \001(\tR\rapplicationId\022!\n\014workspa" +
      "ce_id\030\010 \001(\tR\013workspaceId\022%\n\016environment_" +
      "id\030\t \001(\tR\renvironmentId\022\026\n\006scaler\030\n \001(\tR" +
      "\006scaler\022\035\n\npod_status\030\013 \001(\tR\tpodStatus\022$" +
      "\n\016pod_status_msg\030\014 \001(\tR\014podStatusMsg\022V\n\013" +
      "integration\030\r \003(\01324.pipelines.runtime.v1" +
      "alpha1.Runtime.IntegrationEntryR\013integra" +
      "tion\022r\n\025environment_variables\030\016 \003(\0132=.pi" +
      "pelines.runtime.v1alpha1.Runtime.Environ" +
      "mentVariablesEntryR\024environmentVariables" +
      "\022M\n\010commands\030\017 \003(\01321.pipelines.runtime.v" +
      "1alpha1.Runtime.CommandsEntryR\010commands\022" +
      "J\n\007secrets\030\020 \003(\01320.pipelines.runtime.v1a" +
      "lpha1.Runtime.SecretsEntryR\007secrets\022Q\n\ne" +
      "xtra_args\030\021 \003(\01322.pipelines.runtime.v1al" +
      "pha1.Runtime.ExtraArgsEntryR\textraArgs\022V" +
      "\n\013autoscaling\030\022 \003(\01324.pipelines.runtime." +
      "v1alpha1.Runtime.AutoscalingEntryR\013autos" +
      "caling\022J\n\014traffic_type\030\023 \001(\0162\'.pipelines" +
      ".runtime.v1alpha1.TrafficTypeR\013trafficTy" +
      "pe\032>\n\020IntegrationEntry\022\020\n\003key\030\001 \001(\tR\003key" +
=======
      "me\022\016\n\002id\030\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\tR\004name\022#" +
      "\n\rinstance_type\030\004 \001(\tR\014instanceType\022\'\n\017o" +
      "rganization_id\030\005 \001(\rR\016organizationId\022\035\n\n" +
      "project_id\030\006 \001(\rR\tprojectId\022%\n\016applicati" +
      "on_id\030\007 \001(\tR\rapplicationId\022!\n\014workspace_" +
      "id\030\010 \001(\tR\013workspaceId\022%\n\016environment_id\030" +
      "\t \001(\tR\renvironmentId\022\026\n\006scaler\030\n \001(\tR\006sc" +
      "aler\022\035\n\npod_status\030\013 \001(\tR\tpodStatus\022$\n\016p" +
      "od_status_msg\030\014 \001(\tR\014podStatusMsg\022V\n\013int" +
      "egration\030\r \003(\01324.pipelines.runtime.v1alp" +
      "ha1.Runtime.IntegrationEntryR\013integratio" +
      "n\022r\n\025environment_variables\030\016 \003(\0132=.pipel" +
      "ines.runtime.v1alpha1.Runtime.Environmen" +
      "tVariablesEntryR\024environmentVariables\022M\n" +
      "\010commands\030\017 \003(\01321.pipelines.runtime.v1al" +
      "pha1.Runtime.CommandsEntryR\010commands\022J\n\007" +
      "secrets\030\020 \003(\01320.pipelines.runtime.v1alph" +
      "a1.Runtime.SecretsEntryR\007secrets\022Q\n\nextr" +
      "a_args\030\021 \003(\01322.pipelines.runtime.v1alpha" +
      "1.Runtime.ExtraArgsEntryR\textraArgs\022V\n\013a" +
      "utoscaling\030\022 \003(\01324.pipelines.runtime.v1a" +
      "lpha1.Runtime.AutoscalingEntryR\013autoscal" +
      "ing\022J\n\014traffic_type\030\023 \001(\0162\'.pipelines.ru" +
      "ntime.v1alpha1.TrafficTypeR\013trafficType\022" +
      ")\n\020response_message\030\024 \001(\tR\017responseMessa" +
      "ge\032>\n\020IntegrationEntry\022\020\n\003key\030\001 \001(\tR\003key" +
>>>>>>> 7518a811da51875aea1ffa404f97847491731ed4
      "\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032G\n\031Environmen" +
      "tVariablesEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005val" +
      "ue\030\002 \001(\tR\005value:\0028\001\032;\n\rCommandsEntry\022\020\n\003" +
      "key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001" +
      "\032:\n\014SecretsEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005va" +
      "lue\030\002 \001(\tR\005value:\0028\001\032<\n\016ExtraArgsEntry\022\020" +
      "\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\002" +
      "8\001\032>\n\020AutoscalingEntry\022\020\n\003key\030\001 \001(\tR\003key" +
      "\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\"H\n\013RuntimeLis" +
      "t\0229\n\005items\030\001 \003(\0132#.pipelines.runtime.v1a" +
<<<<<<< HEAD
      "lpha1.RuntimeR\005items\"\206\001\n\013IntanceType\022\016\n\002" +
      "id\030\001 \001(\tR\002id\022\022\n\004name\030\002 \001(\tR\004name\022S\n\017reso" +
      "urces_rules\030\003 \003(\0132*.pipelines.runtime.v1" +
      "alpha1.ResourcesRulesR\016resourcesRules\"\210\001" +
      "\n\016ResourcesRules\0227\n\005limit\030\003 \003(\0132!.pipeli" +
      "nes.runtime.v1alpha1.LimitR\005limit\022=\n\007req" +
      "uest\030\004 \003(\0132#.pipelines.runtime.v1alpha1." +
      "RequestR\007request\"+\n\005Limit\022\020\n\003cpu\030\001 \001(\tR\003" +
      "cpu\022\020\n\003ram\030\002 \001(\tR\003ram\"-\n\007Request\022\020\n\003cpu\030" +
      "\001 \001(\tR\003cpu\022\020\n\003ram\030\002 \001(\tR\003ram*a\n\013TrafficT" +
      "ype\022\034\n\030TRAFFIC_TYPE_UNSPECIFIED\020\000\022\031\n\025TRA" +
      "FFIC_TYPE_EXTERNAL\020\001\022\031\n\025TRAFFIC_TYPE_INT" +
      "ERNAL\020\002B\255\001\n$io.cuemby.pipelines.runtime." +
      "v1alpha1B\014RuntimeProtoP\001Z5github.com/cue" +
      "mby/ccp-runtime-service/runtimev1alpha1\242" +
      "\002\003PPX\252\002\032Pipelines.Runtime.V1Alpha1\312\002\032Pip" +
      "elines\\Runtime\\V1Alpha1b\006proto3"
=======
      "lpha1.RuntimeR\005items*a\n\013TrafficType\022\034\n\030T" +
      "RAFFIC_TYPE_UNSPECIFIED\020\000\022\031\n\025TRAFFIC_TYP" +
      "E_EXTERNAL\020\001\022\031\n\025TRAFFIC_TYPE_INTERNAL\020\002B" +
      "\255\001\n$io.cuemby.pipelines.runtime.v1alpha1" +
      "B\014RuntimeProtoP\001Z5github.com/cuemby/ccp-" +
      "runtime-service/runtimev1alpha1\242\002\003PPX\252\002\032" +
      "Pipelines.Runtime.V1Alpha1\312\002\032Pipelines\\R" +
      "untime\\V1Alpha1b\006proto3"
>>>>>>> 7518a811da51875aea1ffa404f97847491731ed4
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
<<<<<<< HEAD
        new java.lang.String[] { "Id", "Name", "InstanceTypes", "OrganizationId", "ProjectId", "ApplicationId", "WorkspaceId", "EnvironmentId", "Scaler", "PodStatus", "PodStatusMsg", "Integration", "EnvironmentVariables", "Commands", "Secrets", "ExtraArgs", "Autoscaling", "TrafficType", });
=======
        new java.lang.String[] { "Id", "Name", "InstanceType", "OrganizationId", "ProjectId", "ApplicationId", "WorkspaceId", "EnvironmentId", "Scaler", "PodStatus", "PodStatusMsg", "Integration", "EnvironmentVariables", "Commands", "Secrets", "ExtraArgs", "Autoscaling", "TrafficType", "ResponseMessage", });
>>>>>>> 7518a811da51875aea1ffa404f97847491731ed4
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
    internal_static_pipelines_runtime_v1alpha1_Runtime_AutoscalingEntry_descriptor =
      internal_static_pipelines_runtime_v1alpha1_Runtime_descriptor.getNestedTypes().get(5);
    internal_static_pipelines_runtime_v1alpha1_Runtime_AutoscalingEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Runtime_AutoscalingEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_pipelines_runtime_v1alpha1_RuntimeList_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_RuntimeList_descriptor,
        new java.lang.String[] { "Items", });
    internal_static_pipelines_runtime_v1alpha1_IntanceType_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_pipelines_runtime_v1alpha1_IntanceType_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_IntanceType_descriptor,
        new java.lang.String[] { "Id", "Name", "ResourcesRules", });
    internal_static_pipelines_runtime_v1alpha1_ResourcesRules_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_pipelines_runtime_v1alpha1_ResourcesRules_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_ResourcesRules_descriptor,
        new java.lang.String[] { "Limit", "Request", });
    internal_static_pipelines_runtime_v1alpha1_Limit_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_pipelines_runtime_v1alpha1_Limit_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Limit_descriptor,
        new java.lang.String[] { "Cpu", "Ram", });
    internal_static_pipelines_runtime_v1alpha1_Request_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_pipelines_runtime_v1alpha1_Request_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_Request_descriptor,
        new java.lang.String[] { "Cpu", "Ram", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
