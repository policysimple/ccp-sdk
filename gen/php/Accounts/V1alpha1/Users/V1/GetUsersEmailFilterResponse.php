<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/users/users.proto

namespace Accounts\V1alpha1\Users\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.users.v1.GetUsersEmailFilterResponse</code>
 */
class GetUsersEmailFilterResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.users.v1.UserList users = 1 [json_name = "users"];</code>
     */
    private $users;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Users\V1\UserList[]|\Google\Protobuf\Internal\RepeatedField $users
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Users\Users::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.users.v1.UserList users = 1 [json_name = "users"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.users.v1.UserList users = 1 [json_name = "users"];</code>
     * @param \Accounts\V1alpha1\Users\V1\UserList[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setUsers($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Users\V1\UserList::class);
        $this->users = $arr;

        return $this;
    }

}
