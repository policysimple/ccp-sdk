// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf type {@code pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse}
 */
public final class AlreadyExistsRuntimeResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse)
    AlreadyExistsRuntimeResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AlreadyExistsRuntimeResponse.newBuilder() to construct.
  private AlreadyExistsRuntimeResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AlreadyExistsRuntimeResponse() {
    alreadyExists_ = "";
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new AlreadyExistsRuntimeResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private AlreadyExistsRuntimeResponse(
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

            alreadyExists_ = s;
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
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.class, io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.Builder.class);
  }

  public static final int ALREADY_EXISTS_FIELD_NUMBER = 1;
  private volatile java.lang.Object alreadyExists_;
  /**
   * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
   * @return The alreadyExists.
   */
  @java.lang.Override
  public java.lang.String getAlreadyExists() {
    java.lang.Object ref = alreadyExists_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      alreadyExists_ = s;
      return s;
    }
  }
  /**
   * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
   * @return The bytes for alreadyExists.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAlreadyExistsBytes() {
    java.lang.Object ref = alreadyExists_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      alreadyExists_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
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
    if (!getAlreadyExistsBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, alreadyExists_);
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
    if (!getAlreadyExistsBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, alreadyExists_);
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
    if (!(obj instanceof io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse other = (io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse) obj;

    if (!getAlreadyExists()
        .equals(other.getAlreadyExists())) return false;
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
    hash = (37 * hash) + ALREADY_EXISTS_FIELD_NUMBER;
    hash = (53 * hash) + getAlreadyExists().hashCode();
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse prototype) {
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
   * Protobuf type {@code pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse)
      io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.class, io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.Builder.class);
    }

    // Construct using io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.newBuilder()
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
      alreadyExists_ = "";

      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_AlreadyExistsRuntimeResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse getDefaultInstanceForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse build() {
      io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse buildPartial() {
      io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse result = new io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse(this);
      result.alreadyExists_ = alreadyExists_;
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
      if (other instanceof io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse) {
        return mergeFrom((io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse other) {
      if (other == io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse.getDefaultInstance()) return this;
      if (!other.getAlreadyExists().isEmpty()) {
        alreadyExists_ = other.alreadyExists_;
        onChanged();
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
      io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object alreadyExists_ = "";
    /**
     * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
     * @return The alreadyExists.
     */
    public java.lang.String getAlreadyExists() {
      java.lang.Object ref = alreadyExists_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        alreadyExists_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
     * @return The bytes for alreadyExists.
     */
    public com.google.protobuf.ByteString
        getAlreadyExistsBytes() {
      java.lang.Object ref = alreadyExists_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        alreadyExists_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
     * @param value The alreadyExists to set.
     * @return This builder for chaining.
     */
    public Builder setAlreadyExists(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      alreadyExists_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
     * @return This builder for chaining.
     */
    public Builder clearAlreadyExists() {
      
      alreadyExists_ = getDefaultInstance().getAlreadyExists();
      onChanged();
      return this;
    }
    /**
     * <code>string already_exists = 1 [json_name = "alreadyExists"];</code>
     * @param value The bytes for alreadyExists to set.
     * @return This builder for chaining.
     */
    public Builder setAlreadyExistsBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      alreadyExists_ = value;
      onChanged();
      return this;
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


    // @@protoc_insertion_point(builder_scope:pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse)
  }

  // @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse)
  private static final io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse();
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AlreadyExistsRuntimeResponse>
      PARSER = new com.google.protobuf.AbstractParser<AlreadyExistsRuntimeResponse>() {
    @java.lang.Override
    public AlreadyExistsRuntimeResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new AlreadyExistsRuntimeResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AlreadyExistsRuntimeResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AlreadyExistsRuntimeResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

