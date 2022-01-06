<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.CheckOrganizationUserRequest</code>
 */
class CheckOrganizationUserRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>string permission = 2 [json_name = "permission"];</code>
     */
    protected $permission = '';
    /**
     * Generated from protobuf field <code>uint32 user_id = 3 [json_name = "userId"];</code>
     */
    protected $user_id = 0;
    /**
     * Generated from protobuf field <code>string uid_user_admin = 4 [json_name = "uidUserAdmin"];</code>
     */
    protected $uid_user_admin = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $organization_id
     *     @type string $permission
     *     @type int $user_id
     *     @type string $uid_user_admin
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string permission = 2 [json_name = "permission"];</code>
     * @return string
     */
    public function getPermission()
    {
        return $this->permission;
    }

    /**
     * Generated from protobuf field <code>string permission = 2 [json_name = "permission"];</code>
     * @param string $var
     * @return $this
     */
    public function setPermission($var)
    {
        GPBUtil::checkString($var, True);
        $this->permission = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 user_id = 3 [json_name = "userId"];</code>
     * @return int
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>uint32 user_id = 3 [json_name = "userId"];</code>
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
     * Generated from protobuf field <code>string uid_user_admin = 4 [json_name = "uidUserAdmin"];</code>
     * @return string
     */
    public function getUidUserAdmin()
    {
        return $this->uid_user_admin;
    }

    /**
     * Generated from protobuf field <code>string uid_user_admin = 4 [json_name = "uidUserAdmin"];</code>
     * @param string $var
     * @return $this
     */
    public function setUidUserAdmin($var)
    {
        GPBUtil::checkString($var, True);
        $this->uid_user_admin = $var;

        return $this;
    }

}

