// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/runtime/v1alpha1/runtime_api.proto

package io.cuemby.pipelines.runtime.v1alpha1;

/**
 * Protobuf type {@code pipelines.runtime.v1alpha1.GetRuntimeRequest}
 */
public final class GetRuntimeRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.runtime.v1alpha1.GetRuntimeRequest)
    GetRuntimeRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetRuntimeRequest.newBuilder() to construct.
  private GetRuntimeRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetRuntimeRequest() {
    runtimeId_ = "";
    namespace_ = "";
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetRuntimeRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetRuntimeRequest(
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

            runtimeId_ = s;
            break;
          }
          case 16: {

            projectId_ = input.readUInt32();
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            namespace_ = s;
            break;
          }
          case 34: {
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
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.class, io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.Builder.class);
  }

  public static final int RUNTIME_ID_FIELD_NUMBER = 1;
  private volatile java.lang.Object runtimeId_;
  /**
   * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
   * @return The runtimeId.
   */
  @java.lang.Override
  public java.lang.String getRuntimeId() {
    java.lang.Object ref = runtimeId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      runtimeId_ = s;
      return s;
    }
  }
  /**
   * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
   * @return The bytes for runtimeId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getRuntimeIdBytes() {
    java.lang.Object ref = runtimeId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      runtimeId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int PROJECT_ID_FIELD_NUMBER = 2;
  private int projectId_;
  /**
   * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  @java.lang.Override
  public int getProjectId() {
    return projectId_;
  }

  public static final int NAMESPACE_FIELD_NUMBER = 3;
  private volatile java.lang.Object namespace_;
  /**
   * <code>string namespace = 3 [json_name = "namespace"];</code>
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
   * <code>string namespace = 3 [json_name = "namespace"];</code>
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

  public static final int STATUS_FIELD_NUMBER = 4;
  private volatile java.lang.Object status_;
  /**
   * <code>string status = 4 [json_name = "status"];</code>
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
   * <code>string status = 4 [json_name = "status"];</code>
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
    if (!getRuntimeIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, runtimeId_);
    }
    if (projectId_ != 0) {
      output.writeUInt32(2, projectId_);
    }
    if (!getNamespaceBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, namespace_);
    }
    if (!getStatusBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, status_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getRuntimeIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, runtimeId_);
    }
    if (projectId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, projectId_);
    }
    if (!getNamespaceBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, namespace_);
    }
    if (!getStatusBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, status_);
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
    if (!(obj instanceof io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest other = (io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest) obj;

    if (!getRuntimeId()
        .equals(other.getRuntimeId())) return false;
    if (getProjectId()
        != other.getProjectId()) return false;
    if (!getNamespace()
        .equals(other.getNamespace())) return false;
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
    hash = (37 * hash) + RUNTIME_ID_FIELD_NUMBER;
    hash = (53 * hash) + getRuntimeId().hashCode();
    hash = (37 * hash) + PROJECT_ID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId();
    hash = (37 * hash) + NAMESPACE_FIELD_NUMBER;
    hash = (53 * hash) + getNamespace().hashCode();
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest prototype) {
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
   * Protobuf type {@code pipelines.runtime.v1alpha1.GetRuntimeRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.runtime.v1alpha1.GetRuntimeRequest)
      io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.class, io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.Builder.class);
    }

    // Construct using io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.newBuilder()
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
      runtimeId_ = "";

      projectId_ = 0;

      namespace_ = "";

      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.RuntimeAPIProto.internal_static_pipelines_runtime_v1alpha1_GetRuntimeRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest getDefaultInstanceForType() {
      return io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest build() {
      io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest buildPartial() {
      io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest result = new io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest(this);
      result.runtimeId_ = runtimeId_;
      result.projectId_ = projectId_;
      result.namespace_ = namespace_;
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
      if (other instanceof io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest) {
        return mergeFrom((io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest other) {
      if (other == io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest.getDefaultInstance()) return this;
      if (!other.getRuntimeId().isEmpty()) {
        runtimeId_ = other.runtimeId_;
        onChanged();
      }
      if (other.getProjectId() != 0) {
        setProjectId(other.getProjectId());
      }
      if (!other.getNamespace().isEmpty()) {
        namespace_ = other.namespace_;
        onChanged();
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
      io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object runtimeId_ = "";
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return The runtimeId.
     */
    public java.lang.String getRuntimeId() {
      java.lang.Object ref = runtimeId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        runtimeId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return The bytes for runtimeId.
     */
    public com.google.protobuf.ByteString
        getRuntimeIdBytes() {
      java.lang.Object ref = runtimeId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        runtimeId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @param value The runtimeId to set.
     * @return This builder for chaining.
     */
    public Builder setRuntimeId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      runtimeId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearRuntimeId() {
      
      runtimeId_ = getDefaultInstance().getRuntimeId();
      onChanged();
      return this;
    }
    /**
     * <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @param value The bytes for runtimeId to set.
     * @return This builder for chaining.
     */
    public Builder setRuntimeIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      runtimeId_ = value;
      onChanged();
      return this;
    }

    private int projectId_ ;
    /**
     * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @return The projectId.
     */
    @java.lang.Override
    public int getProjectId() {
      return projectId_;
    }
    /**
     * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @param value The projectId to set.
     * @return This builder for chaining.
     */
    public Builder setProjectId(int value) {
      
      projectId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectId() {
      
      projectId_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object namespace_ = "";
    /**
     * <code>string namespace = 3 [json_name = "namespace"];</code>
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
     * <code>string namespace = 3 [json_name = "namespace"];</code>
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
     * <code>string namespace = 3 [json_name = "namespace"];</code>
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
     * <code>string namespace = 3 [json_name = "namespace"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNamespace() {
      
      namespace_ = getDefaultInstance().getNamespace();
      onChanged();
      return this;
    }
    /**
     * <code>string namespace = 3 [json_name = "namespace"];</code>
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

    private java.lang.Object status_ = "";
    /**
     * <code>string status = 4 [json_name = "status"];</code>
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
     * <code>string status = 4 [json_name = "status"];</code>
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
     * <code>string status = 4 [json_name = "status"];</code>
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
     * <code>string status = 4 [json_name = "status"];</code>
     * @return This builder for chaining.
     */
    public Builder clearStatus() {
      
      status_ = getDefaultInstance().getStatus();
      onChanged();
      return this;
    }
    /**
     * <code>string status = 4 [json_name = "status"];</code>
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


    // @@protoc_insertion_point(builder_scope:pipelines.runtime.v1alpha1.GetRuntimeRequest)
  }

  // @@protoc_insertion_point(class_scope:pipelines.runtime.v1alpha1.GetRuntimeRequest)
  private static final io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest();
  }

  public static io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetRuntimeRequest>
      PARSER = new com.google.protobuf.AbstractParser<GetRuntimeRequest>() {
    @java.lang.Override
    public GetRuntimeRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetRuntimeRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetRuntimeRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetRuntimeRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.runtime.v1alpha1.GetRuntimeRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

