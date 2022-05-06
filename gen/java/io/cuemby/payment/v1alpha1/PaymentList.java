// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: payment/v1alpha1/payment.proto

package io.cuemby.payment.v1alpha1;

/**
 * Protobuf type {@code payment.v1alpha1.PaymentList}
 */
public final class PaymentList extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:payment.v1alpha1.PaymentList)
    PaymentListOrBuilder {
private static final long serialVersionUID = 0L;
  // Use PaymentList.newBuilder() to construct.
  private PaymentList(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private PaymentList() {
    items_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new PaymentList();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private PaymentList(
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
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              items_ = new java.util.ArrayList<io.cuemby.payment.v1alpha1.Payment>();
              mutable_bitField0_ |= 0x00000001;
            }
            items_.add(
                input.readMessage(io.cuemby.payment.v1alpha1.Payment.parser(), extensionRegistry));
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
        items_ = java.util.Collections.unmodifiableList(items_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.cuemby.payment.v1alpha1.PaymentProto.internal_static_payment_v1alpha1_PaymentList_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.payment.v1alpha1.PaymentProto.internal_static_payment_v1alpha1_PaymentList_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.payment.v1alpha1.PaymentList.class, io.cuemby.payment.v1alpha1.PaymentList.Builder.class);
  }

  public static final int ITEMS_FIELD_NUMBER = 1;
  private java.util.List<io.cuemby.payment.v1alpha1.Payment> items_;
  /**
   * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
   */
  @java.lang.Override
  public java.util.List<io.cuemby.payment.v1alpha1.Payment> getItemsList() {
    return items_;
  }
  /**
   * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends io.cuemby.payment.v1alpha1.PaymentOrBuilder> 
      getItemsOrBuilderList() {
    return items_;
  }
  /**
   * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
   */
  @java.lang.Override
  public int getItemsCount() {
    return items_.size();
  }
  /**
   * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
   */
  @java.lang.Override
  public io.cuemby.payment.v1alpha1.Payment getItems(int index) {
    return items_.get(index);
  }
  /**
   * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
   */
  @java.lang.Override
  public io.cuemby.payment.v1alpha1.PaymentOrBuilder getItemsOrBuilder(
      int index) {
    return items_.get(index);
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
    for (int i = 0; i < items_.size(); i++) {
      output.writeMessage(1, items_.get(i));
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < items_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, items_.get(i));
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
    if (!(obj instanceof io.cuemby.payment.v1alpha1.PaymentList)) {
      return super.equals(obj);
    }
    io.cuemby.payment.v1alpha1.PaymentList other = (io.cuemby.payment.v1alpha1.PaymentList) obj;

    if (!getItemsList()
        .equals(other.getItemsList())) return false;
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
    if (getItemsCount() > 0) {
      hash = (37 * hash) + ITEMS_FIELD_NUMBER;
      hash = (53 * hash) + getItemsList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.payment.v1alpha1.PaymentList parseFrom(
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
  public static Builder newBuilder(io.cuemby.payment.v1alpha1.PaymentList prototype) {
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
   * Protobuf type {@code payment.v1alpha1.PaymentList}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:payment.v1alpha1.PaymentList)
      io.cuemby.payment.v1alpha1.PaymentListOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.payment.v1alpha1.PaymentProto.internal_static_payment_v1alpha1_PaymentList_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.payment.v1alpha1.PaymentProto.internal_static_payment_v1alpha1_PaymentList_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.payment.v1alpha1.PaymentList.class, io.cuemby.payment.v1alpha1.PaymentList.Builder.class);
    }

    // Construct using io.cuemby.payment.v1alpha1.PaymentList.newBuilder()
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
        getItemsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (itemsBuilder_ == null) {
        items_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        itemsBuilder_.clear();
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.payment.v1alpha1.PaymentProto.internal_static_payment_v1alpha1_PaymentList_descriptor;
    }

    @java.lang.Override
    public io.cuemby.payment.v1alpha1.PaymentList getDefaultInstanceForType() {
      return io.cuemby.payment.v1alpha1.PaymentList.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.payment.v1alpha1.PaymentList build() {
      io.cuemby.payment.v1alpha1.PaymentList result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.payment.v1alpha1.PaymentList buildPartial() {
      io.cuemby.payment.v1alpha1.PaymentList result = new io.cuemby.payment.v1alpha1.PaymentList(this);
      int from_bitField0_ = bitField0_;
      if (itemsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          items_ = java.util.Collections.unmodifiableList(items_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.items_ = items_;
      } else {
        result.items_ = itemsBuilder_.build();
      }
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
      if (other instanceof io.cuemby.payment.v1alpha1.PaymentList) {
        return mergeFrom((io.cuemby.payment.v1alpha1.PaymentList)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.payment.v1alpha1.PaymentList other) {
      if (other == io.cuemby.payment.v1alpha1.PaymentList.getDefaultInstance()) return this;
      if (itemsBuilder_ == null) {
        if (!other.items_.isEmpty()) {
          if (items_.isEmpty()) {
            items_ = other.items_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureItemsIsMutable();
            items_.addAll(other.items_);
          }
          onChanged();
        }
      } else {
        if (!other.items_.isEmpty()) {
          if (itemsBuilder_.isEmpty()) {
            itemsBuilder_.dispose();
            itemsBuilder_ = null;
            items_ = other.items_;
            bitField0_ = (bitField0_ & ~0x00000001);
            itemsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getItemsFieldBuilder() : null;
          } else {
            itemsBuilder_.addAllMessages(other.items_);
          }
        }
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
      io.cuemby.payment.v1alpha1.PaymentList parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.payment.v1alpha1.PaymentList) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.util.List<io.cuemby.payment.v1alpha1.Payment> items_ =
      java.util.Collections.emptyList();
    private void ensureItemsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        items_ = new java.util.ArrayList<io.cuemby.payment.v1alpha1.Payment>(items_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.payment.v1alpha1.Payment, io.cuemby.payment.v1alpha1.Payment.Builder, io.cuemby.payment.v1alpha1.PaymentOrBuilder> itemsBuilder_;

    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public java.util.List<io.cuemby.payment.v1alpha1.Payment> getItemsList() {
      if (itemsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(items_);
      } else {
        return itemsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public int getItemsCount() {
      if (itemsBuilder_ == null) {
        return items_.size();
      } else {
        return itemsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public io.cuemby.payment.v1alpha1.Payment getItems(int index) {
      if (itemsBuilder_ == null) {
        return items_.get(index);
      } else {
        return itemsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder setItems(
        int index, io.cuemby.payment.v1alpha1.Payment value) {
      if (itemsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureItemsIsMutable();
        items_.set(index, value);
        onChanged();
      } else {
        itemsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder setItems(
        int index, io.cuemby.payment.v1alpha1.Payment.Builder builderForValue) {
      if (itemsBuilder_ == null) {
        ensureItemsIsMutable();
        items_.set(index, builderForValue.build());
        onChanged();
      } else {
        itemsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder addItems(io.cuemby.payment.v1alpha1.Payment value) {
      if (itemsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureItemsIsMutable();
        items_.add(value);
        onChanged();
      } else {
        itemsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder addItems(
        int index, io.cuemby.payment.v1alpha1.Payment value) {
      if (itemsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureItemsIsMutable();
        items_.add(index, value);
        onChanged();
      } else {
        itemsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder addItems(
        io.cuemby.payment.v1alpha1.Payment.Builder builderForValue) {
      if (itemsBuilder_ == null) {
        ensureItemsIsMutable();
        items_.add(builderForValue.build());
        onChanged();
      } else {
        itemsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder addItems(
        int index, io.cuemby.payment.v1alpha1.Payment.Builder builderForValue) {
      if (itemsBuilder_ == null) {
        ensureItemsIsMutable();
        items_.add(index, builderForValue.build());
        onChanged();
      } else {
        itemsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder addAllItems(
        java.lang.Iterable<? extends io.cuemby.payment.v1alpha1.Payment> values) {
      if (itemsBuilder_ == null) {
        ensureItemsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, items_);
        onChanged();
      } else {
        itemsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder clearItems() {
      if (itemsBuilder_ == null) {
        items_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        itemsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public Builder removeItems(int index) {
      if (itemsBuilder_ == null) {
        ensureItemsIsMutable();
        items_.remove(index);
        onChanged();
      } else {
        itemsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public io.cuemby.payment.v1alpha1.Payment.Builder getItemsBuilder(
        int index) {
      return getItemsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public io.cuemby.payment.v1alpha1.PaymentOrBuilder getItemsOrBuilder(
        int index) {
      if (itemsBuilder_ == null) {
        return items_.get(index);  } else {
        return itemsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public java.util.List<? extends io.cuemby.payment.v1alpha1.PaymentOrBuilder> 
         getItemsOrBuilderList() {
      if (itemsBuilder_ != null) {
        return itemsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(items_);
      }
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public io.cuemby.payment.v1alpha1.Payment.Builder addItemsBuilder() {
      return getItemsFieldBuilder().addBuilder(
          io.cuemby.payment.v1alpha1.Payment.getDefaultInstance());
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public io.cuemby.payment.v1alpha1.Payment.Builder addItemsBuilder(
        int index) {
      return getItemsFieldBuilder().addBuilder(
          index, io.cuemby.payment.v1alpha1.Payment.getDefaultInstance());
    }
    /**
     * <code>repeated .payment.v1alpha1.Payment items = 1 [json_name = "items"];</code>
     */
    public java.util.List<io.cuemby.payment.v1alpha1.Payment.Builder> 
         getItemsBuilderList() {
      return getItemsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.payment.v1alpha1.Payment, io.cuemby.payment.v1alpha1.Payment.Builder, io.cuemby.payment.v1alpha1.PaymentOrBuilder> 
        getItemsFieldBuilder() {
      if (itemsBuilder_ == null) {
        itemsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            io.cuemby.payment.v1alpha1.Payment, io.cuemby.payment.v1alpha1.Payment.Builder, io.cuemby.payment.v1alpha1.PaymentOrBuilder>(
                items_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        items_ = null;
      }
      return itemsBuilder_;
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


    // @@protoc_insertion_point(builder_scope:payment.v1alpha1.PaymentList)
  }

  // @@protoc_insertion_point(class_scope:payment.v1alpha1.PaymentList)
  private static final io.cuemby.payment.v1alpha1.PaymentList DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.payment.v1alpha1.PaymentList();
  }

  public static io.cuemby.payment.v1alpha1.PaymentList getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<PaymentList>
      PARSER = new com.google.protobuf.AbstractParser<PaymentList>() {
    @java.lang.Override
    public PaymentList parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new PaymentList(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<PaymentList> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<PaymentList> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.payment.v1alpha1.PaymentList getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
