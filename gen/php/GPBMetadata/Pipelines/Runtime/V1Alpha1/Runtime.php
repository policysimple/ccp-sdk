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
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
        $pool->internalAddGeneratedFile(
            '
�+
(pipelines/runtime/v1alpha1/runtime.protopipelines.runtime.v1alpha1"@
Branch
name (	Rname
sha (	Rsha
url (	Rurl"�

Repository
name (	Rname
	full_name (	RfullName 
description (	Rdescription
fork (Rfork
	clone_url (	RcloneUrl
private (Rprivate:
branch (2".pipelines.runtime.v1alpha1.BranchRbranch"1
Command
build (	Rbuild
run (	Rrun"K
Env
value (	Rvalue
key (	Rkey
	encrypted (R	encrypted"�
Configuration3
envs (2.pipelines.runtime.v1alpha1.EnvRenvs?
commands (2#.pipelines.runtime.v1alpha1.CommandRcommands
port (Rport!
runtime_type (	RruntimeType"�
Scaling
cpu_rule (	RcpuRule(
cool_down_period (	RcoolDownPeriod)
polling_interval (	RpollingInterval
min_replica (	R
minReplica
max_replica (	R
maxReplica
memory_rule (	R
memoryRule"�
ContainerRegistry!
registry_url (	RregistryUrl#
registry_user (	RregistryUser"
reg_cred_auth (	RregCredAuth

image_name (	R	imageName"�
Application
id (	Rid
name (	Rname 
integration (	RintegrationF

repository (2&.pipelines.runtime.v1alpha1.RepositoryR
repositoryO
configuration (2).pipelines.runtime.v1alpha1.ConfigurationRconfiguration

project_id (	R	projectId!
name_project (	RnameProject#
project_image (	RprojectImage/
project_description	 (	RprojectDescription\'
organization_id
 (	RorganizationId=
scaling (2#.pipelines.runtime.v1alpha1.ScalingRscalingJ
traffic_type (2\'.pipelines.runtime.v1alpha1.TrafficTypeRtrafficType-
integration_status (RintegrationStatusf
docker_image_buildpack (20.pipelines.runtime.v1alpha1.DockerImageBuildpackRdockerImageBuildpack(
no_docker_exists (RnoDockerExists\\
container_registry (2-.pipelines.runtime.v1alpha1.ContainerRegistryRcontainerRegistry*
docker_image_name (	RdockerImageName-
application_status (	RapplicationStatus"�
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
integration_id (	RintegrationIdR
application_data (2\'.pipelines.runtime.v1alpha1.ApplicationRapplicationData\'
custom_pipeline (RcustomPipelineO
before_deploy_tasks (2.pipelines.tekton.v1alpha1.TaskRbeforeDeployTasksM
after_deploy_tasks (2.pipelines.tekton.v1alpha1.TaskRafterDeployTasks(
pod_ingress_cert (	RpodIngressCert5
is_not_exist_dockerfile (RisNotExistDockerfile9
params  (2!.pipelines.tekton.v1alpha1.ParamsRparamsI
pipeline_run! (2&.pipelines.tekton.v1alpha1.PipelineRunRpipelineRun
host_url" (	RhostUrl
	app_label# (	RappLabel

created_at$ (	R	createdAt

updated_at% (	R	updatedAt-
application_status& (	RapplicationStatus%
runtime_status\' (	RruntimeStatusO
configuration( (2).pipelines.runtime.v1alpha1.ConfigurationRconfiguration=
scaling) (2#.pipelines.runtime.v1alpha1.ScalingRscaling
tag_name* (	RtagName>
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
pipeline_run_status (	RpipelineRunStatus*�
DockerImageBuildpack&
"DOCKER_IMAGE_BUILDPACK_UNSPECIFIED !
DOCKER_IMAGE_BUILDPACK_GOLANG
DOCKER_IMAGE_BUILDPACK_JAVA%
!DOCKER_IMAGE_BUILDPACK_JAVASCRIPT!
DOCKER_IMAGE_BUILDPACK_PYTHON*a
TrafficType
TRAFFIC_TYPE_UNSPECIFIED 
TRAFFIC_TYPE_EXTERNAL
TRAFFIC_TYPE_INTERNALB�
$io.cuemby.pipelines.runtime.v1alpha1BRuntimeProtoPZ5github.com/cuemby/ccp-runtime-service/runtimev1alpha1�PPX�Pipelines.Runtime.V1Alpha1�Pipelines\\Runtime\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

