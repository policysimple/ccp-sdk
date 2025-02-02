<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.AddOrdererByNetworkIdResponse</code>
 */
class AddOrdererByNetworkIdResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Orderer orderer = 1 [json_name = "orderer"];</code>
     */
    protected $orderer = null;
    /**
     * Generated from protobuf field <code>string message = 2 [json_name = "message"];</code>
     */
    protected $message = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Orderer $orderer
     *     @type string $message
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Orderer orderer = 1 [json_name = "orderer"];</code>
     * @return \Blockchain\Network\V1alpha1\Orderer|null
     */
    public function getOrderer()
    {
        return $this->orderer;
    }

    public function hasOrderer()
    {
        return isset($this->orderer);
    }

    public function clearOrderer()
    {
        unset($this->orderer);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Orderer orderer = 1 [json_name = "orderer"];</code>
     * @param \Blockchain\Network\V1alpha1\Orderer $var
     * @return $this
     */
    public function setOrderer($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Network\V1alpha1\Orderer::class);
        $this->orderer = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string message = 2 [json_name = "message"];</code>
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Generated from protobuf field <code>string message = 2 [json_name = "message"];</code>
     * @param string $var
     * @return $this
     */
    public function setMessage($var)
    {
        GPBUtil::checkString($var, True);
        $this->message = $var;

        return $this;
    }

}

