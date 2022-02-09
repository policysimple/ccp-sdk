// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

package io.cuemby.pipelines.environment.v1alpha1;

/**
 * Protobuf type {@code pipelines.environment.v1alpha1.ListEnvironmentResponse}
 */
public final class ListEnvironmentResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.environment.v1alpha1.ListEnvironmentResponse)
    ListEnvironmentResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ListEnvironmentResponse.newBuilder() to construct.
  private ListEnvironmentResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ListEnvironmentResponse() {
    environment_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ListEnvironmentResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private ListEnvironmentResponse(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
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
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              environment_ = new java.util.ArrayList<io.cuemby.pipelines.environment.v1alpha1.Environment>();
              mutable_bitField0_ |= 0x00000001;
            }
            environment_.add(
                input.readMessage(io.cuemby.pipelines.environment.v1alpha1.Environment.parser(), extensionRegistry));
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
      if (((mutable_bitField0_ & 0x00000001) != 0)) {
        environment_ = java.util.Collections.unmodifiableList(environment_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.class, io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.Builder.class);
  }

  public static final int ENVIRONMENT_FIELD_NUMBER = 1;
  private java.util.List<io.cuemby.pipelines.environment.v1alpha1.Environment> environment_;
  /**
   * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  @java.lang.Override
  public java.util.List<io.cuemby.pipelines.environment.v1alpha1.Environment> getEnvironmentList() {
    return environment_;
  }
  /**
   * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder> 
      getEnvironmentOrBuilderList() {
    return environment_;
  }
  /**
   * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  @java.lang.Override
  public int getEnvironmentCount() {
    return environment_.size();
  }
  /**
   * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.Environment getEnvironment(int index) {
    return environment_.get(index);
  }
  /**
   * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder getEnvironmentOrBuilder(
      int index) {
    return environment_.get(index);
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
    for (int i = 0; i < environment_.size(); i++) {
      output.writeMessage(1, environment_.get(i));
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < environment_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, environment_.get(i));
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
    if (!(obj instanceof io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse other = (io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse) obj;

    if (!getEnvironmentList()
        .equals(other.getEnvironmentList())) return false;
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
    if (getEnvironmentCount() > 0) {
      hash = (37 * hash) + ENVIRONMENT_FIELD_NUMBER;
      hash = (53 * hash) + getEnvironmentList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse prototype) {
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
   * Protobuf type {@code pipelines.environment.v1alpha1.ListEnvironmentResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.environment.v1alpha1.ListEnvironmentResponse)
      io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.class, io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.Builder.class);
    }

    // Construct using io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.newBuilder()
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
        getEnvironmentFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (environmentBuilder_ == null) {
        environment_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        environmentBuilder_.clear();
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_ListEnvironmentResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse getDefaultInstanceForType() {
      return io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse build() {
      io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse buildPartial() {
      io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse result = new io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse(this);
      int from_bitField0_ = bitField0_;
      if (environmentBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          environment_ = java.util.Collections.unmodifiableList(environment_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.environment_ = environment_;
      } else {
        result.environment_ = environmentBuilder_.build();
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
      if (other instanceof io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse) {
        return mergeFrom((io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse other) {
      if (other == io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse.getDefaultInstance()) return this;
      if (environmentBuilder_ == null) {
        if (!other.environment_.isEmpty()) {
          if (environment_.isEmpty()) {
            environment_ = other.environment_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureEnvironmentIsMutable();
            environment_.addAll(other.environment_);
          }
          onChanged();
        }
      } else {
        if (!other.environment_.isEmpty()) {
          if (environmentBuilder_.isEmpty()) {
            environmentBuilder_.dispose();
            environmentBuilder_ = null;
            environment_ = other.environment_;
            bitField0_ = (bitField0_ & ~0x00000001);
            environmentBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getEnvironmentFieldBuilder() : null;
          } else {
            environmentBuilder_.addAllMessages(other.environment_);
          }
        }
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
      io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.util.List<io.cuemby.pipelines.environment.v1alpha1.Environment> environment_ =
      java.util.Collections.emptyList();
    private void ensureEnvironmentIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        environment_ = new java.util.ArrayList<io.cuemby.pipelines.environment.v1alpha1.Environment>(environment_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.pipelines.environment.v1alpha1.Environment, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder, io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder> environmentBuilder_;

    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public java.util.List<io.cuemby.pipelines.environment.v1alpha1.Environment> getEnvironmentList() {
      if (environmentBuilder_ == null) {
        return java.util.Collections.unmodifiableList(environment_);
      } else {
        return environmentBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public int getEnvironmentCount() {
      if (environmentBuilder_ == null) {
        return environment_.size();
      } else {
        return environmentBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.Environment getEnvironment(int index) {
      if (environmentBuilder_ == null) {
        return environment_.get(index);
      } else {
        return environmentBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder setEnvironment(
        int index, io.cuemby.pipelines.environment.v1alpha1.Environment value) {
      if (environmentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureEnvironmentIsMutable();
        environment_.set(index, value);
        onChanged();
      } else {
        environmentBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder setEnvironment(
        int index, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder builderForValue) {
      if (environmentBuilder_ == null) {
        ensureEnvironmentIsMutable();
        environment_.set(index, builderForValue.build());
        onChanged();
      } else {
        environmentBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder addEnvironment(io.cuemby.pipelines.environment.v1alpha1.Environment value) {
      if (environmentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureEnvironmentIsMutable();
        environment_.add(value);
        onChanged();
      } else {
        environmentBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder addEnvironment(
        int index, io.cuemby.pipelines.environment.v1alpha1.Environment value) {
      if (environmentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureEnvironmentIsMutable();
        environment_.add(index, value);
        onChanged();
      } else {
        environmentBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder addEnvironment(
        io.cuemby.pipelines.environment.v1alpha1.Environment.Builder builderForValue) {
      if (environmentBuilder_ == null) {
        ensureEnvironmentIsMutable();
        environment_.add(builderForValue.build());
        onChanged();
      } else {
        environmentBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder addEnvironment(
        int index, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder builderForValue) {
      if (environmentBuilder_ == null) {
        ensureEnvironmentIsMutable();
        environment_.add(index, builderForValue.build());
        onChanged();
      } else {
        environmentBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder addAllEnvironment(
        java.lang.Iterable<? extends io.cuemby.pipelines.environment.v1alpha1.Environment> values) {
      if (environmentBuilder_ == null) {
        ensureEnvironmentIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, environment_);
        onChanged();
      } else {
        environmentBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder clearEnvironment() {
      if (environmentBuilder_ == null) {
        environment_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        environmentBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder removeEnvironment(int index) {
      if (environmentBuilder_ == null) {
        ensureEnvironmentIsMutable();
        environment_.remove(index);
        onChanged();
      } else {
        environmentBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.Environment.Builder getEnvironmentBuilder(
        int index) {
      return getEnvironmentFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder getEnvironmentOrBuilder(
        int index) {
      if (environmentBuilder_ == null) {
        return environment_.get(index);  } else {
        return environmentBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public java.util.List<? extends io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder> 
         getEnvironmentOrBuilderList() {
      if (environmentBuilder_ != null) {
        return environmentBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(environment_);
      }
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.Environment.Builder addEnvironmentBuilder() {
      return getEnvironmentFieldBuilder().addBuilder(
          io.cuemby.pipelines.environment.v1alpha1.Environment.getDefaultInstance());
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.Environment.Builder addEnvironmentBuilder(
        int index) {
      return getEnvironmentFieldBuilder().addBuilder(
          index, io.cuemby.pipelines.environment.v1alpha1.Environment.getDefaultInstance());
    }
    /**
     * <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public java.util.List<io.cuemby.pipelines.environment.v1alpha1.Environment.Builder> 
         getEnvironmentBuilderList() {
      return getEnvironmentFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.pipelines.environment.v1alpha1.Environment, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder, io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder> 
        getEnvironmentFieldBuilder() {
      if (environmentBuilder_ == null) {
        environmentBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            io.cuemby.pipelines.environment.v1alpha1.Environment, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder, io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder>(
                environment_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        environment_ = null;
      }
      return environmentBuilder_;
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


    // @@protoc_insertion_point(builder_scope:pipelines.environment.v1alpha1.ListEnvironmentResponse)
  }

  // @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.ListEnvironmentResponse)
  private static final io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse();
  }

  public static io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ListEnvironmentResponse>
      PARSER = new com.google.protobuf.AbstractParser<ListEnvironmentResponse>() {
    @java.lang.Override
    public ListEnvironmentResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new ListEnvironmentResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ListEnvironmentResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ListEnvironmentResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.ListEnvironmentResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
