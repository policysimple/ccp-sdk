<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Blockchain\Network\V1alpha1;

/**
 */
class BlockchainAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\CreateNetworkRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateNetwork(\Blockchain\Network\V1alpha1\CreateNetworkRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/CreateNetwork',
        $argument,
        ['\Blockchain\Network\V1alpha1\CreateNetworkResponse', 'decode'],
        $metadata, $options);
    }

}
