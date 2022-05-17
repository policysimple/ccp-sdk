<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application.proto

namespace Application\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>application.v1alpha1.DeleteApplicationsByIntegrationRequest</code>
 */
class DeleteApplicationsByIntegrationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string integration_id = 1 [json_name = "integrationId"];</code>
     */
    protected $integration_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $integration_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Application\V1Alpha1\Application::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string integration_id = 1 [json_name = "integrationId"];</code>
     * @return string
     */
    public function getIntegrationId()
    {
        return $this->integration_id;
    }

    /**
     * Generated from protobuf field <code>string integration_id = 1 [json_name = "integrationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setIntegrationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->integration_id = $var;

        return $this;
    }

}

