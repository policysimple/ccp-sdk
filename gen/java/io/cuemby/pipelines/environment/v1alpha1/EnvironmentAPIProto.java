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
    internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentResponse_fieldAccessorTable;
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
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse_fieldAccessorTable;

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
      "us\"\202\001\n\030UpdateEnvironmentRequest\022M\n\013envir" +
      "onment\030\001 \001(\0132+.pipelines.environment.v1a" +
      "lpha1.EnvironmentR\013environment\022\027\n\007user_i" +
      "d\030\002 \001(\tR\006userId\"\202\001\n\031UpdateEnvironmentRes" +
      "ponse\022M\n\013environment\030\001 \001(\0132+.pipelines.e" +
      "nvironment.v1alpha1.EnvironmentR\013environ" +
      "ment\022\026\n\006status\030\002 \001(\tR\006status\"7\n\026ListEnvi" +
      "ronmentRequest\022\035\n\nproject_id\030\001 \001(\tR\tproj" +
      "ectId\"h\n\027ListEnvironmentResponse\022M\n\013envi" +
      "ronment\030\001 \003(\0132+.pipelines.environment.v1" +
      "alpha1.EnvironmentR\013environment\"Z\n\030Delet" +
      "eEnvironmentRequest\022%\n\016environment_id\030\001 " +
      "\001(\tR\renvironmentId\022\027\n\007user_id\030\002 \001(\tR\006use" +
      "rId\"3\n\031DeleteEnvironmentResponse\022\026\n\006stat" +
      "us\030\001 \001(\tR\006status\"l\n\033GetByNameEnvironment" +
      "Request\022M\n\013environment\030\001 \001(\0132+.pipelines" +
      ".environment.v1alpha1.EnvironmentR\013envir" +
      "onment\"\205\001\n\034GetByNameEnvironmentResponse\022" +
      "M\n\013environment\030\001 \001(\0132+.pipelines.environ" +
      "ment.v1alpha1.EnvironmentR\013environment\022\026" +
      "\n\006status\030\002 \001(\tR\006status2\334\006\n\025EnvironmentAP" +
      "IService\022\210\001\n\021CreateEnvironment\0228.pipelin" +
      "es.environment.v1alpha1.CreateEnvironmen" +
      "tRequest\0329.pipelines.environment.v1alpha" +
      "1.CreateEnvironmentResponse\022\210\001\n\021GetOneEn" +
      "vironment\0228.pipelines.environment.v1alph" +
      "a1.GetOneEnvironmentRequest\0329.pipelines." +
      "environment.v1alpha1.GetOneEnvironmentRe" +
      "sponse\022\210\001\n\021UpdateEnvironment\0228.pipelines" +
      ".environment.v1alpha1.UpdateEnvironmentR" +
      "equest\0329.pipelines.environment.v1alpha1." +
      "UpdateEnvironmentResponse\022\202\001\n\017ListEnviro" +
      "nment\0226.pipelines.environment.v1alpha1.L" +
      "istEnvironmentRequest\0327.pipelines.enviro" +
      "nment.v1alpha1.ListEnvironmentResponse\022\210" +
      "\001\n\021DeleteEnvironment\0228.pipelines.environ" +
      "ment.v1alpha1.DeleteEnvironmentRequest\0329" +
      ".pipelines.environment.v1alpha1.DeleteEn" +
      "vironmentResponse\022\221\001\n\024GetByNameEnvironme" +
      "nt\022;.pipelines.environment.v1alpha1.GetB" +
      "yNameEnvironmentRequest\032<.pipelines.envi" +
      "ronment.v1alpha1.GetByNameEnvironmentRes" +
      "ponseB\312\001\n(io.cuemby.pipelines.environmen" +
      "t.v1alpha1B\023EnvironmentAPIProtoP\001Z?githu" +
      "b.com/cuemby/ccp-sdk/gen/go/pipelines/en" +
      "vironment/v1alpha1\242\002\003PPX\252\002\036Pipelines.Env" +
      "ironment.V1Alpha1\312\002\036Pipelines\\Environmen" +
      "t\\V1Alpha1b\006proto3"
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
    internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentRequest_descriptor,
        new java.lang.String[] { "Environment", "UserId", });
    internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_UpdateEnvironmentResponse_descriptor,
        new java.lang.String[] { "Environment", "Status", });
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_ListEnvironmentRequest_descriptor,
        new java.lang.String[] { "ProjectId", });
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor,
        new java.lang.String[] { "Environment", });
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentRequest_descriptor,
        new java.lang.String[] { "EnvironmentId", "UserId", });
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_DeleteEnvironmentResponse_descriptor,
        new java.lang.String[] { "Status", });
    internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest_descriptor =
      getDescriptor().getMessageTypes().get(10);
    internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest_descriptor,
        new java.lang.String[] { "Environment", });
    internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse_descriptor =
      getDescriptor().getMessageTypes().get(11);
    internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse_descriptor,
        new java.lang.String[] { "Environment", "Status", });
    io.cuemby.pipelines.environment.v1alpha1.EnvironmentProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
