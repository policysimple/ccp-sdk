<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Budget</code>
 */
class Budget extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string plan = 1 [json_name = "plan"];</code>
     */
    protected $plan = '';
    /**
     * Generated from protobuf field <code>string budget_time = 2 [json_name = "budgetTime"];</code>
     */
    protected $budget_time = '';
    /**
     * Generated from protobuf field <code>string budget_amount = 3 [json_name = "budgetAmount"];</code>
     */
    protected $budget_amount = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $plan
     *     @type string $budget_time
     *     @type string $budget_amount
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\Payment::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string plan = 1 [json_name = "plan"];</code>
     * @return string
     */
    public function getPlan()
    {
        return $this->plan;
    }

    /**
     * Generated from protobuf field <code>string plan = 1 [json_name = "plan"];</code>
     * @param string $var
     * @return $this
     */
    public function setPlan($var)
    {
        GPBUtil::checkString($var, True);
        $this->plan = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string budget_time = 2 [json_name = "budgetTime"];</code>
     * @return string
     */
    public function getBudgetTime()
    {
        return $this->budget_time;
    }

    /**
     * Generated from protobuf field <code>string budget_time = 2 [json_name = "budgetTime"];</code>
     * @param string $var
     * @return $this
     */
    public function setBudgetTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->budget_time = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string budget_amount = 3 [json_name = "budgetAmount"];</code>
     * @return string
     */
    public function getBudgetAmount()
    {
        return $this->budget_amount;
    }

    /**
     * Generated from protobuf field <code>string budget_amount = 3 [json_name = "budgetAmount"];</code>
     * @param string $var
     * @return $this
     */
    public function setBudgetAmount($var)
    {
        GPBUtil::checkString($var, True);
        $this->budget_amount = $var;

        return $this;
    }

}

