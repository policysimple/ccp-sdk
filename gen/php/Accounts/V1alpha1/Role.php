<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.Role</code>
 */
class Role extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>uint32 organization_id = 4 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 5 [json_name = "permissions"];</code>
     */
    private $permissions;
    /**
     * Generated from protobuf field <code>bool is_admin = 6 [json_name = "isAdmin"];</code>
     */
    protected $is_admin = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $name
     *     @type int $project_id
     *     @type int $organization_id
     *     @type \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $permissions
     *     @type bool $is_admin
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkUint32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkUint32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 4 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 4 [json_name = "organizationId"];</code>
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
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 5 [json_name = "permissions"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPermissions()
    {
        return $this->permissions;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 5 [json_name = "permissions"];</code>
     * @param \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPermissions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Permission::class);
        $this->permissions = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_admin = 6 [json_name = "isAdmin"];</code>
     * @return bool
     */
    public function getIsAdmin()
    {
        return $this->is_admin;
    }

    /**
     * Generated from protobuf field <code>bool is_admin = 6 [json_name = "isAdmin"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsAdmin($var)
    {
        GPBUtil::checkBool($var);
        $this->is_admin = $var;

        return $this;
    }

}

