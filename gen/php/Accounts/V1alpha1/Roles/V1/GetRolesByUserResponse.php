<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/roles/roles.proto

namespace Accounts\V1alpha1\Roles\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.roles.v1.GetRolesByUserResponse</code>
 */
class GetRolesByUserResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Organization organization = 1 [json_name = "organization"];</code>
     */
    private $organization;
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project project = 2 [json_name = "project"];</code>
     */
    private $project;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Organization[]|\Google\Protobuf\Internal\RepeatedField $organization
     *     @type \Accounts\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $project
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Roles\Roles::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Organization organization = 1 [json_name = "organization"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getOrganization()
    {
        return $this->organization;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Organization organization = 1 [json_name = "organization"];</code>
     * @param \Accounts\V1alpha1\Organization[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setOrganization($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Organization::class);
        $this->organization = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project project = 2 [json_name = "project"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project project = 2 [json_name = "project"];</code>
     * @param \Accounts\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProject($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Project::class);
        $this->project = $arr;

        return $this;
    }

}

