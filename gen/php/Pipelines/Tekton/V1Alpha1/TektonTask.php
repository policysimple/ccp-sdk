<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton.proto

namespace Pipelines\Tekton\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.tekton.v1alpha1.TektonTask</code>
 */
class TektonTask extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
     */
    private $task;
    /**
     * Generated from protobuf field <code>int32 order = 2 [json_name = "order"];</code>
     */
    protected $order = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $task
     *     @type int $order
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTask()
    {
        return $this->task;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Task task = 1 [json_name = "task"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Task[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTask($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Task::class);
        $this->task = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 order = 2 [json_name = "order"];</code>
     * @return int
     */
    public function getOrder()
    {
        return $this->order;
    }

    /**
     * Generated from protobuf field <code>int32 order = 2 [json_name = "order"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrder($var)
    {
        GPBUtil::checkInt32($var);
        $this->order = $var;

        return $this;
    }

}
