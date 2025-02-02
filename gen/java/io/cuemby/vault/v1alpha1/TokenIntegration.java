// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault.proto

package io.cuemby.vault.v1alpha1;

/**
 * Protobuf type {@code vault.v1alpha1.TokenIntegration}
 */
public final class TokenIntegration extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:vault.v1alpha1.TokenIntegration)
    TokenIntegrationOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TokenIntegration.newBuilder() to construct.
  private TokenIntegration(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TokenIntegration() {
    organizationId_ = "";
    integrationId_ = "";
    token_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TokenIntegration();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private TokenIntegration(
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
            java.lang.String s = input.readStringRequireUtf8();

            organizationId_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            integrationId_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            token_ = s;
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
    return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_TokenIntegration_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_TokenIntegration_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.vault.v1alpha1.TokenIntegration.class, io.cuemby.vault.v1alpha1.TokenIntegration.Builder.class);
  }

  public static final int ORGANIZATION_ID_FIELD_NUMBER = 1;
  private volatile java.lang.Object organizationId_;
  /**
   * <code>string organization_id = 1 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  @java.lang.Override
  public java.lang.String getOrganizationId() {
    java.lang.Object ref = organizationId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      organizationId_ = s;
      return s;
    }
  }
  /**
   * <code>string organization_id = 1 [json_name = "organizationId"];</code>
   * @return The bytes for organizationId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getOrganizationIdBytes() {
    java.lang.Object ref = organizationId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      organizationId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int INTEGRATION_ID_FIELD_NUMBER = 2;
  private volatile java.lang.Object integrationId_;
  /**
   * <code>string integration_id = 2 [json_name = "integrationId"];</code>
   * @return The integrationId.
   */
  @java.lang.Override
  public java.lang.String getIntegrationId() {
    java.lang.Object ref = integrationId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      integrationId_ = s;
      return s;
    }
  }
  /**
   * <code>string integration_id = 2 [json_name = "integrationId"];</code>
   * @return The bytes for integrationId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getIntegrationIdBytes() {
    java.lang.Object ref = integrationId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      integrationId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int TOKEN_FIELD_NUMBER = 3;
  private volatile java.lang.Object token_;
  /**
   * <code>string token = 3 [json_name = "token"];</code>
   * @return The token.
   */
  @java.lang.Override
  public java.lang.String getToken() {
    java.lang.Object ref = token_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      token_ = s;
      return s;
    }
  }
  /**
   * <code>string token = 3 [json_name = "token"];</code>
   * @return The bytes for token.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getTokenBytes() {
    java.lang.Object ref = token_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      token_ = b;
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
    if (!getOrganizationIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, organizationId_);
    }
    if (!getIntegrationIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, integrationId_);
    }
    if (!getTokenBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, token_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getOrganizationIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, organizationId_);
    }
    if (!getIntegrationIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, integrationId_);
    }
    if (!getTokenBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, token_);
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
    if (!(obj instanceof io.cuemby.vault.v1alpha1.TokenIntegration)) {
      return super.equals(obj);
    }
    io.cuemby.vault.v1alpha1.TokenIntegration other = (io.cuemby.vault.v1alpha1.TokenIntegration) obj;

    if (!getOrganizationId()
        .equals(other.getOrganizationId())) return false;
    if (!getIntegrationId()
        .equals(other.getIntegrationId())) return false;
    if (!getToken()
        .equals(other.getToken())) return false;
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
    hash = (37 * hash) + ORGANIZATION_ID_FIELD_NUMBER;
    hash = (53 * hash) + getOrganizationId().hashCode();
    hash = (37 * hash) + INTEGRATION_ID_FIELD_NUMBER;
    hash = (53 * hash) + getIntegrationId().hashCode();
    hash = (37 * hash) + TOKEN_FIELD_NUMBER;
    hash = (53 * hash) + getToken().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.TokenIntegration parseFrom(
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
  public static Builder newBuilder(io.cuemby.vault.v1alpha1.TokenIntegration prototype) {
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
   * Protobuf type {@code vault.v1alpha1.TokenIntegration}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:vault.v1alpha1.TokenIntegration)
      io.cuemby.vault.v1alpha1.TokenIntegrationOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_TokenIntegration_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_TokenIntegration_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.vault.v1alpha1.TokenIntegration.class, io.cuemby.vault.v1alpha1.TokenIntegration.Builder.class);
    }

    // Construct using io.cuemby.vault.v1alpha1.TokenIntegration.newBuilder()
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
      organizationId_ = "";

      integrationId_ = "";

      token_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_TokenIntegration_descriptor;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.TokenIntegration getDefaultInstanceForType() {
      return io.cuemby.vault.v1alpha1.TokenIntegration.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.TokenIntegration build() {
      io.cuemby.vault.v1alpha1.TokenIntegration result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.TokenIntegration buildPartial() {
      io.cuemby.vault.v1alpha1.TokenIntegration result = new io.cuemby.vault.v1alpha1.TokenIntegration(this);
      result.organizationId_ = organizationId_;
      result.integrationId_ = integrationId_;
      result.token_ = token_;
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
      if (other instanceof io.cuemby.vault.v1alpha1.TokenIntegration) {
        return mergeFrom((io.cuemby.vault.v1alpha1.TokenIntegration)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.vault.v1alpha1.TokenIntegration other) {
      if (other == io.cuemby.vault.v1alpha1.TokenIntegration.getDefaultInstance()) return this;
      if (!other.getOrganizationId().isEmpty()) {
        organizationId_ = other.organizationId_;
        onChanged();
      }
      if (!other.getIntegrationId().isEmpty()) {
        integrationId_ = other.integrationId_;
        onChanged();
      }
      if (!other.getToken().isEmpty()) {
        token_ = other.token_;
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
      io.cuemby.vault.v1alpha1.TokenIntegration parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.vault.v1alpha1.TokenIntegration) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object organizationId_ = "";
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return The organizationId.
     */
    public java.lang.String getOrganizationId() {
      java.lang.Object ref = organizationId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        organizationId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return The bytes for organizationId.
     */
    public com.google.protobuf.ByteString
        getOrganizationIdBytes() {
      java.lang.Object ref = organizationId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        organizationId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @param value The organizationId to set.
     * @return This builder for chaining.
     */
    public Builder setOrganizationId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      organizationId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearOrganizationId() {
      
      organizationId_ = getDefaultInstance().getOrganizationId();
      onChanged();
      return this;
    }
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @param value The bytes for organizationId to set.
     * @return This builder for chaining.
     */
    public Builder setOrganizationIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      organizationId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object integrationId_ = "";
    /**
     * <code>string integration_id = 2 [json_name = "integrationId"];</code>
     * @return The integrationId.
     */
    public java.lang.String getIntegrationId() {
      java.lang.Object ref = integrationId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        integrationId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string integration_id = 2 [json_name = "integrationId"];</code>
     * @return The bytes for integrationId.
     */
    public com.google.protobuf.ByteString
        getIntegrationIdBytes() {
      java.lang.Object ref = integrationId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        integrationId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string integration_id = 2 [json_name = "integrationId"];</code>
     * @param value The integrationId to set.
     * @return This builder for chaining.
     */
    public Builder setIntegrationId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      integrationId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string integration_id = 2 [json_name = "integrationId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearIntegrationId() {
      
      integrationId_ = getDefaultInstance().getIntegrationId();
      onChanged();
      return this;
    }
    /**
     * <code>string integration_id = 2 [json_name = "integrationId"];</code>
     * @param value The bytes for integrationId to set.
     * @return This builder for chaining.
     */
    public Builder setIntegrationIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      integrationId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object token_ = "";
    /**
     * <code>string token = 3 [json_name = "token"];</code>
     * @return The token.
     */
    public java.lang.String getToken() {
      java.lang.Object ref = token_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        token_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string token = 3 [json_name = "token"];</code>
     * @return The bytes for token.
     */
    public com.google.protobuf.ByteString
        getTokenBytes() {
      java.lang.Object ref = token_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        token_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string token = 3 [json_name = "token"];</code>
     * @param value The token to set.
     * @return This builder for chaining.
     */
    public Builder setToken(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      token_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string token = 3 [json_name = "token"];</code>
     * @return This builder for chaining.
     */
    public Builder clearToken() {
      
      token_ = getDefaultInstance().getToken();
      onChanged();
      return this;
    }
    /**
     * <code>string token = 3 [json_name = "token"];</code>
     * @param value The bytes for token to set.
     * @return This builder for chaining.
     */
    public Builder setTokenBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      token_ = value;
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


    // @@protoc_insertion_point(builder_scope:vault.v1alpha1.TokenIntegration)
  }

  // @@protoc_insertion_point(class_scope:vault.v1alpha1.TokenIntegration)
  private static final io.cuemby.vault.v1alpha1.TokenIntegration DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.vault.v1alpha1.TokenIntegration();
  }

  public static io.cuemby.vault.v1alpha1.TokenIntegration getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TokenIntegration>
      PARSER = new com.google.protobuf.AbstractParser<TokenIntegration>() {
    @java.lang.Override
    public TokenIntegration parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new TokenIntegration(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<TokenIntegration> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TokenIntegration> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.vault.v1alpha1.TokenIntegration getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

