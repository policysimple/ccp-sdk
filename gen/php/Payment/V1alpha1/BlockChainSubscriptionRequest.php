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
     * Generated from protobuf field <code>string blockchain_id = 2 [json_name = "blockchainId"];</code>
     */
    protected $blockchain_id = '';
    /**
     * Generated from protobuf field <code>string blockchain_name = 3 [json_name = "blockchainName"];</code>
     */
    protected $blockchain_name = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $organization_id
     *     @type string $blockchain_id
     *     @type string $blockchain_name
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
     * Generated from protobuf field <code>string blockchain_id = 2 [json_name = "blockchainId"];</code>
     * @return string
     */
    public function getBlockchainId()
    {
        return $this->blockchain_id;
    }

    /**
     * Generated from protobuf field <code>string blockchain_id = 2 [json_name = "blockchainId"];</code>
     * @param string $var
     * @return $this
     */
    public function setBlockchainId($var)
    {
        GPBUtil::checkString($var, True);
        $this->blockchain_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string blockchain_name = 3 [json_name = "blockchainName"];</code>
     * @return string
     */
    public function getBlockchainName()
    {
        return $this->blockchain_name;
    }

    /**
     * Generated from protobuf field <code>string blockchain_name = 3 [json_name = "blockchainName"];</code>
     * @param string $var
     * @return $this
     */
    public function setBlockchainName($var)
    {
        GPBUtil::checkString($var, True);
        $this->blockchain_name = $var;

        return $this;
    }

}
