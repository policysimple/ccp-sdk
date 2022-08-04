<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.ListSubscriptionItemsRequest</code>
 */
class ListSubscriptionItemsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>string suscription_id = 2 [json_name = "suscriptionId"];</code>
     */
    protected $suscription_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $organization_id
     *     @type string $suscription_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

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

}

