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
     * Generated from protobuf field <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
     */
    private $instance_types;
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
     * Generated from protobuf field <code>string pod_status = 11 [json_name = "podStatus"];</code>
     */
    protected $pod_status = '';
    /**
     * Generated from protobuf field <code>string pod_status_msg = 12 [json_name = "podStatusMsg"];</code>
     */
    protected $pod_status_msg = '';
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
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 18 [json_name = "trafficType"];</code>
     */
    protected $traffic_type = 0;
    /**
     * Generated from protobuf field <code>string response_message = 19 [json_name = "responseMessage"];</code>
     */
    protected $response_message = '';
    /**
     * Generated from protobuf field <code>string environment_name = 20 [json_name = "environmentName"];</code>
     */
    protected $environment_name = '';
    /**
     * Generated from protobuf field <code>string environment_internal_name = 21 [json_name = "environmentInternalName"];</code>
     */
    protected $environment_internal_name = '';
    /**
     * Generated from protobuf field <code>string application_name = 22 [json_name = "applicationName"];</code>
     */
    protected $application_name = '';
    /**
     * Generated from protobuf field <code>uint32 storage_used = 23 [json_name = "storageUsed"];</code>
     */
    protected $storage_used = 0;
    /**
     * Generated from protobuf field <code>uint32 storage_limit = 24 [json_name = "storageLimit"];</code>
     */
    protected $storage_limit = 0;
    /**
     * Generated from protobuf field <code>string integration_id = 25 [json_name = "integrationId"];</code>
     */
    protected $integration_id = '';
    /**
     * Generated from protobuf field <code>.application.v1alpha1.Application application_data = 26 [json_name = "applicationData"];</code>
     */
    protected $application_data = null;
    /**
     * Generated from protobuf field <code>bool custom_pipeline = 27 [json_name = "customPipeline"];</code>
     */
    protected $custom_pipeline = false;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
     */
    private $before_deploy_tasks;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
     */
    private $after_deploy_tasks;
    /**
     * Generated from protobuf field <code>string pod_ingress_cert = 30 [json_name = "podIngressCert"];</code>
     */
    protected $pod_ingress_cert = '';
    /**
     * Generated from protobuf field <code>bool is_not_exist_dockerfile = 31 [json_name = "isNotExistDockerfile"];</code>
     */
    protected $is_not_exist_dockerfile = false;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 32 [json_name = "params"];</code>
     */
    private $params;
    /**
     * Generated from protobuf field <code>.pipelines.tekton.v1alpha1.PipelineRun pipeline_run = 33 [json_name = "pipelineRun"];</code>
     */
    protected $pipeline_run = null;
    /**
     * Generated from protobuf field <code>string host_url = 34 [json_name = "hostUrl"];</code>
     */
    protected $host_url = '';
    /**
     * Generated from protobuf field <code>string app_label = 35 [json_name = "appLabel"];</code>
     */
    protected $app_label = '';
    /**
     * Generated from protobuf field <code>string created_at = 36 [json_name = "createdAt"];</code>
     */
    protected $created_at = '';
    /**
     * Generated from protobuf field <code>string updated_at = 37 [json_name = "updatedAt"];</code>
     */
    protected $updated_at = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $name
     *     @type \Pipelines\Runtime\V1Alpha1\IntanceType[]|\Google\Protobuf\Internal\RepeatedField $instance_types
     *     @type string $organization_id
     *     @type string $project_id
     *     @type string $name_project
     *     @type string $application_id
     *     @type string $workspace_id
     *     @type string $environment_id
     *     @type string $scaler
     *     @type string $pod_status
     *     @type string $pod_status_msg
     *     @type array|\Google\Protobuf\Internal\MapField $integration
     *     @type array|\Google\Protobuf\Internal\MapField $environment_variables
     *     @type array|\Google\Protobuf\Internal\MapField $commands
     *     @type array|\Google\Protobuf\Internal\MapField $secrets
     *     @type array|\Google\Protobuf\Internal\MapField $extra_args
     *     @type int $traffic_type
     *     @type string $response_message
     *     @type string $environment_name
     *     @type string $environment_internal_name
     *     @type string $application_name
     *     @type int $storage_used
     *     @type int $storage_limit
     *     @type string $integration_id
     *     @type \Application\V1alpha1\Application $application_data
     *     @type bool $custom_pipeline
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $before_deploy_tasks
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $after_deploy_tasks
     *     @type string $pod_ingress_cert
     *     @type bool $is_not_exist_dockerfile
     *     @type \Pipelines\Tekton\V1Alpha1\Params[]|\Google\Protobuf\Internal\RepeatedField $params
     *     @type \Pipelines\Tekton\V1Alpha1\PipelineRun $pipeline_run
     *     @type string $host_url
     *     @type string $app_label
     *     @type string $created_at
     *     @type string $updated_at
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
     * Generated from protobuf field <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getInstanceTypes()
    {
        return $this->instance_types;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.runtime.v1alpha1.IntanceType instance_types = 3 [json_name = "instanceTypes"];</code>
     * @param \Pipelines\Runtime\V1Alpha1\IntanceType[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setInstanceTypes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Runtime\V1Alpha1\IntanceType::class);
        $this->instance_types = $arr;

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
     * Generated from protobuf field <code>string pod_status = 11 [json_name = "podStatus"];</code>
     * @return string
     */
    public function getPodStatus()
    {
        return $this->pod_status;
    }

    /**
     * Generated from protobuf field <code>string pod_status = 11 [json_name = "podStatus"];</code>
     * @param string $var
     * @return $this
     */
    public function setPodStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->pod_status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string pod_status_msg = 12 [json_name = "podStatusMsg"];</code>
     * @return string
     */
    public function getPodStatusMsg()
    {
        return $this->pod_status_msg;
    }

    /**
     * Generated from protobuf field <code>string pod_status_msg = 12 [json_name = "podStatusMsg"];</code>
     * @param string $var
     * @return $this
     */
    public function setPodStatusMsg($var)
    {
        GPBUtil::checkString($var, True);
        $this->pod_status_msg = $var;

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
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 18 [json_name = "trafficType"];</code>
     * @return int
     */
    public function getTrafficType()
    {
        return $this->traffic_type;
    }

    /**
     * Generated from protobuf field <code>.pipelines.runtime.v1alpha1.TrafficType traffic_type = 18 [json_name = "trafficType"];</code>
     * @param int $var
     * @return $this
     */
    public function setTrafficType($var)
    {
        GPBUtil::checkEnum($var, \Pipelines\Runtime\V1Alpha1\TrafficType::class);
        $this->traffic_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string response_message = 19 [json_name = "responseMessage"];</code>
     * @return string
     */
    public function getResponseMessage()
    {
        return $this->response_message;
    }

    /**
     * Generated from protobuf field <code>string response_message = 19 [json_name = "responseMessage"];</code>
     * @param string $var
     * @return $this
     */
    public function setResponseMessage($var)
    {
        GPBUtil::checkString($var, True);
        $this->response_message = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_name = 20 [json_name = "environmentName"];</code>
     * @return string
     */
    public function getEnvironmentName()
    {
        return $this->environment_name;
    }

    /**
     * Generated from protobuf field <code>string environment_name = 20 [json_name = "environmentName"];</code>
     * @param string $var
     * @return $this
     */
    public function setEnvironmentName($var)
    {
        GPBUtil::checkString($var, True);
        $this->environment_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string environment_internal_name = 21 [json_name = "environmentInternalName"];</code>
     * @return string
     */
    public function getEnvironmentInternalName()
    {
        return $this->environment_internal_name;
    }

    /**
     * Generated from protobuf field <code>string environment_internal_name = 21 [json_name = "environmentInternalName"];</code>
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
     * Generated from protobuf field <code>string application_name = 22 [json_name = "applicationName"];</code>
     * @return string
     */
    public function getApplicationName()
    {
        return $this->application_name;
    }

    /**
     * Generated from protobuf field <code>string application_name = 22 [json_name = "applicationName"];</code>
     * @param string $var
     * @return $this
     */
    public function setApplicationName($var)
    {
        GPBUtil::checkString($var, True);
        $this->application_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_used = 23 [json_name = "storageUsed"];</code>
     * @return int
     */
    public function getStorageUsed()
    {
        return $this->storage_used;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_used = 23 [json_name = "storageUsed"];</code>
     * @param int $var
     * @return $this
     */
    public function setStorageUsed($var)
    {
        GPBUtil::checkUint32($var);
        $this->storage_used = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_limit = 24 [json_name = "storageLimit"];</code>
     * @return int
     */
    public function getStorageLimit()
    {
        return $this->storage_limit;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_limit = 24 [json_name = "storageLimit"];</code>
     * @param int $var
     * @return $this
     */
    public function setStorageLimit($var)
    {
        GPBUtil::checkUint32($var);
        $this->storage_limit = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 25 [json_name = "integrationId"];</code>
     * @return string
     */
    public function getIntegrationId()
    {
        return $this->integration_id;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 25 [json_name = "integrationId"];</code>
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
     * Generated from protobuf field <code>.application.v1alpha1.Application application_data = 26 [json_name = "applicationData"];</code>
     * @return \Application\V1alpha1\Application|null
     */
    public function getApplicationData()
    {
        return $this->application_data;
    }

    public function hasApplicationData()
    {
        return isset($this->application_data);
    }

    public function clearApplicationData()
    {
        unset($this->application_data);
    }

    /**
     * Generated from protobuf field <code>.application.v1alpha1.Application application_data = 26 [json_name = "applicationData"];</code>
     * @param \Application\V1alpha1\Application $var
     * @return $this
     */
    public function setApplicationData($var)
    {
        GPBUtil::checkMessage($var, \Application\V1alpha1\Application::class);
        $this->application_data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool custom_pipeline = 27 [json_name = "customPipeline"];</code>
     * @return bool
     */
    public function getCustomPipeline()
    {
        return $this->custom_pipeline;
    }

    /**
     * Generated from protobuf field <code>bool custom_pipeline = 27 [json_name = "customPipeline"];</code>
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
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getBeforeDeployTasks()
    {
        return $this->before_deploy_tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task before_deploy_tasks = 28 [json_name = "beforeDeployTasks"];</code>
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
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAfterDeployTasks()
    {
        return $this->after_deploy_tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task after_deploy_tasks = 29 [json_name = "afterDeployTasks"];</code>
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
     * Generated from protobuf field <code>string pod_ingress_cert = 30 [json_name = "podIngressCert"];</code>
     * @return string
     */
    public function getPodIngressCert()
    {
        return $this->pod_ingress_cert;
    }

    /**
     * Generated from protobuf field <code>string pod_ingress_cert = 30 [json_name = "podIngressCert"];</code>
     * @param string $var
     * @return $this
     */
    public function setPodIngressCert($var)
    {
        GPBUtil::checkString($var, True);
        $this->pod_ingress_cert = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool is_not_exist_dockerfile = 31 [json_name = "isNotExistDockerfile"];</code>
     * @return bool
     */
    public function getIsNotExistDockerfile()
    {
        return $this->is_not_exist_dockerfile;
    }

    /**
     * Generated from protobuf field <code>bool is_not_exist_dockerfile = 31 [json_name = "isNotExistDockerfile"];</code>
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
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 32 [json_name = "params"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 32 [json_name = "params"];</code>
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
     * Generated from protobuf field <code>.pipelines.tekton.v1alpha1.PipelineRun pipeline_run = 33 [json_name = "pipelineRun"];</code>
     * @return \Pipelines\Tekton\V1Alpha1\PipelineRun|null
     */
    public function getPipelineRun()
    {
        return $this->pipeline_run;
    }

    public function hasPipelineRun()
    {
        return isset($this->pipeline_run);
    }

    public function clearPipelineRun()
    {
        unset($this->pipeline_run);
    }

    /**
     * Generated from protobuf field <code>.pipelines.tekton.v1alpha1.PipelineRun pipeline_run = 33 [json_name = "pipelineRun"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\PipelineRun $var
     * @return $this
     */
    public function setPipelineRun($var)
    {
        GPBUtil::checkMessage($var, \Pipelines\Tekton\V1Alpha1\PipelineRun::class);
        $this->pipeline_run = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string host_url = 34 [json_name = "hostUrl"];</code>
     * @return string
     */
    public function getHostUrl()
    {
        return $this->host_url;
    }

    /**
     * Generated from protobuf field <code>string host_url = 34 [json_name = "hostUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setHostUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->host_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string app_label = 35 [json_name = "appLabel"];</code>
     * @return string
     */
    public function getAppLabel()
    {
        return $this->app_label;
    }

    /**
     * Generated from protobuf field <code>string app_label = 35 [json_name = "appLabel"];</code>
     * @param string $var
     * @return $this
     */
    public function setAppLabel($var)
    {
        GPBUtil::checkString($var, True);
        $this->app_label = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string created_at = 36 [json_name = "createdAt"];</code>
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Generated from protobuf field <code>string created_at = 36 [json_name = "createdAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setCreatedAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->created_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 37 [json_name = "updatedAt"];</code>
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Generated from protobuf field <code>string updated_at = 37 [json_name = "updatedAt"];</code>
     * @param string $var
     * @return $this
     */
    public function setUpdatedAt($var)
    {
        GPBUtil::checkString($var, True);
        $this->updated_at = $var;

        return $this;
    }

}

