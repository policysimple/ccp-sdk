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
�
*pipelines/tekton/v1alpha1/tekton_api.protopipelines.tekton.v1alpha1"�
CreateTektonPipelineRequestL
tekton_pipeline (2#.pipelines.tekton.v1alpha1.PipelineRtektonPipeline
user_id (	RuserId"�
CreateTektonPipelineResponseL
tekton_pipeline (2#.pipelines.tekton.v1alpha1.PipelineRtektonPipeline
status (	Rstatus"�
DeleteTektonPipelineRequest!
runtime_name (	RruntimeName%
application_id (	RapplicationId%
environment_id (	RenvironmentId"6
DeleteTektonPipelineResponse
status (	Rstatus"
ListTektonTaskPipelineRequest"�
ListTektonTaskPipelineResponseF
	task_list (2).pipelines.tekton.v1alpha1.TektonTaskListRtaskList
status (	Rstatus"6
ListPipelineRunRequest
	namespace (	R	namespace"�
ListPipelineRunResponseV
pipeline_run_list (2*.pipelines.tekton.v1alpha1.PipelineRunListRpipelineRunList
status (	Rstatus"I
GetPipelineRunRequest
name (	Rname
	namespace (	R	namespace"{
GetPipelineRunResponseI
pipeline_run (2&.pipelines.tekton.v1alpha1.PipelineRunRpipelineRun
status (	Rstatus2�
TektonPipelineAPIService�
CreateTektonPipeline6.pipelines.tekton.v1alpha1.CreateTektonPipelineRequest7.pipelines.tekton.v1alpha1.CreateTektonPipelineResponse�
DeleteTektonPipeline6.pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest7.pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse�
ListTektonTaskPipeline8.pipelines.tekton.v1alpha1.ListTektonTaskPipelineRequest9.pipelines.tekton.v1alpha1.ListTektonTaskPipelineResponsex
ListPipelineRun1.pipelines.tekton.v1alpha1.ListPipelineRunRequest2.pipelines.tekton.v1alpha1.ListPipelineRunResponseu
GetPipelineRun0.pipelines.tekton.v1alpha1.GetPipelineRunRequest1.pipelines.tekton.v1alpha1.GetPipelineRunResponseB�
#io.cuemby.pipelines.tekton.v1alpha1BTektonAPIProtoPZ:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1�PPX�Pipelines.Tekton.V1Alpha1�Pipelines\\Tekton\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

