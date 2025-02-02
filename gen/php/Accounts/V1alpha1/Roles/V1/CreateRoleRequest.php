<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/roles/roles.proto

namespace Accounts\V1alpha1\Roles\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.roles.v1.CreateRoleRequest</code>
 */
class CreateRoleRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string description = 2 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string project_id = 3 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string organization_id = 4 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string type_permission = 5 [json_name = "typePermission"];</code>
     */
    protected $type_permission = '';
    /**
     * Generated from protobuf field <code>repeated uint32 permission_ids = 6 [json_name = "permissionIds"];</code>
     */
    private $permission_ids;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $description
     *     @type string $project_id
     *     @type string $organization_id
     *     @type string $type_permission
     *     @type int[]|\Google\Protobuf\Internal\RepeatedField $permission_ids
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Roles\Roles::initOnce();
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
     * Generated from protobuf field <code>string description = 2 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 2 [json_name = "description"];</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string project_id = 3 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 3 [json_name = "projectId"];</code>
     * @param string $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 4 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 4 [json_name = "organizationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type_permission = 5 [json_name = "typePermission"];</code>
     * @return string
     */
    public function getTypePermission()
    {
        return $this->type_permission;
    }

    /**
     * Generated from protobuf field <code>string type_permission = 5 [json_name = "typePermission"];</code>
     * @param string $var
     * @return $this
     */
    public function setTypePermission($var)
    {
        GPBUtil::checkString($var, True);
        $this->type_permission = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 permission_ids = 6 [json_name = "permissionIds"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPermissionIds()
    {
        return $this->permission_ids;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 permission_ids = 6 [json_name = "permissionIds"];</code>
     * @param int[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPermissionIds($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::UINT32);
        $this->permission_ids = $arr;

        return $this;
    }

}

