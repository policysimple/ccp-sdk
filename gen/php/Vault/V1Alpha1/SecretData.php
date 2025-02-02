<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault.proto

namespace Vault\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>vault.v1alpha1.SecretData</code>
 */
class SecretData extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>map<string, string> data = 1 [json_name = "data"];</code>
     */
    private $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array|\Google\Protobuf\Internal\MapField $data
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Vault\V1Alpha1\Vault::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>map<string, string> data = 1 [json_name = "data"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>map<string, string> data = 1 [json_name = "data"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->data = $arr;

        return $this;
    }

}

