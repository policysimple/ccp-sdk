<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/metrics/v1alpha1/metrics_api.proto

namespace Performance\Metrics\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.metrics.v1alpha1.GetTektonMetricsResponse</code>
 */
class GetTektonMetricsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .performance.metrics.v1alpha1.TektonMetricItem results = 1 [json_name = "results"];</code>
     */
    private $results;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Performance\Metrics\V1Alpha1\TektonMetricItem[]|\Google\Protobuf\Internal\RepeatedField $results
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Metrics\V1Alpha1\MetricsApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .performance.metrics.v1alpha1.TektonMetricItem results = 1 [json_name = "results"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getResults()
    {
        return $this->results;
    }

    /**
     * Generated from protobuf field <code>repeated .performance.metrics.v1alpha1.TektonMetricItem results = 1 [json_name = "results"];</code>
     * @param \Performance\Metrics\V1Alpha1\TektonMetricItem[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setResults($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Performance\Metrics\V1Alpha1\TektonMetricItem::class);
        $this->results = $arr;

        return $this;
    }

}

