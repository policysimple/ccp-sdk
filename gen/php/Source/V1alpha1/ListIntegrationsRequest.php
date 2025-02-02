<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.ListIntegrationsRequest</code>
 */
class ListIntegrationsRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string organization_uid = 3 [json_name = "organizationUid"];</code>
     */
    protected $organization_uid = '';
    /**
     * Generated from protobuf field <code>string user_id = 2 [json_name = "userId"];</code>
     */
    protected $user_id = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $organization_uid
     *     @type string $user_id
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string organization_uid = 3 [json_name = "organizationUid"];</code>
     * @return string
     */
    public function getOrganizationUid()
    {
        return $this->organization_uid;
    }

    /**
     * Generated from protobuf field <code>string organization_uid = 3 [json_name = "organizationUid"];</code>
     * @param string $var
     * @return $this
     */
    public function setOrganizationUid($var)
    {
        GPBUtil::checkString($var, True);
        $this->organization_uid = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string user_id = 2 [json_name = "userId"];</code>
     * @return string
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Generated from protobuf field <code>string user_id = 2 [json_name = "userId"];</code>
     * @param string $var
     * @return $this
     */
    public function setUserId($var)
    {
        GPBUtil::checkString($var, True);
        $this->user_id = $var;

        return $this;
    }

}

