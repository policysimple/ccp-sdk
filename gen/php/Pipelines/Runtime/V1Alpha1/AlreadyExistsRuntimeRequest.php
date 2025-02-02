<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime_api.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.AlreadyExistsRuntimeRequest</code>
 */
class AlreadyExistsRuntimeRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string integration_id = 1 [json_name = "integrationId"];</code>
     */
    protected $integration_id = '';
    /**
     * Generated from protobuf field <code>map<string, string> integration = 2 [json_name = "integration"];</code>
     */
    private $integration;
    /**
     * Generated from protobuf field <code>string environment_id = 3 [json_name = "environmentId"];</code>
     */
    protected $environment_id = '';
    /**
     * Generated from protobuf field <code>string project_id = 4 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string organization_id = 5 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string user_id = 6 [json_name = "userId"];</code>
     */
    protected $user_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $integration_id
     *     @type array|\Google\Protobuf\Internal\MapField $integration
     *     @type string $environment_id
     *     @type string $project_id
     *     @type string $organization_id
     *     @type string $user_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\RuntimeApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string integration_id = 1 [json_name = "integrationId"];</code>
     * @return string
     */
    public function getIntegrationId()
    {
        return $this->integration_id;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 1 [json_name = "integrationId"];</code>
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
     * Generated from protobuf field <code>map<string, string> integration = 2 [json_name = "integration"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getIntegration()
    {
        return $this->integration;
    }

    /**
     * Generated from protobuf field <code>map<string, string> integration = 2 [json_name = "integration"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setIntegration($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->integration = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 3 [json_name = "environmentId"];</code>
     * @return string
     */
    public function getEnvironmentId()
    {
        return $this->environment_id;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 3 [json_name = "environmentId"];</code>
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
     * Generated from protobuf field <code>string project_id = 4 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 4 [json_name = "projectId"];</code>
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
     * Generated from protobuf field <code>string organization_id = 5 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 5 [json_name = "organizationId"];</code>
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
     * Generated from protobuf field <code>string user_id = 6 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 6 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

}

