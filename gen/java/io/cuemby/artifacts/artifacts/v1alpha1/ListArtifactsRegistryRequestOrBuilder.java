// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/artifacts/v1alpha1/registry_artifacts_api.proto

package io.cuemby.artifacts.artifacts.v1alpha1;

public interface ListArtifactsRegistryRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string organization_id = 1 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  java.lang.String getOrganizationId();
  /**
   * <code>string organization_id = 1 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  com.google.protobuf.ByteString
      getOrganizationIdBytes();

  /**
   * <code>string project_id = 2 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  java.lang.String getProjectId();
  /**
   * <code>string project_id = 2 [json_name = "projectId"];</code>
   * @return The bytes for projectId.
   */
  com.google.protobuf.ByteString
      getProjectIdBytes();

  /**
   * <code>string runtime_id = 3 [json_name = "runtimeId"];</code>
   * @return The runtimeId.
   */
  java.lang.String getRuntimeId();
  /**
   * <code>string runtime_id = 3 [json_name = "runtimeId"];</code>
   * @return The bytes for runtimeId.
   */
  com.google.protobuf.ByteString
      getRuntimeIdBytes();
}
