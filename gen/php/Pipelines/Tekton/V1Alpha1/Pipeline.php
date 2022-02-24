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
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>uint32 project_id = 3 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>string type_meta_kind = 4 [json_name = "typeMetaKind"];</code>
     */
    protected $type_meta_kind = '';
    /**
     * Generated from protobuf field <code>string type_meta_api_version = 5 [json_name = "typeMetaApiVersion"];</code>
     */
    protected $type_meta_api_version = '';
    /**
     * Generated from protobuf field <code>string object_meta_name = 6 [json_name = "objectMetaName"];</code>
     */
    protected $object_meta_name = '';
    /**
     * Generated from protobuf field <code>string object_meta_namespace = 7 [json_name = "objectMetaNamespace"];</code>
     */
    protected $object_meta_namespace = '';
    /**
     * Generated from protobuf field <code>string spec_workspaces_name = 8 [json_name = "specWorkspacesName"];</code>
     */
    protected $spec_workspaces_name = '';
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
     */
    private $params;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
     */
    private $tasks;
    /**
     * Generated from protobuf field <code>string status_type = 11 [json_name = "statusType"];</code>
     */
    protected $status_type = '';
    /**
     * Generated from protobuf field <code>bool active = 12 [json_name = "active"];</code>
     */
    protected $active = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type int $organization_id
     *     @type int $project_id
     *     @type string $type_meta_kind
     *     @type string $type_meta_api_version
     *     @type string $object_meta_name
     *     @type string $object_meta_namespace
     *     @type string $spec_workspaces_name
     *     @type \Pipelines\Tekton\V1Alpha1\Params[]|\Google\Protobuf\Internal\RepeatedField $params
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $tasks
     *     @type string $status_type
     *     @type bool $active
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
     * Generated from protobuf field <code>string type_meta_kind = 4 [json_name = "typeMetaKind"];</code>
     * @return string
     */
    public function getTypeMetaKind()
    {
        return $this->type_meta_kind;
    }

    /**
     * Generated from protobuf field <code>string type_meta_kind = 4 [json_name = "typeMetaKind"];</code>
     * @param string $var
     * @return $this
     */
    public function setTypeMetaKind($var)
    {
        GPBUtil::checkString($var, True);
        $this->type_meta_kind = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type_meta_api_version = 5 [json_name = "typeMetaApiVersion"];</code>
     * @return string
     */
    public function getTypeMetaApiVersion()
    {
        return $this->type_meta_api_version;
    }

    /**
     * Generated from protobuf field <code>string type_meta_api_version = 5 [json_name = "typeMetaApiVersion"];</code>
     * @param string $var
     * @return $this
     */
    public function setTypeMetaApiVersion($var)
    {
        GPBUtil::checkString($var, True);
        $this->type_meta_api_version = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string object_meta_name = 6 [json_name = "objectMetaName"];</code>
     * @return string
     */
    public function getObjectMetaName()
    {
        return $this->object_meta_name;
    }

    /**
     * Generated from protobuf field <code>string object_meta_name = 6 [json_name = "objectMetaName"];</code>
     * @param string $var
     * @return $this
     */
    public function setObjectMetaName($var)
    {
        GPBUtil::checkString($var, True);
        $this->object_meta_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string object_meta_namespace = 7 [json_name = "objectMetaNamespace"];</code>
     * @return string
     */
    public function getObjectMetaNamespace()
    {
        return $this->object_meta_namespace;
    }

    /**
     * Generated from protobuf field <code>string object_meta_namespace = 7 [json_name = "objectMetaNamespace"];</code>
     * @param string $var
     * @return $this
     */
    public function setObjectMetaNamespace($var)
    {
        GPBUtil::checkString($var, True);
        $this->object_meta_namespace = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string spec_workspaces_name = 8 [json_name = "specWorkspacesName"];</code>
     * @return string
     */
    public function getSpecWorkspacesName()
    {
        return $this->spec_workspaces_name;
    }

    /**
     * Generated from protobuf field <code>string spec_workspaces_name = 8 [json_name = "specWorkspacesName"];</code>
     * @param string $var
     * @return $this
     */
    public function setSpecWorkspacesName($var)
    {
        GPBUtil::checkString($var, True);
        $this->spec_workspaces_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 9 [json_name = "params"];</code>
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
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 10 [json_name = "tasks"];</code>
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
     * Generated from protobuf field <code>string status_type = 11 [json_name = "statusType"];</code>
     * @return string
     */
    public function getStatusType()
    {
        return $this->status_type;
    }

    /**
     * Generated from protobuf field <code>string status_type = 11 [json_name = "statusType"];</code>
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
     * Generated from protobuf field <code>bool active = 12 [json_name = "active"];</code>
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Generated from protobuf field <code>bool active = 12 [json_name = "active"];</code>
     * @param bool $var
     * @return $this
     */
    public function setActive($var)
    {
        GPBUtil::checkBool($var);
        $this->active = $var;

        return $this;
    }

}

