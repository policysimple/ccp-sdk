<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment.proto

namespace Pipelines\Environment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Environment ...
 *
 * Generated from protobuf message <code>pipelines.environment.v1alpha1.Environment</code>
 */
class Environment extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string organization_id = 2 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string project_id = 3 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string name = 4 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>bool active = 5 [json_name = "active"];</code>
     */
    protected $active = false;
    /**
     * Generated from protobuf field <code>string status_type = 6 [json_name = "statusType"];</code>
     */
    protected $status_type = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $organization_id
     *     @type string $project_id
     *     @type string $name
     *     @type bool $active
     *     @type string $status_type
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Environment\V1Alpha1\Environment::initOnce();
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
     * Generated from protobuf field <code>string organization_id = 2 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 2 [json_name = "organizationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string project_id = 3 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 3 [json_name = "projectId"];</code>
     * @param string $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 4 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 4 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>bool active = 5 [json_name = "active"];</code>
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Generated from protobuf field <code>bool active = 5 [json_name = "active"];</code>
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
     * Generated from protobuf field <code>string status_type = 6 [json_name = "statusType"];</code>
     * @return string
     */
    public function getStatusType()
    {
        return $this->status_type;
    }

    /**
     * Generated from protobuf field <code>string status_type = 6 [json_name = "statusType"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatusType($var)
    {
        GPBUtil::checkString($var, True);
        $this->status_type = $var;

        return $this;
    }

}

