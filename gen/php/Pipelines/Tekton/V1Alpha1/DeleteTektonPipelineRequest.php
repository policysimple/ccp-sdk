<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton_api.proto

namespace Pipelines\Tekton\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest</code>
 */
class DeleteTektonPipelineRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string runtime_name = 1 [json_name = "runtimeName"];</code>
     */
    protected $runtime_name = '';
    /**
     * Generated from protobuf field <code>string application_id = 2 [json_name = "applicationId"];</code>
     */
    protected $application_id = '';
    /**
     * Generated from protobuf field <code>string environment_id = 3 [json_name = "environmentId"];</code>
     */
    protected $environment_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $runtime_name
     *     @type string $application_id
     *     @type string $environment_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\TektonApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string runtime_name = 1 [json_name = "runtimeName"];</code>
     * @return string
     */
    public function getRuntimeName()
    {
        return $this->runtime_name;
    }

    /**
     * Generated from protobuf field <code>string runtime_name = 1 [json_name = "runtimeName"];</code>
     * @param string $var
     * @return $this
     */
    public function setRuntimeName($var)
    {
        GPBUtil::checkString($var, True);
        $this->runtime_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string application_id = 2 [json_name = "applicationId"];</code>
     * @return string
     */
    public function getApplicationId()
    {
        return $this->application_id;
    }

    /**
     * Generated from protobuf field <code>string application_id = 2 [json_name = "applicationId"];</code>
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

}

