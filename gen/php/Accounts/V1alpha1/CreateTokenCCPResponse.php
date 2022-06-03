<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.CreateTokenCCPResponse</code>
 */
class CreateTokenCCPResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string token_ccp = 1 [json_name = "tokenCcp"];</code>
     */
    protected $token_ccp = '';
    /**
     * Generated from protobuf field <code>string msg = 2 [json_name = "msg"];</code>
     */
    protected $msg = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $token_ccp
     *     @type string $msg
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string token_ccp = 1 [json_name = "tokenCcp"];</code>
     * @return string
     */
    public function getTokenCcp()
    {
        return $this->token_ccp;
    }

    /**
     * Generated from protobuf field <code>string token_ccp = 1 [json_name = "tokenCcp"];</code>
     * @param string $var
     * @return $this
     */
    public function setTokenCcp($var)
    {
        GPBUtil::checkString($var, True);
        $this->token_ccp = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string msg = 2 [json_name = "msg"];</code>
     * @return string
     */
    public function getMsg()
    {
        return $this->msg;
    }

    /**
     * Generated from protobuf field <code>string msg = 2 [json_name = "msg"];</code>
     * @param string $var
     * @return $this
     */
    public function setMsg($var)
    {
        GPBUtil::checkString($var, True);
        $this->msg = $var;

        return $this;
    }

}

