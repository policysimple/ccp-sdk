<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Pipelines\Environment\V1Alpha1;

/**
 */
class EnvironmentAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Pipelines\Environment\V1Alpha1\CreateEnvironmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateEnvironment(\Pipelines\Environment\V1Alpha1\CreateEnvironmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateEnvironment',
        $argument,
        ['\Pipelines\Environment\V1Alpha1\CreateEnvironmentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Environment\V1Alpha1\GetOneEnvironmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOneEnvironment(\Pipelines\Environment\V1Alpha1\GetOneEnvironmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.environment.v1alpha1.EnvironmentAPIService/GetOneEnvironment',
        $argument,
        ['\Pipelines\Environment\V1Alpha1\GetOneEnvironmentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Environment\V1Alpha1\ListEnvironmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListEnvironment(\Pipelines\Environment\V1Alpha1\ListEnvironmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.environment.v1alpha1.EnvironmentAPIService/ListEnvironment',
        $argument,
        ['\Pipelines\Environment\V1Alpha1\ListEnvironmentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Pipelines\Environment\V1Alpha1\DeleteEnvironmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteEnvironment(\Pipelines\Environment\V1Alpha1\DeleteEnvironmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.environment.v1alpha1.EnvironmentAPIService/DeleteEnvironment',
        $argument,
        ['\Pipelines\Environment\V1Alpha1\DeleteEnvironmentResponse', 'decode'],
        $metadata, $options);
    }

}
