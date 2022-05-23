// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/users/v1alpha1/registry_users.proto

package io.cuemby.artifacts.users.v1alpha1;

public interface UsersRegistryOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.users.v1alpha1.UsersRegistry)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  java.lang.String getId();
  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The bytes for id.
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  int getOrganizationId();

  /**
   * <code>uint32 project_id = 3 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  int getProjectId();

  /**
   * <code>string environment_id = 4 [json_name = "environmentId"];</code>
   * @return The environmentId.
   */
  java.lang.String getEnvironmentId();
  /**
   * <code>string environment_id = 4 [json_name = "environmentId"];</code>
   * @return The bytes for environmentId.
   */
  com.google.protobuf.ByteString
      getEnvironmentIdBytes();

  /**
   * <code>bool active = 6 [json_name = "active"];</code>
   * @return The active.
   */
  boolean getActive();

  /**
   * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
   * @return Whether the harbor field is set.
   */
  boolean hasHarbor();
  /**
   * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
   * @return The harbor.
   */
  io.cuemby.artifacts.users.v1alpha1.Harbor getHarbor();
  /**
   * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
   */
  io.cuemby.artifacts.users.v1alpha1.HarborOrBuilder getHarborOrBuilder();
}