// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton_api.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface GetPipelineRunResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.GetPipelineRunResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.pipelines.tekton.v1alpha1.PipelineRun pipeline_run = 1 [json_name = "pipelineRun"];</code>
   * @return Whether the pipelineRun field is set.
   */
  boolean hasPipelineRun();
  /**
   * <code>.pipelines.tekton.v1alpha1.PipelineRun pipeline_run = 1 [json_name = "pipelineRun"];</code>
   * @return The pipelineRun.
   */
  io.cuemby.pipelines.tekton.v1alpha1.PipelineRun getPipelineRun();
  /**
   * <code>.pipelines.tekton.v1alpha1.PipelineRun pipeline_run = 1 [json_name = "pipelineRun"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.PipelineRunOrBuilder getPipelineRunOrBuilder();

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