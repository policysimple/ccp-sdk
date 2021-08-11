<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: performance/logs/v1alpha1/logs_api.proto

namespace Performance\Logs\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>performance.logs.v1alpha1.GetLogsRequest</code>
 */
class GetLogsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>map<string, string> labels = 1 [json_name = "labels"];</code>
     */
    private $labels;
    /**
     * Generated from protobuf field <code>repeated string containers = 2 [json_name = "containers"];</code>
     */
    private $containers;
    /**
     * Generated from protobuf field <code>.performance.logs.v1alpha1.Range range = 3 [json_name = "range"];</code>
     */
    protected $range = null;
    /**
     * Generated from protobuf field <code>int32 size = 4 [json_name = "size"];</code>
     */
    protected $size = 0;
    /**
     * Generated from protobuf field <code>string next_page_id = 5 [json_name = "nextPageId"];</code>
     */
    protected $next_page_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array|\Google\Protobuf\Internal\MapField $labels
     *     @type string[]|\Google\Protobuf\Internal\RepeatedField $containers
     *     @type \Performance\Logs\V1Alpha1\Range $range
     *     @type int $size
     *     @type string $next_page_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Performance\Logs\V1Alpha1\LogsApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>map<string, string> labels = 1 [json_name = "labels"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getLabels()
    {
        return $this->labels;
    }

    /**
     * Generated from protobuf field <code>map<string, string> labels = 1 [json_name = "labels"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setLabels($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->labels = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated string containers = 2 [json_name = "containers"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getContainers()
    {
        return $this->containers;
    }

    /**
     * Generated from protobuf field <code>repeated string containers = 2 [json_name = "containers"];</code>
     * @param string[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setContainers($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::STRING);
        $this->containers = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.performance.logs.v1alpha1.Range range = 3 [json_name = "range"];</code>
     * @return \Performance\Logs\V1Alpha1\Range|null
     */
    public function getRange()
    {
        return $this->range;
    }

    public function hasRange()
    {
        return isset($this->range);
    }

    public function clearRange()
    {
        unset($this->range);
    }

    /**
     * Generated from protobuf field <code>.performance.logs.v1alpha1.Range range = 3 [json_name = "range"];</code>
     * @param \Performance\Logs\V1Alpha1\Range $var
     * @return $this
     */
    public function setRange($var)
    {
        GPBUtil::checkMessage($var, \Performance\Logs\V1Alpha1\Range::class);
        $this->range = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 size = 4 [json_name = "size"];</code>
     * @return int
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Generated from protobuf field <code>int32 size = 4 [json_name = "size"];</code>
     * @param int $var
     * @return $this
     */
    public function setSize($var)
    {
        GPBUtil::checkInt32($var);
        $this->size = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string next_page_id = 5 [json_name = "nextPageId"];</code>
     * @return string
     */
    public function getNextPageId()
    {
        return $this->next_page_id;
    }

    /**
     * Generated from protobuf field <code>string next_page_id = 5 [json_name = "nextPageId"];</code>
     * @param string $var
     * @return $this
     */
    public function setNextPageId($var)
    {
        GPBUtil::checkString($var, True);
        $this->next_page_id = $var;

        return $this;
    }

}
