<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application.proto

namespace Application\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>application.v1alpha1.Env</code>
 */
class Env extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string key = 2 [json_name = "key"];</code>
     */
    protected $key = '';
    /**
     * Generated from protobuf field <code>bool encrypted = 3 [json_name = "encrypted"];</code>
     */
    protected $encrypted = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $key
     *     @type bool $encrypted
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Application\V1Alpha1\Application::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>string key = 2 [json_name = "key"];</code>
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Generated from protobuf field <code>string key = 2 [json_name = "key"];</code>
     * @param string $var
     * @return $this
     */
    public function setKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool encrypted = 3 [json_name = "encrypted"];</code>
     * @return bool
     */
    public function getEncrypted()
    {
        return $this->encrypted;
    }

    /**
     * Generated from protobuf field <code>bool encrypted = 3 [json_name = "encrypted"];</code>
     * @param bool $var
     * @return $this
     */
    public function setEncrypted($var)
    {
        GPBUtil::checkBool($var);
        $this->encrypted = $var;

        return $this;
    }

}

