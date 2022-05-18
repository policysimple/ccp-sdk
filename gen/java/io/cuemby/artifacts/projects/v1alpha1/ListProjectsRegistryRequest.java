// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: artifacts/projects/v1alpha1/registry_projects_api.proto

package io.cuemby.artifacts.projects.v1alpha1;

/**
 * Protobuf type {@code artifacts.projects.v1alpha1.ListProjectsRegistryRequest}
 */
public final class ListProjectsRegistryRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:artifacts.projects.v1alpha1.ListProjectsRegistryRequest)
    ListProjectsRegistryRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ListProjectsRegistryRequest.newBuilder() to construct.
  private ListProjectsRegistryRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ListProjectsRegistryRequest() {
    query_ = "";
    sort_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ListProjectsRegistryRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private ListProjectsRegistryRequest(
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
          case 8: {

            organizationId_ = input.readUInt32();
            break;
          }
          case 16: {

            projectId_ = input.readUInt32();
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            query_ = s;
            break;
          }
          case 32: {

            page_ = input.readUInt32();
            break;
          }
          case 40: {

            size_ = input.readUInt32();
            break;
          }
          case 50: {
            java.lang.String s = input.readStringRequireUtf8();

            sort_ = s;
            break;
          }
          case 56: {

            public_ = input.readBool();
            break;
          }
          case 64: {

            withDetail_ = input.readBool();
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
    return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_ListProjectsRegistryRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_ListProjectsRegistryRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.class, io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.Builder.class);
  }

  public static final int ORGANIZATION_ID_FIELD_NUMBER = 1;
  private int organizationId_;
  /**
   * <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  @java.lang.Override
  public int getOrganizationId() {
    return organizationId_;
  }

  public static final int PROJECT_ID_FIELD_NUMBER = 2;
  private int projectId_;
  /**
   * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  @java.lang.Override
  public int getProjectId() {
    return projectId_;
  }

  public static final int QUERY_FIELD_NUMBER = 3;
  private volatile java.lang.Object query_;
  /**
   * <code>string query = 3 [json_name = "query"];</code>
   * @return The query.
   */
  @java.lang.Override
  public java.lang.String getQuery() {
    java.lang.Object ref = query_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      query_ = s;
      return s;
    }
  }
  /**
   * <code>string query = 3 [json_name = "query"];</code>
   * @return The bytes for query.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getQueryBytes() {
    java.lang.Object ref = query_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      query_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int PAGE_FIELD_NUMBER = 4;
  private int page_;
  /**
   * <code>uint32 page = 4 [json_name = "page"];</code>
   * @return The page.
   */
  @java.lang.Override
  public int getPage() {
    return page_;
  }

  public static final int SIZE_FIELD_NUMBER = 5;
  private int size_;
  /**
   * <code>uint32 size = 5 [json_name = "size"];</code>
   * @return The size.
   */
  @java.lang.Override
  public int getSize() {
    return size_;
  }

  public static final int SORT_FIELD_NUMBER = 6;
  private volatile java.lang.Object sort_;
  /**
   * <code>string sort = 6 [json_name = "sort"];</code>
   * @return The sort.
   */
  @java.lang.Override
  public java.lang.String getSort() {
    java.lang.Object ref = sort_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      sort_ = s;
      return s;
    }
  }
  /**
   * <code>string sort = 6 [json_name = "sort"];</code>
   * @return The bytes for sort.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getSortBytes() {
    java.lang.Object ref = sort_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      sort_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int PUBLIC_FIELD_NUMBER = 7;
  private boolean public_;
  /**
   * <code>bool public = 7 [json_name = "public"];</code>
   * @return The public.
   */
  @java.lang.Override
  public boolean getPublic() {
    return public_;
  }

  public static final int WITH_DETAIL_FIELD_NUMBER = 8;
  private boolean withDetail_;
  /**
   * <code>bool with_detail = 8 [json_name = "withDetail"];</code>
   * @return The withDetail.
   */
  @java.lang.Override
  public boolean getWithDetail() {
    return withDetail_;
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
    if (organizationId_ != 0) {
      output.writeUInt32(1, organizationId_);
    }
    if (projectId_ != 0) {
      output.writeUInt32(2, projectId_);
    }
    if (!getQueryBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, query_);
    }
    if (page_ != 0) {
      output.writeUInt32(4, page_);
    }
    if (size_ != 0) {
      output.writeUInt32(5, size_);
    }
    if (!getSortBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 6, sort_);
    }
    if (public_ != false) {
      output.writeBool(7, public_);
    }
    if (withDetail_ != false) {
      output.writeBool(8, withDetail_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (organizationId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, organizationId_);
    }
    if (projectId_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, projectId_);
    }
    if (!getQueryBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, query_);
    }
    if (page_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(4, page_);
    }
    if (size_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(5, size_);
    }
    if (!getSortBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(6, sort_);
    }
    if (public_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(7, public_);
    }
    if (withDetail_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(8, withDetail_);
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
    if (!(obj instanceof io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest)) {
      return super.equals(obj);
    }
    io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest other = (io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest) obj;

    if (getOrganizationId()
        != other.getOrganizationId()) return false;
    if (getProjectId()
        != other.getProjectId()) return false;
    if (!getQuery()
        .equals(other.getQuery())) return false;
    if (getPage()
        != other.getPage()) return false;
    if (getSize()
        != other.getSize()) return false;
    if (!getSort()
        .equals(other.getSort())) return false;
    if (getPublic()
        != other.getPublic()) return false;
    if (getWithDetail()
        != other.getWithDetail()) return false;
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
    hash = (53 * hash) + getOrganizationId();
    hash = (37 * hash) + PROJECT_ID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId();
    hash = (37 * hash) + QUERY_FIELD_NUMBER;
    hash = (53 * hash) + getQuery().hashCode();
    hash = (37 * hash) + PAGE_FIELD_NUMBER;
    hash = (53 * hash) + getPage();
    hash = (37 * hash) + SIZE_FIELD_NUMBER;
    hash = (53 * hash) + getSize();
    hash = (37 * hash) + SORT_FIELD_NUMBER;
    hash = (53 * hash) + getSort().hashCode();
    hash = (37 * hash) + PUBLIC_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getPublic());
    hash = (37 * hash) + WITH_DETAIL_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getWithDetail());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parseFrom(
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
  public static Builder newBuilder(io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest prototype) {
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
   * Protobuf type {@code artifacts.projects.v1alpha1.ListProjectsRegistryRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:artifacts.projects.v1alpha1.ListProjectsRegistryRequest)
      io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_ListProjectsRegistryRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_ListProjectsRegistryRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.class, io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.Builder.class);
    }

    // Construct using io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.newBuilder()
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
      organizationId_ = 0;

      projectId_ = 0;

      query_ = "";

      page_ = 0;

      size_ = 0;

      sort_ = "";

      public_ = false;

      withDetail_ = false;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.artifacts.projects.v1alpha1.RegistryProjectsProtoAPI.internal_static_artifacts_projects_v1alpha1_ListProjectsRegistryRequest_descriptor;
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest getDefaultInstanceForType() {
      return io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest build() {
      io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest buildPartial() {
      io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest result = new io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest(this);
      result.organizationId_ = organizationId_;
      result.projectId_ = projectId_;
      result.query_ = query_;
      result.page_ = page_;
      result.size_ = size_;
      result.sort_ = sort_;
      result.public_ = public_;
      result.withDetail_ = withDetail_;
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
      if (other instanceof io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest) {
        return mergeFrom((io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest other) {
      if (other == io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest.getDefaultInstance()) return this;
      if (other.getOrganizationId() != 0) {
        setOrganizationId(other.getOrganizationId());
      }
      if (other.getProjectId() != 0) {
        setProjectId(other.getProjectId());
      }
      if (!other.getQuery().isEmpty()) {
        query_ = other.query_;
        onChanged();
      }
      if (other.getPage() != 0) {
        setPage(other.getPage());
      }
      if (other.getSize() != 0) {
        setSize(other.getSize());
      }
      if (!other.getSort().isEmpty()) {
        sort_ = other.sort_;
        onChanged();
      }
      if (other.getPublic() != false) {
        setPublic(other.getPublic());
      }
      if (other.getWithDetail() != false) {
        setWithDetail(other.getWithDetail());
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
      io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int organizationId_ ;
    /**
     * <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @return The organizationId.
     */
    @java.lang.Override
    public int getOrganizationId() {
      return organizationId_;
    }
    /**
     * <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @param value The organizationId to set.
     * @return This builder for chaining.
     */
    public Builder setOrganizationId(int value) {
      
      organizationId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearOrganizationId() {
      
      organizationId_ = 0;
      onChanged();
      return this;
    }

    private int projectId_ ;
    /**
     * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @return The projectId.
     */
    @java.lang.Override
    public int getProjectId() {
      return projectId_;
    }
    /**
     * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @param value The projectId to set.
     * @return This builder for chaining.
     */
    public Builder setProjectId(int value) {
      
      projectId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @return This builder for chaining.
     */
    public Builder clearProjectId() {
      
      projectId_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object query_ = "";
    /**
     * <code>string query = 3 [json_name = "query"];</code>
     * @return The query.
     */
    public java.lang.String getQuery() {
      java.lang.Object ref = query_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        query_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string query = 3 [json_name = "query"];</code>
     * @return The bytes for query.
     */
    public com.google.protobuf.ByteString
        getQueryBytes() {
      java.lang.Object ref = query_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        query_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string query = 3 [json_name = "query"];</code>
     * @param value The query to set.
     * @return This builder for chaining.
     */
    public Builder setQuery(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      query_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string query = 3 [json_name = "query"];</code>
     * @return This builder for chaining.
     */
    public Builder clearQuery() {
      
      query_ = getDefaultInstance().getQuery();
      onChanged();
      return this;
    }
    /**
     * <code>string query = 3 [json_name = "query"];</code>
     * @param value The bytes for query to set.
     * @return This builder for chaining.
     */
    public Builder setQueryBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      query_ = value;
      onChanged();
      return this;
    }

    private int page_ ;
    /**
     * <code>uint32 page = 4 [json_name = "page"];</code>
     * @return The page.
     */
    @java.lang.Override
    public int getPage() {
      return page_;
    }
    /**
     * <code>uint32 page = 4 [json_name = "page"];</code>
     * @param value The page to set.
     * @return This builder for chaining.
     */
    public Builder setPage(int value) {
      
      page_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 page = 4 [json_name = "page"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPage() {
      
      page_ = 0;
      onChanged();
      return this;
    }

    private int size_ ;
    /**
     * <code>uint32 size = 5 [json_name = "size"];</code>
     * @return The size.
     */
    @java.lang.Override
    public int getSize() {
      return size_;
    }
    /**
     * <code>uint32 size = 5 [json_name = "size"];</code>
     * @param value The size to set.
     * @return This builder for chaining.
     */
    public Builder setSize(int value) {
      
      size_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 size = 5 [json_name = "size"];</code>
     * @return This builder for chaining.
     */
    public Builder clearSize() {
      
      size_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object sort_ = "";
    /**
     * <code>string sort = 6 [json_name = "sort"];</code>
     * @return The sort.
     */
    public java.lang.String getSort() {
      java.lang.Object ref = sort_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        sort_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string sort = 6 [json_name = "sort"];</code>
     * @return The bytes for sort.
     */
    public com.google.protobuf.ByteString
        getSortBytes() {
      java.lang.Object ref = sort_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        sort_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string sort = 6 [json_name = "sort"];</code>
     * @param value The sort to set.
     * @return This builder for chaining.
     */
    public Builder setSort(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      sort_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string sort = 6 [json_name = "sort"];</code>
     * @return This builder for chaining.
     */
    public Builder clearSort() {
      
      sort_ = getDefaultInstance().getSort();
      onChanged();
      return this;
    }
    /**
     * <code>string sort = 6 [json_name = "sort"];</code>
     * @param value The bytes for sort to set.
     * @return This builder for chaining.
     */
    public Builder setSortBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      sort_ = value;
      onChanged();
      return this;
    }

    private boolean public_ ;
    /**
     * <code>bool public = 7 [json_name = "public"];</code>
     * @return The public.
     */
    @java.lang.Override
    public boolean getPublic() {
      return public_;
    }
    /**
     * <code>bool public = 7 [json_name = "public"];</code>
     * @param value The public to set.
     * @return This builder for chaining.
     */
    public Builder setPublic(boolean value) {
      
      public_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>bool public = 7 [json_name = "public"];</code>
     * @return This builder for chaining.
     */
    public Builder clearPublic() {
      
      public_ = false;
      onChanged();
      return this;
    }

    private boolean withDetail_ ;
    /**
     * <code>bool with_detail = 8 [json_name = "withDetail"];</code>
     * @return The withDetail.
     */
    @java.lang.Override
    public boolean getWithDetail() {
      return withDetail_;
    }
    /**
     * <code>bool with_detail = 8 [json_name = "withDetail"];</code>
     * @param value The withDetail to set.
     * @return This builder for chaining.
     */
    public Builder setWithDetail(boolean value) {
      
      withDetail_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>bool with_detail = 8 [json_name = "withDetail"];</code>
     * @return This builder for chaining.
     */
    public Builder clearWithDetail() {
      
      withDetail_ = false;
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


    // @@protoc_insertion_point(builder_scope:artifacts.projects.v1alpha1.ListProjectsRegistryRequest)
  }

  // @@protoc_insertion_point(class_scope:artifacts.projects.v1alpha1.ListProjectsRegistryRequest)
  private static final io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest();
  }

  public static io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ListProjectsRegistryRequest>
      PARSER = new com.google.protobuf.AbstractParser<ListProjectsRegistryRequest>() {
    @java.lang.Override
    public ListProjectsRegistryRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new ListProjectsRegistryRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ListProjectsRegistryRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ListProjectsRegistryRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.artifacts.projects.v1alpha1.ListProjectsRegistryRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

