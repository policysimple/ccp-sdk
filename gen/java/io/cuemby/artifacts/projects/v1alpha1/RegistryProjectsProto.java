// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects.proto

package io.cuemby.artifacts.projects.v1alpha1;

public final class RegistryProjectsProto {
  private RegistryProjectsProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_projects_v1alpha1_HarborProject_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_projects_v1alpha1_HarborProject_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_projects_v1alpha1_ProjectsRegistry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_projects_v1alpha1_ProjectsRegistry_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n3artifacts/projects/v1alpha1/registry_p" +
      "rojects.proto\022\033artifacts.projects.v1alph" +
      "a1\"\220\001\n\rHarborProject\022!\n\014project_name\030\001 \001" +
      "(\tR\013projectName\022\037\n\013registry_id\030\002 \001(\rR\nre" +
      "gistryId\022\026\n\006public\030\003 \001(\010R\006public\022#\n\rstor" +
      "age_limit\030\004 \001(\rR\014storageLimit\"\355\001\n\020Projec" +
      "tsRegistry\022\016\n\002id\030\001 \001(\tR\002id\022\'\n\017organizati" +
      "on_id\030\002 \001(\rR\016organizationId\022\035\n\nproject_i" +
      "d\030\003 \001(\rR\tprojectId\022%\n\016environment_id\030\004 \001" +
      "(\tR\renvironmentId\022\026\n\006active\030\006 \001(\010R\006activ" +
      "e\022B\n\006harbor\030\007 \001(\0132*.artifacts.projects.v" +
      "1alpha1.HarborProjectR\006harborB\300\001\n%io.cue" +
      "mby.artifacts.projects.v1alpha1B\025Registr" +
      "yProjectsProtoP\001Z<github.com/cuemby/ccp-" +
      "sdk/gen/go/artifacts/projects/v1alpha1\242\002" +
      "\003PPX\252\002\033Artifacts.Projects.V1Alpha1\312\002\033Art" +
      "ifacts\\Projects\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_artifacts_projects_v1alpha1_HarborProject_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_artifacts_projects_v1alpha1_HarborProject_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_projects_v1alpha1_HarborProject_descriptor,
        new java.lang.String[] { "ProjectName", "RegistryId", "Public", "StorageLimit", });
    internal_static_artifacts_projects_v1alpha1_ProjectsRegistry_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_artifacts_projects_v1alpha1_ProjectsRegistry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_projects_v1alpha1_ProjectsRegistry_descriptor,
        new java.lang.String[] { "Id", "OrganizationId", "ProjectId", "EnvironmentId", "Active", "Harbor", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}