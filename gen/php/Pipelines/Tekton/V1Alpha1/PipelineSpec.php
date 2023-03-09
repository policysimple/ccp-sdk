<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton.proto

namespace Pipelines\Tekton\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.tekton.v1alpha1.PipelineSpec</code>
 */
class PipelineSpec extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 1 [json_name = "params"];</code>
     */
    private $params;
    /**
     * Generated from protobuf field <code>string resources = 2 [json_name = "resources"];</code>
     */
    protected $resources = '';
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 3 [json_name = "tasks"];</code>
     */
    private $tasks;
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Workspaces workspace = 4 [json_name = "workspace"];</code>
     */
    private $workspace;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pipelines\Tekton\V1Alpha1\Params[]|\Google\Protobuf\Internal\RepeatedField $params
     *     @type string $resources
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $tasks
     *     @type \Pipelines\Tekton\V1Alpha1\Workspaces[]|\Google\Protobuf\Internal\RepeatedField $workspace
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 1 [json_name = "params"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Params params = 1 [json_name = "params"];</code>
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
     * Generated from protobuf field <code>string resources = 2 [json_name = "resources"];</code>
     * @return string
     */
    public function getResources()
    {
        return $this->resources;
    }

    /**
     * Generated from protobuf field <code>string resources = 2 [json_name = "resources"];</code>
     * @param string $var
     * @return $this
     */
    public function setResources($var)
    {
        GPBUtil::checkString($var, True);
        $this->resources = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 3 [json_name = "tasks"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task tasks = 3 [json_name = "tasks"];</code>
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
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Workspaces workspace = 4 [json_name = "workspace"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getWorkspace()
    {
        return $this->workspace;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Workspaces workspace = 4 [json_name = "workspace"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Workspaces[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setWorkspace($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Workspaces::class);
        $this->workspace = $arr;

        return $this;
    }

}

