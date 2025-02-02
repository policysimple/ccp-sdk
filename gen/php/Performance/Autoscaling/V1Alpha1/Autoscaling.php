<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/autoscaling/v1alpha1/autoscaling.proto

namespace Performance\Autoscaling\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Autoscaling ...
 *
 * Generated from protobuf message <code>performance.autoscaling.v1alpha1.Autoscaling</code>
 */
class Autoscaling extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     */
    protected $metadata = null;
    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.AutoscalingSpec spec = 2 [json_name = "spec"];</code>
     */
    protected $spec = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Performance\Autoscaling\V1Alpha1\Metadata $metadata
     *     @type \Performance\Autoscaling\V1Alpha1\AutoscalingSpec $spec
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Autoscaling\V1Alpha1\Autoscaling::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     * @return \Performance\Autoscaling\V1Alpha1\Metadata|null
     */
    public function getMetadata()
    {
        return $this->metadata;
    }

    public function hasMetadata()
    {
        return isset($this->metadata);
    }

    public function clearMetadata()
    {
        unset($this->metadata);
    }

    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.Metadata metadata = 1 [json_name = "metadata"];</code>
     * @param \Performance\Autoscaling\V1Alpha1\Metadata $var
     * @return $this
     */
    public function setMetadata($var)
    {
        GPBUtil::checkMessage($var, \Performance\Autoscaling\V1Alpha1\Metadata::class);
        $this->metadata = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.AutoscalingSpec spec = 2 [json_name = "spec"];</code>
     * @return \Performance\Autoscaling\V1Alpha1\AutoscalingSpec|null
     */
    public function getSpec()
    {
        return $this->spec;
    }

    public function hasSpec()
    {
        return isset($this->spec);
    }

    public function clearSpec()
    {
        unset($this->spec);
    }

    /**
     * Generated from protobuf field <code>.performance.autoscaling.v1alpha1.AutoscalingSpec spec = 2 [json_name = "spec"];</code>
     * @param \Performance\Autoscaling\V1Alpha1\AutoscalingSpec $var
     * @return $this
     */
    public function setSpec($var)
    {
        GPBUtil::checkMessage($var, \Performance\Autoscaling\V1Alpha1\AutoscalingSpec::class);
        $this->spec = $var;

        return $this;
    }

}

