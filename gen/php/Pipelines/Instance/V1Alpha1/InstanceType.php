<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pipelines/instance/v1alpha1/instance.proto

namespace Pipelines\Instance\V1Alpha1;

use UnexpectedValueException;

/**
 * InstanceType ...
 *
 * Protobuf type <code>pipelines.instance.v1alpha1.InstanceType</code>
 */
class InstanceType
{
    /**
     * Generated from protobuf enum <code>INSTANCE_TYPE_UNSPECIFIED = 0;</code>
     */
    const INSTANCE_TYPE_UNSPECIFIED = 0;
    /**
     * Generated from protobuf enum <code>INSTANCE_TYPE_GIT = 1;</code>
     */
    const INSTANCE_TYPE_GIT = 1;

    private static $valueToName = [
        self::INSTANCE_TYPE_UNSPECIFIED => 'INSTANCE_TYPE_UNSPECIFIED',
        self::INSTANCE_TYPE_GIT => 'INSTANCE_TYPE_GIT',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

