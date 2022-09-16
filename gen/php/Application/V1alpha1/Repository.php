<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: application/v1alpha1/application.proto

namespace Application\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>application.v1alpha1.Repository</code>
 */
class Repository extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string full_name = 2 [json_name = "fullName"];</code>
     */
    protected $full_name = '';
    /**
     * Generated from protobuf field <code>string description = 3 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>bool fork = 4 [json_name = "fork"];</code>
     */
    protected $fork = false;
    /**
     * Generated from protobuf field <code>string clone_url = 5 [json_name = "cloneUrl"];</code>
     */
    protected $clone_url = '';
    /**
     * Generated from protobuf field <code>bool private = 6 [json_name = "private"];</code>
     */
    protected $private = false;
    /**
     * Generated from protobuf field <code>.application.v1alpha1.Branch branch = 7 [json_name = "branch"];</code>
     */
    protected $branch = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $full_name
     *     @type string $description
     *     @type bool $fork
     *     @type string $clone_url
     *     @type bool $private
     *     @type \Application\V1alpha1\Branch $branch
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Application\V1Alpha1\Application::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1 [json_name = "name"];</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string full_name = 2 [json_name = "fullName"];</code>
     * @return string
     */
    public function getFullName()
    {
        return $this->full_name;
    }

    /**
     * Generated from protobuf field <code>string full_name = 2 [json_name = "fullName"];</code>
     * @param string $var
     * @return $this
     */
    public function setFullName($var)
    {
        GPBUtil::checkString($var, True);
        $this->full_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 3 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 3 [json_name = "description"];</code>
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
     * Generated from protobuf field <code>bool fork = 4 [json_name = "fork"];</code>
     * @return bool
     */
    public function getFork()
    {
        return $this->fork;
    }

    /**
     * Generated from protobuf field <code>bool fork = 4 [json_name = "fork"];</code>
     * @param bool $var
     * @return $this
     */
    public function setFork($var)
    {
        GPBUtil::checkBool($var);
        $this->fork = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string clone_url = 5 [json_name = "cloneUrl"];</code>
     * @return string
     */
    public function getCloneUrl()
    {
        return $this->clone_url;
    }

    /**
     * Generated from protobuf field <code>string clone_url = 5 [json_name = "cloneUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setCloneUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->clone_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool private = 6 [json_name = "private"];</code>
     * @return bool
     */
    public function getPrivate()
    {
        return $this->private;
    }

    /**
     * Generated from protobuf field <code>bool private = 6 [json_name = "private"];</code>
     * @param bool $var
     * @return $this
     */
    public function setPrivate($var)
    {
        GPBUtil::checkBool($var);
        $this->private = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.application.v1alpha1.Branch branch = 7 [json_name = "branch"];</code>
     * @return \Application\V1alpha1\Branch|null
     */
    public function getBranch()
    {
        return $this->branch;
    }

    public function hasBranch()
    {
        return isset($this->branch);
    }

    public function clearBranch()
    {
        unset($this->branch);
    }

    /**
     * Generated from protobuf field <code>.application.v1alpha1.Branch branch = 7 [json_name = "branch"];</code>
     * @param \Application\V1alpha1\Branch $var
     * @return $this
     */
    public function setBranch($var)
    {
        GPBUtil::checkMessage($var, \Application\V1alpha1\Branch::class);
        $this->branch = $var;

        return $this;
    }

}

