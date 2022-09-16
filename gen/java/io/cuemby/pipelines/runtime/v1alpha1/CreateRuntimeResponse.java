// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf type {@code pipelines.runtime.v1alpha1.CreateRuntimeResponse}
 */
public final class CreateRuntimeResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.runtime.v1alpha1.CreateRuntimeResponse)
    CreateRuntimeResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateRuntimeResponse.newBuilder() to construct.
  private CreateRuntimeResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateRuntimeResponse() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CreateRuntimeResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateRuntimeResponse(
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
            io.cuemby.pipelines.runtime.v1alpha1.Runtime.Builder subBuilder = null;
            if (runtime_ != null) {
              subBuilder = runtime_.toBuilder();
            }
            runtime_ = input.readMessage(io.cuemby.pipelines.runtime.v1alpha1.Runtime.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(runtime_);
              runtime_ = subBuilder.buildPartial();
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
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.class, io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.Builder.class);
  }

  public static final int RUNTIME_FIELD_NUMBER = 1;
  private io.cuemby.pipelines.runtime.v1alpha1.Runtime runtime_;
  /**
   * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
   * @return Whether the runtime field is set.
   */
  @java.lang.Override
  public boolean hasRuntime() {
    return runtime_ != null;
  }
  /**
   * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
   * @return The runtime.
   */
  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.Runtime getRuntime() {
    return runtime_ == null ? io.cuemby.pipelines.runtime.v1alpha1.Runtime.getDefaultInstance() : runtime_;
  }
  /**
   * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.RuntimeOrBuilder getRuntimeOrBuilder() {
    return getRuntime();
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
    if (runtime_ != null) {
      output.writeMessage(1, getRuntime());
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
    if (runtime_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getRuntime());
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
    if (!(obj instanceof io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse other = (io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse) obj;

    if (hasRuntime() != other.hasRuntime()) return false;
    if (hasRuntime()) {
      if (!getRuntime()
          .equals(other.getRuntime())) return false;
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
    if (hasRuntime()) {
      hash = (37 * hash) + RUNTIME_FIELD_NUMBER;
      hash = (53 * hash) + getRuntime().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse prototype) {
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
   * Protobuf type {@code pipelines.runtime.v1alpha1.CreateRuntimeResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.runtime.v1alpha1.CreateRuntimeResponse)
      io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.class, io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.Builder.class);
    }

    // Construct using io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.newBuilder()
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
      if (runtimeBuilder_ == null) {
        runtime_ = null;
      } else {
        runtime_ = null;
        runtimeBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_CreateRuntimeResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse getDefaultInstanceForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse build() {
      io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse buildPartial() {
      io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse result = new io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse(this);
      if (runtimeBuilder_ == null) {
        result.runtime_ = runtime_;
      } else {
        result.runtime_ = runtimeBuilder_.build();
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
      if (other instanceof io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse) {
        return mergeFrom((io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse other) {
      if (other == io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse.getDefaultInstance()) return this;
      if (other.hasRuntime()) {
        mergeRuntime(other.getRuntime());
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
      io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.pipelines.runtime.v1alpha1.Runtime runtime_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.runtime.v1alpha1.Runtime, io.cuemby.pipelines.runtime.v1alpha1.Runtime.Builder, io.cuemby.pipelines.runtime.v1alpha1.RuntimeOrBuilder> runtimeBuilder_;
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     * @return Whether the runtime field is set.
     */
    public boolean hasRuntime() {
      return runtimeBuilder_ != null || runtime_ != null;
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     * @return The runtime.
     */
    public io.cuemby.pipelines.runtime.v1alpha1.Runtime getRuntime() {
      if (runtimeBuilder_ == null) {
        return runtime_ == null ? io.cuemby.pipelines.runtime.v1alpha1.Runtime.getDefaultInstance() : runtime_;
      } else {
        return runtimeBuilder_.getMessage();
      }
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    public Builder setRuntime(io.cuemby.pipelines.runtime.v1alpha1.Runtime value) {
      if (runtimeBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        runtime_ = value;
        onChanged();
      } else {
        runtimeBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    public Builder setRuntime(
        io.cuemby.pipelines.runtime.v1alpha1.Runtime.Builder builderForValue) {
      if (runtimeBuilder_ == null) {
        runtime_ = builderForValue.build();
        onChanged();
      } else {
        runtimeBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    public Builder mergeRuntime(io.cuemby.pipelines.runtime.v1alpha1.Runtime value) {
      if (runtimeBuilder_ == null) {
        if (runtime_ != null) {
          runtime_ =
            io.cuemby.pipelines.runtime.v1alpha1.Runtime.newBuilder(runtime_).mergeFrom(value).buildPartial();
        } else {
          runtime_ = value;
        }
        onChanged();
      } else {
        runtimeBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    public Builder clearRuntime() {
      if (runtimeBuilder_ == null) {
        runtime_ = null;
        onChanged();
      } else {
        runtime_ = null;
        runtimeBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.Runtime.Builder getRuntimeBuilder() {
      
      onChanged();
      return getRuntimeFieldBuilder().getBuilder();
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.RuntimeOrBuilder getRuntimeOrBuilder() {
      if (runtimeBuilder_ != null) {
        return runtimeBuilder_.getMessageOrBuilder();
      } else {
        return runtime_ == null ?
            io.cuemby.pipelines.runtime.v1alpha1.Runtime.getDefaultInstance() : runtime_;
      }
    }
    /**
     * <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.runtime.v1alpha1.Runtime, io.cuemby.pipelines.runtime.v1alpha1.Runtime.Builder, io.cuemby.pipelines.runtime.v1alpha1.RuntimeOrBuilder> 
        getRuntimeFieldBuilder() {
      if (runtimeBuilder_ == null) {
        runtimeBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.pipelines.runtime.v1alpha1.Runtime, io.cuemby.pipelines.runtime.v1alpha1.Runtime.Builder, io.cuemby.pipelines.runtime.v1alpha1.RuntimeOrBuilder>(
                getRuntime(),
                getParentForChildren(),
                isClean());
        runtime_ = null;
      }
      return runtimeBuilder_;
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


    // @@protoc_insertion_point(builder_scope:pipelines.runtime.v1alpha1.CreateRuntimeResponse)
  }

  // @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.CreateRuntimeResponse)
  private static final io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse();
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateRuntimeResponse>
      PARSER = new com.google.protobuf.AbstractParser<CreateRuntimeResponse>() {
    @java.lang.Override
    public CreateRuntimeResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateRuntimeResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateRuntimeResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateRuntimeResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.CreateRuntimeResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

