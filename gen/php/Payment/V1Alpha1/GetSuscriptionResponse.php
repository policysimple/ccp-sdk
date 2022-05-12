<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.GetSuscriptionResponse</code>
 */
class GetSuscriptionResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 1 [json_name = "suscription"];</code>
     */
    protected $suscription = null;
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
     *     @type \PaymentV1Alpha1\Suscription $suscription
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 1 [json_name = "suscription"];</code>
     * @return \PaymentV1Alpha1\Suscription|null
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
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 1 [json_name = "suscription"];</code>
     * @param \PaymentV1Alpha1\Suscription $var
     * @return $this
     */
    public function setSuscription($var)
    {
        GPBUtil::checkMessage($var, \PaymentV1Alpha1\Suscription::class);
        $this->suscription = $var;

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

