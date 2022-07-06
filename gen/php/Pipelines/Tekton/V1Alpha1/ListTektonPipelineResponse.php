<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton_api.proto

namespace Pipelines\Tekton\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.tekton.v1alpha1.ListTektonPipelineResponse</code>
 */
class ListTektonPipelineResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     */
    private $tekton_pipeline;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Pipelines\Tekton\V1Alpha1\Pipeline[]|\Google\Protobuf\Internal\RepeatedField $tekton_pipeline
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\TektonApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTektonPipeline()
    {
        return $this->tekton_pipeline;
    }

    /**
     * Generated from protobuf field <code>repeated .pipelines.tekton.v1alpha1.Pipeline tekton_pipeline = 1 [json_name = "tektonPipeline"];</code>
     * @param \Pipelines\Tekton\V1Alpha1\Pipeline[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTektonPipeline($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Pipelines\Tekton\V1Alpha1\Pipeline::class);
        $this->tekton_pipeline = $arr;

        return $this;
    }

}

