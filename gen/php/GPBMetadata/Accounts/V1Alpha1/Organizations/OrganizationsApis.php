<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/organizations/organizations_apis.proto

namespace GPBMetadata\Accounts\V1Alpha1\Organizations;

class OrganizationsApis
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Accounts\V1Alpha1\Organizations\Organizations::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
8accounts/v1alpha1/organizations/organizations_apis.proto"accounts.v1alpha1.organizations.v12�
OrganizationService�
CreateOrganization=.accounts.v1alpha1.organizations.v1.CreateOrganizationRequest>.accounts.v1alpha1.organizations.v1.CreateOrganizationResponse�
ListOrganization;.accounts.v1alpha1.organizations.v1.ListOrganizationRequest<.accounts.v1alpha1.organizations.v1.ListOrganizationResponse�
GetOneOrganization=.accounts.v1alpha1.organizations.v1.GetOneOrganizationRequest>.accounts.v1alpha1.organizations.v1.GetOneOrganizationResponse�
UpdateOrganization=.accounts.v1alpha1.organizations.v1.UpdateOrganizationRequest>.accounts.v1alpha1.organizations.v1.UpdateOrganizationResponse�
DeleteOrganization=.accounts.v1alpha1.organizations.v1.DeleteOrganizationRequest>.accounts.v1alpha1.organizations.v1.DeleteOrganizationResponse�
!UpdateOrganizationUserPermissionsL.accounts.v1alpha1.organizations.v1.UpdateOrganizationUserPermissionsRequestM.accounts.v1alpha1.organizations.v1.UpdateOrganizationUserPermissionsResponseBBZ@github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/organizationsbproto3'
        , true);

        static::$is_initialized = true;
    }
}

