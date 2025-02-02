<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Biling</code>
 */
class Biling extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string invoice_id = 2 [json_name = "invoiceId"];</code>
     */
    protected $invoice_id = '';
    /**
     * Generated from protobuf field <code>string account_name = 3 [json_name = "accountName"];</code>
     */
    protected $account_name = '';
    /**
     * Generated from protobuf field <code>int64 totalusage = 4 [json_name = "totalusage"];</code>
     */
    protected $totalusage = 0;
    /**
     * Generated from protobuf field <code>double cpu = 5 [json_name = "cpu"];</code>
     */
    protected $cpu = 0.0;
    /**
     * Generated from protobuf field <code>double ram = 6 [json_name = "ram"];</code>
     */
    protected $ram = 0.0;
    /**
     * Generated from protobuf field <code>double pipeline = 7 [json_name = "pipeline"];</code>
     */
    protected $pipeline = 0.0;
    /**
     * Generated from protobuf field <code>string month = 8 [json_name = "month"];</code>
     */
    protected $month = '';
    /**
     * Generated from protobuf field <code>string year = 9 [json_name = "year"];</code>
     */
    protected $year = '';
    /**
     * Generated from protobuf field <code>int64 amount = 10 [json_name = "amount"];</code>
     */
    protected $amount = 0;
    /**
     * Generated from protobuf field <code>string period = 11 [json_name = "period"];</code>
     */
    protected $period = '';
    /**
     * Generated from protobuf field <code>string statuspay = 12 [json_name = "statuspay"];</code>
     */
    protected $statuspay = '';
    /**
     * Generated from protobuf field <code>string date = 13 [json_name = "date"];</code>
     */
    protected $date = '';
    /**
     * Generated from protobuf field <code>string product = 14 [json_name = "product"];</code>
     */
    protected $product = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $invoice_id
     *     @type string $account_name
     *     @type int|string $totalusage
     *     @type float $cpu
     *     @type float $ram
     *     @type float $pipeline
     *     @type string $month
     *     @type string $year
     *     @type int|string $amount
     *     @type string $period
     *     @type string $statuspay
     *     @type string $date
     *     @type string $product
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
     * Generated from protobuf field <code>string invoice_id = 2 [json_name = "invoiceId"];</code>
     * @return string
     */
    public function getInvoiceId()
    {
        return $this->invoice_id;
    }

    /**
     * Generated from protobuf field <code>string invoice_id = 2 [json_name = "invoiceId"];</code>
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
     * Generated from protobuf field <code>string account_name = 3 [json_name = "accountName"];</code>
     * @return string
     */
    public function getAccountName()
    {
        return $this->account_name;
    }

    /**
     * Generated from protobuf field <code>string account_name = 3 [json_name = "accountName"];</code>
     * @param string $var
     * @return $this
     */
    public function setAccountName($var)
    {
        GPBUtil::checkString($var, True);
        $this->account_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 totalusage = 4 [json_name = "totalusage"];</code>
     * @return int|string
     */
    public function getTotalusage()
    {
        return $this->totalusage;
    }

    /**
     * Generated from protobuf field <code>int64 totalusage = 4 [json_name = "totalusage"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setTotalusage($var)
    {
        GPBUtil::checkInt64($var);
        $this->totalusage = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double cpu = 5 [json_name = "cpu"];</code>
     * @return float
     */
    public function getCpu()
    {
        return $this->cpu;
    }

    /**
     * Generated from protobuf field <code>double cpu = 5 [json_name = "cpu"];</code>
     * @param float $var
     * @return $this
     */
    public function setCpu($var)
    {
        GPBUtil::checkDouble($var);
        $this->cpu = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double ram = 6 [json_name = "ram"];</code>
     * @return float
     */
    public function getRam()
    {
        return $this->ram;
    }

    /**
     * Generated from protobuf field <code>double ram = 6 [json_name = "ram"];</code>
     * @param float $var
     * @return $this
     */
    public function setRam($var)
    {
        GPBUtil::checkDouble($var);
        $this->ram = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double pipeline = 7 [json_name = "pipeline"];</code>
     * @return float
     */
    public function getPipeline()
    {
        return $this->pipeline;
    }

    /**
     * Generated from protobuf field <code>double pipeline = 7 [json_name = "pipeline"];</code>
     * @param float $var
     * @return $this
     */
    public function setPipeline($var)
    {
        GPBUtil::checkDouble($var);
        $this->pipeline = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string month = 8 [json_name = "month"];</code>
     * @return string
     */
    public function getMonth()
    {
        return $this->month;
    }

    /**
     * Generated from protobuf field <code>string month = 8 [json_name = "month"];</code>
     * @param string $var
     * @return $this
     */
    public function setMonth($var)
    {
        GPBUtil::checkString($var, True);
        $this->month = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string year = 9 [json_name = "year"];</code>
     * @return string
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Generated from protobuf field <code>string year = 9 [json_name = "year"];</code>
     * @param string $var
     * @return $this
     */
    public function setYear($var)
    {
        GPBUtil::checkString($var, True);
        $this->year = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 10 [json_name = "amount"];</code>
     * @return int|string
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Generated from protobuf field <code>int64 amount = 10 [json_name = "amount"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setAmount($var)
    {
        GPBUtil::checkInt64($var);
        $this->amount = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string period = 11 [json_name = "period"];</code>
     * @return string
     */
    public function getPeriod()
    {
        return $this->period;
    }

    /**
     * Generated from protobuf field <code>string period = 11 [json_name = "period"];</code>
     * @param string $var
     * @return $this
     */
    public function setPeriod($var)
    {
        GPBUtil::checkString($var, True);
        $this->period = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string statuspay = 12 [json_name = "statuspay"];</code>
     * @return string
     */
    public function getStatuspay()
    {
        return $this->statuspay;
    }

    /**
     * Generated from protobuf field <code>string statuspay = 12 [json_name = "statuspay"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatuspay($var)
    {
        GPBUtil::checkString($var, True);
        $this->statuspay = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string date = 13 [json_name = "date"];</code>
     * @return string
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Generated from protobuf field <code>string date = 13 [json_name = "date"];</code>
     * @param string $var
     * @return $this
     */
    public function setDate($var)
    {
        GPBUtil::checkString($var, True);
        $this->date = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string product = 14 [json_name = "product"];</code>
     * @return string
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * Generated from protobuf field <code>string product = 14 [json_name = "product"];</code>
     * @param string $var
     * @return $this
     */
    public function setProduct($var)
    {
        GPBUtil::checkString($var, True);
        $this->product = $var;

        return $this;
    }

}

