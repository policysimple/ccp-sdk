<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.CreateIntegrationRequest</code>
 */
class CreateIntegrationRequest extends \Google\Protobuf\Internal\Message
{
    /**
     *string id = 1;
     *
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     */
    protected $organization_id = 0;
    /**
     * Generated from protobuf field <code>string name = 3 [json_name = "name"];</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>.source.v1alpha1.Provider provider = 4 [json_name = "provider"];</code>
     */
    protected $provider = null;
    /**
     * Generated from protobuf field <code>map<string, string> data = 5 [json_name = "data"];</code>
     */
    private $data;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $organization_id
     *          string id = 1;
     *     @type string $name
     *     @type \Source\V1alpha1\Provider $provider
     *     @type array|\Google\Protobuf\Internal\MapField $data
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     *string id = 1;
     *
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @return int
     */
    public function getOrganizationId()
    {
        return $this->organization_id;
    }

    /**
     *string id = 1;
     *
     * Generated from protobuf field <code>uint32 organization_id = 2 [json_name = "organizationId"];</code>
     * @param int $var
     * @return $this
     */
    public function setOrganizationId($var)
    {
        GPBUtil::checkUint32($var);
        $this->organization_id = $var;

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

    /**
     * Generated from protobuf field <code>.source.v1alpha1.Provider provider = 4 [json_name = "provider"];</code>
     * @return \Source\V1alpha1\Provider|null
     */
    public function getProvider()
    {
        return $this->provider;
    }

    public function hasProvider()
    {
        return isset($this->provider);
    }

    public function clearProvider()
    {
        unset($this->provider);
    }

    /**
     * Generated from protobuf field <code>.source.v1alpha1.Provider provider = 4 [json_name = "provider"];</code>
     * @param \Source\V1alpha1\Provider $var
     * @return $this
     */
    public function setProvider($var)
    {
        GPBUtil::checkMessage($var, \Source\V1alpha1\Provider::class);
        $this->provider = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> data = 5 [json_name = "data"];</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Generated from protobuf field <code>map<string, string> data = 5 [json_name = "data"];</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setData($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->data = $arr;

        return $this;
    }

}

