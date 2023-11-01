// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf type {@code pipelines.runtime.v1alpha1.ContainerRegistry}
 */
public final class ContainerRegistry extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.runtime.v1alpha1.ContainerRegistry)
    ContainerRegistryOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ContainerRegistry.newBuilder() to construct.
  private ContainerRegistry(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ContainerRegistry() {
    registryUrl_ = "";
    registryUser_ = "";
    regCredAuth_ = "";
    imageName_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ContainerRegistry();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private ContainerRegistry(
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

            registryUrl_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            registryUser_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            regCredAuth_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            imageName_ = s;
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
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.class, io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.Builder.class);
  }

  public static final int REGISTRY_URL_FIELD_NUMBER = 1;
  private volatile java.lang.Object registryUrl_;
  /**
   * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
   * @return The registryUrl.
   */
  @java.lang.Override
  public java.lang.String getRegistryUrl() {
    java.lang.Object ref = registryUrl_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      registryUrl_ = s;
      return s;
    }
  }
  /**
   * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
   * @return The bytes for registryUrl.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getRegistryUrlBytes() {
    java.lang.Object ref = registryUrl_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      registryUrl_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int REGISTRY_USER_FIELD_NUMBER = 2;
  private volatile java.lang.Object registryUser_;
  /**
   * <code>string registry_user = 2 [json_name = "registryUser"];</code>
   * @return The registryUser.
   */
  @java.lang.Override
  public java.lang.String getRegistryUser() {
    java.lang.Object ref = registryUser_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      registryUser_ = s;
      return s;
    }
  }
  /**
   * <code>string registry_user = 2 [json_name = "registryUser"];</code>
   * @return The bytes for registryUser.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getRegistryUserBytes() {
    java.lang.Object ref = registryUser_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      registryUser_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int REG_CRED_AUTH_FIELD_NUMBER = 3;
  private volatile java.lang.Object regCredAuth_;
  /**
   * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
   * @return The regCredAuth.
   */
  @java.lang.Override
  public java.lang.String getRegCredAuth() {
    java.lang.Object ref = regCredAuth_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      regCredAuth_ = s;
      return s;
    }
  }
  /**
   * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
   * @return The bytes for regCredAuth.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getRegCredAuthBytes() {
    java.lang.Object ref = regCredAuth_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      regCredAuth_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int IMAGE_NAME_FIELD_NUMBER = 4;
  private volatile java.lang.Object imageName_;
  /**
   * <code>string image_name = 4 [json_name = "imageName"];</code>
   * @return The imageName.
   */
  @java.lang.Override
  public java.lang.String getImageName() {
    java.lang.Object ref = imageName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      imageName_ = s;
      return s;
    }
  }
  /**
   * <code>string image_name = 4 [json_name = "imageName"];</code>
   * @return The bytes for imageName.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getImageNameBytes() {
    java.lang.Object ref = imageName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      imageName_ = b;
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
    if (!getRegistryUrlBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, registryUrl_);
    }
    if (!getRegistryUserBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, registryUser_);
    }
    if (!getRegCredAuthBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, regCredAuth_);
    }
    if (!getImageNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, imageName_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getRegistryUrlBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, registryUrl_);
    }
    if (!getRegistryUserBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, registryUser_);
    }
    if (!getRegCredAuthBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, regCredAuth_);
    }
    if (!getImageNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, imageName_);
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
    if (!(obj instanceof io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry other = (io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry) obj;

    if (!getRegistryUrl()
        .equals(other.getRegistryUrl())) return false;
    if (!getRegistryUser()
        .equals(other.getRegistryUser())) return false;
    if (!getRegCredAuth()
        .equals(other.getRegCredAuth())) return false;
    if (!getImageName()
        .equals(other.getImageName())) return false;
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
    hash = (37 * hash) + REGISTRY_URL_FIELD_NUMBER;
    hash = (53 * hash) + getRegistryUrl().hashCode();
    hash = (37 * hash) + REGISTRY_USER_FIELD_NUMBER;
    hash = (53 * hash) + getRegistryUser().hashCode();
    hash = (37 * hash) + REG_CRED_AUTH_FIELD_NUMBER;
    hash = (53 * hash) + getRegCredAuth().hashCode();
    hash = (37 * hash) + IMAGE_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getImageName().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry prototype) {
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
   * Protobuf type {@code pipelines.runtime.v1alpha1.ContainerRegistry}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.runtime.v1alpha1.ContainerRegistry)
      io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistryOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.class, io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.Builder.class);
    }

    // Construct using io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.newBuilder()
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
      registryUrl_ = "";

      registryUser_ = "";

      regCredAuth_ = "";

      imageName_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeProto.internal_static_pipelines_runtime_v1alpha1_ContainerRegistry_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry getDefaultInstanceForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry build() {
      io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry buildPartial() {
      io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry result = new io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry(this);
      result.registryUrl_ = registryUrl_;
      result.registryUser_ = registryUser_;
      result.regCredAuth_ = regCredAuth_;
      result.imageName_ = imageName_;
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
      if (other instanceof io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry) {
        return mergeFrom((io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry other) {
      if (other == io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry.getDefaultInstance()) return this;
      if (!other.getRegistryUrl().isEmpty()) {
        registryUrl_ = other.registryUrl_;
        onChanged();
      }
      if (!other.getRegistryUser().isEmpty()) {
        registryUser_ = other.registryUser_;
        onChanged();
      }
      if (!other.getRegCredAuth().isEmpty()) {
        regCredAuth_ = other.regCredAuth_;
        onChanged();
      }
      if (!other.getImageName().isEmpty()) {
        imageName_ = other.imageName_;
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
      io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object registryUrl_ = "";
    /**
     * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
     * @return The registryUrl.
     */
    public java.lang.String getRegistryUrl() {
      java.lang.Object ref = registryUrl_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        registryUrl_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
     * @return The bytes for registryUrl.
     */
    public com.google.protobuf.ByteString
        getRegistryUrlBytes() {
      java.lang.Object ref = registryUrl_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        registryUrl_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
     * @param value The registryUrl to set.
     * @return This builder for chaining.
     */
    public Builder setRegistryUrl(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      registryUrl_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
     * @return This builder for chaining.
     */
    public Builder clearRegistryUrl() {
      
      registryUrl_ = getDefaultInstance().getRegistryUrl();
      onChanged();
      return this;
    }
    /**
     * <code>string registry_url = 1 [json_name = "registryUrl"];</code>
     * @param value The bytes for registryUrl to set.
     * @return This builder for chaining.
     */
    public Builder setRegistryUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      registryUrl_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object registryUser_ = "";
    /**
     * <code>string registry_user = 2 [json_name = "registryUser"];</code>
     * @return The registryUser.
     */
    public java.lang.String getRegistryUser() {
      java.lang.Object ref = registryUser_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        registryUser_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string registry_user = 2 [json_name = "registryUser"];</code>
     * @return The bytes for registryUser.
     */
    public com.google.protobuf.ByteString
        getRegistryUserBytes() {
      java.lang.Object ref = registryUser_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        registryUser_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string registry_user = 2 [json_name = "registryUser"];</code>
     * @param value The registryUser to set.
     * @return This builder for chaining.
     */
    public Builder setRegistryUser(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      registryUser_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string registry_user = 2 [json_name = "registryUser"];</code>
     * @return This builder for chaining.
     */
    public Builder clearRegistryUser() {
      
      registryUser_ = getDefaultInstance().getRegistryUser();
      onChanged();
      return this;
    }
    /**
     * <code>string registry_user = 2 [json_name = "registryUser"];</code>
     * @param value The bytes for registryUser to set.
     * @return This builder for chaining.
     */
    public Builder setRegistryUserBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      registryUser_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object regCredAuth_ = "";
    /**
     * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
     * @return The regCredAuth.
     */
    public java.lang.String getRegCredAuth() {
      java.lang.Object ref = regCredAuth_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        regCredAuth_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
     * @return The bytes for regCredAuth.
     */
    public com.google.protobuf.ByteString
        getRegCredAuthBytes() {
      java.lang.Object ref = regCredAuth_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        regCredAuth_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
     * @param value The regCredAuth to set.
     * @return This builder for chaining.
     */
    public Builder setRegCredAuth(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      regCredAuth_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
     * @return This builder for chaining.
     */
    public Builder clearRegCredAuth() {
      
      regCredAuth_ = getDefaultInstance().getRegCredAuth();
      onChanged();
      return this;
    }
    /**
     * <code>string reg_cred_auth = 3 [json_name = "regCredAuth"];</code>
     * @param value The bytes for regCredAuth to set.
     * @return This builder for chaining.
     */
    public Builder setRegCredAuthBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      regCredAuth_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object imageName_ = "";
    /**
     * <code>string image_name = 4 [json_name = "imageName"];</code>
     * @return The imageName.
     */
    public java.lang.String getImageName() {
      java.lang.Object ref = imageName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        imageName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string image_name = 4 [json_name = "imageName"];</code>
     * @return The bytes for imageName.
     */
    public com.google.protobuf.ByteString
        getImageNameBytes() {
      java.lang.Object ref = imageName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        imageName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string image_name = 4 [json_name = "imageName"];</code>
     * @param value The imageName to set.
     * @return This builder for chaining.
     */
    public Builder setImageName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      imageName_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string image_name = 4 [json_name = "imageName"];</code>
     * @return This builder for chaining.
     */
    public Builder clearImageName() {
      
      imageName_ = getDefaultInstance().getImageName();
      onChanged();
      return this;
    }
    /**
     * <code>string image_name = 4 [json_name = "imageName"];</code>
     * @param value The bytes for imageName to set.
     * @return This builder for chaining.
     */
    public Builder setImageNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      imageName_ = value;
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


    // @@protoc_insertion_point(builder_scope:pipelines.runtime.v1alpha1.ContainerRegistry)
  }

  // @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.ContainerRegistry)
  private static final io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry();
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ContainerRegistry>
      PARSER = new com.google.protobuf.AbstractParser<ContainerRegistry>() {
    @java.lang.Override
    public ContainerRegistry parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new ContainerRegistry(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ContainerRegistry> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ContainerRegistry> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.ContainerRegistry getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

