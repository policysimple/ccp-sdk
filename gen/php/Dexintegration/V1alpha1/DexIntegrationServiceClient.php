<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Dexintegration\V1alpha1;

/**
 */
class DexIntegrationServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Get Users Dex
     * @param \Dexintegration\V1alpha1\GetListUserDexRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetListUserDex(\Dexintegration\V1alpha1\GetListUserDexRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dexintegration.v1alpha1.DexIntegrationService/GetListUserDex',
        $argument,
        ['\Dexintegration\V1alpha1\GetListUserDexResponse', 'decode'],
        $metadata, $options);
    }

}
