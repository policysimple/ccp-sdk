<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/invitations/invitations.proto

namespace Accounts\V1alpha1\Invitations\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.invitations.v1.GetInvitationUserResponse</code>
 */
class GetInvitationUserResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 10 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string invitation_code = 2 [json_name = "invitationCode"];</code>
     */
    protected $invitation_code = '';
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 4 [json_name = "roles"];</code>
     */
    private $roles;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 5 [json_name = "permissions"];</code>
     */
    private $permissions;
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.invitations.v1.OrganizationInvitation organization = 6 [json_name = "organization"];</code>
     */
    protected $organization = null;
    /**
     * Generated from protobuf field <code>string email = 7 [json_name = "email"];</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>bool success = 8 [json_name = "success"];</code>
     */
    protected $success = false;
    /**
     * Generated from protobuf field <code>string expired_at = 9 [json_name = "expiredAt"];</code>
     */
    protected $expired_at = '';
    /**
     * Generated from protobuf field <code>bool expired_status = 11 [json_name = "expiredStatus"];</code>
     */
    protected $expired_status = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $invitation_code
     *     @type \Accounts\V1alpha1\Role[]|\Google\Protobuf\Internal\RepeatedField $roles
     *     @type \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $permissions
     *     @type \Accounts\V1alpha1\Invitations\V1\OrganizationInvitation $organization
     *     @type string $email
     *     @type bool $success
     *     @type string $expired_at
     *     @type bool $expired_status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Invitations\Invitations::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 10 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 10 [json_name = "id"];</code>
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
     * Generated from protobuf field <code>string invitation_code = 2 [json_name = "invitationCode"];</code>
     * @return string
     */
    public function getInvitationCode()
    {
        return $this->invitation_code;
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 2 [json_name = "invitationCode"];</code>
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
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 4 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 4 [json_name = "roles"];</code>
     * @param \Accounts\V1alpha1\Role[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRoles($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Role::class);
        $this->roles = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 5 [json_name = "permissions"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPermissions()
    {
        return $this->permissions;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 5 [json_name = "permissions"];</code>
     * @param \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPermissions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Permission::class);
        $this->permissions = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.invitations.v1.OrganizationInvitation organization = 6 [json_name = "organization"];</code>
     * @return \Accounts\V1alpha1\Invitations\V1\OrganizationInvitation|null
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
     * Generated from protobuf field <code>.accounts.v1alpha1.invitations.v1.OrganizationInvitation organization = 6 [json_name = "organization"];</code>
     * @param \Accounts\V1alpha1\Invitations\V1\OrganizationInvitation $var
     * @return $this
     */
    public function setOrganization($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Invitations\V1\OrganizationInvitation::class);
        $this->organization = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string email = 7 [json_name = "email"];</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 7 [json_name = "email"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmail($var)
    {
        GPBUtil::checkString($var, True);
        $this->email = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool success = 8 [json_name = "success"];</code>
     * @return bool
     */
    public function getSuccess()
    {
        return $this->success;
    }

    /**
     * Generated from protobuf field <code>bool success = 8 [json_name = "success"];</code>
     * @param bool $var
     * @return $this
     */
    public function setSuccess($var)
    {
        GPBUtil::checkBool($var);
        $this->success = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string expired_at = 9 [json_name = "expiredAt"];</code>
     * @return string
     */
    public function getExpiredAt()
    {
        return $this->expired_at;
    }

    /**
     * Generated from protobuf field <code>string expired_at = 9 [json_name = "expiredAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setExpiredAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->expired_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool expired_status = 11 [json_name = "expiredStatus"];</code>
     * @return bool
     */
    public function getExpiredStatus()
    {
        return $this->expired_status;
    }

    /**
     * Generated from protobuf field <code>bool expired_status = 11 [json_name = "expiredStatus"];</code>
     * @param bool $var
     * @return $this
     */
    public function setExpiredStatus($var)
    {
        GPBUtil::checkBool($var);
        $this->expired_status = $var;

        return $this;
    }

}

