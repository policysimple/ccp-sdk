<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/roles/roles_api.proto

namespace GPBMetadata\Accounts\V1Alpha1\Roles;

class RolesApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Accounts\V1Alpha1\Roles\Roles::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
\'accounts/v1alpha1/roles/roles_api.protoaccounts.v1alpha1.roles.v12�
RoleServicek

CreateRole-.accounts.v1alpha1.roles.v1.CreateRoleRequest..accounts.v1alpha1.roles.v1.CreateRoleResponseh
	ListRoles,.accounts.v1alpha1.roles.v1.ListRolesRequest-.accounts.v1alpha1.roles.v1.ListRolesResponsek

UpdateRole-.accounts.v1alpha1.roles.v1.UpdateRoleRequest..accounts.v1alpha1.roles.v1.UpdateRoleResponsek

GetOneRole-.accounts.v1alpha1.roles.v1.GetOneRoleRequest..accounts.v1alpha1.roles.v1.GetOneRoleResponsek

DeleteRole-.accounts.v1alpha1.roles.v1.DeleteRoleRequest..accounts.v1alpha1.roles.v1.DeleteRoleResponsew
GetRolesByUser1.accounts.v1alpha1.roles.v1.GetRolesByUserRequest2.accounts.v1alpha1.roles.v1.GetRolesByUserResponse�
GetRolesByOrgUser4.accounts.v1alpha1.roles.v1.GetRolesByOrgUserRequest5.accounts.v1alpha1.roles.v1.GetRolesByOrgUserResponseB:Z8github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/rolesbproto3'
        , true);

        static::$is_initialized = true;
    }
}
