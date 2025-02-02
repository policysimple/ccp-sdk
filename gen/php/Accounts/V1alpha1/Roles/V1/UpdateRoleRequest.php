<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/roles/roles.proto

namespace Accounts\V1alpha1\Roles\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.roles.v1.UpdateRoleRequest</code>
 */
class UpdateRoleRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string rol_id = 3 [json_name = "rolId"];</code>
     */
    protected $rol_id = '';
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.roles.v1.CreateRoleRequest rol = 2 [json_name = "rol"];</code>
     */
    protected $rol = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $rol_id
     *     @type \Accounts\V1alpha1\Roles\V1\CreateRoleRequest $rol
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Roles\Roles::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string rol_id = 3 [json_name = "rolId"];</code>
     * @return string
     */
    public function getRolId()
    {
        return $this->rol_id;
    }

    /**
     * Generated from protobuf field <code>string rol_id = 3 [json_name = "rolId"];</code>
     * @param string $var
     * @return $this
     */
    public function setRolId($var)
    {
        GPBUtil::checkString($var, True);
        $this->rol_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.roles.v1.CreateRoleRequest rol = 2 [json_name = "rol"];</code>
     * @return \Accounts\V1alpha1\Roles\V1\CreateRoleRequest|null
     */
    public function getRol()
    {
        return $this->rol;
    }

    public function hasRol()
    {
        return isset($this->rol);
    }

    public function clearRol()
    {
        unset($this->rol);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.roles.v1.CreateRoleRequest rol = 2 [json_name = "rol"];</code>
     * @param \Accounts\V1alpha1\Roles\V1\CreateRoleRequest $var
     * @return $this
     */
    public function setRol($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Roles\V1\CreateRoleRequest::class);
        $this->rol = $var;

        return $this;
    }

}

