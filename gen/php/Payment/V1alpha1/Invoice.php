<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Invoice</code>
 */
class Invoice extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string account_name = 2 [json_name = "accountName"];</code>
     */
    protected $account_name = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $account_name
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
     * Generated from protobuf field <code>string account_name = 2 [json_name = "accountName"];</code>
     * @return string
     */
    public function getAccountName()
    {
        return $this->account_name;
    }

    /**
     * Generated from protobuf field <code>string account_name = 2 [json_name = "accountName"];</code>
     * @param string $var
     * @return $this
     */
    public function setAccountName($var)
    {
        GPBUtil::checkString($var, True);
        $this->account_name = $var;

        return $this;
    }

}
