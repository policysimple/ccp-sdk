<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Pipelines\Instance\V1Alpha1;

/**
 */
class InstanceAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Pipelines\Instance\V1Alpha1\CreateInstanceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateInstance(\Pipelines\Instance\V1Alpha1\CreateInstanceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/pipelines.instance.v1alpha1.InstanceAPIService/CreateInstance',
        $argument,
        ['\Pipelines\Instance\V1Alpha1\CreateInstanceResponse', 'decode'],
        $metadata, $options);
    }

}
