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
�
&application/v1alpha1/application.protoapplication.v1alpha1"�

Repository
name (	Rname
	full_name (	RfullName 
description (	Rdescription
fork (Rfork
	clone_url (	RcloneUrl
private (Rprivate"1
Command
build (	Rbuild
run (	Rrun"I
Env
name (	Rname
key (	Rkey
	encrypted (R	encrypted"�

envs (2.application.v1alpha1.EnvRenvs9
commands (2.application.v1alpha1.CommandRcommands
port (Rport"�
Application
id (	Rid
name (	Rname 
integration (	Rintegration@

repository (2 .application.v1alpha1.RepositoryR
repositoryI


project_id (
CreateApplicationRequest
name (	Rname 
integration (	Rintegration@

repository (2 .application.v1alpha1.RepositoryR
repositoryI


project_id (
CreateApplicationResponse
msg (	Rmsg
error (	Rerror"7
ListApplicationRequest

project_id (
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
error (	Rerror2�
ApplicationServicet
CreateApplication..application.v1alpha1.CreateApplicationRequest/.application.v1alpha1.CreateApplicationResponsen
ListApplication,.application.v1alpha1.ListApplicationRequest-.application.v1alpha1.ListApplicationResponsek
GetApplication+.application.v1alpha1.GetApplicationRequest,.application.v1alpha1.GetApplicationResponset
DeleteApplication..application.v1alpha1.DeleteApplicationRequest/.application.v1alpha1.DeleteApplicationResponset
UpdateApplication..application.v1alpha1.UpdateApplicationRequest/.application.v1alpha1.UpdateApplicationResponseB7Z5github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}
