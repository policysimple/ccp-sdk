<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/invitations/invitations.proto

namespace Accounts\V1alpha1\Invitations\V1;

use UnexpectedValueException;

/**
 * Invitation
 *
 * Protobuf type <code>accounts.v1alpha1.invitations.v1.InvitationResponse</code>
 */
class InvitationResponse
{
    /**
     * Generated from protobuf enum <code>INVITATION_RESPONSE_ACCEPTED_UNSPECIFIED = 0;</code>
     */
    const INVITATION_RESPONSE_ACCEPTED_UNSPECIFIED = 0;
    /**
     * Generated from protobuf enum <code>INVITATION_RESPONSE_REJECTED = 1;</code>
     */
    const INVITATION_RESPONSE_REJECTED = 1;

    private static $valueToName = [
        self::INVITATION_RESPONSE_ACCEPTED_UNSPECIFIED => 'INVITATION_RESPONSE_ACCEPTED_UNSPECIFIED',
        self::INVITATION_RESPONSE_REJECTED => 'INVITATION_RESPONSE_REJECTED',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

