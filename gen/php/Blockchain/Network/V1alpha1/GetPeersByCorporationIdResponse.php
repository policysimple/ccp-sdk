<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/network/v1alpha1/network_api.proto

namespace Blockchain\Network\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.network.v1alpha1.GetPeersByCorporationIdResponse</code>
 */
class GetPeersByCorporationIdResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Peer peer = 1 [json_name = "peer"];</code>
     */
    private $peer;
    /**
     * Generated from protobuf field <code>int64 total = 2 [json_name = "total"];</code>
     */
    protected $total = 0;
    /**
     * Generated from protobuf field <code>string next_url = 3 [json_name = "nextUrl"];</code>
     */
    protected $next_url = '';
    /**
     * Generated from protobuf field <code>string previous_url = 4 [json_name = "previousUrl"];</code>
     */
    protected $previous_url = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Network\V1alpha1\Peer[]|\Google\Protobuf\Internal\RepeatedField $peer
     *     @type int|string $total
     *     @type string $next_url
     *     @type string $previous_url
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Network\V1Alpha1\NetworkApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Peer peer = 1 [json_name = "peer"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPeer()
    {
        return $this->peer;
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.network.v1alpha1.Peer peer = 1 [json_name = "peer"];</code>
     * @param \Blockchain\Network\V1alpha1\Peer[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPeer($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Blockchain\Network\V1alpha1\Peer::class);
        $this->peer = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int64 total = 2 [json_name = "total"];</code>
     * @return int|string
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Generated from protobuf field <code>int64 total = 2 [json_name = "total"];</code>
     * @param int|string $var
     * @return $this
     */
    public function setTotal($var)
    {
        GPBUtil::checkInt64($var);
        $this->total = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string next_url = 3 [json_name = "nextUrl"];</code>
     * @return string
     */
    public function getNextUrl()
    {
        return $this->next_url;
    }

    /**
     * Generated from protobuf field <code>string next_url = 3 [json_name = "nextUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setNextUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->next_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string previous_url = 4 [json_name = "previousUrl"];</code>
     * @return string
     */
    public function getPreviousUrl()
    {
        return $this->previous_url;
    }

    /**
     * Generated from protobuf field <code>string previous_url = 4 [json_name = "previousUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setPreviousUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->previous_url = $var;

        return $this;
    }

}
