<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/projects/projects.proto

namespace Accounts\V1alpha1\Projects\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.projects.v1.GetOneProjectResponse</code>
 */
class GetOneProjectResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string image = 3 [json_name = "image"];</code>
     */
    protected $image = '';
    /**
     * Generated from protobuf field <code>uint32 organization_id = 4 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string created_at = 6 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 7 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.projects.v1.MenberProject members = 8 [json_name = "members"];</code>
     */
    private $members;
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.projects.v1.UserList owner = 9 [json_name = "owner"];</code>
     */
    protected $owner = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $name
     *     @type string $image
     *     @type int $organization_id
     *     @type string $description
     *     @type string $created_at
     *     @type string $updated_at
     *     @type \Accounts\V1alpha1\Projects\V1\MenberProject[]|\Google\Protobuf\Internal\RepeatedField $members
     *     @type \Accounts\V1alpha1\Projects\V1\UserList $owner
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Projects\Projects::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>string image = 3 [json_name = "image"];</code>
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Generated from protobuf field <code>string image = 3 [json_name = "image"];</code>
     * @param string $var
     * @return $this
     */
    public function setImage($var)
    {
        GPBUtil::checkString($var, True);
        $this->image = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 4 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 4 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string created_at = 6 [json_name = "createdAt"];</code>
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Generated from protobuf field <code>string created_at = 6 [json_name = "createdAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setCreatedAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->created_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 7 [json_name = "updatedAt"];</code>
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 7 [json_name = "updatedAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setUpdatedAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->updated_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.projects.v1.MenberProject members = 8 [json_name = "members"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getMembers()
    {
        return $this->members;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.projects.v1.MenberProject members = 8 [json_name = "members"];</code>
     * @param \Accounts\V1alpha1\Projects\V1\MenberProject[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setMembers($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Projects\V1\MenberProject::class);
        $this->members = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.projects.v1.UserList owner = 9 [json_name = "owner"];</code>
     * @return \Accounts\V1alpha1\Projects\V1\UserList|null
     */
    public function getOwner()
    {
        return $this->owner;
    }

    public function hasOwner()
    {
        return isset($this->owner);
    }

    public function clearOwner()
    {
        unset($this->owner);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.projects.v1.UserList owner = 9 [json_name = "owner"];</code>
     * @param \Accounts\V1alpha1\Projects\V1\UserList $var
     * @return $this
     */
    public function setOwner($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Projects\V1\UserList::class);
        $this->owner = $var;

        return $this;
    }

}

