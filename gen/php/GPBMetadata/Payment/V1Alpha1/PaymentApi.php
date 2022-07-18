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
�5
"payment/v1alpha1/payment_api.protopayment.v1alpha1"�
InvoiceFilterRequest
year (	Ryear
month (	RmonthC
customer_list (2.payment.v1alpha1.CustomerListRcustomerList\'
organization_id (RorganizationId"�
InvoiceFilterResponseC
customer_list (2.payment.v1alpha1.CustomerListRcustomerList@
invoice_list (2.payment.v1alpha1.InvoiceListRinvoiceList=
biling_list (2.payment.v1alpha1.BilingListR
bilingList
status (	Rstatus"a
DeleteCustomerRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"0
DeleteCustomerResponse
status (	Rstatus"g
GetSuscriptionRequest\'
organization_id (RorganizationId%
suscription_id (	RsuscriptionId"q
GetSuscriptionResponse?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"H
GetOrganizationPaymentRequest\'
organization_id (RorganizationId"p
GetOrganizationPaymentResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"^
GetCustomerRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"e
GetCustomerResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"_
GetBilingMonthRequest\'
organization_id (RorganizationId

invoice_id (	R	invoiceId"h
GetBilingMonthResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"^
GetPaymentsRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"b
GetPaymentsResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"�
UpdateSuscriptionRequest\'
organization_id (RorganizationId
customer_id (	R
customerId?
suscription (2.payment.v1alpha1.SuscriptionRsuscription"t
UpdateSuscriptionResponse?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"�
CreateSuscriptionRequest\'
organization_id (RorganizationId
customer_id (	R
customerId?
suscription (2.payment.v1alpha1.SuscriptionRsuscription"k
CreateSuscriptionResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"�
CreateProjectRequest\'
organization_id (RorganizationId
customer_id (	R
customerId3
project (2.payment.v1alpha1.ProjectRproject"/
CreateProjectResponse
status (	Rstatus"M
CreateInvoiceRequest

invoice_id (	R	invoiceId
status (	Rstatus"g
CreateInvoiceResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"�
CreateCardRequest\'
organization_id (RorganizationId
customer_id (	R
customerId*
card (2.payment.v1alpha1.CardRcard"G
CreateCardResponse
token_id (	RtokenId
status (	Rstatus"�
CancelSuscriptionRequest\'
organization_id (RorganizationId
customer_id (	R
customerId%
suscription_id (	RsuscriptionId"3
CancelSuscriptionResponse
status (	Rstatus"O
CreateCustomerRequest6
customer (2.payment.v1alpha1.CustomerRcustomer"Q
CreateCustomerResponse
customer_id (	R
customerId
status (	Rstatus"�
CreatePaymentRequest\'
organization_id (RorganizationId
customer_id (	R
customerId3
payment (2.payment.v1alpha1.PaymentRpayment"H
CreatePaymentResponse
card_id (	RcardId
status (	Rstatus"l
UpdatePaymentRequest
customer_id (	R
customerId3
payment (2.payment.v1alpha1.PaymentRpayment"d
UpdatePaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"y
DeletePaymentRequest\'
organization_id (RorganizationId
customer_id (	R
customerId
card_id (	RcardId"/
DeletePaymentResponse
status (	Rstatus"v
GetPaymentRequest\'
organization_id (RorganizationId
customer_id (	R
customerId
card_id (	RcardId"a
GetPaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"^
ListPaymentRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"o
ListPaymentResponse@
payment_list (2.payment.v1alpha1.PaymentListRpaymentList
status (	Rstatus"_
ListProjectsRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"p
ListProjectsResponse@
project_list (2.payment.v1alpha1.ProjectListRprojectList
status (	Rstatus"[
GetProjectRequest\'
organization_id (	RorganizationId

project_id (	R	projectId"d
GetProjectResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus2�
PaymentAPIServicen
CreateSuscription*.payment.v1alpha1.CreateSuscriptionRequest+.payment.v1alpha1.CreateSuscriptionResponse" Y

CreateCard#.payment.v1alpha1.CreateCardRequest$.payment.v1alpha1.CreateCardResponse" n
UpdateSuscription*.payment.v1alpha1.UpdateSuscriptionRequest+.payment.v1alpha1.UpdateSuscriptionResponse" n
CancelSuscription*.payment.v1alpha1.CancelSuscriptionRequest+.payment.v1alpha1.CancelSuscriptionResponse" }
GetOrganizationPayment/.payment.v1alpha1.GetOrganizationPaymentRequest0.payment.v1alpha1.GetOrganizationPaymentResponse" e
GetSuscription\'.payment.v1alpha1.GetSuscriptionRequest(.payment.v1alpha1.GetSuscriptionResponse" e
CreateCustomer\'.payment.v1alpha1.CreateCustomerRequest(.payment.v1alpha1.CreateCustomerResponse" e
DeleteCustomer\'.payment.v1alpha1.DeleteCustomerRequest(.payment.v1alpha1.DeleteCustomerResponse" Y

GetPayment#.payment.v1alpha1.GetPaymentRequest$.payment.v1alpha1.GetPaymentResponse" \\
GetCustomer$.payment.v1alpha1.GetCustomerRequest%.payment.v1alpha1.GetCustomerResponse" e
GetBilingMonth\'.payment.v1alpha1.GetBilingMonthRequest(.payment.v1alpha1.GetBilingMonthResponse" \\
GetPayments$.payment.v1alpha1.GetPaymentsRequest%.payment.v1alpha1.GetPaymentsResponse" b
CreatePayment&.payment.v1alpha1.CreatePaymentRequest\'.payment.v1alpha1.CreatePaymentResponse" b
CreateProject&.payment.v1alpha1.CreateProjectRequest\'.payment.v1alpha1.CreateProjectResponse" b
UpdatePayment&.payment.v1alpha1.UpdatePaymentRequest\'.payment.v1alpha1.UpdatePaymentResponse" b
DeletePayment&.payment.v1alpha1.DeletePaymentRequest\'.payment.v1alpha1.DeletePaymentResponse" \\
ListPayment$.payment.v1alpha1.ListPaymentRequest%.payment.v1alpha1.ListPaymentResponse" _
ListProjects%.payment.v1alpha1.ListProjectsRequest&.payment.v1alpha1.ListProjectsResponse" Y

GetProject#.payment.v1alpha1.GetProjectRequest$.payment.v1alpha1.GetProjectResponse" b
CreateInvoice&.payment.v1alpha1.CreateInvoiceRequest\'.payment.v1alpha1.CreateInvoiceResponse" b
InvoiceFilter&.payment.v1alpha1.InvoiceFilterRequest\'.payment.v1alpha1.InvoiceFilterResponse" B8Z6github.com/cuemby/ccp-payment-service/payment/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

