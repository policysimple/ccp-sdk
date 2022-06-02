<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Billing\V1alpha1;

/**
 */
class BillingServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Billing\V1alpha1\ReadBillingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ReadBilling(\Billing\V1alpha1\ReadBillingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/ReadBilling',
        $argument,
        ['\Billing\V1alpha1\ReadBillingResponse', 'decode'],
        $metadata, $options);
    }

}
