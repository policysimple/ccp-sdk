// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/artifacts/v1alpha1/registry_artifacts_api.proto

package io.cuemby.artifacts.artifacts.v1alpha1;

public interface ListArtifactsRegistryResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .artifacts.artifacts.v1alpha1.ArtifactsRegistry artifacts_registry = 1 [json_name = "artifactsRegistry"];</code>
   */
  java.util.List<io.cuemby.artifacts.artifacts.v1alpha1.ArtifactsRegistry> 
      getArtifactsRegistryList();
  /**
   * <code>repeated .artifacts.artifacts.v1alpha1.ArtifactsRegistry artifacts_registry = 1 [json_name = "artifactsRegistry"];</code>
   */
  io.cuemby.artifacts.artifacts.v1alpha1.ArtifactsRegistry getArtifactsRegistry(int index);
  /**
   * <code>repeated .artifacts.artifacts.v1alpha1.ArtifactsRegistry artifacts_registry = 1 [json_name = "artifactsRegistry"];</code>
   */
  int getArtifactsRegistryCount();
  /**
   * <code>repeated .artifacts.artifacts.v1alpha1.ArtifactsRegistry artifacts_registry = 1 [json_name = "artifactsRegistry"];</code>
   */
  java.util.List<? extends io.cuemby.artifacts.artifacts.v1alpha1.ArtifactsRegistryOrBuilder> 
      getArtifactsRegistryOrBuilderList();
  /**
   * <code>repeated .artifacts.artifacts.v1alpha1.ArtifactsRegistry artifacts_registry = 1 [json_name = "artifactsRegistry"];</code>
   */
  io.cuemby.artifacts.artifacts.v1alpha1.ArtifactsRegistryOrBuilder getArtifactsRegistryOrBuilder(
      int index);

  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The status.
   */
  java.lang.String getStatus();
  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  com.google.protobuf.ByteString
      getStatusBytes();
}
