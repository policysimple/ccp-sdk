<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/organizations/organizations.proto

namespace Accounts\V1alpha1\Organizations\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.organizations.v1.Member</code>
 */
class Member extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string user_id = 2 [json_name = "userId"];</code>
     */
    protected $user_id = '';
    /**
     * Generated from protobuf field <code>string first_name = 3 [json_name = "firstName"];</code>
     */
    protected $first_name = '';
    /**
     * Generated from protobuf field <code>string last_name = 4 [json_name = "lastName"];</code>
     */
    protected $last_name = '';
    /**
     * Generated from protobuf field <code>bool is_active = 5 [json_name = "isActive"];</code>
     */
    protected $is_active = false;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.organizations.v1.MenberRol roles = 6 [json_name = "roles"];</code>
     */
    private $roles;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $user_id
     *     @type string $first_name
     *     @type string $last_name
     *     @type bool $is_active
     *     @type \Accounts\V1alpha1\Organizations\V1\MenberRol[]|\Google\Protobuf\Internal\RepeatedField $roles
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Organizations\Organizations::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkUint32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_id = 2 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 2 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string first_name = 3 [json_name = "firstName"];</code>
     * @return string
     */
    public function getFirstName()
    {
        return $this->first_name;
    }

    /**
     * Generated from protobuf field <code>string first_name = 3 [json_name = "firstName"];</code>
     * @param string $var
     * @return $this
     */
    public function setFirstName($var)
    {
        GPBUtil::checkString($var, True);
        $this->first_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string last_name = 4 [json_name = "lastName"];</code>
     * @return string
     */
    public function getLastName()
    {
        return $this->last_name;
    }

    /**
     * Generated from protobuf field <code>string last_name = 4 [json_name = "lastName"];</code>
     * @param string $var
     * @return $this
     */
    public function setLastName($var)
    {
        GPBUtil::checkString($var, True);
        $this->last_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_active = 5 [json_name = "isActive"];</code>
     * @return bool
     */
    public function getIsActive()
    {
        return $this->is_active;
    }

    /**
     * Generated from protobuf field <code>bool is_active = 5 [json_name = "isActive"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsActive($var)
    {
        GPBUtil::checkBool($var);
        $this->is_active = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.organizations.v1.MenberRol roles = 6 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.organizations.v1.MenberRol roles = 6 [json_name = "roles"];</code>
     * @param \Accounts\V1alpha1\Organizations\V1\MenberRol[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRoles($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Organizations\V1\MenberRol::class);
        $this->roles = $arr;

        return $this;
    }

}
