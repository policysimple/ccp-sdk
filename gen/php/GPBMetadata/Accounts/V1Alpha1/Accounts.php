<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace GPBMetadata\Accounts\V1Alpha1;

class Accounts
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�R
 accounts/v1alpha1/accounts.protoaccounts.v1alpha1"�
CheckUserRequest\'
organization_id (RorganizationId

project_id (R	projectIdA
get_organization_from_project (RgetOrganizationFromProject

permission (	R
permission
user_id_dex (	R	userIdDex"
user_id_admin (	RuserIdAdmin
user_id (RuserId\'
type_permission	 (	RtypePermission
	roles_ids
 (RrolesIds"F
CheckUserResponse
	is_exists (RisExists
error (	Rerror"?
UsersDex
user_id (	RuserId
provider (	Rprovider"<
CreateUserResponse
msg (	Rmsg
error (	Rerror"<
UpdateUserResponse
msg (	Rmsg
error (	Rerror"<
DeleteUserResponse
msg (	Rmsg
error (	Rerror"Y
ListUserRequest\'
organization_id (RorganizationId

project_id (R	projectId"�
CreateUserRequest
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
	is_active (RisActive
	roles_ids (RrolesIds\'
permissions_ids (RpermissionsIds+
organizations_ids (RorganizationsIds"f
UpdateUserRequest
auth_id (RauthId8
auth (2$.accounts.v1alpha1.CreateUserRequestRauth",
DeleteUserRequest
auth_id (RauthId"�
UserList
id (Rid

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
user_id (	RuserId
	is_active (RisActive"
is_super_user (RisSuperUser"#
GetOneUserRequest
id (Rid"�
GetOneUserResponse
id (Rid
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
	is_active (RisActive

created_at (	R	createdAt

updated_at (	R	updatedAt,
roles	 (2.accounts.v1alpha1.RolRroles?
permissions
 (2.accounts.v1alpha1.PermissionRpermissions"
is_super_user (RisSuperUserE
organizations (2.accounts.v1alpha1.OrganizationRorganizations"E
ListUserResponse1
users (2.accounts.v1alpha1.UserListRusers"I
ListUserPaginationRequest
offset (Roffset
limit (Rlimit"e
ListUserPaginationResponse
count (Rcount1
users (2.accounts.v1alpha1.UserListRusers"�
Rol
id (Rid
name (	Rname

project_id (R	projectId\'
organization_id (RorganizationId?
permissions (2.accounts.v1alpha1.PermissionRpermissions"�
CreateRoleRequest
name (	Rname 
description (	Rdescription

project_id (R	projectId\'
organization_id (RorganizationId\'
type_permission (	RtypePermission%
permission_ids (RpermissionIds"b
UpdateRoleRequest
rol_id (RrolId6
rol (2$.accounts.v1alpha1.CreateRoleRequestRrol"*
GetOneRoleRequest
rol_id (RrolId"�
GetOneRoleResponse
id (Rid
name (	Rname\'
organization_id (RorganizationId

project_id (R	projectId?
permissions (2.accounts.v1alpha1.PermissionRpermissions"*
DeleteRoleRequest
rol_id (RrolId"Z
ListRolesRequest

project_id (R	projectId\'
organization_id (RorganizationId"A
ListRolesResponse,
roles (2.accounts.v1alpha1.RolRroles"<
CreateRoleResponse
msg (	Rmsg
error (	Rerror"<
UpdateRoleResponse
msg (	Rmsg
error (	Rerror"<
DeleteRoleResponse
msg (	Rmsg
error (	Rerror"�
Project
id (Rid
name (	Rname
image (	Rimage\'
organization_id (RorganizationId 
description (	Rdescription

created_at (	R	createdAt

updated_at (	R	updatedAt,
roles (2.accounts.v1alpha1.RolRroles"�
CreateProjectRequest
name (	Rname 
description (	Rdescription
image (	Rimage\'
organization_id (RorganizationId
user_id (	RuserId"&
GetOneProjectRequest
id (Rid"&
DeleteProjectRequest
id (Rid"=
ListProjectRequest\'
organization_id (RorganizationId"i
UpdateProjectRequest
id (RidA
project (2\'.accounts.v1alpha1.CreateProjectRequestRproject"?
CreateProjectResponse
msg (	Rmsg
error (	Rerror"?
UpdateProjectResponse
msg (	Rmsg
error (	Rerror"?
DeleteProjectResponse
msg (	Rmsg
error (	Rerror"�
GetOneProjectResponse
id (Rid
name (	Rname
image (	Rimage\'
organization_id (RorganizationId 
description (	Rdescription

created_at (	R	createdAt

updated_at (	R	updatedAt3
members (2.accounts.v1alpha1.MemberRmembers"M
ListProjectResponse6
projects (2.accounts.v1alpha1.ProjectRprojects"L
ListProjectPaginationRequest
offset (Roffset
limit (Rlimit"m
ListProjectPaginationResponse6
projects (2.accounts.v1alpha1.ProjectRprojects
count (Rcount"D

Permission
id (Rid
name (	Rname
type (	Rtype"Y
ListPermissionResponse?
permissions (2.accounts.v1alpha1.PermissionRpermissions"W
AssignPermissionRequest
user_id (RuserId#
permission_id (RpermissionId"+
ListPermissionRequest
type (	Rtype"A
CreatePermissionRequest
name (	Rname
type (	Rtype"f
UpdatePermissionRequest#
permission_id (RpermissionId
name (	Rname
type (	Rtype">
GetOnePermissionRequest#
permission_id (RpermissionId"R
GetOnePermissionResponse
id (Rid
name (	Rname
type (	Rtype">
DeletePermissionRequest#
permission_id (RpermissionId"B
UpdatePermissionResponse
msg (	Rmsg
error (	Rerror"B
DeletePermissionResponse
msg (	Rmsg
error (	Rerror"B
CreatePermissionResponse
msg (	Rmsg
error (	Rerror"�
Member
id (Rid
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
	is_active (RisActive"q
ProjectOrganization
id (Rid
name (	Rname
image (	Rimage 
description (	Rdescription"H
Organization
id (Rid
name (	Rname
image (	Rimage"^
CreateOrganizationRequest
name (	Rname
image (	Rimage
user_id (	RuserId"
ListOrganizationRequest"D
GetOneOrganizationRequest\'
organization_id (RorganizationId"n
UpdateOrganizationRequest\'
organization_id (RorganizationId
name (	Rname
image (	Rimage"D
DeleteOrganizationRequest\'
organization_id (RorganizationId"�
GetOneOrganizationResponse
id (Rid
name (	Rname
image (	RimageB
projects (2&.accounts.v1alpha1.ProjectOrganizationRprojects3
menbers (2.accounts.v1alpha1.MemberRmenbers"a
ListOrganizationResponseE
organizations (2.accounts.v1alpha1.OrganizationRorganizations"v
CreateOrganizationResponse
msg (	Rmsg0
role_id_organization (	RroleIdOrganization
error (	Rerror"D
UpdateOrganizationResponse
msg (	Rmsg
error (	Rerror"D
DeleteOrganizationResponse
msg (	Rmsg
error (	Rerror"
GetListUserDexRequest"R
GetListUserDexResponse8
	users_dex (2.accounts.v1alpha1.UsersDexRusersDex"i
GetOneUserDexRequest
user_id (	RuserId8
user (2$.accounts.v1alpha1.CreateUserRequestRuser"�
GetOneUserDexResponse
id (Rid
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
	is_active (RisActive

created_at (	R	createdAt

updated_at (	R	updatedAt,
roles	 (2.accounts.v1alpha1.RolRroles?
permissions
 (2.accounts.v1alpha1.PermissionRpermissions"
is_super_user (RisSuperUserE
organizations (2.accounts.v1alpha1.OrganizationRorganizations
msg (	Rmsg2�
AccountServiceY

CreateUser$.accounts.v1alpha1.CreateUserRequest%.accounts.v1alpha1.CreateUserResponseS
ListUser".accounts.v1alpha1.ListUserRequest#.accounts.v1alpha1.ListUserResponseY

GetOneUser$.accounts.v1alpha1.GetOneUserRequest%.accounts.v1alpha1.GetOneUserResponseY

UpdateUser$.accounts.v1alpha1.UpdateUserRequest%.accounts.v1alpha1.UpdateUserResponseY

DeleteUser$.accounts.v1alpha1.DeleteUserRequest%.accounts.v1alpha1.DeleteUserResponseq
ListUserPagination,.accounts.v1alpha1.ListUserPaginationRequest-.accounts.v1alpha1.ListUserPaginationResponsek
CreatePermission*.accounts.v1alpha1.CreatePermissionRequest+.accounts.v1alpha1.CreatePermissionResponsee
ListPermission(.accounts.v1alpha1.ListPermissionRequest).accounts.v1alpha1.ListPermissionResponsek
GetOnePermission*.accounts.v1alpha1.GetOnePermissionRequest+.accounts.v1alpha1.GetOnePermissionResponsek
UpdatePermission*.accounts.v1alpha1.UpdatePermissionRequest+.accounts.v1alpha1.UpdatePermissionResponsek
DeletePermission*.accounts.v1alpha1.DeletePermissionRequest+.accounts.v1alpha1.DeletePermissionResponseq
CreateOrganization,.accounts.v1alpha1.CreateOrganizationRequest-.accounts.v1alpha1.CreateOrganizationResponsek
ListOrganization*.accounts.v1alpha1.ListOrganizationRequest+.accounts.v1alpha1.ListOrganizationResponseq
GetOneOrganization,.accounts.v1alpha1.GetOneOrganizationRequest-.accounts.v1alpha1.GetOneOrganizationResponseq
UpdateOrganization,.accounts.v1alpha1.UpdateOrganizationRequest-.accounts.v1alpha1.UpdateOrganizationResponseq
DeleteOrganization,.accounts.v1alpha1.DeleteOrganizationRequest-.accounts.v1alpha1.DeleteOrganizationResponseY

CreateRole$.accounts.v1alpha1.CreateRoleRequest%.accounts.v1alpha1.CreateRoleResponseV
	ListRoles#.accounts.v1alpha1.ListRolesRequest$.accounts.v1alpha1.ListRolesResponseY

UpdateRole$.accounts.v1alpha1.UpdateRoleRequest%.accounts.v1alpha1.UpdateRoleResponseY

GetOneRole$.accounts.v1alpha1.GetOneRoleRequest%.accounts.v1alpha1.GetOneRoleResponseY

DeleteRole$.accounts.v1alpha1.DeleteRoleRequest%.accounts.v1alpha1.DeleteRoleResponseb
CreateProject\'.accounts.v1alpha1.CreateProjectRequest(.accounts.v1alpha1.CreateProjectResponseb
GetOneProject\'.accounts.v1alpha1.GetOneProjectRequest(.accounts.v1alpha1.GetOneProjectResponseb
UpdateProject\'.accounts.v1alpha1.UpdateProjectRequest(.accounts.v1alpha1.UpdateProjectResponseb
DeleteProject\'.accounts.v1alpha1.DeleteProjectRequest(.accounts.v1alpha1.DeleteProjectResponse\\
ListProject%.accounts.v1alpha1.ListProjectRequest&.accounts.v1alpha1.ListProjectResponsee
GetListUserDex(.accounts.v1alpha1.GetListUserDexRequest).accounts.v1alpha1.GetListUserDexResponseb
GetOneUserDex\'.accounts.v1alpha1.GetOneUserDexRequest(.accounts.v1alpha1.GetOneUserDexResponseV
	CheckUser#.accounts.v1alpha1.CheckUserRequest$.accounts.v1alpha1.CheckUserResponseB4Z2github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

