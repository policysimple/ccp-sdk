<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.CreateIntegrationWithExternalProviderResponse</code>
 */
class CreateIntegrationWithExternalProviderResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     */
    protected $msg = '';
    /**
     * Generated from protobuf field <code>.source.v1alpha1.Integration integration = 2 [json_name = "integration"];</code>
     */
    protected $integration = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $msg
     *     @type \Source\V1alpha1\Integration $integration
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     * @return string
     */
    public function getMsg()
    {
        return $this->msg;
    }

    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     * @param string $var
     * @return $this
     */
    public function setMsg($var)
    {
        GPBUtil::checkString($var, True);
        $this->msg = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.source.v1alpha1.Integration integration = 2 [json_name = "integration"];</code>
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
     * Generated from protobuf field <code>.source.v1alpha1.Integration integration = 2 [json_name = "integration"];</code>
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
