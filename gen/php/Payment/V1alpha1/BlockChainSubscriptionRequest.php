<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.BlockChainSubscriptionRequest</code>
 */
class BlockChainSubscriptionRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string customer_id = 2 [json_name = "customerId"];</code>
     */
    protected $customer_id = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.BlockChain blockchain = 3 [json_name = "blockchain"];</code>
     */
    protected $blockchain = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $organization_id
     *     @type string $customer_id
     *     @type \Payment\V1alpha1\BlockChain $blockchain
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
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
     * Generated from protobuf field <code>.payment.v1alpha1.BlockChain blockchain = 3 [json_name = "blockchain"];</code>
     * @return \Payment\V1alpha1\BlockChain|null
     */
    public function getBlockchain()
    {
        return $this->blockchain;
    }

    public function hasBlockchain()
    {
        return isset($this->blockchain);
    }

    public function clearBlockchain()
    {
        unset($this->blockchain);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.BlockChain blockchain = 3 [json_name = "blockchain"];</code>
     * @param \Payment\V1alpha1\BlockChain $var
     * @return $this
     */
    public function setBlockchain($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\BlockChain::class);
        $this->blockchain = $var;

        return $this;
    }

}

