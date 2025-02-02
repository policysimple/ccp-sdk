<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Subscription</code>
 */
class Subscription extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string subscription_id = 1 [json_name = "subscriptionId"];</code>
     */
    protected $subscription_id = '';
    /**
     * Generated from protobuf field <code>string subscription_item_id = 2 [json_name = "subscriptionItemId"];</code>
     */
    protected $subscription_item_id = '';
    /**
     * Generated from protobuf field <code>string invoice_id = 3 [json_name = "invoiceId"];</code>
     */
    protected $invoice_id = '';
    /**
     * Generated from protobuf field <code>string price_xsmall = 4 [json_name = "priceXsmall"];</code>
     */
    protected $price_xsmall = '';
    /**
     * Generated from protobuf field <code>string price_small = 5 [json_name = "priceSmall"];</code>
     */
    protected $price_small = '';
    /**
     * Generated from protobuf field <code>string price_medium = 6 [json_name = "priceMedium"];</code>
     */
    protected $price_medium = '';
    /**
     * Generated from protobuf field <code>string price_large = 7 [json_name = "priceLarge"];</code>
     */
    protected $price_large = '';
    /**
     * Generated from protobuf field <code>string price_xlarge = 8 [json_name = "priceXlarge"];</code>
     */
    protected $price_xlarge = '';
    /**
     * Generated from protobuf field <code>string currency = 9 [json_name = "currency"];</code>
     */
    protected $currency = '';
    /**
     * Generated from protobuf field <code>string interval = 10 [json_name = "interval"];</code>
     */
    protected $interval = '';
    /**
     * Generated from protobuf field <code>string trial_date_end = 11 [json_name = "trialDateEnd"];</code>
     */
    protected $trial_date_end = '';
    /**
     * Generated from protobuf field <code>bool is_trial = 12 [json_name = "isTrial"];</code>
     */
    protected $is_trial = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $subscription_id
     *     @type string $subscription_item_id
     *     @type string $invoice_id
     *     @type string $price_xsmall
     *     @type string $price_small
     *     @type string $price_medium
     *     @type string $price_large
     *     @type string $price_xlarge
     *     @type string $currency
     *     @type string $interval
     *     @type string $trial_date_end
     *     @type bool $is_trial
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\Payment::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string subscription_id = 1 [json_name = "subscriptionId"];</code>
     * @return string
     */
    public function getSubscriptionId()
    {
        return $this->subscription_id;
    }

    /**
     * Generated from protobuf field <code>string subscription_id = 1 [json_name = "subscriptionId"];</code>
     * @param string $var
     * @return $this
     */
    public function setSubscriptionId($var)
    {
        GPBUtil::checkString($var, True);
        $this->subscription_id = $var;

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
     * Generated from protobuf field <code>string invoice_id = 3 [json_name = "invoiceId"];</code>
     * @return string
     */
    public function getInvoiceId()
    {
        return $this->invoice_id;
    }

    /**
     * Generated from protobuf field <code>string invoice_id = 3 [json_name = "invoiceId"];</code>
     * @param string $var
     * @return $this
     */
    public function setInvoiceId($var)
    {
        GPBUtil::checkString($var, True);
        $this->invoice_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_xsmall = 4 [json_name = "priceXsmall"];</code>
     * @return string
     */
    public function getPriceXsmall()
    {
        return $this->price_xsmall;
    }

    /**
     * Generated from protobuf field <code>string price_xsmall = 4 [json_name = "priceXsmall"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceXsmall($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_xsmall = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_small = 5 [json_name = "priceSmall"];</code>
     * @return string
     */
    public function getPriceSmall()
    {
        return $this->price_small;
    }

    /**
     * Generated from protobuf field <code>string price_small = 5 [json_name = "priceSmall"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceSmall($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_small = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_medium = 6 [json_name = "priceMedium"];</code>
     * @return string
     */
    public function getPriceMedium()
    {
        return $this->price_medium;
    }

    /**
     * Generated from protobuf field <code>string price_medium = 6 [json_name = "priceMedium"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceMedium($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_medium = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_large = 7 [json_name = "priceLarge"];</code>
     * @return string
     */
    public function getPriceLarge()
    {
        return $this->price_large;
    }

    /**
     * Generated from protobuf field <code>string price_large = 7 [json_name = "priceLarge"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceLarge($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_large = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_xlarge = 8 [json_name = "priceXlarge"];</code>
     * @return string
     */
    public function getPriceXlarge()
    {
        return $this->price_xlarge;
    }

    /**
     * Generated from protobuf field <code>string price_xlarge = 8 [json_name = "priceXlarge"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceXlarge($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_xlarge = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string currency = 9 [json_name = "currency"];</code>
     * @return string
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * Generated from protobuf field <code>string currency = 9 [json_name = "currency"];</code>
     * @param string $var
     * @return $this
     */
    public function setCurrency($var)
    {
        GPBUtil::checkString($var, True);
        $this->currency = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string interval = 10 [json_name = "interval"];</code>
     * @return string
     */
    public function getInterval()
    {
        return $this->interval;
    }

    /**
     * Generated from protobuf field <code>string interval = 10 [json_name = "interval"];</code>
     * @param string $var
     * @return $this
     */
    public function setInterval($var)
    {
        GPBUtil::checkString($var, True);
        $this->interval = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string trial_date_end = 11 [json_name = "trialDateEnd"];</code>
     * @return string
     */
    public function getTrialDateEnd()
    {
        return $this->trial_date_end;
    }

    /**
     * Generated from protobuf field <code>string trial_date_end = 11 [json_name = "trialDateEnd"];</code>
     * @param string $var
     * @return $this
     */
    public function setTrialDateEnd($var)
    {
        GPBUtil::checkString($var, True);
        $this->trial_date_end = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_trial = 12 [json_name = "isTrial"];</code>
     * @return bool
     */
    public function getIsTrial()
    {
        return $this->is_trial;
    }

    /**
     * Generated from protobuf field <code>bool is_trial = 12 [json_name = "isTrial"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsTrial($var)
    {
        GPBUtil::checkBool($var);
        $this->is_trial = $var;

        return $this;
    }

}

