// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

public interface AgentListAutoscalingRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.autoscaling.v1alpha1.AgentListAutoscalingRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
   */
  java.util.List<io.cuemby.performance.autoscaling.v1alpha1.Autoscaling> 
      getAutoscalingsList();
  /**
   * <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
   */
  io.cuemby.performance.autoscaling.v1alpha1.Autoscaling getAutoscalings(int index);
  /**
   * <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
   */
  int getAutoscalingsCount();
  /**
   * <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
   */
  java.util.List<? extends io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder> 
      getAutoscalingsOrBuilderList();
  /**
   * <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
   */
  io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder getAutoscalingsOrBuilder(
      int index);

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
