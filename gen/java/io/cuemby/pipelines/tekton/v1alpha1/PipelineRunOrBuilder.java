// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface PipelineRunOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.PipelineRun)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string label = 2 [json_name = "label"];</code>
   * @return The label.
   */
  java.lang.String getLabel();
  /**
   * <code>string label = 2 [json_name = "label"];</code>
   * @return The bytes for label.
   */
  com.google.protobuf.ByteString
      getLabelBytes();

  /**
   * <code>string namespace = 3 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  java.lang.String getNamespace();
  /**
   * <code>string namespace = 3 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  com.google.protobuf.ByteString
      getNamespaceBytes();

  /**
   * <code>string message = 4 [json_name = "message"];</code>
   * @return The message.
   */
  java.lang.String getMessage();
  /**
   * <code>string message = 4 [json_name = "message"];</code>
   * @return The bytes for message.
   */
  com.google.protobuf.ByteString
      getMessageBytes();

  /**
   * <code>string reason = 5 [json_name = "reason"];</code>
   * @return The reason.
   */
  java.lang.String getReason();
  /**
   * <code>string reason = 5 [json_name = "reason"];</code>
   * @return The bytes for reason.
   */
  com.google.protobuf.ByteString
      getReasonBytes();

  /**
   * <code>string started_at = 6 [json_name = "startedAt"];</code>
   * @return The startedAt.
   */
  java.lang.String getStartedAt();
  /**
   * <code>string started_at = 6 [json_name = "startedAt"];</code>
   * @return The bytes for startedAt.
   */
  com.google.protobuf.ByteString
      getStartedAtBytes();

  /**
   * <code>string finished_at = 7 [json_name = "finishedAt"];</code>
   * @return The finishedAt.
   */
  java.lang.String getFinishedAt();
  /**
   * <code>string finished_at = 7 [json_name = "finishedAt"];</code>
   * @return The bytes for finishedAt.
   */
  com.google.protobuf.ByteString
      getFinishedAtBytes();

  /**
   * <code>string duration = 8 [json_name = "duration"];</code>
   * @return The duration.
   */
  java.lang.String getDuration();
  /**
   * <code>string duration = 8 [json_name = "duration"];</code>
   * @return The bytes for duration.
   */
  com.google.protobuf.ByteString
      getDurationBytes();

  /**
   * <code>string pipeline_run_status = 9 [json_name = "pipelineRunStatus"];</code>
   * @return The pipelineRunStatus.
   */
  java.lang.String getPipelineRunStatus();
  /**
   * <code>string pipeline_run_status = 9 [json_name = "pipelineRunStatus"];</code>
   * @return The bytes for pipelineRunStatus.
   */
  com.google.protobuf.ByteString
      getPipelineRunStatusBytes();

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.TaskRun task_run = 10 [json_name = "taskRun"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.TaskRun> 
      getTaskRunList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.TaskRun task_run = 10 [json_name = "taskRun"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskRun getTaskRun(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.TaskRun task_run = 10 [json_name = "taskRun"];</code>
   */
  int getTaskRunCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.TaskRun task_run = 10 [json_name = "taskRun"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.TaskRunOrBuilder> 
      getTaskRunOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.TaskRun task_run = 10 [json_name = "taskRun"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskRunOrBuilder getTaskRunOrBuilder(
      int index);
}