<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/artifacts/v1alpha1/registry_artifacts_api.proto

namespace GPBMetadata\Artifacts\Artifacts\V1Alpha1;

class RegistryArtifactsApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Artifacts\Artifacts\V1Alpha1\RegistryArtifacts::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
9artifacts/artifacts/v1alpha1/registry_artifacts_api.protoartifacts.artifacts.v1alpha1"�
ListArtifactsRegistryRequest\'
organization_id (	RorganizationId

project_id (	R	projectId

runtime_id (	R	runtimeId"�
ListArtifactsRegistryResponse^
artifacts_registry (2/.artifacts.artifacts.v1alpha1.ArtifactsRegistryRartifactsRegistry
status (	Rstatus"W
#CreateLabelArtifactsRegistryRequest
username (	Rusername
email (	Remail"�
$CreateLabelArtifactsRegistryResponseU
label_artifacts (2,.artifacts.artifacts.v1alpha1.LabelArtifactsRlabelArtifacts
status (	Rstatus"�
 AddLabelArtifactsRegistryRequest
label_id (RlabelId!
project_name (	RprojectName\'
repository_name (	RrepositoryName
	reference (	R	reference";
!AddLabelArtifactsRegistryResponse
status (	Rstatus2�
RegistryArtifactsAPIService�
ListArtifactsRegistry:.artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest;.artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse�
CreateLabelArtifactsRegistryA.artifacts.artifacts.v1alpha1.CreateLabelArtifactsRegistryRequestB.artifacts.artifacts.v1alpha1.CreateLabelArtifactsRegistryResponse�
AddLabelArtifactsRegistry>.artifacts.artifacts.v1alpha1.AddLabelArtifactsRegistryRequest?.artifacts.artifacts.v1alpha1.AddLabelArtifactsRegistryResponseB�
&io.cuemby.artifacts.artifacts.v1alpha1BRegistryArtifactsProtoAPIPZ=github.com/cuemby/ccp-sdk/gen/go/artifacts/artifacts/v1alpha1�PPX�Artifacts.Artifacts.V1Alpha1�Artifacts\\Artifacts\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

