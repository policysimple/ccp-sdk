// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/quotas/v1alpha1/registry_quotas_api.proto

package io.cuemby.artifacts.quotas.v1alpha1;

public interface ListQuotaArtifactRegistryRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:artifacts.quotas.v1alpha1.ListQuotaArtifactRegistryRequest)
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
   * <code>string organization_id = 2 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  java.lang.String getOrganizationId();
  /**
   * <code>string organization_id = 2 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  com.google.protobuf.ByteString
      getOrganizationIdBytes();

  /**
   * <code>string project_id = 3 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  java.lang.String getProjectId();
  /**
   * <code>string project_id = 3 [json_name = "projectId"];</code>
   * @return The bytes for projectId.
   */
  com.google.protobuf.ByteString
      getProjectIdBytes();

  /**
   * <code>string repository_name = 4 [json_name = "repositoryName"];</code>
   * @return The repositoryName.
   */
  java.lang.String getRepositoryName();
  /**
   * <code>string repository_name = 4 [json_name = "repositoryName"];</code>
   * @return The bytes for repositoryName.
   */
  com.google.protobuf.ByteString
      getRepositoryNameBytes();

  /**
   * <code>string query = 5 [json_name = "query"];</code>
   * @return The query.
   */
  java.lang.String getQuery();
  /**
   * <code>string query = 5 [json_name = "query"];</code>
   * @return The bytes for query.
   */
  com.google.protobuf.ByteString
      getQueryBytes();

  /**
   * <code>uint32 page = 6 [json_name = "page"];</code>
   * @return The page.
   */
  int getPage();

  /**
   * <code>uint32 page_size = 7 [json_name = "pageSize"];</code>
   * @return The pageSize.
   */
  int getPageSize();

  /**
   * <code>string sort = 8 [json_name = "sort"];</code>
   * @return The sort.
   */
  java.lang.String getSort();
  /**
   * <code>string sort = 8 [json_name = "sort"];</code>
   * @return The bytes for sort.
   */
  com.google.protobuf.ByteString
      getSortBytes();

  /**
   * <code>string reference_id = 9 [json_name = "referenceId"];</code>
   * @return The referenceId.
   */
  java.lang.String getReferenceId();
  /**
   * <code>string reference_id = 9 [json_name = "referenceId"];</code>
   * @return The bytes for referenceId.
   */
  com.google.protobuf.ByteString
      getReferenceIdBytes();

  /**
   * <code>string project_name = 10 [json_name = "projectName"];</code>
   * @return The projectName.
   */
  java.lang.String getProjectName();
  /**
   * <code>string project_name = 10 [json_name = "projectName"];</code>
   * @return The bytes for projectName.
   */
  com.google.protobuf.ByteString
      getProjectNameBytes();

  /**
   * <code>bool with_tag = 11 [json_name = "withTag"];</code>
   * @return The withTag.
   */
  boolean getWithTag();

  /**
   * <code>bool with_label = 12 [json_name = "withLabel"];</code>
   * @return The withLabel.
   */
  boolean getWithLabel();

  /**
   * <code>bool with_scan_overview = 13 [json_name = "withScanOverview"];</code>
   * @return The withScanOverview.
   */
  boolean getWithScanOverview();

  /**
   * <code>bool with_signature = 14 [json_name = "withSignature"];</code>
   * @return The withSignature.
   */
  boolean getWithSignature();

  /**
   * <code>bool with_immutable_status = 15 [json_name = "withImmutableStatus"];</code>
   * @return The withImmutableStatus.
   */
  boolean getWithImmutableStatus();

  /**
   * <code>bool with_accessory = 16 [json_name = "withAccessory"];</code>
   * @return The withAccessory.
   */
  boolean getWithAccessory();
}
