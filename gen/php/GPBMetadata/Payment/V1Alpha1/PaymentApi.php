<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment_api.proto

namespace GPBMetadata\Payment\V1Alpha1;

class PaymentApi
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Payment\V1Alpha1\Payment::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
"payment/v1alpha1/payment_api.protopayment.v1alpha1"i
DeleteCustomerRequest
id (	Rid
name (	Rname
email (	Remail
cancel (Rcancel"0
DeleteCustomerResponse
status (	Rstatus"\'
GetSuscriptionRequest
id (	Rid"q
GetSuscriptionResponse?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"s
UpdateSuscriptionRequest?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"t
UpdateSuscriptionResponse?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"s
CreateSuscriptionRequest?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"I
CreateSuscriptionResponse
status (	Rstatus
error (	Rerror"t
CancelSuscriptionRequest
id (	Rid
customer (	Rcustomer
price (	Rprice
cancel (Rcancel"3
CancelSuscriptionResponse
status (	Rstatus"g
CreateCustomerRequest6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"F
CreateCustomerResponse
status (	Rstatus
error (	Rerror"c
CreatePaymentRequest3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"d
CreatePaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"c
UpdatePaymentRequest3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"d
UpdatePaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"&
DeletePaymentRequest
id (	Rid"/
DeletePaymentResponse
status (	Rstatus"#
GetPaymentRequest
id (	Rid"a
GetPaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus";
ListPaymentRequest%
suscription_id (	RsuscriptionId"o
ListPaymentResponse@
payment_list (2.payment.v1alpha1.PaymentListRpaymentList
status (	Rstatus2�
PaymentAPIServicen
CreateSuscription*.payment.v1alpha1.CreateSuscriptionRequest+.payment.v1alpha1.CreateSuscriptionResponse" n
UpdateSuscription*.payment.v1alpha1.UpdateSuscriptionRequest+.payment.v1alpha1.UpdateSuscriptionResponse" n
CancelSuscription*.payment.v1alpha1.CancelSuscriptionRequest+.payment.v1alpha1.CancelSuscriptionResponse" e
GetSuscription\'.payment.v1alpha1.GetSuscriptionRequest(.payment.v1alpha1.GetSuscriptionResponse" e
CreateCustomer\'.payment.v1alpha1.CreateCustomerRequest(.payment.v1alpha1.CreateCustomerResponse" e
DeleteCustomer\'.payment.v1alpha1.DeleteCustomerRequest(.payment.v1alpha1.DeleteCustomerResponse" Y

GetPayment#.payment.v1alpha1.GetPaymentRequest$.payment.v1alpha1.GetPaymentResponse" b
CreatePayment&.payment.v1alpha1.CreatePaymentRequest\'.payment.v1alpha1.CreatePaymentResponse" b
UpdatePayment&.payment.v1alpha1.UpdatePaymentRequest\'.payment.v1alpha1.UpdatePaymentResponse" b
DeletePayment&.payment.v1alpha1.DeletePaymentRequest\'.payment.v1alpha1.DeletePaymentResponse" \\
ListPayment$.payment.v1alpha1.ListPaymentRequest%.payment.v1alpha1.ListPaymentResponse" B8Z6github.com/cuemby/ccp-payment-service/payment/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

