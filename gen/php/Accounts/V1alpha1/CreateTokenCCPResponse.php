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
     * Generated from protobuf field <code>string error = 4 [json_name = "error"];</code>
     */
    protected $error = '';
    /**
     *tiempo de expiracion fma
     *
     * Generated from protobuf field <code>uint32 time_expiration_mfa = 5 [json_name = "timeExpirationMfa"];</code>
     */
    protected $time_expiration_mfa = 0;
    /**
     * Generated from protobuf field <code>string user_id = 6 [json_name = "userId"];</code>
     */
    protected $user_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $token_ccp
     *     @type string $msg
     *     @type string $error
     *     @type int $time_expiration_mfa
     *          tiempo de expiracion fma
     *     @type string $user_id
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

    /**
     * Generated from protobuf field <code>string error = 4 [json_name = "error"];</code>
     * @return string
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Generated from protobuf field <code>string error = 4 [json_name = "error"];</code>
     * @param string $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkString($var, True);
        $this->error = $var;

        return $this;
    }

    /**
     *tiempo de expiracion fma
     *
     * Generated from protobuf field <code>uint32 time_expiration_mfa = 5 [json_name = "timeExpirationMfa"];</code>
     * @return int
     */
    public function getTimeExpirationMfa()
    {
        return $this->time_expiration_mfa;
    }

    /**
     *tiempo de expiracion fma
     *
     * Generated from protobuf field <code>uint32 time_expiration_mfa = 5 [json_name = "timeExpirationMfa"];</code>
     * @param int $var
     * @return $this
     */
    public function setTimeExpirationMfa($var)
    {
        GPBUtil::checkUint32($var);
        $this->time_expiration_mfa = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_id = 6 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 6 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

}

