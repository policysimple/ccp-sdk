// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/autoscaling/v1alpha1/autoscaling_api.proto

package io.cuemby.performance.autoscaling.v1alpha1;

public final class AutoscalingApiProto {
  private AutoscalingApiProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_GetAutoscalingRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_GetAutoscalingRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_GetAutoscalingResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_GetAutoscalingResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_ListAutoscalingRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_ListAutoscalingRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_autoscaling_v1alpha1_ListAutoscalingResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_autoscaling_v1alpha1_ListAutoscalingResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n6performance/autoscaling/v1alpha1/autos" +
      "caling_api.proto\022 performance.autoscalin" +
      "g.v1alpha1\0322performance/autoscaling/v1al" +
      "pha1/autoscaling.proto\"k\n\030CreateAutoscal" +
      "ingRequest\022O\n\013autoscaling\030\001 \001(\0132-.perfor" +
      "mance.autoscaling.v1alpha1.AutoscalingR\013" +
      "autoscaling\"\204\001\n\031CreateAutoscalingRespons" +
      "e\022O\n\013autoscaling\030\001 \001(\0132-.performance.aut" +
      "oscaling.v1alpha1.AutoscalingR\013autoscali" +
      "ng\022\026\n\006status\030\002 \001(\tR\006status\"k\n\030UpdateAuto" +
      "scalingRequest\022O\n\013autoscaling\030\001 \001(\0132-.pe" +
      "rformance.autoscaling.v1alpha1.Autoscali" +
      "ngR\013autoscaling\"\204\001\n\031UpdateAutoscalingRes" +
      "ponse\022O\n\013autoscaling\030\001 \001(\0132-.performance" +
      ".autoscaling.v1alpha1.AutoscalingR\013autos" +
      "caling\022\026\n\006status\030\002 \001(\tR\006status\"b\n\030Delete" +
      "AutoscalingRequest\022F\n\010metadata\030\001 \001(\0132*.p" +
      "erformance.autoscaling.v1alpha1.Metadata" +
      "R\010metadata\"{\n\031DeleteAutoscalingResponse\022" +
      "F\n\010metadata\030\001 \001(\0132*.performance.autoscal" +
      "ing.v1alpha1.MetadataR\010metadata\022\026\n\006statu" +
      "s\030\002 \001(\tR\006status\"_\n\025GetAutoscalingRequest" +
      "\022F\n\010metadata\030\001 \001(\0132*.performance.autosca" +
      "ling.v1alpha1.MetadataR\010metadata\"\201\001\n\026Get" +
      "AutoscalingResponse\022O\n\013autoscaling\030\001 \001(\013" +
      "2-.performance.autoscaling.v1alpha1.Auto" +
      "scalingR\013autoscaling\022\026\n\006status\030\002 \001(\tR\006st" +
      "atus\"`\n\026ListAutoscalingRequest\022F\n\010metada" +
      "ta\030\001 \001(\0132*.performance.autoscaling.v1alp" +
      "ha1.MetadataR\010metadata\"l\n\027ListAutoscalin" +
      "gResponse\022Q\n\014autoscalings\030\001 \003(\0132-.perfor" +
      "mance.autoscaling.v1alpha1.AutoscalingR\014" +
      "autoscalings2\335\005\n\025AutoscalingAPIService\022\216" +
      "\001\n\021CreateAutoscaling\022:.performance.autos" +
      "caling.v1alpha1.CreateAutoscalingRequest" +
      "\032;.performance.autoscaling.v1alpha1.Crea" +
      "teAutoscalingResponse\"\000\022\216\001\n\021UpdateAutosc" +
      "aling\022:.performance.autoscaling.v1alpha1" +
      ".UpdateAutoscalingRequest\032;.performance." +
      "autoscaling.v1alpha1.UpdateAutoscalingRe" +
      "sponse\"\000\022\216\001\n\021DeleteAutoscaling\022:.perform" +
      "ance.autoscaling.v1alpha1.DeleteAutoscal" +
      "ingRequest\032;.performance.autoscaling.v1a" +
      "lpha1.DeleteAutoscalingResponse\"\000\022\205\001\n\016Ge" +
      "tAutoscaling\0227.performance.autoscaling.v" +
      "1alpha1.GetAutoscalingRequest\0328.performa" +
      "nce.autoscaling.v1alpha1.GetAutoscalingR" +
      "esponse\"\000\022\210\001\n\017ListAutoscaling\0228.performa" +
      "nce.autoscaling.v1alpha1.ListAutoscaling" +
      "Request\0329.performance.autoscaling.v1alph" +
      "a1.ListAutoscalingResponse\"\000B\304\001\n*io.cuem" +
      "by.performance.autoscaling.v1alpha1B\023Aut" +
      "oscalingApiProtoP\001Z3github.com/performan" +
      "ce-grpc-sdk/autoscalingv1alpha1\242\002\003PFX\252\002 " +
      "Performance.Autoscaling.V1Alpha1\312\002 Perfo" +
      "rmance\\Autoscaling\\V1Alpha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.getDescriptor(),
        });
    internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingRequest_descriptor,
        new java.lang.String[] { "Autoscaling", });
    internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_CreateAutoscalingResponse_descriptor,
        new java.lang.String[] { "Autoscaling", "Status", });
    internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest_descriptor,
        new java.lang.String[] { "Autoscaling", });
    internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse_descriptor,
        new java.lang.String[] { "Autoscaling", "Status", });
    internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest_descriptor,
        new java.lang.String[] { "Metadata", });
    internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse_descriptor,
        new java.lang.String[] { "Metadata", "Status", });
    internal_static_performance_autoscaling_v1alpha1_GetAutoscalingRequest_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_performance_autoscaling_v1alpha1_GetAutoscalingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_GetAutoscalingRequest_descriptor,
        new java.lang.String[] { "Metadata", });
    internal_static_performance_autoscaling_v1alpha1_GetAutoscalingResponse_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_performance_autoscaling_v1alpha1_GetAutoscalingResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_GetAutoscalingResponse_descriptor,
        new java.lang.String[] { "Autoscaling", "Status", });
    internal_static_performance_autoscaling_v1alpha1_ListAutoscalingRequest_descriptor =
      getDescriptor().getMessageTypes().get(8);
    internal_static_performance_autoscaling_v1alpha1_ListAutoscalingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_ListAutoscalingRequest_descriptor,
        new java.lang.String[] { "Metadata", });
    internal_static_performance_autoscaling_v1alpha1_ListAutoscalingResponse_descriptor =
      getDescriptor().getMessageTypes().get(9);
    internal_static_performance_autoscaling_v1alpha1_ListAutoscalingResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_autoscaling_v1alpha1_ListAutoscalingResponse_descriptor,
        new java.lang.String[] { "Autoscalings", });
    io.cuemby.performance.autoscaling.v1alpha1.AutoscalingProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
