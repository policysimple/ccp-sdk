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
     * @param \Payment\V1alpha1\CreateSuscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreateSuscription(\Payment\V1alpha1\CreateSuscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreateSuscription',
        $argument,
        ['\Payment\V1alpha1\CreateSuscriptionResponse', 'decode'],
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
     * @param \Payment\V1alpha1\GetSuscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetSuscription(\Payment\V1alpha1\GetSuscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetSuscription',
        $argument,
        ['\Payment\V1alpha1\GetSuscriptionResponse', 'decode'],
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
     * @param \Payment\V1alpha1\UpdateSuscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdateSuscription(\Payment\V1alpha1\UpdateSuscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/UpdateSuscription',
        $argument,
        ['\Payment\V1alpha1\UpdateSuscriptionResponse', 'decode'],
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
     * @param \Payment\V1alpha1\CancelSuscriptionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CancelSuscription(\Payment\V1alpha1\CancelSuscriptionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CancelSuscription',
        $argument,
        ['\Payment\V1alpha1\CancelSuscriptionResponse', 'decode'],
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

}
