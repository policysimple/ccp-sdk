<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.CreateCardRequest</code>
 */
class CreateCardRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 1 [json_name = "card"];</code>
     */
    protected $card = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Payment\V1alpha1\Card $card
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 1 [json_name = "card"];</code>
     * @return \Payment\V1alpha1\Card|null
     */
    public function getCard()
    {
        return $this->card;
    }

    public function hasCard()
    {
        return isset($this->card);
    }

    public function clearCard()
    {
        unset($this->card);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 1 [json_name = "card"];</code>
     * @param \Payment\V1alpha1\Card $var
     * @return $this
     */
    public function setCard($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Card::class);
        $this->card = $var;

        return $this;
    }

}
