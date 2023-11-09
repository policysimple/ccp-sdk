// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/artifacts/v1alpha1/registry_artifacts.proto

package io.cuemby.artifacts.artifacts.v1alpha1;

/**
 * Protobuf type {@code artifacts.artifacts.v1alpha1.Tags}
 */
public final class Tags extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.artifacts.v1alpha1.Tags)
    TagsOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Tags.newBuilder() to construct.
  private Tags(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Tags() {
    name_ = "";
    pullTime_ = "";
    pushTime_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Tags();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private Tags(
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

            name_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            pullTime_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            pushTime_ = s;
            break;
          }
          case 32: {

            storageLimit_ = input.readUInt32();
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
    return io.cuemby.artifacts.artifacts.v1alpha1.RegistryArtifactsProto.internal_static_artifacts_artifacts_v1alpha1_Tags_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.artifacts.v1alpha1.RegistryArtifactsProto.internal_static_artifacts_artifacts_v1alpha1_Tags_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.artifacts.v1alpha1.Tags.class, io.cuemby.artifacts.artifacts.v1alpha1.Tags.Builder.class);
  }

  public static final int NAME_FIELD_NUMBER = 1;
  private volatile java.lang.Object name_;
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  @java.lang.Override
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int PULL_TIME_FIELD_NUMBER = 2;
  private volatile java.lang.Object pullTime_;
  /**
   * <code>string pull_time = 2 [json_name = "pullTime"];</code>
   * @return The pullTime.
   */
  @java.lang.Override
  public java.lang.String getPullTime() {
    java.lang.Object ref = pullTime_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      pullTime_ = s;
      return s;
    }
  }
  /**
   * <code>string pull_time = 2 [json_name = "pullTime"];</code>
   * @return The bytes for pullTime.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPullTimeBytes() {
    java.lang.Object ref = pullTime_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      pullTime_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int PUSH_TIME_FIELD_NUMBER = 3;
  private volatile java.lang.Object pushTime_;
  /**
   * <code>string push_time = 3 [json_name = "pushTime"];</code>
   * @return The pushTime.
   */
  @java.lang.Override
  public java.lang.String getPushTime() {
    java.lang.Object ref = pushTime_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      pushTime_ = s;
      return s;
    }
  }
  /**
   * <code>string push_time = 3 [json_name = "pushTime"];</code>
   * @return The bytes for pushTime.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPushTimeBytes() {
    java.lang.Object ref = pushTime_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      pushTime_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int STORAGE_LIMIT_FIELD_NUMBER = 4;
  private int storageLimit_;
  /**
   * <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
   * @return The storageLimit.
   */
  @java.lang.Override
  public int getStorageLimit() {
    return storageLimit_;
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
    if (!getNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, name_);
    }
    if (!getPullTimeBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, pullTime_);
    }
    if (!getPushTimeBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, pushTime_);
    }
    if (storageLimit_ != 0) {
      output.writeUInt32(4, storageLimit_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, name_);
    }
    if (!getPullTimeBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, pullTime_);
    }
    if (!getPushTimeBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, pushTime_);
    }
    if (storageLimit_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(4, storageLimit_);
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
    if (!(obj instanceof io.cuemby.artifacts.artifacts.v1alpha1.Tags)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.artifacts.v1alpha1.Tags other = (io.cuemby.artifacts.artifacts.v1alpha1.Tags) obj;

    if (!getName()
        .equals(other.getName())) return false;
    if (!getPullTime()
        .equals(other.getPullTime())) return false;
    if (!getPushTime()
        .equals(other.getPushTime())) return false;
    if (getStorageLimit()
        != other.getStorageLimit()) return false;
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
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    hash = (37 * hash) + PULL_TIME_FIELD_NUMBER;
    hash = (53 * hash) + getPullTime().hashCode();
    hash = (37 * hash) + PUSH_TIME_FIELD_NUMBER;
    hash = (53 * hash) + getPushTime().hashCode();
    hash = (37 * hash) + STORAGE_LIMIT_FIELD_NUMBER;
    hash = (53 * hash) + getStorageLimit();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.artifacts.v1alpha1.Tags prototype) {
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
   * Protobuf type {@code artifacts.artifacts.v1alpha1.Tags}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.artifacts.v1alpha1.Tags)
      io.cuemby.artifacts.artifacts.v1alpha1.TagsOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.artifacts.v1alpha1.RegistryArtifactsProto.internal_static_artifacts_artifacts_v1alpha1_Tags_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.artifacts.v1alpha1.RegistryArtifactsProto.internal_static_artifacts_artifacts_v1alpha1_Tags_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.artifacts.v1alpha1.Tags.class, io.cuemby.artifacts.artifacts.v1alpha1.Tags.Builder.class);
    }

    // Construct using io.cuemby.artifacts.artifacts.v1alpha1.Tags.newBuilder()
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
      name_ = "";

      pullTime_ = "";

      pushTime_ = "";

      storageLimit_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.artifacts.v1alpha1.RegistryArtifactsProto.internal_static_artifacts_artifacts_v1alpha1_Tags_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.artifacts.v1alpha1.Tags getDefaultInstanceForType() {
      return io.cuemby.artifacts.artifacts.v1alpha1.Tags.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.artifacts.v1alpha1.Tags build() {
      io.cuemby.artifacts.artifacts.v1alpha1.Tags result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.artifacts.v1alpha1.Tags buildPartial() {
      io.cuemby.artifacts.artifacts.v1alpha1.Tags result = new io.cuemby.artifacts.artifacts.v1alpha1.Tags(this);
      result.name_ = name_;
      result.pullTime_ = pullTime_;
      result.pushTime_ = pushTime_;
      result.storageLimit_ = storageLimit_;
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
      if (other instanceof io.cuemby.artifacts.artifacts.v1alpha1.Tags) {
        return mergeFrom((io.cuemby.artifacts.artifacts.v1alpha1.Tags)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.artifacts.v1alpha1.Tags other) {
      if (other == io.cuemby.artifacts.artifacts.v1alpha1.Tags.getDefaultInstance()) return this;
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        onChanged();
      }
      if (!other.getPullTime().isEmpty()) {
        pullTime_ = other.pullTime_;
        onChanged();
      }
      if (!other.getPushTime().isEmpty()) {
        pushTime_ = other.pushTime_;
        onChanged();
      }
      if (other.getStorageLimit() != 0) {
        setStorageLimit(other.getStorageLimit());
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
      io.cuemby.artifacts.artifacts.v1alpha1.Tags parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.artifacts.v1alpha1.Tags) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object name_ = "";
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return The name.
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return The bytes for name.
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @param value The name to set.
     * @return This builder for chaining.
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      name_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return This builder for chaining.
     */
    public Builder clearName() {
      
      name_ = getDefaultInstance().getName();
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @param value The bytes for name to set.
     * @return This builder for chaining.
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      name_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object pullTime_ = "";
    /**
     * <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @return The pullTime.
     */
    public java.lang.String getPullTime() {
      java.lang.Object ref = pullTime_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        pullTime_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @return The bytes for pullTime.
     */
    public com.google.protobuf.ByteString
        getPullTimeBytes() {
      java.lang.Object ref = pullTime_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        pullTime_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @param value The pullTime to set.
     * @return This builder for chaining.
     */
    public Builder setPullTime(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      pullTime_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPullTime() {
      
      pullTime_ = getDefaultInstance().getPullTime();
      onChanged();
      return this;
    }
    /**
     * <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @param value The bytes for pullTime to set.
     * @return This builder for chaining.
     */
    public Builder setPullTimeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      pullTime_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object pushTime_ = "";
    /**
     * <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @return The pushTime.
     */
    public java.lang.String getPushTime() {
      java.lang.Object ref = pushTime_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        pushTime_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @return The bytes for pushTime.
     */
    public com.google.protobuf.ByteString
        getPushTimeBytes() {
      java.lang.Object ref = pushTime_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        pushTime_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @param value The pushTime to set.
     * @return This builder for chaining.
     */
    public Builder setPushTime(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      pushTime_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPushTime() {
      
      pushTime_ = getDefaultInstance().getPushTime();
      onChanged();
      return this;
    }
    /**
     * <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @param value The bytes for pushTime to set.
     * @return This builder for chaining.
     */
    public Builder setPushTimeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      pushTime_ = value;
      onChanged();
      return this;
    }

    private int storageLimit_ ;
    /**
     * <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
     * @return The storageLimit.
     */
    @java.lang.Override
    public int getStorageLimit() {
      return storageLimit_;
    }
    /**
     * <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
     * @param value The storageLimit to set.
     * @return This builder for chaining.
     */
    public Builder setStorageLimit(int value) {
      
      storageLimit_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
     * @return This builder for chaining.
     */
    public Builder clearStorageLimit() {
      
      storageLimit_ = 0;
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


    // @@protoc_insertion_point(builder_scope:artifacts.artifacts.v1alpha1.Tags)
  }

  // @@protoc_insertion_point(class_scope:artifacts.artifacts.v1alpha1.Tags)
  private static final io.cuemby.artifacts.artifacts.v1alpha1.Tags DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.artifacts.v1alpha1.Tags();
  }

  public static io.cuemby.artifacts.artifacts.v1alpha1.Tags getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Tags>
      PARSER = new com.google.protobuf.AbstractParser<Tags>() {
    @java.lang.Override
    public Tags parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new Tags(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<Tags> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Tags> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.artifacts.v1alpha1.Tags getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

