// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/logs/v1alpha1/logs_agent_api.proto

package io.cuemby.performance.logs.v1alpha1;

public final class LogsAgentApiProto {
  private LogsAgentApiProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_SaveLogsRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_SaveLogsRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_SaveLogsRequest_MetaEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_SaveLogsRequest_MetaEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_SaveLogsResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_SaveLogsResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_Log_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_Log_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_LabelsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_LabelsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_AnnotationsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_AnnotationsEntry_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n.performance/logs/v1alpha1/logs_agent_a" +
      "pi.proto\022\031performance.logs.v1alpha1\032$per" +
      "formance/logs/v1alpha1/logs.proto\"\353\001\n\017Sa" +
      "veLogsRequest\022!\n\014cluster_name\030\001 \001(\tR\013clu" +
      "sterName\022H\n\004meta\030\002 \003(\01324.performance.log" +
      "s.v1alpha1.SaveLogsRequest.MetaEntryR\004me" +
      "ta\0222\n\004logs\030\003 \003(\0132\036.performance.logs.v1al" +
      "pha1.LogR\004logs\0327\n\tMetaEntry\022\020\n\003key\030\001 \001(\t" +
      "R\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\",\n\020SaveL" +
      "ogsResponse\022\030\n\007success\030\001 \001(\010R\007success\"y\n" +
      "\003Log\022\022\n\004date\030\001 \001(\001R\004date\022\020\n\003log\030\002 \001(\tR\003l" +
      "og\022L\n\nkubernetes\030\003 \001(\0132,.performance.log" +
      "s.v1alpha1.LogKuebrnetesInfoR\nkubernetes" +
      "\"\302\004\n\021LogKuebrnetesInfo\022\031\n\010pod_name\030\001 \001(\t" +
      "R\007podName\022%\n\016namespace_name\030\002 \001(\tR\rnames" +
      "paceName\022\025\n\006pod_id\030\003 \001(\tR\005podId\022P\n\006label" +
      "s\030\004 \003(\01328.performance.logs.v1alpha1.LogK" +
      "uebrnetesInfo.LabelsEntryR\006labels\022_\n\013ann" +
      "otations\030\005 \003(\0132=.performance.logs.v1alph" +
      "a1.LogKuebrnetesInfo.AnnotationsEntryR\013a" +
      "nnotations\022\022\n\004host\030\006 \001(\tR\004host\022%\n\016contai" +
      "ner_name\030\007 \001(\tR\rcontainerName\022\033\n\tdocker_" +
      "id\030\010 \001(\tR\010dockerId\022%\n\016container_hash\030\n \001" +
      "(\tR\rcontainerHash\022\'\n\017container_image\030\013 \001" +
      "(\tR\016containerImage\0329\n\013LabelsEntry\022\020\n\003key" +
      "\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028\001\032>\n" +
      "\020AnnotationsEntry\022\020\n\003key\030\001 \001(\tR\003key\022\024\n\005v" +
      "alue\030\002 \001(\tR\005value:\0028\0012\200\001\n\023LogsAgentAPISe" +
      "rvice\022i\n\010SaveLogs\022*.performance.logs.v1a" +
      "lpha1.SaveLogsRequest\032+.performance.logs" +
      ".v1alpha1.SaveLogsResponse\"\000(\0010\001B\246\001\n#io." +
      "cuemby.performance.logs.v1alpha1B\021LogsAg" +
      "entApiProtoP\001Z,github.com/performance-gr" +
      "pc-sdk/logsv1alpha1\242\002\003PFX\252\002\031Performance." +
      "Logs.V1Alpha1\312\002\031Performance\\Logs\\V1Alpha" +
      "1b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.cuemby.performance.logs.v1alpha1.LogsProto.getDescriptor(),
        });
    internal_static_performance_logs_v1alpha1_SaveLogsRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_performance_logs_v1alpha1_SaveLogsRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_SaveLogsRequest_descriptor,
        new java.lang.String[] { "ClusterName", "Meta", "Logs", });
    internal_static_performance_logs_v1alpha1_SaveLogsRequest_MetaEntry_descriptor =
      internal_static_performance_logs_v1alpha1_SaveLogsRequest_descriptor.getNestedTypes().get(0);
    internal_static_performance_logs_v1alpha1_SaveLogsRequest_MetaEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_SaveLogsRequest_MetaEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_performance_logs_v1alpha1_SaveLogsResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_performance_logs_v1alpha1_SaveLogsResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_SaveLogsResponse_descriptor,
        new java.lang.String[] { "Success", });
    internal_static_performance_logs_v1alpha1_Log_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_performance_logs_v1alpha1_Log_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_Log_descriptor,
        new java.lang.String[] { "Date", "Log", "Kubernetes", });
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor,
        new java.lang.String[] { "PodName", "NamespaceName", "PodId", "Labels", "Annotations", "Host", "ContainerName", "DockerId", "ContainerHash", "ContainerImage", });
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_LabelsEntry_descriptor =
      internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor.getNestedTypes().get(0);
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_LabelsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_LabelsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_AnnotationsEntry_descriptor =
      internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor.getNestedTypes().get(1);
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_AnnotationsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_AnnotationsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    io.cuemby.performance.logs.v1alpha1.LogsProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
