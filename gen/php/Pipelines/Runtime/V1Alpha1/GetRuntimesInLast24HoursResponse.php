<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime_api.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.GetRuntimesInLast24HoursResponse</code>
 */
class GetRuntimesInLast24HoursResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.RuntimeList runtime_list = 1 [json_name = "runtimeList"];</code>
     */
    protected $runtime_list = null;
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
     *     @type \Pipelines\Runtime\V1Alpha1\RuntimeList $runtime_list
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\RuntimeApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.RuntimeList runtime_list = 1 [json_name = "runtimeList"];</code>
     * @return \Pipelines\Runtime\V1Alpha1\RuntimeList|null
     */
    public function getRuntimeList()
    {
        return $this->runtime_list;
    }

    public function hasRuntimeList()
    {
        return isset($this->runtime_list);
    }

    public function clearRuntimeList()
    {
        unset($this->runtime_list);
    }

    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.RuntimeList runtime_list = 1 [json_name = "runtimeList"];</code>
     * @param \Pipelines\Runtime\V1Alpha1\RuntimeList $var
     * @return $this
     */
    public function setRuntimeList($var)
    {
        GPBUtil::checkMessage($var, \Pipelines\Runtime\V1Alpha1\RuntimeList::class);
        $this->runtime_list = $var;

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

