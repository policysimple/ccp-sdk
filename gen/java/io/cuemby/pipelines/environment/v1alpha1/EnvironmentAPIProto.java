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
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationResponse_fieldAccessorTable;

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
      "\n\006status\030\002 \001(\tR\006status\"L\n!CreateVcluster" +
      "OrganizationRequest\022\'\n\017organization_id\030\002" +
      " \001(\tR\016organizationId\"V\n\"CreateVclusterOr" +
      "ganizationResponse\022\026\n\006status\030\001 \001(\tR\006stat" +
      "us\022\030\n\007message\030\002 \001(\tR\007message2\202\010\n\025Environ" +
      "mentAPIService\022\210\001\n\021CreateEnvironment\0228.p" +
      "ipelines.environment.v1alpha1.CreateEnvi" +
      "ronmentRequest\0329.pipelines.environment.v" +
      "1alpha1.CreateEnvironmentResponse\022\210\001\n\021Ge" +
      "tOneEnvironment\0228.pipelines.environment." +
      "v1alpha1.GetOneEnvironmentRequest\0329.pipe" +
      "lines.environment.v1alpha1.GetOneEnviron" +
      "mentResponse\022\210\001\n\021UpdateEnvironment\0228.pip" +
      "elines.environment.v1alpha1.UpdateEnviro" +
      "nmentRequest\0329.pipelines.environment.v1a" +
      "lpha1.UpdateEnvironmentResponse\022\202\001\n\017List" +
      "Environment\0226.pipelines.environment.v1al" +
      "pha1.ListEnvironmentRequest\0327.pipelines." +
      "environment.v1alpha1.ListEnvironmentResp" +
      "onse\022\210\001\n\021DeleteEnvironment\0228.pipelines.e" +
      "nvironment.v1alpha1.DeleteEnvironmentReq" +
      "uest\0329.pipelines.environment.v1alpha1.De" +
      "leteEnvironmentResponse\022\221\001\n\024GetByNameEnv" +
      "ironment\022;.pipelines.environment.v1alpha" +
      "1.GetByNameEnvironmentRequest\032<.pipeline" +
      "s.environment.v1alpha1.GetByNameEnvironm" +
      "entResponse\022\243\001\n\032CreateVclusterOrganizati" +
      "on\022A.pipelines.environment.v1alpha1.Crea" +
      "teVclusterOrganizationRequest\032B.pipeline" +
      "s.environment.v1alpha1.CreateVclusterOrg" +
      "anizationResponseB\312\001\n(io.cuemby.pipeline" +
      "s.environment.v1alpha1B\023EnvironmentAPIPr" +
      "otoP\001Z?github.com/cuemby/ccp-sdk/gen/go/" +
      "pipelines/environment/v1alpha1\242\002\003PPX\252\002\036P" +
      "ipelines.Environment.V1Alpha1\312\002\036Pipeline" +
      "s\\Environment\\V1Alpha1b\006proto3"
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
    internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_descriptor =
      getDescriptor().getMessageTypes().get(12);
    internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_descriptor,
        new java.lang.String[] { "OrganizationId", });
    internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationResponse_descriptor =
      getDescriptor().getMessageTypes().get(13);
    internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationResponse_descriptor,
        new java.lang.String[] { "Status", "Message", });
    io.cuemby.pipelines.environment.v1alpha1.EnvironmentProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
