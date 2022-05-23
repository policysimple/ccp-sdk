// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/users/v1alpha1/registry_users.proto

package io.cuemby.artifacts.users.v1alpha1;

/**
 * Protobuf type {@code artifacts.users.v1alpha1.AccessHarbor}
 */
public final class AccessHarbor extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.users.v1alpha1.AccessHarbor)
    AccessHarborOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AccessHarbor.newBuilder() to construct.
  private AccessHarbor(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AccessHarbor() {
    action_ = "";
    resource_ = "";
    effect_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new AccessHarbor();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private AccessHarbor(
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

            action_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            resource_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            effect_ = s;
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
    return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_AccessHarbor_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_AccessHarbor_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.users.v1alpha1.AccessHarbor.class, io.cuemby.artifacts.users.v1alpha1.AccessHarbor.Builder.class);
  }

  public static final int ACTION_FIELD_NUMBER = 1;
  private volatile java.lang.Object action_;
  /**
   * <code>string action = 1 [json_name = "action"];</code>
   * @return The action.
   */
  @java.lang.Override
  public java.lang.String getAction() {
    java.lang.Object ref = action_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      action_ = s;
      return s;
    }
  }
  /**
   * <code>string action = 1 [json_name = "action"];</code>
   * @return The bytes for action.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getActionBytes() {
    java.lang.Object ref = action_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      action_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int RESOURCE_FIELD_NUMBER = 2;
  private volatile java.lang.Object resource_;
  /**
   * <code>string resource = 2 [json_name = "resource"];</code>
   * @return The resource.
   */
  @java.lang.Override
  public java.lang.String getResource() {
    java.lang.Object ref = resource_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      resource_ = s;
      return s;
    }
  }
  /**
   * <code>string resource = 2 [json_name = "resource"];</code>
   * @return The bytes for resource.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getResourceBytes() {
    java.lang.Object ref = resource_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      resource_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int EFFECT_FIELD_NUMBER = 3;
  private volatile java.lang.Object effect_;
  /**
   * <code>string effect = 3 [json_name = "effect"];</code>
   * @return The effect.
   */
  @java.lang.Override
  public java.lang.String getEffect() {
    java.lang.Object ref = effect_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      effect_ = s;
      return s;
    }
  }
  /**
   * <code>string effect = 3 [json_name = "effect"];</code>
   * @return The bytes for effect.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getEffectBytes() {
    java.lang.Object ref = effect_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      effect_ = b;
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
    if (!getActionBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, action_);
    }
    if (!getResourceBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, resource_);
    }
    if (!getEffectBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, effect_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getActionBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, action_);
    }
    if (!getResourceBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, resource_);
    }
    if (!getEffectBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, effect_);
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
    if (!(obj instanceof io.cuemby.artifacts.users.v1alpha1.AccessHarbor)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.users.v1alpha1.AccessHarbor other = (io.cuemby.artifacts.users.v1alpha1.AccessHarbor) obj;

    if (!getAction()
        .equals(other.getAction())) return false;
    if (!getResource()
        .equals(other.getResource())) return false;
    if (!getEffect()
        .equals(other.getEffect())) return false;
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
    hash = (37 * hash) + ACTION_FIELD_NUMBER;
    hash = (53 * hash) + getAction().hashCode();
    hash = (37 * hash) + RESOURCE_FIELD_NUMBER;
    hash = (53 * hash) + getResource().hashCode();
    hash = (37 * hash) + EFFECT_FIELD_NUMBER;
    hash = (53 * hash) + getEffect().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.users.v1alpha1.AccessHarbor prototype) {
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
   * Protobuf type {@code artifacts.users.v1alpha1.AccessHarbor}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.users.v1alpha1.AccessHarbor)
      io.cuemby.artifacts.users.v1alpha1.AccessHarborOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_AccessHarbor_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_AccessHarbor_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.users.v1alpha1.AccessHarbor.class, io.cuemby.artifacts.users.v1alpha1.AccessHarbor.Builder.class);
    }

    // Construct using io.cuemby.artifacts.users.v1alpha1.AccessHarbor.newBuilder()
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
      action_ = "";

      resource_ = "";

      effect_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_AccessHarbor_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.AccessHarbor getDefaultInstanceForType() {
      return io.cuemby.artifacts.users.v1alpha1.AccessHarbor.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.AccessHarbor build() {
      io.cuemby.artifacts.users.v1alpha1.AccessHarbor result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.AccessHarbor buildPartial() {
      io.cuemby.artifacts.users.v1alpha1.AccessHarbor result = new io.cuemby.artifacts.users.v1alpha1.AccessHarbor(this);
      result.action_ = action_;
      result.resource_ = resource_;
      result.effect_ = effect_;
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
      if (other instanceof io.cuemby.artifacts.users.v1alpha1.AccessHarbor) {
        return mergeFrom((io.cuemby.artifacts.users.v1alpha1.AccessHarbor)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.users.v1alpha1.AccessHarbor other) {
      if (other == io.cuemby.artifacts.users.v1alpha1.AccessHarbor.getDefaultInstance()) return this;
      if (!other.getAction().isEmpty()) {
        action_ = other.action_;
        onChanged();
      }
      if (!other.getResource().isEmpty()) {
        resource_ = other.resource_;
        onChanged();
      }
      if (!other.getEffect().isEmpty()) {
        effect_ = other.effect_;
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
      io.cuemby.artifacts.users.v1alpha1.AccessHarbor parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.users.v1alpha1.AccessHarbor) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object action_ = "";
    /**
     * <code>string action = 1 [json_name = "action"];</code>
     * @return The action.
     */
    public java.lang.String getAction() {
      java.lang.Object ref = action_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        action_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string action = 1 [json_name = "action"];</code>
     * @return The bytes for action.
     */
    public com.google.protobuf.ByteString
        getActionBytes() {
      java.lang.Object ref = action_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        action_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string action = 1 [json_name = "action"];</code>
     * @param value The action to set.
     * @return This builder for chaining.
     */
    public Builder setAction(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      action_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string action = 1 [json_name = "action"];</code>
     * @return This builder for chaining.
     */
    public Builder clearAction() {
      
      action_ = getDefaultInstance().getAction();
      onChanged();
      return this;
    }
    /**
     * <code>string action = 1 [json_name = "action"];</code>
     * @param value The bytes for action to set.
     * @return This builder for chaining.
     */
    public Builder setActionBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      action_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object resource_ = "";
    /**
     * <code>string resource = 2 [json_name = "resource"];</code>
     * @return The resource.
     */
    public java.lang.String getResource() {
      java.lang.Object ref = resource_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        resource_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string resource = 2 [json_name = "resource"];</code>
     * @return The bytes for resource.
     */
    public com.google.protobuf.ByteString
        getResourceBytes() {
      java.lang.Object ref = resource_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        resource_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string resource = 2 [json_name = "resource"];</code>
     * @param value The resource to set.
     * @return This builder for chaining.
     */
    public Builder setResource(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      resource_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string resource = 2 [json_name = "resource"];</code>
     * @return This builder for chaining.
     */
    public Builder clearResource() {
      
      resource_ = getDefaultInstance().getResource();
      onChanged();
      return this;
    }
    /**
     * <code>string resource = 2 [json_name = "resource"];</code>
     * @param value The bytes for resource to set.
     * @return This builder for chaining.
     */
    public Builder setResourceBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      resource_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object effect_ = "";
    /**
     * <code>string effect = 3 [json_name = "effect"];</code>
     * @return The effect.
     */
    public java.lang.String getEffect() {
      java.lang.Object ref = effect_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        effect_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string effect = 3 [json_name = "effect"];</code>
     * @return The bytes for effect.
     */
    public com.google.protobuf.ByteString
        getEffectBytes() {
      java.lang.Object ref = effect_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        effect_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string effect = 3 [json_name = "effect"];</code>
     * @param value The effect to set.
     * @return This builder for chaining.
     */
    public Builder setEffect(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      effect_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string effect = 3 [json_name = "effect"];</code>
     * @return This builder for chaining.
     */
    public Builder clearEffect() {
      
      effect_ = getDefaultInstance().getEffect();
      onChanged();
      return this;
    }
    /**
     * <code>string effect = 3 [json_name = "effect"];</code>
     * @param value The bytes for effect to set.
     * @return This builder for chaining.
     */
    public Builder setEffectBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      effect_ = value;
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


    // @@protoc_insertion_point(builder_scope:artifacts.users.v1alpha1.AccessHarbor)
  }

  // @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.AccessHarbor)
  private static final io.cuemby.artifacts.users.v1alpha1.AccessHarbor DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.users.v1alpha1.AccessHarbor();
  }

  public static io.cuemby.artifacts.users.v1alpha1.AccessHarbor getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AccessHarbor>
      PARSER = new com.google.protobuf.AbstractParser<AccessHarbor>() {
    @java.lang.Override
    public AccessHarbor parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new AccessHarbor(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AccessHarbor> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AccessHarbor> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.AccessHarbor getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
