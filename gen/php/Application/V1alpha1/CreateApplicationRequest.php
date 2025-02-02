<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application_api.proto

namespace Application\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>application.v1alpha1.CreateApplicationRequest</code>
 */
class CreateApplicationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.application.v1alpha1.Application application = 1 [json_name = "application"];</code>
     */
    protected $application = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Application\V1alpha1\Application $application
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Application\V1Alpha1\ApplicationApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.application.v1alpha1.Application application = 1 [json_name = "application"];</code>
     * @return \Application\V1alpha1\Application|null
     */
    public function getApplication()
    {
        return $this->application;
    }

    public function hasApplication()
    {
        return isset($this->application);
    }

    public function clearApplication()
    {
        unset($this->application);
    }

    /**
     * Generated from protobuf field <code>.application.v1alpha1.Application application = 1 [json_name = "application"];</code>
     * @param \Application\V1alpha1\Application $var
     * @return $this
     */
    public function setApplication($var)
    {
        GPBUtil::checkMessage($var, \Application\V1alpha1\Application::class);
        $this->application = $var;

        return $this;
    }

}

