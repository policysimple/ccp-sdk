// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface UpdateResponseMessageRuntimeResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
   * @return Whether the runtime field is set.
   */
  boolean hasRuntime();
  /**
   * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
   * @return The runtime.
   */
  io.cuemby.pipelines.runtime.v1alpha1.Runtime getRuntime();
  /**
   * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.RuntimeOrBuilder getRuntimeOrBuilder();

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
