// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: billing/v1alpha1/billing.proto

package billing.v1alpha1;

public final class BillingOuterClass {
  private BillingOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface BillingOrBuilder extends
      // @@protoc_insertion_point(interface_extends:billing.v1alpha1.Billing)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return The organizationId.
     */
    java.lang.String getOrganizationId();
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return The bytes for organizationId.
     */
    com.google.protobuf.ByteString
        getOrganizationIdBytes();

    /**
     * <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
     * @return The cpuMetric.
     */
    double getCpuMetric();

    /**
     * <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
     * @return The cpuBill.
     */
    double getCpuBill();

    /**
     * <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
     * @return The ramMetric.
     */
    double getRamMetric();

    /**
     * <code>double ram_bill = 5 [json_name = "ramBill"];</code>
     * @return The ramBill.
     */
    double getRamBill();

    /**
     * <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
     * @return The storageMetric.
     */
    double getStorageMetric();

    /**
     * <code>double storage_bill = 7 [json_name = "storageBill"];</code>
     * @return The storageBill.
     */
    double getStorageBill();

    /**
     * <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
     * @return The totalToPay.
     */
    double getTotalToPay();
  }
  /**
   * Protobuf type {@code billing.v1alpha1.Billing}
   */
  public static final class Billing extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:billing.v1alpha1.Billing)
      BillingOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use Billing.newBuilder() to construct.
    private Billing(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Billing() {
      organizationId_ = "";
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new Billing();
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private Billing(
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

              organizationId_ = s;
              break;
            }
            case 17: {

              cpuMetric_ = input.readDouble();
              break;
            }
            case 25: {

              cpuBill_ = input.readDouble();
              break;
            }
            case 33: {

              ramMetric_ = input.readDouble();
              break;
            }
            case 41: {

              ramBill_ = input.readDouble();
              break;
            }
            case 49: {

              storageMetric_ = input.readDouble();
              break;
            }
            case 57: {

              storageBill_ = input.readDouble();
              break;
            }
            case 65: {

              totalToPay_ = input.readDouble();
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
      return billing.v1alpha1.BillingOuterClass.internal_static_billing_v1alpha1_Billing_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return billing.v1alpha1.BillingOuterClass.internal_static_billing_v1alpha1_Billing_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              billing.v1alpha1.BillingOuterClass.Billing.class, billing.v1alpha1.BillingOuterClass.Billing.Builder.class);
    }

    public static final int ORGANIZATION_ID_FIELD_NUMBER = 1;
    private volatile java.lang.Object organizationId_;
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return The organizationId.
     */
    @java.lang.Override
    public java.lang.String getOrganizationId() {
      java.lang.Object ref = organizationId_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        organizationId_ = s;
        return s;
      }
    }
    /**
     * <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return The bytes for organizationId.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getOrganizationIdBytes() {
      java.lang.Object ref = organizationId_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        organizationId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int CPU_METRIC_FIELD_NUMBER = 2;
    private double cpuMetric_;
    /**
     * <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
     * @return The cpuMetric.
     */
    @java.lang.Override
    public double getCpuMetric() {
      return cpuMetric_;
    }

    public static final int CPU_BILL_FIELD_NUMBER = 3;
    private double cpuBill_;
    /**
     * <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
     * @return The cpuBill.
     */
    @java.lang.Override
    public double getCpuBill() {
      return cpuBill_;
    }

    public static final int RAM_METRIC_FIELD_NUMBER = 4;
    private double ramMetric_;
    /**
     * <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
     * @return The ramMetric.
     */
    @java.lang.Override
    public double getRamMetric() {
      return ramMetric_;
    }

    public static final int RAM_BILL_FIELD_NUMBER = 5;
    private double ramBill_;
    /**
     * <code>double ram_bill = 5 [json_name = "ramBill"];</code>
     * @return The ramBill.
     */
    @java.lang.Override
    public double getRamBill() {
      return ramBill_;
    }

    public static final int STORAGE_METRIC_FIELD_NUMBER = 6;
    private double storageMetric_;
    /**
     * <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
     * @return The storageMetric.
     */
    @java.lang.Override
    public double getStorageMetric() {
      return storageMetric_;
    }

    public static final int STORAGE_BILL_FIELD_NUMBER = 7;
    private double storageBill_;
    /**
     * <code>double storage_bill = 7 [json_name = "storageBill"];</code>
     * @return The storageBill.
     */
    @java.lang.Override
    public double getStorageBill() {
      return storageBill_;
    }

    public static final int TOTAL_TO_PAY_FIELD_NUMBER = 8;
    private double totalToPay_;
    /**
     * <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
     * @return The totalToPay.
     */
    @java.lang.Override
    public double getTotalToPay() {
      return totalToPay_;
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
      if (!getOrganizationIdBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, organizationId_);
      }
      if (cpuMetric_ != 0D) {
        output.writeDouble(2, cpuMetric_);
      }
      if (cpuBill_ != 0D) {
        output.writeDouble(3, cpuBill_);
      }
      if (ramMetric_ != 0D) {
        output.writeDouble(4, ramMetric_);
      }
      if (ramBill_ != 0D) {
        output.writeDouble(5, ramBill_);
      }
      if (storageMetric_ != 0D) {
        output.writeDouble(6, storageMetric_);
      }
      if (storageBill_ != 0D) {
        output.writeDouble(7, storageBill_);
      }
      if (totalToPay_ != 0D) {
        output.writeDouble(8, totalToPay_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getOrganizationIdBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, organizationId_);
      }
      if (cpuMetric_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(2, cpuMetric_);
      }
      if (cpuBill_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(3, cpuBill_);
      }
      if (ramMetric_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(4, ramMetric_);
      }
      if (ramBill_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(5, ramBill_);
      }
      if (storageMetric_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(6, storageMetric_);
      }
      if (storageBill_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(7, storageBill_);
      }
      if (totalToPay_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(8, totalToPay_);
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
      if (!(obj instanceof billing.v1alpha1.BillingOuterClass.Billing)) {
        return super.equals(obj);
      }
      billing.v1alpha1.BillingOuterClass.Billing other = (billing.v1alpha1.BillingOuterClass.Billing) obj;

      if (!getOrganizationId()
          .equals(other.getOrganizationId())) return false;
      if (java.lang.Double.doubleToLongBits(getCpuMetric())
          != java.lang.Double.doubleToLongBits(
              other.getCpuMetric())) return false;
      if (java.lang.Double.doubleToLongBits(getCpuBill())
          != java.lang.Double.doubleToLongBits(
              other.getCpuBill())) return false;
      if (java.lang.Double.doubleToLongBits(getRamMetric())
          != java.lang.Double.doubleToLongBits(
              other.getRamMetric())) return false;
      if (java.lang.Double.doubleToLongBits(getRamBill())
          != java.lang.Double.doubleToLongBits(
              other.getRamBill())) return false;
      if (java.lang.Double.doubleToLongBits(getStorageMetric())
          != java.lang.Double.doubleToLongBits(
              other.getStorageMetric())) return false;
      if (java.lang.Double.doubleToLongBits(getStorageBill())
          != java.lang.Double.doubleToLongBits(
              other.getStorageBill())) return false;
      if (java.lang.Double.doubleToLongBits(getTotalToPay())
          != java.lang.Double.doubleToLongBits(
              other.getTotalToPay())) return false;
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
      hash = (37 * hash) + ORGANIZATION_ID_FIELD_NUMBER;
      hash = (53 * hash) + getOrganizationId().hashCode();
      hash = (37 * hash) + CPU_METRIC_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getCpuMetric()));
      hash = (37 * hash) + CPU_BILL_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getCpuBill()));
      hash = (37 * hash) + RAM_METRIC_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getRamMetric()));
      hash = (37 * hash) + RAM_BILL_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getRamBill()));
      hash = (37 * hash) + STORAGE_METRIC_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getStorageMetric()));
      hash = (37 * hash) + STORAGE_BILL_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getStorageBill()));
      hash = (37 * hash) + TOTAL_TO_PAY_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getTotalToPay()));
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static billing.v1alpha1.BillingOuterClass.Billing parseFrom(
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
    public static Builder newBuilder(billing.v1alpha1.BillingOuterClass.Billing prototype) {
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
     * Protobuf type {@code billing.v1alpha1.Billing}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:billing.v1alpha1.Billing)
        billing.v1alpha1.BillingOuterClass.BillingOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return billing.v1alpha1.BillingOuterClass.internal_static_billing_v1alpha1_Billing_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return billing.v1alpha1.BillingOuterClass.internal_static_billing_v1alpha1_Billing_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                billing.v1alpha1.BillingOuterClass.Billing.class, billing.v1alpha1.BillingOuterClass.Billing.Builder.class);
      }

      // Construct using billing.v1alpha1.BillingOuterClass.Billing.newBuilder()
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
        organizationId_ = "";

        cpuMetric_ = 0D;

        cpuBill_ = 0D;

        ramMetric_ = 0D;

        ramBill_ = 0D;

        storageMetric_ = 0D;

        storageBill_ = 0D;

        totalToPay_ = 0D;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return billing.v1alpha1.BillingOuterClass.internal_static_billing_v1alpha1_Billing_descriptor;
      }

      @java.lang.Override
      public billing.v1alpha1.BillingOuterClass.Billing getDefaultInstanceForType() {
        return billing.v1alpha1.BillingOuterClass.Billing.getDefaultInstance();
      }

      @java.lang.Override
      public billing.v1alpha1.BillingOuterClass.Billing build() {
        billing.v1alpha1.BillingOuterClass.Billing result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public billing.v1alpha1.BillingOuterClass.Billing buildPartial() {
        billing.v1alpha1.BillingOuterClass.Billing result = new billing.v1alpha1.BillingOuterClass.Billing(this);
        result.organizationId_ = organizationId_;
        result.cpuMetric_ = cpuMetric_;
        result.cpuBill_ = cpuBill_;
        result.ramMetric_ = ramMetric_;
        result.ramBill_ = ramBill_;
        result.storageMetric_ = storageMetric_;
        result.storageBill_ = storageBill_;
        result.totalToPay_ = totalToPay_;
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
        if (other instanceof billing.v1alpha1.BillingOuterClass.Billing) {
          return mergeFrom((billing.v1alpha1.BillingOuterClass.Billing)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(billing.v1alpha1.BillingOuterClass.Billing other) {
        if (other == billing.v1alpha1.BillingOuterClass.Billing.getDefaultInstance()) return this;
        if (!other.getOrganizationId().isEmpty()) {
          organizationId_ = other.organizationId_;
          onChanged();
        }
        if (other.getCpuMetric() != 0D) {
          setCpuMetric(other.getCpuMetric());
        }
        if (other.getCpuBill() != 0D) {
          setCpuBill(other.getCpuBill());
        }
        if (other.getRamMetric() != 0D) {
          setRamMetric(other.getRamMetric());
        }
        if (other.getRamBill() != 0D) {
          setRamBill(other.getRamBill());
        }
        if (other.getStorageMetric() != 0D) {
          setStorageMetric(other.getStorageMetric());
        }
        if (other.getStorageBill() != 0D) {
          setStorageBill(other.getStorageBill());
        }
        if (other.getTotalToPay() != 0D) {
          setTotalToPay(other.getTotalToPay());
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
        billing.v1alpha1.BillingOuterClass.Billing parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (billing.v1alpha1.BillingOuterClass.Billing) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object organizationId_ = "";
      /**
       * <code>string organization_id = 1 [json_name = "organizationId"];</code>
       * @return The organizationId.
       */
      public java.lang.String getOrganizationId() {
        java.lang.Object ref = organizationId_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          organizationId_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string organization_id = 1 [json_name = "organizationId"];</code>
       * @return The bytes for organizationId.
       */
      public com.google.protobuf.ByteString
          getOrganizationIdBytes() {
        java.lang.Object ref = organizationId_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          organizationId_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string organization_id = 1 [json_name = "organizationId"];</code>
       * @param value The organizationId to set.
       * @return This builder for chaining.
       */
      public Builder setOrganizationId(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        organizationId_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string organization_id = 1 [json_name = "organizationId"];</code>
       * @return This builder for chaining.
       */
      public Builder clearOrganizationId() {
        
        organizationId_ = getDefaultInstance().getOrganizationId();
        onChanged();
        return this;
      }
      /**
       * <code>string organization_id = 1 [json_name = "organizationId"];</code>
       * @param value The bytes for organizationId to set.
       * @return This builder for chaining.
       */
      public Builder setOrganizationIdBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        organizationId_ = value;
        onChanged();
        return this;
      }

      private double cpuMetric_ ;
      /**
       * <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
       * @return The cpuMetric.
       */
      @java.lang.Override
      public double getCpuMetric() {
        return cpuMetric_;
      }
      /**
       * <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
       * @param value The cpuMetric to set.
       * @return This builder for chaining.
       */
      public Builder setCpuMetric(double value) {
        
        cpuMetric_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
       * @return This builder for chaining.
       */
      public Builder clearCpuMetric() {
        
        cpuMetric_ = 0D;
        onChanged();
        return this;
      }

      private double cpuBill_ ;
      /**
       * <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
       * @return The cpuBill.
       */
      @java.lang.Override
      public double getCpuBill() {
        return cpuBill_;
      }
      /**
       * <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
       * @param value The cpuBill to set.
       * @return This builder for chaining.
       */
      public Builder setCpuBill(double value) {
        
        cpuBill_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
       * @return This builder for chaining.
       */
      public Builder clearCpuBill() {
        
        cpuBill_ = 0D;
        onChanged();
        return this;
      }

      private double ramMetric_ ;
      /**
       * <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
       * @return The ramMetric.
       */
      @java.lang.Override
      public double getRamMetric() {
        return ramMetric_;
      }
      /**
       * <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
       * @param value The ramMetric to set.
       * @return This builder for chaining.
       */
      public Builder setRamMetric(double value) {
        
        ramMetric_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
       * @return This builder for chaining.
       */
      public Builder clearRamMetric() {
        
        ramMetric_ = 0D;
        onChanged();
        return this;
      }

      private double ramBill_ ;
      /**
       * <code>double ram_bill = 5 [json_name = "ramBill"];</code>
       * @return The ramBill.
       */
      @java.lang.Override
      public double getRamBill() {
        return ramBill_;
      }
      /**
       * <code>double ram_bill = 5 [json_name = "ramBill"];</code>
       * @param value The ramBill to set.
       * @return This builder for chaining.
       */
      public Builder setRamBill(double value) {
        
        ramBill_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double ram_bill = 5 [json_name = "ramBill"];</code>
       * @return This builder for chaining.
       */
      public Builder clearRamBill() {
        
        ramBill_ = 0D;
        onChanged();
        return this;
      }

      private double storageMetric_ ;
      /**
       * <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
       * @return The storageMetric.
       */
      @java.lang.Override
      public double getStorageMetric() {
        return storageMetric_;
      }
      /**
       * <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
       * @param value The storageMetric to set.
       * @return This builder for chaining.
       */
      public Builder setStorageMetric(double value) {
        
        storageMetric_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
       * @return This builder for chaining.
       */
      public Builder clearStorageMetric() {
        
        storageMetric_ = 0D;
        onChanged();
        return this;
      }

      private double storageBill_ ;
      /**
       * <code>double storage_bill = 7 [json_name = "storageBill"];</code>
       * @return The storageBill.
       */
      @java.lang.Override
      public double getStorageBill() {
        return storageBill_;
      }
      /**
       * <code>double storage_bill = 7 [json_name = "storageBill"];</code>
       * @param value The storageBill to set.
       * @return This builder for chaining.
       */
      public Builder setStorageBill(double value) {
        
        storageBill_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double storage_bill = 7 [json_name = "storageBill"];</code>
       * @return This builder for chaining.
       */
      public Builder clearStorageBill() {
        
        storageBill_ = 0D;
        onChanged();
        return this;
      }

      private double totalToPay_ ;
      /**
       * <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
       * @return The totalToPay.
       */
      @java.lang.Override
      public double getTotalToPay() {
        return totalToPay_;
      }
      /**
       * <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
       * @param value The totalToPay to set.
       * @return This builder for chaining.
       */
      public Builder setTotalToPay(double value) {
        
        totalToPay_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
       * @return This builder for chaining.
       */
      public Builder clearTotalToPay() {
        
        totalToPay_ = 0D;
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


      // @@protoc_insertion_point(builder_scope:billing.v1alpha1.Billing)
    }

    // @@protoc_insertion_point(class_scope:billing.v1alpha1.Billing)
    private static final billing.v1alpha1.BillingOuterClass.Billing DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new billing.v1alpha1.BillingOuterClass.Billing();
    }

    public static billing.v1alpha1.BillingOuterClass.Billing getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Billing>
        PARSER = new com.google.protobuf.AbstractParser<Billing>() {
      @java.lang.Override
      public Billing parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new Billing(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<Billing> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Billing> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public billing.v1alpha1.BillingOuterClass.Billing getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_billing_v1alpha1_Billing_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_billing_v1alpha1_Billing_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\036billing/v1alpha1/billing.proto\022\020billin" +
      "g.v1alpha1\"\222\002\n\007Billing\022\'\n\017organization_i" +
      "d\030\001 \001(\tR\016organizationId\022\035\n\ncpu_metric\030\002 " +
      "\001(\001R\tcpuMetric\022\031\n\010cpu_bill\030\003 \001(\001R\007cpuBil" +
      "l\022\035\n\nram_metric\030\004 \001(\001R\tramMetric\022\031\n\010ram_" +
      "bill\030\005 \001(\001R\007ramBill\022%\n\016storage_metric\030\006 " +
      "\001(\001R\rstorageMetric\022!\n\014storage_bill\030\007 \001(\001" +
      "R\013storageBill\022 \n\014total_to_pay\030\010 \001(\001R\ntot" +
      "alToPayB7Z5github.com/cuemby/ccp-billing" +
      "-service/billingv1alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_billing_v1alpha1_Billing_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_billing_v1alpha1_Billing_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_billing_v1alpha1_Billing_descriptor,
        new java.lang.String[] { "OrganizationId", "CpuMetric", "CpuBill", "RamMetric", "RamBill", "StorageMetric", "StorageBill", "TotalToPay", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
