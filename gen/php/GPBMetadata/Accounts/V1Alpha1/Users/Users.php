<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/users/users.proto

namespace GPBMetadata\Accounts\V1Alpha1\Users;

class Users
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
#accounts/v1alpha1/users/users.protoaccounts.v1alpha1.users.v1"&
CreateUserResponse
msg (	Rmsg"&
UpdateUserResponse
msg (	Rmsg"&
DeleteUserResponse
msg (	Rmsg"Y
ListUserRequest\'
organization_id (	RorganizationId

project_id (	R	projectId"�
CreateUserRequest
user_id (	RuserId

first_name (	R	firstName
	last_name (	RlastName
email (	Remail
	is_active (RisActive
	roles_ids (	RrolesIds\'
permissions_ids (RpermissionsIds+
organizations_ids (	RorganizationsIds!
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
read_notification (RreadNotification

phone_code (	R	phoneCode)
optional_address (	RoptionalAddress
image (	Rimage"o
UpdateUserRequest
auth_id (RauthIdA
auth (2-.accounts.v1alpha1.users.v1.CreateUserRequestRauth"U
DeleteUserRequest
user_id (RuserId\'
organization_id (	RorganizationId"L
GetOneUserRequest
id (Rid\'
organization_id (	RorganizationId"r
GetOneUserResponse4
user (2 .accounts.v1alpha1.UserDetailOneRuser
msg (	Rmsg
error (	Rerror"E
ListUserResponse1
users (2.accounts.v1alpha1.UserListRusers"I
ListUserPaginationRequest
offset (Roffset
limit (Rlimit"e
ListUserPaginationResponse
count (Rcount1
users (2.accounts.v1alpha1.UserListRusers"
GetListUserDexRequest"[
GetListUserDexResponseA
	users_dex (2$.accounts.v1alpha1.users.v1.UsersDexRusersDex"r
GetOneUserDexRequest
user_id (	RuserIdA
user (2-.accounts.v1alpha1.users.v1.CreateUserRequestRuser"r
GetOneUserDexResponse1
user (2.accounts.v1alpha1.UserDetailRuser
msg (	Rmsg
error (	Rerror"Z
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
organization_id (	RorganizationId

project_id (	R	projectIdA
get_organization_from_project (	RgetOrganizationFromProject

permission (	R
permission
user_id_dex (	R	userIdDex"
user_id_admin (	RuserIdAdmin
user_id (RuserId\'
type_permission	 (	RtypePermission
	roles_ids
 (	RrolesIds"
api_key_value (	RapiKeyValue&
token_ccp_admin (	RtokenCcpAdmin)
token_ccp_user_id (	RtokenCcpUserId"s
CheckUserResponse
	is_exists (RisExists
is_admin (RisAdmin
msg (	Rmsg
error (	Rerror"?
UsersDex
user_id (	RuserId
provider (	Rprovider"2
GetUsersEmailFilterRequest
value (	Rvalue"P
GetUsersEmailFilterResponse1
users (2.accounts.v1alpha1.UserListRusersB:Z8github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/usersbproto3'
        , true);

        static::$is_initialized = true;
    }
}

