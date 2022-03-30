<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 *Create
 *
 * Generated from protobuf message <code>accounts.v1alpha1.CreateUserRequest</code>
 */
class CreateUserRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string user_id = 1 [json_name = "userId"];</code>
     */
    protected $user_id = '';
    /**
     * Generated from protobuf field <code>string first_name = 2 [json_name = "firstName"];</code>
     */
    protected $first_name = '';
    /**
     * Generated from protobuf field <code>string last_name = 3 [json_name = "lastName"];</code>
     */
    protected $last_name = '';
    /**
     * Generated from protobuf field <code>string email = 4 [json_name = "email"];</code>
     */
    protected $email = '';
    /**
     * Generated from protobuf field <code>bool is_active = 5 [json_name = "isActive"];</code>
     */
    protected $is_active = false;
    /**
     * Generated from protobuf field <code>repeated uint32 roles_ids = 6 [json_name = "rolesIds"];</code>
     */
    private $roles_ids;
    /**
     * Generated from protobuf field <code>repeated uint32 permissions_ids = 7 [json_name = "permissionsIds"];</code>
     */
    private $permissions_ids;
    /**
     * Generated from protobuf field <code>repeated uint32 organizations_ids = 8 [json_name = "organizationsIds"];</code>
     */
    private $organizations_ids;
    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 9 [json_name = "phoneNumber"];</code>
     */
    protected $phone_number = '';
    /**
     * Generated from protobuf field <code>string country = 10 [json_name = "country"];</code>
     */
    protected $country = '';
    /**
     * Generated from protobuf field <code>string city = 11 [json_name = "city"];</code>
     */
    protected $city = '';
    /**
     * Generated from protobuf field <code>string zip_code = 12 [json_name = "zipCode"];</code>
     */
    protected $zip_code = '';
    /**
     * Generated from protobuf field <code>string address = 13 [json_name = "address"];</code>
     */
    protected $address = '';
    /**
     * Generated from protobuf field <code>string state = 14 [json_name = "state"];</code>
     */
    protected $state = '';
    /**
     * Generated from protobuf field <code>string emoji_country = 15 [json_name = "emojiCountry"];</code>
     */
    protected $emoji_country = '';
    /**
     * Generated from protobuf field <code>string invitation_code = 16 [json_name = "invitationCode"];</code>
     */
    protected $invitation_code = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $user_id
     *     @type string $first_name
     *     @type string $last_name
     *     @type string $email
     *     @type bool $is_active
     *     @type int[]|\Google\Protobuf\Internal\RepeatedField $roles_ids
     *     @type int[]|\Google\Protobuf\Internal\RepeatedField $permissions_ids
     *     @type int[]|\Google\Protobuf\Internal\RepeatedField $organizations_ids
     *     @type string $phone_number
     *           details
     *     @type string $country
     *     @type string $city
     *     @type string $zip_code
     *     @type string $address
     *     @type string $state
     *     @type string $emoji_country
     *     @type string $invitation_code
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string user_id = 1 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 1 [json_name = "userId"];</code>
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
     * Generated from protobuf field <code>string first_name = 2 [json_name = "firstName"];</code>
     * @return string
     */
    public function getFirstName()
    {
        return $this->first_name;
    }

    /**
     * Generated from protobuf field <code>string first_name = 2 [json_name = "firstName"];</code>
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
     * Generated from protobuf field <code>string last_name = 3 [json_name = "lastName"];</code>
     * @return string
     */
    public function getLastName()
    {
        return $this->last_name;
    }

    /**
     * Generated from protobuf field <code>string last_name = 3 [json_name = "lastName"];</code>
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
     * Generated from protobuf field <code>string email = 4 [json_name = "email"];</code>
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Generated from protobuf field <code>string email = 4 [json_name = "email"];</code>
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
     * Generated from protobuf field <code>repeated uint32 roles_ids = 6 [json_name = "rolesIds"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRolesIds()
    {
        return $this->roles_ids;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 roles_ids = 6 [json_name = "rolesIds"];</code>
     * @param int[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setRolesIds($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::UINT32);
        $this->roles_ids = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 permissions_ids = 7 [json_name = "permissionsIds"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPermissionsIds()
    {
        return $this->permissions_ids;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 permissions_ids = 7 [json_name = "permissionsIds"];</code>
     * @param int[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPermissionsIds($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::UINT32);
        $this->permissions_ids = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 organizations_ids = 8 [json_name = "organizationsIds"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getOrganizationsIds()
    {
        return $this->organizations_ids;
    }

    /**
     * Generated from protobuf field <code>repeated uint32 organizations_ids = 8 [json_name = "organizationsIds"];</code>
     * @param int[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setOrganizationsIds($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::UINT32);
        $this->organizations_ids = $arr;

        return $this;
    }

    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 9 [json_name = "phoneNumber"];</code>
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phone_number;
    }

    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 9 [json_name = "phoneNumber"];</code>
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
     * Generated from protobuf field <code>string country = 10 [json_name = "country"];</code>
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Generated from protobuf field <code>string country = 10 [json_name = "country"];</code>
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
     * Generated from protobuf field <code>string city = 11 [json_name = "city"];</code>
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Generated from protobuf field <code>string city = 11 [json_name = "city"];</code>
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
     * Generated from protobuf field <code>string zip_code = 12 [json_name = "zipCode"];</code>
     * @return string
     */
    public function getZipCode()
    {
        return $this->zip_code;
    }

    /**
     * Generated from protobuf field <code>string zip_code = 12 [json_name = "zipCode"];</code>
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
     * Generated from protobuf field <code>string address = 13 [json_name = "address"];</code>
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Generated from protobuf field <code>string address = 13 [json_name = "address"];</code>
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
     * Generated from protobuf field <code>string state = 14 [json_name = "state"];</code>
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Generated from protobuf field <code>string state = 14 [json_name = "state"];</code>
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
     * Generated from protobuf field <code>string emoji_country = 15 [json_name = "emojiCountry"];</code>
     * @return string
     */
    public function getEmojiCountry()
    {
        return $this->emoji_country;
    }

    /**
     * Generated from protobuf field <code>string emoji_country = 15 [json_name = "emojiCountry"];</code>
     * @param string $var
     * @return $this
     */
    public function setEmojiCountry($var)
    {
        GPBUtil::checkString($var, True);
        $this->emoji_country = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 16 [json_name = "invitationCode"];</code>
     * @return string
     */
    public function getInvitationCode()
    {
        return $this->invitation_code;
    }

    /**
     * Generated from protobuf field <code>string invitation_code = 16 [json_name = "invitationCode"];</code>
     * @param string $var
     * @return $this
     */
    public function setInvitationCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->invitation_code = $var;

        return $this;
    }

}

