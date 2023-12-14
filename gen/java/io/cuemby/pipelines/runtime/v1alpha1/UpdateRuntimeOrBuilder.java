// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface UpdateRuntimeOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.UpdateRuntime)
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
   * <code>string application_id = 2 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  java.lang.String getApplicationId();
  /**
   * <code>string application_id = 2 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  com.google.protobuf.ByteString
      getApplicationIdBytes();

  /**
   * <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 3 [json_name = "trafficType"];</code>
   * @return The enum numeric value on the wire for trafficType.
   */
  int getTrafficTypeValue();
  /**
   * <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 3 [json_name = "trafficType"];</code>
   * @return The trafficType.
   */
  io.cuemby.pipelines.runtime.v1alpha1.TrafficType getTrafficType();

  /**
   * <code>.pipelines.runtime.v1alpha1.ConfigurationUpdate configuration = 4 [json_name = "configuration"];</code>
   * @return Whether the configuration field is set.
   */
  boolean hasConfiguration();
  /**
   * <code>.pipelines.runtime.v1alpha1.ConfigurationUpdate configuration = 4 [json_name = "configuration"];</code>
   * @return The configuration.
   */
  io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate getConfiguration();
  /**
   * <code>.pipelines.runtime.v1alpha1.ConfigurationUpdate configuration = 4 [json_name = "configuration"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdateOrBuilder getConfigurationOrBuilder();

  /**
   * <code>.pipelines.runtime.v1alpha1.Scaling scaling = 5 [json_name = "scaling"];</code>
   * @return Whether the scaling field is set.
   */
  boolean hasScaling();
  /**
   * <code>.pipelines.runtime.v1alpha1.Scaling scaling = 5 [json_name = "scaling"];</code>
   * @return The scaling.
   */
  io.cuemby.pipelines.runtime.v1alpha1.Scaling getScaling();
  /**
   * <code>.pipelines.runtime.v1alpha1.Scaling scaling = 5 [json_name = "scaling"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.ScalingOrBuilder getScalingOrBuilder();

  /**
   * <code>string branch = 6 [json_name = "branch"];</code>
   * @return The branch.
   */
  java.lang.String getBranch();
  /**
   * <code>string branch = 6 [json_name = "branch"];</code>
   * @return The bytes for branch.
   */
  com.google.protobuf.ByteString
      getBranchBytes();

  /**
   * <code>string user_id = 7 [json_name = "userId"];</code>
   * @return The userId.
   */
  java.lang.String getUserId();
  /**
   * <code>string user_id = 7 [json_name = "userId"];</code>
   * @return The bytes for userId.
   */
  com.google.protobuf.ByteString
      getUserIdBytes();
}
