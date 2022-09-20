<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vault/v1alpha1/vault_api.proto

namespace GPBMetadata\Vault\V1Alpha1;

class VaultApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Vault\V1Alpha1\Vault::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
vault/v1alpha1/vault_api.protovault.v1alpha1"E
CreateSecretRequest.
secret (2.vault.v1alpha1.SecretRsecret">
CreateSecretResponse
error (	Rerror
msg (	Rmsg"�
UpdateSecretRequest\'
organization_id (RorganizationId

project_id (	R	projectId
	namespace (	R	namespace%
application_id (	RapplicationId.
secret (2.vault.v1alpha1.SecretRsecret">
UpdateSecretResponse
msg (	Rmsg
error (	Rerror"�
DeleteSecretRequest\'
organization_id (RorganizationId

project_id (R	projectId%
application_id (	RapplicationId
	namespace (	R	namespace
name (	Rname">
DeleteSecretResponse
msg (	Rmsg
error (	Rerror"�
GetSecretRequest\'
organization_id (RorganizationId

project_id (R	projectId%
application_id (	RapplicationId
	namespace (	R	namespace
name (	Rname"Y
GetSecretResponse.
secret (2.vault.v1alpha1.SecretRsecret
error (	Rerror"D
DeleteOrganizationRequest\'
organization_id (RorganizationId"D
DeleteOrganizationResponse
msg (	Rmsg
error (	Rerror"�
SaveTokenIntegrationsRequest\'
organization_id (RorganizationId%
integration_id (	RintegrationId
token (	Rtoken"G
SaveTokenIntegrationsResponse
msg (	Rmsg
error (	Rerror"m
GetTokenIntegrationsRequest\'
organization_id (RorganizationId%
integration_id (	RintegrationId"J
GetTokenIntegrationsResponse
token (	Rtoken
error (	Rerror2�
VaultAPIService[
CreateSecret#.vault.v1alpha1.CreateSecretRequest$.vault.v1alpha1.CreateSecretResponse" [
UpdateSecret#.vault.v1alpha1.UpdateSecretRequest$.vault.v1alpha1.UpdateSecretResponse" [
DeleteSecret#.vault.v1alpha1.DeleteSecretRequest$.vault.v1alpha1.DeleteSecretResponse" R
	GetSecret .vault.v1alpha1.GetSecretRequest!.vault.v1alpha1.GetSecretResponse" m
DeleteOrganization).vault.v1alpha1.DeleteOrganizationRequest*.vault.v1alpha1.DeleteOrganizationResponse" v
SaveTokenIntegrations,.vault.v1alpha1.SaveTokenIntegrationsRequest-.vault.v1alpha1.SaveTokenIntegrationsResponse" s
GetTokenIntegrations+.vault.v1alpha1.GetTokenIntegrationsRequest,.vault.v1alpha1.GetTokenIntegrationsResponse" B�
io.cuemby.vault.v1alpha1BVaultAPIProtoPZ1github.com/cuemby/ccp-vault-service/vaultv1alpha1�PPX�Vault.V1Alpha1�Vault\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

