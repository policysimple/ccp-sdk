<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.DeleteCustomerResponse</code>
 */
class DeleteCustomerResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string status = 1 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Card cards = 6 [json_name = "cards"];</code>
     */
    private $cards;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $status
     *     @type \Payment\V1alpha1\Card[]|\Google\Protobuf\Internal\RepeatedField $cards
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string status = 1 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 1 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Card cards = 6 [json_name = "cards"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCards()
    {
        return $this->cards;
    }

    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Card cards = 6 [json_name = "cards"];</code>
     * @param \Payment\V1alpha1\Card[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCards($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Payment\V1alpha1\Card::class);
        $this->cards = $arr;

        return $this;
    }

}

