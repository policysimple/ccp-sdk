<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/quotas/v1alpha1/registry_quotas.proto

namespace GPBMetadata\Artifacts\Quotas\V1Alpha1;

class RegistryQuotas
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
/artifacts/quotas/v1alpha1/registry_quotas.protoartifacts.quotas.v1alpha1"V
HarborQuotas!
storage_used (RstorageUsed#
storage_limit (RstorageLimit"�
QuotasRegistry
id (	Rid\'
organization_id (	RorganizationId

project_id (	R	projectId%
environment_id (	RenvironmentId:
environment_internal_name (	RenvironmentInternalName
active (Ractive?
harbor (2\'.artifacts.quotas.v1alpha1.HarborQuotasRharborB�
#io.cuemby.artifacts.quotas.v1alpha1BRegistryQuotasProtoPZ:github.com/cuemby/ccp-sdk/gen/go/artifacts/quotas/v1alpha1�PPX�Artifacts.Quotas.V1Alpha1�Artifacts\\Quotas\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

