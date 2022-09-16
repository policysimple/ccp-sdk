<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.SubscriptionItems</code>
 */
class SubscriptionItems extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string subscription_item_id = 2 [json_name = "subscriptionItemId"];</code>
     */
    protected $subscription_item_id = '';
    /**
     * Generated from protobuf field <code>string price_id = 3 [json_name = "priceId"];</code>
     */
    protected $price_id = '';
    /**
     * Generated from protobuf field <code>string product_id = 4 [json_name = "productId"];</code>
     */
    protected $product_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $subscription_item_id
     *     @type string $price_id
     *     @type string $product_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\Payment::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string subscription_item_id = 2 [json_name = "subscriptionItemId"];</code>
     * @return string
     */
    public function getSubscriptionItemId()
    {
        return $this->subscription_item_id;
    }

    /**
     * Generated from protobuf field <code>string subscription_item_id = 2 [json_name = "subscriptionItemId"];</code>
     * @param string $var
     * @return $this
     */
    public function setSubscriptionItemId($var)
    {
        GPBUtil::checkString($var, True);
        $this->subscription_item_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_id = 3 [json_name = "priceId"];</code>
     * @return string
     */
    public function getPriceId()
    {
        return $this->price_id;
    }

    /**
     * Generated from protobuf field <code>string price_id = 3 [json_name = "priceId"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceId($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string product_id = 4 [json_name = "productId"];</code>
     * @return string
     */
    public function getProductId()
    {
        return $this->product_id;
    }

    /**
     * Generated from protobuf field <code>string product_id = 4 [json_name = "productId"];</code>
     * @param string $var
     * @return $this
     */
    public function setProductId($var)
    {
        GPBUtil::checkString($var, True);
        $this->product_id = $var;

        return $this;
    }

}

