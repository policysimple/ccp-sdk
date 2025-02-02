<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.Orderer</code>
 */
class Orderer extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>string blockchain_id = 3 [json_name = "blockchainId"];</code>
     */
    protected $blockchain_id = '';
    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * Generated from protobuf field <code>string status = 5 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>string created_at = 6 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 7 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';
    /**
     * Generated from protobuf field <code>string user_email = 8 [json_name = "userEmail"];</code>
     */
    protected $user_email = '';
    /**
     * Generated from protobuf field <code>string user_name = 9 [json_name = "userName"];</code>
     */
    protected $user_name = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type string $blockchain_id
     *     @type string $type
     *     @type string $status
     *     @type string $created_at
     *     @type string $updated_at
     *     @type string $user_email
     *     @type string $user_name
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\Network::initOnce();
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
     * Generated from protobuf field <code>string blockchain_id = 3 [json_name = "blockchainId"];</code>
     * @return string
     */
    public function getBlockchainId()
    {
        return $this->blockchain_id;
    }

    /**
     * Generated from protobuf field <code>string blockchain_id = 3 [json_name = "blockchainId"];</code>
     * @param string $var
     * @return $this
     */
    public function setBlockchainId($var)
    {
        GPBUtil::checkString($var, True);
        $this->blockchain_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

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
     * Generated from protobuf field <code>string created_at = 6 [json_name = "createdAt"];</code>
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Generated from protobuf field <code>string created_at = 6 [json_name = "createdAt"];</code>
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
     * Generated from protobuf field <code>string updated_at = 7 [json_name = "updatedAt"];</code>
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 7 [json_name = "updatedAt"];</code>
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
     * Generated from protobuf field <code>string user_email = 8 [json_name = "userEmail"];</code>
     * @return string
     */
    public function getUserEmail()
    {
        return $this->user_email;
    }

    /**
     * Generated from protobuf field <code>string user_email = 8 [json_name = "userEmail"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_email = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_name = 9 [json_name = "userName"];</code>
     * @return string
     */
    public function getUserName()
    {
        return $this->user_name;
    }

    /**
     * Generated from protobuf field <code>string user_name = 9 [json_name = "userName"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserName($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_name = $var;

        return $this;
    }

}

