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

}

