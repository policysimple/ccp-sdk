<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: source/v1alpha1/source.proto

namespace Source\V1alpha1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>source.v1alpha1.GetRepositoryResponse</code>
 */
class GetRepositoryResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.source.v1alpha1.DetailRepository repository = 1 [json_name = "repository"];</code>
     */
    protected $repository = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Source\V1alpha1\DetailRepository $repository
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Source\V1Alpha1\Source::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.source.v1alpha1.DetailRepository repository = 1 [json_name = "repository"];</code>
     * @return \Source\V1alpha1\DetailRepository|null
     */
    public function getRepository()
    {
        return $this->repository;
    }

    public function hasRepository()
    {
        return isset($this->repository);
    }

    public function clearRepository()
    {
        unset($this->repository);
    }

    /**
     * Generated from protobuf field <code>.source.v1alpha1.DetailRepository repository = 1 [json_name = "repository"];</code>
     * @param \Source\V1alpha1\DetailRepository $var
     * @return $this
     */
    public function setRepository($var)
    {
        GPBUtil::checkMessage($var, \Source\V1alpha1\DetailRepository::class);
        $this->repository = $var;

        return $this;
    }

}
