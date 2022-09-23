<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/thepower/v1alpha1/thepower_api.proto

namespace Blockchain\Thepower\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.thepower.v1alpha1.GetTpChainsResponse</code>
 */
class GetTpChainsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .blockchain.thepower.v1alpha1.TpChain tp_chains = 1 [json_name = "tpChains"];</code>
     */
    private $tp_chains;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Thepower\V1alpha1\TpChain[]|\Google\Protobuf\Internal\RepeatedField $tp_chains
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Thepower\V1Alpha1\ThepowerApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.thepower.v1alpha1.TpChain tp_chains = 1 [json_name = "tpChains"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTpChains()
    {
        return $this->tp_chains;
    }

    /**
     * Generated from protobuf field <code>repeated .blockchain.thepower.v1alpha1.TpChain tp_chains = 1 [json_name = "tpChains"];</code>
     * @param \Blockchain\Thepower\V1alpha1\TpChain[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTpChains($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Blockchain\Thepower\V1alpha1\TpChain::class);
        $this->tp_chains = $arr;

        return $this;
    }

}

