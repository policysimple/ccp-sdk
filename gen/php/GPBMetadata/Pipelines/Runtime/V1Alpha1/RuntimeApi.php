<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime_api.proto

namespace GPBMetadata\Pipelines\Runtime\V1Alpha1;

class RuntimeApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\Runtime::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
,pipelines/runtime/v1alpha1/runtime_api.protopipelines.runtime.v1alpha1"m
CreateRuntimeRequest=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"n
CreateRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"m
UpdateRuntimeRequest=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"n
UpdateRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"�
DeleteRuntimeRequest

runtime_id (	R	runtimeId

project_id (R	projectId%
application_id (	RapplicationId
status (	Rstatus"/
DeleteRuntimeResponse
status (	Rstatus"i
GetRuntimeRequest

runtime_id (	R	runtimeId

project_id (R	projectId
status (	Rstatus"k
GetRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus2�
RuntimeAPIServicem

GetRuntime-.pipelines.runtime.v1alpha1.GetRuntimeRequest..pipelines.runtime.v1alpha1.GetRuntimeResponse" v
CreateRuntime0.pipelines.runtime.v1alpha1.CreateRuntimeRequest1.pipelines.runtime.v1alpha1.CreateRuntimeResponse" v
UpdateRuntime0.pipelines.runtime.v1alpha1.UpdateRuntimeRequest1.pipelines.runtime.v1alpha1.UpdateRuntimeResponse" v
DeleteRuntime0.pipelines.runtime.v1alpha1.DeleteRuntimeRequest1.pipelines.runtime.v1alpha1.DeleteRuntimeResponse" B�
$io.cuemby.pipelines.runtime.v1alpha1BRuntimeAPIProtoPZ5github.com/cuemby/ccp-runtime-service/runtimev1alpha1�PPX�Pipelines.Runtime.V1Alpha1�Pipelines\\Runtime\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

