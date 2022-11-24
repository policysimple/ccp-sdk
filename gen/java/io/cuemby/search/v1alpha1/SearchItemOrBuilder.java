// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: search/v1alpha1/search.proto

package io.cuemby.search.v1alpha1;

public interface SearchItemOrBuilder extends
    // @@protoc_insertion_point(interface_extends:search.v1alpha1.SearchItem)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string object_id = 1 [json_name = "objectId"];</code>
   * @return The objectId.
   */
  java.lang.String getObjectId();
  /**
   * <code>string object_id = 1 [json_name = "objectId"];</code>
   * @return The bytes for objectId.
   */
  com.google.protobuf.ByteString
      getObjectIdBytes();

  /**
   * <code>string type = 2 [json_name = "type"];</code>
   * @return The type.
   */
  java.lang.String getType();
  /**
   * <code>string type = 2 [json_name = "type"];</code>
   * @return The bytes for type.
   */
  com.google.protobuf.ByteString
      getTypeBytes();

  /**
   * <code>string name = 3 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 3 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string org_id = 4 [json_name = "orgId"];</code>
   * @return The orgId.
   */
  java.lang.String getOrgId();
  /**
   * <code>string org_id = 4 [json_name = "orgId"];</code>
   * @return The bytes for orgId.
   */
  com.google.protobuf.ByteString
      getOrgIdBytes();

  /**
   * <code>string description = 5 [json_name = "description"];</code>
   * @return The description.
   */
  java.lang.String getDescription();
  /**
   * <code>string description = 5 [json_name = "description"];</code>
   * @return The bytes for description.
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <code>string metadata = 6 [json_name = "metadata"];</code>
   * @return The metadata.
   */
  java.lang.String getMetadata();
  /**
   * <code>string metadata = 6 [json_name = "metadata"];</code>
   * @return The bytes for metadata.
   */
  com.google.protobuf.ByteString
      getMetadataBytes();

  /**
   * <code>map&lt;string, string&gt; data = 7 [json_name = "data"];</code>
   */
  int getDataCount();
  /**
   * <code>map&lt;string, string&gt; data = 7 [json_name = "data"];</code>
   */
  boolean containsData(
      java.lang.String key);
  /**
   * Use {@link #getDataMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getData();
  /**
   * <code>map&lt;string, string&gt; data = 7 [json_name = "data"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getDataMap();
  /**
   * <code>map&lt;string, string&gt; data = 7 [json_name = "data"];</code>
   */

  java.lang.String getDataOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; data = 7 [json_name = "data"];</code>
   */

  java.lang.String getDataOrThrow(
      java.lang.String key);
}
