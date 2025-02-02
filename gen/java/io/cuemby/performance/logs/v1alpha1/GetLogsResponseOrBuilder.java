// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs_api.proto

package io.cuemby.performance.logs.v1alpha1;

public interface GetLogsResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.logs.v1alpha1.GetLogsResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .performance.logs.v1alpha1.LogItem logs = 1 [json_name = "logs"];</code>
   */
  java.util.List<io.cuemby.performance.logs.v1alpha1.LogItem> 
      getLogsList();
  /**
   * <code>repeated .performance.logs.v1alpha1.LogItem logs = 1 [json_name = "logs"];</code>
   */
  io.cuemby.performance.logs.v1alpha1.LogItem getLogs(int index);
  /**
   * <code>repeated .performance.logs.v1alpha1.LogItem logs = 1 [json_name = "logs"];</code>
   */
  int getLogsCount();
  /**
   * <code>repeated .performance.logs.v1alpha1.LogItem logs = 1 [json_name = "logs"];</code>
   */
  java.util.List<? extends io.cuemby.performance.logs.v1alpha1.LogItemOrBuilder> 
      getLogsOrBuilderList();
  /**
   * <code>repeated .performance.logs.v1alpha1.LogItem logs = 1 [json_name = "logs"];</code>
   */
  io.cuemby.performance.logs.v1alpha1.LogItemOrBuilder getLogsOrBuilder(
      int index);

  /**
   * <code>string next_page_id = 2 [json_name = "nextPageId"];</code>
   * @return The nextPageId.
   */
  java.lang.String getNextPageId();
  /**
   * <code>string next_page_id = 2 [json_name = "nextPageId"];</code>
   * @return The bytes for nextPageId.
   */
  com.google.protobuf.ByteString
      getNextPageIdBytes();
}
