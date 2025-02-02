<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/quotas/v1alpha1/registry_quotas_api.proto

namespace Artifacts\Quotas\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.quotas.v1alpha1.ListQuotasRegistryRequest</code>
 */
class ListQuotasRegistryRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     */
    protected $organization_id = '';
    /**
     * Generated from protobuf field <code>string project_id = 2 [json_name = "projectId"];</code>
     */
    protected $project_id = '';
    /**
     * Generated from protobuf field <code>string repository_name = 3 [json_name = "repositoryName"];</code>
     */
    protected $repository_name = '';
    /**
     * Generated from protobuf field <code>string query = 4 [json_name = "query"];</code>
     */
    protected $query = '';
    /**
     * Generated from protobuf field <code>uint32 page = 5 [json_name = "page"];</code>
     */
    protected $page = 0;
    /**
     * Generated from protobuf field <code>uint32 page_size = 6 [json_name = "pageSize"];</code>
     */
    protected $page_size = 0;
    /**
     * Generated from protobuf field <code>string sort = 7 [json_name = "sort"];</code>
     */
    protected $sort = '';
    /**
     * Generated from protobuf field <code>string reference_id = 8 [json_name = "referenceId"];</code>
     */
    protected $reference_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $organization_id
     *     @type string $project_id
     *     @type string $repository_name
     *     @type string $query
     *     @type int $page
     *     @type int $page_size
     *     @type string $sort
     *     @type string $reference_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Quotas\V1Alpha1\RegistryQuotasApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @return string
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     * Generated from protobuf field <code>string organization_id = 1 [json_name = "organizationId"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->organization_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string project_id = 2 [json_name = "projectId"];</code>
     * @return string
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>string project_id = 2 [json_name = "projectId"];</code>
     * @param string $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkString($var, True);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string repository_name = 3 [json_name = "repositoryName"];</code>
     * @return string
     */
    public function getRepositoryName()
    {
        return $this->repository_name;
    }

    /**
     * Generated from protobuf field <code>string repository_name = 3 [json_name = "repositoryName"];</code>
     * @param string $var
     * @return $this
     */
    public function setRepositoryName($var)
    {
        GPBUtil::checkString($var, True);
        $this->repository_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string query = 4 [json_name = "query"];</code>
     * @return string
     */
    public function getQuery()
    {
        return $this->query;
    }

    /**
     * Generated from protobuf field <code>string query = 4 [json_name = "query"];</code>
     * @param string $var
     * @return $this
     */
    public function setQuery($var)
    {
        GPBUtil::checkString($var, True);
        $this->query = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 page = 5 [json_name = "page"];</code>
     * @return int
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * Generated from protobuf field <code>uint32 page = 5 [json_name = "page"];</code>
     * @param int $var
     * @return $this
     */
    public function setPage($var)
    {
        GPBUtil::checkUint32($var);
        $this->page = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 page_size = 6 [json_name = "pageSize"];</code>
     * @return int
     */
    public function getPageSize()
    {
        return $this->page_size;
    }

    /**
     * Generated from protobuf field <code>uint32 page_size = 6 [json_name = "pageSize"];</code>
     * @param int $var
     * @return $this
     */
    public function setPageSize($var)
    {
        GPBUtil::checkUint32($var);
        $this->page_size = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string sort = 7 [json_name = "sort"];</code>
     * @return string
     */
    public function getSort()
    {
        return $this->sort;
    }

    /**
     * Generated from protobuf field <code>string sort = 7 [json_name = "sort"];</code>
     * @param string $var
     * @return $this
     */
    public function setSort($var)
    {
        GPBUtil::checkString($var, True);
        $this->sort = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string reference_id = 8 [json_name = "referenceId"];</code>
     * @return string
     */
    public function getReferenceId()
    {
        return $this->reference_id;
    }

    /**
     * Generated from protobuf field <code>string reference_id = 8 [json_name = "referenceId"];</code>
     * @param string $var
     * @return $this
     */
    public function setReferenceId($var)
    {
        GPBUtil::checkString($var, True);
        $this->reference_id = $var;

        return $this;
    }

}

