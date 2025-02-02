<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.GetPaymentsResponse</code>
 */
class GetPaymentsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string default_card = 1 [json_name = "defaultCard"];</code>
     */
    protected $default_card = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.CardList card = 2 [json_name = "card"];</code>
     */
    protected $card = null;
    /**
     * Generated from protobuf field <code>string error = 3 [json_name = "error"];</code>
     */
    protected $error = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $default_card
     *     @type \Payment\V1alpha1\CardList $card
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string default_card = 1 [json_name = "defaultCard"];</code>
     * @return string
     */
    public function getDefaultCard()
    {
        return $this->default_card;
    }

    /**
     * Generated from protobuf field <code>string default_card = 1 [json_name = "defaultCard"];</code>
     * @param string $var
     * @return $this
     */
    public function setDefaultCard($var)
    {
        GPBUtil::checkString($var, True);
        $this->default_card = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.CardList card = 2 [json_name = "card"];</code>
     * @return \Payment\V1alpha1\CardList|null
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
     * Generated from protobuf field <code>.payment.v1alpha1.CardList card = 2 [json_name = "card"];</code>
     * @param \Payment\V1alpha1\CardList $var
     * @return $this
     */
    public function setCard($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\CardList::class);
        $this->card = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string error = 3 [json_name = "error"];</code>
     * @return string
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Generated from protobuf field <code>string error = 3 [json_name = "error"];</code>
     * @param string $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkString($var, True);
        $this->error = $var;

        return $this;
    }

}

