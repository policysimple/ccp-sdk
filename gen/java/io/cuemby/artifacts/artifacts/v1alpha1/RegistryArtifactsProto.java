// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/artifacts/v1alpha1/registry_artifacts.proto

package io.cuemby.artifacts.artifacts.v1alpha1;

public final class RegistryArtifactsProto {
  private RegistryArtifactsProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_artifacts_v1alpha1_Tags_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_artifacts_v1alpha1_Tags_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_artifacts_artifacts_v1alpha1_ArtifactsRegistry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_artifacts_artifacts_v1alpha1_ArtifactsRegistry_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n5artifacts/artifacts/v1alpha1/registry_" +
      "artifacts.proto\022\034artifacts.artifacts.v1a" +
      "lpha1\"y\n\004Tags\022\022\n\004name\030\001 \001(\tR\004name\022\033\n\tpul" +
      "l_time\030\002 \001(\tR\010pullTime\022\033\n\tpush_time\030\003 \001(" +
      "\tR\010pushTime\022#\n\rstorage_limit\030\004 \001(\rR\014stor" +
      "ageLimit\"\273\003\n\021ArtifactsRegistry\022\016\n\002id\030\001 \001" +
      "(\tR\002id\022\026\n\006digest\030\002 \001(\tR\006digest\022\033\n\tpull_t" +
      "ime\030\003 \001(\tR\010pullTime\022\033\n\tpush_time\030\004 \001(\tR\010" +
      "pushTime\022\022\n\004size\030\005 \001(\003R\004size\022\026\n\006active\030\006" +
      " \001(\010R\006active\0226\n\004tags\030\007 \003(\0132\".artifacts.a" +
      "rtifacts.v1alpha1.TagsR\004tags\022+\n\021organiza" +
      "tion_name\030\010 \001(\tR\020organizationName\022!\n\014pro" +
      "ject_name\030\t \001(\tR\013projectName\022)\n\020environm" +
      "ent_name\030\n \001(\tR\017environmentName\022)\n\020appli" +
      "cation_name\030\013 \001(\tR\017applicationName\022\031\n\010ur" +
      "l_repo\030\014 \001(\tR\007urlRepo\022\037\n\013branch_repo\030\r \001" +
      "(\tR\nbranchRepoB\305\001\n&io.cuemby.artifacts.a" +
      "rtifacts.v1alpha1B\026RegistryArtifactsProt" +
      "oP\001Z=github.com/cuemby/ccp-sdk/gen/go/ar" +
      "tifacts/artifacts/v1alpha1\242\002\003PPX\252\002\034Artif" +
      "acts.Artifacts.V1Alpha1\312\002\034Artifacts\\Arti" +
      "facts\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_artifacts_artifacts_v1alpha1_Tags_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_artifacts_artifacts_v1alpha1_Tags_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_artifacts_v1alpha1_Tags_descriptor,
        new java.lang.String[] { "Name", "PullTime", "PushTime", "StorageLimit", });
    internal_static_artifacts_artifacts_v1alpha1_ArtifactsRegistry_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_artifacts_artifacts_v1alpha1_ArtifactsRegistry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_artifacts_artifacts_v1alpha1_ArtifactsRegistry_descriptor,
        new java.lang.String[] { "Id", "Digest", "PullTime", "PushTime", "Size", "Active", "Tags", "OrganizationName", "ProjectName", "EnvironmentName", "ApplicationName", "UrlRepo", "BranchRepo", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
