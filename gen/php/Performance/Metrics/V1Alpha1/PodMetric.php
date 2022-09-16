<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics_agent_api.proto

namespace Performance\Metrics\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.metrics.v1alpha1.PodMetric</code>
 */
class PodMetric extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string namespace = 1 [json_name = "namespace"];</code>
     */
    protected $namespace = '';
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string owner_name = 3 [json_name = "ownerName"];</code>
     */
    protected $owner_name = '';
    /**
     * Generated from protobuf field <code>string owner_kubernetes_uid = 4 [json_name = "ownerKubernetesUid"];</code>
     */
    protected $owner_kubernetes_uid = '';
    /**
     * Generated from protobuf field <code>string owner_kind = 5 [json_name = "ownerKind"];</code>
     */
    protected $owner_kind = '';
    /**
     * Generated from protobuf field <code>string owner_api_version = 6 [json_name = "ownerApiVersion"];</code>
     */
    protected $owner_api_version = '';
    /**
     * Generated from protobuf field <code>string container_name = 7 [json_name = "containerName"];</code>
     */
    protected $container_name = '';
    /**
     * Generated from protobuf field <code>string status = 8 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>bool is_controlled = 9 [json_name = "isControlled"];</code>
     */
    protected $is_controlled = false;
    /**
     * Generated from protobuf field <code>int32 restart_count = 10 [json_name = "restartCount"];</code>
     */
    protected $restart_count = 0;
    /**
     * Generated from protobuf field <code>bool is_ready = 11 [json_name = "isReady"];</code>
     */
    protected $is_ready = false;
    /**
     * Generated from protobuf field <code>string cluster_name = 12 [json_name = "clusterName"];</code>
     */
    protected $cluster_name = '';
    /**
     * Generated from protobuf field <code>int64 usage_cpu = 13 [json_name = "usageCpu"];</code>
     */
    protected $usage_cpu = 0;
    /**
     * Generated from protobuf field <code>int64 usage_memory = 14 [json_name = "usageMemory"];</code>
     */
    protected $usage_memory = 0;
    /**
     * Generated from protobuf field <code>int64 usage_storage = 15 [json_name = "usageStorage"];</code>
     */
    protected $usage_storage = 0;
    /**
     * Generated from protobuf field <code>int64 request_cpu = 16 [json_name = "requestCpu"];</code>
     */
    protected $request_cpu = 0;
    /**
     * Generated from protobuf field <code>int64 request_memory = 17 [json_name = "requestMemory"];</code>
     */
    protected $request_memory = 0;
    /**
     * Generated from protobuf field <code>int64 limit_cpu = 18 [json_name = "limitCpu"];</code>
     */
    protected $limit_cpu = 0;
    /**
     * Generated from protobuf field <code>int64 limit_memory = 19 [json_name = "limitMemory"];</code>
     */
    protected $limit_memory = 0;
    /**
     * Generated from protobuf field <code>repeated string volumes = 20 [json_name = "volumes"];</code>
     */
    private $volumes;
    /**
     * Generated from protobuf field <code>map<string, string> annotations = 21 [json_name = "annotations"];</code>
     */
    private $annotations;
    /**
     * Generated from protobuf field <code>map<string, string> labels = 22 [json_name = "labels"];</code>
     */
    private $labels;
    /**
     * Generated from protobuf field <code>string external_ip = 23 [json_name = "externalIp"];</code>
     */
    protected $external_ip = '';
    /**
     * Generated from protobuf field <code>string internal_ip = 24 [json_name = "internalIp"];</code>
     */
    protected $internal_ip = '';
    /**
     * Generated from protobuf field <code>int64 allocatable_storage_ephemeral = 25 [json_name = "allocatableStorageEphemeral"];</code>
     */
    protected $allocatable_storage_ephemeral = 0;
    /**
     * Generated from protobuf field <code>int64 allocatable_storage = 26 [json_name = "allocatableStorage"];</code>
     */
    protected $allocatable_storage = 0;
    /**
     * Generated from protobuf field <code>string node_name = 27 [json_name = "nodeName"];</code>
     */
    protected $node_name = '';
    /**
     * Generated from protobuf field <code>string kubernetes_uid = 28 [json_name = "kubernetesUid"];</code>
     */
    protected $kubernetes_uid = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $namespace
     *     @type string $name
     *     @type string $owner_name
     *     @type string $owner_kubernetes_uid
     *     @type string $owner_kind
     *     @type string $owner_api_version
     *     @type string $container_name
     *     @type string $status
     *     @type bool $is_controlled
     *     @type int $restart_count
     *     @type bool $is_ready
     *     @type string $cluster_name
     *     @type int|string $usage_cpu
     *     @type int|string $usage_memory
     *     @type int|string $usage_storage
     *     @type int|string $request_cpu
     *     @type int|string $request_memory
     *     @type int|string $limit_cpu
     *     @type int|string $limit_memory
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $volumes
     *     @type array|\Google\Protobuf\Internal\MapField $annotations
     *     @type array|\Google\Protobuf\Internal\MapField $labels
     *     @type string $external_ip
     *     @type string $internal_ip
     *     @type int|string $allocatable_storage_ephemeral
     *     @type int|string $allocatable_storage
     *     @type string $node_name
     *     @type string $kubernetes_uid
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Metrics\V1Alpha1\MetricsAgentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string namespace = 1 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * Generated from protobuf field <code>string namespace = 1 [json_name = "namespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->namespace = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string owner_name = 3 [json_name = "ownerName"];</code>
     * @return string
     */
    public function getOwnerName()
    {
        return $this->owner_name;
    }

    /**
     * Generated from protobuf field <code>string owner_name = 3 [json_name = "ownerName"];</code>
     * @param string $var
     * @return $this
     */
    public function setOwnerName($var)
    {
        GPBUtil::checkString($var, True);
        $this->owner_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string owner_kubernetes_uid = 4 [json_name = "ownerKubernetesUid"];</code>
     * @return string
     */
    public function getOwnerKubernetesUid()
    {
        return $this->owner_kubernetes_uid;
    }

    /**
     * Generated from protobuf field <code>string owner_kubernetes_uid = 4 [json_name = "ownerKubernetesUid"];</code>
     * @param string $var
     * @return $this
     */
    public function setOwnerKubernetesUid($var)
    {
        GPBUtil::checkString($var, True);
        $this->owner_kubernetes_uid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string owner_kind = 5 [json_name = "ownerKind"];</code>
     * @return string
     */
    public function getOwnerKind()
    {
        return $this->owner_kind;
    }

    /**
     * Generated from protobuf field <code>string owner_kind = 5 [json_name = "ownerKind"];</code>
     * @param string $var
     * @return $this
     */
    public function setOwnerKind($var)
    {
        GPBUtil::checkString($var, True);
        $this->owner_kind = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string owner_api_version = 6 [json_name = "ownerApiVersion"];</code>
     * @return string
     */
    public function getOwnerApiVersion()
    {
        return $this->owner_api_version;
    }

    /**
     * Generated from protobuf field <code>string owner_api_version = 6 [json_name = "ownerApiVersion"];</code>
     * @param string $var
     * @return $this
     */
    public function setOwnerApiVersion($var)
    {
        GPBUtil::checkString($var, True);
        $this->owner_api_version = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string container_name = 7 [json_name = "containerName"];</code>
     * @return string
     */
    public function getContainerName()
    {
        return $this->container_name;
    }

    /**
     * Generated from protobuf field <code>string container_name = 7 [json_name = "containerName"];</code>
     * @param string $var
     * @return $this
     */
    public function setContainerName($var)
    {
        GPBUtil::checkString($var, True);
        $this->container_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 8 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 8 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_controlled = 9 [json_name = "isControlled"];</code>
     * @return bool
     */
    public function getIsControlled()
    {
        return $this->is_controlled;
    }

    /**
     * Generated from protobuf field <code>bool is_controlled = 9 [json_name = "isControlled"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsControlled($var)
    {
        GPBUtil::checkBool($var);
        $this->is_controlled = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 restart_count = 10 [json_name = "restartCount"];</code>
     * @return int
     */
    public function getRestartCount()
    {
        return $this->restart_count;
    }

    /**
     * Generated from protobuf field <code>int32 restart_count = 10 [json_name = "restartCount"];</code>
     * @param int $var
     * @return $this
     */
    public function setRestartCount($var)
    {
        GPBUtil::checkInt32($var);
        $this->restart_count = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_ready = 11 [json_name = "isReady"];</code>
     * @return bool
     */
    public function getIsReady()
    {
        return $this->is_ready;
    }

    /**
     * Generated from protobuf field <code>bool is_ready = 11 [json_name = "isReady"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsReady($var)
    {
        GPBUtil::checkBool($var);
        $this->is_ready = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string cluster_name = 12 [json_name = "clusterName"];</code>
     * @return string
     */
    public function getClusterName()
    {
        return $this->cluster_name;
    }

    /**
     * Generated from protobuf field <code>string cluster_name = 12 [json_name = "clusterName"];</code>
     * @param string $var
     * @return $this
     */
    public function setClusterName($var)
    {
        GPBUtil::checkString($var, True);
        $this->cluster_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 usage_cpu = 13 [json_name = "usageCpu"];</code>
     * @return int|string
     */
    public function getUsageCpu()
    {
        return $this->usage_cpu;
    }

    /**
     * Generated from protobuf field <code>int64 usage_cpu = 13 [json_name = "usageCpu"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setUsageCpu($var)
    {
        GPBUtil::checkInt64($var);
        $this->usage_cpu = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 usage_memory = 14 [json_name = "usageMemory"];</code>
     * @return int|string
     */
    public function getUsageMemory()
    {
        return $this->usage_memory;
    }

    /**
     * Generated from protobuf field <code>int64 usage_memory = 14 [json_name = "usageMemory"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setUsageMemory($var)
    {
        GPBUtil::checkInt64($var);
        $this->usage_memory = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 usage_storage = 15 [json_name = "usageStorage"];</code>
     * @return int|string
     */
    public function getUsageStorage()
    {
        return $this->usage_storage;
    }

    /**
     * Generated from protobuf field <code>int64 usage_storage = 15 [json_name = "usageStorage"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setUsageStorage($var)
    {
        GPBUtil::checkInt64($var);
        $this->usage_storage = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 request_cpu = 16 [json_name = "requestCpu"];</code>
     * @return int|string
     */
    public function getRequestCpu()
    {
        return $this->request_cpu;
    }

    /**
     * Generated from protobuf field <code>int64 request_cpu = 16 [json_name = "requestCpu"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setRequestCpu($var)
    {
        GPBUtil::checkInt64($var);
        $this->request_cpu = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 request_memory = 17 [json_name = "requestMemory"];</code>
     * @return int|string
     */
    public function getRequestMemory()
    {
        return $this->request_memory;
    }

    /**
     * Generated from protobuf field <code>int64 request_memory = 17 [json_name = "requestMemory"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setRequestMemory($var)
    {
        GPBUtil::checkInt64($var);
        $this->request_memory = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 limit_cpu = 18 [json_name = "limitCpu"];</code>
     * @return int|string
     */
    public function getLimitCpu()
    {
        return $this->limit_cpu;
    }

    /**
     * Generated from protobuf field <code>int64 limit_cpu = 18 [json_name = "limitCpu"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setLimitCpu($var)
    {
        GPBUtil::checkInt64($var);
        $this->limit_cpu = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 limit_memory = 19 [json_name = "limitMemory"];</code>
     * @return int|string
     */
    public function getLimitMemory()
    {
        return $this->limit_memory;
    }

    /**
     * Generated from protobuf field <code>int64 limit_memory = 19 [json_name = "limitMemory"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setLimitMemory($var)
    {
        GPBUtil::checkInt64($var);
        $this->limit_memory = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string volumes = 20 [json_name = "volumes"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getVolumes()
    {
        return $this->volumes;
    }

    /**
     * Generated from protobuf field <code>repeated string volumes = 20 [json_name = "volumes"];</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setVolumes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->volumes = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> annotations = 21 [json_name = "annotations"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getAnnotations()
    {
        return $this->annotations;
    }

    /**
     * Generated from protobuf field <code>map<string, string> annotations = 21 [json_name = "annotations"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setAnnotations($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->annotations = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> labels = 22 [json_name = "labels"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getLabels()
    {
        return $this->labels;
    }

    /**
     * Generated from protobuf field <code>map<string, string> labels = 22 [json_name = "labels"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setLabels($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->labels = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string external_ip = 23 [json_name = "externalIp"];</code>
     * @return string
     */
    public function getExternalIp()
    {
        return $this->external_ip;
    }

    /**
     * Generated from protobuf field <code>string external_ip = 23 [json_name = "externalIp"];</code>
     * @param string $var
     * @return $this
     */
    public function setExternalIp($var)
    {
        GPBUtil::checkString($var, True);
        $this->external_ip = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string internal_ip = 24 [json_name = "internalIp"];</code>
     * @return string
     */
    public function getInternalIp()
    {
        return $this->internal_ip;
    }

    /**
     * Generated from protobuf field <code>string internal_ip = 24 [json_name = "internalIp"];</code>
     * @param string $var
     * @return $this
     */
    public function setInternalIp($var)
    {
        GPBUtil::checkString($var, True);
        $this->internal_ip = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 allocatable_storage_ephemeral = 25 [json_name = "allocatableStorageEphemeral"];</code>
     * @return int|string
     */
    public function getAllocatableStorageEphemeral()
    {
        return $this->allocatable_storage_ephemeral;
    }

    /**
     * Generated from protobuf field <code>int64 allocatable_storage_ephemeral = 25 [json_name = "allocatableStorageEphemeral"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setAllocatableStorageEphemeral($var)
    {
        GPBUtil::checkInt64($var);
        $this->allocatable_storage_ephemeral = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 allocatable_storage = 26 [json_name = "allocatableStorage"];</code>
     * @return int|string
     */
    public function getAllocatableStorage()
    {
        return $this->allocatable_storage;
    }

    /**
     * Generated from protobuf field <code>int64 allocatable_storage = 26 [json_name = "allocatableStorage"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setAllocatableStorage($var)
    {
        GPBUtil::checkInt64($var);
        $this->allocatable_storage = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string node_name = 27 [json_name = "nodeName"];</code>
     * @return string
     */
    public function getNodeName()
    {
        return $this->node_name;
    }

    /**
     * Generated from protobuf field <code>string node_name = 27 [json_name = "nodeName"];</code>
     * @param string $var
     * @return $this
     */
    public function setNodeName($var)
    {
        GPBUtil::checkString($var, True);
        $this->node_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string kubernetes_uid = 28 [json_name = "kubernetesUid"];</code>
     * @return string
     */
    public function getKubernetesUid()
    {
        return $this->kubernetes_uid;
    }

    /**
     * Generated from protobuf field <code>string kubernetes_uid = 28 [json_name = "kubernetesUid"];</code>
     * @param string $var
     * @return $this
     */
    public function setKubernetesUid($var)
    {
        GPBUtil::checkString($var, True);
        $this->kubernetes_uid = $var;

        return $this;
    }

}

