<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault_api.proto

namespace Vault\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vault.v1alpha1.GetSecretRequest</code>
 */
class GetSecretRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string environment = 1 [json_name = "environment"];</code>
     */
    protected $environment = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $environment
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vault\V1Alpha1\VaultApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string environment = 1 [json_name = "environment"];</code>
     * @return string
     */
    public function getEnvironment()
    {
        return $this->environment;
    }

    /**
     * Generated from protobuf field <code>string environment = 1 [json_name = "environment"];</code>
     * @param string $var
     * @return $this
     */
    public function setEnvironment($var)
    {
        GPBUtil::checkString($var, True);
        $this->environment = $var;

        return $this;
    }

}

