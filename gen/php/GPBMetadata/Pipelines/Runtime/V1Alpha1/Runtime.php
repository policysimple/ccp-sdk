<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime.proto

namespace GPBMetadata\Pipelines\Runtime\V1Alpha1;

class Runtime
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�

(pipelines/runtime/v1alpha1/runtime.protopipelines.runtime.v1alpha1"�
Runtime
id (	Rid
name (	Rname
	namespace (	R	namespace#
instance_type (	RinstanceType\'
organization_id (RorganizationId

project_id (R	projectId%
application_id (	RapplicationId!
workspace_id (	RworkspaceId
scaler	 (	RscalerV
integration
 (24.pipelines.runtime.v1alpha1.Runtime.IntegrationEntryRintegrationr
environment_variables (2=.pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntryRenvironmentVariablesM
commands (21.pipelines.runtime.v1alpha1.Runtime.CommandsEntryRcommandsJ
secrets (20.pipelines.runtime.v1alpha1.Runtime.SecretsEntryRsecretsQ

extra_args (22.pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntryR	extraArgs>
IntegrationEntry
key (	Rkey
value (	Rvalue:8G
EnvironmentVariablesEntry
key (	Rkey
value (	Rvalue:8;
CommandsEntry
key (	Rkey
value (	Rvalue:8:
SecretsEntry
key (	Rkey
value (	Rvalue:8<
ExtraArgsEntry
key (	Rkey
value (	Rvalue:8"H
RuntimeList9
items (2#.pipelines.runtime.v1alpha1.RuntimeRitemsB�
$io.cuemby.pipelines.runtime.v1alpha1BRuntimeProtoPZ5github.com/cuemby/ccp-runtime-service/runtimev1alpha1�PPX�Pipelines.Runtime.V1Alpha1�Pipelines\\Runtime\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

