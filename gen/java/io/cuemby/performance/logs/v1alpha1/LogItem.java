// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs.proto

package io.cuemby.performance.logs.v1alpha1;

/**
 * <pre>
 * LogItem ...
 * </pre>
 *
 * Protobuf type {@code performance.logs.v1alpha1.LogItem}
 */
public final class LogItem extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:performance.logs.v1alpha1.LogItem)
    LogItemOrBuilder {
private static final long serialVersionUID = 0L;
  // Use LogItem.newBuilder() to construct.
  private LogItem(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private LogItem() {
    date_ = "";
    container_ = "";
    podName_ = "";
    namespace_ = "";
    message_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new LogItem();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private LogItem(
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

            date_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            container_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            podName_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            namespace_ = s;
            break;
          }
          case 42: {
            java.lang.String s = input.readStringRequireUtf8();

            message_ = s;
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
    return io.cuemby.performance.logs.v1alpha1.LogsProto.internal_static_performance_logs_v1alpha1_LogItem_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.performance.logs.v1alpha1.LogsProto.internal_static_performance_logs_v1alpha1_LogItem_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.performance.logs.v1alpha1.LogItem.class, io.cuemby.performance.logs.v1alpha1.LogItem.Builder.class);
  }

  public static final int DATE_FIELD_NUMBER = 1;
  private volatile java.lang.Object date_;
  /**
   * <code>string date = 1 [json_name = "date"];</code>
   * @return The date.
   */
  @java.lang.Override
  public java.lang.String getDate() {
    java.lang.Object ref = date_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      date_ = s;
      return s;
    }
  }
  /**
   * <code>string date = 1 [json_name = "date"];</code>
   * @return The bytes for date.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getDateBytes() {
    java.lang.Object ref = date_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      date_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int CONTAINER_FIELD_NUMBER = 2;
  private volatile java.lang.Object container_;
  /**
   * <code>string container = 2 [json_name = "container"];</code>
   * @return The container.
   */
  @java.lang.Override
  public java.lang.String getContainer() {
    java.lang.Object ref = container_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      container_ = s;
      return s;
    }
  }
  /**
   * <code>string container = 2 [json_name = "container"];</code>
   * @return The bytes for container.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getContainerBytes() {
    java.lang.Object ref = container_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      container_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int POD_NAME_FIELD_NUMBER = 3;
  private volatile java.lang.Object podName_;
  /**
   * <code>string pod_name = 3 [json_name = "podName"];</code>
   * @return The podName.
   */
  @java.lang.Override
  public java.lang.String getPodName() {
    java.lang.Object ref = podName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      podName_ = s;
      return s;
    }
  }
  /**
   * <code>string pod_name = 3 [json_name = "podName"];</code>
   * @return The bytes for podName.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPodNameBytes() {
    java.lang.Object ref = podName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      podName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NAMESPACE_FIELD_NUMBER = 4;
  private volatile java.lang.Object namespace_;
  /**
   * <code>string namespace = 4 [json_name = "namespace"];</code>
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
   * <code>string namespace = 4 [json_name = "namespace"];</code>
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

  public static final int MESSAGE_FIELD_NUMBER = 5;
  private volatile java.lang.Object message_;
  /**
   * <code>string message = 5 [json_name = "message"];</code>
   * @return The message.
   */
  @java.lang.Override
  public java.lang.String getMessage() {
    java.lang.Object ref = message_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      message_ = s;
      return s;
    }
  }
  /**
   * <code>string message = 5 [json_name = "message"];</code>
   * @return The bytes for message.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getMessageBytes() {
    java.lang.Object ref = message_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      message_ = b;
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
    if (!getDateBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, date_);
    }
    if (!getContainerBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, container_);
    }
    if (!getPodNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, podName_);
    }
    if (!getNamespaceBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, namespace_);
    }
    if (!getMessageBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 5, message_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getDateBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, date_);
    }
    if (!getContainerBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, container_);
    }
    if (!getPodNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, podName_);
    }
    if (!getNamespaceBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, namespace_);
    }
    if (!getMessageBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, message_);
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
    if (!(obj instanceof io.cuemby.performance.logs.v1alpha1.LogItem)) {
      return super.equals(obj);
    }
    io.cuemby.performance.logs.v1alpha1.LogItem other = (io.cuemby.performance.logs.v1alpha1.LogItem) obj;

    if (!getDate()
        .equals(other.getDate())) return false;
    if (!getContainer()
        .equals(other.getContainer())) return false;
    if (!getPodName()
        .equals(other.getPodName())) return false;
    if (!getNamespace()
        .equals(other.getNamespace())) return false;
    if (!getMessage()
        .equals(other.getMessage())) return false;
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
    hash = (37 * hash) + DATE_FIELD_NUMBER;
    hash = (53 * hash) + getDate().hashCode();
    hash = (37 * hash) + CONTAINER_FIELD_NUMBER;
    hash = (53 * hash) + getContainer().hashCode();
    hash = (37 * hash) + POD_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getPodName().hashCode();
    hash = (37 * hash) + NAMESPACE_FIELD_NUMBER;
    hash = (53 * hash) + getNamespace().hashCode();
    hash = (37 * hash) + MESSAGE_FIELD_NUMBER;
    hash = (53 * hash) + getMessage().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.performance.logs.v1alpha1.LogItem parseFrom(
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
  public static Builder newBuilder(io.cuemby.performance.logs.v1alpha1.LogItem prototype) {
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
   * LogItem ...
   * </pre>
   *
   * Protobuf type {@code performance.logs.v1alpha1.LogItem}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:performance.logs.v1alpha1.LogItem)
      io.cuemby.performance.logs.v1alpha1.LogItemOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.performance.logs.v1alpha1.LogsProto.internal_static_performance_logs_v1alpha1_LogItem_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.performance.logs.v1alpha1.LogsProto.internal_static_performance_logs_v1alpha1_LogItem_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.performance.logs.v1alpha1.LogItem.class, io.cuemby.performance.logs.v1alpha1.LogItem.Builder.class);
    }

    // Construct using io.cuemby.performance.logs.v1alpha1.LogItem.newBuilder()
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
      date_ = "";

      container_ = "";

      podName_ = "";

      namespace_ = "";

      message_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.performance.logs.v1alpha1.LogsProto.internal_static_performance_logs_v1alpha1_LogItem_descriptor;
    }

    @java.lang.Override
    public io.cuemby.performance.logs.v1alpha1.LogItem getDefaultInstanceForType() {
      return io.cuemby.performance.logs.v1alpha1.LogItem.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.performance.logs.v1alpha1.LogItem build() {
      io.cuemby.performance.logs.v1alpha1.LogItem result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.performance.logs.v1alpha1.LogItem buildPartial() {
      io.cuemby.performance.logs.v1alpha1.LogItem result = new io.cuemby.performance.logs.v1alpha1.LogItem(this);
      result.date_ = date_;
      result.container_ = container_;
      result.podName_ = podName_;
      result.namespace_ = namespace_;
      result.message_ = message_;
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
      if (other instanceof io.cuemby.performance.logs.v1alpha1.LogItem) {
        return mergeFrom((io.cuemby.performance.logs.v1alpha1.LogItem)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.performance.logs.v1alpha1.LogItem other) {
      if (other == io.cuemby.performance.logs.v1alpha1.LogItem.getDefaultInstance()) return this;
      if (!other.getDate().isEmpty()) {
        date_ = other.date_;
        onChanged();
      }
      if (!other.getContainer().isEmpty()) {
        container_ = other.container_;
        onChanged();
      }
      if (!other.getPodName().isEmpty()) {
        podName_ = other.podName_;
        onChanged();
      }
      if (!other.getNamespace().isEmpty()) {
        namespace_ = other.namespace_;
        onChanged();
      }
      if (!other.getMessage().isEmpty()) {
        message_ = other.message_;
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
      io.cuemby.performance.logs.v1alpha1.LogItem parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.performance.logs.v1alpha1.LogItem) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object date_ = "";
    /**
     * <code>string date = 1 [json_name = "date"];</code>
     * @return The date.
     */
    public java.lang.String getDate() {
      java.lang.Object ref = date_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        date_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string date = 1 [json_name = "date"];</code>
     * @return The bytes for date.
     */
    public com.google.protobuf.ByteString
        getDateBytes() {
      java.lang.Object ref = date_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        date_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string date = 1 [json_name = "date"];</code>
     * @param value The date to set.
     * @return This builder for chaining.
     */
    public Builder setDate(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      date_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string date = 1 [json_name = "date"];</code>
     * @return This builder for chaining.
     */
    public Builder clearDate() {
      
      date_ = getDefaultInstance().getDate();
      onChanged();
      return this;
    }
    /**
     * <code>string date = 1 [json_name = "date"];</code>
     * @param value The bytes for date to set.
     * @return This builder for chaining.
     */
    public Builder setDateBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      date_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object container_ = "";
    /**
     * <code>string container = 2 [json_name = "container"];</code>
     * @return The container.
     */
    public java.lang.String getContainer() {
      java.lang.Object ref = container_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        container_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string container = 2 [json_name = "container"];</code>
     * @return The bytes for container.
     */
    public com.google.protobuf.ByteString
        getContainerBytes() {
      java.lang.Object ref = container_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        container_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string container = 2 [json_name = "container"];</code>
     * @param value The container to set.
     * @return This builder for chaining.
     */
    public Builder setContainer(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      container_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string container = 2 [json_name = "container"];</code>
     * @return This builder for chaining.
     */
    public Builder clearContainer() {
      
      container_ = getDefaultInstance().getContainer();
      onChanged();
      return this;
    }
    /**
     * <code>string container = 2 [json_name = "container"];</code>
     * @param value The bytes for container to set.
     * @return This builder for chaining.
     */
    public Builder setContainerBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      container_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object podName_ = "";
    /**
     * <code>string pod_name = 3 [json_name = "podName"];</code>
     * @return The podName.
     */
    public java.lang.String getPodName() {
      java.lang.Object ref = podName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        podName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string pod_name = 3 [json_name = "podName"];</code>
     * @return The bytes for podName.
     */
    public com.google.protobuf.ByteString
        getPodNameBytes() {
      java.lang.Object ref = podName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        podName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string pod_name = 3 [json_name = "podName"];</code>
     * @param value The podName to set.
     * @return This builder for chaining.
     */
    public Builder setPodName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      podName_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string pod_name = 3 [json_name = "podName"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPodName() {
      
      podName_ = getDefaultInstance().getPodName();
      onChanged();
      return this;
    }
    /**
     * <code>string pod_name = 3 [json_name = "podName"];</code>
     * @param value The bytes for podName to set.
     * @return This builder for chaining.
     */
    public Builder setPodNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      podName_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object namespace_ = "";
    /**
     * <code>string namespace = 4 [json_name = "namespace"];</code>
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
     * <code>string namespace = 4 [json_name = "namespace"];</code>
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
     * <code>string namespace = 4 [json_name = "namespace"];</code>
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
     * <code>string namespace = 4 [json_name = "namespace"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNamespace() {
      
      namespace_ = getDefaultInstance().getNamespace();
      onChanged();
      return this;
    }
    /**
     * <code>string namespace = 4 [json_name = "namespace"];</code>
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

    private java.lang.Object message_ = "";
    /**
     * <code>string message = 5 [json_name = "message"];</code>
     * @return The message.
     */
    public java.lang.String getMessage() {
      java.lang.Object ref = message_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        message_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string message = 5 [json_name = "message"];</code>
     * @return The bytes for message.
     */
    public com.google.protobuf.ByteString
        getMessageBytes() {
      java.lang.Object ref = message_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        message_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string message = 5 [json_name = "message"];</code>
     * @param value The message to set.
     * @return This builder for chaining.
     */
    public Builder setMessage(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      message_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string message = 5 [json_name = "message"];</code>
     * @return This builder for chaining.
     */
    public Builder clearMessage() {
      
      message_ = getDefaultInstance().getMessage();
      onChanged();
      return this;
    }
    /**
     * <code>string message = 5 [json_name = "message"];</code>
     * @param value The bytes for message to set.
     * @return This builder for chaining.
     */
    public Builder setMessageBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      message_ = value;
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


    // @@protoc_insertion_point(builder_scope:performance.logs.v1alpha1.LogItem)
  }

  // @@protoc_insertion_point(class_scope:performance.logs.v1alpha1.LogItem)
  private static final io.cuemby.performance.logs.v1alpha1.LogItem DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.performance.logs.v1alpha1.LogItem();
  }

  public static io.cuemby.performance.logs.v1alpha1.LogItem getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<LogItem>
      PARSER = new com.google.protobuf.AbstractParser<LogItem>() {
    @java.lang.Override
    public LogItem parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new LogItem(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<LogItem> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<LogItem> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.performance.logs.v1alpha1.LogItem getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
