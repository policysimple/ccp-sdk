<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.Project</code>
 */
class Project extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string project_id = 1 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string image = 3 [json_name = "image"];</code>
     */
    protected $image = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Budget budget = 4 [json_name = "budget"];</code>
     */
    protected $budget = null;
    /**
     * Generated from protobuf field <code>string card_id = 5 [json_name = "cardId"];</code>
     */
    protected $card_id = '';
    /**
     * Generated from protobuf field <code>string description = 6 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Subscription subscription = 9 [json_name = "subscription"];</code>
     */
    protected $subscription = null;
    /**
     * Generated from protobuf field <code>bool status = 10 [json_name = "status"];</code>
     */
    protected $status = false;
    /**
     * Generated from protobuf field <code>bool is_suspended = 11 [json_name = "isSuspended"];</code>
     */
    protected $is_suspended = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $project_id
     *     @type string $name
     *     @type string $image
     *     @type \Payment\V1alpha1\Budget $budget
     *     @type string $card_id
     *     @type string $description
     *     @type string $created_at
     *     @type string $updated_at
     *     @type \Payment\V1alpha1\Subscription $subscription
     *     @type bool $status
     *     @type bool $is_suspended
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\Payment::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string project_id = 1 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 1 [json_name = "projectId"];</code>
     * @param string $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_id = $var;

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
     * Generated from protobuf field <code>string image = 3 [json_name = "image"];</code>
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Generated from protobuf field <code>string image = 3 [json_name = "image"];</code>
     * @param string $var
     * @return $this
     */
    public function setImage($var)
    {
        GPBUtil::checkString($var, True);
        $this->image = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Budget budget = 4 [json_name = "budget"];</code>
     * @return \Payment\V1alpha1\Budget|null
     */
    public function getBudget()
    {
        return $this->budget;
    }

    public function hasBudget()
    {
        return isset($this->budget);
    }

    public function clearBudget()
    {
        unset($this->budget);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Budget budget = 4 [json_name = "budget"];</code>
     * @param \Payment\V1alpha1\Budget $var
     * @return $this
     */
    public function setBudget($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Budget::class);
        $this->budget = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string card_id = 5 [json_name = "cardId"];</code>
     * @return string
     */
    public function getCardId()
    {
        return $this->card_id;
    }

    /**
     * Generated from protobuf field <code>string card_id = 5 [json_name = "cardId"];</code>
     * @param string $var
     * @return $this
     */
    public function setCardId($var)
    {
        GPBUtil::checkString($var, True);
        $this->card_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 6 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 6 [json_name = "description"];</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setCreatedAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->created_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setUpdatedAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->updated_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Subscription subscription = 9 [json_name = "subscription"];</code>
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
     * Generated from protobuf field <code>.payment.v1alpha1.Subscription subscription = 9 [json_name = "subscription"];</code>
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
     * Generated from protobuf field <code>bool status = 10 [json_name = "status"];</code>
     * @return bool
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>bool status = 10 [json_name = "status"];</code>
     * @param bool $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkBool($var);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_suspended = 11 [json_name = "isSuspended"];</code>
     * @return bool
     */
    public function getIsSuspended()
    {
        return $this->is_suspended;
    }

    /**
     * Generated from protobuf field <code>bool is_suspended = 11 [json_name = "isSuspended"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsSuspended($var)
    {
        GPBUtil::checkBool($var);
        $this->is_suspended = $var;

        return $this;
    }

}

