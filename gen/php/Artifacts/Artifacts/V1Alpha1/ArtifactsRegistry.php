<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/artifacts/v1alpha1/registry_artifacts.proto

namespace Artifacts\Artifacts\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.artifacts.v1alpha1.ArtifactsRegistry</code>
 */
class ArtifactsRegistry extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string digest = 2 [json_name = "digest"];</code>
     */
    protected $digest = '';
    /**
     * Generated from protobuf field <code>string pull_time = 3 [json_name = "pullTime"];</code>
     */
    protected $pull_time = '';
    /**
     * Generated from protobuf field <code>string push_time = 4 [json_name = "pushTime"];</code>
     */
    protected $push_time = '';
    /**
     * Generated from protobuf field <code>uint32 size = 5 [json_name = "size"];</code>
     */
    protected $size = 0;
    /**
     * Generated from protobuf field <code>bool active = 6 [json_name = "active"];</code>
     */
    protected $active = false;
    /**
     * Generated from protobuf field <code>.artifacts.artifacts.v1alpha1.Tags tags = 7 [json_name = "tags"];</code>
     */
    protected $tags = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $digest
     *     @type string $pull_time
     *     @type string $push_time
     *     @type int $size
     *     @type bool $active
     *     @type \Artifacts\Artifacts\V1Alpha1\Tags $tags
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Artifacts\V1Alpha1\RegistryArtifacts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string digest = 2 [json_name = "digest"];</code>
     * @return string
     */
    public function getDigest()
    {
        return $this->digest;
    }

    /**
     * Generated from protobuf field <code>string digest = 2 [json_name = "digest"];</code>
     * @param string $var
     * @return $this
     */
    public function setDigest($var)
    {
        GPBUtil::checkString($var, True);
        $this->digest = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string pull_time = 3 [json_name = "pullTime"];</code>
     * @return string
     */
    public function getPullTime()
    {
        return $this->pull_time;
    }

    /**
     * Generated from protobuf field <code>string pull_time = 3 [json_name = "pullTime"];</code>
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
     * Generated from protobuf field <code>string push_time = 4 [json_name = "pushTime"];</code>
     * @return string
     */
    public function getPushTime()
    {
        return $this->push_time;
    }

    /**
     * Generated from protobuf field <code>string push_time = 4 [json_name = "pushTime"];</code>
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
     * Generated from protobuf field <code>uint32 size = 5 [json_name = "size"];</code>
     * @return int
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Generated from protobuf field <code>uint32 size = 5 [json_name = "size"];</code>
     * @param int $var
     * @return $this
     */
    public function setSize($var)
    {
        GPBUtil::checkUint32($var);
        $this->size = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool active = 6 [json_name = "active"];</code>
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Generated from protobuf field <code>bool active = 6 [json_name = "active"];</code>
     * @param bool $var
     * @return $this
     */
    public function setActive($var)
    {
        GPBUtil::checkBool($var);
        $this->active = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.artifacts.artifacts.v1alpha1.Tags tags = 7 [json_name = "tags"];</code>
     * @return \Artifacts\Artifacts\V1Alpha1\Tags|null
     */
    public function getTags()
    {
        return $this->tags;
    }

    public function hasTags()
    {
        return isset($this->tags);
    }

    public function clearTags()
    {
        unset($this->tags);
    }

    /**
     * Generated from protobuf field <code>.artifacts.artifacts.v1alpha1.Tags tags = 7 [json_name = "tags"];</code>
     * @param \Artifacts\Artifacts\V1Alpha1\Tags $var
     * @return $this
     */
    public function setTags($var)
    {
        GPBUtil::checkMessage($var, \Artifacts\Artifacts\V1Alpha1\Tags::class);
        $this->tags = $var;

        return $this;
    }

}

