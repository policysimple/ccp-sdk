// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/users/v1alpha1/registry_users_api.proto

package io.cuemby.artifacts.users.v1alpha1;

/**
 * Protobuf type {@code artifacts.users.v1alpha1.CreateUserRegistryResponse}
 */
public final class CreateUserRegistryResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.users.v1alpha1.CreateUserRegistryResponse)
    CreateUserRegistryResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateUserRegistryResponse.newBuilder() to construct.
  private CreateUserRegistryResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateUserRegistryResponse() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CreateUserRegistryResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateUserRegistryResponse(
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
            io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder subBuilder = null;
            if (userRegistry_ != null) {
              subBuilder = userRegistry_.toBuilder();
            }
            userRegistry_ = input.readMessage(io.cuemby.artifacts.users.v1alpha1.UsersRegistry.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(userRegistry_);
              userRegistry_ = subBuilder.buildPartial();
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
    return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProtoAPI.internal_static_artifacts_users_v1alpha1_CreateUserRegistryResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProtoAPI.internal_static_artifacts_users_v1alpha1_CreateUserRegistryResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.class, io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.Builder.class);
  }

  public static final int USER_REGISTRY_FIELD_NUMBER = 1;
  private io.cuemby.artifacts.users.v1alpha1.UsersRegistry userRegistry_;
  /**
   * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
   * @return Whether the userRegistry field is set.
   */
  @java.lang.Override
  public boolean hasUserRegistry() {
    return userRegistry_ != null;
  }
  /**
   * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
   * @return The userRegistry.
   */
  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.UsersRegistry getUserRegistry() {
    return userRegistry_ == null ? io.cuemby.artifacts.users.v1alpha1.UsersRegistry.getDefaultInstance() : userRegistry_;
  }
  /**
   * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
   */
  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.UsersRegistryOrBuilder getUserRegistryOrBuilder() {
    return getUserRegistry();
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
    if (userRegistry_ != null) {
      output.writeMessage(1, getUserRegistry());
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
    if (userRegistry_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getUserRegistry());
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
    if (!(obj instanceof io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse other = (io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse) obj;

    if (hasUserRegistry() != other.hasUserRegistry()) return false;
    if (hasUserRegistry()) {
      if (!getUserRegistry()
          .equals(other.getUserRegistry())) return false;
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
    if (hasUserRegistry()) {
      hash = (37 * hash) + USER_REGISTRY_FIELD_NUMBER;
      hash = (53 * hash) + getUserRegistry().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse prototype) {
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
   * Protobuf type {@code artifacts.users.v1alpha1.CreateUserRegistryResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.users.v1alpha1.CreateUserRegistryResponse)
      io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProtoAPI.internal_static_artifacts_users_v1alpha1_CreateUserRegistryResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProtoAPI.internal_static_artifacts_users_v1alpha1_CreateUserRegistryResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.class, io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.Builder.class);
    }

    // Construct using io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.newBuilder()
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
      if (userRegistryBuilder_ == null) {
        userRegistry_ = null;
      } else {
        userRegistry_ = null;
        userRegistryBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProtoAPI.internal_static_artifacts_users_v1alpha1_CreateUserRegistryResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse getDefaultInstanceForType() {
      return io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse build() {
      io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse buildPartial() {
      io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse result = new io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse(this);
      if (userRegistryBuilder_ == null) {
        result.userRegistry_ = userRegistry_;
      } else {
        result.userRegistry_ = userRegistryBuilder_.build();
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
      if (other instanceof io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse) {
        return mergeFrom((io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse other) {
      if (other == io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse.getDefaultInstance()) return this;
      if (other.hasUserRegistry()) {
        mergeUserRegistry(other.getUserRegistry());
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
      io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.artifacts.users.v1alpha1.UsersRegistry userRegistry_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.users.v1alpha1.UsersRegistry, io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder, io.cuemby.artifacts.users.v1alpha1.UsersRegistryOrBuilder> userRegistryBuilder_;
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     * @return Whether the userRegistry field is set.
     */
    public boolean hasUserRegistry() {
      return userRegistryBuilder_ != null || userRegistry_ != null;
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     * @return The userRegistry.
     */
    public io.cuemby.artifacts.users.v1alpha1.UsersRegistry getUserRegistry() {
      if (userRegistryBuilder_ == null) {
        return userRegistry_ == null ? io.cuemby.artifacts.users.v1alpha1.UsersRegistry.getDefaultInstance() : userRegistry_;
      } else {
        return userRegistryBuilder_.getMessage();
      }
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    public Builder setUserRegistry(io.cuemby.artifacts.users.v1alpha1.UsersRegistry value) {
      if (userRegistryBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        userRegistry_ = value;
        onChanged();
      } else {
        userRegistryBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    public Builder setUserRegistry(
        io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder builderForValue) {
      if (userRegistryBuilder_ == null) {
        userRegistry_ = builderForValue.build();
        onChanged();
      } else {
        userRegistryBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    public Builder mergeUserRegistry(io.cuemby.artifacts.users.v1alpha1.UsersRegistry value) {
      if (userRegistryBuilder_ == null) {
        if (userRegistry_ != null) {
          userRegistry_ =
            io.cuemby.artifacts.users.v1alpha1.UsersRegistry.newBuilder(userRegistry_).mergeFrom(value).buildPartial();
        } else {
          userRegistry_ = value;
        }
        onChanged();
      } else {
        userRegistryBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    public Builder clearUserRegistry() {
      if (userRegistryBuilder_ == null) {
        userRegistry_ = null;
        onChanged();
      } else {
        userRegistry_ = null;
        userRegistryBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    public io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder getUserRegistryBuilder() {
      
      onChanged();
      return getUserRegistryFieldBuilder().getBuilder();
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    public io.cuemby.artifacts.users.v1alpha1.UsersRegistryOrBuilder getUserRegistryOrBuilder() {
      if (userRegistryBuilder_ != null) {
        return userRegistryBuilder_.getMessageOrBuilder();
      } else {
        return userRegistry_ == null ?
            io.cuemby.artifacts.users.v1alpha1.UsersRegistry.getDefaultInstance() : userRegistry_;
      }
    }
    /**
     * <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.users.v1alpha1.UsersRegistry, io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder, io.cuemby.artifacts.users.v1alpha1.UsersRegistryOrBuilder> 
        getUserRegistryFieldBuilder() {
      if (userRegistryBuilder_ == null) {
        userRegistryBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.artifacts.users.v1alpha1.UsersRegistry, io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder, io.cuemby.artifacts.users.v1alpha1.UsersRegistryOrBuilder>(
                getUserRegistry(),
                getParentForChildren(),
                isClean());
        userRegistry_ = null;
      }
      return userRegistryBuilder_;
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


    // @@protoc_insertion_point(builder_scope:artifacts.users.v1alpha1.CreateUserRegistryResponse)
  }

  // @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.CreateUserRegistryResponse)
  private static final io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse();
  }

  public static io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateUserRegistryResponse>
      PARSER = new com.google.protobuf.AbstractParser<CreateUserRegistryResponse>() {
    @java.lang.Override
    public CreateUserRegistryResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateUserRegistryResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateUserRegistryResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateUserRegistryResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.CreateUserRegistryResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

