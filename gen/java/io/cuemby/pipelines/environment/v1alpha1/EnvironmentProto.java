// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment.proto

package io.cuemby.pipelines.environment.v1alpha1;

public final class EnvironmentProto {
  private EnvironmentProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_pipelines_environment_v1alpha1_Environment_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_pipelines_environment_v1alpha1_Environment_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n0pipelines/environment/v1alpha1/environ" +
      "ment.proto\022\036pipelines.environment.v1alph" +
      "a1\"\225\002\n\013Environment\022\016\n\002id\030\001 \001(\tR\002id\022\'\n\017or" +
      "ganization_id\030\002 \001(\tR\016organizationId\022\035\n\np" +
      "roject_id\030\003 \001(\tR\tprojectId\022\022\n\004name\030\004 \001(\t" +
      "R\004name\022\026\n\006active\030\005 \001(\010R\006active\022\037\n\013status" +
      "_type\030\006 \001(\tR\nstatusType\022#\n\rinternal_name" +
      "\030\007 \001(\tR\014internalName\022\035\n\ncreated_at\030\t \001(\t" +
      "R\tcreatedAt\022\035\n\nupdated_at\030\n \001(\tR\tupdated" +
      "AtB\307\001\n(io.cuemby.pipelines.environment.v" +
      "1alpha1B\020EnvironmentProtoP\001Z?github.com/" +
      "cuemby/ccp-sdk/gen/go/pipelines/environm" +
      "ent/v1alpha1\242\002\003PPX\252\002\036Pipelines.Environme" +
      "nt.V1Alpha1\312\002\036Pipelines\\Environment\\V1Al" +
      "pha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_pipelines_environment_v1alpha1_Environment_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_pipelines_environment_v1alpha1_Environment_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_pipelines_environment_v1alpha1_Environment_descriptor,
        new java.lang.String[] { "Id", "OrganizationId", "ProjectId", "Name", "Active", "StatusType", "InternalName", "CreatedAt", "UpdatedAt", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
