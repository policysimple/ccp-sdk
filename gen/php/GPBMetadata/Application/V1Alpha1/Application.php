<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application.proto

namespace GPBMetadata\Application\V1Alpha1;

class Application
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
&application/v1alpha1/application.protoapplication.v1alpha1"O
&DeleteApplicationsByIntegrationRequest%
integration_id (	RintegrationId";
\'DeleteApplicationsByIntegrationResponse
msg (	Rmsg"�

Repository
name (	Rname
	full_name (	RfullName 
description (	Rdescription
fork (Rfork
	clone_url (	RcloneUrl
private (Rprivate"1
Command
build (	Rbuild
run (	Rrun"K
Env
value (	Rvalue
key (	Rkey
	encrypted (R	encrypted"�
Configuration-
envs (2.application.v1alpha1.EnvRenvs9
commands (2.application.v1alpha1.CommandRcommands
port (Rport!
runtime_type (	RruntimeType"�
Application
id (	Rid
name (	Rname 
integration (	Rintegration@

repository (2 .application.v1alpha1.RepositoryR
repositoryI
configuration (2#.application.v1alpha1.ConfigurationRconfiguration

project_id (R	projectId7
scaling (2.application.v1alpha1.ScalingRscaling"�
Scaling
cpu_rule (	RcpuRule(
cool_down_period (	RcoolDownPeriod)
polling_interval (	RpollingInterval
min_replica (	R
minReplica
max_replica (	R
maxReplica
memory_rule (	R
memoryRule"�
CreateApplicationRequest
name (	Rname 
integration (	Rintegration@

repository (2 .application.v1alpha1.RepositoryR
repositoryI
configuration (2#.application.v1alpha1.ConfigurationRconfiguration

project_id (R	projectId7
scaling (2.application.v1alpha1.ScalingRscaling"S
CreateApplicationResponse
msg (	Rmsg
error (	Rerror
id (	Rid"7
ListApplicationRequest

project_id (R	projectId"`
ListApplicationResponseE
applications (2!.application.v1alpha1.ApplicationRapplications"\'
GetApplicationRequest
id (	Rid"]
GetApplicationResponseC
application (2!.application.v1alpha1.ApplicationRapplication"*
DeleteApplicationRequest
id (	Rid"C
DeleteApplicationResponse
msg (	Rmsg
error (	Rerror"|
UpdateApplicationRequest
id (	RidP
application (2..application.v1alpha1.CreateApplicationRequestRapplication"C
UpdateApplicationResponse
msg (	Rmsg
error (	Rerror2�
ApplicationServicet
CreateApplication..application.v1alpha1.CreateApplicationRequest/.application.v1alpha1.CreateApplicationResponsen
ListApplication,.application.v1alpha1.ListApplicationRequest-.application.v1alpha1.ListApplicationResponsek
GetApplication+.application.v1alpha1.GetApplicationRequest,.application.v1alpha1.GetApplicationResponset
DeleteApplication..application.v1alpha1.DeleteApplicationRequest/.application.v1alpha1.DeleteApplicationResponset
UpdateApplication..application.v1alpha1.UpdateApplicationRequest/.application.v1alpha1.UpdateApplicationResponse�
DeleteApplicationsByIntegration<.application.v1alpha1.DeleteApplicationsByIntegrationRequest=.application.v1alpha1.DeleteApplicationsByIntegrationResponseB7Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

