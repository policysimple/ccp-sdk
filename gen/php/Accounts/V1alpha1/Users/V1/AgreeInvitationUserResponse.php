<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/users/users.proto

namespace Accounts\V1alpha1\Users\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.users.v1.AgreeInvitationUserResponse</code>
 */
class AgreeInvitationUserResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string result = 1 [json_name = "result"];</code>
     */
    protected $result = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $result
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Users\Users::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string result = 1 [json_name = "result"];</code>
     * @return string
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Generated from protobuf field <code>string result = 1 [json_name = "result"];</code>
     * @param string $var
     * @return $this
     */
    public function setResult($var)
    {
        GPBUtil::checkString($var, True);
        $this->result = $var;

        return $this;
    }

}

