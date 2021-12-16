<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.ListIntegrationsResponse</code>
 */
class ListIntegrationsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .source.v1alpha1.Integration integrations = 1 [json_name = "integrations"];</code>
     */
    private $integrations;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Source\V1alpha1\Integration[]|\Google\Protobuf\Internal\RepeatedField $integrations
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .source.v1alpha1.Integration integrations = 1 [json_name = "integrations"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getIntegrations()
    {
        return $this->integrations;
    }

    /**
     * Generated from protobuf field <code>repeated .source.v1alpha1.Integration integrations = 1 [json_name = "integrations"];</code>
     * @param \Source\V1alpha1\Integration[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setIntegrations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Source\V1alpha1\Integration::class);
        $this->integrations = $arr;

        return $this;
    }

}

