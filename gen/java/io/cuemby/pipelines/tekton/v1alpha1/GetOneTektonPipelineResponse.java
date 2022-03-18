// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton_api.proto

package io.cuemby.pipelines.tekton.v1alpha1;

/**
 * Protobuf type {@code pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse}
 */
public final class GetOneTektonPipelineResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse)
    GetOneTektonPipelineResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetOneTektonPipelineResponse.newBuilder() to construct.
  private GetOneTektonPipelineResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetOneTektonPipelineResponse() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetOneTektonPipelineResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetOneTektonPipelineResponse(
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
            io.cuemby.pipelines.tekton.v1alpha1.Pipeline.Builder subBuilder = null;
            if (tektonPipeline_ != null) {
              subBuilder = tektonPipeline_.toBuilder();
            }
            tektonPipeline_ = input.readMessage(io.cuemby.pipelines.tekton.v1alpha1.Pipeline.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(tektonPipeline_);
              tektonPipeline_ = subBuilder.buildPartial();
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
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.class, io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.Builder.class);
  }

  public static final int TEKTON_PIPELINE_FIELD_NUMBER = 1;
  private io.cuemby.pipelines.tekton.v1alpha1.Pipeline tektonPipeline_;
  /**
   * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
   * @return Whether the tektonPipeline field is set.
   */
  @java.lang.Override
  public boolean hasTektonPipeline() {
    return tektonPipeline_ != null;
  }
  /**
   * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
   * @return The tektonPipeline.
   */
  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.Pipeline getTektonPipeline() {
    return tektonPipeline_ == null ? io.cuemby.pipelines.tekton.v1alpha1.Pipeline.getDefaultInstance() : tektonPipeline_;
  }
  /**
   * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.PipelineOrBuilder getTektonPipelineOrBuilder() {
    return getTektonPipeline();
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
    if (tektonPipeline_ != null) {
      output.writeMessage(1, getTektonPipeline());
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
    if (tektonPipeline_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getTektonPipeline());
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
    if (!(obj instanceof io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse other = (io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse) obj;

    if (hasTektonPipeline() != other.hasTektonPipeline()) return false;
    if (hasTektonPipeline()) {
      if (!getTektonPipeline()
          .equals(other.getTektonPipeline())) return false;
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
    if (hasTektonPipeline()) {
      hash = (37 * hash) + TEKTON_PIPELINE_FIELD_NUMBER;
      hash = (53 * hash) + getTektonPipeline().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse prototype) {
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
   * Protobuf type {@code pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse)
      io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.class, io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.Builder.class);
    }

    // Construct using io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.newBuilder()
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
      if (tektonPipelineBuilder_ == null) {
        tektonPipeline_ = null;
      } else {
        tektonPipeline_ = null;
        tektonPipelineBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse getDefaultInstanceForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse build() {
      io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse buildPartial() {
      io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse result = new io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse(this);
      if (tektonPipelineBuilder_ == null) {
        result.tektonPipeline_ = tektonPipeline_;
      } else {
        result.tektonPipeline_ = tektonPipelineBuilder_.build();
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
      if (other instanceof io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse) {
        return mergeFrom((io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse other) {
      if (other == io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse.getDefaultInstance()) return this;
      if (other.hasTektonPipeline()) {
        mergeTektonPipeline(other.getTektonPipeline());
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
      io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.pipelines.tekton.v1alpha1.Pipeline tektonPipeline_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.tekton.v1alpha1.Pipeline, io.cuemby.pipelines.tekton.v1alpha1.Pipeline.Builder, io.cuemby.pipelines.tekton.v1alpha1.PipelineOrBuilder> tektonPipelineBuilder_;
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     * @return Whether the tektonPipeline field is set.
     */
    public boolean hasTektonPipeline() {
      return tektonPipelineBuilder_ != null || tektonPipeline_ != null;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     * @return The tektonPipeline.
     */
    public io.cuemby.pipelines.tekton.v1alpha1.Pipeline getTektonPipeline() {
      if (tektonPipelineBuilder_ == null) {
        return tektonPipeline_ == null ? io.cuemby.pipelines.tekton.v1alpha1.Pipeline.getDefaultInstance() : tektonPipeline_;
      } else {
        return tektonPipelineBuilder_.getMessage();
      }
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    public Builder setTektonPipeline(io.cuemby.pipelines.tekton.v1alpha1.Pipeline value) {
      if (tektonPipelineBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        tektonPipeline_ = value;
        onChanged();
      } else {
        tektonPipelineBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    public Builder setTektonPipeline(
        io.cuemby.pipelines.tekton.v1alpha1.Pipeline.Builder builderForValue) {
      if (tektonPipelineBuilder_ == null) {
        tektonPipeline_ = builderForValue.build();
        onChanged();
      } else {
        tektonPipelineBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    public Builder mergeTektonPipeline(io.cuemby.pipelines.tekton.v1alpha1.Pipeline value) {
      if (tektonPipelineBuilder_ == null) {
        if (tektonPipeline_ != null) {
          tektonPipeline_ =
            io.cuemby.pipelines.tekton.v1alpha1.Pipeline.newBuilder(tektonPipeline_).mergeFrom(value).buildPartial();
        } else {
          tektonPipeline_ = value;
        }
        onChanged();
      } else {
        tektonPipelineBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    public Builder clearTektonPipeline() {
      if (tektonPipelineBuilder_ == null) {
        tektonPipeline_ = null;
        onChanged();
      } else {
        tektonPipeline_ = null;
        tektonPipelineBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    public io.cuemby.pipelines.tekton.v1alpha1.Pipeline.Builder getTektonPipelineBuilder() {
      
      onChanged();
      return getTektonPipelineFieldBuilder().getBuilder();
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    public io.cuemby.pipelines.tekton.v1alpha1.PipelineOrBuilder getTektonPipelineOrBuilder() {
      if (tektonPipelineBuilder_ != null) {
        return tektonPipelineBuilder_.getMessageOrBuilder();
      } else {
        return tektonPipeline_ == null ?
            io.cuemby.pipelines.tekton.v1alpha1.Pipeline.getDefaultInstance() : tektonPipeline_;
      }
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.tekton.v1alpha1.Pipeline, io.cuemby.pipelines.tekton.v1alpha1.Pipeline.Builder, io.cuemby.pipelines.tekton.v1alpha1.PipelineOrBuilder> 
        getTektonPipelineFieldBuilder() {
      if (tektonPipelineBuilder_ == null) {
        tektonPipelineBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.pipelines.tekton.v1alpha1.Pipeline, io.cuemby.pipelines.tekton.v1alpha1.Pipeline.Builder, io.cuemby.pipelines.tekton.v1alpha1.PipelineOrBuilder>(
                getTektonPipeline(),
                getParentForChildren(),
                isClean());
        tektonPipeline_ = null;
      }
      return tektonPipelineBuilder_;
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


    // @@protoc_insertion_point(builder_scope:pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse)
  }

  // @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse)
  private static final io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse();
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetOneTektonPipelineResponse>
      PARSER = new com.google.protobuf.AbstractParser<GetOneTektonPipelineResponse>() {
    @java.lang.Override
    public GetOneTektonPipelineResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetOneTektonPipelineResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetOneTektonPipelineResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetOneTektonPipelineResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
