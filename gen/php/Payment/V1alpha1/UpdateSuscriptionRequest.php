<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.UpdateSuscriptionRequest</code>
 */
class UpdateSuscriptionRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string customer_id = 1 [json_name = "customerId"];</code>
     */
    protected $customer_id = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 2 [json_name = "suscription"];</code>
     */
    protected $suscription = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $customer_id
     *     @type \Payment\V1alpha1\Suscription $suscription
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string customer_id = 1 [json_name = "customerId"];</code>
     * @return string
     */
    public function getCustomerId()
    {
        return $this->customer_id;
    }

    /**
     * Generated from protobuf field <code>string customer_id = 1 [json_name = "customerId"];</code>
     * @param string $var
     * @return $this
     */
    public function setCustomerId($var)
    {
        GPBUtil::checkString($var, True);
        $this->customer_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 2 [json_name = "suscription"];</code>
     * @return \Payment\V1alpha1\Suscription|null
     */
    public function getSuscription()
    {
        return $this->suscription;
    }

    public function hasSuscription()
    {
        return isset($this->suscription);
    }

    public function clearSuscription()
    {
        unset($this->suscription);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 2 [json_name = "suscription"];</code>
     * @param \Payment\V1alpha1\Suscription $var
     * @return $this
     */
    public function setSuscription($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Suscription::class);
        $this->suscription = $var;

        return $this;
    }

}

