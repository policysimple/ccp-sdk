<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics_agent_api.proto

namespace Performance\Metrics\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.metrics.v1alpha1.Metric</code>
 */
class Metric extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes metric = 1 [json_name = "metric"];</code>
     */
    protected $metric = '';
    /**
     * Generated from protobuf field <code>string cluster = 2 [json_name = "cluster"];</code>
     */
    protected $cluster = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $metric
     *     @type string $cluster
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Metrics\V1Alpha1\MetricsAgentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bytes metric = 1 [json_name = "metric"];</code>
     * @return string
     */
    public function getMetric()
    {
        return $this->metric;
    }

    /**
     * Generated from protobuf field <code>bytes metric = 1 [json_name = "metric"];</code>
     * @param string $var
     * @return $this
     */
    public function setMetric($var)
    {
        GPBUtil::checkString($var, False);
        $this->metric = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string cluster = 2 [json_name = "cluster"];</code>
     * @return string
     */
    public function getCluster()
    {
        return $this->cluster;
    }

    /**
     * Generated from protobuf field <code>string cluster = 2 [json_name = "cluster"];</code>
     * @param string $var
     * @return $this
     */
    public function setCluster($var)
    {
        GPBUtil::checkString($var, True);
        $this->cluster = $var;

        return $this;
    }

}

