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
      "ogsResponse\022\030\n\007success\030\001 \001(\010R\007success\"\220\001" +
      "\n\003Log\022\022\n\004date\030\001 \001(\003R\004date\022\020\n\003log\030\002 \001(\tR\003" +
      "log\022L\n\nkubernetes\030\003 \001(\0132,.performance.lo" +
      "gs.v1alpha1.LogKuebrnetesInfoR\nkubernete" +
      "s\022\025\n\006log_id\030\004 \001(\tR\005logId\"\366\005\n\021LogKuebrnet" +
      "esInfo\022\031\n\010pod_name\030\001 \001(\tR\007podName\022%\n\016nam" +
      "espace_name\030\002 \001(\tR\rnamespaceName\022\025\n\006pod_" +
      "id\030\003 \001(\tR\005podId\022P\n\006labels\030\004 \003(\01328.perfor" +
      "mance.logs.v1alpha1.LogKuebrnetesInfo.La" +
      "belsEntryR\006labels\022_\n\013annotations\030\005 \003(\0132=" +
      ".performance.logs.v1alpha1.LogKuebrnetes" +
      "Info.AnnotationsEntryR\013annotations\022\022\n\004ho" +
      "st\030\006 \001(\tR\004host\022%\n\016container_name\030\007 \001(\tR\r" +
      "containerName\022\033\n\tdocker_id\030\010 \001(\tR\010docker" +
      "Id\022%\n\016container_hash\030\n \001(\tR\rcontainerHas" +
      "h\022\'\n\017container_image\030\013 \001(\tR\016containerIma" +
      "ge\022\035\n\nowner_name\030\014 \001(\tR\townerName\0220\n\024own" +
      "er_kubernetes_uid\030\r \001(\tR\022ownerKubernetes" +
      "Uid\022\035\n\nowner_kind\030\016 \001(\tR\townerKind\022*\n\021ow" +
      "ner_api_version\030\017 \001(\tR\017ownerApiVersion\022\026" +
      "\n\006status\030\020 \001(\tR\006status\0329\n\013LabelsEntry\022\020\n" +
      "\003key\030\001 \001(\tR\003key\022\024\n\005value\030\002 \001(\tR\005value:\0028" +
      "\001\032>\n\020AnnotationsEntry\022\020\n\003key\030\001 \001(\tR\003key\022" +
      "\024\n\005value\030\002 \001(\tR\005value:\0028\0012\200\001\n\023LogsAgentA" +
      "PIService\022i\n\010SaveLogs\022*.performance.logs" +
      ".v1alpha1.SaveLogsRequest\032+.performance." +
      "logs.v1alpha1.SaveLogsResponse\"\000(\0010\001B\246\001\n" +
      "#io.cuemby.performance.logs.v1alpha1B\021Lo" +
      "gsAgentApiProtoP\001Z,github.com/performanc" +
      "e-grpc-sdk/logsv1alpha1\242\002\003PFX\252\002\031Performa" +
      "nce.Logs.V1Alpha1\312\002\031Performance\\Logs\\V1A" +
      "lpha1b\006proto3"
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
        new java.lang.String[] { "Date", "Log", "Kubernetes", "LogId", });
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_performance_logs_v1alpha1_LogKuebrnetesInfo_descriptor,
        new java.lang.String[] { "PodName", "NamespaceName", "PodId", "Labels", "Annotations", "Host", "ContainerName", "DockerId", "ContainerHash", "ContainerImage", "OwnerName", "OwnerKubernetesUid", "OwnerKind", "OwnerApiVersion", "Status", });
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
