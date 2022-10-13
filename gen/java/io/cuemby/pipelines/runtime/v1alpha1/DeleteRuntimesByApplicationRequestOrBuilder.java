// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface DeleteRuntimesByApplicationRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string application_id = 1 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  java.lang.String getApplicationId();
  /**
   * <code>string application_id = 1 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  com.google.protobuf.ByteString
      getApplicationIdBytes();

  /**
   * <code>string name_application = 2 [json_name = "nameApplication"];</code>
   * @return The nameApplication.
   */
  java.lang.String getNameApplication();
  /**
   * <code>string name_application = 2 [json_name = "nameApplication"];</code>
   * @return The bytes for nameApplication.
   */
  com.google.protobuf.ByteString
      getNameApplicationBytes();

  /**
   * <code>string integration_id = 3 [json_name = "integrationId"];</code>
   * @return The integrationId.
   */
  java.lang.String getIntegrationId();
  /**
   * <code>string integration_id = 3 [json_name = "integrationId"];</code>
   * @return The bytes for integrationId.
   */
  com.google.protobuf.ByteString
      getIntegrationIdBytes();

  /**
   * <code>uint32 project_id = 4 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  int getProjectId();

  /**
   * <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  int getOrganizationId();
}
