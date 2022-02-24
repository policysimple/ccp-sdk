// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface RuntimeOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.Runtime)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  java.lang.String getId();
  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The bytes for id.
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string namespace = 3 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  java.lang.String getNamespace();
  /**
   * <code>string namespace = 3 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  com.google.protobuf.ByteString
      getNamespaceBytes();

  /**
   * <code>uint32 project_id = 4 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  int getProjectId();

  /**
   * <code>string application_id = 5 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  java.lang.String getApplicationId();
  /**
   * <code>string application_id = 5 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  com.google.protobuf.ByteString
      getApplicationIdBytes();

  /**
   * <code>string workspace_id = 6 [json_name = "workspaceId"];</code>
   * @return The workspaceId.
   */
  java.lang.String getWorkspaceId();
  /**
   * <code>string workspace_id = 6 [json_name = "workspaceId"];</code>
   * @return The bytes for workspaceId.
   */
  com.google.protobuf.ByteString
      getWorkspaceIdBytes();

  /**
   * <code>map&lt;string, string&gt; integration = 7 [json_name = "integration"];</code>
   */
  int getIntegrationCount();
  /**
   * <code>map&lt;string, string&gt; integration = 7 [json_name = "integration"];</code>
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
   * <code>map&lt;string, string&gt; integration = 7 [json_name = "integration"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getIntegrationMap();
  /**
   * <code>map&lt;string, string&gt; integration = 7 [json_name = "integration"];</code>
   */

  java.lang.String getIntegrationOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; integration = 7 [json_name = "integration"];</code>
   */

  java.lang.String getIntegrationOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; env_variables = 8 [json_name = "envVariables"];</code>
   */
  int getEnvVariablesCount();
  /**
   * <code>map&lt;string, string&gt; env_variables = 8 [json_name = "envVariables"];</code>
   */
  boolean containsEnvVariables(
      java.lang.String key);
  /**
   * Use {@link #getEnvVariablesMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getEnvVariables();
  /**
   * <code>map&lt;string, string&gt; env_variables = 8 [json_name = "envVariables"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getEnvVariablesMap();
  /**
   * <code>map&lt;string, string&gt; env_variables = 8 [json_name = "envVariables"];</code>
   */

  java.lang.String getEnvVariablesOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; env_variables = 8 [json_name = "envVariables"];</code>
   */

  java.lang.String getEnvVariablesOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; commands = 9 [json_name = "commands"];</code>
   */
  int getCommandsCount();
  /**
   * <code>map&lt;string, string&gt; commands = 9 [json_name = "commands"];</code>
   */
  boolean containsCommands(
      java.lang.String key);
  /**
   * Use {@link #getCommandsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getCommands();
  /**
   * <code>map&lt;string, string&gt; commands = 9 [json_name = "commands"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getCommandsMap();
  /**
   * <code>map&lt;string, string&gt; commands = 9 [json_name = "commands"];</code>
   */

  java.lang.String getCommandsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; commands = 9 [json_name = "commands"];</code>
   */

  java.lang.String getCommandsOrThrow(
      java.lang.String key);
}
