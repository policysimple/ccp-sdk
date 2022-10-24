<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: blockchain/thepower/v1alpha1/thepower_api.proto

namespace Blockchain\Thepower\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>blockchain.thepower.v1alpha1.UpdateTpChainResponse</code>
 */
class UpdateTpChainResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.blockchain.thepower.v1alpha1.TpChain tp_chain = 1 [json_name = "tpChain"];</code>
     */
    protected $tp_chain = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Blockchain\Thepower\V1alpha1\TpChain $tp_chain
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Blockchain\Thepower\V1Alpha1\ThepowerApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.blockchain.thepower.v1alpha1.TpChain tp_chain = 1 [json_name = "tpChain"];</code>
     * @return \Blockchain\Thepower\V1alpha1\TpChain|null
     */
    public function getTpChain()
    {
        return $this->tp_chain;
    }

    public function hasTpChain()
    {
        return isset($this->tp_chain);
    }

    public function clearTpChain()
    {
        unset($this->tp_chain);
    }

    /**
     * Generated from protobuf field <code>.blockchain.thepower.v1alpha1.TpChain tp_chain = 1 [json_name = "tpChain"];</code>
     * @param \Blockchain\Thepower\V1alpha1\TpChain $var
     * @return $this
     */
    public function setTpChain($var)
    {
        GPBUtil::checkMessage($var, \Blockchain\Thepower\V1alpha1\TpChain::class);
        $this->tp_chain = $var;

        return $this;
    }

}

