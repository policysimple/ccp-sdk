// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface TektonTaskOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.TektonTask)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.Task> 
      getTaskList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.Task getTask(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
   */
  int getTaskCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder> 
      getTaskOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder getTaskOrBuilder(
      int index);

  /**
   * <code>int32 order = 2 [json_name = "order"];</code>
   * @return The order.
   */
  int getOrder();
}
