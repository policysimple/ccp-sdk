<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: search/v1alpha1/search.proto

namespace Search\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>search.v1alpha1.SearchItem</code>
 */
class SearchItem extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string object_id = 1 [json_name = "objectId"];</code>
     */
    protected $object_id = '';
    /**
     * Generated from protobuf field <code>string type = 2 [json_name = "type"];</code>
     */
    protected $type = '';
    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string org_id = 4 [json_name = "orgId"];</code>
     */
    protected $org_id = '';
    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string metadata = 6 [json_name = "metadata"];</code>
     */
    protected $metadata = '';
    /**
     * Generated from protobuf field <code>map<string, string> data = 7 [json_name = "data"];</code>
     */
    private $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $object_id
     *     @type string $type
     *     @type string $name
     *     @type string $org_id
     *     @type string $description
     *     @type string $metadata
     *     @type array|\Google\Protobuf\Internal\MapField $data
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Search\V1Alpha1\Search::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string object_id = 1 [json_name = "objectId"];</code>
     * @return string
     */
    public function getObjectId()
    {
        return $this->object_id;
    }

    /**
     * Generated from protobuf field <code>string object_id = 1 [json_name = "objectId"];</code>
     * @param string $var
     * @return $this
     */
    public function setObjectId($var)
    {
        GPBUtil::checkString($var, True);
        $this->object_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type = 2 [json_name = "type"];</code>
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Generated from protobuf field <code>string type = 2 [json_name = "type"];</code>
     * @param string $var
     * @return $this
     */
    public function setType($var)
    {
        GPBUtil::checkString($var, True);
        $this->type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
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
     * Generated from protobuf field <code>string org_id = 4 [json_name = "orgId"];</code>
     * @return string
     */
    public function getOrgId()
    {
        return $this->org_id;
    }

    /**
     * Generated from protobuf field <code>string org_id = 4 [json_name = "orgId"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrgId($var)
    {
        GPBUtil::checkString($var, True);
        $this->org_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 5 [json_name = "description"];</code>
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
     * Generated from protobuf field <code>string metadata = 6 [json_name = "metadata"];</code>
     * @return string
     */
    public function getMetadata()
    {
        return $this->metadata;
    }

    /**
     * Generated from protobuf field <code>string metadata = 6 [json_name = "metadata"];</code>
     * @param string $var
     * @return $this
     */
    public function setMetadata($var)
    {
        GPBUtil::checkString($var, True);
        $this->metadata = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> data = 7 [json_name = "data"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>map<string, string> data = 7 [json_name = "data"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->data = $arr;

        return $this;
    }

}

