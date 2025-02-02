// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/metrics/v1alpha1/metrics_agent_api.proto

package io.cuemby.performance.metrics.v1alpha1;

public interface SaveMetricsRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.metrics.v1alpha1.SaveMetricsRequest)
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
   * <code>repeated .performance.metrics.v1alpha1.PodMetric metrics = 3 [json_name = "metrics"];</code>
   */
  java.util.List<io.cuemby.performance.metrics.v1alpha1.PodMetric> 
      getMetricsList();
  /**
   * <code>repeated .performance.metrics.v1alpha1.PodMetric metrics = 3 [json_name = "metrics"];</code>
   */
  io.cuemby.performance.metrics.v1alpha1.PodMetric getMetrics(int index);
  /**
   * <code>repeated .performance.metrics.v1alpha1.PodMetric metrics = 3 [json_name = "metrics"];</code>
   */
  int getMetricsCount();
  /**
   * <code>repeated .performance.metrics.v1alpha1.PodMetric metrics = 3 [json_name = "metrics"];</code>
   */
  java.util.List<? extends io.cuemby.performance.metrics.v1alpha1.PodMetricOrBuilder> 
      getMetricsOrBuilderList();
  /**
   * <code>repeated .performance.metrics.v1alpha1.PodMetric metrics = 3 [json_name = "metrics"];</code>
   */
  io.cuemby.performance.metrics.v1alpha1.PodMetricOrBuilder getMetricsOrBuilder(
      int index);
}
