<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton.proto

namespace Pipelines\Tekton\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Pipeline ...
 *
 * Generated from protobuf message <code>pipelines.tekton.v1alpha1.Pipeline</code>
 */
class Pipeline extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>int32 traffic_type = 3 [json_name = "trafficType"];</code>
     */
    protected $traffic_type = 0;
    /**
     * Generated from protobuf field <code>string organization_id = 4 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string project_id = 5 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string name_project = 6 [json_name = "nameProject"];</code>
     */
    protected $name_project = '';
    /**
     * Generated from protobuf field <code>string environment_id = 7 [json_name = "environmentId"];</code>
     */
    protected $environment_id = '';
    /**
     * Generated from protobuf field <code>string application_id = 8 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';
    /**
     * Generated from protobuf field <code>string runtime_id = 9 [json_name = "runtimeId"];</code>
     */
    protected $runtime_id = '';
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 10 [json_name = "params"];</code>
     */
    private $params;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 11 [json_name = "tasks"];</code>
     */
    private $tasks;
    /**
     * Generated from protobuf field <code>string status_type = 12 [json_name = "statusType"];</code>
     */
    protected $status_type = '';
    /**
     * Generated from protobuf field <code>map<string, string> integration = 13 [json_name = "integration"];</code>
     */
    private $integration;
    /**
     * Generated from protobuf field <code>map<string, string> environment_variables = 14 [json_name = "environmentVariables"];</code>
     */
    private $environment_variables;
    /**
     * Generated from protobuf field <code>map<string, string> commands = 15 [json_name = "commands"];</code>
     */
    private $commands;
    /**
     * Generated from protobuf field <code>map<string, string> secrets = 16 [json_name = "secrets"];</code>
     */
    private $secrets;
    /**
     * Generated from protobuf field <code>map<string, string> extra_args = 17 [json_name = "extraArgs"];</code>
     */
    private $extra_args;
    /**
     * Generated from protobuf field <code>map<string, string> instance_type = 18 [json_name = "instanceType"];</code>
     */
    private $instance_type;
    /**
     * Generated from protobuf field <code>bool is_default = 19 [json_name = "isDefault"];</code>
     */
    protected $is_default = false;
    /**
     * Generated from protobuf field <code>bool active = 20 [json_name = "active"];</code>
     */
    protected $active = false;
    /**
     * Generated from protobuf field <code>bool custom_pipeline = 21 [json_name = "customPipeline"];</code>
     */
    protected $custom_pipeline = false;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 22 [json_name = "beforeDeployTasks"];</code>
     */
    private $before_deploy_tasks;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 23 [json_name = "afterDeployTasks"];</code>
     */
    private $after_deploy_tasks;
    /**
     * Generated from protobuf field <code>bool is_not_exist_dockerfile = 24 [json_name = "isNotExistDockerfile"];</code>
     */
    protected $is_not_exist_dockerfile = false;
    /**
     * Generated from protobuf field <code>string host_url = 25 [json_name = "hostUrl"];</code>
     */
    protected $host_url = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type int $traffic_type
     *     @type string $organization_id
     *     @type string $project_id
     *     @type string $name_project
     *     @type string $environment_id
     *     @type string $application_id
     *     @type string $runtime_id
     *     @type \Pipelines\Tekton\V1Alpha1\Params[]|\Google\Protobuf\Internal\RepeatedField $params
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $tasks
     *     @type string $status_type
     *     @type array|\Google\Protobuf\Internal\MapField $integration
     *     @type array|\Google\Protobuf\Internal\MapField $environment_variables
     *     @type array|\Google\Protobuf\Internal\MapField $commands
     *     @type array|\Google\Protobuf\Internal\MapField $secrets
     *     @type array|\Google\Protobuf\Internal\MapField $extra_args
     *     @type array|\Google\Protobuf\Internal\MapField $instance_type
     *     @type bool $is_default
     *     @type bool $active
     *     @type bool $custom_pipeline
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $before_deploy_tasks
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $after_deploy_tasks
     *     @type bool $is_not_exist_dockerfile
     *     @type string $host_url
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
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
     * Generated from protobuf field <code>int32 traffic_type = 3 [json_name = "trafficType"];</code>
     * @return int
     */
    public function getTrafficType()
    {
        return $this->traffic_type;
    }

    /**
     * Generated from protobuf field <code>int32 traffic_type = 3 [json_name = "trafficType"];</code>
     * @param int $var
     * @return $this
     */
    public function setTrafficType($var)
    {
        GPBUtil::checkInt32($var);
        $this->traffic_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 4 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 4 [json_name = "organizationId"];</code>
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
     * Generated from protobuf field <code>string project_id = 5 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 5 [json_name = "projectId"];</code>
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
     * Generated from protobuf field <code>string name_project = 6 [json_name = "nameProject"];</code>
     * @return string
     */
    public function getNameProject()
    {
        return $this->name_project;
    }

    /**
     * Generated from protobuf field <code>string name_project = 6 [json_name = "nameProject"];</code>
     * @param string $var
     * @return $this
     */
    public function setNameProject($var)
    {
        GPBUtil::checkString($var, True);
        $this->name_project = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 7 [json_name = "environmentId"];</code>
     * @return string
     */
    public function getEnvironmentId()
    {
        return $this->environment_id;
    }

    /**
     * Generated from protobuf field <code>string environment_id = 7 [json_name = "environmentId"];</code>
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
     * Generated from protobuf field <code>string application_id = 8 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 8 [json_name = "applicationId"];</code>
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
     * Generated from protobuf field <code>string runtime_id = 9 [json_name = "runtimeId"];</code>
     * @return string
     */
    public function getRuntimeId()
    {
        return $this->runtime_id;
    }

    /**
     * Generated from protobuf field <code>string runtime_id = 9 [json_name = "runtimeId"];</code>
     * @param string $var
     * @return $this
     */
    public function setRuntimeId($var)
    {
        GPBUtil::checkString($var, True);
        $this->runtime_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 10 [json_name = "params"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 10 [json_name = "params"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Params[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setParams($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Params::class);
        $this->params = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 11 [json_name = "tasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 11 [json_name = "tasks"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTasks($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Task::class);
        $this->tasks = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status_type = 12 [json_name = "statusType"];</code>
     * @return string
     */
    public function getStatusType()
    {
        return $this->status_type;
    }

    /**
     * Generated from protobuf field <code>string status_type = 12 [json_name = "statusType"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatusType($var)
    {
        GPBUtil::checkString($var, True);
        $this->status_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> integration = 13 [json_name = "integration"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getIntegration()
    {
        return $this->integration;
    }

    /**
     * Generated from protobuf field <code>map<string, string> integration = 13 [json_name = "integration"];</code>
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
     * Generated from protobuf field <code>map<string, string> environment_variables = 14 [json_name = "environmentVariables"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getEnvironmentVariables()
    {
        return $this->environment_variables;
    }

    /**
     * Generated from protobuf field <code>map<string, string> environment_variables = 14 [json_name = "environmentVariables"];</code>
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
     * Generated from protobuf field <code>map<string, string> commands = 15 [json_name = "commands"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getCommands()
    {
        return $this->commands;
    }

    /**
     * Generated from protobuf field <code>map<string, string> commands = 15 [json_name = "commands"];</code>
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
     * Generated from protobuf field <code>map<string, string> secrets = 16 [json_name = "secrets"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getSecrets()
    {
        return $this->secrets;
    }

    /**
     * Generated from protobuf field <code>map<string, string> secrets = 16 [json_name = "secrets"];</code>
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
     * Generated from protobuf field <code>map<string, string> extra_args = 17 [json_name = "extraArgs"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getExtraArgs()
    {
        return $this->extra_args;
    }

    /**
     * Generated from protobuf field <code>map<string, string> extra_args = 17 [json_name = "extraArgs"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setExtraArgs($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->extra_args = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> instance_type = 18 [json_name = "instanceType"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getInstanceType()
    {
        return $this->instance_type;
    }

    /**
     * Generated from protobuf field <code>map<string, string> instance_type = 18 [json_name = "instanceType"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setInstanceType($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->instance_type = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_default = 19 [json_name = "isDefault"];</code>
     * @return bool
     */
    public function getIsDefault()
    {
        return $this->is_default;
    }

    /**
     * Generated from protobuf field <code>bool is_default = 19 [json_name = "isDefault"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsDefault($var)
    {
        GPBUtil::checkBool($var);
        $this->is_default = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool active = 20 [json_name = "active"];</code>
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Generated from protobuf field <code>bool active = 20 [json_name = "active"];</code>
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
     * Generated from protobuf field <code>bool custom_pipeline = 21 [json_name = "customPipeline"];</code>
     * @return bool
     */
    public function getCustomPipeline()
    {
        return $this->custom_pipeline;
    }

    /**
     * Generated from protobuf field <code>bool custom_pipeline = 21 [json_name = "customPipeline"];</code>
     * @param bool $var
     * @return $this
     */
    public function setCustomPipeline($var)
    {
        GPBUtil::checkBool($var);
        $this->custom_pipeline = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 22 [json_name = "beforeDeployTasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getBeforeDeployTasks()
    {
        return $this->before_deploy_tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 22 [json_name = "beforeDeployTasks"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setBeforeDeployTasks($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Task::class);
        $this->before_deploy_tasks = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 23 [json_name = "afterDeployTasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAfterDeployTasks()
    {
        return $this->after_deploy_tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 23 [json_name = "afterDeployTasks"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAfterDeployTasks($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Task::class);
        $this->after_deploy_tasks = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_not_exist_dockerfile = 24 [json_name = "isNotExistDockerfile"];</code>
     * @return bool
     */
    public function getIsNotExistDockerfile()
    {
        return $this->is_not_exist_dockerfile;
    }

    /**
     * Generated from protobuf field <code>bool is_not_exist_dockerfile = 24 [json_name = "isNotExistDockerfile"];</code>
     * @param bool $var
     * @return $this
     */
    public function setIsNotExistDockerfile($var)
    {
        GPBUtil::checkBool($var);
        $this->is_not_exist_dockerfile = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string host_url = 25 [json_name = "hostUrl"];</code>
     * @return string
     */
    public function getHostUrl()
    {
        return $this->host_url;
    }

    /**
     * Generated from protobuf field <code>string host_url = 25 [json_name = "hostUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setHostUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->host_url = $var;

        return $this;
    }

}

