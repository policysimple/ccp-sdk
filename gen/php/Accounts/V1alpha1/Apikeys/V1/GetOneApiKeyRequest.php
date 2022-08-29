<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/apikeys/apikeys.proto

namespace Accounts\V1alpha1\Apikeys\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest</code>
 */
class GetOneApiKeyRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string value_key = 2 [json_name = "valueKey"];</code>
     */
    protected $value_key = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $value_key
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Apikeys\Apikeys::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkUint32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string value_key = 2 [json_name = "valueKey"];</code>
     * @return string
     */
    public function getValueKey()
    {
        return $this->value_key;
    }

    /**
     * Generated from protobuf field <code>string value_key = 2 [json_name = "valueKey"];</code>
     * @param string $var
     * @return $this
     */
    public function setValueKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->value_key = $var;

        return $this;
    }

}
