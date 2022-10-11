<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.GetBlockchainByIdResponse</code>
 */
class GetBlockchainByIdResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     */
    protected $network = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Network $network
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

}
