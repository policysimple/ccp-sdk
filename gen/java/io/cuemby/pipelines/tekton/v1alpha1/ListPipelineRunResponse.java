// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton_api.proto

package io.cuemby.pipelines.tekton.v1alpha1;

/**
 * Protobuf type {@code pipelines.tekton.v1alpha1.ListPipelineRunResponse}
 */
public final class ListPipelineRunResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.tekton.v1alpha1.ListPipelineRunResponse)
    ListPipelineRunResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ListPipelineRunResponse.newBuilder() to construct.
  private ListPipelineRunResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ListPipelineRunResponse() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ListPipelineRunResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private ListPipelineRunResponse(
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
            io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.Builder subBuilder = null;
            if (pipelineRunList_ != null) {
              subBuilder = pipelineRunList_.toBuilder();
            }
            pipelineRunList_ = input.readMessage(io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(pipelineRunList_);
              pipelineRunList_ = subBuilder.buildPartial();
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
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_ListPipelineRunResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_ListPipelineRunResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.class, io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.Builder.class);
  }

  public static final int PIPELINE_RUN_LIST_FIELD_NUMBER = 1;
  private io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList pipelineRunList_;
  /**
   * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
   * @return Whether the pipelineRunList field is set.
   */
  @java.lang.Override
  public boolean hasPipelineRunList() {
    return pipelineRunList_ != null;
  }
  /**
   * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
   * @return The pipelineRunList.
   */
  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList getPipelineRunList() {
    return pipelineRunList_ == null ? io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.getDefaultInstance() : pipelineRunList_;
  }
  /**
   * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
   */
  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.PipelineRunListOrBuilder getPipelineRunListOrBuilder() {
    return getPipelineRunList();
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
    if (pipelineRunList_ != null) {
      output.writeMessage(1, getPipelineRunList());
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
    if (pipelineRunList_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getPipelineRunList());
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
    if (!(obj instanceof io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse other = (io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse) obj;

    if (hasPipelineRunList() != other.hasPipelineRunList()) return false;
    if (hasPipelineRunList()) {
      if (!getPipelineRunList()
          .equals(other.getPipelineRunList())) return false;
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
    if (hasPipelineRunList()) {
      hash = (37 * hash) + PIPELINE_RUN_LIST_FIELD_NUMBER;
      hash = (53 * hash) + getPipelineRunList().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse prototype) {
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
   * Protobuf type {@code pipelines.tekton.v1alpha1.ListPipelineRunResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.tekton.v1alpha1.ListPipelineRunResponse)
      io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_ListPipelineRunResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_ListPipelineRunResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.class, io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.Builder.class);
    }

    // Construct using io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.newBuilder()
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
      if (pipelineRunListBuilder_ == null) {
        pipelineRunList_ = null;
      } else {
        pipelineRunList_ = null;
        pipelineRunListBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonAPIProto.internal_static_pipelines_tekton_v1alpha1_ListPipelineRunResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse getDefaultInstanceForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse build() {
      io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse buildPartial() {
      io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse result = new io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse(this);
      if (pipelineRunListBuilder_ == null) {
        result.pipelineRunList_ = pipelineRunList_;
      } else {
        result.pipelineRunList_ = pipelineRunListBuilder_.build();
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
      if (other instanceof io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse) {
        return mergeFrom((io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse other) {
      if (other == io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse.getDefaultInstance()) return this;
      if (other.hasPipelineRunList()) {
        mergePipelineRunList(other.getPipelineRunList());
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
      io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList pipelineRunList_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList, io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.Builder, io.cuemby.pipelines.tekton.v1alpha1.PipelineRunListOrBuilder> pipelineRunListBuilder_;
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     * @return Whether the pipelineRunList field is set.
     */
    public boolean hasPipelineRunList() {
      return pipelineRunListBuilder_ != null || pipelineRunList_ != null;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     * @return The pipelineRunList.
     */
    public io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList getPipelineRunList() {
      if (pipelineRunListBuilder_ == null) {
        return pipelineRunList_ == null ? io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.getDefaultInstance() : pipelineRunList_;
      } else {
        return pipelineRunListBuilder_.getMessage();
      }
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    public Builder setPipelineRunList(io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList value) {
      if (pipelineRunListBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        pipelineRunList_ = value;
        onChanged();
      } else {
        pipelineRunListBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    public Builder setPipelineRunList(
        io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.Builder builderForValue) {
      if (pipelineRunListBuilder_ == null) {
        pipelineRunList_ = builderForValue.build();
        onChanged();
      } else {
        pipelineRunListBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    public Builder mergePipelineRunList(io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList value) {
      if (pipelineRunListBuilder_ == null) {
        if (pipelineRunList_ != null) {
          pipelineRunList_ =
            io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.newBuilder(pipelineRunList_).mergeFrom(value).buildPartial();
        } else {
          pipelineRunList_ = value;
        }
        onChanged();
      } else {
        pipelineRunListBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    public Builder clearPipelineRunList() {
      if (pipelineRunListBuilder_ == null) {
        pipelineRunList_ = null;
        onChanged();
      } else {
        pipelineRunList_ = null;
        pipelineRunListBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    public io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.Builder getPipelineRunListBuilder() {
      
      onChanged();
      return getPipelineRunListFieldBuilder().getBuilder();
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    public io.cuemby.pipelines.tekton.v1alpha1.PipelineRunListOrBuilder getPipelineRunListOrBuilder() {
      if (pipelineRunListBuilder_ != null) {
        return pipelineRunListBuilder_.getMessageOrBuilder();
      } else {
        return pipelineRunList_ == null ?
            io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.getDefaultInstance() : pipelineRunList_;
      }
    }
    /**
     * <code>.pipelines.tekton.v1alpha1.PipelineRunList pipeline_run_list = 1 [json_name = "pipelineRunList"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList, io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.Builder, io.cuemby.pipelines.tekton.v1alpha1.PipelineRunListOrBuilder> 
        getPipelineRunListFieldBuilder() {
      if (pipelineRunListBuilder_ == null) {
        pipelineRunListBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList, io.cuemby.pipelines.tekton.v1alpha1.PipelineRunList.Builder, io.cuemby.pipelines.tekton.v1alpha1.PipelineRunListOrBuilder>(
                getPipelineRunList(),
                getParentForChildren(),
                isClean());
        pipelineRunList_ = null;
      }
      return pipelineRunListBuilder_;
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


    // @@protoc_insertion_point(builder_scope:pipelines.tekton.v1alpha1.ListPipelineRunResponse)
  }

  // @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.ListPipelineRunResponse)
  private static final io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse();
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ListPipelineRunResponse>
      PARSER = new com.google.protobuf.AbstractParser<ListPipelineRunResponse>() {
    @java.lang.Override
    public ListPipelineRunResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new ListPipelineRunResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ListPipelineRunResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ListPipelineRunResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.ListPipelineRunResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
