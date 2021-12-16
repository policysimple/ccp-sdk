<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace GPBMetadata\Source\V1Alpha1;

class Source
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
source/v1alpha1/source.protosource.v1alpha1"�
Integration
id (	Rid
user_id (	RuserId
name (	Rname5
provider (2.source.v1alpha1.ProviderRprovider:
data (2&.source.v1alpha1.Integration.DataEntryRdata7
	DataEntry
key (	Rkey
value (	Rvalue:8"�
CreateIntegrationRequest
id (	Rid
user_id (	RuserId
name (	Rname5
provider (2.source.v1alpha1.ProviderRproviderG
data (23.source.v1alpha1.CreateIntegrationRequest.DataEntryRdata7
	DataEntry
key (	Rkey
value (	Rvalue:8"C
CreateIntegrationResponse
msg (	Rmsg
error (	Rerror"2
ListIntegrationsRequest
user_id (	RuserId"\\
ListIntegrationsResponse@
integrations (2.source.v1alpha1.IntegrationRintegrations"\'
GetIntegrationRequest
id (	Rid"X
GetIntegrationResponse>
integration (2.source.v1alpha1.IntegrationRintegration"y
UpdateIntegrationRequest
id (	RidM
integrations (2).source.v1alpha1.CreateIntegrationRequestRintegrations"C
UpdateIntegrationResponse
msg (	Rmsg
error (	Rerror"*
DeleteIntegrationRequest
id (	Rid"C
DeleteIntegrationResponse
msg (	Rmsg
error (	Rerror"�
Provider
id (	Rid
name (	Rname 
description (	Rdescription
logo (	Rlogo7
data (2#.source.v1alpha1.Provider.DataEntryRdata7
	DataEntry
key (	Rkey
value (	Rvalue:8"\'
DeleteProviderRequest
id (	Rid"@
DeleteProviderResponse
msg (	Rmsg
error (	Rerror"k
UpdateProviderRequest
id (	RidB
provider (2&.source.v1alpha1.CreateProviderRequestRprovider"@
UpdateProviderResponse
msg (	Rmsg
error (	Rerror"$
GetProviderRequest
id (	Rid"L
GetProviderResponse5
provider (2.source.v1alpha1.ProviderRprovider"�
CreateProviderRequest
name (	Rname 
description (	Rdescription
logo (	RlogoD
data (20.source.v1alpha1.CreateProviderRequest.DataEntryRdata7
	DataEntry
key (	Rkey
value (	Rvalue:8"@
CreateProviderResponse
msg (	Rmsg
error (	Rerror"
ListProvidersRequest"P
ListProvidersResponse7
	providers (2.source.v1alpha1.ProviderR	providers2�
SourceServicea
CreateProvider&.source.v1alpha1.CreateProviderRequest\'.source.v1alpha1.CreateProviderResponse^
ListProviders%.source.v1alpha1.ListProvidersRequest&.source.v1alpha1.ListProvidersResponseX
GetProvider#.source.v1alpha1.GetProviderRequest$.source.v1alpha1.GetProviderResponsea
UpdateProvider&.source.v1alpha1.UpdateProviderRequest\'.source.v1alpha1.UpdateProviderResponsea
DeleteProvider&.source.v1alpha1.DeleteProviderRequest\'.source.v1alpha1.DeleteProviderResponsej
CreateIntegration).source.v1alpha1.CreateIntegrationRequest*.source.v1alpha1.CreateIntegrationResponseg
ListIntegrations(.source.v1alpha1.ListIntegrationsRequest).source.v1alpha1.ListIntegrationsResponsea
GetIntegration&.source.v1alpha1.GetIntegrationRequest\'.source.v1alpha1.GetIntegrationResponsej
UpdateIntegration).source.v1alpha1.UpdateIntegrationRequest*.source.v1alpha1.UpdateIntegrationResponsej
DeleteIntegration).source.v1alpha1.DeleteIntegrationRequest*.source.v1alpha1.DeleteIntegrationResponseB2Z0github.com/cuemby/ccp-sdk/gen/go/source/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

