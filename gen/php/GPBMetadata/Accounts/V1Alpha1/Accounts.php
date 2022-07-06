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
֮
 accounts/v1alpha1/accounts.protoaccounts.v1alpha1"4
EnableOrDisableMFARequest
user_id (	RuserId".
EnableOrDisableMFAResponse
msg (	Rmsg"?

MFARequest
user_id (	RuserId
numbers (Rnumbers"R
MFAResponse
	token_ccp (	RtokenCcp
msg (	Rmsg
error (	Rerror"2
GetUsersEmailFilterRequest
value (	Rvalue"P
GetUsersEmailFilterResponse1
users (2.accounts.v1alpha1.UserListRusers"y
Log
user_id (	RuserId
system (	Rsystem

client_web (	R	clientWeb
ip (	Rip
date (	Rdate";
SaveLogsRequest(
log (2.accounts.v1alpha1.LogRlog"$
SaveLogsResponse
msg (	Rmsg"&
LogsRequest
user_id (	RuserId":
LogsResponse*
logs (2.accounts.v1alpha1.LogRlogs"-
GetOneTokenCCPRequest
token (	Rtoken"�
GetOneTokenCCPResponse
user_id (RuserId
token (	Rtoken
email (	Remail
user_id_dex (	R	userIdDex

first_name (	R	firstName%
email_verified (RemailVerified"4
CreateTokenCCPRequest
	token_dex (	RtokenDex"�
CreateTokenCCPResponse
	token_ccp (	RtokenCcp
msg (	Rmsg
error (	Rerror.
time_expiration_mfa (RtimeExpirationMfa
user_id (	RuserId"{
GetRolesByOrgUserRequest\'
organization_id (RorganizationId

project_id (R	projectId
user_id (RuserId"�
GetRolesByOrgUserResponseC
organization (2.accounts.v1alpha1.OrganizationRorganization4
project (2.accounts.v1alpha1.ProjectRproject"4
ListInvitationUserRequest
user_id (	RuserId"s
ListInvitationUserResponseU
invitation_user (2,.accounts.v1alpha1.GetInvitationUserResponseRinvitationUser"0
GetRolesByUserRequest
user_id (	RuserId"�
GetRolesByUserResponseC
organization (2.accounts.v1alpha1.OrganizationRorganization4
project (2.accounts.v1alpha1.ProjectRproject"�
CreateApiKeyRequest
name (	Rname
user_id (	RuserId
	roles_ids (RrolesIds\'
permissions_ids (RpermissionsIds"�
ApiKey
id (	Rid
name (	Rname
user_id (	RuserId(
rol (2.accounts.v1alpha1.RolRrol?
permissions (2.accounts.v1alpha1.PermissionRpermissions"
CreateApiKeyResponse
msg (	Rmsg
api_key (	RapiKey&
access_point_id (RaccessPointId
error (	Rerror"B
GetOneApiKeyRequest
id (Rid
	value_key (	RvalueKey"�
GetOneApiKeyResponse
id (Rid
api_key (	RapiKey
name (	Rname
user_id (	RuserId,
roles (2.accounts.v1alpha1.RolRroles?
permissions (2.accounts.v1alpha1.PermissionRpermissions",
ListApiKeyRequest
user_id (	RuserId"b

ApiKeyList
id (Rid
api_key (	RapiKey
name (	Rname
user_id (	RuserId"N
ListApiKeyResponse8
api_keys (2.accounts.v1alpha1.ApiKeyListRapiKeys"�
UpdateApiKeyRequest
id (Rid
name (	Rname
	roles_ids (RrolesIds\'
permissions_ids (RpermissionsIds
	is_active (RisActive"W
UpdateApiKeyResponse
msg (	Rmsg
api_key (	RapiKey
error (	Rerror"%
DeleteApiKeyRequest
id (Rid"W
DeleteApiKeyResponse
msg (	Rmsg
api_key (	RapiKey
error (	Rerror"d
City
id (Rid
name (	Rname
latitude (	Rlatitude
	longitude (	R	longitude"\\
State
id (Rid
name (	Rname/
cities (2.accounts.v1alpha1.CityRcities"z
CountryList
id (Rid
name (	Rname
code (	Rcode

phone_code (	R	phoneCode
emoji (	Remoji"
ListCountriesRequest"U
ListCountriesResponse<
	countries (2.accounts.v1alpha1.CountryListR	countries"I
GetOneCountryRequest

country_id (R	countryId
name (	Rname"�
GetOneCountryResponse
id (Rid
name (	Rname
code (	Rcode

phone_code (	R	phoneCode
emoji (	Remoji0
states (2.accounts.v1alpha1.StateRstates"Z
SendVerificationEmailRequest
email (	Remail
name (	Rname
url (	Rurl"V
SendVerificationEmailResponse
html_result (	R
htmlResult
error (	Rerror"*
VerifyEmailRequest
token (	Rtoken"=
VerifyEmailResponse
msg (	Rmsg
error (	Rerror"�
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
 (RrolesIds"
api_key_value (	RapiKeyValue&
token_ccp_admin (	RtokenCcpAdmin)
token_ccp_user_id (	RtokenCcpUserId"s
CheckUserResponse
	is_exists (RisExists
error (	Rerror
is_admin (RisAdmin
msg (	Rmsg"?
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

project_id (R	projectId"�
CreateUserRequest
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
	is_active (RisActive
	roles_ids (RrolesIds\'
permissions_ids (RpermissionsIds+
organizations_ids (RorganizationsIds!
phone_number	 (	RphoneNumber
country
 (	Rcountry
city (	Rcity
zip_code (	RzipCode
address (	Raddress
state (	Rstate#
emoji_country (	RemojiCountry\'
invitation_code (	RinvitationCode$
is_mfa_enabled (RisMfaEnabled
language (	Rlanguage+
push_notification (RpushNotification-
email_notification (RemailNotification4
new_login_notification (RnewLoginNotification/
create_notification (RcreateNotification/
update_notification (RupdateNotification/
delete_notification (RdeleteNotification9
application_notification (RapplicationNotification+
read_notification (RreadNotification"f
UpdateUserRequest
auth_id (RauthId8
auth (2$.accounts.v1alpha1.CreateUserRequestRauth"U
DeleteUserRequest
user_id (RuserId\'
organization_id (RorganizationId"�
UserList
id (Rid

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
user_id (	RuserId
	is_active (RisActive"
is_super_user (RisSuperUser"L
GetOneUserRequest
id (Rid\'
organization_id (RorganizationId"�	
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
organizations (2.accounts.v1alpha1.OrganizationRorganizations6
projects (2.accounts.v1alpha1.ProjectRprojects!
phone_number (	RphoneNumber
country (	Rcountry
city (	Rcity
zip_code (	RzipCode
address (	Raddress
state (	Rstate#
emoji_country (	RemojiCountry%
email_verified (RemailVerified$
is_mfa_enabled (RisMfaEnabled
language (	Rlanguage+
push_notification (RpushNotification-
email_notification (RemailNotification4
new_login_notification (RnewLoginNotification/
create_notification (RcreateNotification/
update_notification (RupdateNotification/
delete_notification (RdeleteNotification9
application_notification (RapplicationNotification+
read_notification (RreadNotification"E
ListUserResponse1
users (2.accounts.v1alpha1.UserListRusers"I
ListUserPaginationRequest
offset (Roffset
limit (Rlimit"e
ListUserPaginationResponse
count (Rcount1
users (2.accounts.v1alpha1.UserListRusers"�
SendInvitationUserRequest
name (	Rname
email (	Remail"
user_id_admin (	RuserIdAdmin
	roles_ids (RrolesIds\'
permissions_ids (RpermissionsIds\'
organization_id (RorganizationId"�
SendInvitationUserResponseC
organization (2.accounts.v1alpha1.OrganizationRorganization6
projects (2.accounts.v1alpha1.ProjectRprojects\'
invitation_code (	RinvitationCode
result (	Rresult,
roles (2.accounts.v1alpha1.RolRroles?
permissions (2.accounts.v1alpha1.PermissionRpermissions"Y
GetInvitationUserRequest\'
invitation_code (	RinvitationCode
email (	Remail"�
OrganizationInvitation
id (Rid
name (	Rname
image (	Rimage 
description (	Rdescription6
projects (2.accounts.v1alpha1.ProjectRprojects"�
GetInvitationUserResponse
id (Rid\'
invitation_code (	RinvitationCode,
roles (2.accounts.v1alpha1.RolRroles?
permissions (2.accounts.v1alpha1.PermissionRpermissionsM
organization (2).accounts.v1alpha1.OrganizationInvitationRorganization
email (	Remail
success (Rsuccess"�
AgreeInvitationUserRequest\'
invitation_code (	RinvitationCode
email (	Remail"
guest_user_id (	RguestUserIdV
invitation_response (2%.accounts.v1alpha1.InvitationResponseRinvitationResponseW
projects (2;.accounts.v1alpha1.AgreeInvitationUserRequest.ProjectsEntryRprojects;
ProjectsEntry
key (Rkey
value (Rvalue:8"5
AgreeInvitationUserResponse
result (	Rresult"�
Rol
id (Rid
name (	Rname

project_id (R	projectId\'
organization_id (RorganizationId?
permissions (2.accounts.v1alpha1.PermissionRpermissions
is_admin (RisAdmin"�
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
permissions (2.accounts.v1alpha1.PermissionRpermissions
is_admin (RisAdmin"*
DeleteRoleRequest
rol_id (RrolId"Z
ListRolesRequest

project_id (R	projectId\'
organization_id (RorganizationId"A
ListRolesResponse,
roles (2.accounts.v1alpha1.RolRroles"L
CreateRoleResponse
msg (	Rmsg
error (	Rerror
id (Rid"<
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
project (2\'.accounts.v1alpha1.CreateProjectRequestRproject"J
	MenberRol
id (Rid
name (	Rname
is_admin (RisAdmin"7
ProjectList
name (	Rname
image (	Rimage"�
MenberProject
id (Rid
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
	is_active (RisActive
image (	Rimage
role (	Rrole:
projects (2.accounts.v1alpha1.ProjectListRprojects"O
CreateProjectResponse
msg (	Rmsg
error (	Rerror
id (Rid"?
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

updated_at (	R	updatedAt:
members (2 .accounts.v1alpha1.MenberProjectRmembers1
owner	 (2.accounts.v1alpha1.UserListRowner"M
ListProjectResponse6
projects (2.accounts.v1alpha1.ProjectRprojects"L
ListProjectPaginationRequest
offset (Roffset
limit (Rlimit"m
ListProjectPaginationResponse6
projects (2.accounts.v1alpha1.ProjectRprojects
count (Rcount"y

Permission
id (Rid
name (	Rname
action (	Raction
type (	Rtype
	full_name (	RfullName"f
GroupPermission
name (	Rname?
permissions (2.accounts.v1alpha1.PermissionRpermissions"�
CategoryPermission
name (	Rname
type (	RtypeO
group_permissions (2".accounts.v1alpha1.GroupPermissionRgroupPermissions"v
ListPermissionResponse\\
categories_permissions (2%.accounts.v1alpha1.CategoryPermissionRcategoriesPermissions"W
AssignPermissionRequest
user_id (RuserId#
permission_id (RpermissionId"
ListPermissionRequest"u
CreatePermissionRequest
name (	Rname
type (	Rtype
category (	Rcategory
action (	Raction"f
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
	is_active (RisActive2
roles (2.accounts.v1alpha1.MenberRolRroles"q
ProjectOrganization
id (Rid
name (	Rname
image (	Rimage 
description (	Rdescription"�
Organization
id (Rid
name (	Rname
image (	Rimage 
description (	Rdescription1
owner (2.accounts.v1alpha1.UserListRowner,
roles (2.accounts.v1alpha1.RolRroles"�
CreateOrganizationRequest
name (	Rname
image (	Rimage
user_id (	RuserId 
description (	Rdescription"
ListOrganizationRequest"D
GetOneOrganizationRequest\'
organization_id (RorganizationId"�
UpdateOrganizationRequest\'
organization_id (RorganizationId
name (	Rname 
description (	Rdescription
image (	Rimage"D
DeleteOrganizationRequest\'
organization_id (RorganizationId"�
GetOneOrganizationResponse
id (Rid
name (	Rname
image (	RimageB
projects (2&.accounts.v1alpha1.ProjectOrganizationRprojects3
menbers (2.accounts.v1alpha1.MemberRmenbers 
description (	Rdescription1
owner (2.accounts.v1alpha1.UserListRowner"a
ListOrganizationResponseE
organizations (2.accounts.v1alpha1.OrganizationRorganizations"�
CreateOrganizationResponse
msg (	Rmsg0
role_id_organization (RroleIdOrganization
error (	Rerror
id (Rid"D
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
user (2$.accounts.v1alpha1.CreateUserRequestRuser"�	
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
msg (	Rmsg6
projects (2.accounts.v1alpha1.ProjectRprojects!
phone_number (	RphoneNumber
country (	Rcountry
city (	Rcity
zip_code (	RzipCode
address (	Raddress
state (	Rstate#
emoji_country (	RemojiCountry$
is_mfa_enabled (RisMfaEnabled
	token_ccp (	RtokenCcp%
email_verified (RemailVerified
error (	Rerror
language (	Rlanguage+
push_notification (RpushNotification-
email_notification (RemailNotification4
new_login_notification (RnewLoginNotification/
create_notification (RcreateNotification/
update_notification (RupdateNotification/
delete_notification  (RdeleteNotification9
application_notification! (RapplicationNotification+
read_notification" (RreadNotification*d
InvitationResponse,
(INVITATION_RESPONSE_ACCEPTED_UNSPECIFIED  
INVITATION_RESPONSE_REJECTED2�(
AccountServiceY

CreateUser$.accounts.v1alpha1.CreateUserRequest%.accounts.v1alpha1.CreateUserResponseS
ListUser".accounts.v1alpha1.ListUserRequest#.accounts.v1alpha1.ListUserResponseY

GetOneUser$.accounts.v1alpha1.GetOneUserRequest%.accounts.v1alpha1.GetOneUserResponseY

UpdateUser$.accounts.v1alpha1.UpdateUserRequest%.accounts.v1alpha1.UpdateUserResponseY

DeleteUser$.accounts.v1alpha1.DeleteUserRequest%.accounts.v1alpha1.DeleteUserResponseq
ListUserPagination,.accounts.v1alpha1.ListUserPaginationRequest-.accounts.v1alpha1.ListUserPaginationResponseq
SendInvitationUser,.accounts.v1alpha1.SendInvitationUserRequest-.accounts.v1alpha1.SendInvitationUserResponsen
GetInvitationUser+.accounts.v1alpha1.GetInvitationUserRequest,.accounts.v1alpha1.GetInvitationUserResponset
AgreeInvitationUser-.accounts.v1alpha1.AgreeInvitationUserRequest..accounts.v1alpha1.AgreeInvitationUserResponseq
ListInvitationUser,.accounts.v1alpha1.ListInvitationUserRequest-.accounts.v1alpha1.ListInvitationUserResponseq
EnableOrDisableMFA,.accounts.v1alpha1.EnableOrDisableMFARequest-.accounts.v1alpha1.EnableOrDisableMFAResponsek
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

GetOneRole$.accounts.v1alpha1.GetOneRoleRequest%.accounts.v1alpha1.GetOneRoleResponsee
GetRolesByUser(.accounts.v1alpha1.GetRolesByUserRequest).accounts.v1alpha1.GetRolesByUserResponsen
GetRolesByOrgUser+.accounts.v1alpha1.GetRolesByOrgUserRequest,.accounts.v1alpha1.GetRolesByOrgUserResponseY

DeleteRole$.accounts.v1alpha1.DeleteRoleRequest%.accounts.v1alpha1.DeleteRoleResponseb
CreateProject\'.accounts.v1alpha1.CreateProjectRequest(.accounts.v1alpha1.CreateProjectResponseb
GetOneProject\'.accounts.v1alpha1.GetOneProjectRequest(.accounts.v1alpha1.GetOneProjectResponseb
UpdateProject\'.accounts.v1alpha1.UpdateProjectRequest(.accounts.v1alpha1.UpdateProjectResponseb
DeleteProject\'.accounts.v1alpha1.DeleteProjectRequest(.accounts.v1alpha1.DeleteProjectResponse\\
ListProject%.accounts.v1alpha1.ListProjectRequest&.accounts.v1alpha1.ListProjectResponsee
GetListUserDex(.accounts.v1alpha1.GetListUserDexRequest).accounts.v1alpha1.GetListUserDexResponseb
GetOneUserDex\'.accounts.v1alpha1.GetOneUserDexRequest(.accounts.v1alpha1.GetOneUserDexResponseV
	CheckUser#.accounts.v1alpha1.CheckUserRequest$.accounts.v1alpha1.CheckUserResponsez
SendVerificationEmail/.accounts.v1alpha1.SendVerificationEmailRequest0.accounts.v1alpha1.SendVerificationEmailResponse\\
VerifyEmail%.accounts.v1alpha1.VerifyEmailRequest&.accounts.v1alpha1.VerifyEmailResponseb
ListCountries\'.accounts.v1alpha1.ListCountriesRequest(.accounts.v1alpha1.ListCountriesResponseb
GetOneCountry\'.accounts.v1alpha1.GetOneCountryRequest(.accounts.v1alpha1.GetOneCountryResponse_
CreateApiKey&.accounts.v1alpha1.CreateApiKeyRequest\'.accounts.v1alpha1.CreateApiKeyResponse_
GetOneApiKey&.accounts.v1alpha1.GetOneApiKeyRequest\'.accounts.v1alpha1.GetOneApiKeyResponseY

ListApiKey$.accounts.v1alpha1.ListApiKeyRequest%.accounts.v1alpha1.ListApiKeyResponse_
UpdateApiKey&.accounts.v1alpha1.UpdateApiKeyRequest\'.accounts.v1alpha1.UpdateApiKeyResponse_
DeleteApiKey&.accounts.v1alpha1.DeleteApiKeyRequest\'.accounts.v1alpha1.DeleteApiKeyResponsee
CreateTokenCCP(.accounts.v1alpha1.CreateTokenCCPRequest).accounts.v1alpha1.CreateTokenCCPResponsee
GetOneTokenCCP(.accounts.v1alpha1.GetOneTokenCCPRequest).accounts.v1alpha1.GetOneTokenCCPResponset
GetUsersEmailFilter-.accounts.v1alpha1.GetUsersEmailFilterRequest..accounts.v1alpha1.GetUsersEmailFilterResponseG
Logs.accounts.v1alpha1.LogsRequest.accounts.v1alpha1.LogsResponseS
SaveLogs".accounts.v1alpha1.SaveLogsRequest#.accounts.v1alpha1.SaveLogsResponseD
MFA.accounts.v1alpha1.MFARequest.accounts.v1alpha1.MFAResponseB4Z2github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

