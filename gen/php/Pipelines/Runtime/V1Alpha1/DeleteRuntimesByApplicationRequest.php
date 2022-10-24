<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime_api.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.DeleteRuntimesByApplicationRequest</code>
 */
class DeleteRuntimesByApplicationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string application_id = 1 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';
    /**
     * Generated from protobuf field <code>string name_application = 2 [json_name = "nameApplication"];</code>
     */
    protected $name_application = '';
    /**
     * Generated from protobuf field <code>string integration_id = 3 [json_name = "integrationId"];</code>
     */
    protected $integration_id = '';
    /**
     * Generated from protobuf field <code>uint32 project_id = 4 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $application_id
     *     @type string $name_application
     *     @type string $integration_id
     *     @type int $project_id
     *     @type int $organization_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\RuntimeApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string application_id = 1 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 1 [json_name = "applicationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setApplicationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->application_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name_application = 2 [json_name = "nameApplication"];</code>
     * @return string
     */
    public function getNameApplication()
    {
        return $this->name_application;
    }

    /**
     * Generated from protobuf field <code>string name_application = 2 [json_name = "nameApplication"];</code>
     * @param string $var
     * @return $this
     */
    public function setNameApplication($var)
    {
        GPBUtil::checkString($var, True);
        $this->name_application = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 3 [json_name = "integrationId"];</code>
     * @return string
     */
    public function getIntegrationId()
    {
        return $this->integration_id;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 3 [json_name = "integrationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setIntegrationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->integration_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 4 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 4 [json_name = "projectId"];</code>
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
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

        return $this;
    }

}

