<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/projects/v1alpha1/registry_projects.proto

namespace GPBMetadata\Artifacts\Projects\V1Alpha1;

class RegistryProjects
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
3artifacts/projects/v1alpha1/registry_projects.protoartifacts.projects.v1alpha1"�
HarborProject!
project_name (	RprojectName
registry_id (R
registryId
public (Rpublic#
storage_limit (RstorageLimit"�
ProjectsRegistry
id (	Rid\'
organization_id (RorganizationId

project_id (R	projectId%
environment_id (	RenvironmentId
active (RactiveB
harbor (2*.artifacts.projects.v1alpha1.HarborProjectRharborB�
%io.cuemby.artifacts.projects.v1alpha1BRegistryProjectsProtoPZ<github.com/cuemby/ccp-sdk/gen/go/artifacts/projects/v1alpha1�PPX�Artifacts.Projects.V1Alpha1�Artifacts\\Projects\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

