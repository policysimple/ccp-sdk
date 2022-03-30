<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.Organization</code>
 */
class Organization extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 id = 1 [json_name = "id"];</code>
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
     * Generated from protobuf field <code>string description = 4 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.UserList owner = 7 [json_name = "owner"];</code>
     */
    protected $owner = null;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 8 [json_name = "roles"];</code>
     */
    private $roles;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type string $name
     *     @type string $image
     *     @type string $description
     *     @type \Accounts\V1alpha1\UserList $owner
     *     @type \Accounts\V1alpha1\Rol[]|\Google\Protobuf\Internal\RepeatedField $roles
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
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
     * Generated from protobuf field <code>string description = 4 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 4 [json_name = "description"];</code>
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
     * Generated from protobuf field <code>.accounts.v1alpha1.UserList owner = 7 [json_name = "owner"];</code>
     * @return \Accounts\V1alpha1\UserList|null
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
     * Generated from protobuf field <code>.accounts.v1alpha1.UserList owner = 7 [json_name = "owner"];</code>
     * @param \Accounts\V1alpha1\UserList $var
     * @return $this
     */
    public function setOwner($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\UserList::class);
        $this->owner = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 8 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 8 [json_name = "roles"];</code>
     * @param \Accounts\V1alpha1\Rol[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRoles($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Rol::class);
        $this->roles = $arr;

        return $this;
    }

}

