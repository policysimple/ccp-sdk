<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.SendInvitationUserRequest</code>
 */
class SendInvitationUserRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string email = 2 [json_name = "email"];</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string user_id_admin = 4 [json_name = "userIdAdmin"];</code>
     */
    protected $user_id_admin = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $email
     *     @type int $project_id
     *     @type string $user_id_admin
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

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

    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkUint32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_id_admin = 4 [json_name = "userIdAdmin"];</code>
     * @return string
     */
    public function getUserIdAdmin()
    {
        return $this->user_id_admin;
    }

    /**
     * Generated from protobuf field <code>string user_id_admin = 4 [json_name = "userIdAdmin"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserIdAdmin($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id_admin = $var;

        return $this;
    }

}

