<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.ListProvidersResponse</code>
 */
class ListProvidersResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .source.v1alpha1.Provider providers = 1 [json_name = "providers"];</code>
     */
    private $providers;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Source\V1alpha1\Provider[]|\Google\Protobuf\Internal\RepeatedField $providers
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .source.v1alpha1.Provider providers = 1 [json_name = "providers"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProviders()
    {
        return $this->providers;
    }

    /**
     * Generated from protobuf field <code>repeated .source.v1alpha1.Provider providers = 1 [json_name = "providers"];</code>
     * @param \Source\V1alpha1\Provider[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProviders($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Source\V1alpha1\Provider::class);
        $this->providers = $arr;

        return $this;
    }

}
