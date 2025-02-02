<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.UpdateIntegrationRequest</code>
 */
class UpdateIntegrationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>.source.v1alpha1.CreateIntegrationRequest integrations = 2 [json_name = "integrations"];</code>
     */
    protected $integrations = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type \Source\V1alpha1\CreateIntegrationRequest $integrations
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.source.v1alpha1.CreateIntegrationRequest integrations = 2 [json_name = "integrations"];</code>
     * @return \Source\V1alpha1\CreateIntegrationRequest|null
     */
    public function getIntegrations()
    {
        return $this->integrations;
    }

    public function hasIntegrations()
    {
        return isset($this->integrations);
    }

    public function clearIntegrations()
    {
        unset($this->integrations);
    }

    /**
     * Generated from protobuf field <code>.source.v1alpha1.CreateIntegrationRequest integrations = 2 [json_name = "integrations"];</code>
     * @param \Source\V1alpha1\CreateIntegrationRequest $var
     * @return $this
     */
    public function setIntegrations($var)
    {
        GPBUtil::checkMessage($var, \Source\V1alpha1\CreateIntegrationRequest::class);
        $this->integrations = $var;

        return $this;
    }

}

