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
        \GPBMetadata\Application\V1Alpha1\Application::initOnce();
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
(pipelines/runtime/v1alpha1/runtime.protopipelines.runtime.v1alpha1&pipelines/tekton/v1alpha1/tekton.proto"�
Runtime
id (	Rid
name (	RnameN
instance_types (2\'.pipelines.runtime.v1alpha1.IntanceTypeRinstanceTypes\'
organization_id (	RorganizationId

project_id (	R	projectId!
name_project (	RnameProject%
application_id (	RapplicationId!
workspace_id (	RworkspaceId%
environment_id	 (	RenvironmentId
scaler
 (	Rscaler

pod_status (	R	podStatus$
pod_status_msg (	RpodStatusMsgV
integration (24.pipelines.runtime.v1alpha1.Runtime.IntegrationEntryRintegrationr
environment_variables (2=.pipelines.runtime.v1alpha1.Runtime.EnvironmentVariablesEntryRenvironmentVariablesM
commands (21.pipelines.runtime.v1alpha1.Runtime.CommandsEntryRcommandsJ
secrets (20.pipelines.runtime.v1alpha1.Runtime.SecretsEntryRsecretsQ

extra_args (22.pipelines.runtime.v1alpha1.Runtime.ExtraArgsEntryR	extraArgsJ
traffic_type (2\'.pipelines.runtime.v1alpha1.TrafficTypeRtrafficType)
response_message (	RresponseMessage)
environment_name (	RenvironmentName:
environment_internal_name (	RenvironmentInternalName)
application_name (	RapplicationName!
storage_used (RstorageUsed#
storage_limit (RstorageLimit%
integration_id (	RintegrationIdL
application_data (2!.application.v1alpha1.ApplicationRapplicationData\'
custom_pipeline (RcustomPipelineO
before_deploy_tasks (2.pipelines.tekton.v1alpha1.TaskRbeforeDeployTasksM
after_deploy_tasks (2.pipelines.tekton.v1alpha1.TaskRafterDeployTasks(
pod_ingress_cert (	RpodIngressCert5
is_not_exist_dockerfile (RisNotExistDockerfile9
params  (2!.pipelines.tekton.v1alpha1.ParamsRparamsJ
pipeline_run! (2\'.pipelines.runtime.v1alpha1.PipelineRunRpipelineRun>
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
items (2#.pipelines.runtime.v1alpha1.RuntimeRitems"�
IntanceType
id (	Rid
name (	RnameS
resources_rules (2*.pipelines.runtime.v1alpha1.ResourcesRulesRresourcesRules"�
ResourcesRules7
limit (2!.pipelines.runtime.v1alpha1.LimitRlimit=
request (2#.pipelines.runtime.v1alpha1.RequestRrequest"+
Limit
cpu (	Rcpu
ram (	Rram"-
Request
cpu (	Rcpu
ram (	Rram"�
PipelineRun
name (	Rname
label (	Rlabel
	namespace (	R	namespace.
pipeline_run_status (	RpipelineRunStatus*a
TrafficType
TRAFFIC_TYPE_UNSPECIFIED 
TRAFFIC_TYPE_EXTERNAL
TRAFFIC_TYPE_INTERNALB�
$io.cuemby.pipelines.runtime.v1alpha1BRuntimeProtoPZ5github.com/cuemby/ccp-runtime-service/runtimev1alpha1�PPX�Pipelines.Runtime.V1Alpha1�Pipelines\\Runtime\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

