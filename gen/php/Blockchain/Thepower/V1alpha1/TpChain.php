<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/thepower/v1alpha1/thepower.proto

namespace Blockchain\Thepower\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.thepower.v1alpha1.TpChain</code>
 */
class TpChain extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>int32 chain_number = 2 [json_name = "chainNumber"];</code>
     */
    protected $chain_number = 0;
    /**
     * Generated from protobuf field <code>string user_id = 3 [json_name = "userId"];</code>
     */
    protected $user_id = '';
    /**
     * Generated from protobuf field <code>repeated .blockchain.thepower.v1alpha1.TpNode chain_nodes = 4 [json_name = "chainNodes"];</code>
     */
    private $chain_nodes;
    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>string error_details = 6 [json_name = "errorDetails"];</code>
     */
    protected $error_details = '';
    /**
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';
    /**
     * Generated from protobuf field <code>.blockchain.thepower.v1alpha1.TeaCeremonySettings settings = 9 [json_name = "settings"];</code>
     */
    protected $settings = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type int $chain_number
     *     @type string $user_id
     *     @type \Blockchain\Thepower\V1alpha1\TpNode[]|\Google\Protobuf\Internal\RepeatedField $chain_nodes
     *     @type string $status
     *     @type string $error_details
     *     @type string $created_at
     *     @type string $updated_at
     *     @type \Blockchain\Thepower\V1alpha1\TeaCeremonySettings $settings
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Thepower\V1Alpha1\Thepower::initOnce();
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
     * Generated from protobuf field <code>int32 chain_number = 2 [json_name = "chainNumber"];</code>
     * @return int
     */
    public function getChainNumber()
    {
        return $this->chain_number;
    }

    /**
     * Generated from protobuf field <code>int32 chain_number = 2 [json_name = "chainNumber"];</code>
     * @param int $var
     * @return $this
     */
    public function setChainNumber($var)
    {
        GPBUtil::checkInt32($var);
        $this->chain_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_id = 3 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 3 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.thepower.v1alpha1.TpNode chain_nodes = 4 [json_name = "chainNodes"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getChainNodes()
    {
        return $this->chain_nodes;
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.thepower.v1alpha1.TpNode chain_nodes = 4 [json_name = "chainNodes"];</code>
     * @param \Blockchain\Thepower\V1alpha1\TpNode[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setChainNodes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Blockchain\Thepower\V1alpha1\TpNode::class);
        $this->chain_nodes = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string error_details = 6 [json_name = "errorDetails"];</code>
     * @return string
     */
    public function getErrorDetails()
    {
        return $this->error_details;
    }

    /**
     * Generated from protobuf field <code>string error_details = 6 [json_name = "errorDetails"];</code>
     * @param string $var
     * @return $this
     */
    public function setErrorDetails($var)
    {
        GPBUtil::checkString($var, True);
        $this->error_details = $var;

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
     * Generated from protobuf field <code>.blockchain.thepower.v1alpha1.TeaCeremonySettings settings = 9 [json_name = "settings"];</code>
     * @return \Blockchain\Thepower\V1alpha1\TeaCeremonySettings|null
     */
    public function getSettings()
    {
        return $this->settings;
    }

    public function hasSettings()
    {
        return isset($this->settings);
    }

    public function clearSettings()
    {
        unset($this->settings);
    }

    /**
     * Generated from protobuf field <code>.blockchain.thepower.v1alpha1.TeaCeremonySettings settings = 9 [json_name = "settings"];</code>
     * @param \Blockchain\Thepower\V1alpha1\TeaCeremonySettings $var
     * @return $this
     */
    public function setSettings($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Thepower\V1alpha1\TeaCeremonySettings::class);
        $this->settings = $var;

        return $this;
    }

}

