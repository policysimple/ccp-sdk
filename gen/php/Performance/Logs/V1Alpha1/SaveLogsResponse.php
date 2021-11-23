<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/logs/v1alpha1/logs_agent_api.proto

namespace Performance\Logs\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.logs.v1alpha1.SaveLogsResponse</code>
 */
class SaveLogsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bool success = 1 [json_name = "success"];</code>
     */
    protected $success = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type bool $success
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Logs\V1Alpha1\LogsAgentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bool success = 1 [json_name = "success"];</code>
     * @return bool
     */
    public function getSuccess()
    {
        return $this->success;
    }

    /**
     * Generated from protobuf field <code>bool success = 1 [json_name = "success"];</code>
     * @param bool $var
     * @return $this
     */
    public function setSuccess($var)
    {
        GPBUtil::checkBool($var);
        $this->success = $var;

        return $this;
    }

}
