<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment_api.proto

namespace GPBMetadata\Pipelines\Environment\V1Alpha1;

class EnvironmentApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Pipelines\Environment\V1Alpha1\Environment::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
4pipelines/environment/v1alpha1/environment_api.protopipelines.environment.v1alpha1"i
CreateEnvironmentRequestM
environment (2+.pipelines.environment.v1alpha1.EnvironmentRenvironment"�
CreateEnvironmentResponseM
environment (2+.pipelines.environment.v1alpha1.EnvironmentRenvironment
status (	Rstatus2�
EnvironmentAPIService�
CreateEnvironment8.pipelines.environment.v1alpha1.CreateEnvironmentRequest9.pipelines.environment.v1alpha1.CreateEnvironmentResponseB�
(io.cuemby.pipelines.environment.v1alpha1BEnvironmentAPIProtoPZ?github.com/cuemby/ccp-sdk/gen/go/pipelines/environment/v1alpha1�PPX�Pipelines.Environment.V1Alpha1�Pipelines\\Environment\\V1Alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

