<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/instance/v1alpha1/instance.proto

namespace GPBMetadata\Pipelines\Instance\V1Alpha1;

class Instance
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
*pipelines/instance/v1alpha1/instance.protopipelines.instance.v1alpha1"j
TypeGitProvider
ssh_url (	RsshUrl
branch (	Rbranch&
ssh_private_key (	RsshPrivateKey"�
Instance
name (	Rname
	namespace (	R	namespaceJ
type_source (2).pipelines.instance.v1alpha1.InstanceTypeR
typeSourceO
git_provider (2,.pipelines.instance.v1alpha1.TypeGitProviderRgitProvider\\
env_variables (27.pipelines.instance.v1alpha1.Instance.EnvVariablesEntryRenvVariables?
EnvVariablesEntry
key (	Rkey
value (	Rvalue:8*D
InstanceType
INSTANCE_TYPE_UNSPECIFIED 
INSTANCE_TYPE_GITB�
%io.cuemby.pipelines.instance.v1alpha1BInstanceProtoPZ8github.com/cuemby/ccp-pipelines-service/instancev1alpha1�PPX�Pipelines.Instance.V1Alpha1�Pipelines\\Instance\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

