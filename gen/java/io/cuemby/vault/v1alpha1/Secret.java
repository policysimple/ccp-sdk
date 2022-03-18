// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault.proto

package io.cuemby.vault.v1alpha1;

/**
 * Protobuf type {@code vault.v1alpha1.Secret}
 */
public final class Secret extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:vault.v1alpha1.Secret)
    SecretOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Secret.newBuilder() to construct.
  private Secret(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Secret() {
    applicationId_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Secret();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private Secret(
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
          case 8: {

            projectId_ = input.readUInt32();
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            applicationId_ = s;
            break;
          }
          case 26: {
            io.cuemby.vault.v1alpha1.Metadata.Builder subBuilder = null;
            if (metadata_ != null) {
              subBuilder = metadata_.toBuilder();
            }
            metadata_ = input.readMessage(io.cuemby.vault.v1alpha1.Metadata.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(metadata_);
              metadata_ = subBuilder.buildPartial();
            }

            break;
          }
          case 42: {
            io.cuemby.vault.v1alpha1.SecretData.Builder subBuilder = null;
            if (data_ != null) {
              subBuilder = data_.toBuilder();
            }
            data_ = input.readMessage(io.cuemby.vault.v1alpha1.SecretData.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(data_);
              data_ = subBuilder.buildPartial();
            }

            break;
          }
          case 50: {
            io.cuemby.vault.v1alpha1.SecretWarnings.Builder subBuilder = null;
            if (warnings_ != null) {
              subBuilder = warnings_.toBuilder();
            }
            warnings_ = input.readMessage(io.cuemby.vault.v1alpha1.SecretWarnings.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(warnings_);
              warnings_ = subBuilder.buildPartial();
            }

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
    return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_Secret_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_Secret_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.vault.v1alpha1.Secret.class, io.cuemby.vault.v1alpha1.Secret.Builder.class);
  }

  public static final int PROJECT_ID_FIELD_NUMBER = 1;
  private int projectId_;
  /**
   * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  @java.lang.Override
  public int getProjectId() {
    return projectId_;
  }

  public static final int APPLICATION_ID_FIELD_NUMBER = 2;
  private volatile java.lang.Object applicationId_;
  /**
   * <code>string application_id = 2 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  @java.lang.Override
  public java.lang.String getApplicationId() {
    java.lang.Object ref = applicationId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      applicationId_ = s;
      return s;
    }
  }
  /**
   * <code>string application_id = 2 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getApplicationIdBytes() {
    java.lang.Object ref = applicationId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      applicationId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int METADATA_FIELD_NUMBER = 3;
  private io.cuemby.vault.v1alpha1.Metadata metadata_;
  /**
   * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
   * @return Whether the metadata field is set.
   */
  @java.lang.Override
  public boolean hasMetadata() {
    return metadata_ != null;
  }
  /**
   * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
   * @return The metadata.
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.Metadata getMetadata() {
    return metadata_ == null ? io.cuemby.vault.v1alpha1.Metadata.getDefaultInstance() : metadata_;
  }
  /**
   * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.MetadataOrBuilder getMetadataOrBuilder() {
    return getMetadata();
  }

  public static final int DATA_FIELD_NUMBER = 5;
  private io.cuemby.vault.v1alpha1.SecretData data_;
  /**
   * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
   * @return Whether the data field is set.
   */
  @java.lang.Override
  public boolean hasData() {
    return data_ != null;
  }
  /**
   * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
   * @return The data.
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.SecretData getData() {
    return data_ == null ? io.cuemby.vault.v1alpha1.SecretData.getDefaultInstance() : data_;
  }
  /**
   * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.SecretDataOrBuilder getDataOrBuilder() {
    return getData();
  }

  public static final int WARNINGS_FIELD_NUMBER = 6;
  private io.cuemby.vault.v1alpha1.SecretWarnings warnings_;
  /**
   * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
   * @return Whether the warnings field is set.
   */
  @java.lang.Override
  public boolean hasWarnings() {
    return warnings_ != null;
  }
  /**
   * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
   * @return The warnings.
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.SecretWarnings getWarnings() {
    return warnings_ == null ? io.cuemby.vault.v1alpha1.SecretWarnings.getDefaultInstance() : warnings_;
  }
  /**
   * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
   */
  @java.lang.Override
  public io.cuemby.vault.v1alpha1.SecretWarningsOrBuilder getWarningsOrBuilder() {
    return getWarnings();
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
    if (projectId_ != 0) {
      output.writeUInt32(1, projectId_);
    }
    if (!getApplicationIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, applicationId_);
    }
    if (metadata_ != null) {
      output.writeMessage(3, getMetadata());
    }
    if (data_ != null) {
      output.writeMessage(5, getData());
    }
    if (warnings_ != null) {
      output.writeMessage(6, getWarnings());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (projectId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, projectId_);
    }
    if (!getApplicationIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, applicationId_);
    }
    if (metadata_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getMetadata());
    }
    if (data_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(5, getData());
    }
    if (warnings_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(6, getWarnings());
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
    if (!(obj instanceof io.cuemby.vault.v1alpha1.Secret)) {
      return super.equals(obj);
    }
    io.cuemby.vault.v1alpha1.Secret other = (io.cuemby.vault.v1alpha1.Secret) obj;

    if (getProjectId()
        != other.getProjectId()) return false;
    if (!getApplicationId()
        .equals(other.getApplicationId())) return false;
    if (hasMetadata() != other.hasMetadata()) return false;
    if (hasMetadata()) {
      if (!getMetadata()
          .equals(other.getMetadata())) return false;
    }
    if (hasData() != other.hasData()) return false;
    if (hasData()) {
      if (!getData()
          .equals(other.getData())) return false;
    }
    if (hasWarnings() != other.hasWarnings()) return false;
    if (hasWarnings()) {
      if (!getWarnings()
          .equals(other.getWarnings())) return false;
    }
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
    hash = (37 * hash) + PROJECT_ID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId();
    hash = (37 * hash) + APPLICATION_ID_FIELD_NUMBER;
    hash = (53 * hash) + getApplicationId().hashCode();
    if (hasMetadata()) {
      hash = (37 * hash) + METADATA_FIELD_NUMBER;
      hash = (53 * hash) + getMetadata().hashCode();
    }
    if (hasData()) {
      hash = (37 * hash) + DATA_FIELD_NUMBER;
      hash = (53 * hash) + getData().hashCode();
    }
    if (hasWarnings()) {
      hash = (37 * hash) + WARNINGS_FIELD_NUMBER;
      hash = (53 * hash) + getWarnings().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.Secret parseFrom(
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
  public static Builder newBuilder(io.cuemby.vault.v1alpha1.Secret prototype) {
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
   * Protobuf type {@code vault.v1alpha1.Secret}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:vault.v1alpha1.Secret)
      io.cuemby.vault.v1alpha1.SecretOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_Secret_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_Secret_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.vault.v1alpha1.Secret.class, io.cuemby.vault.v1alpha1.Secret.Builder.class);
    }

    // Construct using io.cuemby.vault.v1alpha1.Secret.newBuilder()
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
      projectId_ = 0;

      applicationId_ = "";

      if (metadataBuilder_ == null) {
        metadata_ = null;
      } else {
        metadata_ = null;
        metadataBuilder_ = null;
      }
      if (dataBuilder_ == null) {
        data_ = null;
      } else {
        data_ = null;
        dataBuilder_ = null;
      }
      if (warningsBuilder_ == null) {
        warnings_ = null;
      } else {
        warnings_ = null;
        warningsBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.vault.v1alpha1.VaultProto.internal_static_vault_v1alpha1_Secret_descriptor;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.Secret getDefaultInstanceForType() {
      return io.cuemby.vault.v1alpha1.Secret.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.Secret build() {
      io.cuemby.vault.v1alpha1.Secret result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.Secret buildPartial() {
      io.cuemby.vault.v1alpha1.Secret result = new io.cuemby.vault.v1alpha1.Secret(this);
      result.projectId_ = projectId_;
      result.applicationId_ = applicationId_;
      if (metadataBuilder_ == null) {
        result.metadata_ = metadata_;
      } else {
        result.metadata_ = metadataBuilder_.build();
      }
      if (dataBuilder_ == null) {
        result.data_ = data_;
      } else {
        result.data_ = dataBuilder_.build();
      }
      if (warningsBuilder_ == null) {
        result.warnings_ = warnings_;
      } else {
        result.warnings_ = warningsBuilder_.build();
      }
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
      if (other instanceof io.cuemby.vault.v1alpha1.Secret) {
        return mergeFrom((io.cuemby.vault.v1alpha1.Secret)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.vault.v1alpha1.Secret other) {
      if (other == io.cuemby.vault.v1alpha1.Secret.getDefaultInstance()) return this;
      if (other.getProjectId() != 0) {
        setProjectId(other.getProjectId());
      }
      if (!other.getApplicationId().isEmpty()) {
        applicationId_ = other.applicationId_;
        onChanged();
      }
      if (other.hasMetadata()) {
        mergeMetadata(other.getMetadata());
      }
      if (other.hasData()) {
        mergeData(other.getData());
      }
      if (other.hasWarnings()) {
        mergeWarnings(other.getWarnings());
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
      io.cuemby.vault.v1alpha1.Secret parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.vault.v1alpha1.Secret) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int projectId_ ;
    /**
     * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @return The projectId.
     */
    @java.lang.Override
    public int getProjectId() {
      return projectId_;
    }
    /**
     * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @param value The projectId to set.
     * @return This builder for chaining.
     */
    public Builder setProjectId(int value) {
      
      projectId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectId() {
      
      projectId_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object applicationId_ = "";
    /**
     * <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @return The applicationId.
     */
    public java.lang.String getApplicationId() {
      java.lang.Object ref = applicationId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        applicationId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @return The bytes for applicationId.
     */
    public com.google.protobuf.ByteString
        getApplicationIdBytes() {
      java.lang.Object ref = applicationId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        applicationId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @param value The applicationId to set.
     * @return This builder for chaining.
     */
    public Builder setApplicationId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      applicationId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearApplicationId() {
      
      applicationId_ = getDefaultInstance().getApplicationId();
      onChanged();
      return this;
    }
    /**
     * <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @param value The bytes for applicationId to set.
     * @return This builder for chaining.
     */
    public Builder setApplicationIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      applicationId_ = value;
      onChanged();
      return this;
    }

    private io.cuemby.vault.v1alpha1.Metadata metadata_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.Metadata, io.cuemby.vault.v1alpha1.Metadata.Builder, io.cuemby.vault.v1alpha1.MetadataOrBuilder> metadataBuilder_;
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     * @return Whether the metadata field is set.
     */
    public boolean hasMetadata() {
      return metadataBuilder_ != null || metadata_ != null;
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     * @return The metadata.
     */
    public io.cuemby.vault.v1alpha1.Metadata getMetadata() {
      if (metadataBuilder_ == null) {
        return metadata_ == null ? io.cuemby.vault.v1alpha1.Metadata.getDefaultInstance() : metadata_;
      } else {
        return metadataBuilder_.getMessage();
      }
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    public Builder setMetadata(io.cuemby.vault.v1alpha1.Metadata value) {
      if (metadataBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        metadata_ = value;
        onChanged();
      } else {
        metadataBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    public Builder setMetadata(
        io.cuemby.vault.v1alpha1.Metadata.Builder builderForValue) {
      if (metadataBuilder_ == null) {
        metadata_ = builderForValue.build();
        onChanged();
      } else {
        metadataBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    public Builder mergeMetadata(io.cuemby.vault.v1alpha1.Metadata value) {
      if (metadataBuilder_ == null) {
        if (metadata_ != null) {
          metadata_ =
            io.cuemby.vault.v1alpha1.Metadata.newBuilder(metadata_).mergeFrom(value).buildPartial();
        } else {
          metadata_ = value;
        }
        onChanged();
      } else {
        metadataBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    public Builder clearMetadata() {
      if (metadataBuilder_ == null) {
        metadata_ = null;
        onChanged();
      } else {
        metadata_ = null;
        metadataBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    public io.cuemby.vault.v1alpha1.Metadata.Builder getMetadataBuilder() {
      
      onChanged();
      return getMetadataFieldBuilder().getBuilder();
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    public io.cuemby.vault.v1alpha1.MetadataOrBuilder getMetadataOrBuilder() {
      if (metadataBuilder_ != null) {
        return metadataBuilder_.getMessageOrBuilder();
      } else {
        return metadata_ == null ?
            io.cuemby.vault.v1alpha1.Metadata.getDefaultInstance() : metadata_;
      }
    }
    /**
     * <code>.vault.v1alpha1.Metadata metadata = 3 [json_name = "metadata"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.Metadata, io.cuemby.vault.v1alpha1.Metadata.Builder, io.cuemby.vault.v1alpha1.MetadataOrBuilder> 
        getMetadataFieldBuilder() {
      if (metadataBuilder_ == null) {
        metadataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.vault.v1alpha1.Metadata, io.cuemby.vault.v1alpha1.Metadata.Builder, io.cuemby.vault.v1alpha1.MetadataOrBuilder>(
                getMetadata(),
                getParentForChildren(),
                isClean());
        metadata_ = null;
      }
      return metadataBuilder_;
    }

    private io.cuemby.vault.v1alpha1.SecretData data_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.SecretData, io.cuemby.vault.v1alpha1.SecretData.Builder, io.cuemby.vault.v1alpha1.SecretDataOrBuilder> dataBuilder_;
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     * @return Whether the data field is set.
     */
    public boolean hasData() {
      return dataBuilder_ != null || data_ != null;
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     * @return The data.
     */
    public io.cuemby.vault.v1alpha1.SecretData getData() {
      if (dataBuilder_ == null) {
        return data_ == null ? io.cuemby.vault.v1alpha1.SecretData.getDefaultInstance() : data_;
      } else {
        return dataBuilder_.getMessage();
      }
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    public Builder setData(io.cuemby.vault.v1alpha1.SecretData value) {
      if (dataBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        data_ = value;
        onChanged();
      } else {
        dataBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    public Builder setData(
        io.cuemby.vault.v1alpha1.SecretData.Builder builderForValue) {
      if (dataBuilder_ == null) {
        data_ = builderForValue.build();
        onChanged();
      } else {
        dataBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    public Builder mergeData(io.cuemby.vault.v1alpha1.SecretData value) {
      if (dataBuilder_ == null) {
        if (data_ != null) {
          data_ =
            io.cuemby.vault.v1alpha1.SecretData.newBuilder(data_).mergeFrom(value).buildPartial();
        } else {
          data_ = value;
        }
        onChanged();
      } else {
        dataBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    public Builder clearData() {
      if (dataBuilder_ == null) {
        data_ = null;
        onChanged();
      } else {
        data_ = null;
        dataBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    public io.cuemby.vault.v1alpha1.SecretData.Builder getDataBuilder() {
      
      onChanged();
      return getDataFieldBuilder().getBuilder();
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    public io.cuemby.vault.v1alpha1.SecretDataOrBuilder getDataOrBuilder() {
      if (dataBuilder_ != null) {
        return dataBuilder_.getMessageOrBuilder();
      } else {
        return data_ == null ?
            io.cuemby.vault.v1alpha1.SecretData.getDefaultInstance() : data_;
      }
    }
    /**
     * <code>.vault.v1alpha1.SecretData data = 5 [json_name = "data"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.SecretData, io.cuemby.vault.v1alpha1.SecretData.Builder, io.cuemby.vault.v1alpha1.SecretDataOrBuilder> 
        getDataFieldBuilder() {
      if (dataBuilder_ == null) {
        dataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.vault.v1alpha1.SecretData, io.cuemby.vault.v1alpha1.SecretData.Builder, io.cuemby.vault.v1alpha1.SecretDataOrBuilder>(
                getData(),
                getParentForChildren(),
                isClean());
        data_ = null;
      }
      return dataBuilder_;
    }

    private io.cuemby.vault.v1alpha1.SecretWarnings warnings_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.SecretWarnings, io.cuemby.vault.v1alpha1.SecretWarnings.Builder, io.cuemby.vault.v1alpha1.SecretWarningsOrBuilder> warningsBuilder_;
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     * @return Whether the warnings field is set.
     */
    public boolean hasWarnings() {
      return warningsBuilder_ != null || warnings_ != null;
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     * @return The warnings.
     */
    public io.cuemby.vault.v1alpha1.SecretWarnings getWarnings() {
      if (warningsBuilder_ == null) {
        return warnings_ == null ? io.cuemby.vault.v1alpha1.SecretWarnings.getDefaultInstance() : warnings_;
      } else {
        return warningsBuilder_.getMessage();
      }
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    public Builder setWarnings(io.cuemby.vault.v1alpha1.SecretWarnings value) {
      if (warningsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        warnings_ = value;
        onChanged();
      } else {
        warningsBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    public Builder setWarnings(
        io.cuemby.vault.v1alpha1.SecretWarnings.Builder builderForValue) {
      if (warningsBuilder_ == null) {
        warnings_ = builderForValue.build();
        onChanged();
      } else {
        warningsBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    public Builder mergeWarnings(io.cuemby.vault.v1alpha1.SecretWarnings value) {
      if (warningsBuilder_ == null) {
        if (warnings_ != null) {
          warnings_ =
            io.cuemby.vault.v1alpha1.SecretWarnings.newBuilder(warnings_).mergeFrom(value).buildPartial();
        } else {
          warnings_ = value;
        }
        onChanged();
      } else {
        warningsBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    public Builder clearWarnings() {
      if (warningsBuilder_ == null) {
        warnings_ = null;
        onChanged();
      } else {
        warnings_ = null;
        warningsBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    public io.cuemby.vault.v1alpha1.SecretWarnings.Builder getWarningsBuilder() {
      
      onChanged();
      return getWarningsFieldBuilder().getBuilder();
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    public io.cuemby.vault.v1alpha1.SecretWarningsOrBuilder getWarningsOrBuilder() {
      if (warningsBuilder_ != null) {
        return warningsBuilder_.getMessageOrBuilder();
      } else {
        return warnings_ == null ?
            io.cuemby.vault.v1alpha1.SecretWarnings.getDefaultInstance() : warnings_;
      }
    }
    /**
     * <code>.vault.v1alpha1.SecretWarnings warnings = 6 [json_name = "warnings"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.vault.v1alpha1.SecretWarnings, io.cuemby.vault.v1alpha1.SecretWarnings.Builder, io.cuemby.vault.v1alpha1.SecretWarningsOrBuilder> 
        getWarningsFieldBuilder() {
      if (warningsBuilder_ == null) {
        warningsBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.vault.v1alpha1.SecretWarnings, io.cuemby.vault.v1alpha1.SecretWarnings.Builder, io.cuemby.vault.v1alpha1.SecretWarningsOrBuilder>(
                getWarnings(),
                getParentForChildren(),
                isClean());
        warnings_ = null;
      }
      return warningsBuilder_;
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


    // @@protoc_insertion_point(builder_scope:vault.v1alpha1.Secret)
  }

  // @@protoc_insertion_point(class_scope:vault.v1alpha1.Secret)
  private static final io.cuemby.vault.v1alpha1.Secret DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.vault.v1alpha1.Secret();
  }

  public static io.cuemby.vault.v1alpha1.Secret getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Secret>
      PARSER = new com.google.protobuf.AbstractParser<Secret>() {
    @java.lang.Override
    public Secret parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new Secret(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<Secret> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Secret> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.vault.v1alpha1.Secret getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
