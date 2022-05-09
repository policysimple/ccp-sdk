<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Payment</code>
 */
class Payment extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string card_holder_name = 2 [json_name = "cardHolderName"];</code>
     */
    protected $card_holder_name = '';
    /**
     * Generated from protobuf field <code>string card_type = 3 [json_name = "cardType"];</code>
     */
    protected $card_type = '';
    /**
     * Generated from protobuf field <code>int32 card_number = 4 [json_name = "cardNumber"];</code>
     */
    protected $card_number = 0;
    /**
     * Generated from protobuf field <code>int32 cvv_number = 5 [json_name = "cvvNumber"];</code>
     */
    protected $cvv_number = 0;
    /**
     * Generated from protobuf field <code>string expiry_date = 6 [json_name = "expiryDate"];</code>
     */
    protected $expiry_date = '';
    /**
     * Generated from protobuf field <code>uint32 organization_id = 7 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>uint32 project_id = 8 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string application_id = 9 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $card_holder_name
     *     @type string $card_type
     *     @type int $card_number
     *     @type int $cvv_number
     *     @type string $expiry_date
     *     @type int $organization_id
     *     @type int $project_id
     *     @type string $application_id
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
     * Generated from protobuf field <code>string card_holder_name = 2 [json_name = "cardHolderName"];</code>
     * @return string
     */
    public function getCardHolderName()
    {
        return $this->card_holder_name;
    }

    /**
     * Generated from protobuf field <code>string card_holder_name = 2 [json_name = "cardHolderName"];</code>
     * @param string $var
     * @return $this
     */
    public function setCardHolderName($var)
    {
        GPBUtil::checkString($var, True);
        $this->card_holder_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string card_type = 3 [json_name = "cardType"];</code>
     * @return string
     */
    public function getCardType()
    {
        return $this->card_type;
    }

    /**
     * Generated from protobuf field <code>string card_type = 3 [json_name = "cardType"];</code>
     * @param string $var
     * @return $this
     */
    public function setCardType($var)
    {
        GPBUtil::checkString($var, True);
        $this->card_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 card_number = 4 [json_name = "cardNumber"];</code>
     * @return int
     */
    public function getCardNumber()
    {
        return $this->card_number;
    }

    /**
     * Generated from protobuf field <code>int32 card_number = 4 [json_name = "cardNumber"];</code>
     * @param int $var
     * @return $this
     */
    public function setCardNumber($var)
    {
        GPBUtil::checkInt32($var);
        $this->card_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 cvv_number = 5 [json_name = "cvvNumber"];</code>
     * @return int
     */
    public function getCvvNumber()
    {
        return $this->cvv_number;
    }

    /**
     * Generated from protobuf field <code>int32 cvv_number = 5 [json_name = "cvvNumber"];</code>
     * @param int $var
     * @return $this
     */
    public function setCvvNumber($var)
    {
        GPBUtil::checkInt32($var);
        $this->cvv_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string expiry_date = 6 [json_name = "expiryDate"];</code>
     * @return string
     */
    public function getExpiryDate()
    {
        return $this->expiry_date;
    }

    /**
     * Generated from protobuf field <code>string expiry_date = 6 [json_name = "expiryDate"];</code>
     * @param string $var
     * @return $this
     */
    public function setExpiryDate($var)
    {
        GPBUtil::checkString($var, True);
        $this->expiry_date = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 7 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 7 [json_name = "organizationId"];</code>
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
     * Generated from protobuf field <code>uint32 project_id = 8 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 8 [json_name = "projectId"];</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkUint32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string application_id = 9 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 9 [json_name = "applicationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setApplicationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->application_id = $var;

        return $this;
    }

}

