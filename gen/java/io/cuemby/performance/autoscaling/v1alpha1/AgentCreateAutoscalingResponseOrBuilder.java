// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

public interface AgentCreateAutoscalingResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.autoscaling.v1alpha1.AgentCreateAutoscalingResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
   * @return Whether the autoscaling field is set.
   */
  boolean hasAutoscaling();
  /**
   * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
   * @return The autoscaling.
   */
  io.cuemby.performance.autoscaling.v1alpha1.Autoscaling getAutoscaling();
  /**
   * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
   */
  io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder getAutoscalingOrBuilder();

  /**
   * <code>string origin = 2 [json_name = "origin"];</code>
   * @return The origin.
   */
  java.lang.String getOrigin();
  /**
   * <code>string origin = 2 [json_name = "origin"];</code>
   * @return The bytes for origin.
   */
  com.google.protobuf.ByteString
      getOriginBytes();
}
