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
     * @param \Pipelines\Tekton\V1Alpha1\GetOneTektonPipelineRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneTektonPipeline(\Pipelines\Tekton\V1Alpha1\GetOneTektonPipelineRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetOneTektonPipeline',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\GetOneTektonPipelineResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Tekton\V1Alpha1\ListTektonPipelineRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListTektonPipeline(\Pipelines\Tekton\V1Alpha1\ListTektonPipelineRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListTektonPipeline',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\ListTektonPipelineResponse', 'decode'],
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
     * @param \Pipelines\Tekton\V1Alpha1\ListTektonTaskRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListTektonTask(\Pipelines\Tekton\V1Alpha1\ListTektonTaskRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListTektonTask',
        $argument,
        ['\Pipelines\Tekton\V1Alpha1\ListTektonTaskResponse', 'decode'],
        $metadata, $options);
    }

}
