<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Artifacts\Quotas\V1Alpha1;

/**
 */
class RegistryQuotasAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Artifacts\Quotas\V1Alpha1\ListQuotasRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListQuotasRegistry(\Artifacts\Quotas\V1Alpha1\ListQuotasRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/ListQuotasRegistry',
        $argument,
        ['\Artifacts\Quotas\V1Alpha1\ListQuotasRegistryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Artifacts\Quotas\V1Alpha1\UpdateQuotaRegistryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateQuotaRegistry(\Artifacts\Quotas\V1Alpha1\UpdateQuotaRegistryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/UpdateQuotaRegistry',
        $argument,
        ['\Artifacts\Quotas\V1Alpha1\UpdateQuotaRegistryResponse', 'decode'],
        $metadata, $options);
    }

}
