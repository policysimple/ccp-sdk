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
�4
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

project_id (	R	projectId\'
organization_id (	RorganizationId
user_id (	RuserId"?
DeleteRuntimeResponse
msg (	Rmsg
error (	Rerror"�
"DeleteRuntimesByApplicationRequest%
application_id (	RapplicationId)
name_application (	RnameApplication%
integration_id (	RintegrationId

project_id (	R	projectId\'
organization_id (	RorganizationId"M
#DeleteRuntimesByApplicationResponse
msg (	Rmsg
error (	Rerror"d
"DeleteRuntimesByEnvironmentRequest%
environment_id (	RenvironmentId
user_id (	RuserId"M
#DeleteRuntimesByEnvironmentResponse
msg (	Rmsg
error (	Rerror"2
GetRuntimeRequest

runtime_id (	R	runtimeId"k
GetRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"4
ListRuntimesRequest

project_id (	R	projectId"z
ListRuntimesResponseJ
runtime_list (2\'.pipelines.runtime.v1alpha1.RuntimeListRruntimeList
status (	Rstatus"�
*ResponseMessageDeleteRuntimeByAppIdRequest%
application_id (	RapplicationId)
name_application (	RnameApplication%
integration_id (	RintegrationId

project_id (	R	projectId\'
organization_id (	RorganizationId"U
+ResponseMessageDeleteRuntimeByAppIdResponse
msg (	Rmsg
error (	Rerror"o
RebuildRuntimeRequest=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
user_id (	RuserId"o
RebuildRuntimeResponse=
runtime (2#.pipelines.runtime.v1alpha1.RuntimeRruntime
status (	Rstatus"�
AlreadyExistsRuntimeRequest%
integration_id (	RintegrationIdj
integration (2H.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeRequest.IntegrationEntryRintegration%
environment_id (	RenvironmentId

project_id (	R	projectId\'
organization_id (	RorganizationId
user_id (	RuserId>
IntegrationEntry
key (	Rkey
value (	Rvalue:8"]
AlreadyExistsRuntimeResponse%
already_exists (	RalreadyExists
status (	Rstatus"!
GetRuntimesInLast24HoursRequest"�
 GetRuntimesInLast24HoursResponseJ
runtime_list (2\'.pipelines.runtime.v1alpha1.RuntimeListRruntimeList
status (	Rstatus"�
GetRuntimesByApplicationRequest%
application_id (	RapplicationId

project_id (	R	projectId\'
organization_id (	RorganizationId"�
 GetRuntimesByApplicationResponseJ
runtime_list (2\'.pipelines.runtime.v1alpha1.RuntimeListRruntimeList
status (	Rstatus"�
(ChangeStatusRuntimeAndApplicationRequest%
application_id (	RapplicationId

project_id (	R	projectId\'
organization_id (	RorganizationId

runtime_id (	R	runtimeId
status (	Rstatus"S
)ChangeStatusRuntimeAndApplicationResponse
msg (	Rmsg
error (	Rerror"�
UpdateApplicationChangesRequest%
application_id (	RapplicationId

project_id (	R	projectId\'
organization_id (	RorganizationId

runtime_id (	R	runtimeId"J
 UpdateApplicationChangesResponse
msg (	Rmsg
error (	Rerror"�
MakeRollbackRuntimeRequest%
application_id (	RapplicationId

project_id (	R	projectId\'
organization_id (	RorganizationId

runtime_id (	R	runtimeId
tag_name (	RtagName"E
MakeRollbackRuntimeResponse
msg (	Rmsg
error (	Rerror2�
RuntimeAPIServicem

GetRuntime-.pipelines.runtime.v1alpha1.GetRuntimeRequest..pipelines.runtime.v1alpha1.GetRuntimeResponse" v
CreateRuntime0.pipelines.runtime.v1alpha1.CreateRuntimeRequest1.pipelines.runtime.v1alpha1.CreateRuntimeResponse" v
UpdateRuntime0.pipelines.runtime.v1alpha1.UpdateRuntimeRequest1.pipelines.runtime.v1alpha1.UpdateRuntimeResponse" �
UpdateResponseMessageRuntime?.pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeRequest@.pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeResponse" �
#ResponseMessageDeleteRuntimeByAppIdF.pipelines.runtime.v1alpha1.ResponseMessageDeleteRuntimeByAppIdRequestG.pipelines.runtime.v1alpha1.ResponseMessageDeleteRuntimeByAppIdResponse" v
DeleteRuntime0.pipelines.runtime.v1alpha1.DeleteRuntimeRequest1.pipelines.runtime.v1alpha1.DeleteRuntimeResponse" �
DeleteRuntimesByApplication>.pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationRequest?.pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationResponse" �
DeleteRuntimesByEnvironment>.pipelines.runtime.v1alpha1.DeleteRuntimesByEnvironmentRequest?.pipelines.runtime.v1alpha1.DeleteRuntimesByEnvironmentResponse" s
ListRuntimes/.pipelines.runtime.v1alpha1.ListRuntimesRequest0.pipelines.runtime.v1alpha1.ListRuntimesResponse" y
RebuildRuntime1.pipelines.runtime.v1alpha1.RebuildRuntimeRequest2.pipelines.runtime.v1alpha1.RebuildRuntimeResponse" �
AlreadyExistsRuntime7.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeRequest8.pipelines.runtime.v1alpha1.AlreadyExistsRuntimeResponse" �
GetRuntimesInLast24Hours;.pipelines.runtime.v1alpha1.GetRuntimesInLast24HoursRequest<.pipelines.runtime.v1alpha1.GetRuntimesInLast24HoursResponse" �
GetRuntimesByApplication;.pipelines.runtime.v1alpha1.GetRuntimesByApplicationRequest<.pipelines.runtime.v1alpha1.GetRuntimesByApplicationResponse" �
!ChangeStatusRuntimeAndApplicationD.pipelines.runtime.v1alpha1.ChangeStatusRuntimeAndApplicationRequestE.pipelines.runtime.v1alpha1.ChangeStatusRuntimeAndApplicationResponse" �
UpdateApplicationChanges;.pipelines.runtime.v1alpha1.UpdateApplicationChangesRequest<.pipelines.runtime.v1alpha1.UpdateApplicationChangesResponse" �
MakeRollbackRuntime6.pipelines.runtime.v1alpha1.MakeRollbackRuntimeRequest7.pipelines.runtime.v1alpha1.MakeRollbackRuntimeResponse" B�
$io.cuemby.pipelines.runtime.v1alpha1BRuntimeAPIProtoPZ5github.com/cuemby/ccp-runtime-service/runtimev1alpha1�PPX�Pipelines.Runtime.V1Alpha1�Pipelines\\Runtime\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

