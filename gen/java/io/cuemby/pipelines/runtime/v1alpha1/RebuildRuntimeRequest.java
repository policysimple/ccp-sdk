// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf type {@code pipelines.runtime.v1alpha1.RebuildRuntimeRequest}
 */
public final class RebuildRuntimeRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.runtime.v1alpha1.RebuildRuntimeRequest)
    RebuildRuntimeRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RebuildRuntimeRequest.newBuilder() to construct.
  private RebuildRuntimeRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RebuildRuntimeRequest() {
    runtimeId_ = "";
    userId_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RebuildRuntimeRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private RebuildRuntimeRequest(
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

            runtimeId_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            userId_ = s;
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
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_RebuildRuntimeRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_RebuildRuntimeRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.class, io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.Builder.class);
  }

  public static final int RUNTIME_ID_FIELD_NUMBER = 1;
  private volatile java.lang.Object runtimeId_;
  /**
   * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
   * @return The runtimeId.
   */
  @java.lang.Override
  public java.lang.String getRuntimeId() {
    java.lang.Object ref = runtimeId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      runtimeId_ = s;
      return s;
    }
  }
  /**
   * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
   * @return The bytes for runtimeId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getRuntimeIdBytes() {
    java.lang.Object ref = runtimeId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      runtimeId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int USER_ID_FIELD_NUMBER = 2;
  private volatile java.lang.Object userId_;
  /**
   * <code>string user_id = 2 [json_name = "userId"];</code>
   * @return The userId.
   */
  @java.lang.Override
  public java.lang.String getUserId() {
    java.lang.Object ref = userId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      userId_ = s;
      return s;
    }
  }
  /**
   * <code>string user_id = 2 [json_name = "userId"];</code>
   * @return The bytes for userId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getUserIdBytes() {
    java.lang.Object ref = userId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      userId_ = b;
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
    if (!getRuntimeIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, runtimeId_);
    }
    if (!getUserIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, userId_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getRuntimeIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, runtimeId_);
    }
    if (!getUserIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, userId_);
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
    if (!(obj instanceof io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest other = (io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest) obj;

    if (!getRuntimeId()
        .equals(other.getRuntimeId())) return false;
    if (!getUserId()
        .equals(other.getUserId())) return false;
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
    hash = (37 * hash) + RUNTIME_ID_FIELD_NUMBER;
    hash = (53 * hash) + getRuntimeId().hashCode();
    hash = (37 * hash) + USER_ID_FIELD_NUMBER;
    hash = (53 * hash) + getUserId().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest prototype) {
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
   * Protobuf type {@code pipelines.runtime.v1alpha1.RebuildRuntimeRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.runtime.v1alpha1.RebuildRuntimeRequest)
      io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_RebuildRuntimeRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_RebuildRuntimeRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.class, io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.Builder.class);
    }

    // Construct using io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.newBuilder()
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
      runtimeId_ = "";

      userId_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_RebuildRuntimeRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest getDefaultInstanceForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest build() {
      io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest buildPartial() {
      io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest result = new io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest(this);
      result.runtimeId_ = runtimeId_;
      result.userId_ = userId_;
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
      if (other instanceof io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest) {
        return mergeFrom((io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest other) {
      if (other == io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest.getDefaultInstance()) return this;
      if (!other.getRuntimeId().isEmpty()) {
        runtimeId_ = other.runtimeId_;
        onChanged();
      }
      if (!other.getUserId().isEmpty()) {
        userId_ = other.userId_;
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
      io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object runtimeId_ = "";
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return The runtimeId.
     */
    public java.lang.String getRuntimeId() {
      java.lang.Object ref = runtimeId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        runtimeId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return The bytes for runtimeId.
     */
    public com.google.protobuf.ByteString
        getRuntimeIdBytes() {
      java.lang.Object ref = runtimeId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        runtimeId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @param value The runtimeId to set.
     * @return This builder for chaining.
     */
    public Builder setRuntimeId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      runtimeId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearRuntimeId() {
      
      runtimeId_ = getDefaultInstance().getRuntimeId();
      onChanged();
      return this;
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @param value The bytes for runtimeId to set.
     * @return This builder for chaining.
     */
    public Builder setRuntimeIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      runtimeId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object userId_ = "";
    /**
     * <code>string user_id = 2 [json_name = "userId"];</code>
     * @return The userId.
     */
    public java.lang.String getUserId() {
      java.lang.Object ref = userId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        userId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string user_id = 2 [json_name = "userId"];</code>
     * @return The bytes for userId.
     */
    public com.google.protobuf.ByteString
        getUserIdBytes() {
      java.lang.Object ref = userId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        userId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string user_id = 2 [json_name = "userId"];</code>
     * @param value The userId to set.
     * @return This builder for chaining.
     */
    public Builder setUserId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      userId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string user_id = 2 [json_name = "userId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearUserId() {
      
      userId_ = getDefaultInstance().getUserId();
      onChanged();
      return this;
    }
    /**
     * <code>string user_id = 2 [json_name = "userId"];</code>
     * @param value The bytes for userId to set.
     * @return This builder for chaining.
     */
    public Builder setUserIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      userId_ = value;
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


    // @@protoc_insertion_point(builder_scope:pipelines.runtime.v1alpha1.RebuildRuntimeRequest)
  }

  // @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.RebuildRuntimeRequest)
  private static final io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest();
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RebuildRuntimeRequest>
      PARSER = new com.google.protobuf.AbstractParser<RebuildRuntimeRequest>() {
    @java.lang.Override
    public RebuildRuntimeRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new RebuildRuntimeRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<RebuildRuntimeRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RebuildRuntimeRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.RebuildRuntimeRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
