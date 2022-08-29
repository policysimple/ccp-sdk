<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/users/users.proto

namespace Accounts\V1alpha1\Users\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.users.v1.GetInvitationUserRequest</code>
 */
class GetInvitationUserRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string invitation_code = 1 [json_name = "invitationCode"];</code>
     */
    protected $invitation_code = '';
    /**
     * Generated from protobuf field <code>string email = 2 [json_name = "email"];</code>
     */
    protected $email = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $invitation_code
     *     @type string $email
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Users\Users::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 1 [json_name = "invitationCode"];</code>
     * @return string
     */
    public function getInvitationCode()
    {
        return $this->invitation_code;
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 1 [json_name = "invitationCode"];</code>
     * @param string $var
     * @return $this
     */
    public function setInvitationCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->invitation_code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string email = 2 [json_name = "email"];</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 2 [json_name = "email"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->email = $var;

        return $this;
    }

}
