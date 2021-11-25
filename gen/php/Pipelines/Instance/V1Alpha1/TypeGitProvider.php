<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/instance/v1alpha1/instance.proto

namespace Pipelines\Instance\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * TypeGitProvider ...
 *
 * Generated from protobuf message <code>pipelines.instance.v1alpha1.TypeGitProvider</code>
 */
class TypeGitProvider extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string ssh_url = 1 [json_name = "sshUrl"];</code>
     */
    protected $ssh_url = '';
    /**
     * Generated from protobuf field <code>string branch = 2 [json_name = "branch"];</code>
     */
    protected $branch = '';
    /**
     * Generated from protobuf field <code>string ssh_private_key = 3 [json_name = "sshPrivateKey"];</code>
     */
    protected $ssh_private_key = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $ssh_url
     *     @type string $branch
     *     @type string $ssh_private_key
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Instance\V1Alpha1\Instance::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string ssh_url = 1 [json_name = "sshUrl"];</code>
     * @return string
     */
    public function getSshUrl()
    {
        return $this->ssh_url;
    }

    /**
     * Generated from protobuf field <code>string ssh_url = 1 [json_name = "sshUrl"];</code>
     * @param string $var
     * @return $this
     */
    public function setSshUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->ssh_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string branch = 2 [json_name = "branch"];</code>
     * @return string
     */
    public function getBranch()
    {
        return $this->branch;
    }

    /**
     * Generated from protobuf field <code>string branch = 2 [json_name = "branch"];</code>
     * @param string $var
     * @return $this
     */
    public function setBranch($var)
    {
        GPBUtil::checkString($var, True);
        $this->branch = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string ssh_private_key = 3 [json_name = "sshPrivateKey"];</code>
     * @return string
     */
    public function getSshPrivateKey()
    {
        return $this->ssh_private_key;
    }

    /**
     * Generated from protobuf field <code>string ssh_private_key = 3 [json_name = "sshPrivateKey"];</code>
     * @param string $var
     * @return $this
     */
    public function setSshPrivateKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->ssh_private_key = $var;

        return $this;
    }

}

