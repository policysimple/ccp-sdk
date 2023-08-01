// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface AlreadyExistsRuntimeRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.AlreadyExistsRuntimeRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string integration_id = 1 [json_name = "integrationId"];</code>
   * @return The integrationId.
   */
  java.lang.String getIntegrationId();
  /**
   * <code>string integration_id = 1 [json_name = "integrationId"];</code>
   * @return The bytes for integrationId.
   */
  com.google.protobuf.ByteString
      getIntegrationIdBytes();

  /**
   * <code>map&lt;string, string&gt; integration = 2 [json_name = "integration"];</code>
   */
  int getIntegrationCount();
  /**
   * <code>map&lt;string, string&gt; integration = 2 [json_name = "integration"];</code>
   */
  boolean containsIntegration(
      java.lang.String key);
  /**
   * Use {@link #getIntegrationMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getIntegration();
  /**
   * <code>map&lt;string, string&gt; integration = 2 [json_name = "integration"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getIntegrationMap();
  /**
   * <code>map&lt;string, string&gt; integration = 2 [json_name = "integration"];</code>
   */

  java.lang.String getIntegrationOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; integration = 2 [json_name = "integration"];</code>
   */

  java.lang.String getIntegrationOrThrow(
      java.lang.String key);

  /**
   * <code>string environment_id = 3 [json_name = "environmentId"];</code>
   * @return The environmentId.
   */
  java.lang.String getEnvironmentId();
  /**
   * <code>string environment_id = 3 [json_name = "environmentId"];</code>
   * @return The bytes for environmentId.
   */
  com.google.protobuf.ByteString
      getEnvironmentIdBytes();

  /**
   * <code>string project_id = 4 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  java.lang.String getProjectId();
  /**
   * <code>string project_id = 4 [json_name = "projectId"];</code>
   * @return The bytes for projectId.
   */
  com.google.protobuf.ByteString
      getProjectIdBytes();

  /**
   * <code>string organization_id = 5 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  java.lang.String getOrganizationId();
  /**
   * <code>string organization_id = 5 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  com.google.protobuf.ByteString
      getOrganizationIdBytes();

  /**
   * <code>string user_id = 6 [json_name = "userId"];</code>
   * @return The userId.
   */
  java.lang.String getUserId();
  /**
   * <code>string user_id = 6 [json_name = "userId"];</code>
   * @return The bytes for userId.
   */
  com.google.protobuf.ByteString
      getUserIdBytes();
}
