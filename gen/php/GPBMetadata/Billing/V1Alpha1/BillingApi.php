<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: billing/v1alpha1/billing_api.proto

namespace GPBMetadata\Billing\V1Alpha1;

class BillingApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Billing\V1Alpha1\Billing::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
"billing/v1alpha1/billing_api.protobilling.v1alpha1"=
ReadBillingRequest\'
organization_id (	RorganizationId"J
ReadBillingResponse3
billing (2.billing.v1alpha1.BillingRbilling2n
BillingService\\
ReadBilling$.billing.v1alpha1.ReadBillingRequest%.billing.v1alpha1.ReadBillingResponse" B7Z5github.com/cuemby/ccp-billing-service/billingv1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

