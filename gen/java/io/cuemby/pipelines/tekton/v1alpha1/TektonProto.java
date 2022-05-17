// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public final class TektonProto {
  private TektonProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Params_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Params_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_TaskParams_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_TaskParams_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Workspaces_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Workspaces_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Task_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Task_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Pipeline_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Pipeline_IntegrationEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Pipeline_IntegrationEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Pipeline_EnvironmentVariablesEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Pipeline_EnvironmentVariablesEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Pipeline_CommandsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Pipeline_CommandsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Pipeline_SecretsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Pipeline_SecretsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_tekton_v1alpha1_Pipeline_LabelsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_tekton_v1alpha1_Pipeline_LabelsEntry_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n&pipelines/tekton/v1alpha1/tekton.proto" +
      "\022\031pipelines.tekton.v1alpha1\"\177\n\006Params\022\022\n" +
      "\004name\030\001 \001(\tR\004name\022!\n\014value_string\030\002 \001(\tR" +
      "\013valueString\022\037\n\013value_array\030\003 \003(\tR\nvalue" +
      "Array\022\035\n\nvalue_type\030\004 \001(\tR\tvalueType\"\242\001\n" +
      "\nTaskParams\022\035\n\nparam_name\030\001 \001(\tR\tparamNa" +
      "me\022(\n\020param_value_type\030\002 \001(\tR\016paramValue" +
      "Type\022\037\n\013param_value\030\003 \001(\tR\nparamValue\022*\n" +
      "\021param_value_array\030\004 \003(\tR\017paramValueArra" +
      "y\"H\n\nWorkspaces\022\022\n\004name\030\001 \001(\tR\004name\022\022\n\004m" +
      "ain\030\002 \001(\tR\004main\022\022\n\004type\030\003 \001(\tR\004type\"\313\002\n\004" +
      "Task\022\016\n\002id\030\001 \001(\tR\002id\022\033\n\ttask_name\030\002 \001(\tR" +
      "\010taskName\022\"\n\rtask_ref_name\030\003 \001(\tR\013taskRe" +
      "fName\022\033\n\ttask_kind\030\004 \001(\tR\010taskKind\022$\n\016ta" +
      "sk_run_after\030\005 \003(\tR\014taskRunAfter\022E\n\nwork" +
      "spaces\030\006 \003(\0132%.pipelines.tekton.v1alpha1" +
      ".WorkspacesR\nworkspaces\022F\n\013task_params\030\007" +
      " \003(\0132%.pipelines.tekton.v1alpha1.TaskPar" +
      "amsR\ntaskParams\022 \n\013description\030\010 \001(\tR\013de" +
      "scription\"\246\n\n\010Pipeline\022\016\n\002id\030\001 \001(\tR\002id\022\'" +
      "\n\017organization_id\030\002 \001(\rR\016organizationId\022" +
      "\035\n\nproject_id\030\003 \001(\rR\tprojectId\022$\n\016type_m" +
      "eta_kind\030\004 \001(\tR\014typeMetaKind\0221\n\025type_met" +
      "a_api_version\030\005 \001(\tR\022typeMetaApiVersion\022" +
      "(\n\020object_meta_name\030\006 \001(\tR\016objectMetaNam" +
      "e\0222\n\025object_meta_namespace\030\007 \001(\tR\023object" +
      "MetaNamespace\0229\n\006params\030\010 \003(\0132!.pipeline" +
      "s.tekton.v1alpha1.ParamsR\006params\0225\n\005task" +
      "s\030\t \003(\0132\037.pipelines.tekton.v1alpha1.Task" +
      "R\005tasks\022\037\n\013status_type\030\n \001(\tR\nstatusType" +
      "\022V\n\013integration\030\013 \003(\01324.pipelines.tekton" +
      ".v1alpha1.Pipeline.IntegrationEntryR\013int" +
      "egration\022r\n\025environment_variables\030\014 \003(\0132" +
      "=.pipelines.tekton.v1alpha1.Pipeline.Env" +
      "ironmentVariablesEntryR\024environmentVaria" +
      "bles\022M\n\010commands\030\r \003(\01321.pipelines.tekto" +
      "n.v1alpha1.Pipeline.CommandsEntryR\010comma" +
      "nds\022J\n\007secrets\030\016 \003(\01320.pipelines.tekton." +
      "v1alpha1.Pipeline.SecretsEntryR\007secrets\022" +
      "G\n\006labels\030\017 \003(\0132/.pipelines.tekton.v1alp" +
      "ha1.Pipeline.LabelsEntryR\006labels\022\026\n\006acti" +
      "ve\030\020 \001(\010R\006active\022#\n\rinstance_type\030\021 \001(\tR" +
      "\014instanceType\022N\n\017workspaces_main\030\022 \003(\0132%" +
      ".pipelines.tekton.v1alpha1.WorkspacesR\016w" +
      "orkspacesMain\032>\n\020IntegrationEntry\022\020\n\003key" +
      "\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032G\n" +
      "\031EnvironmentVariablesEntry\022\020\n\003key\030\001 \001(\tR" +
      "\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032;\n\rComman" +
      "dsEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\t" +
      "R\005value:\0028\001\032:\n\014SecretsEntry\022\020\n\003key\030\001 \001(\t" +
      "R\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\0329\n\013Label" +
      "sEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR" +
      "\005value:\0028\001B\256\001\n#io.cuemby.pipelines.tekto" +
      "n.v1alpha1B\013TektonProtoP\001Z:github.com/cu" +
      "emby/ccp-sdk/gen/go/pipelines/tekton/v1a" +
      "lpha1\242\002\003PPX\252\002\031Pipelines.Tekton.V1Alpha1\312" +
      "\002\031Pipelines\\Tekton\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_pipelines_tekton_v1alpha1_Params_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_pipelines_tekton_v1alpha1_Params_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Params_descriptor,
        new java.lang.String[] { "Name", "ValueString", "ValueArray", "ValueType", });
    internal_static_pipelines_tekton_v1alpha1_TaskParams_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_pipelines_tekton_v1alpha1_TaskParams_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_TaskParams_descriptor,
        new java.lang.String[] { "ParamName", "ParamValueType", "ParamValue", "ParamValueArray", });
    internal_static_pipelines_tekton_v1alpha1_Workspaces_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_pipelines_tekton_v1alpha1_Workspaces_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Workspaces_descriptor,
        new java.lang.String[] { "Name", "Main", "Type", });
    internal_static_pipelines_tekton_v1alpha1_Task_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_pipelines_tekton_v1alpha1_Task_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Task_descriptor,
        new java.lang.String[] { "Id", "TaskName", "TaskRefName", "TaskKind", "TaskRunAfter", "Workspaces", "TaskParams", "Description", });
    internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_pipelines_tekton_v1alpha1_Pipeline_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor,
        new java.lang.String[] { "Id", "OrganizationId", "ProjectId", "TypeMetaKind", "TypeMetaApiVersion", "ObjectMetaName", "ObjectMetaNamespace", "Params", "Tasks", "StatusType", "Integration", "EnvironmentVariables", "Commands", "Secrets", "Labels", "Active", "InstanceType", "WorkspacesMain", });
    internal_static_pipelines_tekton_v1alpha1_Pipeline_IntegrationEntry_descriptor =
      internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor.getNestedTypes().get(0);
    internal_static_pipelines_tekton_v1alpha1_Pipeline_IntegrationEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Pipeline_IntegrationEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_tekton_v1alpha1_Pipeline_EnvironmentVariablesEntry_descriptor =
      internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor.getNestedTypes().get(1);
    internal_static_pipelines_tekton_v1alpha1_Pipeline_EnvironmentVariablesEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Pipeline_EnvironmentVariablesEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_tekton_v1alpha1_Pipeline_CommandsEntry_descriptor =
      internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor.getNestedTypes().get(2);
    internal_static_pipelines_tekton_v1alpha1_Pipeline_CommandsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Pipeline_CommandsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_tekton_v1alpha1_Pipeline_SecretsEntry_descriptor =
      internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor.getNestedTypes().get(3);
    internal_static_pipelines_tekton_v1alpha1_Pipeline_SecretsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Pipeline_SecretsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_pipelines_tekton_v1alpha1_Pipeline_LabelsEntry_descriptor =
      internal_static_pipelines_tekton_v1alpha1_Pipeline_descriptor.getNestedTypes().get(4);
    internal_static_pipelines_tekton_v1alpha1_Pipeline_LabelsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_tekton_v1alpha1_Pipeline_LabelsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
