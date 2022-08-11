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
     * Generated from protobuf field <code>double result = 1 [json_name = "result"];</code>
     */
    protected $result = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type float $result
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Metrics\V1Alpha1\MetricsApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>double result = 1 [json_name = "result"];</code>
     * @return float
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Generated from protobuf field <code>double result = 1 [json_name = "result"];</code>
     * @param float $var
     * @return $this
     */
    public function setResult($var)
    {
        GPBUtil::checkDouble($var);
        $this->result = $var;

        return $this;
    }

}

