<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/v1alpha1/billing_api.proto

namespace Billing\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>billing.v1alpha1.GetBillingResponse</code>
 */
class GetBillingResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.billing.v1alpha1.Billing billing = 1 [json_name = "billing"];</code>
     */
    protected $billing = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Billing\V1alpha1\Billing $billing
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Billing\V1Alpha1\BillingApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.billing.v1alpha1.Billing billing = 1 [json_name = "billing"];</code>
     * @return \Billing\V1alpha1\Billing|null
     */
    public function getBilling()
    {
        return $this->billing;
    }

    public function hasBilling()
    {
        return isset($this->billing);
    }

    public function clearBilling()
    {
        unset($this->billing);
    }

    /**
     * Generated from protobuf field <code>.billing.v1alpha1.Billing billing = 1 [json_name = "billing"];</code>
     * @param \Billing\V1alpha1\Billing $var
     * @return $this
     */
    public function setBilling($var)
    {
        GPBUtil::checkMessage($var, \Billing\V1alpha1\Billing::class);
        $this->billing = $var;

        return $this;
    }

}

