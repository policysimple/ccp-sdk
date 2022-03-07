// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs_agent_api.proto

package io.cuemby.performance.logs.v1alpha1;

public interface SaveLogsRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.logs.v1alpha1.SaveLogsRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string cluster_name = 1 [json_name = "clusterName"];</code>
   * @return The clusterName.
   */
  java.lang.String getClusterName();
  /**
   * <code>string cluster_name = 1 [json_name = "clusterName"];</code>
   * @return The bytes for clusterName.
   */
  com.google.protobuf.ByteString
      getClusterNameBytes();

  /**
   * <code>map&lt;string, string&gt; meta = 2 [json_name = "meta"];</code>
   */
  int getMetaCount();
  /**
   * <code>map&lt;string, string&gt; meta = 2 [json_name = "meta"];</code>
   */
  boolean containsMeta(
      java.lang.String key);
  /**
   * Use {@link #getMetaMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getMeta();
  /**
   * <code>map&lt;string, string&gt; meta = 2 [json_name = "meta"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getMetaMap();
  /**
   * <code>map&lt;string, string&gt; meta = 2 [json_name = "meta"];</code>
   */

  java.lang.String getMetaOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; meta = 2 [json_name = "meta"];</code>
   */

  java.lang.String getMetaOrThrow(
      java.lang.String key);

  /**
   * <code>repeated .performance.logs.v1alpha1.Log logs = 3 [json_name = "logs"];</code>
   */
  java.util.List<io.cuemby.performance.logs.v1alpha1.Log> 
      getLogsList();
  /**
   * <code>repeated .performance.logs.v1alpha1.Log logs = 3 [json_name = "logs"];</code>
   */
  io.cuemby.performance.logs.v1alpha1.Log getLogs(int index);
  /**
   * <code>repeated .performance.logs.v1alpha1.Log logs = 3 [json_name = "logs"];</code>
   */
  int getLogsCount();
  /**
   * <code>repeated .performance.logs.v1alpha1.Log logs = 3 [json_name = "logs"];</code>
   */
  java.util.List<? extends io.cuemby.performance.logs.v1alpha1.LogOrBuilder> 
      getLogsOrBuilderList();
  /**
   * <code>repeated .performance.logs.v1alpha1.Log logs = 3 [json_name = "logs"];</code>
   */
  io.cuemby.performance.logs.v1alpha1.LogOrBuilder getLogsOrBuilder(
      int index);
}
