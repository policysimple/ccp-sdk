// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: search/v1alpha1/search.proto

package io.cuemby.search.v1alpha1;

public final class SearchProto {
  private SearchProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_search_v1alpha1_SearchItem_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_search_v1alpha1_SearchItem_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_search_v1alpha1_SearchItem_DataEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_search_v1alpha1_SearchItem_DataEntry_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\034search/v1alpha1/search.proto\022\017search.v" +
      "1alpha1\"\232\002\n\nSearchItem\022\033\n\tobject_id\030\001 \001(" +
      "\tR\010objectId\022\022\n\004type\030\002 \001(\tR\004type\022\022\n\004name\030" +
      "\003 \001(\tR\004name\022\025\n\006org_id\030\004 \001(\tR\005orgId\022 \n\013de" +
      "scription\030\005 \001(\tR\013description\022\032\n\010metadata" +
      "\030\006 \001(\tR\010metadata\0229\n\004data\030\007 \003(\0132%.search." +
      "v1alpha1.SearchItem.DataEntryR\004data\0327\n\tD" +
      "ataEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(" +
      "\tR\005value:\0028\001B\206\001\n\031io.cuemby.search.v1alph" +
      "a1B\013SearchProtoP\001Z0github.com/cuemby/ccp" +
      "-sdk/gen/go/search/v1alpha1\242\002\003PPX\252\002\017Sear" +
      "ch.V1Alpha1\312\002\017Search\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_search_v1alpha1_SearchItem_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_search_v1alpha1_SearchItem_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_search_v1alpha1_SearchItem_descriptor,
        new java.lang.String[] { "ObjectId", "Type", "Name", "OrgId", "Description", "Metadata", "Data", });
    internal_static_search_v1alpha1_SearchItem_DataEntry_descriptor =
      internal_static_search_v1alpha1_SearchItem_descriptor.getNestedTypes().get(0);
    internal_static_search_v1alpha1_SearchItem_DataEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_search_v1alpha1_SearchItem_DataEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
