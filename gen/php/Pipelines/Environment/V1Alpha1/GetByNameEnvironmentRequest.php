<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment_api.proto

namespace Pipelines\Environment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.environment.v1alpha1.GetByNameEnvironmentRequest</code>
 */
class GetByNameEnvironmentRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    protected $environment = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pipelines\Environment\V1Alpha1\Environment $environment
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

}

