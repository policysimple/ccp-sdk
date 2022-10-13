<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.SendInvitationRequest</code>
 */
class SendInvitationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Invitation invitation = 1 [json_name = "invitation"];</code>
     */
    protected $invitation = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Invitation $invitation
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Invitation invitation = 1 [json_name = "invitation"];</code>
     * @return \Blockchain\Network\V1alpha1\Invitation|null
     */
    public function getInvitation()
    {
        return $this->invitation;
    }

    public function hasInvitation()
    {
        return isset($this->invitation);
    }

    public function clearInvitation()
    {
        unset($this->invitation);
    }

    /**
     * Generated from protobuf field <code>.blockchain.network.v1alpha1.Invitation invitation = 1 [json_name = "invitation"];</code>
     * @param \Blockchain\Network\V1alpha1\Invitation $var
     * @return $this
     */
    public function setInvitation($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Network\V1alpha1\Invitation::class);
        $this->invitation = $var;

        return $this;
    }

}

