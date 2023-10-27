// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton_api.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface ChangeStatusRuntimeAndApplicationRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequest)
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
   * <code>string organization_id = 3 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  java.lang.String getOrganizationId();
  /**
   * <code>string organization_id = 3 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  com.google.protobuf.ByteString
      getOrganizationIdBytes();

  /**
   * <code>string runtime_name = 4 [json_name = "runtimeName"];</code>
   * @return The runtimeName.
   */
  java.lang.String getRuntimeName();
  /**
   * <code>string runtime_name = 4 [json_name = "runtimeName"];</code>
   * @return The bytes for runtimeName.
   */
  com.google.protobuf.ByteString
      getRuntimeNameBytes();
}