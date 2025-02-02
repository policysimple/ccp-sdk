<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/invitations/invitations.proto

namespace Accounts\V1alpha1\Invitations\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.invitations.v1.ReactivateInvitationRequest</code>
 */
class ReactivateInvitationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string expired_at = 2 [json_name = "expiredAt"];</code>
     */
    protected $expired_at = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $expired_at
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Invitations\Invitations::initOnce();
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
     * Generated from protobuf field <code>string expired_at = 2 [json_name = "expiredAt"];</code>
     * @return string
     */
    public function getExpiredAt()
    {
        return $this->expired_at;
    }

    /**
     * Generated from protobuf field <code>string expired_at = 2 [json_name = "expiredAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setExpiredAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->expired_at = $var;

        return $this;
    }

}

