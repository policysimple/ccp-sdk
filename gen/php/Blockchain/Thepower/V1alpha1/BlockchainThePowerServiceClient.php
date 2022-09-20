<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Blockchain\Thepower\V1alpha1;

/**
 */
class BlockchainThePowerServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Blockchain\Thepower\V1alpha1\CreateTpChainRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateTpChain(\Blockchain\Thepower\V1alpha1\CreateTpChainRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.thepower.v1alpha1.BlockchainThePowerService/CreateTpChain',
        $argument,
        ['\Blockchain\Thepower\V1alpha1\CreateTpChainResponse', 'decode'],
        $metadata, $options);
    }

}
