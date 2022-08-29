<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/tokens/tokens.proto

namespace Accounts\V1alpha1\Tokens\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse</code>
 */
class GetOneTokenCCPResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 user_id = 1 [json_name = "userId"];</code>
     */
    protected $user_id = 0;
    /**
     * Generated from protobuf field <code>string token = 2 [json_name = "token"];</code>
     */
    protected $token = '';
    /**
     * Generated from protobuf field <code>string email = 3 [json_name = "email"];</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>string user_id_dex = 4 [json_name = "userIdDex"];</code>
     */
    protected $user_id_dex = '';
    /**
     * Generated from protobuf field <code>string first_name = 5 [json_name = "firstName"];</code>
     */
    protected $first_name = '';
    /**
     * Generated from protobuf field <code>bool email_verified = 6 [json_name = "emailVerified"];</code>
     */
    protected $email_verified = false;
    /**
     * Generated from protobuf field <code>string error = 7 [json_name = "error"];</code>
     */
    protected $error = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $user_id
     *     @type string $token
     *     @type string $email
     *     @type string $user_id_dex
     *     @type string $first_name
     *     @type bool $email_verified
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Tokens\Tokens::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 user_id = 1 [json_name = "userId"];</code>
     * @return int
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>uint32 user_id = 1 [json_name = "userId"];</code>
     * @param int $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkUint32($var);
        $this->user_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string token = 2 [json_name = "token"];</code>
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Generated from protobuf field <code>string token = 2 [json_name = "token"];</code>
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
     * Generated from protobuf field <code>string email = 3 [json_name = "email"];</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 3 [json_name = "email"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->email = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_id_dex = 4 [json_name = "userIdDex"];</code>
     * @return string
     */
    public function getUserIdDex()
    {
        return $this->user_id_dex;
    }

    /**
     * Generated from protobuf field <code>string user_id_dex = 4 [json_name = "userIdDex"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserIdDex($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id_dex = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string first_name = 5 [json_name = "firstName"];</code>
     * @return string
     */
    public function getFirstName()
    {
        return $this->first_name;
    }

    /**
     * Generated from protobuf field <code>string first_name = 5 [json_name = "firstName"];</code>
     * @param string $var
     * @return $this
     */
    public function setFirstName($var)
    {
        GPBUtil::checkString($var, True);
        $this->first_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool email_verified = 6 [json_name = "emailVerified"];</code>
     * @return bool
     */
    public function getEmailVerified()
    {
        return $this->email_verified;
    }

    /**
     * Generated from protobuf field <code>bool email_verified = 6 [json_name = "emailVerified"];</code>
     * @param bool $var
     * @return $this
     */
    public function setEmailVerified($var)
    {
        GPBUtil::checkBool($var);
        $this->email_verified = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string error = 7 [json_name = "error"];</code>
     * @return string
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Generated from protobuf field <code>string error = 7 [json_name = "error"];</code>
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
