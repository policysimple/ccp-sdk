// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

public interface CreateAutoscalingResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.autoscaling.v1alpha1.CreateAutoscalingResponse)
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