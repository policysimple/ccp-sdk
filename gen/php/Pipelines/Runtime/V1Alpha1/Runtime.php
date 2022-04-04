<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Runtime ...
 *
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.Runtime</code>
 */
class Runtime extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1 [json_name = "id"];</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     */
    protected $namespace = '';
    /**
     * Generated from protobuf field <code>string instance_type = 4 [json_name = "instanceType"];</code>
     */
    protected $instance_type = '';
    /**
     * Generated from protobuf field <code>uint32 organization_id = 5 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>uint32 project_id = 6 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string application_id = 7 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';
    /**
     * Generated from protobuf field <code>string workspace_id = 8 [json_name = "workspaceId"];</code>
     */
    protected $workspace_id = '';
    /**
     * Generated from protobuf field <code>string environment_id = 9 [json_name = "environmentId"];</code>
     */
    protected $environment_id = '';
    /**
     * Generated from protobuf field <code>string scaler = 10 [json_name = "scaler"];</code>
     */
    protected $scaler = '';
    /**
     * Generated from protobuf field <code>map<string, string> integration = 11 [json_name = "integration"];</code>
     */
    private $integration;
    /**
     * Generated from protobuf field <code>map<string, string> environment_variables = 12 [json_name = "environmentVariables"];</code>
     */
    private $environment_variables;
    /**
     * Generated from protobuf field <code>map<string, string> commands = 13 [json_name = "commands"];</code>
     */
    private $commands;
    /**
     * Generated from protobuf field <code>map<string, string> secrets = 14 [json_name = "secrets"];</code>
     */
    private $secrets;
    /**
     * Generated from protobuf field <code>map<string, string> extra_args = 15 [json_name = "extraArgs"];</code>
     */
    private $extra_args;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type string $namespace
     *     @type string $instance_type
     *     @type int $organization_id
     *     @type int $project_id
     *     @type string $application_id
     *     @type string $workspace_id
     *     @type string $environment_id
     *     @type string $scaler
     *     @type array|\Google\Protobuf\Internal\MapField $integration
     *     @type array|\Google\Protobuf\Internal\MapField $environment_variables
     *     @type array|\Google\Protobuf\Internal\MapField $commands
     *     @type array|\Google\Protobuf\Internal\MapField $secrets
     *     @type array|\Google\Protobuf\Internal\MapField $extra_args
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\Runtime::initOnce();
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
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 2 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * Generated from protobuf field <code>string namespace = 3 [json_name = "namespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->namespace = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string instance_type = 4 [json_name = "instanceType"];</code>
     * @return string
     */
    public function getInstanceType()
    {
        return $this->instance_type;
    }

    /**
     * Generated from protobuf field <code>string instance_type = 4 [json_name = "instanceType"];</code>
     * @param string $var
     * @return $this
     */
    public function setInstanceType($var)
    {
        GPBUtil::checkString($var, True);
        $this->instance_type = $var;

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

    /**
     * Generated from protobuf field <code>uint32 project_id = 6 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 6 [json_name = "projectId"];</code>
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
     * Generated from protobuf field <code>string application_id = 7 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 7 [json_name = "applicationId"];</code>
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
     * Generated from protobuf field <code>string workspace_id = 8 [json_name = "workspaceId"];</code>
     * @return string
     */
    public function getWorkspaceId()
    {
        return $this->workspace_id;
    }

    /**
     * Generated from protobuf field <code>string workspace_id = 8 [json_name = "workspaceId"];</code>
     * @param string $var
     * @return $this
     */
    public function setWorkspaceId($var)
    {
        GPBUtil::checkString($var, True);
        $this->workspace_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 9 [json_name = "environmentId"];</code>
     * @return string
     */
    public function getEnvironmentId()
    {
        return $this->environment_id;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 9 [json_name = "environmentId"];</code>
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
     * Generated from protobuf field <code>string scaler = 10 [json_name = "scaler"];</code>
     * @return string
     */
    public function getScaler()
    {
        return $this->scaler;
    }

    /**
     * Generated from protobuf field <code>string scaler = 10 [json_name = "scaler"];</code>
     * @param string $var
     * @return $this
     */
    public function setScaler($var)
    {
        GPBUtil::checkString($var, True);
        $this->scaler = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> integration = 11 [json_name = "integration"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getIntegration()
    {
        return $this->integration;
    }

    /**
     * Generated from protobuf field <code>map<string, string> integration = 11 [json_name = "integration"];</code>
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
     * Generated from protobuf field <code>map<string, string> environment_variables = 12 [json_name = "environmentVariables"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getEnvironmentVariables()
    {
        return $this->environment_variables;
    }

    /**
     * Generated from protobuf field <code>map<string, string> environment_variables = 12 [json_name = "environmentVariables"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setEnvironmentVariables($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->environment_variables = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> commands = 13 [json_name = "commands"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getCommands()
    {
        return $this->commands;
    }

    /**
     * Generated from protobuf field <code>map<string, string> commands = 13 [json_name = "commands"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setCommands($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->commands = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> secrets = 14 [json_name = "secrets"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getSecrets()
    {
        return $this->secrets;
    }

    /**
     * Generated from protobuf field <code>map<string, string> secrets = 14 [json_name = "secrets"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setSecrets($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->secrets = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> extra_args = 15 [json_name = "extraArgs"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getExtraArgs()
    {
        return $this->extra_args;
    }

    /**
     * Generated from protobuf field <code>map<string, string> extra_args = 15 [json_name = "extraArgs"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setExtraArgs($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->extra_args = $arr;

        return $this;
    }

}

