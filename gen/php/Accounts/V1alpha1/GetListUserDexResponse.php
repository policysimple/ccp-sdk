<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.GetListUserDexResponse</code>
 */
class GetListUserDexResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.UsersDex users_dex = 1 [json_name = "usersDex"];</code>
     */
    private $users_dex;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\UsersDex[]|\Google\Protobuf\Internal\RepeatedField $users_dex
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.UsersDex users_dex = 1 [json_name = "usersDex"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getUsersDex()
    {
        return $this->users_dex;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.UsersDex users_dex = 1 [json_name = "usersDex"];</code>
     * @param \Accounts\V1alpha1\UsersDex[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setUsersDex($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\UsersDex::class);
        $this->users_dex = $arr;

        return $this;
    }

}
