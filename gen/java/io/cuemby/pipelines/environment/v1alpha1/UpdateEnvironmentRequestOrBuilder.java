// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

package io.cuemby.pipelines.environment.v1alpha1;

public interface UpdateEnvironmentRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.environment.v1alpha1.UpdateEnvironmentRequest)
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
   * <code>string user_id = 2 [json_name = "userId"];</code>
   * @return The userId.
   */
  java.lang.String getUserId();
  /**
   * <code>string user_id = 2 [json_name = "userId"];</code>
   * @return The bytes for userId.
   */
  com.google.protobuf.ByteString
      getUserIdBytes();
}
