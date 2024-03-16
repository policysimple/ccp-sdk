<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Pipelines\Runtime\V1Alpha1;

/**
 */
class RuntimeAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\GetRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRuntime(\Pipelines\Runtime\V1Alpha1\GetRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\GetRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\CreateRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateRuntime(\Pipelines\Runtime\V1Alpha1\CreateRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/CreateRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\CreateRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\UpdateRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateRuntime(\Pipelines\Runtime\V1Alpha1\UpdateRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\UpdateRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\UpdateResponseMessageRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateResponseMessageRuntime(\Pipelines\Runtime\V1Alpha1\UpdateResponseMessageRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateResponseMessageRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\UpdateResponseMessageRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\ResponseMessageDeleteRuntimeByAppIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ResponseMessageDeleteRuntimeByAppId(\Pipelines\Runtime\V1Alpha1\ResponseMessageDeleteRuntimeByAppIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/ResponseMessageDeleteRuntimeByAppId',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\ResponseMessageDeleteRuntimeByAppIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\DeleteRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRuntime(\Pipelines\Runtime\V1Alpha1\DeleteRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\DeleteRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\DeleteRuntimesByApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRuntimesByApplication(\Pipelines\Runtime\V1Alpha1\DeleteRuntimesByApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByApplication',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\DeleteRuntimesByApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\DeleteRuntimesByEnvironmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRuntimesByEnvironment(\Pipelines\Runtime\V1Alpha1\DeleteRuntimesByEnvironmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByEnvironment',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\DeleteRuntimesByEnvironmentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\ListRuntimesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListRuntimes(\Pipelines\Runtime\V1Alpha1\ListRuntimesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/ListRuntimes',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\ListRuntimesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\RebuildRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function RebuildRuntime(\Pipelines\Runtime\V1Alpha1\RebuildRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/RebuildRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\RebuildRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\AlreadyExistsRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AlreadyExistsRuntime(\Pipelines\Runtime\V1Alpha1\AlreadyExistsRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/AlreadyExistsRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\AlreadyExistsRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\GetRuntimesInLast24HoursRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRuntimesInLast24Hours(\Pipelines\Runtime\V1Alpha1\GetRuntimesInLast24HoursRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntimesInLast24Hours',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\GetRuntimesInLast24HoursResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\GetRuntimesByApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetRuntimesByApplication(\Pipelines\Runtime\V1Alpha1\GetRuntimesByApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntimesByApplication',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\GetRuntimesByApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\ChangeStatusRuntimeAndApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ChangeStatusRuntimeAndApplication(\Pipelines\Runtime\V1Alpha1\ChangeStatusRuntimeAndApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/ChangeStatusRuntimeAndApplication',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\ChangeStatusRuntimeAndApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\UpdateApplicationChangesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateApplicationChanges(\Pipelines\Runtime\V1Alpha1\UpdateApplicationChangesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateApplicationChanges',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\UpdateApplicationChangesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\MakeRollbackRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function MakeRollbackRuntime(\Pipelines\Runtime\V1Alpha1\MakeRollbackRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/MakeRollbackRuntime',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\MakeRollbackRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Runtime\V1Alpha1\DeleteRuntimesByProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteRuntimesByProject(\Pipelines\Runtime\V1Alpha1\DeleteRuntimesByProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntimesByProject',
        $argument,
        ['\Pipelines\Runtime\V1Alpha1\DeleteRuntimesByProjectResponse', 'decode'],
        $metadata, $options);
    }

}
