<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/users/users.proto

namespace Accounts\V1alpha1\Users\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.users.v1.UpdateUserResponse</code>
 */
class UpdateUserResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     */
    protected $msg = '';
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
     *     @type string $msg
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Users\Users::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     * @return string
     */
    public function getMsg()
    {
        return $this->msg;
    }

    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     * @param string $var
     * @return $this
     */
    public function setMsg($var)
    {
        GPBUtil::checkString($var, True);
        $this->msg = $var;

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

