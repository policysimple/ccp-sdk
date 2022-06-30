<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton.proto

namespace GPBMetadata\Pipelines\Tekton\V1Alpha1;

class Tekton
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
&pipelines/tekton/v1alpha1/tekton.protopipelines.tekton.v1alpha1"
Params
name (	Rname!
value_string (	RvalueString
value_array (	R
valueArray

value_type (	R	valueType"�

TaskParams

param_name (	R	paramName(
param_value_type (	RparamValueType
param_value (	R
paramValue*
param_value_array (	RparamValueArray"H

Workspaces
name (	Rname
main (	Rmain
type (	Rtype"�
Task
id (	Rid
	task_name (	RtaskName"
task_ref_name (	RtaskRefName
	task_kind (	RtaskKind$
task_run_after (	RtaskRunAfterE

workspaces (2%.pipelines.tekton.v1alpha1.WorkspacesR
workspacesF
task_params (2%.pipelines.tekton.v1alpha1.TaskParamsR
taskParams 
description (	Rdescription"�

Pipeline
id (	Rid\'
organization_id (RorganizationId

project_id (R	projectId$
type_meta_kind (	RtypeMetaKind1
type_meta_api_version (	RtypeMetaApiVersion(
object_meta_name (	RobjectMetaName2
object_meta_namespace (	RobjectMetaNamespace9
params (2!.pipelines.tekton.v1alpha1.ParamsRparams5
tasks	 (2.pipelines.tekton.v1alpha1.TaskRtasks
status_type
 (	R
statusTypeV
integration (24.pipelines.tekton.v1alpha1.Pipeline.IntegrationEntryRintegrationr
environment_variables (2=.pipelines.tekton.v1alpha1.Pipeline.EnvironmentVariablesEntryRenvironmentVariablesM
commands (21.pipelines.tekton.v1alpha1.Pipeline.CommandsEntryRcommandsJ
secrets (20.pipelines.tekton.v1alpha1.Pipeline.SecretsEntryRsecretsG
labels (2/.pipelines.tekton.v1alpha1.Pipeline.LabelsEntryRlabels
active (Ractive#
instance_type (	RinstanceTypeN
workspaces_main (2%.pipelines.tekton.v1alpha1.WorkspacesRworkspacesMain!
traffic_type (RtrafficType>
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
value (	Rvalue:89
LabelsEntry
key (	Rkey
value (	Rvalue:8B�
#io.cuemby.pipelines.tekton.v1alpha1BTektonProtoPZ:github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1�PPX�Pipelines.Tekton.V1Alpha1�Pipelines\\Tekton\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

