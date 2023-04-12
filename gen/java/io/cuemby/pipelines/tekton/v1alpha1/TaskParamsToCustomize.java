// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

/**
 * Protobuf type {@code pipelines.tekton.v1alpha1.TaskParamsToCustomize}
 */
public final class TaskParamsToCustomize extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.tekton.v1alpha1.TaskParamsToCustomize)
    TaskParamsToCustomizeOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TaskParamsToCustomize.newBuilder() to construct.
  private TaskParamsToCustomize(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TaskParamsToCustomize() {
    paramName_ = "";
    label_ = "";
    validation_ = "";
    typeValue_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TaskParamsToCustomize();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private TaskParamsToCustomize(
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

            paramName_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            label_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            validation_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            typeValue_ = s;
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
    return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_TaskParamsToCustomize_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_TaskParamsToCustomize_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.class, io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.Builder.class);
  }

  public static final int PARAM_NAME_FIELD_NUMBER = 1;
  private volatile java.lang.Object paramName_;
  /**
   * <code>string param_name = 1 [json_name = "paramName"];</code>
   * @return The paramName.
   */
  @java.lang.Override
  public java.lang.String getParamName() {
    java.lang.Object ref = paramName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      paramName_ = s;
      return s;
    }
  }
  /**
   * <code>string param_name = 1 [json_name = "paramName"];</code>
   * @return The bytes for paramName.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getParamNameBytes() {
    java.lang.Object ref = paramName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      paramName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int LABEL_FIELD_NUMBER = 2;
  private volatile java.lang.Object label_;
  /**
   * <code>string label = 2 [json_name = "label"];</code>
   * @return The label.
   */
  @java.lang.Override
  public java.lang.String getLabel() {
    java.lang.Object ref = label_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      label_ = s;
      return s;
    }
  }
  /**
   * <code>string label = 2 [json_name = "label"];</code>
   * @return The bytes for label.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getLabelBytes() {
    java.lang.Object ref = label_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      label_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int VALIDATION_FIELD_NUMBER = 3;
  private volatile java.lang.Object validation_;
  /**
   * <code>string validation = 3 [json_name = "validation"];</code>
   * @return The validation.
   */
  @java.lang.Override
  public java.lang.String getValidation() {
    java.lang.Object ref = validation_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      validation_ = s;
      return s;
    }
  }
  /**
   * <code>string validation = 3 [json_name = "validation"];</code>
   * @return The bytes for validation.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getValidationBytes() {
    java.lang.Object ref = validation_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      validation_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int TYPE_VALUE_FIELD_NUMBER = 4;
  private volatile java.lang.Object typeValue_;
  /**
   * <code>string type_value = 4 [json_name = "typeValue"];</code>
   * @return The typeValue.
   */
  @java.lang.Override
  public java.lang.String getTypeValue() {
    java.lang.Object ref = typeValue_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      typeValue_ = s;
      return s;
    }
  }
  /**
   * <code>string type_value = 4 [json_name = "typeValue"];</code>
   * @return The bytes for typeValue.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getTypeValueBytes() {
    java.lang.Object ref = typeValue_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      typeValue_ = b;
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
    if (!getParamNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, paramName_);
    }
    if (!getLabelBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, label_);
    }
    if (!getValidationBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, validation_);
    }
    if (!getTypeValueBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, typeValue_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getParamNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, paramName_);
    }
    if (!getLabelBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, label_);
    }
    if (!getValidationBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, validation_);
    }
    if (!getTypeValueBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, typeValue_);
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
    if (!(obj instanceof io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize other = (io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize) obj;

    if (!getParamName()
        .equals(other.getParamName())) return false;
    if (!getLabel()
        .equals(other.getLabel())) return false;
    if (!getValidation()
        .equals(other.getValidation())) return false;
    if (!getTypeValue()
        .equals(other.getTypeValue())) return false;
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
    hash = (37 * hash) + PARAM_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getParamName().hashCode();
    hash = (37 * hash) + LABEL_FIELD_NUMBER;
    hash = (53 * hash) + getLabel().hashCode();
    hash = (37 * hash) + VALIDATION_FIELD_NUMBER;
    hash = (53 * hash) + getValidation().hashCode();
    hash = (37 * hash) + TYPE_VALUE_FIELD_NUMBER;
    hash = (53 * hash) + getTypeValue().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize prototype) {
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
   * Protobuf type {@code pipelines.tekton.v1alpha1.TaskParamsToCustomize}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.tekton.v1alpha1.TaskParamsToCustomize)
      io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomizeOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_TaskParamsToCustomize_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_TaskParamsToCustomize_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.class, io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.Builder.class);
    }

    // Construct using io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.newBuilder()
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
      paramName_ = "";

      label_ = "";

      validation_ = "";

      typeValue_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_TaskParamsToCustomize_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize getDefaultInstanceForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize build() {
      io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize buildPartial() {
      io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize result = new io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize(this);
      result.paramName_ = paramName_;
      result.label_ = label_;
      result.validation_ = validation_;
      result.typeValue_ = typeValue_;
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
      if (other instanceof io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize) {
        return mergeFrom((io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize other) {
      if (other == io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize.getDefaultInstance()) return this;
      if (!other.getParamName().isEmpty()) {
        paramName_ = other.paramName_;
        onChanged();
      }
      if (!other.getLabel().isEmpty()) {
        label_ = other.label_;
        onChanged();
      }
      if (!other.getValidation().isEmpty()) {
        validation_ = other.validation_;
        onChanged();
      }
      if (!other.getTypeValue().isEmpty()) {
        typeValue_ = other.typeValue_;
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
      io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object paramName_ = "";
    /**
     * <code>string param_name = 1 [json_name = "paramName"];</code>
     * @return The paramName.
     */
    public java.lang.String getParamName() {
      java.lang.Object ref = paramName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        paramName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string param_name = 1 [json_name = "paramName"];</code>
     * @return The bytes for paramName.
     */
    public com.google.protobuf.ByteString
        getParamNameBytes() {
      java.lang.Object ref = paramName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        paramName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string param_name = 1 [json_name = "paramName"];</code>
     * @param value The paramName to set.
     * @return This builder for chaining.
     */
    public Builder setParamName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      paramName_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string param_name = 1 [json_name = "paramName"];</code>
     * @return This builder for chaining.
     */
    public Builder clearParamName() {
      
      paramName_ = getDefaultInstance().getParamName();
      onChanged();
      return this;
    }
    /**
     * <code>string param_name = 1 [json_name = "paramName"];</code>
     * @param value The bytes for paramName to set.
     * @return This builder for chaining.
     */
    public Builder setParamNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      paramName_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object label_ = "";
    /**
     * <code>string label = 2 [json_name = "label"];</code>
     * @return The label.
     */
    public java.lang.String getLabel() {
      java.lang.Object ref = label_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        label_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string label = 2 [json_name = "label"];</code>
     * @return The bytes for label.
     */
    public com.google.protobuf.ByteString
        getLabelBytes() {
      java.lang.Object ref = label_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        label_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string label = 2 [json_name = "label"];</code>
     * @param value The label to set.
     * @return This builder for chaining.
     */
    public Builder setLabel(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      label_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string label = 2 [json_name = "label"];</code>
     * @return This builder for chaining.
     */
    public Builder clearLabel() {
      
      label_ = getDefaultInstance().getLabel();
      onChanged();
      return this;
    }
    /**
     * <code>string label = 2 [json_name = "label"];</code>
     * @param value The bytes for label to set.
     * @return This builder for chaining.
     */
    public Builder setLabelBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      label_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object validation_ = "";
    /**
     * <code>string validation = 3 [json_name = "validation"];</code>
     * @return The validation.
     */
    public java.lang.String getValidation() {
      java.lang.Object ref = validation_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        validation_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string validation = 3 [json_name = "validation"];</code>
     * @return The bytes for validation.
     */
    public com.google.protobuf.ByteString
        getValidationBytes() {
      java.lang.Object ref = validation_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        validation_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string validation = 3 [json_name = "validation"];</code>
     * @param value The validation to set.
     * @return This builder for chaining.
     */
    public Builder setValidation(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      validation_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string validation = 3 [json_name = "validation"];</code>
     * @return This builder for chaining.
     */
    public Builder clearValidation() {
      
      validation_ = getDefaultInstance().getValidation();
      onChanged();
      return this;
    }
    /**
     * <code>string validation = 3 [json_name = "validation"];</code>
     * @param value The bytes for validation to set.
     * @return This builder for chaining.
     */
    public Builder setValidationBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      validation_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object typeValue_ = "";
    /**
     * <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @return The typeValue.
     */
    public java.lang.String getTypeValue() {
      java.lang.Object ref = typeValue_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        typeValue_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @return The bytes for typeValue.
     */
    public com.google.protobuf.ByteString
        getTypeValueBytes() {
      java.lang.Object ref = typeValue_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        typeValue_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @param value The typeValue to set.
     * @return This builder for chaining.
     */
    public Builder setTypeValue(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      typeValue_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @return This builder for chaining.
     */
    public Builder clearTypeValue() {
      
      typeValue_ = getDefaultInstance().getTypeValue();
      onChanged();
      return this;
    }
    /**
     * <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @param value The bytes for typeValue to set.
     * @return This builder for chaining.
     */
    public Builder setTypeValueBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      typeValue_ = value;
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


    // @@protoc_insertion_point(builder_scope:pipelines.tekton.v1alpha1.TaskParamsToCustomize)
  }

  // @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.TaskParamsToCustomize)
  private static final io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize();
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TaskParamsToCustomize>
      PARSER = new com.google.protobuf.AbstractParser<TaskParamsToCustomize>() {
    @java.lang.Override
    public TaskParamsToCustomize parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new TaskParamsToCustomize(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<TaskParamsToCustomize> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TaskParamsToCustomize> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.TaskParamsToCustomize getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

