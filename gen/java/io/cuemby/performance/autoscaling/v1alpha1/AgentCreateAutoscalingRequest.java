// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

/**
 * Protobuf type {@code performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest}
 */
public final class AgentCreateAutoscalingRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)
    AgentCreateAutoscalingRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AgentCreateAutoscalingRequest.newBuilder() to construct.
  private AgentCreateAutoscalingRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AgentCreateAutoscalingRequest() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new AgentCreateAutoscalingRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private AgentCreateAutoscalingRequest(
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
            io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.Builder subBuilder = null;
            if (autoscaling_ != null) {
              subBuilder = autoscaling_.toBuilder();
            }
            autoscaling_ = input.readMessage(io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(autoscaling_);
              autoscaling_ = subBuilder.buildPartial();
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
    return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.class, io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.Builder.class);
  }

  public static final int AUTOSCALING_FIELD_NUMBER = 1;
  private io.cuemby.performance.autoscaling.v1alpha1.Autoscaling autoscaling_;
  /**
   * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
   * @return Whether the autoscaling field is set.
   */
  @java.lang.Override
  public boolean hasAutoscaling() {
    return autoscaling_ != null;
  }
  /**
   * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
   * @return The autoscaling.
   */
  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.Autoscaling getAutoscaling() {
    return autoscaling_ == null ? io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.getDefaultInstance() : autoscaling_;
  }
  /**
   * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
   */
  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder getAutoscalingOrBuilder() {
    return getAutoscaling();
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
    if (autoscaling_ != null) {
      output.writeMessage(1, getAutoscaling());
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
    if (autoscaling_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getAutoscaling());
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
    if (!(obj instanceof io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)) {
      return super.equals(obj);
    }
    io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest other = (io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest) obj;

    if (hasAutoscaling() != other.hasAutoscaling()) return false;
    if (hasAutoscaling()) {
      if (!getAutoscaling()
          .equals(other.getAutoscaling())) return false;
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
    if (hasAutoscaling()) {
      hash = (37 * hash) + AUTOSCALING_FIELD_NUMBER;
      hash = (53 * hash) + getAutoscaling().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest prototype) {
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
   * Protobuf type {@code performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)
      io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.class, io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.Builder.class);
    }

    // Construct using io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.newBuilder()
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
      if (autoscalingBuilder_ == null) {
        autoscaling_ = null;
      } else {
        autoscaling_ = null;
        autoscalingBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingAgentApiProto.internal_static_performance_autoscaling_v1alpha1_AgentCreateAutoscalingRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest getDefaultInstanceForType() {
      return io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest build() {
      io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest buildPartial() {
      io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest result = new io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest(this);
      if (autoscalingBuilder_ == null) {
        result.autoscaling_ = autoscaling_;
      } else {
        result.autoscaling_ = autoscalingBuilder_.build();
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
      if (other instanceof io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest) {
        return mergeFrom((io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest other) {
      if (other == io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest.getDefaultInstance()) return this;
      if (other.hasAutoscaling()) {
        mergeAutoscaling(other.getAutoscaling());
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
      io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.performance.autoscaling.v1alpha1.Autoscaling autoscaling_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.performance.autoscaling.v1alpha1.Autoscaling, io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.Builder, io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder> autoscalingBuilder_;
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     * @return Whether the autoscaling field is set.
     */
    public boolean hasAutoscaling() {
      return autoscalingBuilder_ != null || autoscaling_ != null;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     * @return The autoscaling.
     */
    public io.cuemby.performance.autoscaling.v1alpha1.Autoscaling getAutoscaling() {
      if (autoscalingBuilder_ == null) {
        return autoscaling_ == null ? io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.getDefaultInstance() : autoscaling_;
      } else {
        return autoscalingBuilder_.getMessage();
      }
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    public Builder setAutoscaling(io.cuemby.performance.autoscaling.v1alpha1.Autoscaling value) {
      if (autoscalingBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        autoscaling_ = value;
        onChanged();
      } else {
        autoscalingBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    public Builder setAutoscaling(
        io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.Builder builderForValue) {
      if (autoscalingBuilder_ == null) {
        autoscaling_ = builderForValue.build();
        onChanged();
      } else {
        autoscalingBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    public Builder mergeAutoscaling(io.cuemby.performance.autoscaling.v1alpha1.Autoscaling value) {
      if (autoscalingBuilder_ == null) {
        if (autoscaling_ != null) {
          autoscaling_ =
            io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.newBuilder(autoscaling_).mergeFrom(value).buildPartial();
        } else {
          autoscaling_ = value;
        }
        onChanged();
      } else {
        autoscalingBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    public Builder clearAutoscaling() {
      if (autoscalingBuilder_ == null) {
        autoscaling_ = null;
        onChanged();
      } else {
        autoscaling_ = null;
        autoscalingBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    public io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.Builder getAutoscalingBuilder() {
      
      onChanged();
      return getAutoscalingFieldBuilder().getBuilder();
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    public io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder getAutoscalingOrBuilder() {
      if (autoscalingBuilder_ != null) {
        return autoscalingBuilder_.getMessageOrBuilder();
      } else {
        return autoscaling_ == null ?
            io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.getDefaultInstance() : autoscaling_;
      }
    }
    /**
     * <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.performance.autoscaling.v1alpha1.Autoscaling, io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.Builder, io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder> 
        getAutoscalingFieldBuilder() {
      if (autoscalingBuilder_ == null) {
        autoscalingBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.performance.autoscaling.v1alpha1.Autoscaling, io.cuemby.performance.autoscaling.v1alpha1.Autoscaling.Builder, io.cuemby.performance.autoscaling.v1alpha1.AutoscalingOrBuilder>(
                getAutoscaling(),
                getParentForChildren(),
                isClean());
        autoscaling_ = null;
      }
      return autoscalingBuilder_;
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


    // @@protoc_insertion_point(builder_scope:performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)
  }

  // @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest)
  private static final io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest();
  }

  public static io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AgentCreateAutoscalingRequest>
      PARSER = new com.google.protobuf.AbstractParser<AgentCreateAutoscalingRequest>() {
    @java.lang.Override
    public AgentCreateAutoscalingRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new AgentCreateAutoscalingRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AgentCreateAutoscalingRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AgentCreateAutoscalingRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.AgentCreateAutoscalingRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

