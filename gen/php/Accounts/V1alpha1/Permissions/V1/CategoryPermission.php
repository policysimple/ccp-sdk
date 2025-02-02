<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/permissions/permissions.proto

namespace Accounts\V1alpha1\Permissions\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.permissions.v1.CategoryPermission</code>
 */
class CategoryPermission extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string type = 2 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.permissions.v1.GroupPermission group_permissions = 3 [json_name = "groupPermissions"];</code>
     */
    private $group_permissions;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $type
     *     @type \Accounts\V1alpha1\Permissions\V1\GroupPermission[]|\Google\Protobuf\Internal\RepeatedField $group_permissions
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Permissions\Permissions::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type = 2 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Generated from protobuf field <code>string type = 2 [json_name = "type"];</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.permissions.v1.GroupPermission group_permissions = 3 [json_name = "groupPermissions"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getGroupPermissions()
    {
        return $this->group_permissions;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.permissions.v1.GroupPermission group_permissions = 3 [json_name = "groupPermissions"];</code>
     * @param \Accounts\V1alpha1\Permissions\V1\GroupPermission[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setGroupPermissions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Permissions\V1\GroupPermission::class);
        $this->group_permissions = $arr;

        return $this;
    }

}

