<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.Network</code>
 */
class Network extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string network_name = 2 [json_name = "networkName"];</code>
     */
    protected $network_name = '';
    /**
     * Generated from protobuf field <code>string framework = 3 [json_name = "framework"];</code>
     */
    protected $framework = '';
    /**
     * Generated from protobuf field <code>string type = 4 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * Generated from protobuf field <code>string user_id = 5 [json_name = "userId"];</code>
     */
    protected $user_id = '';
    /**
     * Generated from protobuf field <code>string status = 6 [json_name = "status"];</code>
     */
    protected $status = '';
    /**
     * Generated from protobuf field <code>string error_details = 7 [json_name = "errorDetails"];</code>
     */
    protected $error_details = '';
    /**
     * Generated from protobuf field <code>string created_at = 8 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 9 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';
    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Corporation corporations = 10 [json_name = "corporations"];</code>
     */
    private $corporations;
    /**
     * Generated from protobuf field <code>string ccp_organization_id = 11 [json_name = "ccpOrganizationId"];</code>
     */
    protected $ccp_organization_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $network_name
     *     @type string $framework
     *     @type string $type
     *     @type string $user_id
     *     @type string $status
     *     @type string $error_details
     *     @type string $created_at
     *     @type string $updated_at
     *     @type \Blockchain\Network\V1alpha1\Corporation[]|\Google\Protobuf\Internal\RepeatedField $corporations
     *     @type string $ccp_organization_id
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
     * Generated from protobuf field <code>string network_name = 2 [json_name = "networkName"];</code>
     * @return string
     */
    public function getNetworkName()
    {
        return $this->network_name;
    }

    /**
     * Generated from protobuf field <code>string network_name = 2 [json_name = "networkName"];</code>
     * @param string $var
     * @return $this
     */
    public function setNetworkName($var)
    {
        GPBUtil::checkString($var, True);
        $this->network_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string framework = 3 [json_name = "framework"];</code>
     * @return string
     */
    public function getFramework()
    {
        return $this->framework;
    }

    /**
     * Generated from protobuf field <code>string framework = 3 [json_name = "framework"];</code>
     * @param string $var
     * @return $this
     */
    public function setFramework($var)
    {
        GPBUtil::checkString($var, True);
        $this->framework = $var;

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
     * Generated from protobuf field <code>string user_id = 5 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 5 [json_name = "userId"];</code>
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
     * Generated from protobuf field <code>string status = 6 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 6 [json_name = "status"];</code>
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
     * Generated from protobuf field <code>string error_details = 7 [json_name = "errorDetails"];</code>
     * @return string
     */
    public function getErrorDetails()
    {
        return $this->error_details;
    }

    /**
     * Generated from protobuf field <code>string error_details = 7 [json_name = "errorDetails"];</code>
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
     * Generated from protobuf field <code>string created_at = 8 [json_name = "createdAt"];</code>
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Generated from protobuf field <code>string created_at = 8 [json_name = "createdAt"];</code>
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
     * Generated from protobuf field <code>string updated_at = 9 [json_name = "updatedAt"];</code>
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 9 [json_name = "updatedAt"];</code>
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
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Corporation corporations = 10 [json_name = "corporations"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCorporations()
    {
        return $this->corporations;
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Corporation corporations = 10 [json_name = "corporations"];</code>
     * @param \Blockchain\Network\V1alpha1\Corporation[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCorporations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Blockchain\Network\V1alpha1\Corporation::class);
        $this->corporations = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string ccp_organization_id = 11 [json_name = "ccpOrganizationId"];</code>
     * @return string
     */
    public function getCcpOrganizationId()
    {
        return $this->ccp_organization_id;
    }

    /**
     * Generated from protobuf field <code>string ccp_organization_id = 11 [json_name = "ccpOrganizationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setCcpOrganizationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->ccp_organization_id = $var;

        return $this;
    }

}

