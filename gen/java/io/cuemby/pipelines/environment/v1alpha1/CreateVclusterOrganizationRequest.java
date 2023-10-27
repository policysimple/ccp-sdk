// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: pipelines/environment/v1alpha1/environment_api.proto

package io.cuemby.pipelines.environment.v1alpha1;

/**
 * Protobuf type {@code pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest}
 */
public final class CreateVclusterOrganizationRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest)
    CreateVclusterOrganizationRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateVclusterOrganizationRequest.newBuilder() to construct.
  private CreateVclusterOrganizationRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateVclusterOrganizationRequest() {
    organizationId_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CreateVclusterOrganizationRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateVclusterOrganizationRequest(
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

            organizationId_ = s;
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
    return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.class, io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.Builder.class);
  }

  public static final int ORGANIZATION_ID_FIELD_NUMBER = 2;
  private volatile java.lang.Object organizationId_;
  /**
   * <code>string organization_id = 2 [json_name = "organizationId"];</code>
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
   * <code>string organization_id = 2 [json_name = "organizationId"];</code>
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
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, organizationId_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getOrganizationIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, organizationId_);
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
    if (!(obj instanceof io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest)) {
      return super.equals(obj);
    }
    io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest other = (io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest) obj;

    if (!getOrganizationId()
        .equals(other.getOrganizationId())) return false;
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
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest prototype) {
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
   * Protobuf type {@code pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest)
      io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.class, io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.Builder.class);
    }

    // Construct using io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.newBuilder()
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

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.pipelines.environment.v1alpha1.EnvironmentAPIProto.internal_static_pipelines_environment_v1alpha1_CreateVclusterOrganizationRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest getDefaultInstanceForType() {
      return io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest build() {
      io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest buildPartial() {
      io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest result = new io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest(this);
      result.organizationId_ = organizationId_;
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
      if (other instanceof io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest) {
        return mergeFrom((io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest other) {
      if (other == io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest.getDefaultInstance()) return this;
      if (!other.getOrganizationId().isEmpty()) {
        organizationId_ = other.organizationId_;
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
      io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest) e.getUnfinishedMessage();
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
     * <code>string organization_id = 2 [json_name = "organizationId"];</code>
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
     * <code>string organization_id = 2 [json_name = "organizationId"];</code>
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
     * <code>string organization_id = 2 [json_name = "organizationId"];</code>
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
     * <code>string organization_id = 2 [json_name = "organizationId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearOrganizationId() {
      
      organizationId_ = getDefaultInstance().getOrganizationId();
      onChanged();
      return this;
    }
    /**
     * <code>string organization_id = 2 [json_name = "organizationId"];</code>
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


    // @@protoc_insertion_point(builder_scope:pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest)
  }

  // @@protoc_insertion_point(class_scope:pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest)
  private static final io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest();
  }

  public static io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateVclusterOrganizationRequest>
      PARSER = new com.google.protobuf.AbstractParser<CreateVclusterOrganizationRequest>() {
    @java.lang.Override
    public CreateVclusterOrganizationRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateVclusterOrganizationRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateVclusterOrganizationRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateVclusterOrganizationRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.pipelines.environment.v1alpha1.CreateVclusterOrganizationRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
