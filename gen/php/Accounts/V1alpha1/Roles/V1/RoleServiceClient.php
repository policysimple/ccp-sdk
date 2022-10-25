<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Accounts\V1alpha1\Roles\V1;

/**
 */
class RoleServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Accounts\V1alpha1\Roles\V1\CreateRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateRole(\Accounts\V1alpha1\Roles\V1\CreateRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/CreateRole',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\CreateRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Roles\V1\ListRolesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListRoles(\Accounts\V1alpha1\Roles\V1\ListRolesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/ListRoles',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\ListRolesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Roles\V1\UpdateRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateRole(\Accounts\V1alpha1\Roles\V1\UpdateRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/UpdateRole',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\UpdateRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Roles\V1\GetOneRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneRole(\Accounts\V1alpha1\Roles\V1\GetOneRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/GetOneRole',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\GetOneRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Roles\V1\DeleteRoleRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRole(\Accounts\V1alpha1\Roles\V1\DeleteRoleRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/DeleteRole',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\DeleteRoleResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Users
     * @param \Accounts\V1alpha1\Roles\V1\GetRolesByUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRolesByUser(\Accounts\V1alpha1\Roles\V1\GetRolesByUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/GetRolesByUser',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\GetRolesByUserResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Accounts\V1alpha1\Roles\V1\GetRolesByOrgUserRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRolesByOrgUser(\Accounts\V1alpha1\Roles\V1\GetRolesByOrgUserRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/accounts.v1alpha1.roles.v1.RoleService/GetRolesByOrgUser',
        $argument,
        ['\Accounts\V1alpha1\Roles\V1\GetRolesByOrgUserResponse', 'decode'],
        $metadata, $options);
    }

}
