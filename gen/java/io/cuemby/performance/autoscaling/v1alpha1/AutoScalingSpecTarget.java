// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling.proto

package io.cuemby.performance.autoscaling.v1alpha1;

/**
 * <pre>
 * AutoScalingSpecTarget ...
 * </pre>
 *
 * Protobuf type {@code performance.autoscaling.v1alpha1.AutoScalingSpecTarget}
 */
public final class AutoScalingSpecTarget extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:performance.autoscaling.v1alpha1.AutoScalingSpecTarget)
    AutoScalingSpecTargetOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AutoScalingSpecTarget.newBuilder() to construct.
  private AutoScalingSpecTarget(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AutoScalingSpecTarget() {
    apiVersion_ = "";
    kind_ = "";
    name_ = "";
    container_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new AutoScalingSpecTarget();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private AutoScalingSpecTarget(
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

            apiVersion_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            kind_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            name_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            container_ = s;
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
    return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.internal_static_performance_autoscaling_v1alpha1_AutoScalingSpecTarget_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.internal_static_performance_autoscaling_v1alpha1_AutoScalingSpecTarget_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.class, io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.Builder.class);
  }

  public static final int API_VERSION_FIELD_NUMBER = 1;
  private volatile java.lang.Object apiVersion_;
  /**
   * <code>string api_version = 1 [json_name = "apiVersion"];</code>
   * @return The apiVersion.
   */
  @java.lang.Override
  public java.lang.String getApiVersion() {
    java.lang.Object ref = apiVersion_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      apiVersion_ = s;
      return s;
    }
  }
  /**
   * <code>string api_version = 1 [json_name = "apiVersion"];</code>
   * @return The bytes for apiVersion.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getApiVersionBytes() {
    java.lang.Object ref = apiVersion_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      apiVersion_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int KIND_FIELD_NUMBER = 2;
  private volatile java.lang.Object kind_;
  /**
   * <code>string kind = 2 [json_name = "kind"];</code>
   * @return The kind.
   */
  @java.lang.Override
  public java.lang.String getKind() {
    java.lang.Object ref = kind_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      kind_ = s;
      return s;
    }
  }
  /**
   * <code>string kind = 2 [json_name = "kind"];</code>
   * @return The bytes for kind.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getKindBytes() {
    java.lang.Object ref = kind_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      kind_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NAME_FIELD_NUMBER = 3;
  private volatile java.lang.Object name_;
  /**
   * <code>string name = 3 [json_name = "name"];</code>
   * @return The name.
   */
  @java.lang.Override
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <code>string name = 3 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int CONTAINER_FIELD_NUMBER = 4;
  private volatile java.lang.Object container_;
  /**
   * <code>string container = 4 [json_name = "container"];</code>
   * @return The container.
   */
  @java.lang.Override
  public java.lang.String getContainer() {
    java.lang.Object ref = container_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      container_ = s;
      return s;
    }
  }
  /**
   * <code>string container = 4 [json_name = "container"];</code>
   * @return The bytes for container.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getContainerBytes() {
    java.lang.Object ref = container_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      container_ = b;
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
    if (!getApiVersionBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, apiVersion_);
    }
    if (!getKindBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, kind_);
    }
    if (!getNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, name_);
    }
    if (!getContainerBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, container_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getApiVersionBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, apiVersion_);
    }
    if (!getKindBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, kind_);
    }
    if (!getNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, name_);
    }
    if (!getContainerBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, container_);
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
    if (!(obj instanceof io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget)) {
      return super.equals(obj);
    }
    io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget other = (io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget) obj;

    if (!getApiVersion()
        .equals(other.getApiVersion())) return false;
    if (!getKind()
        .equals(other.getKind())) return false;
    if (!getName()
        .equals(other.getName())) return false;
    if (!getContainer()
        .equals(other.getContainer())) return false;
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
    hash = (37 * hash) + API_VERSION_FIELD_NUMBER;
    hash = (53 * hash) + getApiVersion().hashCode();
    hash = (37 * hash) + KIND_FIELD_NUMBER;
    hash = (53 * hash) + getKind().hashCode();
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    hash = (37 * hash) + CONTAINER_FIELD_NUMBER;
    hash = (53 * hash) + getContainer().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parseFrom(
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
  public static Builder newBuilder(io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget prototype) {
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
   * <pre>
   * AutoScalingSpecTarget ...
   * </pre>
   *
   * Protobuf type {@code performance.autoscaling.v1alpha1.AutoScalingSpecTarget}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:performance.autoscaling.v1alpha1.AutoScalingSpecTarget)
      io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTargetOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.internal_static_performance_autoscaling_v1alpha1_AutoScalingSpecTarget_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.internal_static_performance_autoscaling_v1alpha1_AutoScalingSpecTarget_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.class, io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.Builder.class);
    }

    // Construct using io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.newBuilder()
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
      apiVersion_ = "";

      kind_ = "";

      name_ = "";

      container_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.internal_static_performance_autoscaling_v1alpha1_AutoScalingSpecTarget_descriptor;
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget getDefaultInstanceForType() {
      return io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget build() {
      io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget buildPartial() {
      io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget result = new io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget(this);
      result.apiVersion_ = apiVersion_;
      result.kind_ = kind_;
      result.name_ = name_;
      result.container_ = container_;
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
      if (other instanceof io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget) {
        return mergeFrom((io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget other) {
      if (other == io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget.getDefaultInstance()) return this;
      if (!other.getApiVersion().isEmpty()) {
        apiVersion_ = other.apiVersion_;
        onChanged();
      }
      if (!other.getKind().isEmpty()) {
        kind_ = other.kind_;
        onChanged();
      }
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        onChanged();
      }
      if (!other.getContainer().isEmpty()) {
        container_ = other.container_;
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
      io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object apiVersion_ = "";
    /**
     * <code>string api_version = 1 [json_name = "apiVersion"];</code>
     * @return The apiVersion.
     */
    public java.lang.String getApiVersion() {
      java.lang.Object ref = apiVersion_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        apiVersion_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string api_version = 1 [json_name = "apiVersion"];</code>
     * @return The bytes for apiVersion.
     */
    public com.google.protobuf.ByteString
        getApiVersionBytes() {
      java.lang.Object ref = apiVersion_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        apiVersion_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string api_version = 1 [json_name = "apiVersion"];</code>
     * @param value The apiVersion to set.
     * @return This builder for chaining.
     */
    public Builder setApiVersion(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      apiVersion_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string api_version = 1 [json_name = "apiVersion"];</code>
     * @return This builder for chaining.
     */
    public Builder clearApiVersion() {
      
      apiVersion_ = getDefaultInstance().getApiVersion();
      onChanged();
      return this;
    }
    /**
     * <code>string api_version = 1 [json_name = "apiVersion"];</code>
     * @param value The bytes for apiVersion to set.
     * @return This builder for chaining.
     */
    public Builder setApiVersionBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      apiVersion_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object kind_ = "";
    /**
     * <code>string kind = 2 [json_name = "kind"];</code>
     * @return The kind.
     */
    public java.lang.String getKind() {
      java.lang.Object ref = kind_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        kind_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string kind = 2 [json_name = "kind"];</code>
     * @return The bytes for kind.
     */
    public com.google.protobuf.ByteString
        getKindBytes() {
      java.lang.Object ref = kind_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        kind_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string kind = 2 [json_name = "kind"];</code>
     * @param value The kind to set.
     * @return This builder for chaining.
     */
    public Builder setKind(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      kind_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string kind = 2 [json_name = "kind"];</code>
     * @return This builder for chaining.
     */
    public Builder clearKind() {
      
      kind_ = getDefaultInstance().getKind();
      onChanged();
      return this;
    }
    /**
     * <code>string kind = 2 [json_name = "kind"];</code>
     * @param value The bytes for kind to set.
     * @return This builder for chaining.
     */
    public Builder setKindBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      kind_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object name_ = "";
    /**
     * <code>string name = 3 [json_name = "name"];</code>
     * @return The name.
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name = 3 [json_name = "name"];</code>
     * @return The bytes for name.
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name = 3 [json_name = "name"];</code>
     * @param value The name to set.
     * @return This builder for chaining.
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      name_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string name = 3 [json_name = "name"];</code>
     * @return This builder for chaining.
     */
    public Builder clearName() {
      
      name_ = getDefaultInstance().getName();
      onChanged();
      return this;
    }
    /**
     * <code>string name = 3 [json_name = "name"];</code>
     * @param value The bytes for name to set.
     * @return This builder for chaining.
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      name_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object container_ = "";
    /**
     * <code>string container = 4 [json_name = "container"];</code>
     * @return The container.
     */
    public java.lang.String getContainer() {
      java.lang.Object ref = container_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        container_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string container = 4 [json_name = "container"];</code>
     * @return The bytes for container.
     */
    public com.google.protobuf.ByteString
        getContainerBytes() {
      java.lang.Object ref = container_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        container_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string container = 4 [json_name = "container"];</code>
     * @param value The container to set.
     * @return This builder for chaining.
     */
    public Builder setContainer(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      container_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string container = 4 [json_name = "container"];</code>
     * @return This builder for chaining.
     */
    public Builder clearContainer() {
      
      container_ = getDefaultInstance().getContainer();
      onChanged();
      return this;
    }
    /**
     * <code>string container = 4 [json_name = "container"];</code>
     * @param value The bytes for container to set.
     * @return This builder for chaining.
     */
    public Builder setContainerBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      container_ = value;
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


    // @@protoc_insertion_point(builder_scope:performance.autoscaling.v1alpha1.AutoScalingSpecTarget)
  }

  // @@protoc_insertion_point(class_scope:performance.autoscaling.v1alpha1.AutoScalingSpecTarget)
  private static final io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget();
  }

  public static io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AutoScalingSpecTarget>
      PARSER = new com.google.protobuf.AbstractParser<AutoScalingSpecTarget>() {
    @java.lang.Override
    public AutoScalingSpecTarget parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new AutoScalingSpecTarget(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AutoScalingSpecTarget> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AutoScalingSpecTarget> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.performance.autoscaling.v1alpha1.AutoScalingSpecTarget getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

