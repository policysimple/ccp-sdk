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
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>string customer_id = 2 [json_name = "customerId"];</code>
     */
    protected $customer_id = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 3 [json_name = "card"];</code>
     */
    protected $card = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $organization_id
     *     @type string $customer_id
     *     @type \Payment\V1alpha1\Card $card
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string customer_id = 2 [json_name = "customerId"];</code>
     * @return string
     */
    public function getCustomerId()
    {
        return $this->customer_id;
    }

    /**
     * Generated from protobuf field <code>string customer_id = 2 [json_name = "customerId"];</code>
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
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 3 [json_name = "card"];</code>
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
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 3 [json_name = "card"];</code>
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

