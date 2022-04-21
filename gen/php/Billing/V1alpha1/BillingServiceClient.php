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
     * @param \Billing\V1alpha1\CreateBillingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateBilling(\Billing\V1alpha1\CreateBillingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/CreateBilling',
        $argument,
        ['\Billing\V1alpha1\CreateBillingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\GetBillingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetBilling(\Billing\V1alpha1\GetBillingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/GetBilling',
        $argument,
        ['\Billing\V1alpha1\GetBillingResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\ListBillingsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListBillings(\Billing\V1alpha1\ListBillingsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/ListBillings',
        $argument,
        ['\Billing\V1alpha1\ListBillingsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\UpdateBillingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateBilling(\Billing\V1alpha1\UpdateBillingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/UpdateBilling',
        $argument,
        ['\Billing\V1alpha1\UpdateBillingResponse', 'decode'],
        $metadata, $options);
    }

}
