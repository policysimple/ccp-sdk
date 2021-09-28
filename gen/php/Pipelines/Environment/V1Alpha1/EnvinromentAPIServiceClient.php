<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Pipelines\Environment\V1Alpha1;

/**
 */
class EnvinromentAPIServiceClient extends \Grpc\BaseStub {

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
     * @return \Grpc\UnaryCall
     */
    public function CreateEnvironment(\Pipelines\Environment\V1Alpha1\CreateEnvironmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.environment.v1alpha1.EnvinromentAPIService/CreateEnvironment',
        $argument,
        ['\Pipelines\Environment\V1Alpha1\CreateEnvironmentResponse', 'decode'],
        $metadata, $options);
    }

}
