// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/artifacts/v1alpha1/registry_artifacts.proto

package io.cuemby.artifacts.artifacts.v1alpha1;

public interface TagsOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.artifacts.v1alpha1.Tags)
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
   * <code>string pull_time = 2 [json_name = "pullTime"];</code>
   * @return The pullTime.
   */
  java.lang.String getPullTime();
  /**
   * <code>string pull_time = 2 [json_name = "pullTime"];</code>
   * @return The bytes for pullTime.
   */
  com.google.protobuf.ByteString
      getPullTimeBytes();

  /**
   * <code>string push_time = 3 [json_name = "pushTime"];</code>
   * @return The pushTime.
   */
  java.lang.String getPushTime();
  /**
   * <code>string push_time = 3 [json_name = "pushTime"];</code>
   * @return The bytes for pushTime.
   */
  com.google.protobuf.ByteString
      getPushTimeBytes();

  /**
   * <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
   * @return The storageLimit.
   */
  int getStorageLimit();
}