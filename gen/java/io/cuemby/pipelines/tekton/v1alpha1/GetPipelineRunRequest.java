// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton_api.proto

package io.cuemby.pipelines.tekton.v1alpha1;

/**
 * Protobuf type {@code pipelines.tekton.v1alpha1.GetPipelineRunRequest}
 */
public final class GetPipelineRunRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.tekton.v1alpha1.GetPipelineRunRequest)
    GetPipelineRunRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetPipelineRunRequest.newBuilder() to construct.
  private GetPipelineRunRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetPipelineRunRequest() {
    runtimeId_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetPipelineRunRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetPipelineRunRequest(
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
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetPipelineRunRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetPipelineRunRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.class, io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.Builder.class);
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
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest other = (io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest) obj;

    if (!getRuntimeId()
        .equals(other.getRuntimeId())) return false;
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
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest prototype) {
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
   * Protobuf type {@code pipelines.tekton.v1alpha1.GetPipelineRunRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.tekton.v1alpha1.GetPipelineRunRequest)
      io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetPipelineRunRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetPipelineRunRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.class, io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.Builder.class);
    }

    // Construct using io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.newBuilder()
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

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetPipelineRunRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest getDefaultInstanceForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest build() {
      io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest buildPartial() {
      io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest result = new io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest(this);
      result.runtimeId_ = runtimeId_;
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
      if (other instanceof io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest) {
        return mergeFrom((io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest other) {
      if (other == io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest.getDefaultInstance()) return this;
      if (!other.getRuntimeId().isEmpty()) {
        runtimeId_ = other.runtimeId_;
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
      io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest) e.getUnfinishedMessage();
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


    // @@protoc_insertion_point(builder_scope:pipelines.tekton.v1alpha1.GetPipelineRunRequest)
  }

  // @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.GetPipelineRunRequest)
  private static final io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest();
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetPipelineRunRequest>
      PARSER = new com.google.protobuf.AbstractParser<GetPipelineRunRequest>() {
    @java.lang.Override
    public GetPipelineRunRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetPipelineRunRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetPipelineRunRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetPipelineRunRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.GetPipelineRunRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
