// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/metrics/v1alpha1/metrics.proto

package io.cuemby.performance.metrics.v1alpha1;

public final class MetricsProto {
  private MetricsProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_metrics_v1alpha1_MetricItem_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_metrics_v1alpha1_MetricItem_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n*performance/metrics/v1alpha1/metrics.p" +
      "roto\022\034performance.metrics.v1alpha1\"p\n\nMe" +
      "tricItem\022\022\n\004date\030\001 \001(\tR\004date\022\034\n\tcontaine" +
      "r\030\002 \001(\tR\tcontainer\022\032\n\010resource\030\003 \001(\tR\010re" +
      "source\022\024\n\005value\030\004 \001(\001R\005valueB\255\001\n&io.cuem" +
      "by.performance.metrics.v1alpha1B\014Metrics" +
      "ProtoP\001Z/github.com/performance-grpc-sdk" +
      "/metricsv1alpha1\242\002\003PFX\252\002\034Performance.Met" +
      "rics.V1Alpha1\312\002\034Performance\\Metrics\\V1Al" +
      "pha1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_performance_metrics_v1alpha1_MetricItem_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_performance_metrics_v1alpha1_MetricItem_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_metrics_v1alpha1_MetricItem_descriptor,
        new java.lang.String[] { "Date", "Container", "Resource", "Value", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}