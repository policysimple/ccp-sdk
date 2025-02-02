// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault_api.proto

package io.cuemby.vault.v1alpha1;

/**
 * Protobuf type {@code vault.v1alpha1.GetSecretsServiceRequest}
 */
public final class GetSecretsServiceRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:vault.v1alpha1.GetSecretsServiceRequest)
    GetSecretsServiceRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetSecretsServiceRequest.newBuilder() to construct.
  private GetSecretsServiceRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetSecretsServiceRequest() {
    nameService_ = "";
    error_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetSecretsServiceRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetSecretsServiceRequest(
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

            nameService_ = s;
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
    return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetSecretsServiceRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetSecretsServiceRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.class, io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.Builder.class);
  }

  public static final int NAME_SERVICE_FIELD_NUMBER = 1;
  private volatile java.lang.Object nameService_;
  /**
   * <code>string name_service = 1 [json_name = "nameService"];</code>
   * @return The nameService.
   */
  @java.lang.Override
  public java.lang.String getNameService() {
    java.lang.Object ref = nameService_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      nameService_ = s;
      return s;
    }
  }
  /**
   * <code>string name_service = 1 [json_name = "nameService"];</code>
   * @return The bytes for nameService.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameServiceBytes() {
    java.lang.Object ref = nameService_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      nameService_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
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
    if (!getNameServiceBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, nameService_);
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
    if (!getNameServiceBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, nameService_);
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
    if (!(obj instanceof io.cuemby.vault.v1alpha1.GetSecretsServiceRequest)) {
      return super.equals(obj);
    }
    io.cuemby.vault.v1alpha1.GetSecretsServiceRequest other = (io.cuemby.vault.v1alpha1.GetSecretsServiceRequest) obj;

    if (!getNameService()
        .equals(other.getNameService())) return false;
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
    hash = (37 * hash) + NAME_SERVICE_FIELD_NUMBER;
    hash = (53 * hash) + getNameService().hashCode();
    hash = (37 * hash) + ERROR_FIELD_NUMBER;
    hash = (53 * hash) + getError().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.vault.v1alpha1.GetSecretsServiceRequest prototype) {
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
   * Protobuf type {@code vault.v1alpha1.GetSecretsServiceRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:vault.v1alpha1.GetSecretsServiceRequest)
      io.cuemby.vault.v1alpha1.GetSecretsServiceRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetSecretsServiceRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetSecretsServiceRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.class, io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.Builder.class);
    }

    // Construct using io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.newBuilder()
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
      nameService_ = "";

      error_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_GetSecretsServiceRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.GetSecretsServiceRequest getDefaultInstanceForType() {
      return io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.GetSecretsServiceRequest build() {
      io.cuemby.vault.v1alpha1.GetSecretsServiceRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.GetSecretsServiceRequest buildPartial() {
      io.cuemby.vault.v1alpha1.GetSecretsServiceRequest result = new io.cuemby.vault.v1alpha1.GetSecretsServiceRequest(this);
      result.nameService_ = nameService_;
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
      if (other instanceof io.cuemby.vault.v1alpha1.GetSecretsServiceRequest) {
        return mergeFrom((io.cuemby.vault.v1alpha1.GetSecretsServiceRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.vault.v1alpha1.GetSecretsServiceRequest other) {
      if (other == io.cuemby.vault.v1alpha1.GetSecretsServiceRequest.getDefaultInstance()) return this;
      if (!other.getNameService().isEmpty()) {
        nameService_ = other.nameService_;
        onChanged();
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
      io.cuemby.vault.v1alpha1.GetSecretsServiceRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.vault.v1alpha1.GetSecretsServiceRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object nameService_ = "";
    /**
     * <code>string name_service = 1 [json_name = "nameService"];</code>
     * @return The nameService.
     */
    public java.lang.String getNameService() {
      java.lang.Object ref = nameService_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        nameService_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name_service = 1 [json_name = "nameService"];</code>
     * @return The bytes for nameService.
     */
    public com.google.protobuf.ByteString
        getNameServiceBytes() {
      java.lang.Object ref = nameService_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        nameService_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name_service = 1 [json_name = "nameService"];</code>
     * @param value The nameService to set.
     * @return This builder for chaining.
     */
    public Builder setNameService(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      nameService_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string name_service = 1 [json_name = "nameService"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNameService() {
      
      nameService_ = getDefaultInstance().getNameService();
      onChanged();
      return this;
    }
    /**
     * <code>string name_service = 1 [json_name = "nameService"];</code>
     * @param value The bytes for nameService to set.
     * @return This builder for chaining.
     */
    public Builder setNameServiceBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      nameService_ = value;
      onChanged();
      return this;
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


    // @@protoc_insertion_point(builder_scope:vault.v1alpha1.GetSecretsServiceRequest)
  }

  // @@protoc_insertion_point(class_scope:vault.v1alpha1.GetSecretsServiceRequest)
  private static final io.cuemby.vault.v1alpha1.GetSecretsServiceRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.vault.v1alpha1.GetSecretsServiceRequest();
  }

  public static io.cuemby.vault.v1alpha1.GetSecretsServiceRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetSecretsServiceRequest>
      PARSER = new com.google.protobuf.AbstractParser<GetSecretsServiceRequest>() {
    @java.lang.Override
    public GetSecretsServiceRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetSecretsServiceRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetSecretsServiceRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetSecretsServiceRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.vault.v1alpha1.GetSecretsServiceRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

