// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public final class RuntimeAPIProto {
  private RuntimeAPIProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_CreateRuntimeRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_CreateRuntimeRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_ListRuntimesRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_ListRuntimesRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_runtime_v1alpha1_ListRuntimesResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_runtime_v1alpha1_ListRuntimesResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n,pipelines/runtime/v1alpha1/runtime_api" +
      ".proto\022\032pipelines.runtime.v1alpha1\032(pipe" +
      "lines/runtime/v1alpha1/runtime.proto\"m\n\024" +
      "CreateRuntimeRequest\022=\n\007runtime\030\001 \001(\0132#." +
      "pipelines.runtime.v1alpha1.RuntimeR\007runt" +
      "ime\022\026\n\006status\030\002 \001(\tR\006status\"n\n\025CreateRun" +
      "timeResponse\022=\n\007runtime\030\001 \001(\0132#.pipeline" +
      "s.runtime.v1alpha1.RuntimeR\007runtime\022\026\n\006s" +
      "tatus\030\002 \001(\tR\006status\"m\n\024UpdateRuntimeRequ" +
      "est\022=\n\007runtime\030\001 \001(\0132#.pipelines.runtime" +
      ".v1alpha1.RuntimeR\007runtime\022\026\n\006status\030\002 \001" +
      "(\tR\006status\"n\n\025UpdateRuntimeResponse\022=\n\007r" +
      "untime\030\001 \001(\0132#.pipelines.runtime.v1alpha" +
      "1.RuntimeR\007runtime\022\026\n\006status\030\002 \001(\tR\006stat" +
      "us\"\212\001\n\024DeleteRuntimeRequest\022\035\n\nruntime_i" +
      "d\030\001 \001(\tR\truntimeId\022\035\n\nproject_id\030\002 \001(\rR\t" +
      "projectId\022\034\n\tnamespace\030\003 \001(\tR\tnamespace\022" +
      "\026\n\006status\030\004 \001(\tR\006status\"/\n\025DeleteRuntime" +
      "Response\022\026\n\006status\030\001 \001(\tR\006status\"\207\001\n\021Get" +
      "RuntimeRequest\022\035\n\nruntime_id\030\001 \001(\tR\trunt" +
      "imeId\022\035\n\nproject_id\030\002 \001(\rR\tprojectId\022\034\n\t" +
      "namespace\030\003 \001(\tR\tnamespace\022\026\n\006status\030\004 \001" +
      "(\tR\006status\"k\n\022GetRuntimeResponse\022=\n\007runt" +
      "ime\030\001 \001(\0132#.pipelines.runtime.v1alpha1.R" +
      "untimeR\007runtime\022\026\n\006status\030\002 \001(\tR\006status\"" +
      "L\n\023ListRuntimesRequest\022\035\n\nproject_id\030\001 \001" +
      "(\rR\tprojectId\022\026\n\006status\030\002 \001(\tR\006status\"z\n" +
      "\024ListRuntimesResponse\022J\n\014runtime_list\030\001 " +
      "\001(\0132\'.pipelines.runtime.v1alpha1.Runtime" +
      "ListR\013runtimeList\022\026\n\006status\030\002 \001(\tR\006statu" +
      "s2\337\004\n\021RuntimeAPIService\022m\n\nGetRuntime\022-." +
      "pipelines.runtime.v1alpha1.GetRuntimeReq" +
      "uest\032..pipelines.runtime.v1alpha1.GetRun" +
      "timeResponse\"\000\022v\n\rCreateRuntime\0220.pipeli" +
      "nes.runtime.v1alpha1.CreateRuntimeReques" +
      "t\0321.pipelines.runtime.v1alpha1.CreateRun" +
      "timeResponse\"\000\022v\n\rUpdateRuntime\0220.pipeli" +
      "nes.runtime.v1alpha1.UpdateRuntimeReques" +
      "t\0321.pipelines.runtime.v1alpha1.UpdateRun" +
      "timeResponse\"\000\022v\n\rDeleteRuntime\0220.pipeli" +
      "nes.runtime.v1alpha1.DeleteRuntimeReques" +
      "t\0321.pipelines.runtime.v1alpha1.DeleteRun" +
      "timeResponse\"\000\022s\n\014ListRuntimes\022/.pipelin" +
      "es.runtime.v1alpha1.ListRuntimesRequest\032" +
      "0.pipelines.runtime.v1alpha1.ListRuntime" +
      "sResponse\"\000B\260\001\n$io.cuemby.pipelines.runt" +
      "ime.v1alpha1B\017RuntimeAPIProtoP\001Z5github." +
      "com/cuemby/ccp-runtime-service/runtimev1" +
      "alpha1\242\002\003PPX\252\002\032Pipelines.Runtime.V1Alpha" +
      "1\312\002\032Pipelines\\Runtime\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.getDescriptor(),
        });
    internal_static_pipelines_runtime_v1alpha1_CreateRuntimeRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_pipelines_runtime_v1alpha1_CreateRuntimeRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_CreateRuntimeRequest_descriptor,
        new java.lang.String[] { "Runtime", "Status", });
    internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_descriptor,
        new java.lang.String[] { "Runtime", "Status", });
    internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeRequest_descriptor,
        new java.lang.String[] { "Runtime", "Status", });
    internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_UpdateRuntimeResponse_descriptor,
        new java.lang.String[] { "Runtime", "Status", });
    internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeRequest_descriptor,
        new java.lang.String[] { "RuntimeId", "ProjectId", "Namespace", "Status", });
    internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_DeleteRuntimeResponse_descriptor,
        new java.lang.String[] { "Status", });
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_descriptor,
        new java.lang.String[] { "RuntimeId", "ProjectId", "Namespace", "Status", });
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_descriptor,
        new java.lang.String[] { "Runtime", "Status", });
    internal_static_pipelines_runtime_v1alpha1_ListRuntimesRequest_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_pipelines_runtime_v1alpha1_ListRuntimesRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_ListRuntimesRequest_descriptor,
        new java.lang.String[] { "ProjectId", "Status", });
    internal_static_pipelines_runtime_v1alpha1_ListRuntimesResponse_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_pipelines_runtime_v1alpha1_ListRuntimesResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_ListRuntimesResponse_descriptor,
        new java.lang.String[] { "RuntimeList", "Status", });
    io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
