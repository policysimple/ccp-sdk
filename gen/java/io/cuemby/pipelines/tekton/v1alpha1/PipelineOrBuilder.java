// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

public interface PipelineOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.tekton.v1alpha1.Pipeline)
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
   * <code>string type_meta_kind = 4 [json_name = "typeMetaKind"];</code>
   * @return The typeMetaKind.
   */
  java.lang.String getTypeMetaKind();
  /**
   * <code>string type_meta_kind = 4 [json_name = "typeMetaKind"];</code>
   * @return The bytes for typeMetaKind.
   */
  com.google.protobuf.ByteString
      getTypeMetaKindBytes();

  /**
   * <code>string type_meta_api_version = 5 [json_name = "typeMetaApiVersion"];</code>
   * @return The typeMetaApiVersion.
   */
  java.lang.String getTypeMetaApiVersion();
  /**
   * <code>string type_meta_api_version = 5 [json_name = "typeMetaApiVersion"];</code>
   * @return The bytes for typeMetaApiVersion.
   */
  com.google.protobuf.ByteString
      getTypeMetaApiVersionBytes();

  /**
   * <code>string object_meta_name = 6 [json_name = "objectMetaName"];</code>
   * @return The objectMetaName.
   */
  java.lang.String getObjectMetaName();
  /**
   * <code>string object_meta_name = 6 [json_name = "objectMetaName"];</code>
   * @return The bytes for objectMetaName.
   */
  com.google.protobuf.ByteString
      getObjectMetaNameBytes();

  /**
   * <code>string object_meta_namespace = 7 [json_name = "objectMetaNamespace"];</code>
   * @return The objectMetaNamespace.
   */
  java.lang.String getObjectMetaNamespace();
  /**
   * <code>string object_meta_namespace = 7 [json_name = "objectMetaNamespace"];</code>
   * @return The bytes for objectMetaNamespace.
   */
  com.google.protobuf.ByteString
      getObjectMetaNamespaceBytes();

  /**
   * <code>string spec_workspaces_name = 8 [json_name = "specWorkspacesName"];</code>
   * @return The specWorkspacesName.
   */
  java.lang.String getSpecWorkspacesName();
  /**
   * <code>string spec_workspaces_name = 8 [json_name = "specWorkspacesName"];</code>
   * @return The bytes for specWorkspacesName.
   */
  com.google.protobuf.ByteString
      getSpecWorkspacesNameBytes();

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.Params> 
      getParamsList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.Params getParams(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
   */
  int getParamsCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.ParamsOrBuilder> 
      getParamsOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.ParamsOrBuilder getParamsOrBuilder(
      int index);

  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
   */
  java.util.List<io.cuemby.pipelines.tekton.v1alpha1.Task> 
      getTasksList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.Task getTasks(int index);
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
   */
  int getTasksCount();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
   */
  java.util.List<? extends io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder> 
      getTasksOrBuilderList();
  /**
   * <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
   */
  io.cuemby.pipelines.tekton.v1alpha1.TaskOrBuilder getTasksOrBuilder(
      int index);

  /**
   * <code>string status_type = 11 [json_name = "statusType"];</code>
   * @return The statusType.
   */
  java.lang.String getStatusType();
  /**
   * <code>string status_type = 11 [json_name = "statusType"];</code>
   * @return The bytes for statusType.
   */
  com.google.protobuf.ByteString
      getStatusTypeBytes();

  /**
   * <code>bool active = 12 [json_name = "active"];</code>
   * @return The active.
   */
  boolean getActive();
}
