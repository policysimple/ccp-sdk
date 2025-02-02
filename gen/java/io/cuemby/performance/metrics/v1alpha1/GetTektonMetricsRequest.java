// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/metrics/v1alpha1/metrics_api.proto

package io.cuemby.performance.metrics.v1alpha1;

/**
 * Protobuf type {@code performance.metrics.v1alpha1.GetTektonMetricsRequest}
 */
public final class GetTektonMetricsRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:performance.metrics.v1alpha1.GetTektonMetricsRequest)
    GetTektonMetricsRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetTektonMetricsRequest.newBuilder() to construct.
  private GetTektonMetricsRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetTektonMetricsRequest() {
    namePipelineRun_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GetTektonMetricsRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetTektonMetricsRequest(
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

            namePipelineRun_ = s;
            break;
          }
          case 18: {
            io.cuemby.performance.metrics.v1alpha1.Range.Builder subBuilder = null;
            if (range_ != null) {
              subBuilder = range_.toBuilder();
            }
            range_ = input.readMessage(io.cuemby.performance.metrics.v1alpha1.Range.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(range_);
              range_ = subBuilder.buildPartial();
            }

            break;
          }
          case 24: {

            page_ = input.readInt32();
            break;
          }
          case 32: {

            size_ = input.readInt32();
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
    return io.cuemby.performance.metrics.v1alpha1.MetricsApiProto.internal_static_performance_metrics_v1alpha1_GetTektonMetricsRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.performance.metrics.v1alpha1.MetricsApiProto.internal_static_performance_metrics_v1alpha1_GetTektonMetricsRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.class, io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.Builder.class);
  }

  public static final int NAME_PIPELINE_RUN_FIELD_NUMBER = 1;
  private volatile java.lang.Object namePipelineRun_;
  /**
   * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
   * @return The namePipelineRun.
   */
  @java.lang.Override
  public java.lang.String getNamePipelineRun() {
    java.lang.Object ref = namePipelineRun_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      namePipelineRun_ = s;
      return s;
    }
  }
  /**
   * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
   * @return The bytes for namePipelineRun.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNamePipelineRunBytes() {
    java.lang.Object ref = namePipelineRun_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      namePipelineRun_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int RANGE_FIELD_NUMBER = 2;
  private io.cuemby.performance.metrics.v1alpha1.Range range_;
  /**
   * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
   * @return Whether the range field is set.
   */
  @java.lang.Override
  public boolean hasRange() {
    return range_ != null;
  }
  /**
   * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
   * @return The range.
   */
  @java.lang.Override
  public io.cuemby.performance.metrics.v1alpha1.Range getRange() {
    return range_ == null ? io.cuemby.performance.metrics.v1alpha1.Range.getDefaultInstance() : range_;
  }
  /**
   * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
   */
  @java.lang.Override
  public io.cuemby.performance.metrics.v1alpha1.RangeOrBuilder getRangeOrBuilder() {
    return getRange();
  }

  public static final int PAGE_FIELD_NUMBER = 3;
  private int page_;
  /**
   * <code>int32 page = 3 [json_name = "page"];</code>
   * @return The page.
   */
  @java.lang.Override
  public int getPage() {
    return page_;
  }

  public static final int SIZE_FIELD_NUMBER = 4;
  private int size_;
  /**
   * <code>int32 size = 4 [json_name = "size"];</code>
   * @return The size.
   */
  @java.lang.Override
  public int getSize() {
    return size_;
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
    if (!getNamePipelineRunBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, namePipelineRun_);
    }
    if (range_ != null) {
      output.writeMessage(2, getRange());
    }
    if (page_ != 0) {
      output.writeInt32(3, page_);
    }
    if (size_ != 0) {
      output.writeInt32(4, size_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getNamePipelineRunBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, namePipelineRun_);
    }
    if (range_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getRange());
    }
    if (page_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(3, page_);
    }
    if (size_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(4, size_);
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
    if (!(obj instanceof io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest)) {
      return super.equals(obj);
    }
    io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest other = (io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest) obj;

    if (!getNamePipelineRun()
        .equals(other.getNamePipelineRun())) return false;
    if (hasRange() != other.hasRange()) return false;
    if (hasRange()) {
      if (!getRange()
          .equals(other.getRange())) return false;
    }
    if (getPage()
        != other.getPage()) return false;
    if (getSize()
        != other.getSize()) return false;
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
    hash = (37 * hash) + NAME_PIPELINE_RUN_FIELD_NUMBER;
    hash = (53 * hash) + getNamePipelineRun().hashCode();
    if (hasRange()) {
      hash = (37 * hash) + RANGE_FIELD_NUMBER;
      hash = (53 * hash) + getRange().hashCode();
    }
    hash = (37 * hash) + PAGE_FIELD_NUMBER;
    hash = (53 * hash) + getPage();
    hash = (37 * hash) + SIZE_FIELD_NUMBER;
    hash = (53 * hash) + getSize();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest prototype) {
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
   * Protobuf type {@code performance.metrics.v1alpha1.GetTektonMetricsRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:performance.metrics.v1alpha1.GetTektonMetricsRequest)
      io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.performance.metrics.v1alpha1.MetricsApiProto.internal_static_performance_metrics_v1alpha1_GetTektonMetricsRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.performance.metrics.v1alpha1.MetricsApiProto.internal_static_performance_metrics_v1alpha1_GetTektonMetricsRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.class, io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.Builder.class);
    }

    // Construct using io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.newBuilder()
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
      namePipelineRun_ = "";

      if (rangeBuilder_ == null) {
        range_ = null;
      } else {
        range_ = null;
        rangeBuilder_ = null;
      }
      page_ = 0;

      size_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.performance.metrics.v1alpha1.MetricsApiProto.internal_static_performance_metrics_v1alpha1_GetTektonMetricsRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest getDefaultInstanceForType() {
      return io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest build() {
      io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest buildPartial() {
      io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest result = new io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest(this);
      result.namePipelineRun_ = namePipelineRun_;
      if (rangeBuilder_ == null) {
        result.range_ = range_;
      } else {
        result.range_ = rangeBuilder_.build();
      }
      result.page_ = page_;
      result.size_ = size_;
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
      if (other instanceof io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest) {
        return mergeFrom((io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest other) {
      if (other == io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest.getDefaultInstance()) return this;
      if (!other.getNamePipelineRun().isEmpty()) {
        namePipelineRun_ = other.namePipelineRun_;
        onChanged();
      }
      if (other.hasRange()) {
        mergeRange(other.getRange());
      }
      if (other.getPage() != 0) {
        setPage(other.getPage());
      }
      if (other.getSize() != 0) {
        setSize(other.getSize());
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
      io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object namePipelineRun_ = "";
    /**
     * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
     * @return The namePipelineRun.
     */
    public java.lang.String getNamePipelineRun() {
      java.lang.Object ref = namePipelineRun_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        namePipelineRun_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
     * @return The bytes for namePipelineRun.
     */
    public com.google.protobuf.ByteString
        getNamePipelineRunBytes() {
      java.lang.Object ref = namePipelineRun_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        namePipelineRun_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
     * @param value The namePipelineRun to set.
     * @return This builder for chaining.
     */
    public Builder setNamePipelineRun(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      namePipelineRun_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNamePipelineRun() {
      
      namePipelineRun_ = getDefaultInstance().getNamePipelineRun();
      onChanged();
      return this;
    }
    /**
     * <code>string name_pipeline_run = 1 [json_name = "namePipelineRun"];</code>
     * @param value The bytes for namePipelineRun to set.
     * @return This builder for chaining.
     */
    public Builder setNamePipelineRunBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      namePipelineRun_ = value;
      onChanged();
      return this;
    }

    private io.cuemby.performance.metrics.v1alpha1.Range range_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.performance.metrics.v1alpha1.Range, io.cuemby.performance.metrics.v1alpha1.Range.Builder, io.cuemby.performance.metrics.v1alpha1.RangeOrBuilder> rangeBuilder_;
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     * @return Whether the range field is set.
     */
    public boolean hasRange() {
      return rangeBuilder_ != null || range_ != null;
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     * @return The range.
     */
    public io.cuemby.performance.metrics.v1alpha1.Range getRange() {
      if (rangeBuilder_ == null) {
        return range_ == null ? io.cuemby.performance.metrics.v1alpha1.Range.getDefaultInstance() : range_;
      } else {
        return rangeBuilder_.getMessage();
      }
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    public Builder setRange(io.cuemby.performance.metrics.v1alpha1.Range value) {
      if (rangeBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        range_ = value;
        onChanged();
      } else {
        rangeBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    public Builder setRange(
        io.cuemby.performance.metrics.v1alpha1.Range.Builder builderForValue) {
      if (rangeBuilder_ == null) {
        range_ = builderForValue.build();
        onChanged();
      } else {
        rangeBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    public Builder mergeRange(io.cuemby.performance.metrics.v1alpha1.Range value) {
      if (rangeBuilder_ == null) {
        if (range_ != null) {
          range_ =
            io.cuemby.performance.metrics.v1alpha1.Range.newBuilder(range_).mergeFrom(value).buildPartial();
        } else {
          range_ = value;
        }
        onChanged();
      } else {
        rangeBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    public Builder clearRange() {
      if (rangeBuilder_ == null) {
        range_ = null;
        onChanged();
      } else {
        range_ = null;
        rangeBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    public io.cuemby.performance.metrics.v1alpha1.Range.Builder getRangeBuilder() {
      
      onChanged();
      return getRangeFieldBuilder().getBuilder();
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    public io.cuemby.performance.metrics.v1alpha1.RangeOrBuilder getRangeOrBuilder() {
      if (rangeBuilder_ != null) {
        return rangeBuilder_.getMessageOrBuilder();
      } else {
        return range_ == null ?
            io.cuemby.performance.metrics.v1alpha1.Range.getDefaultInstance() : range_;
      }
    }
    /**
     * <code>.performance.metrics.v1alpha1.Range range = 2 [json_name = "range"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.performance.metrics.v1alpha1.Range, io.cuemby.performance.metrics.v1alpha1.Range.Builder, io.cuemby.performance.metrics.v1alpha1.RangeOrBuilder> 
        getRangeFieldBuilder() {
      if (rangeBuilder_ == null) {
        rangeBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.performance.metrics.v1alpha1.Range, io.cuemby.performance.metrics.v1alpha1.Range.Builder, io.cuemby.performance.metrics.v1alpha1.RangeOrBuilder>(
                getRange(),
                getParentForChildren(),
                isClean());
        range_ = null;
      }
      return rangeBuilder_;
    }

    private int page_ ;
    /**
     * <code>int32 page = 3 [json_name = "page"];</code>
     * @return The page.
     */
    @java.lang.Override
    public int getPage() {
      return page_;
    }
    /**
     * <code>int32 page = 3 [json_name = "page"];</code>
     * @param value The page to set.
     * @return This builder for chaining.
     */
    public Builder setPage(int value) {
      
      page_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 page = 3 [json_name = "page"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPage() {
      
      page_ = 0;
      onChanged();
      return this;
    }

    private int size_ ;
    /**
     * <code>int32 size = 4 [json_name = "size"];</code>
     * @return The size.
     */
    @java.lang.Override
    public int getSize() {
      return size_;
    }
    /**
     * <code>int32 size = 4 [json_name = "size"];</code>
     * @param value The size to set.
     * @return This builder for chaining.
     */
    public Builder setSize(int value) {
      
      size_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int32 size = 4 [json_name = "size"];</code>
     * @return This builder for chaining.
     */
    public Builder clearSize() {
      
      size_ = 0;
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


    // @@protoc_insertion_point(builder_scope:performance.metrics.v1alpha1.GetTektonMetricsRequest)
  }

  // @@protoc_insertion_point(class_scope:performance.metrics.v1alpha1.GetTektonMetricsRequest)
  private static final io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest();
  }

  public static io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetTektonMetricsRequest>
      PARSER = new com.google.protobuf.AbstractParser<GetTektonMetricsRequest>() {
    @java.lang.Override
    public GetTektonMetricsRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetTektonMetricsRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetTektonMetricsRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetTektonMetricsRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.performance.metrics.v1alpha1.GetTektonMetricsRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

