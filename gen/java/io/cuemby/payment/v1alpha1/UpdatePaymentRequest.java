// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: payment/v1alpha1/payment_api.proto

package io.cuemby.payment.v1alpha1;

/**
 * Protobuf type {@code payment.v1alpha1.UpdatePaymentRequest}
 */
public final class UpdatePaymentRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:payment.v1alpha1.UpdatePaymentRequest)
    UpdatePaymentRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use UpdatePaymentRequest.newBuilder() to construct.
  private UpdatePaymentRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private UpdatePaymentRequest() {
    status_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new UpdatePaymentRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private UpdatePaymentRequest(
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
            io.cuemby.payment.v1alpha1.Payment.Builder subBuilder = null;
            if (payment_ != null) {
              subBuilder = payment_.toBuilder();
            }
            payment_ = input.readMessage(io.cuemby.payment.v1alpha1.Payment.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(payment_);
              payment_ = subBuilder.buildPartial();
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
    return io.cuemby.payment.v1alpha1.Paymentproto.internal_static_payment_v1alpha1_UpdatePaymentRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.payment.v1alpha1.Paymentproto.internal_static_payment_v1alpha1_UpdatePaymentRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.payment.v1alpha1.UpdatePaymentRequest.class, io.cuemby.payment.v1alpha1.UpdatePaymentRequest.Builder.class);
  }

  public static final int PAYMENT_FIELD_NUMBER = 1;
  private io.cuemby.payment.v1alpha1.Payment payment_;
  /**
   * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
   * @return Whether the payment field is set.
   */
  @java.lang.Override
  public boolean hasPayment() {
    return payment_ != null;
  }
  /**
   * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
   * @return The payment.
   */
  @java.lang.Override
  public io.cuemby.payment.v1alpha1.Payment getPayment() {
    return payment_ == null ? io.cuemby.payment.v1alpha1.Payment.getDefaultInstance() : payment_;
  }
  /**
   * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
   */
  @java.lang.Override
  public io.cuemby.payment.v1alpha1.PaymentOrBuilder getPaymentOrBuilder() {
    return getPayment();
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
    if (payment_ != null) {
      output.writeMessage(1, getPayment());
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
    if (payment_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getPayment());
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
    if (!(obj instanceof io.cuemby.payment.v1alpha1.UpdatePaymentRequest)) {
      return super.equals(obj);
    }
    io.cuemby.payment.v1alpha1.UpdatePaymentRequest other = (io.cuemby.payment.v1alpha1.UpdatePaymentRequest) obj;

    if (hasPayment() != other.hasPayment()) return false;
    if (hasPayment()) {
      if (!getPayment()
          .equals(other.getPayment())) return false;
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
    if (hasPayment()) {
      hash = (37 * hash) + PAYMENT_FIELD_NUMBER;
      hash = (53 * hash) + getPayment().hashCode();
    }
    hash = (37 * hash) + STATUS_FIELD_NUMBER;
    hash = (53 * hash) + getStatus().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.payment.v1alpha1.UpdatePaymentRequest prototype) {
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
   * Protobuf type {@code payment.v1alpha1.UpdatePaymentRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:payment.v1alpha1.UpdatePaymentRequest)
      io.cuemby.payment.v1alpha1.UpdatePaymentRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.payment.v1alpha1.Paymentproto.internal_static_payment_v1alpha1_UpdatePaymentRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.payment.v1alpha1.Paymentproto.internal_static_payment_v1alpha1_UpdatePaymentRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.payment.v1alpha1.UpdatePaymentRequest.class, io.cuemby.payment.v1alpha1.UpdatePaymentRequest.Builder.class);
    }

    // Construct using io.cuemby.payment.v1alpha1.UpdatePaymentRequest.newBuilder()
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
      if (paymentBuilder_ == null) {
        payment_ = null;
      } else {
        payment_ = null;
        paymentBuilder_ = null;
      }
      status_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.payment.v1alpha1.Paymentproto.internal_static_payment_v1alpha1_UpdatePaymentRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.payment.v1alpha1.UpdatePaymentRequest getDefaultInstanceForType() {
      return io.cuemby.payment.v1alpha1.UpdatePaymentRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.payment.v1alpha1.UpdatePaymentRequest build() {
      io.cuemby.payment.v1alpha1.UpdatePaymentRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.payment.v1alpha1.UpdatePaymentRequest buildPartial() {
      io.cuemby.payment.v1alpha1.UpdatePaymentRequest result = new io.cuemby.payment.v1alpha1.UpdatePaymentRequest(this);
      if (paymentBuilder_ == null) {
        result.payment_ = payment_;
      } else {
        result.payment_ = paymentBuilder_.build();
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
      if (other instanceof io.cuemby.payment.v1alpha1.UpdatePaymentRequest) {
        return mergeFrom((io.cuemby.payment.v1alpha1.UpdatePaymentRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.payment.v1alpha1.UpdatePaymentRequest other) {
      if (other == io.cuemby.payment.v1alpha1.UpdatePaymentRequest.getDefaultInstance()) return this;
      if (other.hasPayment()) {
        mergePayment(other.getPayment());
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
      io.cuemby.payment.v1alpha1.UpdatePaymentRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.payment.v1alpha1.UpdatePaymentRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private io.cuemby.payment.v1alpha1.Payment payment_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.payment.v1alpha1.Payment, io.cuemby.payment.v1alpha1.Payment.Builder, io.cuemby.payment.v1alpha1.PaymentOrBuilder> paymentBuilder_;
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     * @return Whether the payment field is set.
     */
    public boolean hasPayment() {
      return paymentBuilder_ != null || payment_ != null;
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     * @return The payment.
     */
    public io.cuemby.payment.v1alpha1.Payment getPayment() {
      if (paymentBuilder_ == null) {
        return payment_ == null ? io.cuemby.payment.v1alpha1.Payment.getDefaultInstance() : payment_;
      } else {
        return paymentBuilder_.getMessage();
      }
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    public Builder setPayment(io.cuemby.payment.v1alpha1.Payment value) {
      if (paymentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        payment_ = value;
        onChanged();
      } else {
        paymentBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    public Builder setPayment(
        io.cuemby.payment.v1alpha1.Payment.Builder builderForValue) {
      if (paymentBuilder_ == null) {
        payment_ = builderForValue.build();
        onChanged();
      } else {
        paymentBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    public Builder mergePayment(io.cuemby.payment.v1alpha1.Payment value) {
      if (paymentBuilder_ == null) {
        if (payment_ != null) {
          payment_ =
            io.cuemby.payment.v1alpha1.Payment.newBuilder(payment_).mergeFrom(value).buildPartial();
        } else {
          payment_ = value;
        }
        onChanged();
      } else {
        paymentBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    public Builder clearPayment() {
      if (paymentBuilder_ == null) {
        payment_ = null;
        onChanged();
      } else {
        payment_ = null;
        paymentBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    public io.cuemby.payment.v1alpha1.Payment.Builder getPaymentBuilder() {
      
      onChanged();
      return getPaymentFieldBuilder().getBuilder();
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    public io.cuemby.payment.v1alpha1.PaymentOrBuilder getPaymentOrBuilder() {
      if (paymentBuilder_ != null) {
        return paymentBuilder_.getMessageOrBuilder();
      } else {
        return payment_ == null ?
            io.cuemby.payment.v1alpha1.Payment.getDefaultInstance() : payment_;
      }
    }
    /**
     * <code>.payment.v1alpha1.Payment payment = 1 [json_name = "payment"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.cuemby.payment.v1alpha1.Payment, io.cuemby.payment.v1alpha1.Payment.Builder, io.cuemby.payment.v1alpha1.PaymentOrBuilder> 
        getPaymentFieldBuilder() {
      if (paymentBuilder_ == null) {
        paymentBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.cuemby.payment.v1alpha1.Payment, io.cuemby.payment.v1alpha1.Payment.Builder, io.cuemby.payment.v1alpha1.PaymentOrBuilder>(
                getPayment(),
                getParentForChildren(),
                isClean());
        payment_ = null;
      }
      return paymentBuilder_;
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


    // @@protoc_insertion_point(builder_scope:payment.v1alpha1.UpdatePaymentRequest)
  }

  // @@protoc_insertion_point(class_scope:payment.v1alpha1.UpdatePaymentRequest)
  private static final io.cuemby.payment.v1alpha1.UpdatePaymentRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.payment.v1alpha1.UpdatePaymentRequest();
  }

  public static io.cuemby.payment.v1alpha1.UpdatePaymentRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<UpdatePaymentRequest>
      PARSER = new com.google.protobuf.AbstractParser<UpdatePaymentRequest>() {
    @java.lang.Override
    public UpdatePaymentRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new UpdatePaymentRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<UpdatePaymentRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<UpdatePaymentRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.payment.v1alpha1.UpdatePaymentRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
