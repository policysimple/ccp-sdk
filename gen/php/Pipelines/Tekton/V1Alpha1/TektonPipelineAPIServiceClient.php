<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Pipelines\Tekton\V1Alpha1;

/**
 */
class TektonPipelineAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\CreateTektonPipelineRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateTektonPipeline(\Pipelines\Tekton\V1Alpha1\CreateTektonPipelineRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateTektonPipeline',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\CreateTektonPipelineResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\DeleteTektonPipelineRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteTektonPipeline(\Pipelines\Tekton\V1Alpha1\DeleteTektonPipelineRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteTektonPipeline',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\DeleteTektonPipelineResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\ListTektonTaskPipelineRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListTektonTaskPipeline(\Pipelines\Tekton\V1Alpha1\ListTektonTaskPipelineRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListTektonTaskPipeline',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\ListTektonTaskPipelineResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\GetPipelineRunRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetPipelineRun(\Pipelines\Tekton\V1Alpha1\GetPipelineRunRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetPipelineRun',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\GetPipelineRunResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\ListPipelineRunRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListPipelineRun(\Pipelines\Tekton\V1Alpha1\ListPipelineRunRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListPipelineRun',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\ListPipelineRunResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\GetStatusRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetStatusRuntime(\Pipelines\Tekton\V1Alpha1\GetStatusRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetStatusRuntime',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\GetStatusRuntimeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\ChangeStatusRuntimeAndApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ChangeStatusRuntimeAndApplication(\Pipelines\Tekton\V1Alpha1\ChangeStatusRuntimeAndApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ChangeStatusRuntimeAndApplication',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\ChangeStatusRuntimeAndApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\RebuildTektonPipelineRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function RebuildTektonPipeline(\Pipelines\Tekton\V1Alpha1\RebuildTektonPipelineRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/RebuildTektonPipeline',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\RebuildTektonPipelineResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\MakeRollbackRuntimeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function MakeRollbackRuntime(\Pipelines\Tekton\V1Alpha1\MakeRollbackRuntimeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/MakeRollbackRuntime',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\MakeRollbackRuntimeResponse', 'decode'],
        $metadata, $options);
    }

}
