<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/users/v1alpha1/registry_users_api.proto

namespace Artifacts\Users\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.users.v1alpha1.DeleteUserRegistryResponse</code>
 */
class DeleteUserRegistryResponse extends \Google\Protobuf\Internal\Message
{
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
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Users\V1Alpha1\RegistryUsersApi::initOnce();
        parent::__construct($data);
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

