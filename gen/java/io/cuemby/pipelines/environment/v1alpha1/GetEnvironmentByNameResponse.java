// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

package io.cuemby.pipelines.environment.v1alpha1;

/**
 * Protobuf type {@code pipelines.environment.v1alpha1.GetEnvironmentByNameResponse}
 */
public final class GetEnvironmentByNameResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.environment.v1alpha1.GetEnvironmentByNameResponse)
    GetEnvironmentByNameResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetEnvironmentByNameResponse.newBuilder() to construct.
  private GetEnvironmentByNameResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetEnvironmentByNameResponse() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetEnvironmentByNameResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetEnvironmentByNameResponse(
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
            io.cuemby.pipelines.environment.v1alpha1.Environment.Builder subBuilder = null;
            if (environment_ != null) {
              subBuilder = environment_.toBuilder();
            }
            environment_ = input.readMessage(io.cuemby.pipelines.environment.v1alpha1.Environment.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(environment_);
              environment_ = subBuilder.buildPartial();
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
    return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_GetEnvironmentByNameResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_GetEnvironmentByNameResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.class, io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.Builder.class);
  }

  public static final int ENVIRONMENT_FIELD_NUMBER = 1;
  private io.cuemby.pipelines.environment.v1alpha1.Environment environment_;
  /**
   * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   * @return Whether the environment field is set.
   */
  @java.lang.Override
  public boolean hasEnvironment() {
    return environment_ != null;
  }
  /**
   * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   * @return The environment.
   */
  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.Environment getEnvironment() {
    return environment_ == null ? io.cuemby.pipelines.environment.v1alpha1.Environment.getDefaultInstance() : environment_;
  }
  /**
   * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder getEnvironmentOrBuilder() {
    return getEnvironment();
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
    if (environment_ != null) {
      output.writeMessage(1, getEnvironment());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (environment_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getEnvironment());
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
    if (!(obj instanceof io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse other = (io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse) obj;

    if (hasEnvironment() != other.hasEnvironment()) return false;
    if (hasEnvironment()) {
      if (!getEnvironment()
          .equals(other.getEnvironment())) return false;
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
    if (hasEnvironment()) {
      hash = (37 * hash) + ENVIRONMENT_FIELD_NUMBER;
      hash = (53 * hash) + getEnvironment().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse prototype) {
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
   * Protobuf type {@code pipelines.environment.v1alpha1.GetEnvironmentByNameResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.environment.v1alpha1.GetEnvironmentByNameResponse)
      io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_GetEnvironmentByNameResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_GetEnvironmentByNameResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.class, io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.Builder.class);
    }

    // Construct using io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.newBuilder()
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
      if (environmentBuilder_ == null) {
        environment_ = null;
      } else {
        environment_ = null;
        environmentBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_GetEnvironmentByNameResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse getDefaultInstanceForType() {
      return io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse build() {
      io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse buildPartial() {
      io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse result = new io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse(this);
      if (environmentBuilder_ == null) {
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
      if (other instanceof io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse) {
        return mergeFrom((io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse other) {
      if (other == io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse.getDefaultInstance()) return this;
      if (other.hasEnvironment()) {
        mergeEnvironment(other.getEnvironment());
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
      io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.pipelines.environment.v1alpha1.Environment environment_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.environment.v1alpha1.Environment, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder, io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder> environmentBuilder_;
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     * @return Whether the environment field is set.
     */
    public boolean hasEnvironment() {
      return environmentBuilder_ != null || environment_ != null;
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     * @return The environment.
     */
    public io.cuemby.pipelines.environment.v1alpha1.Environment getEnvironment() {
      if (environmentBuilder_ == null) {
        return environment_ == null ? io.cuemby.pipelines.environment.v1alpha1.Environment.getDefaultInstance() : environment_;
      } else {
        return environmentBuilder_.getMessage();
      }
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder setEnvironment(io.cuemby.pipelines.environment.v1alpha1.Environment value) {
      if (environmentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        environment_ = value;
        onChanged();
      } else {
        environmentBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder setEnvironment(
        io.cuemby.pipelines.environment.v1alpha1.Environment.Builder builderForValue) {
      if (environmentBuilder_ == null) {
        environment_ = builderForValue.build();
        onChanged();
      } else {
        environmentBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder mergeEnvironment(io.cuemby.pipelines.environment.v1alpha1.Environment value) {
      if (environmentBuilder_ == null) {
        if (environment_ != null) {
          environment_ =
            io.cuemby.pipelines.environment.v1alpha1.Environment.newBuilder(environment_).mergeFrom(value).buildPartial();
        } else {
          environment_ = value;
        }
        onChanged();
      } else {
        environmentBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public Builder clearEnvironment() {
      if (environmentBuilder_ == null) {
        environment_ = null;
        onChanged();
      } else {
        environment_ = null;
        environmentBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.Environment.Builder getEnvironmentBuilder() {
      
      onChanged();
      return getEnvironmentFieldBuilder().getBuilder();
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    public io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder getEnvironmentOrBuilder() {
      if (environmentBuilder_ != null) {
        return environmentBuilder_.getMessageOrBuilder();
      } else {
        return environment_ == null ?
            io.cuemby.pipelines.environment.v1alpha1.Environment.getDefaultInstance() : environment_;
      }
    }
    /**
     * <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.environment.v1alpha1.Environment, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder, io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder> 
        getEnvironmentFieldBuilder() {
      if (environmentBuilder_ == null) {
        environmentBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.pipelines.environment.v1alpha1.Environment, io.cuemby.pipelines.environment.v1alpha1.Environment.Builder, io.cuemby.pipelines.environment.v1alpha1.EnvironmentOrBuilder>(
                getEnvironment(),
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


    // @@protoc_insertion_point(builder_scope:pipelines.environment.v1alpha1.GetEnvironmentByNameResponse)
  }

  // @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.GetEnvironmentByNameResponse)
  private static final io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse();
  }

  public static io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetEnvironmentByNameResponse>
      PARSER = new com.google.protobuf.AbstractParser<GetEnvironmentByNameResponse>() {
    @java.lang.Override
    public GetEnvironmentByNameResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetEnvironmentByNameResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetEnvironmentByNameResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetEnvironmentByNameResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.GetEnvironmentByNameResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

