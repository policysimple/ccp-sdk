<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault_api.proto

namespace Vault\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vault.v1alpha1.SaveTokenFirebaseRequest</code>
 */
class SaveTokenFirebaseRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.vault.v1alpha1.FirebaseSecret secret = 1 [json_name = "secret"];</code>
     */
    protected $secret = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Vault\V1Alpha1\FirebaseSecret $secret
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vault\V1Alpha1\VaultApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.FirebaseSecret secret = 1 [json_name = "secret"];</code>
     * @return \Vault\V1Alpha1\FirebaseSecret|null
     */
    public function getSecret()
    {
        return $this->secret;
    }

    public function hasSecret()
    {
        return isset($this->secret);
    }

    public function clearSecret()
    {
        unset($this->secret);
    }

    /**
     * Generated from protobuf field <code>.vault.v1alpha1.FirebaseSecret secret = 1 [json_name = "secret"];</code>
     * @param \Vault\V1Alpha1\FirebaseSecret $var
     * @return $this
     */
    public function setSecret($var)
    {
        GPBUtil::checkMessage($var, \Vault\V1Alpha1\FirebaseSecret::class);
        $this->secret = $var;

        return $this;
    }

}
