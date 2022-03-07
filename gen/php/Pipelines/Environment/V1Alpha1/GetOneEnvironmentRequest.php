<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment_api.proto

namespace Pipelines\Environment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.environment.v1alpha1.GetOneEnvironmentRequest</code>
 */
class GetOneEnvironmentRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string environment_id = 1 [json_name = "environmentId"];</code>
     */
    protected $environment_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $environment_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Environment\V1Alpha1\EnvironmentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string environment_id = 1 [json_name = "environmentId"];</code>
     * @return string
     */
    public function getEnvironmentId()
    {
        return $this->environment_id;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 1 [json_name = "environmentId"];</code>
     * @param string $var
     * @return $this
     */
    public function setEnvironmentId($var)
    {
        GPBUtil::checkString($var, True);
        $this->environment_id = $var;

        return $this;
    }

}

