// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/quotas/v1alpha1/registry_quotas_api.proto

package io.cuemby.artifacts.quotas.v1alpha1;

public interface ListQuotasRegistryRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.quotas.v1alpha1.ListQuotasRegistryRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string organization_id = 1 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  java.lang.String getOrganizationId();
  /**
   * <code>string organization_id = 1 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  com.google.protobuf.ByteString
      getOrganizationIdBytes();

  /**
   * <code>string project_id = 2 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  java.lang.String getProjectId();
  /**
   * <code>string project_id = 2 [json_name = "projectId"];</code>
   * @return The bytes for projectId.
   */
  com.google.protobuf.ByteString
      getProjectIdBytes();

  /**
   * <code>string repository_name = 3 [json_name = "repositoryName"];</code>
   * @return The repositoryName.
   */
  java.lang.String getRepositoryName();
  /**
   * <code>string repository_name = 3 [json_name = "repositoryName"];</code>
   * @return The bytes for repositoryName.
   */
  com.google.protobuf.ByteString
      getRepositoryNameBytes();

  /**
   * <code>string query = 4 [json_name = "query"];</code>
   * @return The query.
   */
  java.lang.String getQuery();
  /**
   * <code>string query = 4 [json_name = "query"];</code>
   * @return The bytes for query.
   */
  com.google.protobuf.ByteString
      getQueryBytes();

  /**
   * <code>uint32 page = 5 [json_name = "page"];</code>
   * @return The page.
   */
  int getPage();

  /**
   * <code>uint32 page_size = 6 [json_name = "pageSize"];</code>
   * @return The pageSize.
   */
  int getPageSize();

  /**
   * <code>string sort = 7 [json_name = "sort"];</code>
   * @return The sort.
   */
  java.lang.String getSort();
  /**
   * <code>string sort = 7 [json_name = "sort"];</code>
   * @return The bytes for sort.
   */
  com.google.protobuf.ByteString
      getSortBytes();

  /**
   * <code>string reference_id = 8 [json_name = "referenceId"];</code>
   * @return The referenceId.
   */
  java.lang.String getReferenceId();
  /**
   * <code>string reference_id = 8 [json_name = "referenceId"];</code>
   * @return The bytes for referenceId.
   */
  com.google.protobuf.ByteString
      getReferenceIdBytes();
}
