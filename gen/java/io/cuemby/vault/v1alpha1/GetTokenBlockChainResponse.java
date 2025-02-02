// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault_api.proto

package io.cuemby.vault.v1alpha1;

/**
 * Protobuf type {@code vault.v1alpha1.GetTokenBlockChainResponse}
 */
public final class GetTokenBlockChainResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:vault.v1alpha1.GetTokenBlockChainResponse)
    GetTokenBlockChainResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetTokenBlockChainResponse.newBuilder() to construct.
  private GetTokenBlockChainResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetTokenBlockChainResponse() {
    error_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetTokenBlockChainResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetTokenBlockChainResponse(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            io.cuemby.vault.v1alpha1.BlockchainSecret.Builder subBuilder = null;
            if (secret_ != null) {
              subBuilder = secret_.toBuilder();
            }
            secret_ = input.readMessage(io.cuemby.vault.v1alpha1.BlockchainSecret.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(secret_);
              secret_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            error_ = s;
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetTokenBlockChainResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetTokenBlockChainResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.class, io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.Builder.class);
  }

  public static final int SECRET_FIELD_NUMBER = 1;
  private io.cuemby.vault.v1alpha1.BlockchainSecret secret_;
  /**
   * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
   * @return Whether the secret field is set.
   */
  @java.lang.Override
  public boolean hasSecret() {
    return secret_ != null;
  }
  /**
   * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
   * @return The secret.
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.BlockchainSecret getSecret() {
    return secret_ == null ? io.cuemby.vault.v1alpha1.BlockchainSecret.getDefaultInstance() : secret_;
  }
  /**
   * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.BlockchainSecretOrBuilder getSecretOrBuilder() {
    return getSecret();
  }

  public static final int ERROR_FIELD_NUMBER = 2;
  private volatile java.lang.Object error_;
  /**
   * <code>string error = 2 [json_name = "error"];</code>
   * @return The error.
   */
  @java.lang.Override
  public java.lang.String getError() {
    java.lang.Object ref = error_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      error_ = s;
      return s;
    }
  }
  /**
   * <code>string error = 2 [json_name = "error"];</code>
   * @return The bytes for error.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getErrorBytes() {
    java.lang.Object ref = error_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      error_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (secret_ != null) {
      output.writeMessage(1, getSecret());
    }
    if (!getErrorBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, error_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (secret_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getSecret());
    }
    if (!getErrorBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, error_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse)) {
      return super.equals(obj);
    }
    io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse other = (io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse) obj;

    if (hasSecret() != other.hasSecret()) return false;
    if (hasSecret()) {
      if (!getSecret()
          .equals(other.getSecret())) return false;
    }
    if (!getError()
        .equals(other.getError())) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (hasSecret()) {
      hash = (37 * hash) + SECRET_FIELD_NUMBER;
      hash = (53 * hash) + getSecret().hashCode();
    }
    hash = (37 * hash) + ERROR_FIELD_NUMBER;
    hash = (53 * hash) + getError().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code vault.v1alpha1.GetTokenBlockChainResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:vault.v1alpha1.GetTokenBlockChainResponse)
      io.cuemby.vault.v1alpha1.GetTokenBlockChainResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetTokenBlockChainResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetTokenBlockChainResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.class, io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.Builder.class);
    }

    // Construct using io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (secretBuilder_ == null) {
        secret_ = null;
      } else {
        secret_ = null;
        secretBuilder_ = null;
      }
      error_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetTokenBlockChainResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse getDefaultInstanceForType() {
      return io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse build() {
      io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse buildPartial() {
      io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse result = new io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse(this);
      if (secretBuilder_ == null) {
        result.secret_ = secret_;
      } else {
        result.secret_ = secretBuilder_.build();
      }
      result.error_ = error_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse) {
        return mergeFrom((io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse other) {
      if (other == io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse.getDefaultInstance()) return this;
      if (other.hasSecret()) {
        mergeSecret(other.getSecret());
      }
      if (!other.getError().isEmpty()) {
        error_ = other.error_;
        onChanged();
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.vault.v1alpha1.BlockchainSecret secret_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.BlockchainSecret, io.cuemby.vault.v1alpha1.BlockchainSecret.Builder, io.cuemby.vault.v1alpha1.BlockchainSecretOrBuilder> secretBuilder_;
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     * @return Whether the secret field is set.
     */
    public boolean hasSecret() {
      return secretBuilder_ != null || secret_ != null;
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     * @return The secret.
     */
    public io.cuemby.vault.v1alpha1.BlockchainSecret getSecret() {
      if (secretBuilder_ == null) {
        return secret_ == null ? io.cuemby.vault.v1alpha1.BlockchainSecret.getDefaultInstance() : secret_;
      } else {
        return secretBuilder_.getMessage();
      }
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    public Builder setSecret(io.cuemby.vault.v1alpha1.BlockchainSecret value) {
      if (secretBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        secret_ = value;
        onChanged();
      } else {
        secretBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    public Builder setSecret(
        io.cuemby.vault.v1alpha1.BlockchainSecret.Builder builderForValue) {
      if (secretBuilder_ == null) {
        secret_ = builderForValue.build();
        onChanged();
      } else {
        secretBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    public Builder mergeSecret(io.cuemby.vault.v1alpha1.BlockchainSecret value) {
      if (secretBuilder_ == null) {
        if (secret_ != null) {
          secret_ =
            io.cuemby.vault.v1alpha1.BlockchainSecret.newBuilder(secret_).mergeFrom(value).buildPartial();
        } else {
          secret_ = value;
        }
        onChanged();
      } else {
        secretBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    public Builder clearSecret() {
      if (secretBuilder_ == null) {
        secret_ = null;
        onChanged();
      } else {
        secret_ = null;
        secretBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    public io.cuemby.vault.v1alpha1.BlockchainSecret.Builder getSecretBuilder() {
      
      onChanged();
      return getSecretFieldBuilder().getBuilder();
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    public io.cuemby.vault.v1alpha1.BlockchainSecretOrBuilder getSecretOrBuilder() {
      if (secretBuilder_ != null) {
        return secretBuilder_.getMessageOrBuilder();
      } else {
        return secret_ == null ?
            io.cuemby.vault.v1alpha1.BlockchainSecret.getDefaultInstance() : secret_;
      }
    }
    /**
     * <code>.vault.v1alpha1.BlockchainSecret secret = 1 [json_name = "secret"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.BlockchainSecret, io.cuemby.vault.v1alpha1.BlockchainSecret.Builder, io.cuemby.vault.v1alpha1.BlockchainSecretOrBuilder> 
        getSecretFieldBuilder() {
      if (secretBuilder_ == null) {
        secretBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.vault.v1alpha1.BlockchainSecret, io.cuemby.vault.v1alpha1.BlockchainSecret.Builder, io.cuemby.vault.v1alpha1.BlockchainSecretOrBuilder>(
                getSecret(),
                getParentForChildren(),
                isClean());
        secret_ = null;
      }
      return secretBuilder_;
    }

    private java.lang.Object error_ = "";
    /**
     * <code>string error = 2 [json_name = "error"];</code>
     * @return The error.
     */
    public java.lang.String getError() {
      java.lang.Object ref = error_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        error_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string error = 2 [json_name = "error"];</code>
     * @return The bytes for error.
     */
    public com.google.protobuf.ByteString
        getErrorBytes() {
      java.lang.Object ref = error_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        error_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string error = 2 [json_name = "error"];</code>
     * @param value The error to set.
     * @return This builder for chaining.
     */
    public Builder setError(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      error_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string error = 2 [json_name = "error"];</code>
     * @return This builder for chaining.
     */
    public Builder clearError() {
      
      error_ = getDefaultInstance().getError();
      onChanged();
      return this;
    }
    /**
     * <code>string error = 2 [json_name = "error"];</code>
     * @param value The bytes for error to set.
     * @return This builder for chaining.
     */
    public Builder setErrorBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      error_ = value;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:vault.v1alpha1.GetTokenBlockChainResponse)
  }

  // @@protoc_insertion_point(class_scope:vault.v1alpha1.GetTokenBlockChainResponse)
  private static final io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse();
  }

  public static io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetTokenBlockChainResponse>
      PARSER = new com.google.protobuf.AbstractParser<GetTokenBlockChainResponse>() {
    @java.lang.Override
    public GetTokenBlockChainResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetTokenBlockChainResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetTokenBlockChainResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetTokenBlockChainResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.vault.v1alpha1.GetTokenBlockChainResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

