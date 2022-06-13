<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/v1alpha1/billing.proto

namespace Billing\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>billing.v1alpha1.Billing</code>
 */
class Billing extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
     */
    protected $cpu_metric = 0.0;
    /**
     * Generated from protobuf field <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
     */
    protected $cpu_bill = 0.0;
    /**
     * Generated from protobuf field <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
     */
    protected $ram_metric = 0.0;
    /**
     * Generated from protobuf field <code>double ram_bill = 5 [json_name = "ramBill"];</code>
     */
    protected $ram_bill = 0.0;
    /**
     * Generated from protobuf field <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
     */
    protected $storage_metric = 0.0;
    /**
     * Generated from protobuf field <code>double storage_bill = 7 [json_name = "storageBill"];</code>
     */
    protected $storage_bill = 0.0;
    /**
     * Generated from protobuf field <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
     */
    protected $total_to_pay = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $organization_id
     *     @type float $cpu_metric
     *     @type float $cpu_bill
     *     @type float $ram_metric
     *     @type float $ram_bill
     *     @type float $storage_metric
     *     @type float $storage_bill
     *     @type float $total_to_pay
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Billing\V1Alpha1\Billing::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
     * @return float
     */
    public function getCpuMetric()
    {
        return $this->cpu_metric;
    }

    /**
     * Generated from protobuf field <code>double cpu_metric = 2 [json_name = "cpuMetric"];</code>
     * @param float $var
     * @return $this
     */
    public function setCpuMetric($var)
    {
        GPBUtil::checkDouble($var);
        $this->cpu_metric = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
     * @return float
     */
    public function getCpuBill()
    {
        return $this->cpu_bill;
    }

    /**
     * Generated from protobuf field <code>double cpu_bill = 3 [json_name = "cpuBill"];</code>
     * @param float $var
     * @return $this
     */
    public function setCpuBill($var)
    {
        GPBUtil::checkDouble($var);
        $this->cpu_bill = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
     * @return float
     */
    public function getRamMetric()
    {
        return $this->ram_metric;
    }

    /**
     * Generated from protobuf field <code>double ram_metric = 4 [json_name = "ramMetric"];</code>
     * @param float $var
     * @return $this
     */
    public function setRamMetric($var)
    {
        GPBUtil::checkDouble($var);
        $this->ram_metric = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double ram_bill = 5 [json_name = "ramBill"];</code>
     * @return float
     */
    public function getRamBill()
    {
        return $this->ram_bill;
    }

    /**
     * Generated from protobuf field <code>double ram_bill = 5 [json_name = "ramBill"];</code>
     * @param float $var
     * @return $this
     */
    public function setRamBill($var)
    {
        GPBUtil::checkDouble($var);
        $this->ram_bill = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
     * @return float
     */
    public function getStorageMetric()
    {
        return $this->storage_metric;
    }

    /**
     * Generated from protobuf field <code>double storage_metric = 6 [json_name = "storageMetric"];</code>
     * @param float $var
     * @return $this
     */
    public function setStorageMetric($var)
    {
        GPBUtil::checkDouble($var);
        $this->storage_metric = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double storage_bill = 7 [json_name = "storageBill"];</code>
     * @return float
     */
    public function getStorageBill()
    {
        return $this->storage_bill;
    }

    /**
     * Generated from protobuf field <code>double storage_bill = 7 [json_name = "storageBill"];</code>
     * @param float $var
     * @return $this
     */
    public function setStorageBill($var)
    {
        GPBUtil::checkDouble($var);
        $this->storage_bill = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
     * @return float
     */
    public function getTotalToPay()
    {
        return $this->total_to_pay;
    }

    /**
     * Generated from protobuf field <code>double total_to_pay = 8 [json_name = "totalToPay"];</code>
     * @param float $var
     * @return $this
     */
    public function setTotalToPay($var)
    {
        GPBUtil::checkDouble($var);
        $this->total_to_pay = $var;

        return $this;
    }

}
