<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Customer</code>
 */
class Customer extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string email = 3 [json_name = "email"];</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>string customer_id = 4 [json_name = "customerId"];</code>
     */
    protected $customer_id = '';
    /**
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 6 [json_name = "suscription"];</code>
     */
    protected $suscription = null;
    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Payment payment = 7 [json_name = "payment"];</code>
     */
    private $payment;
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Invoice invoice = 8 [json_name = "invoice"];</code>
     */
    protected $invoice = null;
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Biling biling = 9 [json_name = "biling"];</code>
     */
    protected $biling = null;
    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Project project = 10 [json_name = "project"];</code>
     */
    private $project;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type string $email
     *     @type string $customer_id
     *     @type int $organization_id
     *     @type \Payment\V1alpha1\Suscription $suscription
     *     @type \Payment\V1alpha1\Payment[]|\Google\Protobuf\Internal\RepeatedField $payment
     *     @type \Payment\V1alpha1\Invoice $invoice
     *     @type \Payment\V1alpha1\Biling $biling
     *     @type \Payment\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $project
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
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string email = 3 [json_name = "email"];</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 3 [json_name = "email"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->email = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string customer_id = 4 [json_name = "customerId"];</code>
     * @return string
     */
    public function getCustomerId()
    {
        return $this->customer_id;
    }

    /**
     * Generated from protobuf field <code>string customer_id = 4 [json_name = "customerId"];</code>
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
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
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
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 6 [json_name = "suscription"];</code>
     * @return \Payment\V1alpha1\Suscription|null
     */
    public function getSuscription()
    {
        return $this->suscription;
    }

    public function hasSuscription()
    {
        return isset($this->suscription);
    }

    public function clearSuscription()
    {
        unset($this->suscription);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Suscription suscription = 6 [json_name = "suscription"];</code>
     * @param \Payment\V1alpha1\Suscription $var
     * @return $this
     */
    public function setSuscription($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Suscription::class);
        $this->suscription = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Payment payment = 7 [json_name = "payment"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPayment()
    {
        return $this->payment;
    }

    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Payment payment = 7 [json_name = "payment"];</code>
     * @param \Payment\V1alpha1\Payment[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPayment($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Payment\V1alpha1\Payment::class);
        $this->payment = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Invoice invoice = 8 [json_name = "invoice"];</code>
     * @return \Payment\V1alpha1\Invoice|null
     */
    public function getInvoice()
    {
        return $this->invoice;
    }

    public function hasInvoice()
    {
        return isset($this->invoice);
    }

    public function clearInvoice()
    {
        unset($this->invoice);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Invoice invoice = 8 [json_name = "invoice"];</code>
     * @param \Payment\V1alpha1\Invoice $var
     * @return $this
     */
    public function setInvoice($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Invoice::class);
        $this->invoice = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Biling biling = 9 [json_name = "biling"];</code>
     * @return \Payment\V1alpha1\Biling|null
     */
    public function getBiling()
    {
        return $this->biling;
    }

    public function hasBiling()
    {
        return isset($this->biling);
    }

    public function clearBiling()
    {
        unset($this->biling);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Biling biling = 9 [json_name = "biling"];</code>
     * @param \Payment\V1alpha1\Biling $var
     * @return $this
     */
    public function setBiling($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Biling::class);
        $this->biling = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Project project = 10 [json_name = "project"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * Generated from protobuf field <code>repeated .payment.v1alpha1.Project project = 10 [json_name = "project"];</code>
     * @param \Payment\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProject($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Payment\V1alpha1\Project::class);
        $this->project = $arr;

        return $this;
    }

}

