<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: artifacts/quotas/v1alpha1/registry_quotas.proto

namespace Artifacts\Quotas\V1Alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>artifacts.quotas.v1alpha1.HarborQuotas</code>
 */
class HarborQuotas extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>uint32 storage_used = 1 [json_name = "storageUsed"];</code>
     */
    protected $storage_used = 0;
    /**
     * Generated from protobuf field <code>uint32 storage_limit = 2 [json_name = "storageLimit"];</code>
     */
    protected $storage_limit = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $storage_used
     *     @type int $storage_limit
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Artifacts\Quotas\V1Alpha1\RegistryQuotas::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>uint32 storage_used = 1 [json_name = "storageUsed"];</code>
     * @return int
     */
    public function getStorageUsed()
    {
        return $this->storage_used;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_used = 1 [json_name = "storageUsed"];</code>
     * @param int $var
     * @return $this
     */
    public function setStorageUsed($var)
    {
        GPBUtil::checkUint32($var);
        $this->storage_used = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_limit = 2 [json_name = "storageLimit"];</code>
     * @return int
     */
    public function getStorageLimit()
    {
        return $this->storage_limit;
    }

    /**
     * Generated from protobuf field <code>uint32 storage_limit = 2 [json_name = "storageLimit"];</code>
     * @param int $var
     * @return $this
     */
    public function setStorageLimit($var)
    {
        GPBUtil::checkUint32($var);
        $this->storage_limit = $var;

        return $this;
    }

}
