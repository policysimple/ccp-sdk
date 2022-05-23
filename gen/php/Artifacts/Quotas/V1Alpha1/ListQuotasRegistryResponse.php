<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/quotas/v1alpha1/registry_quotas_api.proto

namespace Artifacts\Quotas\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.quotas.v1alpha1.ListQuotasRegistryResponse</code>
 */
class ListQuotasRegistryResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .artifacts.quotas.v1alpha1.QuotasRegistry quotas_registry = 1 [json_name = "quotasRegistry"];</code>
     */
    private $quotas_registry;
    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     */
    protected $status = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Artifacts\Quotas\V1Alpha1\QuotasRegistry[]|\Google\Protobuf\Internal\RepeatedField $quotas_registry
     *     @type string $status
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Quotas\V1Alpha1\RegistryQuotasApi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .artifacts.quotas.v1alpha1.QuotasRegistry quotas_registry = 1 [json_name = "quotasRegistry"];</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getQuotasRegistry()
    {
        return $this->quotas_registry;
    }

    /**
     * Generated from protobuf field <code>repeated .artifacts.quotas.v1alpha1.QuotasRegistry quotas_registry = 1 [json_name = "quotasRegistry"];</code>
     * @param \Artifacts\Quotas\V1Alpha1\QuotasRegistry[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setQuotasRegistry($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Artifacts\Quotas\V1Alpha1\QuotasRegistry::class);
        $this->quotas_registry = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>string status = 2 [json_name = "status"];</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->status = $var;

        return $this;
    }

}
