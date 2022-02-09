<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment_api.proto

namespace Pipelines\Environment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.environment.v1alpha1.GetOneEnvironmentResponse</code>
 */
class GetOneEnvironmentResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    protected $environment = null;
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
     *     @type \Pipelines\Environment\V1Alpha1\Environment $environment
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Environment\V1Alpha1\EnvironmentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     * @return \Pipelines\Environment\V1Alpha1\Environment|null
     */
    public function getEnvironment()
    {
        return $this->environment;
    }

    public function hasEnvironment()
    {
        return isset($this->environment);
    }

    public function clearEnvironment()
    {
        unset($this->environment);
    }

    /**
     * Generated from protobuf field <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     * @param \Pipelines\Environment\V1Alpha1\Environment $var
     * @return $this
     */
    public function setEnvironment($var)
    {
        GPBUtil::checkMessage($var, \Pipelines\Environment\V1Alpha1\Environment::class);
        $this->environment = $var;

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
