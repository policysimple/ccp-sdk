// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

/**
 * Protobuf type {@code performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse}
 */
public final class AgentGetAutoscalingResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)
    AgentGetAutoscalingResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AgentGetAutoscalingResponse.newBuilder() to construct.
  private AgentGetAutoscalingResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AgentGetAutoscalingResponse() {
    origin_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new AgentGetAutoscalingResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private AgentGetAutoscalingResponse(
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
            io.cuemby.performance.autoscaling.v1alpha1.Metadata.Builder subBuilder = null;
            if (metadata_ != null) {
              subBuilder = metadata_.toBuilder();
            }
            metadata_ = input.readMessage(io.cuemby.performance.autoscaling.v1alpha1.Metadata.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(metadata_);
              metadata_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            origin_ = s;
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
    return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.class, io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.Builder.class);
  }

  public static final int METADATA_FIELD_NUMBER = 1;
  private io.cuemby.performance.autoscaling.v1alpha1.Metadata metadata_;
  /**
   * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
   * @return Whether the metadata field is set.
   */
  @java.lang.Override
  public boolean hasMetadata() {
    return metadata_ != null;
  }
  /**
   * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
   * @return The metadata.
   */
  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.Metadata getMetadata() {
    return metadata_ == null ? io.cuemby.performance.autoscaling.v1alpha1.Metadata.getDefaultInstance() : metadata_;
  }
  /**
   * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
   */
  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.MetadataOrBuilder getMetadataOrBuilder() {
    return getMetadata();
  }

  public static final int ORIGIN_FIELD_NUMBER = 2;
  private volatile java.lang.Object origin_;
  /**
   * <code>string origin = 2 [json_name = "origin"];</code>
   * @return The origin.
   */
  @java.lang.Override
  public java.lang.String getOrigin() {
    java.lang.Object ref = origin_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      origin_ = s;
      return s;
    }
  }
  /**
   * <code>string origin = 2 [json_name = "origin"];</code>
   * @return The bytes for origin.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getOriginBytes() {
    java.lang.Object ref = origin_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      origin_ = b;
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
    if (metadata_ != null) {
      output.writeMessage(1, getMetadata());
    }
    if (!getOriginBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, origin_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (metadata_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getMetadata());
    }
    if (!getOriginBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, origin_);
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
    if (!(obj instanceof io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)) {
      return super.equals(obj);
    }
    io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse other = (io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse) obj;

    if (hasMetadata() != other.hasMetadata()) return false;
    if (hasMetadata()) {
      if (!getMetadata()
          .equals(other.getMetadata())) return false;
    }
    if (!getOrigin()
        .equals(other.getOrigin())) return false;
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
    if (hasMetadata()) {
      hash = (37 * hash) + METADATA_FIELD_NUMBER;
      hash = (53 * hash) + getMetadata().hashCode();
    }
    hash = (37 * hash) + ORIGIN_FIELD_NUMBER;
    hash = (53 * hash) + getOrigin().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse prototype) {
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
   * Protobuf type {@code performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)
      io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.class, io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.Builder.class);
    }

    // Construct using io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.newBuilder()
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
      if (metadataBuilder_ == null) {
        metadata_ = null;
      } else {
        metadata_ = null;
        metadataBuilder_ = null;
      }
      origin_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentGetAutoscalingResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse getDefaultInstanceForType() {
      return io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse build() {
      io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse buildPartial() {
      io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse result = new io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse(this);
      if (metadataBuilder_ == null) {
        result.metadata_ = metadata_;
      } else {
        result.metadata_ = metadataBuilder_.build();
      }
      result.origin_ = origin_;
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
      if (other instanceof io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse) {
        return mergeFrom((io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse other) {
      if (other == io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse.getDefaultInstance()) return this;
      if (other.hasMetadata()) {
        mergeMetadata(other.getMetadata());
      }
      if (!other.getOrigin().isEmpty()) {
        origin_ = other.origin_;
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
      io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.performance.autoscaling.v1alpha1.Metadata metadata_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.performance.autoscaling.v1alpha1.Metadata, io.cuemby.performance.autoscaling.v1alpha1.Metadata.Builder, io.cuemby.performance.autoscaling.v1alpha1.MetadataOrBuilder> metadataBuilder_;
    /**
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     * @return Whether the metadata field is set.
     */
    public boolean hasMetadata() {
      return metadataBuilder_ != null || metadata_ != null;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     * @return The metadata.
     */
    public io.cuemby.performance.autoscaling.v1alpha1.Metadata getMetadata() {
      if (metadataBuilder_ == null) {
        return metadata_ == null ? io.cuemby.performance.autoscaling.v1alpha1.Metadata.getDefaultInstance() : metadata_;
      } else {
        return metadataBuilder_.getMessage();
      }
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    public Builder setMetadata(io.cuemby.performance.autoscaling.v1alpha1.Metadata value) {
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
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    public Builder setMetadata(
        io.cuemby.performance.autoscaling.v1alpha1.Metadata.Builder builderForValue) {
      if (metadataBuilder_ == null) {
        metadata_ = builderForValue.build();
        onChanged();
      } else {
        metadataBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    public Builder mergeMetadata(io.cuemby.performance.autoscaling.v1alpha1.Metadata value) {
      if (metadataBuilder_ == null) {
        if (metadata_ != null) {
          metadata_ =
            io.cuemby.performance.autoscaling.v1alpha1.Metadata.newBuilder(metadata_).mergeFrom(value).buildPartial();
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
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
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
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    public io.cuemby.performance.autoscaling.v1alpha1.Metadata.Builder getMetadataBuilder() {
      
      onChanged();
      return getMetadataFieldBuilder().getBuilder();
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    public io.cuemby.performance.autoscaling.v1alpha1.MetadataOrBuilder getMetadataOrBuilder() {
      if (metadataBuilder_ != null) {
        return metadataBuilder_.getMessageOrBuilder();
      } else {
        return metadata_ == null ?
            io.cuemby.performance.autoscaling.v1alpha1.Metadata.getDefaultInstance() : metadata_;
      }
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.performance.autoscaling.v1alpha1.Metadata, io.cuemby.performance.autoscaling.v1alpha1.Metadata.Builder, io.cuemby.performance.autoscaling.v1alpha1.MetadataOrBuilder> 
        getMetadataFieldBuilder() {
      if (metadataBuilder_ == null) {
        metadataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.performance.autoscaling.v1alpha1.Metadata, io.cuemby.performance.autoscaling.v1alpha1.Metadata.Builder, io.cuemby.performance.autoscaling.v1alpha1.MetadataOrBuilder>(
                getMetadata(),
                getParentForChildren(),
                isClean());
        metadata_ = null;
      }
      return metadataBuilder_;
    }

    private java.lang.Object origin_ = "";
    /**
     * <code>string origin = 2 [json_name = "origin"];</code>
     * @return The origin.
     */
    public java.lang.String getOrigin() {
      java.lang.Object ref = origin_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        origin_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string origin = 2 [json_name = "origin"];</code>
     * @return The bytes for origin.
     */
    public com.google.protobuf.ByteString
        getOriginBytes() {
      java.lang.Object ref = origin_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        origin_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string origin = 2 [json_name = "origin"];</code>
     * @param value The origin to set.
     * @return This builder for chaining.
     */
    public Builder setOrigin(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      origin_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string origin = 2 [json_name = "origin"];</code>
     * @return This builder for chaining.
     */
    public Builder clearOrigin() {
      
      origin_ = getDefaultInstance().getOrigin();
      onChanged();
      return this;
    }
    /**
     * <code>string origin = 2 [json_name = "origin"];</code>
     * @param value The bytes for origin to set.
     * @return This builder for chaining.
     */
    public Builder setOriginBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      origin_ = value;
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


    // @@protoc_insertion_point(builder_scope:performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)
  }

  // @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse)
  private static final io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse();
  }

  public static io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AgentGetAutoscalingResponse>
      PARSER = new com.google.protobuf.AbstractParser<AgentGetAutoscalingResponse>() {
    @java.lang.Override
    public AgentGetAutoscalingResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new AgentGetAutoscalingResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AgentGetAutoscalingResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AgentGetAutoscalingResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.AgentGetAutoscalingResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

