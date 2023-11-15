// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

public interface RepositoryOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.runtime.v1alpha1.Repository)
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
   * <code>string full_name = 2 [json_name = "fullName"];</code>
   * @return The fullName.
   */
  java.lang.String getFullName();
  /**
   * <code>string full_name = 2 [json_name = "fullName"];</code>
   * @return The bytes for fullName.
   */
  com.google.protobuf.ByteString
      getFullNameBytes();

  /**
   * <code>string description = 3 [json_name = "description"];</code>
   * @return The description.
   */
  java.lang.String getDescription();
  /**
   * <code>string description = 3 [json_name = "description"];</code>
   * @return The bytes for description.
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <code>bool fork = 4 [json_name = "fork"];</code>
   * @return The fork.
   */
  boolean getFork();

  /**
   * <code>string clone_url = 5 [json_name = "cloneUrl"];</code>
   * @return The cloneUrl.
   */
  java.lang.String getCloneUrl();
  /**
   * <code>string clone_url = 5 [json_name = "cloneUrl"];</code>
   * @return The bytes for cloneUrl.
   */
  com.google.protobuf.ByteString
      getCloneUrlBytes();

  /**
   * <code>bool private = 6 [json_name = "private"];</code>
   * @return The private.
   */
  boolean getPrivate();

  /**
   * <code>.pipelines.runtime.v1alpha1.Branch branch = 7 [json_name = "branch"];</code>
   * @return Whether the branch field is set.
   */
  boolean hasBranch();
  /**
   * <code>.pipelines.runtime.v1alpha1.Branch branch = 7 [json_name = "branch"];</code>
   * @return The branch.
   */
  io.cuemby.pipelines.runtime.v1alpha1.Branch getBranch();
  /**
   * <code>.pipelines.runtime.v1alpha1.Branch branch = 7 [json_name = "branch"];</code>
   */
  io.cuemby.pipelines.runtime.v1alpha1.BranchOrBuilder getBranchOrBuilder();
}