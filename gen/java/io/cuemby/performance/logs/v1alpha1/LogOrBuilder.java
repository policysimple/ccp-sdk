// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs_agent_api.proto

package io.cuemby.performance.logs.v1alpha1;

public interface LogOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.logs.v1alpha1.Log)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int64 date = 1 [json_name = "date"];</code>
   * @return The date.
   */
  long getDate();

  /**
   * <code>string log = 2 [json_name = "log"];</code>
   * @return The log.
   */
  java.lang.String getLog();
  /**
   * <code>string log = 2 [json_name = "log"];</code>
   * @return The bytes for log.
   */
  com.google.protobuf.ByteString
      getLogBytes();

  /**
   * <code>.performance.logs.v1alpha1.LogKuebrnetesInfo kubernetes = 3 [json_name = "kubernetes"];</code>
   * @return Whether the kubernetes field is set.
   */
  boolean hasKubernetes();
  /**
   * <code>.performance.logs.v1alpha1.LogKuebrnetesInfo kubernetes = 3 [json_name = "kubernetes"];</code>
   * @return The kubernetes.
   */
  io.cuemby.performance.logs.v1alpha1.LogKuebrnetesInfo getKubernetes();
  /**
   * <code>.performance.logs.v1alpha1.LogKuebrnetesInfo kubernetes = 3 [json_name = "kubernetes"];</code>
   */
  io.cuemby.performance.logs.v1alpha1.LogKuebrnetesInfoOrBuilder getKubernetesOrBuilder();

  /**
   * <code>string log_id = 4 [json_name = "logId"];</code>
   * @return The logId.
   */
  java.lang.String getLogId();
  /**
   * <code>string log_id = 4 [json_name = "logId"];</code>
   * @return The bytes for logId.
   */
  com.google.protobuf.ByteString
      getLogIdBytes();
}
