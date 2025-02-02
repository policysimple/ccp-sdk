<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/tekton/v1alpha1/tekton.proto

namespace Pipelines\Tekton\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>pipelines.tekton.v1alpha1.TaskParamsToCustomize</code>
 */
class TaskParamsToCustomize extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string param_name = 1 [json_name = "paramName"];</code>
     */
    protected $param_name = '';
    /**
     * Generated from protobuf field <code>string label = 2 [json_name = "label"];</code>
     */
    protected $label = '';
    /**
     * Generated from protobuf field <code>string validation = 3 [json_name = "validation"];</code>
     */
    protected $validation = '';
    /**
     * Generated from protobuf field <code>string type_value = 4 [json_name = "typeValue"];</code>
     */
    protected $type_value = '';
    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string default = 6 [json_name = "default"];</code>
     */
    protected $default = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $param_name
     *     @type string $label
     *     @type string $validation
     *     @type string $type_value
     *     @type string $description
     *     @type string $default
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Tekton\V1Alpha1\Tekton::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string param_name = 1 [json_name = "paramName"];</code>
     * @return string
     */
    public function getParamName()
    {
        return $this->param_name;
    }

    /**
     * Generated from protobuf field <code>string param_name = 1 [json_name = "paramName"];</code>
     * @param string $var
     * @return $this
     */
    public function setParamName($var)
    {
        GPBUtil::checkString($var, True);
        $this->param_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string label = 2 [json_name = "label"];</code>
     * @return string
     */
    public function getLabel()
    {
        return $this->label;
    }

    /**
     * Generated from protobuf field <code>string label = 2 [json_name = "label"];</code>
     * @param string $var
     * @return $this
     */
    public function setLabel($var)
    {
        GPBUtil::checkString($var, True);
        $this->label = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string validation = 3 [json_name = "validation"];</code>
     * @return string
     */
    public function getValidation()
    {
        return $this->validation;
    }

    /**
     * Generated from protobuf field <code>string validation = 3 [json_name = "validation"];</code>
     * @param string $var
     * @return $this
     */
    public function setValidation($var)
    {
        GPBUtil::checkString($var, True);
        $this->validation = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @return string
     */
    public function getTypeValue()
    {
        return $this->type_value;
    }

    /**
     * Generated from protobuf field <code>string type_value = 4 [json_name = "typeValue"];</code>
     * @param string $var
     * @return $this
     */
    public function setTypeValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->type_value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string default = 6 [json_name = "default"];</code>
     * @return string
     */
    public function getDefault()
    {
        return $this->default;
    }

    /**
     * Generated from protobuf field <code>string default = 6 [json_name = "default"];</code>
     * @param string $var
     * @return $this
     */
    public function setDefault($var)
    {
        GPBUtil::checkString($var, True);
        $this->default = $var;

        return $this;
    }

}

