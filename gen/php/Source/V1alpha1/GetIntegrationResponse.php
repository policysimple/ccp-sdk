<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.GetIntegrationResponse</code>
 */
class GetIntegrationResponse extends \Google\Protobuf\Internal\Message
{
    /**
     *repeated Repository repositories = 2;
     *
     * Generated from protobuf field <code>.source.v1alpha1.Integration integration = 1 [json_name = "integration"];</code>
     */
    protected $integration = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Source\V1alpha1\Integration $integration
     *          repeated Repository repositories = 2;
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     *repeated Repository repositories = 2;
     *
     * Generated from protobuf field <code>.source.v1alpha1.Integration integration = 1 [json_name = "integration"];</code>
     * @return \Source\V1alpha1\Integration|null
     */
    public function getIntegration()
    {
        return $this->integration;
    }

    public function hasIntegration()
    {
        return isset($this->integration);
    }

    public function clearIntegration()
    {
        unset($this->integration);
    }

    /**
     *repeated Repository repositories = 2;
     *
     * Generated from protobuf field <code>.source.v1alpha1.Integration integration = 1 [json_name = "integration"];</code>
     * @param \Source\V1alpha1\Integration $var
     * @return $this
     */
    public function setIntegration($var)
    {
        GPBUtil::checkMessage($var, \Source\V1alpha1\Integration::class);
        $this->integration = $var;

        return $this;
    }

}

