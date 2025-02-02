<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.CreateChannelRequest</code>
 */
class CreateChannelRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Channel channel = 1 [json_name = "channel"];</code>
     */
    protected $channel = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Channel $channel
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Channel channel = 1 [json_name = "channel"];</code>
     * @return \Blockchain\Network\V1alpha1\Channel|null
     */
    public function getChannel()
    {
        return $this->channel;
    }

    public function hasChannel()
    {
        return isset($this->channel);
    }

    public function clearChannel()
    {
        unset($this->channel);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Channel channel = 1 [json_name = "channel"];</code>
     * @param \Blockchain\Network\V1alpha1\Channel $var
     * @return $this
     */
    public function setChannel($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Network\V1alpha1\Channel::class);
        $this->channel = $var;

        return $this;
    }

}

