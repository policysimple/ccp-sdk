<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.GetCustomerResponse</code>
 */
class GetCustomerResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Customer customer = 1 [json_name = "customer"];</code>
     */
    protected $customer = null;
    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     */
    protected $status = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Payment\V1alpha1\Customer $customer
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Customer customer = 1 [json_name = "customer"];</code>
     * @return \Payment\V1alpha1\Customer|null
     */
    public function getCustomer()
    {
        return $this->customer;
    }

    public function hasCustomer()
    {
        return isset($this->customer);
    }

    public function clearCustomer()
    {
        unset($this->customer);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Customer customer = 1 [json_name = "customer"];</code>
     * @param \Payment\V1alpha1\Customer $var
     * @return $this
     */
    public function setCustomer($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Customer::class);
        $this->customer = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

}

