// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

package io.cuemby.pipelines.environment.v1alpha1;

public final class EnvironmentAPIProto {
  private EnvironmentAPIProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_CreateEnvironmentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_CreateEnvironmentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_CreateEnvironmentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_CreateEnvironmentResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n4pipelines/environment/v1alpha1/environ" +
      "ment_api.proto\022\036pipelines.environment.v1" +
      "alpha1\0320pipelines/environment/v1alpha1/e" +
      "nvironment.proto\"\202\001\n\030CreateEnvironmentRe" +
      "quest\022M\n\013environment\030\001 \001(\0132+.pipelines.e" +
      "nvironment.v1alpha1.EnvironmentR\013environ" +
      "ment\022\027\n\007user_id\030\002 \001(\tR\006userId\"\202\001\n\031Create" +
      "EnvironmentResponse\022M\n\013environment\030\001 \001(\013" +
      "2+.pipelines.environment.v1alpha1.Enviro" +
      "nmentR\013environment\022\026\n\006status\030\002 \001(\tR\006stat" +
      "us\"A\n\030GetOneEnvironmentRequest\022%\n\016enviro" +
      "nment_id\030\001 \001(\tR\renvironmentId\"\202\001\n\031GetOne" +
      "EnvironmentResponse\022M\n\013environment\030\001 \001(\013" +
      "2+.pipelines.environment.v1alpha1.Enviro" +
      "nmentR\013environment\022\026\n\006status\030\002 \001(\tR\006stat" +
      "us\"7\n\026ListEnvironmentRequest\022\035\n\nproject_" +
      "id\030\001 \001(\rR\tprojectId\"h\n\027ListEnvironmentRe" +
      "sponse\022M\n\013environment\030\001 \003(\0132+.pipelines." +
      "environment.v1alpha1.EnvironmentR\013enviro" +
      "nment\"Z\n\030DeleteEnvironmentRequest\022%\n\016env" +
      "ironment_id\030\001 \001(\tR\renvironmentId\022\027\n\007user" +
      "_id\030\002 \001(\tR\006userId\"3\n\031DeleteEnvironmentRe" +
      "sponse\022\026\n\006status\030\001 \001(\tR\006status2\275\004\n\025Envir" +
      "onmentAPIService\022\210\001\n\021CreateEnvironment\0228" +
      ".pipelines.environment.v1alpha1.CreateEn" +
      "vironmentRequest\0329.pipelines.environment" +
      ".v1alpha1.CreateEnvironmentResponse\022\210\001\n\021" +
      "GetOneEnvironment\0228.pipelines.environmen" +
      "t.v1alpha1.GetOneEnvironmentRequest\0329.pi" +
      "pelines.environment.v1alpha1.GetOneEnvir" +
      "onmentResponse\022\202\001\n\017ListEnvironment\0226.pip" +
      "elines.environment.v1alpha1.ListEnvironm" +
      "entRequest\0327.pipelines.environment.v1alp" +
      "ha1.ListEnvironmentResponse\022\210\001\n\021DeleteEn" +
      "vironment\0228.pipelines.environment.v1alph" +
      "a1.DeleteEnvironmentRequest\0329.pipelines." +
      "environment.v1alpha1.DeleteEnvironmentRe" +
      "sponseB\312\001\n(io.cuemby.pipelines.environme" +
      "nt.v1alpha1B\023EnvironmentAPIProtoP\001Z?gith" +
      "ub.com/cuemby/ccp-sdk/gen/go/pipelines/e" +
      "nvironment/v1alpha1\242\002\003PPX\252\002\036Pipelines.En" +
      "vironment.V1Alpha1\312\002\036Pipelines\\Environme" +
      "nt\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.pipelines.environment.v1alpha1.EnvironmentProto.getDescriptor(),
        });
    internal_static_pipelines_environment_v1alpha1_CreateEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_pipelines_environment_v1alpha1_CreateEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_CreateEnvironmentRequest_descriptor,
        new java.lang.String[] { "Environment", "UserId", });
    internal_static_pipelines_environment_v1alpha1_CreateEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_pipelines_environment_v1alpha1_CreateEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_CreateEnvironmentResponse_descriptor,
        new java.lang.String[] { "Environment", "Status", });
    internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentRequest_descriptor,
        new java.lang.String[] { "EnvironmentId", });
    internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_GetOneEnvironmentResponse_descriptor,
        new java.lang.String[] { "Environment", "Status", });
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_descriptor,
        new java.lang.String[] { "ProjectId", });
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor,
        new java.lang.String[] { "Environment", });
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_descriptor,
        new java.lang.String[] { "EnvironmentId", "UserId", });
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_descriptor,
        new java.lang.String[] { "Status", });
    io.cuemby.pipelines.environment.v1alpha1.EnvironmentProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
