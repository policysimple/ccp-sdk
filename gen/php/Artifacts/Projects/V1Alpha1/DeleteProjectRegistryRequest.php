<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/projects/v1alpha1/registry_projects_api.proto

namespace Artifacts\Projects\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.projects.v1alpha1.DeleteProjectRegistryRequest</code>
 */
class DeleteProjectRegistryRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string project_registry_id = 1 [json_name = "projectRegistryId"];</code>
     */
    protected $project_registry_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $project_registry_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Projects\V1Alpha1\RegistryProjectsApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string project_registry_id = 1 [json_name = "projectRegistryId"];</code>
     * @return string
     */
    public function getProjectRegistryId()
    {
        return $this->project_registry_id;
    }

    /**
     * Generated from protobuf field <code>string project_registry_id = 1 [json_name = "projectRegistryId"];</code>
     * @param string $var
     * @return $this
     */
    public function setProjectRegistryId($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_registry_id = $var;

        return $this;
    }

}

