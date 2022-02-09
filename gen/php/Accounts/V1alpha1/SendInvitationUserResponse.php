<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.SendInvitationUserResponse</code>
 */
class SendInvitationUserResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Organization organization = 1 [json_name = "organization"];</code>
     */
    protected $organization = null;
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Project project = 2 [json_name = "project"];</code>
     */
    protected $project = null;
    /**
     * Generated from protobuf field <code>string invitation_code = 3 [json_name = "invitationCode"];</code>
     */
    protected $invitation_code = '';
    /**
     * Generated from protobuf field <code>string result = 4 [json_name = "result"];</code>
     */
    protected $result = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Organization $organization
     *     @type \Accounts\V1alpha1\Project $project
     *     @type string $invitation_code
     *     @type string $result
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Organization organization = 1 [json_name = "organization"];</code>
     * @return \Accounts\V1alpha1\Organization|null
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
     * Generated from protobuf field <code>.accounts.v1alpha1.Organization organization = 1 [json_name = "organization"];</code>
     * @param \Accounts\V1alpha1\Organization $var
     * @return $this
     */
    public function setOrganization($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Organization::class);
        $this->organization = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Project project = 2 [json_name = "project"];</code>
     * @return \Accounts\V1alpha1\Project|null
     */
    public function getProject()
    {
        return $this->project;
    }

    public function hasProject()
    {
        return isset($this->project);
    }

    public function clearProject()
    {
        unset($this->project);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.Project project = 2 [json_name = "project"];</code>
     * @param \Accounts\V1alpha1\Project $var
     * @return $this
     */
    public function setProject($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Project::class);
        $this->project = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 3 [json_name = "invitationCode"];</code>
     * @return string
     */
    public function getInvitationCode()
    {
        return $this->invitation_code;
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 3 [json_name = "invitationCode"];</code>
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
     * Generated from protobuf field <code>string result = 4 [json_name = "result"];</code>
     * @return string
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Generated from protobuf field <code>string result = 4 [json_name = "result"];</code>
     * @param string $var
     * @return $this
     */
    public function setResult($var)
    {
        GPBUtil::checkString($var, True);
        $this->result = $var;

        return $this;
    }

}
