<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Suscription</code>
 */
class Suscription extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string suscription_id = 2 [json_name = "suscriptionId"];</code>
     */
    protected $suscription_id = '';
    /**
     * Generated from protobuf field <code>string price = 3 [json_name = "price"];</code>
     */
    protected $price = '';
    /**
     * Generated from protobuf field <code>string price_cpu = 4 [json_name = "priceCpu"];</code>
     */
    protected $price_cpu = '';
    /**
     * Generated from protobuf field <code>string price_bytes = 5 [json_name = "priceBytes"];</code>
     */
    protected $price_bytes = '';
    /**
     * Generated from protobuf field <code>string currency = 6 [json_name = "currency"];</code>
     */
    protected $currency = '';
    /**
     * Generated from protobuf field <code>string interval = 7 [json_name = "interval"];</code>
     */
    protected $interval = '';
    /**
     * Generated from protobuf field <code>string suscription_item_id = 8 [json_name = "suscriptionItemId"];</code>
     */
    protected $suscription_item_id = '';
    /**
     * Generated from protobuf field <code>string invoice_id = 9 [json_name = "invoiceId"];</code>
     */
    protected $invoice_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $suscription_id
     *     @type string $price
     *     @type string $price_cpu
     *     @type string $price_bytes
     *     @type string $currency
     *     @type string $interval
     *     @type string $suscription_item_id
     *     @type string $invoice_id
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
     * Generated from protobuf field <code>string suscription_id = 2 [json_name = "suscriptionId"];</code>
     * @return string
     */
    public function getSuscriptionId()
    {
        return $this->suscription_id;
    }

    /**
     * Generated from protobuf field <code>string suscription_id = 2 [json_name = "suscriptionId"];</code>
     * @param string $var
     * @return $this
     */
    public function setSuscriptionId($var)
    {
        GPBUtil::checkString($var, True);
        $this->suscription_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price = 3 [json_name = "price"];</code>
     * @return string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Generated from protobuf field <code>string price = 3 [json_name = "price"];</code>
     * @param string $var
     * @return $this
     */
    public function setPrice($var)
    {
        GPBUtil::checkString($var, True);
        $this->price = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_cpu = 4 [json_name = "priceCpu"];</code>
     * @return string
     */
    public function getPriceCpu()
    {
        return $this->price_cpu;
    }

    /**
     * Generated from protobuf field <code>string price_cpu = 4 [json_name = "priceCpu"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceCpu($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_cpu = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string price_bytes = 5 [json_name = "priceBytes"];</code>
     * @return string
     */
    public function getPriceBytes()
    {
        return $this->price_bytes;
    }

    /**
     * Generated from protobuf field <code>string price_bytes = 5 [json_name = "priceBytes"];</code>
     * @param string $var
     * @return $this
     */
    public function setPriceBytes($var)
    {
        GPBUtil::checkString($var, True);
        $this->price_bytes = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string currency = 6 [json_name = "currency"];</code>
     * @return string
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * Generated from protobuf field <code>string currency = 6 [json_name = "currency"];</code>
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
     * Generated from protobuf field <code>string interval = 7 [json_name = "interval"];</code>
     * @return string
     */
    public function getInterval()
    {
        return $this->interval;
    }

    /**
     * Generated from protobuf field <code>string interval = 7 [json_name = "interval"];</code>
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
     * Generated from protobuf field <code>string suscription_item_id = 8 [json_name = "suscriptionItemId"];</code>
     * @return string
     */
    public function getSuscriptionItemId()
    {
        return $this->suscription_item_id;
    }

    /**
     * Generated from protobuf field <code>string suscription_item_id = 8 [json_name = "suscriptionItemId"];</code>
     * @param string $var
     * @return $this
     */
    public function setSuscriptionItemId($var)
    {
        GPBUtil::checkString($var, True);
        $this->suscription_item_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string invoice_id = 9 [json_name = "invoiceId"];</code>
     * @return string
     */
    public function getInvoiceId()
    {
        return $this->invoice_id;
    }

    /**
     * Generated from protobuf field <code>string invoice_id = 9 [json_name = "invoiceId"];</code>
     * @param string $var
     * @return $this
     */
    public function setInvoiceId($var)
    {
        GPBUtil::checkString($var, True);
        $this->invoice_id = $var;

        return $this;
    }

}

