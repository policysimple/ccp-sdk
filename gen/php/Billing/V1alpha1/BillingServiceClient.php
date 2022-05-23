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
     * @param \Billing\V1alpha1\CreateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateOrganization(\Billing\V1alpha1\CreateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/CreateOrganization',
        $argument,
        ['\Billing\V1alpha1\CreateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\GetOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOrganization(\Billing\V1alpha1\GetOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/GetOrganization',
        $argument,
        ['\Billing\V1alpha1\GetOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\UpdateOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateOrganization(\Billing\V1alpha1\UpdateOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/UpdateOrganization',
        $argument,
        ['\Billing\V1alpha1\UpdateOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\CreateApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateApplication(\Billing\V1alpha1\CreateApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/CreateApplication',
        $argument,
        ['\Billing\V1alpha1\CreateApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\GetApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetApplication(\Billing\V1alpha1\GetApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/GetApplication',
        $argument,
        ['\Billing\V1alpha1\GetApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\UpdateApplicationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateApplication(\Billing\V1alpha1\UpdateApplicationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/UpdateApplication',
        $argument,
        ['\Billing\V1alpha1\UpdateApplicationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\CreateMetricRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateMetric(\Billing\V1alpha1\CreateMetricRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/CreateMetric',
        $argument,
        ['\Billing\V1alpha1\CreateMetricResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\GetMetricRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetMetric(\Billing\V1alpha1\GetMetricRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/GetMetric',
        $argument,
        ['\Billing\V1alpha1\GetMetricResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Billing\V1alpha1\UpdateMetricRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateMetric(\Billing\V1alpha1\UpdateMetricRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/billing.v1alpha1.BillingService/UpdateMetric',
        $argument,
        ['\Billing\V1alpha1\UpdateMetricResponse', 'decode'],
        $metadata, $options);
    }

}
