<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace Payment\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>payment.v1alpha1.ListProjectsResponse</code>
 */
class ListProjectsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.payment.v1alpha1.ProjectList project_list = 1 [json_name = "projectList"];</code>
     */
    protected $project_list = null;
    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     */
    protected $status = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Payment\V1alpha1\ProjectList $project_list
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payment\V1Alpha1\PaymentApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.ProjectList project_list = 1 [json_name = "projectList"];</code>
     * @return \Payment\V1alpha1\ProjectList|null
     */
    public function getProjectList()
    {
        return $this->project_list;
    }

    public function hasProjectList()
    {
        return isset($this->project_list);
    }

    public function clearProjectList()
    {
        unset($this->project_list);
    }

    /**
     * Generated from protobuf field <code>.payment.v1alpha1.ProjectList project_list = 1 [json_name = "projectList"];</code>
     * @param \Payment\V1alpha1\ProjectList $var
     * @return $this
     */
    public function setProjectList($var)
    {
        GPBUtil::checkMessage($var, \Payment\V1alpha1\ProjectList::class);
        $this->project_list = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

}
