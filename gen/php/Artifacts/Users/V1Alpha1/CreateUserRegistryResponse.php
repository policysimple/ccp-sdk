<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/users/v1alpha1/registry_users_api.proto

namespace Artifacts\Users\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.users.v1alpha1.CreateUserRegistryResponse</code>
 */
class CreateUserRegistryResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     */
    protected $user_registry = null;
    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     */
    protected $status = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Artifacts\Users\V1Alpha1\UsersRegistry $user_registry
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Users\V1Alpha1\RegistryUsersApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     * @return \Artifacts\Users\V1Alpha1\UsersRegistry|null
     */
    public function getUserRegistry()
    {
        return $this->user_registry;
    }

    public function hasUserRegistry()
    {
        return isset($this->user_registry);
    }

    public function clearUserRegistry()
    {
        unset($this->user_registry);
    }

    /**
     * Generated from protobuf field <code>.artifacts.users.v1alpha1.UsersRegistry user_registry = 1 [json_name = "userRegistry"];</code>
     * @param \Artifacts\Users\V1Alpha1\UsersRegistry $var
     * @return $this
     */
    public function setUserRegistry($var)
    {
        GPBUtil::checkMessage($var, \Artifacts\Users\V1Alpha1\UsersRegistry::class);
        $this->user_registry = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

}

