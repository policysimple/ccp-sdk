<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.UserDetail</code>
 */
class UserDetail extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 9 [json_name = "roles"];</code>
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
     * details
     *
     * Generated from protobuf field <code>string phone_number = 15 [json_name = "phoneNumber"];</code>
     */
    protected $phone_number = '';
    /**
     * Generated from protobuf field <code>string country = 16 [json_name = "country"];</code>
     */
    protected $country = '';
    /**
     * Generated from protobuf field <code>string city = 17 [json_name = "city"];</code>
     */
    protected $city = '';
    /**
     * Generated from protobuf field <code>string zip_code = 18 [json_name = "zipCode"];</code>
     */
    protected $zip_code = '';
    /**
     * Generated from protobuf field <code>string address = 19 [json_name = "address"];</code>
     */
    protected $address = '';
    /**
     * Generated from protobuf field <code>string state = 20 [json_name = "state"];</code>
     */
    protected $state = '';
    /**
     * Generated from protobuf field <code>string emoji_country = 21 [json_name = "emojiCountry"];</code>
     */
    protected $emoji_country = '';
    /**
     *multi-factor
     *
     * Generated from protobuf field <code>bool is_mfa_enabled = 22 [json_name = "isMfaEnabled"];</code>
     */
    protected $is_mfa_enabled = false;
    /**
     * Generated from protobuf field <code>string token_ccp = 23 [json_name = "tokenCcp"];</code>
     */
    protected $token_ccp = '';
    /**
     * Generated from protobuf field <code>bool email_verified = 24 [json_name = "emailVerified"];</code>
     */
    protected $email_verified = false;
    /**
     *preferences
     *
     * Generated from protobuf field <code>string language = 26 [json_name = "language"];</code>
     */
    protected $language = '';
    /**
     * Generated from protobuf field <code>bool push_notification = 27 [json_name = "pushNotification"];</code>
     */
    protected $push_notification = false;
    /**
     * Generated from protobuf field <code>bool email_notification = 28 [json_name = "emailNotification"];</code>
     */
    protected $email_notification = false;
    /**
     * Generated from protobuf field <code>bool new_login_notification = 29 [json_name = "newLoginNotification"];</code>
     */
    protected $new_login_notification = false;
    /**
     * Generated from protobuf field <code>bool create_notification = 30 [json_name = "createNotification"];</code>
     */
    protected $create_notification = false;
    /**
     * Generated from protobuf field <code>bool update_notification = 31 [json_name = "updateNotification"];</code>
     */
    protected $update_notification = false;
    /**
     * Generated from protobuf field <code>bool delete_notification = 32 [json_name = "deleteNotification"];</code>
     */
    protected $delete_notification = false;
    /**
     * Generated from protobuf field <code>bool application_notification = 33 [json_name = "applicationNotification"];</code>
     */
    protected $application_notification = false;
    /**
     * Generated from protobuf field <code>bool read_notification = 34 [json_name = "readNotification"];</code>
     */
    protected $read_notification = false;
    /**
     * Generated from protobuf field <code>string phone_code = 35 [json_name = "phoneCode"];</code>
     */
    protected $phone_code = '';
    /**
     * Generated from protobuf field <code>string optional_address = 36 [json_name = "optionalAddress"];</code>
     */
    protected $optional_address = '';
    /**
     * Generated from protobuf field <code>string image = 37 [json_name = "image"];</code>
     */
    protected $image = '';

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
     *     @type \Accounts\V1alpha1\Role[]|\Google\Protobuf\Internal\RepeatedField $roles
     *     @type \Accounts\V1alpha1\Permission[]|\Google\Protobuf\Internal\RepeatedField $permissions
     *     @type bool $is_super_user
     *     @type \Accounts\V1alpha1\Organization[]|\Google\Protobuf\Internal\RepeatedField $organizations
     *     @type string $phone_number
     *           details
     *     @type string $country
     *     @type string $city
     *     @type string $zip_code
     *     @type string $address
     *     @type string $state
     *     @type string $emoji_country
     *     @type bool $is_mfa_enabled
     *          multi-factor
     *     @type string $token_ccp
     *     @type bool $email_verified
     *     @type string $language
     *          preferences
     *     @type bool $push_notification
     *     @type bool $email_notification
     *     @type bool $new_login_notification
     *     @type bool $create_notification
     *     @type bool $update_notification
     *     @type bool $delete_notification
     *     @type bool $application_notification
     *     @type bool $read_notification
     *     @type string $phone_code
     *     @type string $optional_address
     *     @type string $image
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
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 9 [json_name = "roles"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Role roles = 9 [json_name = "roles"];</code>
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
     * details
     *
     * Generated from protobuf field <code>string phone_number = 15 [json_name = "phoneNumber"];</code>
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phone_number;
    }

    /**
     * details
     *
     * Generated from protobuf field <code>string phone_number = 15 [json_name = "phoneNumber"];</code>
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
     * Generated from protobuf field <code>string country = 16 [json_name = "country"];</code>
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Generated from protobuf field <code>string country = 16 [json_name = "country"];</code>
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
     * Generated from protobuf field <code>string city = 17 [json_name = "city"];</code>
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Generated from protobuf field <code>string city = 17 [json_name = "city"];</code>
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
     * Generated from protobuf field <code>string zip_code = 18 [json_name = "zipCode"];</code>
     * @return string
     */
    public function getZipCode()
    {
        return $this->zip_code;
    }

    /**
     * Generated from protobuf field <code>string zip_code = 18 [json_name = "zipCode"];</code>
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
     * Generated from protobuf field <code>string address = 19 [json_name = "address"];</code>
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Generated from protobuf field <code>string address = 19 [json_name = "address"];</code>
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
     * Generated from protobuf field <code>string state = 20 [json_name = "state"];</code>
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * Generated from protobuf field <code>string state = 20 [json_name = "state"];</code>
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
     * Generated from protobuf field <code>string emoji_country = 21 [json_name = "emojiCountry"];</code>
     * @return string
     */
    public function getEmojiCountry()
    {
        return $this->emoji_country;
    }

    /**
     * Generated from protobuf field <code>string emoji_country = 21 [json_name = "emojiCountry"];</code>
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
     *multi-factor
     *
     * Generated from protobuf field <code>bool is_mfa_enabled = 22 [json_name = "isMfaEnabled"];</code>
     * @return bool
     */
    public function getIsMfaEnabled()
    {
        return $this->is_mfa_enabled;
    }

    /**
     *multi-factor
     *
     * Generated from protobuf field <code>bool is_mfa_enabled = 22 [json_name = "isMfaEnabled"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsMfaEnabled($var)
    {
        GPBUtil::checkBool($var);
        $this->is_mfa_enabled = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string token_ccp = 23 [json_name = "tokenCcp"];</code>
     * @return string
     */
    public function getTokenCcp()
    {
        return $this->token_ccp;
    }

    /**
     * Generated from protobuf field <code>string token_ccp = 23 [json_name = "tokenCcp"];</code>
     * @param string $var
     * @return $this
     */
    public function setTokenCcp($var)
    {
        GPBUtil::checkString($var, True);
        $this->token_ccp = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool email_verified = 24 [json_name = "emailVerified"];</code>
     * @return bool
     */
    public function getEmailVerified()
    {
        return $this->email_verified;
    }

    /**
     * Generated from protobuf field <code>bool email_verified = 24 [json_name = "emailVerified"];</code>
     * @param bool $var
     * @return $this
     */
    public function setEmailVerified($var)
    {
        GPBUtil::checkBool($var);
        $this->email_verified = $var;

        return $this;
    }

    /**
     *preferences
     *
     * Generated from protobuf field <code>string language = 26 [json_name = "language"];</code>
     * @return string
     */
    public function getLanguage()
    {
        return $this->language;
    }

    /**
     *preferences
     *
     * Generated from protobuf field <code>string language = 26 [json_name = "language"];</code>
     * @param string $var
     * @return $this
     */
    public function setLanguage($var)
    {
        GPBUtil::checkString($var, True);
        $this->language = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool push_notification = 27 [json_name = "pushNotification"];</code>
     * @return bool
     */
    public function getPushNotification()
    {
        return $this->push_notification;
    }

    /**
     * Generated from protobuf field <code>bool push_notification = 27 [json_name = "pushNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setPushNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->push_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool email_notification = 28 [json_name = "emailNotification"];</code>
     * @return bool
     */
    public function getEmailNotification()
    {
        return $this->email_notification;
    }

    /**
     * Generated from protobuf field <code>bool email_notification = 28 [json_name = "emailNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setEmailNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->email_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool new_login_notification = 29 [json_name = "newLoginNotification"];</code>
     * @return bool
     */
    public function getNewLoginNotification()
    {
        return $this->new_login_notification;
    }

    /**
     * Generated from protobuf field <code>bool new_login_notification = 29 [json_name = "newLoginNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setNewLoginNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->new_login_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool create_notification = 30 [json_name = "createNotification"];</code>
     * @return bool
     */
    public function getCreateNotification()
    {
        return $this->create_notification;
    }

    /**
     * Generated from protobuf field <code>bool create_notification = 30 [json_name = "createNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setCreateNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->create_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool update_notification = 31 [json_name = "updateNotification"];</code>
     * @return bool
     */
    public function getUpdateNotification()
    {
        return $this->update_notification;
    }

    /**
     * Generated from protobuf field <code>bool update_notification = 31 [json_name = "updateNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setUpdateNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->update_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool delete_notification = 32 [json_name = "deleteNotification"];</code>
     * @return bool
     */
    public function getDeleteNotification()
    {
        return $this->delete_notification;
    }

    /**
     * Generated from protobuf field <code>bool delete_notification = 32 [json_name = "deleteNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setDeleteNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->delete_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool application_notification = 33 [json_name = "applicationNotification"];</code>
     * @return bool
     */
    public function getApplicationNotification()
    {
        return $this->application_notification;
    }

    /**
     * Generated from protobuf field <code>bool application_notification = 33 [json_name = "applicationNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setApplicationNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->application_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool read_notification = 34 [json_name = "readNotification"];</code>
     * @return bool
     */
    public function getReadNotification()
    {
        return $this->read_notification;
    }

    /**
     * Generated from protobuf field <code>bool read_notification = 34 [json_name = "readNotification"];</code>
     * @param bool $var
     * @return $this
     */
    public function setReadNotification($var)
    {
        GPBUtil::checkBool($var);
        $this->read_notification = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string phone_code = 35 [json_name = "phoneCode"];</code>
     * @return string
     */
    public function getPhoneCode()
    {
        return $this->phone_code;
    }

    /**
     * Generated from protobuf field <code>string phone_code = 35 [json_name = "phoneCode"];</code>
     * @param string $var
     * @return $this
     */
    public function setPhoneCode($var)
    {
        GPBUtil::checkString($var, True);
        $this->phone_code = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string optional_address = 36 [json_name = "optionalAddress"];</code>
     * @return string
     */
    public function getOptionalAddress()
    {
        return $this->optional_address;
    }

    /**
     * Generated from protobuf field <code>string optional_address = 36 [json_name = "optionalAddress"];</code>
     * @param string $var
     * @return $this
     */
    public function setOptionalAddress($var)
    {
        GPBUtil::checkString($var, True);
        $this->optional_address = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string image = 37 [json_name = "image"];</code>
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Generated from protobuf field <code>string image = 37 [json_name = "image"];</code>
     * @param string $var
     * @return $this
     */
    public function setImage($var)
    {
        GPBUtil::checkString($var, True);
        $this->image = $var;

        return $this;
    }

}

