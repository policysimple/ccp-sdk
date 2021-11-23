// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: performance/metrics/v1alpha1/metrics_agent_api.proto

package io.cuemby.performance.metrics.v1alpha1;

public interface PodMetricOrBuilder extends
    // @@protoc_insertion_point(interface_extends:performance.metrics.v1alpha1.PodMetric)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string namespace = 1 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  java.lang.String getNamespace();
  /**
   * <code>string namespace = 1 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  com.google.protobuf.ByteString
      getNamespaceBytes();

  /**
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>string owner_name = 3 [json_name = "ownerName"];</code>
   * @return The ownerName.
   */
  java.lang.String getOwnerName();
  /**
   * <code>string owner_name = 3 [json_name = "ownerName"];</code>
   * @return The bytes for ownerName.
   */
  com.google.protobuf.ByteString
      getOwnerNameBytes();

  /**
   * <code>string owner_kubernetes_uid = 4 [json_name = "ownerKubernetesUid"];</code>
   * @return The ownerKubernetesUid.
   */
  java.lang.String getOwnerKubernetesUid();
  /**
   * <code>string owner_kubernetes_uid = 4 [json_name = "ownerKubernetesUid"];</code>
   * @return The bytes for ownerKubernetesUid.
   */
  com.google.protobuf.ByteString
      getOwnerKubernetesUidBytes();

  /**
   * <code>string owner_kind = 5 [json_name = "ownerKind"];</code>
   * @return The ownerKind.
   */
  java.lang.String getOwnerKind();
  /**
   * <code>string owner_kind = 5 [json_name = "ownerKind"];</code>
   * @return The bytes for ownerKind.
   */
  com.google.protobuf.ByteString
      getOwnerKindBytes();

  /**
   * <code>string owner_api_version = 6 [json_name = "ownerApiVersion"];</code>
   * @return The ownerApiVersion.
   */
  java.lang.String getOwnerApiVersion();
  /**
   * <code>string owner_api_version = 6 [json_name = "ownerApiVersion"];</code>
   * @return The bytes for ownerApiVersion.
   */
  com.google.protobuf.ByteString
      getOwnerApiVersionBytes();

  /**
   * <code>string container_name = 7 [json_name = "containerName"];</code>
   * @return The containerName.
   */
  java.lang.String getContainerName();
  /**
   * <code>string container_name = 7 [json_name = "containerName"];</code>
   * @return The bytes for containerName.
   */
  com.google.protobuf.ByteString
      getContainerNameBytes();

  /**
   * <code>string status = 8 [json_name = "status"];</code>
   * @return The status.
   */
  java.lang.String getStatus();
  /**
   * <code>string status = 8 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  com.google.protobuf.ByteString
      getStatusBytes();

  /**
   * <code>bool is_controlled = 9 [json_name = "isControlled"];</code>
   * @return The isControlled.
   */
  boolean getIsControlled();

  /**
   * <code>int32 restart_count = 10 [json_name = "restartCount"];</code>
   * @return The restartCount.
   */
  int getRestartCount();

  /**
   * <code>bool is_ready = 11 [json_name = "isReady"];</code>
   * @return The isReady.
   */
  boolean getIsReady();

  /**
   * <code>string cluster_name = 12 [json_name = "clusterName"];</code>
   * @return The clusterName.
   */
  java.lang.String getClusterName();
  /**
   * <code>string cluster_name = 12 [json_name = "clusterName"];</code>
   * @return The bytes for clusterName.
   */
  com.google.protobuf.ByteString
      getClusterNameBytes();

  /**
   * <code>int64 usage_cpu = 13 [json_name = "usageCpu"];</code>
   * @return The usageCpu.
   */
  long getUsageCpu();

  /**
   * <code>int64 usage_memory = 14 [json_name = "usageMemory"];</code>
   * @return The usageMemory.
   */
  long getUsageMemory();

  /**
   * <code>int64 usage_storage = 15 [json_name = "usageStorage"];</code>
   * @return The usageStorage.
   */
  long getUsageStorage();

  /**
   * <code>int64 request_cpu = 16 [json_name = "requestCpu"];</code>
   * @return The requestCpu.
   */
  long getRequestCpu();

  /**
   * <code>int64 request_memory = 17 [json_name = "requestMemory"];</code>
   * @return The requestMemory.
   */
  long getRequestMemory();

  /**
   * <code>int64 limit_cpu = 18 [json_name = "limitCpu"];</code>
   * @return The limitCpu.
   */
  long getLimitCpu();

  /**
   * <code>int64 limit_memory = 19 [json_name = "limitMemory"];</code>
   * @return The limitMemory.
   */
  long getLimitMemory();

  /**
   * <code>repeated string volumes = 20 [json_name = "volumes"];</code>
   * @return A list containing the volumes.
   */
  java.util.List<java.lang.String>
      getVolumesList();
  /**
   * <code>repeated string volumes = 20 [json_name = "volumes"];</code>
   * @return The count of volumes.
   */
  int getVolumesCount();
  /**
   * <code>repeated string volumes = 20 [json_name = "volumes"];</code>
   * @param index The index of the element to return.
   * @return The volumes at the given index.
   */
  java.lang.String getVolumes(int index);
  /**
   * <code>repeated string volumes = 20 [json_name = "volumes"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the volumes at the given index.
   */
  com.google.protobuf.ByteString
      getVolumesBytes(int index);

  /**
   * <code>map&lt;string, string&gt; annotations = 21 [json_name = "annotations"];</code>
   */
  int getAnnotationsCount();
  /**
   * <code>map&lt;string, string&gt; annotations = 21 [json_name = "annotations"];</code>
   */
  boolean containsAnnotations(
      java.lang.String key);
  /**
   * Use {@link #getAnnotationsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getAnnotations();
  /**
   * <code>map&lt;string, string&gt; annotations = 21 [json_name = "annotations"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getAnnotationsMap();
  /**
   * <code>map&lt;string, string&gt; annotations = 21 [json_name = "annotations"];</code>
   */

  java.lang.String getAnnotationsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; annotations = 21 [json_name = "annotations"];</code>
   */

  java.lang.String getAnnotationsOrThrow(
      java.lang.String key);

  /**
   * <code>map&lt;string, string&gt; labels = 22 [json_name = "labels"];</code>
   */
  int getLabelsCount();
  /**
   * <code>map&lt;string, string&gt; labels = 22 [json_name = "labels"];</code>
   */
  boolean containsLabels(
      java.lang.String key);
  /**
   * Use {@link #getLabelsMap()} instead.
   */
  @java.lang.Deprecated
  java.util.Map<java.lang.String, java.lang.String>
  getLabels();
  /**
   * <code>map&lt;string, string&gt; labels = 22 [json_name = "labels"];</code>
   */
  java.util.Map<java.lang.String, java.lang.String>
  getLabelsMap();
  /**
   * <code>map&lt;string, string&gt; labels = 22 [json_name = "labels"];</code>
   */

  java.lang.String getLabelsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue);
  /**
   * <code>map&lt;string, string&gt; labels = 22 [json_name = "labels"];</code>
   */

  java.lang.String getLabelsOrThrow(
      java.lang.String key);

  /**
   * <code>string external_ip = 23 [json_name = "externalIp"];</code>
   * @return The externalIp.
   */
  java.lang.String getExternalIp();
  /**
   * <code>string external_ip = 23 [json_name = "externalIp"];</code>
   * @return The bytes for externalIp.
   */
  com.google.protobuf.ByteString
      getExternalIpBytes();

  /**
   * <code>string internal_ip = 24 [json_name = "internalIp"];</code>
   * @return The internalIp.
   */
  java.lang.String getInternalIp();
  /**
   * <code>string internal_ip = 24 [json_name = "internalIp"];</code>
   * @return The bytes for internalIp.
   */
  com.google.protobuf.ByteString
      getInternalIpBytes();

  /**
   * <code>int64 allocatable_storage_ephemeral = 25 [json_name = "allocatableStorageEphemeral"];</code>
   * @return The allocatableStorageEphemeral.
   */
  long getAllocatableStorageEphemeral();

  /**
   * <code>int64 allocatable_storage = 26 [json_name = "allocatableStorage"];</code>
   * @return The allocatableStorage.
   */
  long getAllocatableStorage();

  /**
   * <code>string node_name = 27 [json_name = "nodeName"];</code>
   * @return The nodeName.
   */
  java.lang.String getNodeName();
  /**
   * <code>string node_name = 27 [json_name = "nodeName"];</code>
   * @return The bytes for nodeName.
   */
  com.google.protobuf.ByteString
      getNodeNameBytes();

  /**
   * <code>string kubernetes_uid = 28 [json_name = "kubernetesUid"];</code>
   * @return The kubernetesUid.
   */
  java.lang.String getKubernetesUid();
  /**
   * <code>string kubernetes_uid = 28 [json_name = "kubernetesUid"];</code>
   * @return The bytes for kubernetesUid.
   */
  com.google.protobuf.ByteString
      getKubernetesUidBytes();
}