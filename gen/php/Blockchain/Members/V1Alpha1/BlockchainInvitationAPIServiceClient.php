<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Blockchain\Members\V1Alpha1;

/**
 */
class BlockchainInvitationAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Blockchain\Members\V1Alpha1\CreateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateOrganization(\Blockchain\Members\V1Alpha1\CreateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.members.v1alpha1.BlockchainInvitationAPIService/CreateOrganization',
        $argument,
        ['\Blockchain\Members\V1Alpha1\CreateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Blockchain\Members\V1Alpha1\CreateInvitationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateInvitation(\Blockchain\Members\V1Alpha1\CreateInvitationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/blockchain.members.v1alpha1.BlockchainInvitationAPIService/CreateInvitation',
        $argument,
        ['\Blockchain\Members\V1Alpha1\CreateInvitationResponse', 'decode'],
        $metadata, $options);
    }

}
