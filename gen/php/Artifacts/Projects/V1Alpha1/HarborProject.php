<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/projects/v1alpha1/registry_projects.proto

namespace Artifacts\Projects\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.projects.v1alpha1.HarborProject</code>
 */
class HarborProject extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string project_name = 1 [json_name = "projectName"];</code>
     */
    protected $project_name = '';
    /**
     * Generated from protobuf field <code>uint32 registry_id = 2 [json_name = "registryId"];</code>
     */
    protected $registry_id = 0;
    /**
     * Generated from protobuf field <code>bool public = 3 [json_name = "public"];</code>
     */
    protected $public = false;
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
     *     @type string $project_name
     *     @type int $registry_id
     *     @type bool $public
     *     @type int $storage_limit
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Projects\V1Alpha1\RegistryProjects::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string project_name = 1 [json_name = "projectName"];</code>
     * @return string
     */
    public function getProjectName()
    {
        return $this->project_name;
    }

    /**
     * Generated from protobuf field <code>string project_name = 1 [json_name = "projectName"];</code>
     * @param string $var
     * @return $this
     */
    public function setProjectName($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 registry_id = 2 [json_name = "registryId"];</code>
     * @return int
     */
    public function getRegistryId()
    {
        return $this->registry_id;
    }

    /**
     * Generated from protobuf field <code>uint32 registry_id = 2 [json_name = "registryId"];</code>
     * @param int $var
     * @return $this
     */
    public function setRegistryId($var)
    {
        GPBUtil::checkUint32($var);
        $this->registry_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool public = 3 [json_name = "public"];</code>
     * @return bool
     */
    public function getPublic()
    {
        return $this->public;
    }

    /**
     * Generated from protobuf field <code>bool public = 3 [json_name = "public"];</code>
     * @param bool $var
     * @return $this
     */
    public function setPublic($var)
    {
        GPBUtil::checkBool($var);
        $this->public = $var;

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

