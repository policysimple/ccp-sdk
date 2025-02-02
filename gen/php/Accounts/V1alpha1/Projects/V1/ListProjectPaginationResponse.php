<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/projects/projects.proto

namespace Accounts\V1alpha1\Projects\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.projects.v1.ListProjectPaginationResponse</code>
 */
class ListProjectPaginationResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project projects = 1 [json_name = "projects"];</code>
     */
    private $projects;
    /**
     * Generated from protobuf field <code>int32 count = 2 [json_name = "count"];</code>
     */
    protected $count = 0;
    /**
     * Generated from protobuf field <code>int32 page = 3 [json_name = "page"];</code>
     */
    protected $page = 0;
    /**
     * Generated from protobuf field <code>int32 max_page = 4 [json_name = "maxPage"];</code>
     */
    protected $max_page = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $projects
     *     @type int $count
     *     @type int $page
     *     @type int $max_page
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Projects\Projects::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project projects = 1 [json_name = "projects"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Project projects = 1 [json_name = "projects"];</code>
     * @param \Accounts\V1alpha1\Project[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setProjects($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Project::class);
        $this->projects = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 count = 2 [json_name = "count"];</code>
     * @return int
     */
    public function getCount()
    {
        return $this->count;
    }

    /**
     * Generated from protobuf field <code>int32 count = 2 [json_name = "count"];</code>
     * @param int $var
     * @return $this
     */
    public function setCount($var)
    {
        GPBUtil::checkInt32($var);
        $this->count = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 page = 3 [json_name = "page"];</code>
     * @return int
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * Generated from protobuf field <code>int32 page = 3 [json_name = "page"];</code>
     * @param int $var
     * @return $this
     */
    public function setPage($var)
    {
        GPBUtil::checkInt32($var);
        $this->page = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 max_page = 4 [json_name = "maxPage"];</code>
     * @return int
     */
    public function getMaxPage()
    {
        return $this->max_page;
    }

    /**
     * Generated from protobuf field <code>int32 max_page = 4 [json_name = "maxPage"];</code>
     * @param int $var
     * @return $this
     */
    public function setMaxPage($var)
    {
        GPBUtil::checkInt32($var);
        $this->max_page = $var;

        return $this;
    }

}

