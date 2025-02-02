<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment_api.proto

namespace Pipelines\Environment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.environment.v1alpha1.ListEnvironmentResponse</code>
 */
class ListEnvironmentResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     */
    private $environment;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pipelines\Environment\V1Alpha1\Environment[]|\Google\Protobuf\Internal\RepeatedField $environment
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Environment\V1Alpha1\EnvironmentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getEnvironment()
    {
        return $this->environment;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.environment.v1alpha1.Environment environment = 1 [json_name = "environment"];</code>
     * @param \Pipelines\Environment\V1Alpha1\Environment[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setEnvironment($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Environment\V1Alpha1\Environment::class);
        $this->environment = $arr;

        return $this;
    }

}

