<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application_api.proto

namespace Application\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * LIST 
 *
 * Generated from protobuf message <code>application.v1alpha1.ListApplicationRequest</code>
 */
class ListApplicationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     */
    protected $project_id = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $project_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Application\V1Alpha1\ApplicationApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>uint32 project_id = 1 [json_name = "projectId"];</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkUint32($var);
        $this->project_id = $var;

        return $this;
    }

}

