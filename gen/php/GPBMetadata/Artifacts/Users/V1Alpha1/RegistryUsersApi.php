<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/users/v1alpha1/registry_users_api.proto

namespace GPBMetadata\Artifacts\Users\V1Alpha1;

class RegistryUsersApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Artifacts\Users\V1Alpha1\RegistryUsers::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
1artifacts/users/v1alpha1/registry_users_api.protoartifacts.users.v1alpha1"i
CreateUserRegistryRequestL
user_registry (2\'.artifacts.users.v1alpha1.UsersRegistryRuserRegistry"�
CreateUserRegistryResponseL
user_registry (2\'.artifacts.users.v1alpha1.UsersRegistryRuserRegistry
status (	Rstatus"E
DeleteUserRegistryRequest(
user_registry_id (RuserRegistryId"4
DeleteUserRegistryResponse
status (	Rstatus2�
RegistryUsersAPIService
CreateUserRegistry3.artifacts.users.v1alpha1.CreateUserRegistryRequest4.artifacts.users.v1alpha1.CreateUserRegistryResponse
DeleteUserRegistry3.artifacts.users.v1alpha1.DeleteUserRegistryRequest4.artifacts.users.v1alpha1.DeleteUserRegistryResponseB�
"io.cuemby.artifacts.users.v1alpha1BRegistryUsersProtoAPIPZ9github.com/cuemby/ccp-sdk/gen/go/artifacts/users/v1alpha1�PPX�Artifacts.Users.V1Alpha1�Artifacts\\Users\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

