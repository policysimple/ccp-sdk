// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault_api.proto

package io.cuemby.vault.v1alpha1;

public interface GetSecretsServiceNotificationResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:vault.v1alpha1.GetSecretsServiceNotificationResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.vault.v1alpha1.FirebaseSecret secrets = 1 [json_name = "secrets"];</code>
   * @return Whether the secrets field is set.
   */
  boolean hasSecrets();
  /**
   * <code>.vault.v1alpha1.FirebaseSecret secrets = 1 [json_name = "secrets"];</code>
   * @return The secrets.
   */
  io.cuemby.vault.v1alpha1.FirebaseSecret getSecrets();
  /**
   * <code>.vault.v1alpha1.FirebaseSecret secrets = 1 [json_name = "secrets"];</code>
   */
  io.cuemby.vault.v1alpha1.FirebaseSecretOrBuilder getSecretsOrBuilder();

  /**
   * <code>string error = 2 [json_name = "error"];</code>
   * @return The error.
   */
  java.lang.String getError();
  /**
   * <code>string error = 2 [json_name = "error"];</code>
   * @return The bytes for error.
   */
  com.google.protobuf.ByteString
      getErrorBytes();
}
