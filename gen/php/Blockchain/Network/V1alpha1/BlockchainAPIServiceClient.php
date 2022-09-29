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
     * @param \Blockchain\Network\V1alpha1\AddPeerToOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function AddPeerToOrganization(\Blockchain\Network\V1alpha1\AddPeerToOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToOrganization',
        $argument,
        ['\Blockchain\Network\V1alpha1\AddPeerToOrganizationResponse', 'decode'],
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
     * @param \Blockchain\Network\V1alpha1\CreateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateOrganization(\Blockchain\Network\V1alpha1\CreateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.network.v1alpha1.BlockchainAPIService/CreateOrganization',
        $argument,
        ['\Blockchain\Network\V1alpha1\CreateOrganizationResponse', 'decode'],
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

}
