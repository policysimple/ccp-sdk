<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.GetOneRoleRequest</code>
 */
class GetOneRoleRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 rol_id = 1 [json_name = "rolId"];</code>
     */
    protected $rol_id = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $rol_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 rol_id = 1 [json_name = "rolId"];</code>
     * @return int
     */
    public function getRolId()
    {
        return $this->rol_id;
    }

    /**
     * Generated from protobuf field <code>uint32 rol_id = 1 [json_name = "rolId"];</code>
     * @param int $var
     * @return $this
     */
    public function setRolId($var)
    {
        GPBUtil::checkUint32($var);
        $this->rol_id = $var;

        return $this;
    }

}

