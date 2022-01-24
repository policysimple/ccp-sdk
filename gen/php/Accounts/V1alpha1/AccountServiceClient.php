<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1;

/**
 */
class AccountServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * /AUTH
     * @param \Accounts\V1alpha1\CreateUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateUser(\Accounts\V1alpha1\CreateUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/CreateUser',
        $argument,
        ['\Accounts\V1alpha1\CreateUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\ListUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListUser(\Accounts\V1alpha1\ListUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/ListUser',
        $argument,
        ['\Accounts\V1alpha1\ListUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetOneUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneUser(\Accounts\V1alpha1\GetOneUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetOneUser',
        $argument,
        ['\Accounts\V1alpha1\GetOneUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\UpdateUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateUser(\Accounts\V1alpha1\UpdateUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/UpdateUser',
        $argument,
        ['\Accounts\V1alpha1\UpdateUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\DeleteUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteUser(\Accounts\V1alpha1\DeleteUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/DeleteUser',
        $argument,
        ['\Accounts\V1alpha1\DeleteUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\ListUserPaginationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListUserPagination(\Accounts\V1alpha1\ListUserPaginationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/ListUserPagination',
        $argument,
        ['\Accounts\V1alpha1\ListUserPaginationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\SendInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendInvitationUser(\Accounts\V1alpha1\SendInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/SendInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\SendInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetInvitationUser(\Accounts\V1alpha1\GetInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\GetInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\AgreeInvitationUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AgreeInvitationUser(\Accounts\V1alpha1\AgreeInvitationUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/AgreeInvitationUser',
        $argument,
        ['\Accounts\V1alpha1\AgreeInvitationUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * /PERMISSION
     * @param \Accounts\V1alpha1\CreatePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreatePermission(\Accounts\V1alpha1\CreatePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/CreatePermission',
        $argument,
        ['\Accounts\V1alpha1\CreatePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * rpc AssignPermission(AssignPermissionRequest) returns (MsgResponse);
     * @param \Accounts\V1alpha1\ListPermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListPermission(\Accounts\V1alpha1\ListPermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/ListPermission',
        $argument,
        ['\Accounts\V1alpha1\ListPermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetOnePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOnePermission(\Accounts\V1alpha1\GetOnePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetOnePermission',
        $argument,
        ['\Accounts\V1alpha1\GetOnePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\UpdatePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdatePermission(\Accounts\V1alpha1\UpdatePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/UpdatePermission',
        $argument,
        ['\Accounts\V1alpha1\UpdatePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\DeletePermissionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeletePermission(\Accounts\V1alpha1\DeletePermissionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/DeletePermission',
        $argument,
        ['\Accounts\V1alpha1\DeletePermissionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * /Organization
     * @param \Accounts\V1alpha1\CreateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateOrganization(\Accounts\V1alpha1\CreateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/CreateOrganization',
        $argument,
        ['\Accounts\V1alpha1\CreateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\ListOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListOrganization(\Accounts\V1alpha1\ListOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/ListOrganization',
        $argument,
        ['\Accounts\V1alpha1\ListOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetOneOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneOrganization(\Accounts\V1alpha1\GetOneOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetOneOrganization',
        $argument,
        ['\Accounts\V1alpha1\GetOneOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\UpdateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateOrganization(\Accounts\V1alpha1\UpdateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/UpdateOrganization',
        $argument,
        ['\Accounts\V1alpha1\UpdateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\DeleteOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteOrganization(\Accounts\V1alpha1\DeleteOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/DeleteOrganization',
        $argument,
        ['\Accounts\V1alpha1\DeleteOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Roles 
     * @param \Accounts\V1alpha1\CreateRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateRole(\Accounts\V1alpha1\CreateRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/CreateRole',
        $argument,
        ['\Accounts\V1alpha1\CreateRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\ListRolesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListRoles(\Accounts\V1alpha1\ListRolesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/ListRoles',
        $argument,
        ['\Accounts\V1alpha1\ListRolesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\UpdateRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateRole(\Accounts\V1alpha1\UpdateRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/UpdateRole',
        $argument,
        ['\Accounts\V1alpha1\UpdateRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetOneRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneRole(\Accounts\V1alpha1\GetOneRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetOneRole',
        $argument,
        ['\Accounts\V1alpha1\GetOneRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\DeleteRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRole(\Accounts\V1alpha1\DeleteRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/DeleteRole',
        $argument,
        ['\Accounts\V1alpha1\DeleteRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * filter group by teamid
     * rpc ListRolesByTeamId(ListRolesByTeamIdRequest) returns (ListRolesResponse);
     *
     * CRUD Project
     * @param \Accounts\V1alpha1\CreateProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateProject(\Accounts\V1alpha1\CreateProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/CreateProject',
        $argument,
        ['\Accounts\V1alpha1\CreateProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetOneProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneProject(\Accounts\V1alpha1\GetOneProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetOneProject',
        $argument,
        ['\Accounts\V1alpha1\GetOneProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\UpdateProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateProject(\Accounts\V1alpha1\UpdateProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/UpdateProject',
        $argument,
        ['\Accounts\V1alpha1\UpdateProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\DeleteProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteProject(\Accounts\V1alpha1\DeleteProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/DeleteProject',
        $argument,
        ['\Accounts\V1alpha1\DeleteProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\ListProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListProject(\Accounts\V1alpha1\ListProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/ListProject',
        $argument,
        ['\Accounts\V1alpha1\ListProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Get Users Dex
     * @param \Accounts\V1alpha1\GetListUserDexRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetListUserDex(\Accounts\V1alpha1\GetListUserDexRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetListUserDex',
        $argument,
        ['\Accounts\V1alpha1\GetListUserDexResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\GetOneUserDexRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneUserDex(\Accounts\V1alpha1\GetOneUserDexRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/GetOneUserDex',
        $argument,
        ['\Accounts\V1alpha1\GetOneUserDexResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\CheckUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CheckUser(\Accounts\V1alpha1\CheckUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.AccountService/CheckUser',
        $argument,
        ['\Accounts\V1alpha1\CheckUserResponse', 'decode'],
        $metadata, $options);
    }

}
