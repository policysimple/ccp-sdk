// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface CustomPipelineListOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.CustomPipelineList)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.CustomPipeline items = 1 [json_name = "items"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.CustomPipeline> 
      getItemsList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.CustomPipeline items = 1 [json_name = "items"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.CustomPipeline getItems(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.CustomPipeline items = 1 [json_name = "items"];</code>
   */
  int getItemsCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.CustomPipeline items = 1 [json_name = "items"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.CustomPipelineOrBuilder> 
      getItemsOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.CustomPipeline items = 1 [json_name = "items"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.CustomPipelineOrBuilder getItemsOrBuilder(
      int index);
}