// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/tekton/v1alpha1/tekton.proto

package io.cuemby.pipelines.tekton.v1alpha1;

/**
 * Protobuf type {@code pipelines.tekton.v1alpha1.Params}
 */
public final class Params extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.tekton.v1alpha1.Params)
    ParamsOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Params.newBuilder() to construct.
  private Params(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Params() {
    name_ = "";
    valueString_ = "";
    valueArray_ = com.google.protobuf.LazyStringArrayList.EMPTY;
    valueType_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Params();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private Params(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
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

            name_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            valueString_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              valueArray_ = new com.google.protobuf.LazyStringArrayList();
              mutable_bitField0_ |= 0x00000001;
            }
            valueArray_.add(s);
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            valueType_ = s;
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
      if (((mutable_bitField0_ & 0x00000001) != 0)) {
        valueArray_ = valueArray_.getUnmodifiableView();
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_Params_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_Params_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.tekton.v1alpha1.Params.class, io.cuemby.pipelines.tekton.v1alpha1.Params.Builder.class);
  }

  public static final int NAME_FIELD_NUMBER = 1;
  private volatile java.lang.Object name_;
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  @java.lang.Override
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int VALUE_STRING_FIELD_NUMBER = 2;
  private volatile java.lang.Object valueString_;
  /**
   * <code>string value_string = 2 [json_name = "valueString"];</code>
   * @return The valueString.
   */
  @java.lang.Override
  public java.lang.String getValueString() {
    java.lang.Object ref = valueString_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      valueString_ = s;
      return s;
    }
  }
  /**
   * <code>string value_string = 2 [json_name = "valueString"];</code>
   * @return The bytes for valueString.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getValueStringBytes() {
    java.lang.Object ref = valueString_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      valueString_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int VALUE_ARRAY_FIELD_NUMBER = 3;
  private com.google.protobuf.LazyStringList valueArray_;
  /**
   * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
   * @return A list containing the valueArray.
   */
  public com.google.protobuf.ProtocolStringList
      getValueArrayList() {
    return valueArray_;
  }
  /**
   * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
   * @return The count of valueArray.
   */
  public int getValueArrayCount() {
    return valueArray_.size();
  }
  /**
   * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
   * @param index The index of the element to return.
   * @return The valueArray at the given index.
   */
  public java.lang.String getValueArray(int index) {
    return valueArray_.get(index);
  }
  /**
   * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the valueArray at the given index.
   */
  public com.google.protobuf.ByteString
      getValueArrayBytes(int index) {
    return valueArray_.getByteString(index);
  }

  public static final int VALUE_TYPE_FIELD_NUMBER = 4;
  private volatile java.lang.Object valueType_;
  /**
   * <code>string value_type = 4 [json_name = "valueType"];</code>
   * @return The valueType.
   */
  @java.lang.Override
  public java.lang.String getValueType() {
    java.lang.Object ref = valueType_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      valueType_ = s;
      return s;
    }
  }
  /**
   * <code>string value_type = 4 [json_name = "valueType"];</code>
   * @return The bytes for valueType.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getValueTypeBytes() {
    java.lang.Object ref = valueType_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      valueType_ = b;
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
    if (!getNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, name_);
    }
    if (!getValueStringBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, valueString_);
    }
    for (int i = 0; i < valueArray_.size(); i++) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, valueArray_.getRaw(i));
    }
    if (!getValueTypeBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, valueType_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, name_);
    }
    if (!getValueStringBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, valueString_);
    }
    {
      int dataSize = 0;
      for (int i = 0; i < valueArray_.size(); i++) {
        dataSize += computeStringSizeNoTag(valueArray_.getRaw(i));
      }
      size += dataSize;
      size += 1 * getValueArrayList().size();
    }
    if (!getValueTypeBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, valueType_);
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
    if (!(obj instanceof io.cuemby.pipelines.tekton.v1alpha1.Params)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.tekton.v1alpha1.Params other = (io.cuemby.pipelines.tekton.v1alpha1.Params) obj;

    if (!getName()
        .equals(other.getName())) return false;
    if (!getValueString()
        .equals(other.getValueString())) return false;
    if (!getValueArrayList()
        .equals(other.getValueArrayList())) return false;
    if (!getValueType()
        .equals(other.getValueType())) return false;
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
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    hash = (37 * hash) + VALUE_STRING_FIELD_NUMBER;
    hash = (53 * hash) + getValueString().hashCode();
    if (getValueArrayCount() > 0) {
      hash = (37 * hash) + VALUE_ARRAY_FIELD_NUMBER;
      hash = (53 * hash) + getValueArrayList().hashCode();
    }
    hash = (37 * hash) + VALUE_TYPE_FIELD_NUMBER;
    hash = (53 * hash) + getValueType().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.tekton.v1alpha1.Params parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.tekton.v1alpha1.Params prototype) {
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
   * Protobuf type {@code pipelines.tekton.v1alpha1.Params}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.tekton.v1alpha1.Params)
      io.cuemby.pipelines.tekton.v1alpha1.ParamsOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_Params_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_Params_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.tekton.v1alpha1.Params.class, io.cuemby.pipelines.tekton.v1alpha1.Params.Builder.class);
    }

    // Construct using io.cuemby.pipelines.tekton.v1alpha1.Params.newBuilder()
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
      name_ = "";

      valueString_ = "";

      valueArray_ = com.google.protobuf.LazyStringArrayList.EMPTY;
      bitField0_ = (bitField0_ & ~0x00000001);
      valueType_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.TektonProto.internal_static_pipelines_tekton_v1alpha1_Params_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.Params getDefaultInstanceForType() {
      return io.cuemby.pipelines.tekton.v1alpha1.Params.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.Params build() {
      io.cuemby.pipelines.tekton.v1alpha1.Params result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.tekton.v1alpha1.Params buildPartial() {
      io.cuemby.pipelines.tekton.v1alpha1.Params result = new io.cuemby.pipelines.tekton.v1alpha1.Params(this);
      int from_bitField0_ = bitField0_;
      result.name_ = name_;
      result.valueString_ = valueString_;
      if (((bitField0_ & 0x00000001) != 0)) {
        valueArray_ = valueArray_.getUnmodifiableView();
        bitField0_ = (bitField0_ & ~0x00000001);
      }
      result.valueArray_ = valueArray_;
      result.valueType_ = valueType_;
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
      if (other instanceof io.cuemby.pipelines.tekton.v1alpha1.Params) {
        return mergeFrom((io.cuemby.pipelines.tekton.v1alpha1.Params)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.tekton.v1alpha1.Params other) {
      if (other == io.cuemby.pipelines.tekton.v1alpha1.Params.getDefaultInstance()) return this;
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        onChanged();
      }
      if (!other.getValueString().isEmpty()) {
        valueString_ = other.valueString_;
        onChanged();
      }
      if (!other.valueArray_.isEmpty()) {
        if (valueArray_.isEmpty()) {
          valueArray_ = other.valueArray_;
          bitField0_ = (bitField0_ & ~0x00000001);
        } else {
          ensureValueArrayIsMutable();
          valueArray_.addAll(other.valueArray_);
        }
        onChanged();
      }
      if (!other.getValueType().isEmpty()) {
        valueType_ = other.valueType_;
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
      io.cuemby.pipelines.tekton.v1alpha1.Params parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.tekton.v1alpha1.Params) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.lang.Object name_ = "";
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return The name.
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return The bytes for name.
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @param value The name to set.
     * @return This builder for chaining.
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      name_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @return This builder for chaining.
     */
    public Builder clearName() {
      
      name_ = getDefaultInstance().getName();
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1 [json_name = "name"];</code>
     * @param value The bytes for name to set.
     * @return This builder for chaining.
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      name_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object valueString_ = "";
    /**
     * <code>string value_string = 2 [json_name = "valueString"];</code>
     * @return The valueString.
     */
    public java.lang.String getValueString() {
      java.lang.Object ref = valueString_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        valueString_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string value_string = 2 [json_name = "valueString"];</code>
     * @return The bytes for valueString.
     */
    public com.google.protobuf.ByteString
        getValueStringBytes() {
      java.lang.Object ref = valueString_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        valueString_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string value_string = 2 [json_name = "valueString"];</code>
     * @param value The valueString to set.
     * @return This builder for chaining.
     */
    public Builder setValueString(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      valueString_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string value_string = 2 [json_name = "valueString"];</code>
     * @return This builder for chaining.
     */
    public Builder clearValueString() {
      
      valueString_ = getDefaultInstance().getValueString();
      onChanged();
      return this;
    }
    /**
     * <code>string value_string = 2 [json_name = "valueString"];</code>
     * @param value The bytes for valueString to set.
     * @return This builder for chaining.
     */
    public Builder setValueStringBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      valueString_ = value;
      onChanged();
      return this;
    }

    private com.google.protobuf.LazyStringList valueArray_ = com.google.protobuf.LazyStringArrayList.EMPTY;
    private void ensureValueArrayIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        valueArray_ = new com.google.protobuf.LazyStringArrayList(valueArray_);
        bitField0_ |= 0x00000001;
       }
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @return A list containing the valueArray.
     */
    public com.google.protobuf.ProtocolStringList
        getValueArrayList() {
      return valueArray_.getUnmodifiableView();
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @return The count of valueArray.
     */
    public int getValueArrayCount() {
      return valueArray_.size();
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @param index The index of the element to return.
     * @return The valueArray at the given index.
     */
    public java.lang.String getValueArray(int index) {
      return valueArray_.get(index);
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @param index The index of the value to return.
     * @return The bytes of the valueArray at the given index.
     */
    public com.google.protobuf.ByteString
        getValueArrayBytes(int index) {
      return valueArray_.getByteString(index);
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @param index The index to set the value at.
     * @param value The valueArray to set.
     * @return This builder for chaining.
     */
    public Builder setValueArray(
        int index, java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  ensureValueArrayIsMutable();
      valueArray_.set(index, value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @param value The valueArray to add.
     * @return This builder for chaining.
     */
    public Builder addValueArray(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  ensureValueArrayIsMutable();
      valueArray_.add(value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @param values The valueArray to add.
     * @return This builder for chaining.
     */
    public Builder addAllValueArray(
        java.lang.Iterable<java.lang.String> values) {
      ensureValueArrayIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, valueArray_);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @return This builder for chaining.
     */
    public Builder clearValueArray() {
      valueArray_ = com.google.protobuf.LazyStringArrayList.EMPTY;
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>repeated string value_array = 3 [json_name = "valueArray"];</code>
     * @param value The bytes of the valueArray to add.
     * @return This builder for chaining.
     */
    public Builder addValueArrayBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      ensureValueArrayIsMutable();
      valueArray_.add(value);
      onChanged();
      return this;
    }

    private java.lang.Object valueType_ = "";
    /**
     * <code>string value_type = 4 [json_name = "valueType"];</code>
     * @return The valueType.
     */
    public java.lang.String getValueType() {
      java.lang.Object ref = valueType_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        valueType_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string value_type = 4 [json_name = "valueType"];</code>
     * @return The bytes for valueType.
     */
    public com.google.protobuf.ByteString
        getValueTypeBytes() {
      java.lang.Object ref = valueType_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        valueType_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string value_type = 4 [json_name = "valueType"];</code>
     * @param value The valueType to set.
     * @return This builder for chaining.
     */
    public Builder setValueType(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      valueType_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string value_type = 4 [json_name = "valueType"];</code>
     * @return This builder for chaining.
     */
    public Builder clearValueType() {
      
      valueType_ = getDefaultInstance().getValueType();
      onChanged();
      return this;
    }
    /**
     * <code>string value_type = 4 [json_name = "valueType"];</code>
     * @param value The bytes for valueType to set.
     * @return This builder for chaining.
     */
    public Builder setValueTypeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      valueType_ = value;
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


    // @@protoc_insertion_point(builder_scope:pipelines.tekton.v1alpha1.Params)
  }

  // @@protoc_insertion_point(class_scope:pipelines.tekton.v1alpha1.Params)
  private static final io.cuemby.pipelines.tekton.v1alpha1.Params DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.tekton.v1alpha1.Params();
  }

  public static io.cuemby.pipelines.tekton.v1alpha1.Params getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Params>
      PARSER = new com.google.protobuf.AbstractParser<Params>() {
    @java.lang.Override
    public Params parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new Params(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<Params> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Params> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.tekton.v1alpha1.Params getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

