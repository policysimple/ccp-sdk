// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault.proto

package io.cuemby.vault.v1alpha1;

public interface SecretDataOrBuilder extends
    // @@protoc_insertion_point(interface_extends:vault.v1alpha1.SecretData)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>map&lt;string, string&gt; data = 1 [json_name = "data"];</code>
   */
  int getDataCount();
  /**
   * <code>map&lt;string, string&gt; data = 1 [json_name = "data"];</code>
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
   * <code>map&lt;string, string&gt; data = 1 [json_name = "data"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getDataMap();
  /**
   * <code>map&lt;string, string&gt; data = 1 [json_name = "data"];</code>
   */

  java.lang.String getDataOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; data = 1 [json_name = "data"];</code>
   */

  java.lang.String getDataOrThrow(
      java.lang.String key);
}