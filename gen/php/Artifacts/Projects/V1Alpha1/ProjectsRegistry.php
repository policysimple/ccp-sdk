<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/projects/v1alpha1/registry_projects.proto

namespace Artifacts\Projects\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.projects.v1alpha1.ProjectsRegistry</code>
 */
class ProjectsRegistry extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string environment_id = 4 [json_name = "environmentId"];</code>
     */
    protected $environment_id = '';
    /**
     * Generated from protobuf field <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     */
    protected $environment_internal_name = '';
    /**
     * Generated from protobuf field <code>bool active = 6 [json_name = "active"];</code>
     */
    protected $active = false;
    /**
     * Generated from protobuf field <code>.artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];</code>
     */
    protected $harbor = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type int $organization_id
     *     @type int $project_id
     *     @type string $environment_id
     *     @type string $environment_internal_name
     *     @type bool $active
     *     @type \Artifacts\Projects\V1Alpha1\HarborProject $harbor
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Projects\V1Alpha1\RegistryProjects::initOnce();
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
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkUint32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @return string
     */
    public function getEnvironmentId()
    {
        return $this->environment_id;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 4 [json_name = "environmentId"];</code>
     * @param string $var
     * @return $this
     */
    public function setEnvironmentId($var)
    {
        GPBUtil::checkString($var, True);
        $this->environment_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @return string
     */
    public function getEnvironmentInternalName()
    {
        return $this->environment_internal_name;
    }

    /**
     * Generated from protobuf field <code>string environment_internal_name = 5 [json_name = "environmentInternalName"];</code>
     * @param string $var
     * @return $this
     */
    public function setEnvironmentInternalName($var)
    {
        GPBUtil::checkString($var, True);
        $this->environment_internal_name = $var;

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
     * Generated from protobuf field <code>.artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];</code>
     * @return \Artifacts\Projects\V1Alpha1\HarborProject|null
     */
    public function getHarbor()
    {
        return $this->harbor;
    }

    public function hasHarbor()
    {
        return isset($this->harbor);
    }

    public function clearHarbor()
    {
        unset($this->harbor);
    }

    /**
     * Generated from protobuf field <code>.artifacts.projects.v1alpha1.HarborProject harbor = 7 [json_name = "harbor"];</code>
     * @param \Artifacts\Projects\V1Alpha1\HarborProject $var
     * @return $this
     */
    public function setHarbor($var)
    {
        GPBUtil::checkMessage($var, \Artifacts\Projects\V1Alpha1\HarborProject::class);
        $this->harbor = $var;

        return $this;
    }

}

