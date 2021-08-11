<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/environment/v1alpha1/environment.proto

namespace Pipelines\Environment\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Environment ...
 *
 * Generated from protobuf message <code>pipelines.environment.v1alpha1.Environment</code>
 */
class Environment extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string account_id = 1 [json_name = "accountId"];</code>
     */
    protected $account_id = '';
    /**
     * Generated from protobuf field <code>string team_id = 2 [json_name = "teamId"];</code>
     */
    protected $team_id = '';
    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
     */
    protected $name = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $account_id
     *     @type string $team_id
     *     @type string $name
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Pipelines\Environment\V1Alpha1\Environment::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string account_id = 1 [json_name = "accountId"];</code>
     * @return string
     */
    public function getAccountId()
    {
        return $this->account_id;
    }

    /**
     * Generated from protobuf field <code>string account_id = 1 [json_name = "accountId"];</code>
     * @param string $var
     * @return $this
     */
    public function setAccountId($var)
    {
        GPBUtil::checkString($var, True);
        $this->account_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string team_id = 2 [json_name = "teamId"];</code>
     * @return string
     */
    public function getTeamId()
    {
        return $this->team_id;
    }

    /**
     * Generated from protobuf field <code>string team_id = 2 [json_name = "teamId"];</code>
     * @param string $var
     * @return $this
     */
    public function setTeamId($var)
    {
        GPBUtil::checkString($var, True);
        $this->team_id = $var;

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

}
