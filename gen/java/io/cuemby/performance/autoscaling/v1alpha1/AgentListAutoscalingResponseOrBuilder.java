// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

public interface AgentListAutoscalingResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.autoscaling.v1alpha1.AgentListAutoscalingResponse)
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
}
