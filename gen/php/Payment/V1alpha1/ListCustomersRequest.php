<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.ListCustomersRequest</code>
 */
class ListCustomersRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string empty = 1 [json_name = "empty"];</code>
     */
    protected $empty = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $empty
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string empty = 1 [json_name = "empty"];</code>
     * @return string
     */
    public function getEmpty()
    {
        return $this->empty;
    }

    /**
     * Generated from protobuf field <code>string empty = 1 [json_name = "empty"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmpty($var)
    {
        GPBUtil::checkString($var, True);
        $this->empty = $var;

        return $this;
    }

}
