<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: accounts/v1alpha1/accounts.proto

namespace Accounts\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>accounts.v1alpha1.LogsResponse</code>
 */
class LogsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Log logs = 1 [json_name = "logs"];</code>
     */
    private $logs;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Accounts\V1alpha1\Log[]|\Google\Protobuf\Internal\RepeatedField $logs
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Accounts\V1Alpha1\Accounts::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Log logs = 1 [json_name = "logs"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLogs()
    {
        return $this->logs;
    }

    /**
     * Generated from protobuf field <code>repeated .accounts.v1alpha1.Log logs = 1 [json_name = "logs"];</code>
     * @param \Accounts\V1alpha1\Log[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLogs($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Accounts\V1alpha1\Log::class);
        $this->logs = $arr;

        return $this;
    }

}
