// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/instance/v1alpha1/instance.proto

package io.cuemby.pipelines.instance.v1alpha1;

public interface TypeGitProviderOrBuilder extends
    // @@protoc_insertion_point(interface_extends:pipelines.instance.v1alpha1.TypeGitProvider)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string ssh_url = 1 [json_name = "sshUrl"];</code>
   * @return The sshUrl.
   */
  java.lang.String getSshUrl();
  /**
   * <code>string ssh_url = 1 [json_name = "sshUrl"];</code>
   * @return The bytes for sshUrl.
   */
  com.google.protobuf.ByteString
      getSshUrlBytes();

  /**
   * <code>string branch = 2 [json_name = "branch"];</code>
   * @return The branch.
   */
  java.lang.String getBranch();
  /**
   * <code>string branch = 2 [json_name = "branch"];</code>
   * @return The bytes for branch.
   */
  com.google.protobuf.ByteString
      getBranchBytes();

  /**
   * <code>string ssh_private_key = 3 [json_name = "sshPrivateKey"];</code>
   * @return The sshPrivateKey.
   */
  java.lang.String getSshPrivateKey();
  /**
   * <code>string ssh_private_key = 3 [json_name = "sshPrivateKey"];</code>
   * @return The bytes for sshPrivateKey.
   */
  com.google.protobuf.ByteString
      getSshPrivateKeyBytes();
}
