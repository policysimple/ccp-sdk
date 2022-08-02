<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime_api.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.CreateRuntimeRequest</code>
 */
class CreateRuntimeRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     */
    protected $runtime = null;
    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     */
    protected $status = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pipelines\Runtime\V1Alpha1\Runtime $runtime
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\RuntimeApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     * @return \Pipelines\Runtime\V1Alpha1\Runtime|null
     */
    public function getRuntime()
    {
        return $this->runtime;
    }

    public function hasRuntime()
    {
        return isset($this->runtime);
    }

    public function clearRuntime()
    {
        unset($this->runtime);
    }

    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.Runtime runtime = 1 [json_name = "runtime"];</code>
     * @param \Pipelines\Runtime\V1Alpha1\Runtime $var
     * @return $this
     */
    public function setRuntime($var)
    {
        GPBUtil::checkMessage($var, \Pipelines\Runtime\V1Alpha1\Runtime::class);
        $this->runtime = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

}

