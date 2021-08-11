// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/instance/v1alpha1/instance.proto

package io.cuemby.pipelines.instance.v1alpha1;

public interface InstanceOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.instance.v1alpha1.Instance)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string namespace = 2 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  java.lang.String getNamespace();
  /**
   * <code>string namespace = 2 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  com.google.protobuf.ByteString
      getNamespaceBytes();

  /**
   * <code>.pipelines.instance.v1alpha1.InstanceType type_source = 3 [json_name = "typeSource"];</code>
   * @return The enum numeric value on the wire for typeSource.
   */
  int getTypeSourceValue();
  /**
   * <code>.pipelines.instance.v1alpha1.InstanceType type_source = 3 [json_name = "typeSource"];</code>
   * @return The typeSource.
   */
  io.cuemby.pipelines.instance.v1alpha1.InstanceType getTypeSource();

  /**
   * <code>.pipelines.instance.v1alpha1.TypeGitProvider git_provider = 4 [json_name = "gitProvider"];</code>
   * @return Whether the gitProvider field is set.
   */
  boolean hasGitProvider();
  /**
   * <code>.pipelines.instance.v1alpha1.TypeGitProvider git_provider = 4 [json_name = "gitProvider"];</code>
   * @return The gitProvider.
   */
  io.cuemby.pipelines.instance.v1alpha1.TypeGitProvider getGitProvider();
  /**
   * <code>.pipelines.instance.v1alpha1.TypeGitProvider git_provider = 4 [json_name = "gitProvider"];</code>
   */
  io.cuemby.pipelines.instance.v1alpha1.TypeGitProviderOrBuilder getGitProviderOrBuilder();
}