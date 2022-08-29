<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/users/users_api.proto

namespace GPBMetadata\Accounts\V1Alpha1\Users;

class UsersApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Accounts\V1Alpha1\Users\Users::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
\'accounts/v1alpha1/users/users_api.protoaccounts.v1alpha1.users.v12�
UserServicek

CreateUser-.accounts.v1alpha1.users.v1.CreateUserRequest..accounts.v1alpha1.users.v1.CreateUserResponsee
ListUser+.accounts.v1alpha1.users.v1.ListUserRequest,.accounts.v1alpha1.users.v1.ListUserResponsek

GetOneUser-.accounts.v1alpha1.users.v1.GetOneUserRequest..accounts.v1alpha1.users.v1.GetOneUserResponsek

UpdateUser-.accounts.v1alpha1.users.v1.UpdateUserRequest..accounts.v1alpha1.users.v1.UpdateUserResponsek

DeleteUser-.accounts.v1alpha1.users.v1.DeleteUserRequest..accounts.v1alpha1.users.v1.DeleteUserResponse�
ListUserPagination5.accounts.v1alpha1.users.v1.ListUserPaginationRequest6.accounts.v1alpha1.users.v1.ListUserPaginationResponse�
SendInvitationUser5.accounts.v1alpha1.users.v1.SendInvitationUserRequest6.accounts.v1alpha1.users.v1.SendInvitationUserResponse�
GetInvitationUser4.accounts.v1alpha1.users.v1.GetInvitationUserRequest5.accounts.v1alpha1.users.v1.GetInvitationUserResponse�
AgreeInvitationUser6.accounts.v1alpha1.users.v1.AgreeInvitationUserRequest7.accounts.v1alpha1.users.v1.AgreeInvitationUserResponse�
ListInvitationUser5.accounts.v1alpha1.users.v1.ListInvitationUserRequest6.accounts.v1alpha1.users.v1.ListInvitationUserResponseh
	CheckUser,.accounts.v1alpha1.users.v1.CheckUserRequest-.accounts.v1alpha1.users.v1.CheckUserResponse�
SendVerificationEmail8.accounts.v1alpha1.users.v1.SendVerificationEmailRequest9.accounts.v1alpha1.users.v1.SendVerificationEmailResponsen
VerifyEmail..accounts.v1alpha1.users.v1.VerifyEmailRequest/.accounts.v1alpha1.users.v1.VerifyEmailResponse�
GetUsersEmailFilter6.accounts.v1alpha1.users.v1.GetUsersEmailFilterRequest7.accounts.v1alpha1.users.v1.GetUsersEmailFilterResponsew
GetListUserDex1.accounts.v1alpha1.users.v1.GetListUserDexRequest2.accounts.v1alpha1.users.v1.GetListUserDexResponset

        , true);

        static::$is_initialized = true;
    }
}
