<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/autoscaling/v1alpha1/autoscaling_api.proto

namespace Performance\Autoscaling\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.autoscaling.v1alpha1.CreateAutoscalingRequest</code>
 */
class CreateAutoscalingRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     */
    protected $autoscaling = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Performance\Autoscaling\V1Alpha1\Autoscaling $autoscaling
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Autoscaling\V1Alpha1\AutoscalingApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     * @return \Performance\Autoscaling\V1Alpha1\Autoscaling|null
     */
    public function getAutoscaling()
    {
        return $this->autoscaling;
    }

    public function hasAutoscaling()
    {
        return isset($this->autoscaling);
    }

    public function clearAutoscaling()
    {
        unset($this->autoscaling);
    }

    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.Autoscaling autoscaling = 1 [json_name = "autoscaling"];</code>
     * @param \Performance\Autoscaling\V1Alpha1\Autoscaling $var
     * @return $this
     */
    public function setAutoscaling($var)
    {
        GPBUtil::checkMessage($var, \Performance\Autoscaling\V1Alpha1\Autoscaling::class);
        $this->autoscaling = $var;

        return $this;
    }

}

