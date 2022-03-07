// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling.proto

package io.cuemby.performance.autoscaling.v1alpha1;

public interface AutoScalingSpecTargetOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.autoscaling.v1alpha1.AutoScalingSpecTarget)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string api_version = 1 [json_name = "apiVersion"];</code>
   * @return The apiVersion.
   */
  java.lang.String getApiVersion();
  /**
   * <code>string api_version = 1 [json_name = "apiVersion"];</code>
   * @return The bytes for apiVersion.
   */
  com.google.protobuf.ByteString
      getApiVersionBytes();

  /**
   * <code>string kind = 2 [json_name = "kind"];</code>
   * @return The kind.
   */
  java.lang.String getKind();
  /**
   * <code>string kind = 2 [json_name = "kind"];</code>
   * @return The bytes for kind.
   */
  com.google.protobuf.ByteString
      getKindBytes();

  /**
   * <code>string name = 3 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 3 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string container = 4 [json_name = "container"];</code>
   * @return The container.
   */
  java.lang.String getContainer();
  /**
   * <code>string container = 4 [json_name = "container"];</code>
   * @return The bytes for container.
   */
  com.google.protobuf.ByteString
      getContainerBytes();
}
