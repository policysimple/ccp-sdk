<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics_agent_api.proto

namespace Performance\Metrics\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.metrics.v1alpha1.SaveMetricsResponse</code>
 */
class SaveMetricsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .performance.metrics.v1alpha1.Metric metrics = 1 [json_name = "metrics"];</code>
     */
    private $metrics;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Performance\Metrics\V1Alpha1\Metric[]|\Google\Protobuf\Internal\RepeatedField $metrics
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Metrics\V1Alpha1\MetricsAgentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .performance.metrics.v1alpha1.Metric metrics = 1 [json_name = "metrics"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getMetrics()
    {
        return $this->metrics;
    }

    /**
     * Generated from protobuf field <code>repeated .performance.metrics.v1alpha1.Metric metrics = 1 [json_name = "metrics"];</code>
     * @param \Performance\Metrics\V1Alpha1\Metric[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setMetrics($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Performance\Metrics\V1Alpha1\Metric::class);
        $this->metrics = $arr;

        return $this;
    }

}

