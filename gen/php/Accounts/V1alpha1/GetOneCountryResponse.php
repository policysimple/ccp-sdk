<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.GetOneCountryResponse</code>
 */
class GetOneCountryResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string code = 3 [json_name = "code"];</code>
     */
    protected $code = '';
    /**
     * Generated from protobuf field <code>string phone_code = 4 [json_name = "phoneCode"];</code>
     */
    protected $phone_code = '';
    /**
     * Generated from protobuf field <code>string emoji = 5 [json_name = "emoji"];</code>
     */
    protected $emoji = '';
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.State states = 6 [json_name = "states"];</code>
     */
    private $states;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $name
     *     @type string $code
     *     @type string $phone_code
     *     @type string $emoji
     *     @type \Accounts\V1alpha1\State[]|\Google\Protobuf\Internal\RepeatedField $states
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkUint32($var);
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
     * Generated from protobuf field <code>string code = 3 [json_name = "code"];</code>
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Generated from protobuf field <code>string code = 3 [json_name = "code"];</code>
     * @param string $var
     * @return $this
     */
    public function setCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string phone_code = 4 [json_name = "phoneCode"];</code>
     * @return string
     */
    public function getPhoneCode()
    {
        return $this->phone_code;
    }

    /**
     * Generated from protobuf field <code>string phone_code = 4 [json_name = "phoneCode"];</code>
     * @param string $var
     * @return $this
     */
    public function setPhoneCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->phone_code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string emoji = 5 [json_name = "emoji"];</code>
     * @return string
     */
    public function getEmoji()
    {
        return $this->emoji;
    }

    /**
     * Generated from protobuf field <code>string emoji = 5 [json_name = "emoji"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmoji($var)
    {
        GPBUtil::checkString($var, True);
        $this->emoji = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.State states = 6 [json_name = "states"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getStates()
    {
        return $this->states;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.State states = 6 [json_name = "states"];</code>
     * @param \Accounts\V1alpha1\State[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setStates($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\State::class);
        $this->states = $arr;

        return $this;
    }

}

