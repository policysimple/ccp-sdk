<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.CreateCorporationResponse</code>
 */
class CreateCorporationResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Corporation corporation = 1 [json_name = "corporation"];</code>
     */
    protected $corporation = null;
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
     *     @type \Blockchain\Network\V1alpha1\Corporation $corporation
     *     @type string $message
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

