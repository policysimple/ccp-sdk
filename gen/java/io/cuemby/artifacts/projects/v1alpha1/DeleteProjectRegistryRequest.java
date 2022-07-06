// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects_api.proto

package io.cuemby.artifacts.projects.v1alpha1;

/**
 * Protobuf type {@code artifacts.projects.v1alpha1.DeleteProjectRegistryRequest}
 */
public final class DeleteProjectRegistryRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.projects.v1alpha1.DeleteProjectRegistryRequest)
    DeleteProjectRegistryRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DeleteProjectRegistryRequest.newBuilder() to construct.
  private DeleteProjectRegistryRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DeleteProjectRegistryRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new DeleteProjectRegistryRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private DeleteProjectRegistryRequest(
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
          case 8: {

            projectRegistryId_ = input.readUInt32();
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
    return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.class, io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.Builder.class);
  }

  public static final int PROJECT_REGISTRY_ID_FIELD_NUMBER = 1;
  private int projectRegistryId_;
  /**
   * <code>uint32 project_registry_id = 1 [json_name = "projectRegistryId"];</code>
   * @return The projectRegistryId.
   */
  @java.lang.Override
  public int getProjectRegistryId() {
    return projectRegistryId_;
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
    if (projectRegistryId_ != 0) {
      output.writeUInt32(1, projectRegistryId_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (projectRegistryId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, projectRegistryId_);
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
    if (!(obj instanceof io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest other = (io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest) obj;

    if (getProjectRegistryId()
        != other.getProjectRegistryId()) return false;
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
    hash = (37 * hash) + PROJECT_REGISTRY_ID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectRegistryId();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest prototype) {
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
   * Protobuf type {@code artifacts.projects.v1alpha1.DeleteProjectRegistryRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.projects.v1alpha1.DeleteProjectRegistryRequest)
      io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.class, io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.Builder.class);
    }

    // Construct using io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.newBuilder()
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
      projectRegistryId_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_DeleteProjectRegistryRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest getDefaultInstanceForType() {
      return io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest build() {
      io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest buildPartial() {
      io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest result = new io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest(this);
      result.projectRegistryId_ = projectRegistryId_;
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
      if (other instanceof io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest) {
        return mergeFrom((io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest other) {
      if (other == io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest.getDefaultInstance()) return this;
      if (other.getProjectRegistryId() != 0) {
        setProjectRegistryId(other.getProjectRegistryId());
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
      io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int projectRegistryId_ ;
    /**
     * <code>uint32 project_registry_id = 1 [json_name = "projectRegistryId"];</code>
     * @return The projectRegistryId.
     */
    @java.lang.Override
    public int getProjectRegistryId() {
      return projectRegistryId_;
    }
    /**
     * <code>uint32 project_registry_id = 1 [json_name = "projectRegistryId"];</code>
     * @param value The projectRegistryId to set.
     * @return This builder for chaining.
     */
    public Builder setProjectRegistryId(int value) {
      
      projectRegistryId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 project_registry_id = 1 [json_name = "projectRegistryId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectRegistryId() {
      
      projectRegistryId_ = 0;
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


    // @@protoc_insertion_point(builder_scope:artifacts.projects.v1alpha1.DeleteProjectRegistryRequest)
  }

  // @@protoc_insertion_point(class_scope:artifacts.projects.v1alpha1.DeleteProjectRegistryRequest)
  private static final io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest();
  }

  public static io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DeleteProjectRegistryRequest>
      PARSER = new com.google.protobuf.AbstractParser<DeleteProjectRegistryRequest>() {
    @java.lang.Override
    public DeleteProjectRegistryRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new DeleteProjectRegistryRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<DeleteProjectRegistryRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DeleteProjectRegistryRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.projects.v1alpha1.DeleteProjectRegistryRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

