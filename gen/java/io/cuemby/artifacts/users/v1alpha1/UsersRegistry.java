// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/users/v1alpha1/registry_users.proto

package io.cuemby.artifacts.users.v1alpha1;

/**
 * <pre>
 * Environment ...
 * </pre>
 *
 * Protobuf type {@code artifacts.users.v1alpha1.UsersRegistry}
 */
public final class UsersRegistry extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.users.v1alpha1.UsersRegistry)
    UsersRegistryOrBuilder {
private static final long serialVersionUID = 0L;
  // Use UsersRegistry.newBuilder() to construct.
  private UsersRegistry(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private UsersRegistry() {
    id_ = "";
    environmentId_ = "";
    environmentInternalName_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new UsersRegistry();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private UsersRegistry(
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

            id_ = s;
            break;
          }
          case 16: {

            organizationId_ = input.readUInt32();
            break;
          }
          case 24: {

            projectId_ = input.readUInt32();
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            environmentId_ = s;
            break;
          }
          case 42: {
            java.lang.String s = input.readStringRequireUtf8();

            environmentInternalName_ = s;
            break;
          }
          case 48: {

            active_ = input.readBool();
            break;
          }
          case 58: {
            io.cuemby.artifacts.users.v1alpha1.Harbor.Builder subBuilder = null;
            if (harbor_ != null) {
              subBuilder = harbor_.toBuilder();
            }
            harbor_ = input.readMessage(io.cuemby.artifacts.users.v1alpha1.Harbor.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(harbor_);
              harbor_ = subBuilder.buildPartial();
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
    return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_UsersRegistry_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_UsersRegistry_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.users.v1alpha1.UsersRegistry.class, io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder.class);
  }

  public static final int ID_FIELD_NUMBER = 1;
  private volatile java.lang.Object id_;
  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  @java.lang.Override
  public java.lang.String getId() {
    java.lang.Object ref = id_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      id_ = s;
      return s;
    }
  }
  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The bytes for id.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getIdBytes() {
    java.lang.Object ref = id_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      id_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int ORGANIZATION_ID_FIELD_NUMBER = 2;
  private int organizationId_;
  /**
   * <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  @java.lang.Override
  public int getOrganizationId() {
    return organizationId_;
  }

  public static final int PROJECT_ID_FIELD_NUMBER = 3;
  private int projectId_;
  /**
   * <code>uint32 project_id = 3 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  @java.lang.Override
  public int getProjectId() {
    return projectId_;
  }

  public static final int ENVIRONMENT_ID_FIELD_NUMBER = 4;
  private volatile java.lang.Object environmentId_;
  /**
   * <code>string environment_id = 4 [json_name = "environmentId"];</code>
   * @return The environmentId.
   */
  @java.lang.Override
  public java.lang.String getEnvironmentId() {
    java.lang.Object ref = environmentId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      environmentId_ = s;
      return s;
    }
  }
  /**
   * <code>string environment_id = 4 [json_name = "environmentId"];</code>
   * @return The bytes for environmentId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getEnvironmentIdBytes() {
    java.lang.Object ref = environmentId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      environmentId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int ENVIRONMENT_INTERNAL_NAME_FIELD_NUMBER = 5;
  private volatile java.lang.Object environmentInternalName_;
  /**
   * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
   * @return The environmentInternalName.
   */
  @java.lang.Override
  public java.lang.String getEnvironmentInternalName() {
    java.lang.Object ref = environmentInternalName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      environmentInternalName_ = s;
      return s;
    }
  }
  /**
   * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
   * @return The bytes for environmentInternalName.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getEnvironmentInternalNameBytes() {
    java.lang.Object ref = environmentInternalName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      environmentInternalName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int ACTIVE_FIELD_NUMBER = 6;
  private boolean active_;
  /**
   * <code>bool active = 6 [json_name = "active"];</code>
   * @return The active.
   */
  @java.lang.Override
  public boolean getActive() {
    return active_;
  }

  public static final int HARBOR_FIELD_NUMBER = 7;
  private io.cuemby.artifacts.users.v1alpha1.Harbor harbor_;
  /**
   * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
   * @return Whether the harbor field is set.
   */
  @java.lang.Override
  public boolean hasHarbor() {
    return harbor_ != null;
  }
  /**
   * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
   * @return The harbor.
   */
  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.Harbor getHarbor() {
    return harbor_ == null ? io.cuemby.artifacts.users.v1alpha1.Harbor.getDefaultInstance() : harbor_;
  }
  /**
   * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
   */
  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.HarborOrBuilder getHarborOrBuilder() {
    return getHarbor();
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
    if (!getIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, id_);
    }
    if (organizationId_ != 0) {
      output.writeUInt32(2, organizationId_);
    }
    if (projectId_ != 0) {
      output.writeUInt32(3, projectId_);
    }
    if (!getEnvironmentIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, environmentId_);
    }
    if (!getEnvironmentInternalNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 5, environmentInternalName_);
    }
    if (active_ != false) {
      output.writeBool(6, active_);
    }
    if (harbor_ != null) {
      output.writeMessage(7, getHarbor());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, id_);
    }
    if (organizationId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, organizationId_);
    }
    if (projectId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(3, projectId_);
    }
    if (!getEnvironmentIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, environmentId_);
    }
    if (!getEnvironmentInternalNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, environmentInternalName_);
    }
    if (active_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(6, active_);
    }
    if (harbor_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(7, getHarbor());
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
    if (!(obj instanceof io.cuemby.artifacts.users.v1alpha1.UsersRegistry)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.users.v1alpha1.UsersRegistry other = (io.cuemby.artifacts.users.v1alpha1.UsersRegistry) obj;

    if (!getId()
        .equals(other.getId())) return false;
    if (getOrganizationId()
        != other.getOrganizationId()) return false;
    if (getProjectId()
        != other.getProjectId()) return false;
    if (!getEnvironmentId()
        .equals(other.getEnvironmentId())) return false;
    if (!getEnvironmentInternalName()
        .equals(other.getEnvironmentInternalName())) return false;
    if (getActive()
        != other.getActive()) return false;
    if (hasHarbor() != other.hasHarbor()) return false;
    if (hasHarbor()) {
      if (!getHarbor()
          .equals(other.getHarbor())) return false;
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
    hash = (37 * hash) + ID_FIELD_NUMBER;
    hash = (53 * hash) + getId().hashCode();
    hash = (37 * hash) + ORGANIZATION_ID_FIELD_NUMBER;
    hash = (53 * hash) + getOrganizationId();
    hash = (37 * hash) + PROJECT_ID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId();
    hash = (37 * hash) + ENVIRONMENT_ID_FIELD_NUMBER;
    hash = (53 * hash) + getEnvironmentId().hashCode();
    hash = (37 * hash) + ENVIRONMENT_INTERNAL_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getEnvironmentInternalName().hashCode();
    hash = (37 * hash) + ACTIVE_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getActive());
    if (hasHarbor()) {
      hash = (37 * hash) + HARBOR_FIELD_NUMBER;
      hash = (53 * hash) + getHarbor().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.users.v1alpha1.UsersRegistry prototype) {
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
   * Environment ...
   * </pre>
   *
   * Protobuf type {@code artifacts.users.v1alpha1.UsersRegistry}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.users.v1alpha1.UsersRegistry)
      io.cuemby.artifacts.users.v1alpha1.UsersRegistryOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_UsersRegistry_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_UsersRegistry_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.users.v1alpha1.UsersRegistry.class, io.cuemby.artifacts.users.v1alpha1.UsersRegistry.Builder.class);
    }

    // Construct using io.cuemby.artifacts.users.v1alpha1.UsersRegistry.newBuilder()
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
      id_ = "";

      organizationId_ = 0;

      projectId_ = 0;

      environmentId_ = "";

      environmentInternalName_ = "";

      active_ = false;

      if (harborBuilder_ == null) {
        harbor_ = null;
      } else {
        harbor_ = null;
        harborBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.users.v1alpha1.RegistryUsersProto.internal_static_artifacts_users_v1alpha1_UsersRegistry_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.UsersRegistry getDefaultInstanceForType() {
      return io.cuemby.artifacts.users.v1alpha1.UsersRegistry.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.UsersRegistry build() {
      io.cuemby.artifacts.users.v1alpha1.UsersRegistry result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.users.v1alpha1.UsersRegistry buildPartial() {
      io.cuemby.artifacts.users.v1alpha1.UsersRegistry result = new io.cuemby.artifacts.users.v1alpha1.UsersRegistry(this);
      result.id_ = id_;
      result.organizationId_ = organizationId_;
      result.projectId_ = projectId_;
      result.environmentId_ = environmentId_;
      result.environmentInternalName_ = environmentInternalName_;
      result.active_ = active_;
      if (harborBuilder_ == null) {
        result.harbor_ = harbor_;
      } else {
        result.harbor_ = harborBuilder_.build();
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
      if (other instanceof io.cuemby.artifacts.users.v1alpha1.UsersRegistry) {
        return mergeFrom((io.cuemby.artifacts.users.v1alpha1.UsersRegistry)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.users.v1alpha1.UsersRegistry other) {
      if (other == io.cuemby.artifacts.users.v1alpha1.UsersRegistry.getDefaultInstance()) return this;
      if (!other.getId().isEmpty()) {
        id_ = other.id_;
        onChanged();
      }
      if (other.getOrganizationId() != 0) {
        setOrganizationId(other.getOrganizationId());
      }
      if (other.getProjectId() != 0) {
        setProjectId(other.getProjectId());
      }
      if (!other.getEnvironmentId().isEmpty()) {
        environmentId_ = other.environmentId_;
        onChanged();
      }
      if (!other.getEnvironmentInternalName().isEmpty()) {
        environmentInternalName_ = other.environmentInternalName_;
        onChanged();
      }
      if (other.getActive() != false) {
        setActive(other.getActive());
      }
      if (other.hasHarbor()) {
        mergeHarbor(other.getHarbor());
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
      io.cuemby.artifacts.users.v1alpha1.UsersRegistry parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.users.v1alpha1.UsersRegistry) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object id_ = "";
    /**
     * <code>string id = 1 [json_name = "id"];</code>
     * @return The id.
     */
    public java.lang.String getId() {
      java.lang.Object ref = id_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        id_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string id = 1 [json_name = "id"];</code>
     * @return The bytes for id.
     */
    public com.google.protobuf.ByteString
        getIdBytes() {
      java.lang.Object ref = id_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        id_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string id = 1 [json_name = "id"];</code>
     * @param value The id to set.
     * @return This builder for chaining.
     */
    public Builder setId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      id_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string id = 1 [json_name = "id"];</code>
     * @return This builder for chaining.
     */
    public Builder clearId() {
      
      id_ = getDefaultInstance().getId();
      onChanged();
      return this;
    }
    /**
     * <code>string id = 1 [json_name = "id"];</code>
     * @param value The bytes for id to set.
     * @return This builder for chaining.
     */
    public Builder setIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      id_ = value;
      onChanged();
      return this;
    }

    private int organizationId_ ;
    /**
     * <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @return The organizationId.
     */
    @java.lang.Override
    public int getOrganizationId() {
      return organizationId_;
    }
    /**
     * <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @param value The organizationId to set.
     * @return This builder for chaining.
     */
    public Builder setOrganizationId(int value) {
      
      organizationId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearOrganizationId() {
      
      organizationId_ = 0;
      onChanged();
      return this;
    }

    private int projectId_ ;
    /**
     * <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @return The projectId.
     */
    @java.lang.Override
    public int getProjectId() {
      return projectId_;
    }
    /**
     * <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @param value The projectId to set.
     * @return This builder for chaining.
     */
    public Builder setProjectId(int value) {
      
      projectId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectId() {
      
      projectId_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object environmentId_ = "";
    /**
     * <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @return The environmentId.
     */
    public java.lang.String getEnvironmentId() {
      java.lang.Object ref = environmentId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        environmentId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @return The bytes for environmentId.
     */
    public com.google.protobuf.ByteString
        getEnvironmentIdBytes() {
      java.lang.Object ref = environmentId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        environmentId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @param value The environmentId to set.
     * @return This builder for chaining.
     */
    public Builder setEnvironmentId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      environmentId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearEnvironmentId() {
      
      environmentId_ = getDefaultInstance().getEnvironmentId();
      onChanged();
      return this;
    }
    /**
     * <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @param value The bytes for environmentId to set.
     * @return This builder for chaining.
     */
    public Builder setEnvironmentIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      environmentId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object environmentInternalName_ = "";
    /**
     * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @return The environmentInternalName.
     */
    public java.lang.String getEnvironmentInternalName() {
      java.lang.Object ref = environmentInternalName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        environmentInternalName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @return The bytes for environmentInternalName.
     */
    public com.google.protobuf.ByteString
        getEnvironmentInternalNameBytes() {
      java.lang.Object ref = environmentInternalName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        environmentInternalName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @param value The environmentInternalName to set.
     * @return This builder for chaining.
     */
    public Builder setEnvironmentInternalName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      environmentInternalName_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @return This builder for chaining.
     */
    public Builder clearEnvironmentInternalName() {
      
      environmentInternalName_ = getDefaultInstance().getEnvironmentInternalName();
      onChanged();
      return this;
    }
    /**
     * <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @param value The bytes for environmentInternalName to set.
     * @return This builder for chaining.
     */
    public Builder setEnvironmentInternalNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      environmentInternalName_ = value;
      onChanged();
      return this;
    }

    private boolean active_ ;
    /**
     * <code>bool active = 6 [json_name = "active"];</code>
     * @return The active.
     */
    @java.lang.Override
    public boolean getActive() {
      return active_;
    }
    /**
     * <code>bool active = 6 [json_name = "active"];</code>
     * @param value The active to set.
     * @return This builder for chaining.
     */
    public Builder setActive(boolean value) {
      
      active_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>bool active = 6 [json_name = "active"];</code>
     * @return This builder for chaining.
     */
    public Builder clearActive() {
      
      active_ = false;
      onChanged();
      return this;
    }

    private io.cuemby.artifacts.users.v1alpha1.Harbor harbor_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.users.v1alpha1.Harbor, io.cuemby.artifacts.users.v1alpha1.Harbor.Builder, io.cuemby.artifacts.users.v1alpha1.HarborOrBuilder> harborBuilder_;
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     * @return Whether the harbor field is set.
     */
    public boolean hasHarbor() {
      return harborBuilder_ != null || harbor_ != null;
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     * @return The harbor.
     */
    public io.cuemby.artifacts.users.v1alpha1.Harbor getHarbor() {
      if (harborBuilder_ == null) {
        return harbor_ == null ? io.cuemby.artifacts.users.v1alpha1.Harbor.getDefaultInstance() : harbor_;
      } else {
        return harborBuilder_.getMessage();
      }
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    public Builder setHarbor(io.cuemby.artifacts.users.v1alpha1.Harbor value) {
      if (harborBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        harbor_ = value;
        onChanged();
      } else {
        harborBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    public Builder setHarbor(
        io.cuemby.artifacts.users.v1alpha1.Harbor.Builder builderForValue) {
      if (harborBuilder_ == null) {
        harbor_ = builderForValue.build();
        onChanged();
      } else {
        harborBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    public Builder mergeHarbor(io.cuemby.artifacts.users.v1alpha1.Harbor value) {
      if (harborBuilder_ == null) {
        if (harbor_ != null) {
          harbor_ =
            io.cuemby.artifacts.users.v1alpha1.Harbor.newBuilder(harbor_).mergeFrom(value).buildPartial();
        } else {
          harbor_ = value;
        }
        onChanged();
      } else {
        harborBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    public Builder clearHarbor() {
      if (harborBuilder_ == null) {
        harbor_ = null;
        onChanged();
      } else {
        harbor_ = null;
        harborBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    public io.cuemby.artifacts.users.v1alpha1.Harbor.Builder getHarborBuilder() {
      
      onChanged();
      return getHarborFieldBuilder().getBuilder();
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    public io.cuemby.artifacts.users.v1alpha1.HarborOrBuilder getHarborOrBuilder() {
      if (harborBuilder_ != null) {
        return harborBuilder_.getMessageOrBuilder();
      } else {
        return harbor_ == null ?
            io.cuemby.artifacts.users.v1alpha1.Harbor.getDefaultInstance() : harbor_;
      }
    }
    /**
     * <code>.artifacts.users.v1alpha1.Harbor harbor = 7 [json_name = "harbor"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.users.v1alpha1.Harbor, io.cuemby.artifacts.users.v1alpha1.Harbor.Builder, io.cuemby.artifacts.users.v1alpha1.HarborOrBuilder> 
        getHarborFieldBuilder() {
      if (harborBuilder_ == null) {
        harborBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.artifacts.users.v1alpha1.Harbor, io.cuemby.artifacts.users.v1alpha1.Harbor.Builder, io.cuemby.artifacts.users.v1alpha1.HarborOrBuilder>(
                getHarbor(),
                getParentForChildren(),
                isClean());
        harbor_ = null;
      }
      return harborBuilder_;
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


    // @@protoc_insertion_point(builder_scope:artifacts.users.v1alpha1.UsersRegistry)
  }

  // @@protoc_insertion_point(class_scope:artifacts.users.v1alpha1.UsersRegistry)
  private static final io.cuemby.artifacts.users.v1alpha1.UsersRegistry DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.users.v1alpha1.UsersRegistry();
  }

  public static io.cuemby.artifacts.users.v1alpha1.UsersRegistry getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<UsersRegistry>
      PARSER = new com.google.protobuf.AbstractParser<UsersRegistry>() {
    @java.lang.Override
    public UsersRegistry parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new UsersRegistry(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<UsersRegistry> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<UsersRegistry> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.users.v1alpha1.UsersRegistry getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

