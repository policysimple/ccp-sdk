// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/metrics/v1alpha1/metrics_api.proto

package io.cuemby.performance.metrics.v1alpha1;

public interface GetTektonMetricsRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.metrics.v1alpha1.GetTektonMetricsRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
   * @return The namePipelineRun.
   */
  java.lang.String getNamePipelineRun();
  /**
   * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
   * @return The bytes for namePipelineRun.
   */
  com.google.protobuf.ByteString
      getNamePipelineRunBytes();

  /**
   * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
   * @return Whether the range field is set.
   */
  boolean hasRange();
  /**
   * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
   * @return The range.
   */
  io.cuemby.performance.metrics.v1alpha1.Range getRange();
  /**
   * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
   */
  io.cuemby.performance.metrics.v1alpha1.RangeOrBuilder getRangeOrBuilder();

  /**
   * <code>int32 page = 3 [json_name = "page"];</code>
   * @return The page.
   */
  int getPage();

  /**
   * <code>int32 size = 4 [json_name = "size"];</code>
   * @return The size.
   */
  int getSize();
}
