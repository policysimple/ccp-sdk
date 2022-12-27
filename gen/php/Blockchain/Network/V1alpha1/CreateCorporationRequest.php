<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.CreateCorporationRequest</code>
 */
class CreateCorporationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Corporation corporation = 1 [json_name = "corporation"];</code>
     */
    protected $corporation = null;
    /**
     * Generated from protobuf field <code>string ccp_organization_id = 2 [json_name = "ccpOrganizationId"];</code>
     */
    protected $ccp_organization_id = '';
    /**
     * Generated from protobuf field <code>string ccp_project_id = 3 [json_name = "ccpProjectId"];</code>
     */
    protected $ccp_project_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Corporation $corporation
     *     @type string $ccp_organization_id
     *     @type string $ccp_project_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Corporation corporation = 1 [json_name = "corporation"];</code>
     * @return \Blockchain\Network\V1alpha1\Corporation|null
     */
    public function getCorporation()
    {
        return $this->corporation;
    }

    public function hasCorporation()
    {
        return isset($this->corporation);
    }

    public function clearCorporation()
    {
        unset($this->corporation);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Corporation corporation = 1 [json_name = "corporation"];</code>
     * @param \Blockchain\Network\V1alpha1\Corporation $var
     * @return $this
     */
    public function setCorporation($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Network\V1alpha1\Corporation::class);
        $this->corporation = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string ccp_organization_id = 2 [json_name = "ccpOrganizationId"];</code>
     * @return string
     */
    public function getCcpOrganizationId()
    {
        return $this->ccp_organization_id;
    }

    /**
     * Generated from protobuf field <code>string ccp_organization_id = 2 [json_name = "ccpOrganizationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setCcpOrganizationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->ccp_organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string ccp_project_id = 3 [json_name = "ccpProjectId"];</code>
     * @return string
     */
    public function getCcpProjectId()
    {
        return $this->ccp_project_id;
    }

    /**
     * Generated from protobuf field <code>string ccp_project_id = 3 [json_name = "ccpProjectId"];</code>
     * @param string $var
     * @return $this
     */
    public function setCcpProjectId($var)
    {
        GPBUtil::checkString($var, True);
        $this->ccp_project_id = $var;

        return $this;
    }

}

