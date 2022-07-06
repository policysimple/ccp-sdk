<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/projects/v1alpha1/registry_projects_api.proto

namespace Artifacts\Projects\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.projects.v1alpha1.CreateProjectRegistryRequest</code>
 */
class CreateProjectRegistryRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     */
    protected $project_registry = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Artifacts\Projects\V1Alpha1\ProjectsRegistry $project_registry
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Projects\V1Alpha1\RegistryProjectsApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     * @return \Artifacts\Projects\V1Alpha1\ProjectsRegistry|null
     */
    public function getProjectRegistry()
    {
        return $this->project_registry;
    }

    public function hasProjectRegistry()
    {
        return isset($this->project_registry);
    }

    public function clearProjectRegistry()
    {
        unset($this->project_registry);
    }

    /**
     * Generated from protobuf field <code>.artifacts.projects.v1alpha1.ProjectsRegistry project_registry = 1 [json_name = "projectRegistry"];</code>
     * @param \Artifacts\Projects\V1Alpha1\ProjectsRegistry $var
     * @return $this
     */
    public function setProjectRegistry($var)
    {
        GPBUtil::checkMessage($var, \Artifacts\Projects\V1Alpha1\ProjectsRegistry::class);
        $this->project_registry = $var;

        return $this;
    }

}

