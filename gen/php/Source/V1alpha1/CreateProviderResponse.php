<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.CreateProviderResponse</code>
 */
class CreateProviderResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     */
    protected $msg = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $msg
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     * @return string
     */
    public function getMsg()
    {
        return $this->msg;
    }

    /**
     * Generated from protobuf field <code>string msg = 1 [json_name = "msg"];</code>
     * @param string $var
     * @return $this
     */
    public function setMsg($var)
    {
        GPBUtil::checkString($var, True);
        $this->msg = $var;

        return $this;
    }

}

