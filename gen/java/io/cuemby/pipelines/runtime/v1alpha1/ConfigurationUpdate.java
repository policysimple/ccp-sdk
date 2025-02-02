// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf type {@code pipelines.runtime.v1alpha1.ConfigurationUpdate}
 */
public final class ConfigurationUpdate extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.runtime.v1alpha1.ConfigurationUpdate)
    ConfigurationUpdateOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ConfigurationUpdate.newBuilder() to construct.
  private ConfigurationUpdate(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ConfigurationUpdate() {
    envs_ = java.util.Collections.emptyList();
    instanceType_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ConfigurationUpdate();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private ConfigurationUpdate(
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
              envs_ = new java.util.ArrayList<io.cuemby.pipelines.runtime.v1alpha1.Env>();
              mutable_bitField0_ |= 0x00000001;
            }
            envs_.add(
                input.readMessage(io.cuemby.pipelines.runtime.v1alpha1.Env.parser(), extensionRegistry));
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            instanceType_ = s;
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
        envs_ = java.util.Collections.unmodifiableList(envs_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ConfigurationUpdate_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ConfigurationUpdate_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.class, io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.Builder.class);
  }

  public static final int ENVS_FIELD_NUMBER = 1;
  private java.util.List<io.cuemby.pipelines.runtime.v1alpha1.Env> envs_;
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  @java.lang.Override
  public java.util.List<io.cuemby.pipelines.runtime.v1alpha1.Env> getEnvsList() {
    return envs_;
  }
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder> 
      getEnvsOrBuilderList() {
    return envs_;
  }
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  @java.lang.Override
  public int getEnvsCount() {
    return envs_.size();
  }
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.Env getEnvs(int index) {
    return envs_.get(index);
  }
  /**
   * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder getEnvsOrBuilder(
      int index) {
    return envs_.get(index);
  }

  public static final int INSTANCE_TYPE_FIELD_NUMBER = 2;
  private volatile java.lang.Object instanceType_;
  /**
   * <code>string instance_type = 2 [json_name = "instanceType"];</code>
   * @return The instanceType.
   */
  @java.lang.Override
  public java.lang.String getInstanceType() {
    java.lang.Object ref = instanceType_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      instanceType_ = s;
      return s;
    }
  }
  /**
   * <code>string instance_type = 2 [json_name = "instanceType"];</code>
   * @return The bytes for instanceType.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getInstanceTypeBytes() {
    java.lang.Object ref = instanceType_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      instanceType_ = b;
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
    for (int i = 0; i < envs_.size(); i++) {
      output.writeMessage(1, envs_.get(i));
    }
    if (!getInstanceTypeBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, instanceType_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < envs_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, envs_.get(i));
    }
    if (!getInstanceTypeBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, instanceType_);
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
    if (!(obj instanceof io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate other = (io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate) obj;

    if (!getEnvsList()
        .equals(other.getEnvsList())) return false;
    if (!getInstanceType()
        .equals(other.getInstanceType())) return false;
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
    if (getEnvsCount() > 0) {
      hash = (37 * hash) + ENVS_FIELD_NUMBER;
      hash = (53 * hash) + getEnvsList().hashCode();
    }
    hash = (37 * hash) + INSTANCE_TYPE_FIELD_NUMBER;
    hash = (53 * hash) + getInstanceType().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate prototype) {
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
   * Protobuf type {@code pipelines.runtime.v1alpha1.ConfigurationUpdate}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.runtime.v1alpha1.ConfigurationUpdate)
      io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ConfigurationUpdate_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ConfigurationUpdate_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.class, io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.Builder.class);
    }

    // Construct using io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.newBuilder()
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
        getEnvsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (envsBuilder_ == null) {
        envs_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        envsBuilder_.clear();
      }
      instanceType_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ConfigurationUpdate_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate getDefaultInstanceForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate build() {
      io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate buildPartial() {
      io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate result = new io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate(this);
      int from_bitField0_ = bitField0_;
      if (envsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          envs_ = java.util.Collections.unmodifiableList(envs_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.envs_ = envs_;
      } else {
        result.envs_ = envsBuilder_.build();
      }
      result.instanceType_ = instanceType_;
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
      if (other instanceof io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate) {
        return mergeFrom((io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate other) {
      if (other == io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate.getDefaultInstance()) return this;
      if (envsBuilder_ == null) {
        if (!other.envs_.isEmpty()) {
          if (envs_.isEmpty()) {
            envs_ = other.envs_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureEnvsIsMutable();
            envs_.addAll(other.envs_);
          }
          onChanged();
        }
      } else {
        if (!other.envs_.isEmpty()) {
          if (envsBuilder_.isEmpty()) {
            envsBuilder_.dispose();
            envsBuilder_ = null;
            envs_ = other.envs_;
            bitField0_ = (bitField0_ & ~0x00000001);
            envsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getEnvsFieldBuilder() : null;
          } else {
            envsBuilder_.addAllMessages(other.envs_);
          }
        }
      }
      if (!other.getInstanceType().isEmpty()) {
        instanceType_ = other.instanceType_;
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
      io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.util.List<io.cuemby.pipelines.runtime.v1alpha1.Env> envs_ =
      java.util.Collections.emptyList();
    private void ensureEnvsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        envs_ = new java.util.ArrayList<io.cuemby.pipelines.runtime.v1alpha1.Env>(envs_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.pipelines.runtime.v1alpha1.Env, io.cuemby.pipelines.runtime.v1alpha1.Env.Builder, io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder> envsBuilder_;

    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public java.util.List<io.cuemby.pipelines.runtime.v1alpha1.Env> getEnvsList() {
      if (envsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(envs_);
      } else {
        return envsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public int getEnvsCount() {
      if (envsBuilder_ == null) {
        return envs_.size();
      } else {
        return envsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.Env getEnvs(int index) {
      if (envsBuilder_ == null) {
        return envs_.get(index);
      } else {
        return envsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder setEnvs(
        int index, io.cuemby.pipelines.runtime.v1alpha1.Env value) {
      if (envsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureEnvsIsMutable();
        envs_.set(index, value);
        onChanged();
      } else {
        envsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder setEnvs(
        int index, io.cuemby.pipelines.runtime.v1alpha1.Env.Builder builderForValue) {
      if (envsBuilder_ == null) {
        ensureEnvsIsMutable();
        envs_.set(index, builderForValue.build());
        onChanged();
      } else {
        envsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder addEnvs(io.cuemby.pipelines.runtime.v1alpha1.Env value) {
      if (envsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureEnvsIsMutable();
        envs_.add(value);
        onChanged();
      } else {
        envsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder addEnvs(
        int index, io.cuemby.pipelines.runtime.v1alpha1.Env value) {
      if (envsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureEnvsIsMutable();
        envs_.add(index, value);
        onChanged();
      } else {
        envsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder addEnvs(
        io.cuemby.pipelines.runtime.v1alpha1.Env.Builder builderForValue) {
      if (envsBuilder_ == null) {
        ensureEnvsIsMutable();
        envs_.add(builderForValue.build());
        onChanged();
      } else {
        envsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder addEnvs(
        int index, io.cuemby.pipelines.runtime.v1alpha1.Env.Builder builderForValue) {
      if (envsBuilder_ == null) {
        ensureEnvsIsMutable();
        envs_.add(index, builderForValue.build());
        onChanged();
      } else {
        envsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder addAllEnvs(
        java.lang.Iterable<? extends io.cuemby.pipelines.runtime.v1alpha1.Env> values) {
      if (envsBuilder_ == null) {
        ensureEnvsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, envs_);
        onChanged();
      } else {
        envsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder clearEnvs() {
      if (envsBuilder_ == null) {
        envs_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        envsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public Builder removeEnvs(int index) {
      if (envsBuilder_ == null) {
        ensureEnvsIsMutable();
        envs_.remove(index);
        onChanged();
      } else {
        envsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.Env.Builder getEnvsBuilder(
        int index) {
      return getEnvsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder getEnvsOrBuilder(
        int index) {
      if (envsBuilder_ == null) {
        return envs_.get(index);  } else {
        return envsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public java.util.List<? extends io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder> 
         getEnvsOrBuilderList() {
      if (envsBuilder_ != null) {
        return envsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(envs_);
      }
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.Env.Builder addEnvsBuilder() {
      return getEnvsFieldBuilder().addBuilder(
          io.cuemby.pipelines.runtime.v1alpha1.Env.getDefaultInstance());
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public io.cuemby.pipelines.runtime.v1alpha1.Env.Builder addEnvsBuilder(
        int index) {
      return getEnvsFieldBuilder().addBuilder(
          index, io.cuemby.pipelines.runtime.v1alpha1.Env.getDefaultInstance());
    }
    /**
     * <code>repeated .pipelines.runtime.v1alpha1.Env envs = 1 [json_name = "envs"];</code>
     */
    public java.util.List<io.cuemby.pipelines.runtime.v1alpha1.Env.Builder> 
         getEnvsBuilderList() {
      return getEnvsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.pipelines.runtime.v1alpha1.Env, io.cuemby.pipelines.runtime.v1alpha1.Env.Builder, io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder> 
        getEnvsFieldBuilder() {
      if (envsBuilder_ == null) {
        envsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            io.cuemby.pipelines.runtime.v1alpha1.Env, io.cuemby.pipelines.runtime.v1alpha1.Env.Builder, io.cuemby.pipelines.runtime.v1alpha1.EnvOrBuilder>(
                envs_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        envs_ = null;
      }
      return envsBuilder_;
    }

    private java.lang.Object instanceType_ = "";
    /**
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @return The instanceType.
     */
    public java.lang.String getInstanceType() {
      java.lang.Object ref = instanceType_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        instanceType_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @return The bytes for instanceType.
     */
    public com.google.protobuf.ByteString
        getInstanceTypeBytes() {
      java.lang.Object ref = instanceType_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        instanceType_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @param value The instanceType to set.
     * @return This builder for chaining.
     */
    public Builder setInstanceType(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      instanceType_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @return This builder for chaining.
     */
    public Builder clearInstanceType() {
      
      instanceType_ = getDefaultInstance().getInstanceType();
      onChanged();
      return this;
    }
    /**
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @param value The bytes for instanceType to set.
     * @return This builder for chaining.
     */
    public Builder setInstanceTypeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      instanceType_ = value;
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


    // @@protoc_insertion_point(builder_scope:pipelines.runtime.v1alpha1.ConfigurationUpdate)
  }

  // @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.ConfigurationUpdate)
  private static final io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate();
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ConfigurationUpdate>
      PARSER = new com.google.protobuf.AbstractParser<ConfigurationUpdate>() {
    @java.lang.Override
    public ConfigurationUpdate parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new ConfigurationUpdate(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ConfigurationUpdate> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ConfigurationUpdate> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.ConfigurationUpdate getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

