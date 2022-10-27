<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.ConsumeByProjectRequest</code>
 */
class ConsumeByProjectRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>string year = 2 [json_name = "year"];</code>
     */
    protected $year = '';
    /**
     * Generated from protobuf field <code>string month = 3 [json_name = "month"];</code>
     */
    protected $month = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $organization_id
     *     @type string $year
     *     @type string $month
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
     * Generated from protobuf field <code>string year = 2 [json_name = "year"];</code>
     * @return string
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Generated from protobuf field <code>string year = 2 [json_name = "year"];</code>
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
     * Generated from protobuf field <code>string month = 3 [json_name = "month"];</code>
     * @return string
     */
    public function getMonth()
    {
        return $this->month;
    }

    /**
     * Generated from protobuf field <code>string month = 3 [json_name = "month"];</code>
     * @param string $var
     * @return $this
     */
    public function setMonth($var)
    {
        GPBUtil::checkString($var, True);
        $this->month = $var;

        return $this;
    }

}

