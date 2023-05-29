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
   * <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
   */
  java.util.List<io.cuemby.pipelines.runtime.v1alpha1.IntanceType> 
      getInstanceTypesList();
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.IntanceType getInstanceTypes(int index);
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
   */
  int getInstanceTypesCount();
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.runtime.v1alpha1.IntanceTypeOrBuilder> 
      getInstanceTypesOrBuilderList();
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.IntanceTypeOrBuilder getInstanceTypesOrBuilder(
      int index);

  /**
   * <code>string organization_id = 4 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  java.lang.String getOrganizationId();
  /**
   * <code>string organization_id = 4 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  com.google.protobuf.ByteString
      getOrganizationIdBytes();

  /**
   * <code>string project_id = 5 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  java.lang.String getProjectId();
  /**
   * <code>string project_id = 5 [json_name = "projectId"];</code>
   * @return The bytes for projectId.
   */
  com.google.protobuf.ByteString
      getProjectIdBytes();

  /**
   * <code>string name_project = 6 [json_name = "nameProject"];</code>
   * @return The nameProject.
   */
  java.lang.String getNameProject();
  /**
   * <code>string name_project = 6 [json_name = "nameProject"];</code>
   * @return The bytes for nameProject.
   */
  com.google.protobuf.ByteString
      getNameProjectBytes();

  /**
   * <code>string application_id = 7 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  java.lang.String getApplicationId();
  /**
   * <code>string application_id = 7 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  com.google.protobuf.ByteString
      getApplicationIdBytes();

  /**
   * <code>string workspace_id = 8 [json_name = "workspaceId"];</code>
   * @return The workspaceId.
   */
  java.lang.String getWorkspaceId();
  /**
   * <code>string workspace_id = 8 [json_name = "workspaceId"];</code>
   * @return The bytes for workspaceId.
   */
  com.google.protobuf.ByteString
      getWorkspaceIdBytes();

  /**
   * <code>string environment_id = 9 [json_name = "environmentId"];</code>
   * @return The environmentId.
   */
  java.lang.String getEnvironmentId();
  /**
   * <code>string environment_id = 9 [json_name = "environmentId"];</code>
   * @return The bytes for environmentId.
   */
  com.google.protobuf.ByteString
      getEnvironmentIdBytes();

  /**
   * <code>string scaler = 10 [json_name = "scaler"];</code>
   * @return The scaler.
   */
  java.lang.String getScaler();
  /**
   * <code>string scaler = 10 [json_name = "scaler"];</code>
   * @return The bytes for scaler.
   */
  com.google.protobuf.ByteString
      getScalerBytes();

  /**
   * <code>string pod_status = 11 [json_name = "podStatus"];</code>
   * @return The podStatus.
   */
  java.lang.String getPodStatus();
  /**
   * <code>string pod_status = 11 [json_name = "podStatus"];</code>
   * @return The bytes for podStatus.
   */
  com.google.protobuf.ByteString
      getPodStatusBytes();

  /**
   * <code>string pod_status_msg = 12 [json_name = "podStatusMsg"];</code>
   * @return The podStatusMsg.
   */
  java.lang.String getPodStatusMsg();
  /**
   * <code>string pod_status_msg = 12 [json_name = "podStatusMsg"];</code>
   * @return The bytes for podStatusMsg.
   */
  com.google.protobuf.ByteString
      getPodStatusMsgBytes();

  /**
   * <code>map&lt;string, string&gt; integration = 13 [json_name = "integration"];</code>
   */
  int getIntegrationCount();
  /**
   * <code>map&lt;string, string&gt; integration = 13 [json_name = "integration"];</code>
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
   * <code>map&lt;string, string&gt; integration = 13 [json_name = "integration"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getIntegrationMap();
  /**
   * <code>map&lt;string, string&gt; integration = 13 [json_name = "integration"];</code>
   */

  java.lang.String getIntegrationOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; integration = 13 [json_name = "integration"];</code>
   */

  java.lang.String getIntegrationOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; environment_variables = 14 [json_name = "environmentVariables"];</code>
   */
  int getEnvironmentVariablesCount();
  /**
   * <code>map&lt;string, string&gt; environment_variables = 14 [json_name = "environmentVariables"];</code>
   */
  boolean containsEnvironmentVariables(
      java.lang.String key);
  /**
   * Use {@link #getEnvironmentVariablesMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getEnvironmentVariables();
  /**
   * <code>map&lt;string, string&gt; environment_variables = 14 [json_name = "environmentVariables"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getEnvironmentVariablesMap();
  /**
   * <code>map&lt;string, string&gt; environment_variables = 14 [json_name = "environmentVariables"];</code>
   */

  java.lang.String getEnvironmentVariablesOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; environment_variables = 14 [json_name = "environmentVariables"];</code>
   */

  java.lang.String getEnvironmentVariablesOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; commands = 15 [json_name = "commands"];</code>
   */
  int getCommandsCount();
  /**
   * <code>map&lt;string, string&gt; commands = 15 [json_name = "commands"];</code>
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
   * <code>map&lt;string, string&gt; commands = 15 [json_name = "commands"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getCommandsMap();
  /**
   * <code>map&lt;string, string&gt; commands = 15 [json_name = "commands"];</code>
   */

  java.lang.String getCommandsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; commands = 15 [json_name = "commands"];</code>
   */

  java.lang.String getCommandsOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; secrets = 16 [json_name = "secrets"];</code>
   */
  int getSecretsCount();
  /**
   * <code>map&lt;string, string&gt; secrets = 16 [json_name = "secrets"];</code>
   */
  boolean containsSecrets(
      java.lang.String key);
  /**
   * Use {@link #getSecretsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getSecrets();
  /**
   * <code>map&lt;string, string&gt; secrets = 16 [json_name = "secrets"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getSecretsMap();
  /**
   * <code>map&lt;string, string&gt; secrets = 16 [json_name = "secrets"];</code>
   */

  java.lang.String getSecretsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; secrets = 16 [json_name = "secrets"];</code>
   */

  java.lang.String getSecretsOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; extra_args = 17 [json_name = "extraArgs"];</code>
   */
  int getExtraArgsCount();
  /**
   * <code>map&lt;string, string&gt; extra_args = 17 [json_name = "extraArgs"];</code>
   */
  boolean containsExtraArgs(
      java.lang.String key);
  /**
   * Use {@link #getExtraArgsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getExtraArgs();
  /**
   * <code>map&lt;string, string&gt; extra_args = 17 [json_name = "extraArgs"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getExtraArgsMap();
  /**
   * <code>map&lt;string, string&gt; extra_args = 17 [json_name = "extraArgs"];</code>
   */

  java.lang.String getExtraArgsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; extra_args = 17 [json_name = "extraArgs"];</code>
   */

  java.lang.String getExtraArgsOrThrow(
      java.lang.String key);

  /**
   * <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 18 [json_name = "trafficType"];</code>
   * @return The enum numeric value on the wire for trafficType.
   */
  int getTrafficTypeValue();
  /**
   * <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 18 [json_name = "trafficType"];</code>
   * @return The trafficType.
   */
  io.cuemby.pipelines.runtime.v1alpha1.TrafficType getTrafficType();

  /**
   * <code>string response_message = 19 [json_name = "responseMessage"];</code>
   * @return The responseMessage.
   */
  java.lang.String getResponseMessage();
  /**
   * <code>string response_message = 19 [json_name = "responseMessage"];</code>
   * @return The bytes for responseMessage.
   */
  com.google.protobuf.ByteString
      getResponseMessageBytes();

  /**
   * <code>string environment_name = 20 [json_name = "environmentName"];</code>
   * @return The environmentName.
   */
  java.lang.String getEnvironmentName();
  /**
   * <code>string environment_name = 20 [json_name = "environmentName"];</code>
   * @return The bytes for environmentName.
   */
  com.google.protobuf.ByteString
      getEnvironmentNameBytes();

  /**
   * <code>string environment_internal_name = 21 [json_name = "environmentInternalName"];</code>
   * @return The environmentInternalName.
   */
  java.lang.String getEnvironmentInternalName();
  /**
   * <code>string environment_internal_name = 21 [json_name = "environmentInternalName"];</code>
   * @return The bytes for environmentInternalName.
   */
  com.google.protobuf.ByteString
      getEnvironmentInternalNameBytes();

  /**
   * <code>string application_name = 22 [json_name = "applicationName"];</code>
   * @return The applicationName.
   */
  java.lang.String getApplicationName();
  /**
   * <code>string application_name = 22 [json_name = "applicationName"];</code>
   * @return The bytes for applicationName.
   */
  com.google.protobuf.ByteString
      getApplicationNameBytes();

  /**
   * <code>uint32 storage_used = 23 [json_name = "storageUsed"];</code>
   * @return The storageUsed.
   */
  int getStorageUsed();

  /**
   * <code>uint32 storage_limit = 24 [json_name = "storageLimit"];</code>
   * @return The storageLimit.
   */
  int getStorageLimit();

  /**
   * <code>string integration_id = 25 [json_name = "integrationId"];</code>
   * @return The integrationId.
   */
  java.lang.String getIntegrationId();
  /**
   * <code>string integration_id = 25 [json_name = "integrationId"];</code>
   * @return The bytes for integrationId.
   */
  com.google.protobuf.ByteString
      getIntegrationIdBytes();

  /**
   * <code>.application.v1alpha1.Application application_data = 26 [json_name = "applicationData"];</code>
   * @return Whether the applicationData field is set.
   */
  boolean hasApplicationData();
  /**
   * <code>.application.v1alpha1.Application application_data = 26 [json_name = "applicationData"];</code>
   * @return The applicationData.
   */
  application.v1alpha1.ApplicationOuterClass.Application getApplicationData();
  /**
   * <code>.application.v1alpha1.Application application_data = 26 [json_name = "applicationData"];</code>
   */
  application.v1alpha1.ApplicationOuterClass.ApplicationOrBuilder getApplicationDataOrBuilder();

  /**
   * <code>bool custom_pipeline = 27 [json_name = "customPipeline"];</code>
   * @return The customPipeline.
   */
  boolean getCustomPipeline();

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.Task> 
      getBeforeDeployTasksList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.Task getBeforeDeployTasks(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
   */
  int getBeforeDeployTasksCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder> 
      getBeforeDeployTasksOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder getBeforeDeployTasksOrBuilder(
      int index);

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.Task> 
      getAfterDeployTasksList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.Task getAfterDeployTasks(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
   */
  int getAfterDeployTasksCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder> 
      getAfterDeployTasksOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder getAfterDeployTasksOrBuilder(
      int index);

  /**
   * <code>string pod_ingress_cert = 30 [json_name = "podIngressCert"];</code>
   * @return The podIngressCert.
   */
  java.lang.String getPodIngressCert();
  /**
   * <code>string pod_ingress_cert = 30 [json_name = "podIngressCert"];</code>
   * @return The bytes for podIngressCert.
   */
  com.google.protobuf.ByteString
      getPodIngressCertBytes();

  /**
   * <code>bool is_not_exist_dockerfile = 31 [json_name = "isNotExistDockerfile"];</code>
   * @return The isNotExistDockerfile.
   */
  boolean getIsNotExistDockerfile();
}
