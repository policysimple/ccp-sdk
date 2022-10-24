<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Payment\V1alpha1;

/**
 */
class PaymentAPIServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Create a new service 
     * @param \Payment\V1alpha1\CreateCustomerRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateCustomer(\Payment\V1alpha1\CreateCustomerRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreateCustomer',
        $argument,
        ['\Payment\V1alpha1\CreateCustomerResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\CreateSubscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateSubscription(\Payment\V1alpha1\CreateSubscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreateSubscription',
        $argument,
        ['\Payment\V1alpha1\CreateSubscriptionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\CreatePaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreatePayment(\Payment\V1alpha1\CreatePaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreatePayment',
        $argument,
        ['\Payment\V1alpha1\CreatePaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\CreateCardRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateCard(\Payment\V1alpha1\CreateCardRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreateCard',
        $argument,
        ['\Payment\V1alpha1\CreateCardResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\CreateProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateProject(\Payment\V1alpha1\CreateProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreateProject',
        $argument,
        ['\Payment\V1alpha1\CreateProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\CreateInvoiceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateInvoice(\Payment\V1alpha1\CreateInvoiceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreateInvoice',
        $argument,
        ['\Payment\V1alpha1\CreateInvoiceResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Get the service
     * @param \Payment\V1alpha1\GetOrganizationRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetOrganization(\Payment\V1alpha1\GetOrganizationRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetOrganization',
        $argument,
        ['\Payment\V1alpha1\GetOrganizationResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\GetSubscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetSubscription(\Payment\V1alpha1\GetSubscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetSubscription',
        $argument,
        ['\Payment\V1alpha1\GetSubscriptionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\GetPaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetPayment(\Payment\V1alpha1\GetPaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetPayment',
        $argument,
        ['\Payment\V1alpha1\GetPaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\GetCustomerRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetCustomer(\Payment\V1alpha1\GetCustomerRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetCustomer',
        $argument,
        ['\Payment\V1alpha1\GetCustomerResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\GetBilingMonthRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetBilingMonth(\Payment\V1alpha1\GetBilingMonthRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetBilingMonth',
        $argument,
        ['\Payment\V1alpha1\GetBilingMonthResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\GetPaymentsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetPayments(\Payment\V1alpha1\GetPaymentsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetPayments',
        $argument,
        ['\Payment\V1alpha1\GetPaymentsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * List the service
     * @param \Payment\V1alpha1\ListProjectsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListProjects(\Payment\V1alpha1\ListProjectsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/ListProjects',
        $argument,
        ['\Payment\V1alpha1\ListProjectsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\ListPaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListPayment(\Payment\V1alpha1\ListPaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/ListPayment',
        $argument,
        ['\Payment\V1alpha1\ListPaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\ListSubscriptionItemsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListSubscriptionItems(\Payment\V1alpha1\ListSubscriptionItemsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/ListSubscriptionItems',
        $argument,
        ['\Payment\V1alpha1\ListSubscriptionItemsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Update service
     * @param \Payment\V1alpha1\UpdateSubscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateSubscription(\Payment\V1alpha1\UpdateSubscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/UpdateSubscription',
        $argument,
        ['\Payment\V1alpha1\UpdateSubscriptionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\SetDefaultPaymentMethodRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function SetDefaultPaymentMethod(\Payment\V1alpha1\SetDefaultPaymentMethodRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/SetDefaultPaymentMethod',
        $argument,
        ['\Payment\V1alpha1\SetDefaultPaymentMethodResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Delete service
     * @param \Payment\V1alpha1\DeleteProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteProject(\Payment\V1alpha1\DeleteProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/DeleteProject',
        $argument,
        ['\Payment\V1alpha1\DeleteProjectResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\DeletePaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeletePayment(\Payment\V1alpha1\DeletePaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/DeletePayment',
        $argument,
        ['\Payment\V1alpha1\DeletePaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\CancelSubscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CancelSubscription(\Payment\V1alpha1\CancelSubscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CancelSubscription',
        $argument,
        ['\Payment\V1alpha1\CancelSubscriptionResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1alpha1\DeleteCustomerRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeleteCustomer(\Payment\V1alpha1\DeleteCustomerRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/DeleteCustomer',
        $argument,
        ['\Payment\V1alpha1\DeleteCustomerResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Filter service
     * @param \Payment\V1alpha1\InvoiceFilterRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function InvoiceFilter(\Payment\V1alpha1\InvoiceFilterRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/InvoiceFilter',
        $argument,
        ['\Payment\V1alpha1\InvoiceFilterResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Pause Project Consumption
     * @param \Payment\V1alpha1\StopProjectRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function StopProject(\Payment\V1alpha1\StopProjectRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/StopProject',
        $argument,
        ['\Payment\V1alpha1\StopProjectResponse', 'decode'],
        $metadata, $options);
    }

}
