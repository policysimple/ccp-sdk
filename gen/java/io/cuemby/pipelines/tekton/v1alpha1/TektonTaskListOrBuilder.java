// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface TektonTaskListOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.TektonTaskList)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task items = 1 [json_name = "items"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.Task> 
      getItemsList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task items = 1 [json_name = "items"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.Task getItems(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task items = 1 [json_name = "items"];</code>
   */
  int getItemsCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task items = 1 [json_name = "items"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder> 
      getItemsOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task items = 1 [json_name = "items"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder getItemsOrBuilder(
      int index);
}