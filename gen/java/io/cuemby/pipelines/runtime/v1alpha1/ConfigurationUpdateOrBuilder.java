// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface ConfigurationUpdateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.ConfigurationUpdate)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  java.util.List<io.cuemby.pipelines.runtime.v1alpha1.Env> 
      getEnvsList();
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.Env getEnvs(int index);
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  int getEnvsCount();
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder> 
      getEnvsOrBuilderList();
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder getEnvsOrBuilder(
      int index);

  /**
   * <code>string instance_type = 2 [json_name = "instanceType"];</code>
   * @return The instanceType.
   */
  java.lang.String getInstanceType();
  /**
   * <code>string instance_type = 2 [json_name = "instanceType"];</code>
   * @return The bytes for instanceType.
   */
  com.google.protobuf.ByteString
      getInstanceTypeBytes();
}
