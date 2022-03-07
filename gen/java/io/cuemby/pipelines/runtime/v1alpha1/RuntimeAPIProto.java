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
      "us\"M\n\024DeleteRuntimeRequest\022\035\n\nruntime_id" +
      "\030\001 \001(\tR\truntimeId\022\026\n\006status\030\002 \001(\tR\006statu" +
      "s\"/\n\025DeleteRuntimeResponse\022\026\n\006status\030\001 \001" +
      "(\tR\006status\"i\n\021GetRuntimeRequest\022\035\n\nrunti" +
      "me_id\030\001 \001(\tR\truntimeId\022\035\n\nproject_id\030\002 \001" +
      "(\rR\tprojectId\022\026\n\006status\030\003 \001(\tR\006status\"k\n" +
      "\022GetRuntimeResponse\022=\n\007runtime\030\001 \001(\0132#.p" +
      "ipelines.runtime.v1alpha1.RuntimeR\007runti" +
      "me\022\026\n\006status\030\002 \001(\tR\006status2\352\003\n\021RuntimeAP" +
      "IService\022m\n\nGetRuntime\022-.pipelines.runti" +
      "me.v1alpha1.GetRuntimeRequest\032..pipeline" +
      "s.runtime.v1alpha1.GetRuntimeResponse\"\000\022" +
      "v\n\rCreateRuntime\0220.pipelines.runtime.v1a" +
      "lpha1.CreateRuntimeRequest\0321.pipelines.r" +
      "untime.v1alpha1.CreateRuntimeResponse\"\000\022" +
      "v\n\rUpdateRuntime\0220.pipelines.runtime.v1a" +
      "lpha1.UpdateRuntimeRequest\0321.pipelines.r" +
      "untime.v1alpha1.UpdateRuntimeResponse\"\000\022" +
      "v\n\rDeleteRuntime\0220.pipelines.runtime.v1a" +
      "lpha1.DeleteRuntimeRequest\0321.pipelines.r" +
      "untime.v1alpha1.DeleteRuntimeResponse\"\000B" +
      "\260\001\n$io.cuemby.pipelines.runtime.v1alpha1" +
      "B\017RuntimeAPIProtoP\001Z5github.com/cuemby/c" +
      "cp-runtime-service/runtimev1alpha1\242\002\003PPX" +
      "\252\002\032Pipelines.Runtime.V1Alpha1\312\002\032Pipeline" +
      "s\\Runtime\\V1Alpha1b\006proto3"
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
        new java.lang.String[] { "RuntimeId", "Status", });
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
        new java.lang.String[] { "RuntimeId", "ProjectId", "Status", });
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_runtime_v1alpha1_GetRuntimeResponse_descriptor,
        new java.lang.String[] { "Runtime", "Status", });
    io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
