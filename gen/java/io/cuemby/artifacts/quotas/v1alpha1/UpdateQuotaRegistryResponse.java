// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/quotas/v1alpha1/registry_quotas_api.proto

package io.cuemby.artifacts.quotas.v1alpha1;

/**
 * Protobuf type {@code artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse}
 */
public final class UpdateQuotaRegistryResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)
    UpdateQuotaRegistryResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use UpdateQuotaRegistryResponse.newBuilder() to construct.
  private UpdateQuotaRegistryResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private UpdateQuotaRegistryResponse() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new UpdateQuotaRegistryResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private UpdateQuotaRegistryResponse(
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
            io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.Builder subBuilder = null;
            if (quotaRegistry_ != null) {
              subBuilder = quotaRegistry_.toBuilder();
            }
            quotaRegistry_ = input.readMessage(io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(quotaRegistry_);
              quotaRegistry_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            status_ = s;
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
    return io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProtoAPI.internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProtoAPI.internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.class, io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.Builder.class);
  }

  public static final int QUOTA_REGISTRY_FIELD_NUMBER = 1;
  private io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry quotaRegistry_;
  /**
   * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
   * @return Whether the quotaRegistry field is set.
   */
  @java.lang.Override
  public boolean hasQuotaRegistry() {
    return quotaRegistry_ != null;
  }
  /**
   * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
   * @return The quotaRegistry.
   */
  @java.lang.Override
  public io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry getQuotaRegistry() {
    return quotaRegistry_ == null ? io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.getDefaultInstance() : quotaRegistry_;
  }
  /**
   * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
   */
  @java.lang.Override
  public io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistryOrBuilder getQuotaRegistryOrBuilder() {
    return getQuotaRegistry();
  }

  public static final int STATUS_FIELD_NUMBER = 2;
  private volatile java.lang.Object status_;
  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The status.
   */
  @java.lang.Override
  public java.lang.String getStatus() {
    java.lang.Object ref = status_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      status_ = s;
      return s;
    }
  }
  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getStatusBytes() {
    java.lang.Object ref = status_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      status_ = b;
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
    if (quotaRegistry_ != null) {
      output.writeMessage(1, getQuotaRegistry());
    }
    if (!getStatusBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, status_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (quotaRegistry_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getQuotaRegistry());
    }
    if (!getStatusBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, status_);
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
    if (!(obj instanceof io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse other = (io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse) obj;

    if (hasQuotaRegistry() != other.hasQuotaRegistry()) return false;
    if (hasQuotaRegistry()) {
      if (!getQuotaRegistry()
          .equals(other.getQuotaRegistry())) return false;
    }
    if (!getStatus()
        .equals(other.getStatus())) return false;
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
    if (hasQuotaRegistry()) {
      hash = (37 * hash) + QUOTA_REGISTRY_FIELD_NUMBER;
      hash = (53 * hash) + getQuotaRegistry().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse prototype) {
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
   * Protobuf type {@code artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)
      io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProtoAPI.internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProtoAPI.internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.class, io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.Builder.class);
    }

    // Construct using io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.newBuilder()
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
      if (quotaRegistryBuilder_ == null) {
        quotaRegistry_ = null;
      } else {
        quotaRegistry_ = null;
        quotaRegistryBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.quotas.v1alpha1.RegistryQuotasProtoAPI.internal_static_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse getDefaultInstanceForType() {
      return io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse build() {
      io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse buildPartial() {
      io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse result = new io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse(this);
      if (quotaRegistryBuilder_ == null) {
        result.quotaRegistry_ = quotaRegistry_;
      } else {
        result.quotaRegistry_ = quotaRegistryBuilder_.build();
      }
      result.status_ = status_;
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
      if (other instanceof io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse) {
        return mergeFrom((io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse other) {
      if (other == io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse.getDefaultInstance()) return this;
      if (other.hasQuotaRegistry()) {
        mergeQuotaRegistry(other.getQuotaRegistry());
      }
      if (!other.getStatus().isEmpty()) {
        status_ = other.status_;
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
      io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry quotaRegistry_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry, io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.Builder, io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistryOrBuilder> quotaRegistryBuilder_;
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     * @return Whether the quotaRegistry field is set.
     */
    public boolean hasQuotaRegistry() {
      return quotaRegistryBuilder_ != null || quotaRegistry_ != null;
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     * @return The quotaRegistry.
     */
    public io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry getQuotaRegistry() {
      if (quotaRegistryBuilder_ == null) {
        return quotaRegistry_ == null ? io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.getDefaultInstance() : quotaRegistry_;
      } else {
        return quotaRegistryBuilder_.getMessage();
      }
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    public Builder setQuotaRegistry(io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry value) {
      if (quotaRegistryBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        quotaRegistry_ = value;
        onChanged();
      } else {
        quotaRegistryBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    public Builder setQuotaRegistry(
        io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.Builder builderForValue) {
      if (quotaRegistryBuilder_ == null) {
        quotaRegistry_ = builderForValue.build();
        onChanged();
      } else {
        quotaRegistryBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    public Builder mergeQuotaRegistry(io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry value) {
      if (quotaRegistryBuilder_ == null) {
        if (quotaRegistry_ != null) {
          quotaRegistry_ =
            io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.newBuilder(quotaRegistry_).mergeFrom(value).buildPartial();
        } else {
          quotaRegistry_ = value;
        }
        onChanged();
      } else {
        quotaRegistryBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    public Builder clearQuotaRegistry() {
      if (quotaRegistryBuilder_ == null) {
        quotaRegistry_ = null;
        onChanged();
      } else {
        quotaRegistry_ = null;
        quotaRegistryBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    public io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.Builder getQuotaRegistryBuilder() {
      
      onChanged();
      return getQuotaRegistryFieldBuilder().getBuilder();
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    public io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistryOrBuilder getQuotaRegistryOrBuilder() {
      if (quotaRegistryBuilder_ != null) {
        return quotaRegistryBuilder_.getMessageOrBuilder();
      } else {
        return quotaRegistry_ == null ?
            io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.getDefaultInstance() : quotaRegistry_;
      }
    }
    /**
     * <code>.artifacts.quotas.v1alpha1.QuotasRegistry quota_registry = 1 [json_name = "quotaRegistry"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry, io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.Builder, io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistryOrBuilder> 
        getQuotaRegistryFieldBuilder() {
      if (quotaRegistryBuilder_ == null) {
        quotaRegistryBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry, io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistry.Builder, io.cuemby.artifacts.quotas.v1alpha1.QuotasRegistryOrBuilder>(
                getQuotaRegistry(),
                getParentForChildren(),
                isClean());
        quotaRegistry_ = null;
      }
      return quotaRegistryBuilder_;
    }

    private java.lang.Object status_ = "";
    /**
     * <code>string status = 2 [json_name = "status"];</code>
     * @return The status.
     */
    public java.lang.String getStatus() {
      java.lang.Object ref = status_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        status_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string status = 2 [json_name = "status"];</code>
     * @return The bytes for status.
     */
    public com.google.protobuf.ByteString
        getStatusBytes() {
      java.lang.Object ref = status_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        status_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string status = 2 [json_name = "status"];</code>
     * @param value The status to set.
     * @return This builder for chaining.
     */
    public Builder setStatus(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      status_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string status = 2 [json_name = "status"];</code>
     * @return This builder for chaining.
     */
    public Builder clearStatus() {
      
      status_ = getDefaultInstance().getStatus();
      onChanged();
      return this;
    }
    /**
     * <code>string status = 2 [json_name = "status"];</code>
     * @param value The bytes for status to set.
     * @return This builder for chaining.
     */
    public Builder setStatusBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      status_ = value;
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


    // @@protoc_insertion_point(builder_scope:artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)
  }

  // @@protoc_insertion_point(class_scope:artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse)
  private static final io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse();
  }

  public static io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<UpdateQuotaRegistryResponse>
      PARSER = new com.google.protobuf.AbstractParser<UpdateQuotaRegistryResponse>() {
    @java.lang.Override
    public UpdateQuotaRegistryResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new UpdateQuotaRegistryResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<UpdateQuotaRegistryResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<UpdateQuotaRegistryResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

