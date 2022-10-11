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
,pipelines/runtime/v1alpha1/runtime_api.protopipelines.runtime.v1alpha1"�
CreateRuntimeRequest=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus
user_id (	RuserId"n
CreateRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"�
UpdateRuntimeRequest=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus
user_id (	RuserId"n
UpdateRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"|
#UpdateResponseMessageRuntimeRequest=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"}
$UpdateResponseMessageRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"�
DeleteRuntimeRequest

runtime_id (	R	runtimeId
name (	Rname 
integration (	Rintegration

project_id (R	projectId\'
organization_id (RorganizationId
user_id (	RuserId"?
DeleteRuntimeResponse
msg (	Rmsg
error (	Rerror"�
"DeleteRuntimesByApplicationRequest%
application_id (	RapplicationId)
name_application (	RnameApplication%
integration_id (	RintegrationId

project_id (R	projectId\'
organization_id (RorganizationId"M
#DeleteRuntimesByApplicationResponse
msg (	Rmsg
error (	Rerror"2
GetRuntimeRequest

runtime_id (	R	runtimeId"k
GetRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"4
ListRuntimesRequest

project_id (R	projectId"z
ListRuntimesResponseJ
runtime_list (2\'.pipelines.runtime.v1alpha1.RuntimeListRruntimeList
status (	Rstatus"�
*ResponseMessageDeleteRuntimeByAppIdRequest%
application_id (	RapplicationId)
name_application (	RnameApplication%
integration_id (	RintegrationId

project_id (R	projectId\'
organization_id (RorganizationId"U
+ResponseMessageDeleteRuntimeByAppIdResponse
msg (	Rmsg
error (	Rerror"O
RebuildRuntimeRequest

runtime_id (	R	runtimeId
user_id (	RuserId"o
RebuildRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus2�	
RuntimeAPIServicem

GetRuntime-.pipelines.runtime.v1alpha1.GetRuntimeRequest..pipelines.runtime.v1alpha1.GetRuntimeResponse" v
CreateRuntime0.pipelines.runtime.v1alpha1.CreateRuntimeRequest1.pipelines.runtime.v1alpha1.CreateRuntimeResponse" v
UpdateRuntime0.pipelines.runtime.v1alpha1.UpdateRuntimeRequest1.pipelines.runtime.v1alpha1.UpdateRuntimeResponse" �
UpdateResponseMessageRuntime?.pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeRequest@.pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeResponse" �
#ResponseMessageDeleteRuntimeByAppIdF.pipelines.runtime.v1alpha1.ResponseMessageDeleteRuntimeByAppIdRequestG.pipelines.runtime.v1alpha1.ResponseMessageDeleteRuntimeByAppIdResponse" v
DeleteRuntime0.pipelines.runtime.v1alpha1.DeleteRuntimeRequest1.pipelines.runtime.v1alpha1.DeleteRuntimeResponse" �
DeleteRuntimesByApplication>.pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationRequest?.pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationResponse" s
ListRuntimes/.pipelines.runtime.v1alpha1.ListRuntimesRequest0.pipelines.runtime.v1alpha1.ListRuntimesResponse" y
RebuildRuntime1.pipelines.runtime.v1alpha1.RebuildRuntimeRequest2.pipelines.runtime.v1alpha1.RebuildRuntimeResponse" B�
$io.cuemby.pipelines.runtime.v1alpha1BRuntimeAPIProtoPZ5github.com/cuemby/ccp-runtime-service/runtimev1alpha1�PPX�Pipelines.Runtime.V1Alpha1�Pipelines\\Runtime\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

