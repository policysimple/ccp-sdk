<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/roles/roles.proto

namespace Accounts\V1alpha1\Roles\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Responses
 *
 * Generated from protobuf message <code>accounts.v1alpha1.roles.v1.ListRolesResponse</code>
 */
class ListRolesResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 1 [json_name = "roles"];</code>
     */
    private $roles;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Role[]|\Google\Protobuf\Internal\RepeatedField $roles
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Roles\Roles::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 1 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 1 [json_name = "roles"];</code>
     * @param \Accounts\V1alpha1\Role[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRoles($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Role::class);
        $this->roles = $arr;

        return $this;
    }

}

