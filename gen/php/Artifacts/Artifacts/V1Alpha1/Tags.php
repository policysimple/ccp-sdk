<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/artifacts/v1alpha1/registry_artifacts.proto

namespace Artifacts\Artifacts\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.artifacts.v1alpha1.Tags</code>
 */
class Tags extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string pull_time = 2 [json_name = "pullTime"];</code>
     */
    protected $pull_time = '';
    /**
     * Generated from protobuf field <code>string push_time = 3 [json_name = "pushTime"];</code>
     */
    protected $push_time = '';
    /**
     * Generated from protobuf field <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
     */
    protected $storage_limit = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $pull_time
     *     @type string $push_time
     *     @type int $storage_limit
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Artifacts\V1Alpha1\RegistryArtifacts::initOnce();
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
     * Generated from protobuf field <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @return string
     */
    public function getPullTime()
    {
        return $this->pull_time;
    }

    /**
     * Generated from protobuf field <code>string pull_time = 2 [json_name = "pullTime"];</code>
     * @param string $var
     * @return $this
     */
    public function setPullTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->pull_time = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @return string
     */
    public function getPushTime()
    {
        return $this->push_time;
    }

    /**
     * Generated from protobuf field <code>string push_time = 3 [json_name = "pushTime"];</code>
     * @param string $var
     * @return $this
     */
    public function setPushTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->push_time = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
     * @return int
     */
    public function getStorageLimit()
    {
        return $this->storage_limit;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_limit = 4 [json_name = "storageLimit"];</code>
     * @param int $var
     * @return $this
     */
    public function setStorageLimit($var)
    {
        GPBUtil::checkUint32($var);
        $this->storage_limit = $var;

        return $this;
    }

}

