<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/autoscaling/v1alpha1/autoscaling_agent_api.proto

namespace Performance\Autoscaling\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.autoscaling.v1alpha1.AgentListAutoscalingRequest</code>
 */
class AgentListAutoscalingRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
     */
    private $autoscalings;
    /**
     * Generated from protobuf field <code>string origin = 2 [json_name = "origin"];</code>
     */
    protected $origin = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Performance\Autoscaling\V1Alpha1\Autoscaling[]|\Google\Protobuf\Internal\RepeatedField $autoscalings
     *     @type string $origin
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Autoscaling\V1Alpha1\AutoscalingAgentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAutoscalings()
    {
        return $this->autoscalings;
    }

    /**
     * Generated from protobuf field <code>repeated .performance.autoscaling.v1alpha1.Autoscaling autoscalings = 1 [json_name = "autoscalings"];</code>
     * @param \Performance\Autoscaling\V1Alpha1\Autoscaling[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAutoscalings($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Performance\Autoscaling\V1Alpha1\Autoscaling::class);
        $this->autoscalings = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string origin = 2 [json_name = "origin"];</code>
     * @return string
     */
    public function getOrigin()
    {
        return $this->origin;
    }

    /**
     * Generated from protobuf field <code>string origin = 2 [json_name = "origin"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrigin($var)
    {
        GPBUtil::checkString($var, True);
        $this->origin = $var;

        return $this;
    }

}

