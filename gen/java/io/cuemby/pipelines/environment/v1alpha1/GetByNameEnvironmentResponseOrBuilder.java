// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

package io.cuemby.pipelines.environment.v1alpha1;

public interface GetByNameEnvironmentResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.environment.v1alpha1.GetByNameEnvironmentResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   * @return Whether the environment field is set.
   */
  boolean hasEnvironment();
  /**
   * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   * @return The environment.
   */
  io.cuemby.pipelines.environment.v1alpha1.Environment getEnvironment();
  /**
   * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder getEnvironmentOrBuilder();

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
