<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime_api.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.GetRuntimeRequest</code>
 */
class GetRuntimeRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     */
    protected $runtime_id = '';
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
     *     @type string $runtime_id
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\RuntimeApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @return string
     */
    public function getRuntimeId()
    {
        return $this->runtime_id;
    }

    /**
     * Generated from protobuf field <code>string runtime_id = 1 [json_name = "runtimeId"];</code>
     * @param string $var
     * @return $this
     */
    public function setRuntimeId($var)
    {
        GPBUtil::checkString($var, True);
        $this->runtime_id = $var;

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

