<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment.proto

namespace GPBMetadata\Pipelines\Environment\V1Alpha1;

class Environment
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
0pipelines/environment/v1alpha1/environment.protopipelines.environment.v1alpha1"�
Environment
id (	Rid\'
organization_id (	RorganizationId

project_id (	R	projectId
name (	Rname
active (Ractive
status_type (	R
statusType#
internal_name (	RinternalName

created_at	 (	R	createdAt

updated_at
 (	R	updatedAtB�
(io.cuemby.pipelines.environment.v1alpha1BEnvironmentProtoPZ?github.com/cuemby/ccp-sdk/gen/go/pipelines/environment/v1alpha1�PPX�Pipelines.Environment.V1Alpha1�Pipelines\\Environment\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

