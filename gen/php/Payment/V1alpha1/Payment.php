<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace Payment\V1alpha1;

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
     * Generated from protobuf field <code>bool default = 2 [json_name = "default"];</code>
     */
    protected $default = false;
    /**
     * Generated from protobuf field <code>bool enabled = 3 [json_name = "enabled"];</code>
     */
    protected $enabled = false;
    /**
     * Generated from protobuf field <code>string alias = 4 [json_name = "alias"];</code>
     */
    protected $alias = '';
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 5 [json_name = "card"];</code>
     */
    protected $card = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type bool $default
     *     @type bool $enabled
     *     @type string $alias
     *     @type \Payment\V1alpha1\Card $card
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
     * Generated from protobuf field <code>bool default = 2 [json_name = "default"];</code>
     * @return bool
     */
    public function getDefault()
    {
        return $this->default;
    }

    /**
     * Generated from protobuf field <code>bool default = 2 [json_name = "default"];</code>
     * @param bool $var
     * @return $this
     */
    public function setDefault($var)
    {
        GPBUtil::checkBool($var);
        $this->default = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool enabled = 3 [json_name = "enabled"];</code>
     * @return bool
     */
    public function getEnabled()
    {
        return $this->enabled;
    }

    /**
     * Generated from protobuf field <code>bool enabled = 3 [json_name = "enabled"];</code>
     * @param bool $var
     * @return $this
     */
    public function setEnabled($var)
    {
        GPBUtil::checkBool($var);
        $this->enabled = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string alias = 4 [json_name = "alias"];</code>
     * @return string
     */
    public function getAlias()
    {
        return $this->alias;
    }

    /**
     * Generated from protobuf field <code>string alias = 4 [json_name = "alias"];</code>
     * @param string $var
     * @return $this
     */
    public function setAlias($var)
    {
        GPBUtil::checkString($var, True);
        $this->alias = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 5 [json_name = "card"];</code>
     * @return \Payment\V1alpha1\Card|null
     */
    public function getCard()
    {
        return $this->card;
    }

    public function hasCard()
    {
        return isset($this->card);
    }

    public function clearCard()
    {
        unset($this->card);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.Card card = 5 [json_name = "card"];</code>
     * @param \Payment\V1alpha1\Card $var
     * @return $this
     */
    public function setCard($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\Card::class);
        $this->card = $var;

        return $this;
    }

}

