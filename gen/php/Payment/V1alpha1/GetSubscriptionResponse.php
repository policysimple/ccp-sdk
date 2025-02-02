<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.GetSubscriptionResponse</code>
 */
class GetSubscriptionResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Subscription subscription = 1 [json_name = "subscription"];</code>
     */
    protected $subscription = null;
    /**
     * Generated from protobuf field <code>string error = 2 [json_name = "error"];</code>
     */
    protected $error = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Payment\V1alpha1\Subscription $subscription
     *     @type string $error
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Subscription subscription = 1 [json_name = "subscription"];</code>
     * @return \Payment\V1alpha1\Subscription|null
     */
    public function getSubscription()
    {
        return $this->subscription;
    }

    public function hasSubscription()
    {
        return isset($this->subscription);
    }

    public function clearSubscription()
    {
        unset($this->subscription);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Subscription subscription = 1 [json_name = "subscription"];</code>
     * @param \Payment\V1alpha1\Subscription $var
     * @return $this
     */
    public function setSubscription($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Subscription::class);
        $this->subscription = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string error = 2 [json_name = "error"];</code>
     * @return string
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Generated from protobuf field <code>string error = 2 [json_name = "error"];</code>
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

