// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects_api.proto

package io.cuemby.artifacts.projects.v1alpha1;

public interface UpdateProjectRegistryResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.projects.v1alpha1.UpdateProjectRegistryResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
   * @return Whether the projectRegistry field is set.
   */
  boolean hasProjectRegistry();
  /**
   * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
   * @return The projectRegistry.
   */
  io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry getProjectRegistry();
  /**
   * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
   */
  io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistryOrBuilder getProjectRegistryOrBuilder();

  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The status.
   */
  java.lang.String getStatus();
  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  com.google.protobuf.ByteString
      getStatusBytes();
}