<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.Limit</code>
 */
class Limit extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string cpu = 1 [json_name = "cpu"];</code>
     */
    protected $cpu = '';
    /**
     * Generated from protobuf field <code>string ram = 2 [json_name = "ram"];</code>
     */
    protected $ram = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $cpu
     *     @type string $ram
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\Runtime::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string cpu = 1 [json_name = "cpu"];</code>
     * @return string
     */
    public function getCpu()
    {
        return $this->cpu;
    }

    /**
     * Generated from protobuf field <code>string cpu = 1 [json_name = "cpu"];</code>
     * @param string $var
     * @return $this
     */
    public function setCpu($var)
    {
        GPBUtil::checkString($var, True);
        $this->cpu = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string ram = 2 [json_name = "ram"];</code>
     * @return string
     */
    public function getRam()
    {
        return $this->ram;
    }

    /**
     * Generated from protobuf field <code>string ram = 2 [json_name = "ram"];</code>
     * @param string $var
     * @return $this
     */
    public function setRam($var)
    {
        GPBUtil::checkString($var, True);
        $this->ram = $var;

        return $this;
    }

}
