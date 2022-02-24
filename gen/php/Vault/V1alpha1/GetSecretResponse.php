<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault_api.proto

namespace Vault\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vault.v1alpha1.GetSecretResponse</code>
 */
class GetSecretResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretData data = 1 [json_name = "data"];</code>
     */
    protected $data = null;
    /**
     * Generated from protobuf field <code>string error = 2 [json_name = "error"];</code>
     */
    protected $error = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Vault\V1alpha1\SecretData $data
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vault\V1Alpha1\VaultApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretData data = 1 [json_name = "data"];</code>
     * @return \Vault\V1alpha1\SecretData|null
     */
    public function getData()
    {
        return $this->data;
    }

    public function hasData()
    {
        return isset($this->data);
    }

    public function clearData()
    {
        unset($this->data);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.SecretData data = 1 [json_name = "data"];</code>
     * @param \Vault\V1alpha1\SecretData $var
     * @return $this
     */
    public function setData($var)
    {
        GPBUtil::checkMessage($var, \Vault\V1alpha1\SecretData::class);
        $this->data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string error = 2 [json_name = "error"];</code>
     * @return string
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Generated from protobuf field <code>string error = 2 [json_name = "error"];</code>
     * @param string $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkString($var, True);
        $this->error = $var;

        return $this;
    }

}

