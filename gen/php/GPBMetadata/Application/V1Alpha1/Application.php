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
�
&application/v1alpha1/application.protoapplication.v1alpha1"@
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
private (Rprivate4
branch (2.application.v1alpha1.BranchRbranch"1
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
memoryRule"�
Application
id (	Rid
name (	Rname 
integration (	Rintegration@

repository (2 .application.v1alpha1.RepositoryR
repositoryI
configuration (2#.application.v1alpha1.ConfigurationRconfiguration

project_id (R	projectId!
name_project (	RnameProject\'
organization_id (RorganizationId7
scaling	 (2.application.v1alpha1.ScalingRscalingD
traffic_type
 (2!.application.v1alpha1.TrafficTypeRtrafficType"�
ListApplication
id (	Rid
name (	Rname@

repository (2 .application.v1alpha1.RepositoryR
repository

project_id (R	projectId\'
organization_id (RorganizationId*a
TrafficType
TRAFFIC_TYPE_UNSPECIFIED 
TRAFFIC_TYPE_EXTERNAL
TRAFFIC_TYPE_INTERNALB7Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

