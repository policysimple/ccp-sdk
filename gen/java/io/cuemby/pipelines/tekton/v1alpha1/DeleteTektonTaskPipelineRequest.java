// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton_api.proto

package io.cuemby.pipelines.tekton.v1alpha1;

/**
 * Protobuf type {@code pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest}
 */
public final class DeleteTektonTaskPipelineRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest)
    DeleteTektonTaskPipelineRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DeleteTektonTaskPipelineRequest.newBuilder() to construct.
  private DeleteTektonTaskPipelineRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DeleteTektonTaskPipelineRequest() {
    taskId_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new DeleteTektonTaskPipelineRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private DeleteTektonTaskPipelineRequest(
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
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            taskId_ = s;
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
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.class, io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.Builder.class);
  }

  public static final int TASK_ID_FIELD_NUMBER = 2;
  private volatile java.lang.Object taskId_;
  /**
   * <code>string task_id = 2 [json_name = "taskId"];</code>
   * @return The taskId.
   */
  @java.lang.Override
  public java.lang.String getTaskId() {
    java.lang.Object ref = taskId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      taskId_ = s;
      return s;
    }
  }
  /**
   * <code>string task_id = 2 [json_name = "taskId"];</code>
   * @return The bytes for taskId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getTaskIdBytes() {
    java.lang.Object ref = taskId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      taskId_ = b;
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
    if (!getTaskIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, taskId_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getTaskIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, taskId_);
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
    if (!(obj instanceof io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest other = (io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest) obj;

    if (!getTaskId()
        .equals(other.getTaskId())) return false;
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
    hash = (37 * hash) + TASK_ID_FIELD_NUMBER;
    hash = (53 * hash) + getTaskId().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest prototype) {
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
   * Protobuf type {@code pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest)
      io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.class, io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.Builder.class);
    }

    // Construct using io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.newBuilder()
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
      taskId_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_DeleteTektonTaskPipelineRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest getDefaultInstanceForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest build() {
      io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest buildPartial() {
      io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest result = new io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest(this);
      result.taskId_ = taskId_;
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
      if (other instanceof io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest) {
        return mergeFrom((io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest other) {
      if (other == io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest.getDefaultInstance()) return this;
      if (!other.getTaskId().isEmpty()) {
        taskId_ = other.taskId_;
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
      io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object taskId_ = "";
    /**
     * <code>string task_id = 2 [json_name = "taskId"];</code>
     * @return The taskId.
     */
    public java.lang.String getTaskId() {
      java.lang.Object ref = taskId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        taskId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string task_id = 2 [json_name = "taskId"];</code>
     * @return The bytes for taskId.
     */
    public com.google.protobuf.ByteString
        getTaskIdBytes() {
      java.lang.Object ref = taskId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        taskId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string task_id = 2 [json_name = "taskId"];</code>
     * @param value The taskId to set.
     * @return This builder for chaining.
     */
    public Builder setTaskId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      taskId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string task_id = 2 [json_name = "taskId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearTaskId() {
      
      taskId_ = getDefaultInstance().getTaskId();
      onChanged();
      return this;
    }
    /**
     * <code>string task_id = 2 [json_name = "taskId"];</code>
     * @param value The bytes for taskId to set.
     * @return This builder for chaining.
     */
    public Builder setTaskIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      taskId_ = value;
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


    // @@protoc_insertion_point(builder_scope:pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest)
  }

  // @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest)
  private static final io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest();
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DeleteTektonTaskPipelineRequest>
      PARSER = new com.google.protobuf.AbstractParser<DeleteTektonTaskPipelineRequest>() {
    @java.lang.Override
    public DeleteTektonTaskPipelineRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new DeleteTektonTaskPipelineRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<DeleteTektonTaskPipelineRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DeleteTektonTaskPipelineRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.DeleteTektonTaskPipelineRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

