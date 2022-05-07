<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Payment\V1Alpha1;

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
     * @param \Payment\V1Alpha1\GetPaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function GetPayment(\Payment\V1Alpha1\GetPaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/GetPayment',
        $argument,
        ['\Payment\V1Alpha1\GetPaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1Alpha1\CreatePaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CreatePayment(\Payment\V1Alpha1\CreatePaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/CreatePayment',
        $argument,
        ['\Payment\V1Alpha1\CreatePaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1Alpha1\UpdatePaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function UpdatePayment(\Payment\V1Alpha1\UpdatePaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/UpdatePayment',
        $argument,
        ['\Payment\V1Alpha1\UpdatePaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1Alpha1\DeletePaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function DeletePayment(\Payment\V1Alpha1\DeletePaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/DeletePayment',
        $argument,
        ['\Payment\V1Alpha1\DeletePaymentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Payment\V1Alpha1\ListPaymentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function ListPayment(\Payment\V1Alpha1\ListPaymentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/payment.v1alpha1.PaymentAPIService/ListPayment',
        $argument,
        ['\Payment\V1Alpha1\ListPaymentResponse', 'decode'],
        $metadata, $options);
    }

}
