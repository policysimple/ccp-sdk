// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface TaskRunOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.TaskRun)
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
   * <code>string task_run_status = 4 [json_name = "taskRunStatus"];</code>
   * @return The taskRunStatus.
   */
  java.lang.String getTaskRunStatus();
  /**
   * <code>string task_run_status = 4 [json_name = "taskRunStatus"];</code>
   * @return The bytes for taskRunStatus.
   */
  com.google.protobuf.ByteString
      getTaskRunStatusBytes();
}
