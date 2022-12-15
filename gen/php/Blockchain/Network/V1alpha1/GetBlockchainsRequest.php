<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.GetBlockchainsRequest</code>
 */
class GetBlockchainsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int64 offset = 1 [json_name = "offset"];</code>
     */
    protected $offset = 0;
    /**
     * Generated from protobuf field <code>int64 limit = 2 [json_name = "limit"];</code>
     */
    protected $limit = 0;
    /**
     * Standard query params to allow doing custom filters for blockchains.
     *
     * Generated from protobuf field <code>string query_params = 3 [json_name = "queryParams"];</code>
     */
    protected $query_params = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int|string $offset
     *     @type int|string $limit
     *     @type string $query_params
     *           Standard query params to allow doing custom filters for blockchains.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int64 offset = 1 [json_name = "offset"];</code>
     * @return int|string
     */
    public function getOffset()
    {
        return $this->offset;
    }

    /**
     * Generated from protobuf field <code>int64 offset = 1 [json_name = "offset"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setOffset($var)
    {
        GPBUtil::checkInt64($var);
        $this->offset = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 limit = 2 [json_name = "limit"];</code>
     * @return int|string
     */
    public function getLimit()
    {
        return $this->limit;
    }

    /**
     * Generated from protobuf field <code>int64 limit = 2 [json_name = "limit"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setLimit($var)
    {
        GPBUtil::checkInt64($var);
        $this->limit = $var;

        return $this;
    }

    /**
     * Standard query params to allow doing custom filters for blockchains.
     *
     * Generated from protobuf field <code>string query_params = 3 [json_name = "queryParams"];</code>
     * @return string
     */
    public function getQueryParams()
    {
        return $this->query_params;
    }

    /**
     * Standard query params to allow doing custom filters for blockchains.
     *
     * Generated from protobuf field <code>string query_params = 3 [json_name = "queryParams"];</code>
     * @param string $var
     * @return $this
     */
    public function setQueryParams($var)
    {
        GPBUtil::checkString($var, True);
        $this->query_params = $var;

        return $this;
    }

}

