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

}
