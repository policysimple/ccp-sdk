<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.GetBlockchainsResponse</code>
 */
class GetBlockchainsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     */
    private $network;
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
     *     @type \Blockchain\Network\V1alpha1\Network[]|\Google\Protobuf\Internal\RepeatedField $network
     *     @type string $message
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getNetwork()
    {
        return $this->network;
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Network network = 1 [json_name = "network"];</code>
     * @param \Blockchain\Network\V1alpha1\Network[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setNetwork($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Blockchain\Network\V1alpha1\Network::class);
        $this->network = $arr;

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
