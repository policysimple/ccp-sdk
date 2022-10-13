<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault_api.proto

namespace Vault\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vault.v1alpha1.GetTokenIntegrationsResponse</code>
 */
class GetTokenIntegrationsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string token = 1 [json_name = "token"];</code>
     */
    protected $token = '';
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
     *     @type string $token
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vault\V1Alpha1\VaultApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string token = 1 [json_name = "token"];</code>
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Generated from protobuf field <code>string token = 1 [json_name = "token"];</code>
     * @param string $var
     * @return $this
     */
    public function setToken($var)
    {
        GPBUtil::checkString($var, True);
        $this->token = $var;

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

