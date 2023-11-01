<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/runtime/v1alpha1/runtime.proto

namespace Pipelines\Runtime\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.runtime.v1alpha1.Command</code>
 */
class Command extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string build = 1 [json_name = "build"];</code>
     */
    protected $build = '';
    /**
     * Generated from protobuf field <code>string run = 2 [json_name = "run"];</code>
     */
    protected $run = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $build
     *     @type string $run
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Runtime\V1Alpha1\Runtime::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string build = 1 [json_name = "build"];</code>
     * @return string
     */
    public function getBuild()
    {
        return $this->build;
    }

    /**
     * Generated from protobuf field <code>string build = 1 [json_name = "build"];</code>
     * @param string $var
     * @return $this
     */
    public function setBuild($var)
    {
        GPBUtil::checkString($var, True);
        $this->build = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string run = 2 [json_name = "run"];</code>
     * @return string
     */
    public function getRun()
    {
        return $this->run;
    }

    /**
     * Generated from protobuf field <code>string run = 2 [json_name = "run"];</code>
     * @param string $var
     * @return $this
     */
    public function setRun($var)
    {
        GPBUtil::checkString($var, True);
        $this->run = $var;

        return $this;
    }

}

