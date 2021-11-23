<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.UpdateProjectRequest</code>
 */
class UpdateProjectRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     */
    protected $id = 0;
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.CreateProjectRequest project = 2 [json_name = "project"];</code>
     */
    protected $project = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $id
     *     @type \Accounts\V1alpha1\CreateProjectRequest $project
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>int32 id = 1 [json_name = "id"];</code>
     * @param int $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkInt32($var);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.CreateProjectRequest project = 2 [json_name = "project"];</code>
     * @return \Accounts\V1alpha1\CreateProjectRequest|null
     */
    public function getProject()
    {
        return $this->project;
    }

    public function hasProject()
    {
        return isset($this->project);
    }

    public function clearProject()
    {
        unset($this->project);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.CreateProjectRequest project = 2 [json_name = "project"];</code>
     * @param \Accounts\V1alpha1\CreateProjectRequest $var
     * @return $this
     */
    public function setProject($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\CreateProjectRequest::class);
        $this->project = $var;

        return $this;
    }

}
