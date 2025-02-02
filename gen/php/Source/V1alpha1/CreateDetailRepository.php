<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.CreateDetailRepository</code>
 */
class CreateDetailRepository extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>bool private = 2 [json_name = "private"];</code>
     */
    protected $private = false;
    /**
     * Generated from protobuf field <code>string fullname = 3 [json_name = "fullname"];</code>
     */
    protected $fullname = '';
    /**
     * Generated from protobuf field <code>string description = 4 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>bool fork = 5 [json_name = "fork"];</code>
     */
    protected $fork = false;
    /**
     * Generated from protobuf field <code>string clone_url = 6 [json_name = "cloneUrl"];</code>
     */
    protected $clone_url = '';
    /**
     * Generated from protobuf field <code>string project_id = 7 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string organization_id = 8 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string integration_id = 9 [json_name = "integrationId"];</code>
     */
    protected $integration_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type bool $private
     *     @type string $fullname
     *     @type string $description
     *     @type bool $fork
     *     @type string $clone_url
     *     @type string $project_id
     *     @type string $organization_id
     *     @type string $integration_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
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
     * Generated from protobuf field <code>bool private = 2 [json_name = "private"];</code>
     * @return bool
     */
    public function getPrivate()
    {
        return $this->private;
    }

    /**
     * Generated from protobuf field <code>bool private = 2 [json_name = "private"];</code>
     * @param bool $var
     * @return $this
     */
    public function setPrivate($var)
    {
        GPBUtil::checkBool($var);
        $this->private = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string fullname = 3 [json_name = "fullname"];</code>
     * @return string
     */
    public function getFullname()
    {
        return $this->fullname;
    }

    /**
     * Generated from protobuf field <code>string fullname = 3 [json_name = "fullname"];</code>
     * @param string $var
     * @return $this
     */
    public function setFullname($var)
    {
        GPBUtil::checkString($var, True);
        $this->fullname = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 4 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 4 [json_name = "description"];</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool fork = 5 [json_name = "fork"];</code>
     * @return bool
     */
    public function getFork()
    {
        return $this->fork;
    }

    /**
     * Generated from protobuf field <code>bool fork = 5 [json_name = "fork"];</code>
     * @param bool $var
     * @return $this
     */
    public function setFork($var)
    {
        GPBUtil::checkBool($var);
        $this->fork = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string clone_url = 6 [json_name = "cloneUrl"];</code>
     * @return string
     */
    public function getCloneUrl()
    {
        return $this->clone_url;
    }

    /**
     * Generated from protobuf field <code>string clone_url = 6 [json_name = "cloneUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setCloneUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->clone_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string project_id = 7 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 7 [json_name = "projectId"];</code>
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
     * Generated from protobuf field <code>string organization_id = 8 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 8 [json_name = "organizationId"];</code>
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
     * Generated from protobuf field <code>string integration_id = 9 [json_name = "integrationId"];</code>
     * @return string
     */
    public function getIntegrationId()
    {
        return $this->integration_id;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 9 [json_name = "integrationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setIntegrationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->integration_id = $var;

        return $this;
    }

}

