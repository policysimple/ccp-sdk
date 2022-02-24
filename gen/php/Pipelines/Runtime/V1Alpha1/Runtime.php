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
     * Generated from protobuf field <code>uint32 project_id = 4 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string application_id = 5 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';
    /**
     * Generated from protobuf field <code>string workspace_id = 6 [json_name = "workspaceId"];</code>
     */
    protected $workspace_id = '';
    /**
     * Generated from protobuf field <code>map<string, string> integration = 7 [json_name = "integration"];</code>
     */
    private $integration;
    /**
     * Generated from protobuf field <code>map<string, string> env_variables = 8 [json_name = "envVariables"];</code>
     */
    private $env_variables;
    /**
     * Generated from protobuf field <code>map<string, string> commands = 9 [json_name = "commands"];</code>
     */
    private $commands;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type string $namespace
     *     @type int $project_id
     *     @type string $application_id
     *     @type string $workspace_id
     *     @type array|\Google\Protobuf\Internal\MapField $integration
     *     @type array|\Google\Protobuf\Internal\MapField $env_variables
     *     @type array|\Google\Protobuf\Internal\MapField $commands
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
     * Generated from protobuf field <code>string application_id = 5 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 5 [json_name = "applicationId"];</code>
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
     * Generated from protobuf field <code>string workspace_id = 6 [json_name = "workspaceId"];</code>
     * @return string
     */
    public function getWorkspaceId()
    {
        return $this->workspace_id;
    }

    /**
     * Generated from protobuf field <code>string workspace_id = 6 [json_name = "workspaceId"];</code>
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
     * Generated from protobuf field <code>map<string, string> integration = 7 [json_name = "integration"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getIntegration()
    {
        return $this->integration;
    }

    /**
     * Generated from protobuf field <code>map<string, string> integration = 7 [json_name = "integration"];</code>
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
     * Generated from protobuf field <code>map<string, string> env_variables = 8 [json_name = "envVariables"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getEnvVariables()
    {
        return $this->env_variables;
    }

    /**
     * Generated from protobuf field <code>map<string, string> env_variables = 8 [json_name = "envVariables"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setEnvVariables($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->env_variables = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> commands = 9 [json_name = "commands"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getCommands()
    {
        return $this->commands;
    }

    /**
     * Generated from protobuf field <code>map<string, string> commands = 9 [json_name = "commands"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setCommands($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->commands = $arr;

        return $this;
    }

}

