// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: vault/v1alpha1/vault_api.proto

package io.cuemby.vault.v1alpha1;

/**
 * Protobuf type {@code vault.v1alpha1.DeleteSecretRequest}
 */
public final class DeleteSecretRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:vault.v1alpha1.DeleteSecretRequest)
    DeleteSecretRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DeleteSecretRequest.newBuilder() to construct.
  private DeleteSecretRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DeleteSecretRequest() {
    namespace_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new DeleteSecretRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private DeleteSecretRequest(
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

            projectId_ = input.readUInt32();
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            namespace_ = s;
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
    return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_DeleteSecretRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_DeleteSecretRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.vault.v1alpha1.DeleteSecretRequest.class, io.cuemby.vault.v1alpha1.DeleteSecretRequest.Builder.class);
  }

  public static final int PROJECT_ID_FIELD_NUMBER = 1;
  private int projectId_;
  /**
   * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  @java.lang.Override
  public int getProjectId() {
    return projectId_;
  }

  public static final int NAMESPACE_FIELD_NUMBER = 2;
  private volatile java.lang.Object namespace_;
  /**
   * <code>string namespace = 2 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  @java.lang.Override
  public java.lang.String getNamespace() {
    java.lang.Object ref = namespace_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      namespace_ = s;
      return s;
    }
  }
  /**
   * <code>string namespace = 2 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNamespaceBytes() {
    java.lang.Object ref = namespace_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      namespace_ = b;
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
    if (projectId_ != 0) {
      output.writeUInt32(1, projectId_);
    }
    if (!getNamespaceBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, namespace_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (projectId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, projectId_);
    }
    if (!getNamespaceBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, namespace_);
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
    if (!(obj instanceof io.cuemby.vault.v1alpha1.DeleteSecretRequest)) {
      return super.equals(obj);
    }
    io.cuemby.vault.v1alpha1.DeleteSecretRequest other = (io.cuemby.vault.v1alpha1.DeleteSecretRequest) obj;

    if (getProjectId()
        != other.getProjectId()) return false;
    if (!getNamespace()
        .equals(other.getNamespace())) return false;
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
    hash = (37 * hash) + PROJECT_ID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId();
    hash = (37 * hash) + NAMESPACE_FIELD_NUMBER;
    hash = (53 * hash) + getNamespace().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.vault.v1alpha1.DeleteSecretRequest prototype) {
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
   * Protobuf type {@code vault.v1alpha1.DeleteSecretRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:vault.v1alpha1.DeleteSecretRequest)
      io.cuemby.vault.v1alpha1.DeleteSecretRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_DeleteSecretRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_DeleteSecretRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.vault.v1alpha1.DeleteSecretRequest.class, io.cuemby.vault.v1alpha1.DeleteSecretRequest.Builder.class);
    }

    // Construct using io.cuemby.vault.v1alpha1.DeleteSecretRequest.newBuilder()
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
      projectId_ = 0;

      namespace_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.vault.v1alpha1.VaultAPIProto.internal_static_vault_v1alpha1_DeleteSecretRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.DeleteSecretRequest getDefaultInstanceForType() {
      return io.cuemby.vault.v1alpha1.DeleteSecretRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.DeleteSecretRequest build() {
      io.cuemby.vault.v1alpha1.DeleteSecretRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.vault.v1alpha1.DeleteSecretRequest buildPartial() {
      io.cuemby.vault.v1alpha1.DeleteSecretRequest result = new io.cuemby.vault.v1alpha1.DeleteSecretRequest(this);
      result.projectId_ = projectId_;
      result.namespace_ = namespace_;
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
      if (other instanceof io.cuemby.vault.v1alpha1.DeleteSecretRequest) {
        return mergeFrom((io.cuemby.vault.v1alpha1.DeleteSecretRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.vault.v1alpha1.DeleteSecretRequest other) {
      if (other == io.cuemby.vault.v1alpha1.DeleteSecretRequest.getDefaultInstance()) return this;
      if (other.getProjectId() != 0) {
        setProjectId(other.getProjectId());
      }
      if (!other.getNamespace().isEmpty()) {
        namespace_ = other.namespace_;
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
      io.cuemby.vault.v1alpha1.DeleteSecretRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.vault.v1alpha1.DeleteSecretRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int projectId_ ;
    /**
     * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @return The projectId.
     */
    @java.lang.Override
    public int getProjectId() {
      return projectId_;
    }
    /**
     * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @param value The projectId to set.
     * @return This builder for chaining.
     */
    public Builder setProjectId(int value) {
      
      projectId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectId() {
      
      projectId_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object namespace_ = "";
    /**
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @return The namespace.
     */
    public java.lang.String getNamespace() {
      java.lang.Object ref = namespace_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        namespace_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @return The bytes for namespace.
     */
    public com.google.protobuf.ByteString
        getNamespaceBytes() {
      java.lang.Object ref = namespace_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        namespace_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @param value The namespace to set.
     * @return This builder for chaining.
     */
    public Builder setNamespace(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      namespace_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNamespace() {
      
      namespace_ = getDefaultInstance().getNamespace();
      onChanged();
      return this;
    }
    /**
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @param value The bytes for namespace to set.
     * @return This builder for chaining.
     */
    public Builder setNamespaceBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      namespace_ = value;
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


    // @@protoc_insertion_point(builder_scope:vault.v1alpha1.DeleteSecretRequest)
  }

  // @@protoc_insertion_point(class_scope:vault.v1alpha1.DeleteSecretRequest)
  private static final io.cuemby.vault.v1alpha1.DeleteSecretRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.vault.v1alpha1.DeleteSecretRequest();
  }

  public static io.cuemby.vault.v1alpha1.DeleteSecretRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DeleteSecretRequest>
      PARSER = new com.google.protobuf.AbstractParser<DeleteSecretRequest>() {
    @java.lang.Override
    public DeleteSecretRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new DeleteSecretRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<DeleteSecretRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DeleteSecretRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.vault.v1alpha1.DeleteSecretRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

