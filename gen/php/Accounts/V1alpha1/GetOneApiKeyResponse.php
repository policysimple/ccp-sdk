<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.GetOneApiKeyResponse</code>
 */
class GetOneApiKeyResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string api_key = 2 [json_name = "apiKey"];</code>
     */
    protected $api_key = '';
    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string user_id = 4 [json_name = "userId"];</code>
     */
    protected $user_id = '';
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 5 [json_name = "roles"];</code>
     */
    private $roles;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 6 [json_name = "permissions"];</code>
     */
    private $permissions;
    /**
     * Generated from protobuf field <code>bool is_active = 8 [json_name = "isActive"];</code>
     */
    protected $is_active = false;
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Project project = 9 [json_name = "project"];</code>
     */
    protected $project = null;
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Organization organization = 10 [json_name = "organization"];</code>
     */
    protected $organization = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $api_key
     *     @type string $name
     *     @type string $user_id
     *     @type \Accounts\V1alpha1\Rol[]|\Google\Protobuf\Internal\RepeatedField $roles
     *     @type \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $permissions
     *     @type bool $is_active
     *     @type \Accounts\V1alpha1\Project $project
     *     @type \Accounts\V1alpha1\Organization $organization
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
     * Generated from protobuf field <code>string api_key = 2 [json_name = "apiKey"];</code>
     * @return string
     */
    public function getApiKey()
    {
        return $this->api_key;
    }

    /**
     * Generated from protobuf field <code>string api_key = 2 [json_name = "apiKey"];</code>
     * @param string $var
     * @return $this
     */
    public function setApiKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->api_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>string user_id = 4 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 4 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 5 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 5 [json_name = "roles"];</code>
     * @param \Accounts\V1alpha1\Rol[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRoles($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Rol::class);
        $this->roles = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 6 [json_name = "permissions"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPermissions()
    {
        return $this->permissions;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 6 [json_name = "permissions"];</code>
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
     * Generated from protobuf field <code>bool is_active = 8 [json_name = "isActive"];</code>
     * @return bool
     */
    public function getIsActive()
    {
        return $this->is_active;
    }

    /**
     * Generated from protobuf field <code>bool is_active = 8 [json_name = "isActive"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsActive($var)
    {
        GPBUtil::checkBool($var);
        $this->is_active = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Project project = 9 [json_name = "project"];</code>
     * @return \Accounts\V1alpha1\Project|null
     */
    public function getProject()
    {
        return $this->project;
    }

    public function hasProject()
    {
        return isset($this->project);
    }

    public function clearProject()
    {
        unset($this->project);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Project project = 9 [json_name = "project"];</code>
     * @param \Accounts\V1alpha1\Project $var
     * @return $this
     */
    public function setProject($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Project::class);
        $this->project = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Organization organization = 10 [json_name = "organization"];</code>
     * @return \Accounts\V1alpha1\Organization|null
     */
    public function getOrganization()
    {
        return $this->organization;
    }

    public function hasOrganization()
    {
        return isset($this->organization);
    }

    public function clearOrganization()
    {
        unset($this->organization);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Organization organization = 10 [json_name = "organization"];</code>
     * @param \Accounts\V1alpha1\Organization $var
     * @return $this
     */
    public function setOrganization($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Organization::class);
        $this->organization = $var;

        return $this;
    }

}

