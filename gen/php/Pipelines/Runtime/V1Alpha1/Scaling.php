<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.Scaling</code>
 */
class Scaling extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string cpu_rule = 1 [json_name = "cpuRule"];</code>
     */
    protected $cpu_rule = '';
    /**
     * Generated from protobuf field <code>string cool_down_period = 2 [json_name = "coolDownPeriod"];</code>
     */
    protected $cool_down_period = '';
    /**
     * Generated from protobuf field <code>string polling_interval = 3 [json_name = "pollingInterval"];</code>
     */
    protected $polling_interval = '';
    /**
     * Generated from protobuf field <code>string min_replica = 4 [json_name = "minReplica"];</code>
     */
    protected $min_replica = '';
    /**
     * Generated from protobuf field <code>string max_replica = 5 [json_name = "maxReplica"];</code>
     */
    protected $max_replica = '';
    /**
     * Generated from protobuf field <code>string memory_rule = 6 [json_name = "memoryRule"];</code>
     */
    protected $memory_rule = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $cpu_rule
     *     @type string $cool_down_period
     *     @type string $polling_interval
     *     @type string $min_replica
     *     @type string $max_replica
     *     @type string $memory_rule
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\Runtime::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string cpu_rule = 1 [json_name = "cpuRule"];</code>
     * @return string
     */
    public function getCpuRule()
    {
        return $this->cpu_rule;
    }

    /**
     * Generated from protobuf field <code>string cpu_rule = 1 [json_name = "cpuRule"];</code>
     * @param string $var
     * @return $this
     */
    public function setCpuRule($var)
    {
        GPBUtil::checkString($var, True);
        $this->cpu_rule = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string cool_down_period = 2 [json_name = "coolDownPeriod"];</code>
     * @return string
     */
    public function getCoolDownPeriod()
    {
        return $this->cool_down_period;
    }

    /**
     * Generated from protobuf field <code>string cool_down_period = 2 [json_name = "coolDownPeriod"];</code>
     * @param string $var
     * @return $this
     */
    public function setCoolDownPeriod($var)
    {
        GPBUtil::checkString($var, True);
        $this->cool_down_period = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string polling_interval = 3 [json_name = "pollingInterval"];</code>
     * @return string
     */
    public function getPollingInterval()
    {
        return $this->polling_interval;
    }

    /**
     * Generated from protobuf field <code>string polling_interval = 3 [json_name = "pollingInterval"];</code>
     * @param string $var
     * @return $this
     */
    public function setPollingInterval($var)
    {
        GPBUtil::checkString($var, True);
        $this->polling_interval = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string min_replica = 4 [json_name = "minReplica"];</code>
     * @return string
     */
    public function getMinReplica()
    {
        return $this->min_replica;
    }

    /**
     * Generated from protobuf field <code>string min_replica = 4 [json_name = "minReplica"];</code>
     * @param string $var
     * @return $this
     */
    public function setMinReplica($var)
    {
        GPBUtil::checkString($var, True);
        $this->min_replica = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string max_replica = 5 [json_name = "maxReplica"];</code>
     * @return string
     */
    public function getMaxReplica()
    {
        return $this->max_replica;
    }

    /**
     * Generated from protobuf field <code>string max_replica = 5 [json_name = "maxReplica"];</code>
     * @param string $var
     * @return $this
     */
    public function setMaxReplica($var)
    {
        GPBUtil::checkString($var, True);
        $this->max_replica = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string memory_rule = 6 [json_name = "memoryRule"];</code>
     * @return string
     */
    public function getMemoryRule()
    {
        return $this->memory_rule;
    }

    /**
     * Generated from protobuf field <code>string memory_rule = 6 [json_name = "memoryRule"];</code>
     * @param string $var
     * @return $this
     */
    public function setMemoryRule($var)
    {
        GPBUtil::checkString($var, True);
        $this->memory_rule = $var;

        return $this;
    }

}
