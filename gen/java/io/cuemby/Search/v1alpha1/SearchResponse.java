// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: search/v1alpha1/search_api.proto

package io.cuemby.Search.v1alpha1;

/**
 * Protobuf type {@code search.v1alpha1.SearchResponse}
 */
public final class SearchResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:search.v1alpha1.SearchResponse)
    SearchResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SearchResponse.newBuilder() to construct.
  private SearchResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SearchResponse() {
    results_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SearchResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private SearchResponse(
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
              results_ = new java.util.ArrayList<io.cuemby.search.v1alpha1.SearchItem>();
              mutable_bitField0_ |= 0x00000001;
            }
            results_.add(
                input.readMessage(io.cuemby.search.v1alpha1.SearchItem.parser(), extensionRegistry));
            break;
          }
          case 16: {

            totalHits_ = input.readUInt32();
            break;
          }
          case 24: {

            totalPages_ = input.readUInt32();
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
        results_ = java.util.Collections.unmodifiableList(results_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.cuemby.Search.v1alpha1.SearchAPIProto.internal_static_search_v1alpha1_SearchResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.cuemby.Search.v1alpha1.SearchAPIProto.internal_static_search_v1alpha1_SearchResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.cuemby.Search.v1alpha1.SearchResponse.class, io.cuemby.Search.v1alpha1.SearchResponse.Builder.class);
  }

  public static final int RESULTS_FIELD_NUMBER = 1;
  private java.util.List<io.cuemby.search.v1alpha1.SearchItem> results_;
  /**
   * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
   */
  @java.lang.Override
  public java.util.List<io.cuemby.search.v1alpha1.SearchItem> getResultsList() {
    return results_;
  }
  /**
   * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends io.cuemby.search.v1alpha1.SearchItemOrBuilder> 
      getResultsOrBuilderList() {
    return results_;
  }
  /**
   * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
   */
  @java.lang.Override
  public int getResultsCount() {
    return results_.size();
  }
  /**
   * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
   */
  @java.lang.Override
  public io.cuemby.search.v1alpha1.SearchItem getResults(int index) {
    return results_.get(index);
  }
  /**
   * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
   */
  @java.lang.Override
  public io.cuemby.search.v1alpha1.SearchItemOrBuilder getResultsOrBuilder(
      int index) {
    return results_.get(index);
  }

  public static final int TOTAL_HITS_FIELD_NUMBER = 2;
  private int totalHits_;
  /**
   * <code>uint32 total_hits = 2 [json_name = "totalHits"];</code>
   * @return The totalHits.
   */
  @java.lang.Override
  public int getTotalHits() {
    return totalHits_;
  }

  public static final int TOTAL_PAGES_FIELD_NUMBER = 3;
  private int totalPages_;
  /**
   * <code>uint32 total_pages = 3 [json_name = "totalPages"];</code>
   * @return The totalPages.
   */
  @java.lang.Override
  public int getTotalPages() {
    return totalPages_;
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
    for (int i = 0; i < results_.size(); i++) {
      output.writeMessage(1, results_.get(i));
    }
    if (totalHits_ != 0) {
      output.writeUInt32(2, totalHits_);
    }
    if (totalPages_ != 0) {
      output.writeUInt32(3, totalPages_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < results_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, results_.get(i));
    }
    if (totalHits_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(2, totalHits_);
    }
    if (totalPages_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(3, totalPages_);
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
    if (!(obj instanceof io.cuemby.Search.v1alpha1.SearchResponse)) {
      return super.equals(obj);
    }
    io.cuemby.Search.v1alpha1.SearchResponse other = (io.cuemby.Search.v1alpha1.SearchResponse) obj;

    if (!getResultsList()
        .equals(other.getResultsList())) return false;
    if (getTotalHits()
        != other.getTotalHits()) return false;
    if (getTotalPages()
        != other.getTotalPages()) return false;
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
    if (getResultsCount() > 0) {
      hash = (37 * hash) + RESULTS_FIELD_NUMBER;
      hash = (53 * hash) + getResultsList().hashCode();
    }
    hash = (37 * hash) + TOTAL_HITS_FIELD_NUMBER;
    hash = (53 * hash) + getTotalHits();
    hash = (37 * hash) + TOTAL_PAGES_FIELD_NUMBER;
    hash = (53 * hash) + getTotalPages();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.cuemby.Search.v1alpha1.SearchResponse parseFrom(
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
  public static Builder newBuilder(io.cuemby.Search.v1alpha1.SearchResponse prototype) {
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
   * Protobuf type {@code search.v1alpha1.SearchResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:search.v1alpha1.SearchResponse)
      io.cuemby.Search.v1alpha1.SearchResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.cuemby.Search.v1alpha1.SearchAPIProto.internal_static_search_v1alpha1_SearchResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.cuemby.Search.v1alpha1.SearchAPIProto.internal_static_search_v1alpha1_SearchResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.cuemby.Search.v1alpha1.SearchResponse.class, io.cuemby.Search.v1alpha1.SearchResponse.Builder.class);
    }

    // Construct using io.cuemby.Search.v1alpha1.SearchResponse.newBuilder()
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
        getResultsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (resultsBuilder_ == null) {
        results_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        resultsBuilder_.clear();
      }
      totalHits_ = 0;

      totalPages_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.cuemby.Search.v1alpha1.SearchAPIProto.internal_static_search_v1alpha1_SearchResponse_descriptor;
    }

    @java.lang.Override
    public io.cuemby.Search.v1alpha1.SearchResponse getDefaultInstanceForType() {
      return io.cuemby.Search.v1alpha1.SearchResponse.getDefaultInstance();
    }

    @java.lang.Override
    public io.cuemby.Search.v1alpha1.SearchResponse build() {
      io.cuemby.Search.v1alpha1.SearchResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.cuemby.Search.v1alpha1.SearchResponse buildPartial() {
      io.cuemby.Search.v1alpha1.SearchResponse result = new io.cuemby.Search.v1alpha1.SearchResponse(this);
      int from_bitField0_ = bitField0_;
      if (resultsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          results_ = java.util.Collections.unmodifiableList(results_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.results_ = results_;
      } else {
        result.results_ = resultsBuilder_.build();
      }
      result.totalHits_ = totalHits_;
      result.totalPages_ = totalPages_;
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
      if (other instanceof io.cuemby.Search.v1alpha1.SearchResponse) {
        return mergeFrom((io.cuemby.Search.v1alpha1.SearchResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.cuemby.Search.v1alpha1.SearchResponse other) {
      if (other == io.cuemby.Search.v1alpha1.SearchResponse.getDefaultInstance()) return this;
      if (resultsBuilder_ == null) {
        if (!other.results_.isEmpty()) {
          if (results_.isEmpty()) {
            results_ = other.results_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureResultsIsMutable();
            results_.addAll(other.results_);
          }
          onChanged();
        }
      } else {
        if (!other.results_.isEmpty()) {
          if (resultsBuilder_.isEmpty()) {
            resultsBuilder_.dispose();
            resultsBuilder_ = null;
            results_ = other.results_;
            bitField0_ = (bitField0_ & ~0x00000001);
            resultsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getResultsFieldBuilder() : null;
          } else {
            resultsBuilder_.addAllMessages(other.results_);
          }
        }
      }
      if (other.getTotalHits() != 0) {
        setTotalHits(other.getTotalHits());
      }
      if (other.getTotalPages() != 0) {
        setTotalPages(other.getTotalPages());
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
      io.cuemby.Search.v1alpha1.SearchResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (io.cuemby.Search.v1alpha1.SearchResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.util.List<io.cuemby.search.v1alpha1.SearchItem> results_ =
      java.util.Collections.emptyList();
    private void ensureResultsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        results_ = new java.util.ArrayList<io.cuemby.search.v1alpha1.SearchItem>(results_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.search.v1alpha1.SearchItem, io.cuemby.search.v1alpha1.SearchItem.Builder, io.cuemby.search.v1alpha1.SearchItemOrBuilder> resultsBuilder_;

    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public java.util.List<io.cuemby.search.v1alpha1.SearchItem> getResultsList() {
      if (resultsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(results_);
      } else {
        return resultsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public int getResultsCount() {
      if (resultsBuilder_ == null) {
        return results_.size();
      } else {
        return resultsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public io.cuemby.search.v1alpha1.SearchItem getResults(int index) {
      if (resultsBuilder_ == null) {
        return results_.get(index);
      } else {
        return resultsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder setResults(
        int index, io.cuemby.search.v1alpha1.SearchItem value) {
      if (resultsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureResultsIsMutable();
        results_.set(index, value);
        onChanged();
      } else {
        resultsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder setResults(
        int index, io.cuemby.search.v1alpha1.SearchItem.Builder builderForValue) {
      if (resultsBuilder_ == null) {
        ensureResultsIsMutable();
        results_.set(index, builderForValue.build());
        onChanged();
      } else {
        resultsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder addResults(io.cuemby.search.v1alpha1.SearchItem value) {
      if (resultsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureResultsIsMutable();
        results_.add(value);
        onChanged();
      } else {
        resultsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder addResults(
        int index, io.cuemby.search.v1alpha1.SearchItem value) {
      if (resultsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureResultsIsMutable();
        results_.add(index, value);
        onChanged();
      } else {
        resultsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder addResults(
        io.cuemby.search.v1alpha1.SearchItem.Builder builderForValue) {
      if (resultsBuilder_ == null) {
        ensureResultsIsMutable();
        results_.add(builderForValue.build());
        onChanged();
      } else {
        resultsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder addResults(
        int index, io.cuemby.search.v1alpha1.SearchItem.Builder builderForValue) {
      if (resultsBuilder_ == null) {
        ensureResultsIsMutable();
        results_.add(index, builderForValue.build());
        onChanged();
      } else {
        resultsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder addAllResults(
        java.lang.Iterable<? extends io.cuemby.search.v1alpha1.SearchItem> values) {
      if (resultsBuilder_ == null) {
        ensureResultsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, results_);
        onChanged();
      } else {
        resultsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder clearResults() {
      if (resultsBuilder_ == null) {
        results_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        resultsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public Builder removeResults(int index) {
      if (resultsBuilder_ == null) {
        ensureResultsIsMutable();
        results_.remove(index);
        onChanged();
      } else {
        resultsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public io.cuemby.search.v1alpha1.SearchItem.Builder getResultsBuilder(
        int index) {
      return getResultsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public io.cuemby.search.v1alpha1.SearchItemOrBuilder getResultsOrBuilder(
        int index) {
      if (resultsBuilder_ == null) {
        return results_.get(index);  } else {
        return resultsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public java.util.List<? extends io.cuemby.search.v1alpha1.SearchItemOrBuilder> 
         getResultsOrBuilderList() {
      if (resultsBuilder_ != null) {
        return resultsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(results_);
      }
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public io.cuemby.search.v1alpha1.SearchItem.Builder addResultsBuilder() {
      return getResultsFieldBuilder().addBuilder(
          io.cuemby.search.v1alpha1.SearchItem.getDefaultInstance());
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public io.cuemby.search.v1alpha1.SearchItem.Builder addResultsBuilder(
        int index) {
      return getResultsFieldBuilder().addBuilder(
          index, io.cuemby.search.v1alpha1.SearchItem.getDefaultInstance());
    }
    /**
     * <code>repeated .search.v1alpha1.SearchItem results = 1 [json_name = "results"];</code>
     */
    public java.util.List<io.cuemby.search.v1alpha1.SearchItem.Builder> 
         getResultsBuilderList() {
      return getResultsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.cuemby.search.v1alpha1.SearchItem, io.cuemby.search.v1alpha1.SearchItem.Builder, io.cuemby.search.v1alpha1.SearchItemOrBuilder> 
        getResultsFieldBuilder() {
      if (resultsBuilder_ == null) {
        resultsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            io.cuemby.search.v1alpha1.SearchItem, io.cuemby.search.v1alpha1.SearchItem.Builder, io.cuemby.search.v1alpha1.SearchItemOrBuilder>(
                results_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        results_ = null;
      }
      return resultsBuilder_;
    }

    private int totalHits_ ;
    /**
     * <code>uint32 total_hits = 2 [json_name = "totalHits"];</code>
     * @return The totalHits.
     */
    @java.lang.Override
    public int getTotalHits() {
      return totalHits_;
    }
    /**
     * <code>uint32 total_hits = 2 [json_name = "totalHits"];</code>
     * @param value The totalHits to set.
     * @return This builder for chaining.
     */
    public Builder setTotalHits(int value) {
      
      totalHits_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 total_hits = 2 [json_name = "totalHits"];</code>
     * @return This builder for chaining.
     */
    public Builder clearTotalHits() {
      
      totalHits_ = 0;
      onChanged();
      return this;
    }

    private int totalPages_ ;
    /**
     * <code>uint32 total_pages = 3 [json_name = "totalPages"];</code>
     * @return The totalPages.
     */
    @java.lang.Override
    public int getTotalPages() {
      return totalPages_;
    }
    /**
     * <code>uint32 total_pages = 3 [json_name = "totalPages"];</code>
     * @param value The totalPages to set.
     * @return This builder for chaining.
     */
    public Builder setTotalPages(int value) {
      
      totalPages_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 total_pages = 3 [json_name = "totalPages"];</code>
     * @return This builder for chaining.
     */
    public Builder clearTotalPages() {
      
      totalPages_ = 0;
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


    // @@protoc_insertion_point(builder_scope:search.v1alpha1.SearchResponse)
  }

  // @@protoc_insertion_point(class_scope:search.v1alpha1.SearchResponse)
  private static final io.cuemby.Search.v1alpha1.SearchResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.cuemby.Search.v1alpha1.SearchResponse();
  }

  public static io.cuemby.Search.v1alpha1.SearchResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SearchResponse>
      PARSER = new com.google.protobuf.AbstractParser<SearchResponse>() {
    @java.lang.Override
    public SearchResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new SearchResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<SearchResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SearchResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.cuemby.Search.v1alpha1.SearchResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

