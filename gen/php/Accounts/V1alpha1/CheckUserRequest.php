<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.CheckUserRequest</code>
 */
class CheckUserRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>uint32 get_organization_from_project = 3 [json_name = "getOrganizationFromProject"];</code>
     */
    protected $get_organization_from_project = 0;
    /**
     * Generated from protobuf field <code>string permission = 4 [json_name = "permission"];</code>
     */
    protected $permission = '';
    /**
     * users
     *
     * Generated from protobuf field <code>string user_id_dex = 5 [json_name = "userIdDex"];</code>
     */
    protected $user_id_dex = '';
    /**
     * Generated from protobuf field <code>string user_id_admin = 6 [json_name = "userIdAdmin"];</code>
     */
    protected $user_id_admin = '';
    /**
     * Generated from protobuf field <code>uint32 user_id = 7 [json_name = "userId"];</code>
     */
    protected $user_id = 0;
    /**
     * Generated from protobuf field <code>string type_permission = 9 [json_name = "typePermission"];</code>
     */
    protected $type_permission = '';
    /**
     * Generated from protobuf field <code>repeated uint32 roles_ids = 10 [json_name = "rolesIds"];</code>
     */
    private $roles_ids;
    /**
     * Generated from protobuf field <code>string api_key_value = 11 [json_name = "apiKeyValue"];</code>
     */
    protected $api_key_value = '';
    /**
     *
     * replace dex by ccp
     *
     * Generated from protobuf field <code>string token_ccp_admin = 12 [json_name = "tokenCcpAdmin"];</code>
     */
    protected $token_ccp_admin = '';
    /**
     * Generated from protobuf field <code>string token_ccp_user_id = 13 [json_name = "tokenCcpUserId"];</code>
     */
    protected $token_ccp_user_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $organization_id
     *     @type int $project_id
     *     @type int $get_organization_from_project
     *     @type string $permission
     *     @type string $user_id_dex
     *           users
     *     @type string $user_id_admin
     *     @type int $user_id
     *     @type string $type_permission
     *     @type int[]|\Google\Protobuf\Internal\RepeatedField $roles_ids
     *     @type string $api_key_value
     *     @type string $token_ccp_admin
     *          
     *           replace dex by ccp
     *     @type string $token_ccp_user_id
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
     * Generated from protobuf field <code>uint32 project_id = 2 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 2 [json_name = "projectId"];</code>
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
     * Generated from protobuf field <code>uint32 get_organization_from_project = 3 [json_name = "getOrganizationFromProject"];</code>
     * @return int
     */
    public function getGetOrganizationFromProject()
    {
        return $this->get_organization_from_project;
    }

    /**
     * Generated from protobuf field <code>uint32 get_organization_from_project = 3 [json_name = "getOrganizationFromProject"];</code>
     * @param int $var
     * @return $this
     */
    public function setGetOrganizationFromProject($var)
    {
        GPBUtil::checkUint32($var);
        $this->get_organization_from_project = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string permission = 4 [json_name = "permission"];</code>
     * @return string
     */
    public function getPermission()
    {
        return $this->permission;
    }

    /**
     * Generated from protobuf field <code>string permission = 4 [json_name = "permission"];</code>
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
     * users
     *
     * Generated from protobuf field <code>string user_id_dex = 5 [json_name = "userIdDex"];</code>
     * @return string
     */
    public function getUserIdDex()
    {
        return $this->user_id_dex;
    }

    /**
     * users
     *
     * Generated from protobuf field <code>string user_id_dex = 5 [json_name = "userIdDex"];</code>
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
     * Generated from protobuf field <code>string user_id_admin = 6 [json_name = "userIdAdmin"];</code>
     * @return string
     */
    public function getUserIdAdmin()
    {
        return $this->user_id_admin;
    }

    /**
     * Generated from protobuf field <code>string user_id_admin = 6 [json_name = "userIdAdmin"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserIdAdmin($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id_admin = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 user_id = 7 [json_name = "userId"];</code>
     * @return int
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>uint32 user_id = 7 [json_name = "userId"];</code>
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
     * Generated from protobuf field <code>string type_permission = 9 [json_name = "typePermission"];</code>
     * @return string
     */
    public function getTypePermission()
    {
        return $this->type_permission;
    }

    /**
     * Generated from protobuf field <code>string type_permission = 9 [json_name = "typePermission"];</code>
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
     * Generated from protobuf field <code>repeated uint32 roles_ids = 10 [json_name = "rolesIds"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRolesIds()
    {
        return $this->roles_ids;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 roles_ids = 10 [json_name = "rolesIds"];</code>
     * @param int[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRolesIds($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::UINT32);
        $this->roles_ids = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string api_key_value = 11 [json_name = "apiKeyValue"];</code>
     * @return string
     */
    public function getApiKeyValue()
    {
        return $this->api_key_value;
    }

    /**
     * Generated from protobuf field <code>string api_key_value = 11 [json_name = "apiKeyValue"];</code>
     * @param string $var
     * @return $this
     */
    public function setApiKeyValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->api_key_value = $var;

        return $this;
    }

    /**
     *
     * replace dex by ccp
     *
     * Generated from protobuf field <code>string token_ccp_admin = 12 [json_name = "tokenCcpAdmin"];</code>
     * @return string
     */
    public function getTokenCcpAdmin()
    {
        return $this->token_ccp_admin;
    }

    /**
     *
     * replace dex by ccp
     *
     * Generated from protobuf field <code>string token_ccp_admin = 12 [json_name = "tokenCcpAdmin"];</code>
     * @param string $var
     * @return $this
     */
    public function setTokenCcpAdmin($var)
    {
        GPBUtil::checkString($var, True);
        $this->token_ccp_admin = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string token_ccp_user_id = 13 [json_name = "tokenCcpUserId"];</code>
     * @return string
     */
    public function getTokenCcpUserId()
    {
        return $this->token_ccp_user_id;
    }

    /**
     * Generated from protobuf field <code>string token_ccp_user_id = 13 [json_name = "tokenCcpUserId"];</code>
     * @param string $var
     * @return $this
     */
    public function setTokenCcpUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->token_ccp_user_id = $var;

        return $this;
    }

}

