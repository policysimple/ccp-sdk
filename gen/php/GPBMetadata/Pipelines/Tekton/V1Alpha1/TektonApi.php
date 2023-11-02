<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton_api.proto

namespace GPBMetadata\Pipelines\Tekton\V1Alpha1;

class TektonApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
        $pool->internalAddGeneratedFile(
            '
»
*pipelines/tekton/v1alpha1/tekton_api.protopipelines.tekton.v1alpha1"
CreateTektonPipelineRequestL
tekton_pipeline (2#.pipelines.tekton.v1alpha1.PipelineRtektonPipeline
user_id (	RuserId"
CreateTektonPipelineResponseL
tekton_pipeline (2#.pipelines.tekton.v1alpha1.PipelineRtektonPipeline
status (	Rstatus"
DeleteTektonPipelineRequest!
runtime_name (	RruntimeName%
application_id (	RapplicationId%
environment_id (	RenvironmentId"6
DeleteTektonPipelineResponse
status (	Rstatus"
ListTektonTaskPipelineRequest"
ListTektonTaskPipelineResponseF
	task_list (2).pipelines.tekton.v1alpha1.TektonTaskListRtaskList
status (	Rstatus"6
GetPipelineRunRequest

runtime_id (	R	runtimeId"{
GetPipelineRunResponseI
pipeline_run (2&.pipelines.tekton.v1alpha1.PipelineRunRpipelineRun
status (	Rstatus"7
ListPipelineRunRequest

runtime_id (	R	runtimeId"
ListPipelineRunResponseV
pipeline_run_list (2*.pipelines.tekton.v1alpha1.PipelineRunListRpipelineRunList
status (	Rstatus"8
GetStatusRuntimeRequest

runtime_id (	R	runtimeId"R
GetStatusRuntimeResponse6
event (2 .pipelines.tekton.v1alpha1.EventRevent"ù
(ChangeStatusRuntimeAndApplicationRequest%
application_id (	RapplicationId

project_id (	R	projectId\'
organization_id (	RorganizationId!
runtime_name (	RruntimeName
	namespace (	R	namespace

runtime_id (	R	runtimeId"S
)ChangeStatusRuntimeAndApplicationResponse
msg (	Rmsg
error (	Rerror2á
TektonPipelineAPIService
CreateTektonPipeline6.pipelines.tekton.v1alpha1.CreateTektonPipelineRequest7.pipelines.tekton.v1alpha1.CreateTektonPipelineResponse
DeleteTektonPipeline6.pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest7.pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse
ListTektonTaskPipeline8.pipelines.tekton.v1alpha1.ListTektonTaskPipelineRequest9.pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponseu
GetPipelineRun0.pipelines.tekton.v1alpha1.GetPipelineRunRequest1.pipelines.tekton.v1alpha1.GetPipelineRunResponsex
ListPipelineRun1.pipelines.tekton.v1alpha1.ListPipelineRunRequest2.pipelines.tekton.v1alpha1.ListPipelineRunResponse}
GetStatusRuntime2.pipelines.tekton.v1alpha1.GetStatusRuntimeRequest3.pipelines.tekton.v1alpha1.GetStatusRuntimeResponse0°
!ChangeStatusRuntimeAndApplicationC.pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationRequestD.pipelines.tekton.v1alpha1.ChangeStatusRuntimeAndApplicationResponse" B±
#io.cuemby.pipelines.tekton.v1alpha1BTektonAPIProtoPZ:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1¢PPXªPipelines.Tekton.V1Alpha1ÊPipelines\\Tekton\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

