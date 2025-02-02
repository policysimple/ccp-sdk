<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/users/v1alpha1/registry_users.proto

namespace Artifacts\Users\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.users.v1alpha1.PermissionsHarbor</code>
 */
class PermissionsHarbor extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .artifacts.users.v1alpha1.AccessHarbor access = 1 [json_name = "access"];</code>
     */
    private $access;
    /**
     * Generated from protobuf field <code>string kind = 2 [json_name = "kind"];</code>
     */
    protected $kind = '';
    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     */
    protected $namespace = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Artifacts\Users\V1Alpha1\AccessHarbor[]|\Google\Protobuf\Internal\RepeatedField $access
     *     @type string $kind
     *     @type string $namespace
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Users\V1Alpha1\RegistryUsers::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .artifacts.users.v1alpha1.AccessHarbor access = 1 [json_name = "access"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAccess()
    {
        return $this->access;
    }

    /**
     * Generated from protobuf field <code>repeated .artifacts.users.v1alpha1.AccessHarbor access = 1 [json_name = "access"];</code>
     * @param \Artifacts\Users\V1Alpha1\AccessHarbor[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAccess($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Artifacts\Users\V1Alpha1\AccessHarbor::class);
        $this->access = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string kind = 2 [json_name = "kind"];</code>
     * @return string
     */
    public function getKind()
    {
        return $this->kind;
    }

    /**
     * Generated from protobuf field <code>string kind = 2 [json_name = "kind"];</code>
     * @param string $var
     * @return $this
     */
    public function setKind($var)
    {
        GPBUtil::checkString($var, True);
        $this->kind = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->namespace = $var;

        return $this;
    }

}

