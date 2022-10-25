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

    /**
     * @param \Blockchain\Thepower\V1alpha1\GetTpChainsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetTpChains(\Blockchain\Thepower\V1alpha1\GetTpChainsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChains',
        $argument,
        ['\Blockchain\Thepower\V1alpha1\GetTpChainsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Thepower\V1alpha1\GetTpChainsByUserIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetTpChainsByUserId(\Blockchain\Thepower\V1alpha1\GetTpChainsByUserIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainsByUserId',
        $argument,
        ['\Blockchain\Thepower\V1alpha1\GetTpChainsByUserIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Thepower\V1alpha1\GetTpChainByIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetTpChainById(\Blockchain\Thepower\V1alpha1\GetTpChainByIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainById',
        $argument,
        ['\Blockchain\Thepower\V1alpha1\GetTpChainByIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Thepower\V1alpha1\UpdateTpChainRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateTpChain(\Blockchain\Thepower\V1alpha1\UpdateTpChainRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.thepower.v1alpha1.BlockchainThePowerService/UpdateTpChain',
        $argument,
        ['\Blockchain\Thepower\V1alpha1\UpdateTpChainResponse', 'decode'],
        $metadata, $options);
    }

}
