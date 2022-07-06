// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects_api.proto

package io.cuemby.artifacts.projects.v1alpha1;

/**
 * Protobuf type {@code artifacts.projects.v1alpha1.CreateProjectRegistryResponse}
 */
public final class CreateProjectRegistryResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.projects.v1alpha1.CreateProjectRegistryResponse)
    CreateProjectRegistryResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateProjectRegistryResponse.newBuilder() to construct.
  private CreateProjectRegistryResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateProjectRegistryResponse() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CreateProjectRegistryResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateProjectRegistryResponse(
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
            io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.Builder subBuilder = null;
            if (projectRegistry_ != null) {
              subBuilder = projectRegistry_.toBuilder();
            }
            projectRegistry_ = input.readMessage(io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(projectRegistry_);
              projectRegistry_ = subBuilder.buildPartial();
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
    return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_CreateProjectRegistryResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_CreateProjectRegistryResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.class, io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.Builder.class);
  }

  public static final int PROJECT_REGISTRY_FIELD_NUMBER = 1;
  private io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry projectRegistry_;
  /**
   * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
   * @return Whether the projectRegistry field is set.
   */
  @java.lang.Override
  public boolean hasProjectRegistry() {
    return projectRegistry_ != null;
  }
  /**
   * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
   * @return The projectRegistry.
   */
  @java.lang.Override
  public io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry getProjectRegistry() {
    return projectRegistry_ == null ? io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.getDefaultInstance() : projectRegistry_;
  }
  /**
   * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
   */
  @java.lang.Override
  public io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistryOrBuilder getProjectRegistryOrBuilder() {
    return getProjectRegistry();
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
    if (projectRegistry_ != null) {
      output.writeMessage(1, getProjectRegistry());
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
    if (projectRegistry_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getProjectRegistry());
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
    if (!(obj instanceof io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse other = (io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse) obj;

    if (hasProjectRegistry() != other.hasProjectRegistry()) return false;
    if (hasProjectRegistry()) {
      if (!getProjectRegistry()
          .equals(other.getProjectRegistry())) return false;
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
    if (hasProjectRegistry()) {
      hash = (37 * hash) + PROJECT_REGISTRY_FIELD_NUMBER;
      hash = (53 * hash) + getProjectRegistry().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse prototype) {
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
   * Protobuf type {@code artifacts.projects.v1alpha1.CreateProjectRegistryResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.projects.v1alpha1.CreateProjectRegistryResponse)
      io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_CreateProjectRegistryResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_CreateProjectRegistryResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.class, io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.Builder.class);
    }

    // Construct using io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.newBuilder()
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
      if (projectRegistryBuilder_ == null) {
        projectRegistry_ = null;
      } else {
        projectRegistry_ = null;
        projectRegistryBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_CreateProjectRegistryResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse getDefaultInstanceForType() {
      return io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse build() {
      io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse buildPartial() {
      io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse result = new io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse(this);
      if (projectRegistryBuilder_ == null) {
        result.projectRegistry_ = projectRegistry_;
      } else {
        result.projectRegistry_ = projectRegistryBuilder_.build();
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
      if (other instanceof io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse) {
        return mergeFrom((io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse other) {
      if (other == io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse.getDefaultInstance()) return this;
      if (other.hasProjectRegistry()) {
        mergeProjectRegistry(other.getProjectRegistry());
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
      io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry projectRegistry_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry, io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.Builder, io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistryOrBuilder> projectRegistryBuilder_;
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     * @return Whether the projectRegistry field is set.
     */
    public boolean hasProjectRegistry() {
      return projectRegistryBuilder_ != null || projectRegistry_ != null;
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     * @return The projectRegistry.
     */
    public io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry getProjectRegistry() {
      if (projectRegistryBuilder_ == null) {
        return projectRegistry_ == null ? io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.getDefaultInstance() : projectRegistry_;
      } else {
        return projectRegistryBuilder_.getMessage();
      }
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    public Builder setProjectRegistry(io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry value) {
      if (projectRegistryBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        projectRegistry_ = value;
        onChanged();
      } else {
        projectRegistryBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    public Builder setProjectRegistry(
        io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.Builder builderForValue) {
      if (projectRegistryBuilder_ == null) {
        projectRegistry_ = builderForValue.build();
        onChanged();
      } else {
        projectRegistryBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    public Builder mergeProjectRegistry(io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry value) {
      if (projectRegistryBuilder_ == null) {
        if (projectRegistry_ != null) {
          projectRegistry_ =
            io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.newBuilder(projectRegistry_).mergeFrom(value).buildPartial();
        } else {
          projectRegistry_ = value;
        }
        onChanged();
      } else {
        projectRegistryBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    public Builder clearProjectRegistry() {
      if (projectRegistryBuilder_ == null) {
        projectRegistry_ = null;
        onChanged();
      } else {
        projectRegistry_ = null;
        projectRegistryBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    public io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.Builder getProjectRegistryBuilder() {
      
      onChanged();
      return getProjectRegistryFieldBuilder().getBuilder();
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    public io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistryOrBuilder getProjectRegistryOrBuilder() {
      if (projectRegistryBuilder_ != null) {
        return projectRegistryBuilder_.getMessageOrBuilder();
      } else {
        return projectRegistry_ == null ?
            io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.getDefaultInstance() : projectRegistry_;
      }
    }
    /**
     * <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry, io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.Builder, io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistryOrBuilder> 
        getProjectRegistryFieldBuilder() {
      if (projectRegistryBuilder_ == null) {
        projectRegistryBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry, io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistry.Builder, io.cuemby.artifacts.projects.v1alpha1.ProjectsRegistryOrBuilder>(
                getProjectRegistry(),
                getParentForChildren(),
                isClean());
        projectRegistry_ = null;
      }
      return projectRegistryBuilder_;
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


    // @@protoc_insertion_point(builder_scope:artifacts.projects.v1alpha1.CreateProjectRegistryResponse)
  }

  // @@protoc_insertion_point(class_scope:artifacts.projects.v1alpha1.CreateProjectRegistryResponse)
  private static final io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse();
  }

  public static io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateProjectRegistryResponse>
      PARSER = new com.google.protobuf.AbstractParser<CreateProjectRegistryResponse>() {
    @java.lang.Override
    public CreateProjectRegistryResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateProjectRegistryResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateProjectRegistryResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateProjectRegistryResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.projects.v1alpha1.CreateProjectRegistryResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

