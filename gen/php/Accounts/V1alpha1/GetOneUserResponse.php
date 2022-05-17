<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.GetOneUserResponse</code>
 */
class GetOneUserResponse extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>string email = 5 [json_name = "email"];</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>bool is_active = 6 [json_name = "isActive"];</code>
     */
    protected $is_active = false;
    /**
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 9 [json_name = "roles"];</code>
     */
    private $roles;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 10 [json_name = "permissions"];</code>
     */
    private $permissions;
    /**
     * Generated from protobuf field <code>bool is_super_user = 11 [json_name = "isSuperUser"];</code>
     */
    protected $is_super_user = false;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Organization organizations = 12 [json_name = "organizations"];</code>
     */
    private $organizations;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project projects = 13 [json_name = "projects"];</code>
     */
    private $projects;
    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 14 [json_name = "phoneNumber"];</code>
     */
    protected $phone_number = '';
    /**
     * Generated from protobuf field <code>string country = 15 [json_name = "country"];</code>
     */
    protected $country = '';
    /**
     * Generated from protobuf field <code>string city = 16 [json_name = "city"];</code>
     */
    protected $city = '';
    /**
     * Generated from protobuf field <code>string zip_code = 17 [json_name = "zipCode"];</code>
     */
    protected $zip_code = '';
    /**
     * Generated from protobuf field <code>string address = 18 [json_name = "address"];</code>
     */
    protected $address = '';
    /**
     * Generated from protobuf field <code>string state = 19 [json_name = "state"];</code>
     */
    protected $state = '';
    /**
     * Generated from protobuf field <code>string emoji_country = 20 [json_name = "emojiCountry"];</code>
     */
    protected $emoji_country = '';

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
     *     @type string $email
     *     @type bool $is_active
     *     @type string $created_at
     *     @type string $updated_at
     *     @type \Accounts\V1alpha1\Rol[]|\Google\Protobuf\Internal\RepeatedField $roles
     *     @type \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $permissions
     *     @type bool $is_super_user
     *     @type \Accounts\V1alpha1\Organization[]|\Google\Protobuf\Internal\RepeatedField $organizations
     *     @type \Accounts\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $projects
     *     @type string $phone_number
     *           details
     *     @type string $country
     *     @type string $city
     *     @type string $zip_code
     *     @type string $address
     *     @type string $state
     *     @type string $emoji_country
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
     * Generated from protobuf field <code>string email = 5 [json_name = "email"];</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 5 [json_name = "email"];</code>
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
     * Generated from protobuf field <code>bool is_active = 6 [json_name = "isActive"];</code>
     * @return bool
     */
    public function getIsActive()
    {
        return $this->is_active;
    }

    /**
     * Generated from protobuf field <code>bool is_active = 6 [json_name = "isActive"];</code>
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
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Generated from protobuf field <code>string created_at = 7 [json_name = "createdAt"];</code>
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
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 8 [json_name = "updatedAt"];</code>
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
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 9 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Rol roles = 9 [json_name = "roles"];</code>
     * @param \Accounts\V1alpha1\Rol[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRoles($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Rol::class);
        $this->roles = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 10 [json_name = "permissions"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPermissions()
    {
        return $this->permissions;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Permission permissions = 10 [json_name = "permissions"];</code>
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
     * Generated from protobuf field <code>bool is_super_user = 11 [json_name = "isSuperUser"];</code>
     * @return bool
     */
    public function getIsSuperUser()
    {
        return $this->is_super_user;
    }

    /**
     * Generated from protobuf field <code>bool is_super_user = 11 [json_name = "isSuperUser"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsSuperUser($var)
    {
        GPBUtil::checkBool($var);
        $this->is_super_user = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Organization organizations = 12 [json_name = "organizations"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getOrganizations()
    {
        return $this->organizations;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Organization organizations = 12 [json_name = "organizations"];</code>
     * @param \Accounts\V1alpha1\Organization[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setOrganizations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Organization::class);
        $this->organizations = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project projects = 13 [json_name = "projects"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project projects = 13 [json_name = "projects"];</code>
     * @param \Accounts\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProjects($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Project::class);
        $this->projects = $arr;

        return $this;
    }

    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 14 [json_name = "phoneNumber"];</code>
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phone_number;
    }

    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 14 [json_name = "phoneNumber"];</code>
     * @param string $var
     * @return $this
     */
    public function setPhoneNumber($var)
    {
        GPBUtil::checkString($var, True);
        $this->phone_number = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string country = 15 [json_name = "country"];</code>
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Generated from protobuf field <code>string country = 15 [json_name = "country"];</code>
     * @param string $var
     * @return $this
     */
    public function setCountry($var)
    {
        GPBUtil::checkString($var, True);
        $this->country = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string city = 16 [json_name = "city"];</code>
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Generated from protobuf field <code>string city = 16 [json_name = "city"];</code>
     * @param string $var
     * @return $this
     */
    public function setCity($var)
    {
        GPBUtil::checkString($var, True);
        $this->city = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string zip_code = 17 [json_name = "zipCode"];</code>
     * @return string
     */
    public function getZipCode()
    {
        return $this->zip_code;
    }

    /**
     * Generated from protobuf field <code>string zip_code = 17 [json_name = "zipCode"];</code>
     * @param string $var
     * @return $this
     */
    public function setZipCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->zip_code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string address = 18 [json_name = "address"];</code>
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Generated from protobuf field <code>string address = 18 [json_name = "address"];</code>
     * @param string $var
     * @return $this
     */
    public function setAddress($var)
    {
        GPBUtil::checkString($var, True);
        $this->address = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string state = 19 [json_name = "state"];</code>
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Generated from protobuf field <code>string state = 19 [json_name = "state"];</code>
     * @param string $var
     * @return $this
     */
    public function setState($var)
    {
        GPBUtil::checkString($var, True);
        $this->state = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string emoji_country = 20 [json_name = "emojiCountry"];</code>
     * @return string
     */
    public function getEmojiCountry()
    {
        return $this->emoji_country;
    }

    /**
     * Generated from protobuf field <code>string emoji_country = 20 [json_name = "emojiCountry"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmojiCountry($var)
    {
        GPBUtil::checkString($var, True);
        $this->emoji_country = $var;

        return $this;
    }

}

