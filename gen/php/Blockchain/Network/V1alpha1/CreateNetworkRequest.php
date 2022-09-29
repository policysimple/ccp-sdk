<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Requests messages
 *
 * Generated from protobuf message <code>blockchain.network.v1alpha1.CreateNetworkRequest</code>
 */
class CreateNetworkRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     */
    protected $network = null;
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Organization organization = 2 [json_name = "organization"];</code>
     */
    protected $organization = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Network $network
     *     @type \Blockchain\Network\V1alpha1\Organization $organization
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     * @return \Blockchain\Network\V1alpha1\Network|null
     */
    public function getNetwork()
    {
        return $this->network;
    }

    public function hasNetwork()
    {
        return isset($this->network);
    }

    public function clearNetwork()
    {
        unset($this->network);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     * @param \Blockchain\Network\V1alpha1\Network $var
     * @return $this
     */
    public function setNetwork($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Network\V1alpha1\Network::class);
        $this->network = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Organization organization = 2 [json_name = "organization"];</code>
     * @return \Blockchain\Network\V1alpha1\Organization|null
     */
    public function getOrganization()
    {
        return $this->organization;
    }

    public function hasOrganization()
    {
        return isset($this->organization);
    }

    public function clearOrganization()
    {
        unset($this->organization);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Organization organization = 2 [json_name = "organization"];</code>
     * @param \Blockchain\Network\V1alpha1\Organization $var
     * @return $this
     */
    public function setOrganization($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Network\V1alpha1\Organization::class);
        $this->organization = $var;

        return $this;
    }

}
