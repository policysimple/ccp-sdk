// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs.proto

package io.cuemby.performance.logs.v1alpha1;

public interface LogItemOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.logs.v1alpha1.LogItem)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string date = 1 [json_name = "date"];</code>
   * @return The date.
   */
  java.lang.String getDate();
  /**
   * <code>string date = 1 [json_name = "date"];</code>
   * @return The bytes for date.
   */
  com.google.protobuf.ByteString
      getDateBytes();

  /**
   * <code>string container = 2 [json_name = "container"];</code>
   * @return The container.
   */
  java.lang.String getContainer();
  /**
   * <code>string container = 2 [json_name = "container"];</code>
   * @return The bytes for container.
   */
  com.google.protobuf.ByteString
      getContainerBytes();

  /**
   * <code>string pod_name = 3 [json_name = "podName"];</code>
   * @return The podName.
   */
  java.lang.String getPodName();
  /**
   * <code>string pod_name = 3 [json_name = "podName"];</code>
   * @return The bytes for podName.
   */
  com.google.protobuf.ByteString
      getPodNameBytes();

  /**
   * <code>string namespace = 4 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  java.lang.String getNamespace();
  /**
   * <code>string namespace = 4 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  com.google.protobuf.ByteString
      getNamespaceBytes();

  /**
   * <code>string message = 5 [json_name = "message"];</code>
   * @return The message.
   */
  java.lang.String getMessage();
  /**
   * <code>string message = 5 [json_name = "message"];</code>
   * @return The bytes for message.
   */
  com.google.protobuf.ByteString
      getMessageBytes();
}