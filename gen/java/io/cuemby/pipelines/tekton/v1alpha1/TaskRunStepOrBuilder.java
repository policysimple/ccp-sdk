// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface TaskRunStepOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.TaskRunStep)
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
   * <code>string message = 2 [json_name = "message"];</code>
   * @return The message.
   */
  java.lang.String getMessage();
  /**
   * <code>string message = 2 [json_name = "message"];</code>
   * @return The bytes for message.
   */
  com.google.protobuf.ByteString
      getMessageBytes();

  /**
   * <code>string reason = 3 [json_name = "reason"];</code>
   * @return The reason.
   */
  java.lang.String getReason();
  /**
   * <code>string reason = 3 [json_name = "reason"];</code>
   * @return The bytes for reason.
   */
  com.google.protobuf.ByteString
      getReasonBytes();

  /**
   * <code>string started_at = 4 [json_name = "startedAt"];</code>
   * @return The startedAt.
   */
  java.lang.String getStartedAt();
  /**
   * <code>string started_at = 4 [json_name = "startedAt"];</code>
   * @return The bytes for startedAt.
   */
  com.google.protobuf.ByteString
      getStartedAtBytes();

  /**
   * <code>string finished_at = 5 [json_name = "finishedAt"];</code>
   * @return The finishedAt.
   */
  java.lang.String getFinishedAt();
  /**
   * <code>string finished_at = 5 [json_name = "finishedAt"];</code>
   * @return The bytes for finishedAt.
   */
  com.google.protobuf.ByteString
      getFinishedAtBytes();

  /**
   * <code>string duration = 6 [json_name = "duration"];</code>
   * @return The duration.
   */
  java.lang.String getDuration();
  /**
   * <code>string duration = 6 [json_name = "duration"];</code>
   * @return The bytes for duration.
   */
  com.google.protobuf.ByteString
      getDurationBytes();

  /**
   * <code>string task_run_step_status = 7 [json_name = "taskRunStepStatus"];</code>
   * @return The taskRunStepStatus.
   */
  java.lang.String getTaskRunStepStatus();
  /**
   * <code>string task_run_step_status = 7 [json_name = "taskRunStepStatus"];</code>
   * @return The bytes for taskRunStepStatus.
   */
  com.google.protobuf.ByteString
      getTaskRunStepStatusBytes();
}
