<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/tokens/tokens.proto

namespace Accounts\V1alpha1\Tokens\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.tokens.v1.SaveLogsRequest</code>
 */
class SaveLogsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.tokens.v1.Log log = 1 [json_name = "log"];</code>
     */
    protected $log = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Tokens\V1\Log $log
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Tokens\Tokens::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.tokens.v1.Log log = 1 [json_name = "log"];</code>
     * @return \Accounts\V1alpha1\Tokens\V1\Log|null
     */
    public function getLog()
    {
        return $this->log;
    }

    public function hasLog()
    {
        return isset($this->log);
    }

    public function clearLog()
    {
        unset($this->log);
    }

    /**
     * Generated from protobuf field <code>.accounts.v1alpha1.tokens.v1.Log log = 1 [json_name = "log"];</code>
     * @param \Accounts\V1alpha1\Tokens\V1\Log $var
     * @return $this
     */
    public function setLog($var)
    {
        GPBUtil::checkMessage($var, \Accounts\V1alpha1\Tokens\V1\Log::class);
        $this->log = $var;

        return $this;
    }

}

