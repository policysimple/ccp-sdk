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

    /**
     * @param \Blockchain\Network\V1alpha1\AddPeerToCorporationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AddPeerToCorporation(\Blockchain\Network\V1alpha1\AddPeerToCorporationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToCorporation',
        $argument,
        ['\Blockchain\Network\V1alpha1\AddPeerToCorporationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\GetBlockchainsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetBlockchains(\Blockchain\Network\V1alpha1\GetBlockchainsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchains',
        $argument,
        ['\Blockchain\Network\V1alpha1\GetBlockchainsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\GetBlockchainsByUserIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetBlockchainsByUserId(\Blockchain\Network\V1alpha1\GetBlockchainsByUserIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainsByUserId',
        $argument,
        ['\Blockchain\Network\V1alpha1\GetBlockchainsByUserIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\GetBlockchainByIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetBlockchainById(\Blockchain\Network\V1alpha1\GetBlockchainByIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainById',
        $argument,
        ['\Blockchain\Network\V1alpha1\GetBlockchainByIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\GetCorporationsByBlockchainIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetCorporationsByBlockchainId(\Blockchain\Network\V1alpha1\GetCorporationsByBlockchainIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/GetCorporationsByBlockchainId',
        $argument,
        ['\Blockchain\Network\V1alpha1\GetCorporationsByBlockchainIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\SendInvitationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SendInvitation(\Blockchain\Network\V1alpha1\SendInvitationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/SendInvitation',
        $argument,
        ['\Blockchain\Network\V1alpha1\SendInvitationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\CreateCorporationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateCorporation(\Blockchain\Network\V1alpha1\CreateCorporationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/CreateCorporation',
        $argument,
        ['\Blockchain\Network\V1alpha1\CreateCorporationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\CreateChannelRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateChannel(\Blockchain\Network\V1alpha1\CreateChannelRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/CreateChannel',
        $argument,
        ['\Blockchain\Network\V1alpha1\CreateChannelResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\GetPeersByCorporationIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetPeersByCorporationId(\Blockchain\Network\V1alpha1\GetPeersByCorporationIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/GetPeersByCorporationId',
        $argument,
        ['\Blockchain\Network\V1alpha1\GetPeersByCorporationIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\GetOrderersByNetworkIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOrderersByNetworkId(\Blockchain\Network\V1alpha1\GetOrderersByNetworkIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/GetOrderersByNetworkId',
        $argument,
        ['\Blockchain\Network\V1alpha1\GetOrderersByNetworkIdResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Network\V1alpha1\AddOrdererByNetworkIdRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AddOrdererByNetworkId(\Blockchain\Network\V1alpha1\AddOrdererByNetworkIdRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/AddOrdererByNetworkId',
        $argument,
        ['\Blockchain\Network\V1alpha1\AddOrdererByNetworkIdResponse', 'decode'],
        $metadata, $options);
    }

}
