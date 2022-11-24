// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: search/v1alpha1/search_api.proto

package io.cuemby.Search.v1alpha1;

public interface SearchRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:search.v1alpha1.SearchRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>uint32 size = 1 [json_name = "size"];</code>
   * @return The size.
   */
  int getSize();

  /**
   * <code>uint32 page = 2 [json_name = "page"];</code>
   * @return The page.
   */
  int getPage();

  /**
   * <code>string org_id = 3 [json_name = "orgId"];</code>
   * @return The orgId.
   */
  java.lang.String getOrgId();
  /**
   * <code>string org_id = 3 [json_name = "orgId"];</code>
   * @return The bytes for orgId.
   */
  com.google.protobuf.ByteString
      getOrgIdBytes();

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
}
