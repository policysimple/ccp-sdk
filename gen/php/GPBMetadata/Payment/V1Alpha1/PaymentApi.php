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
�0
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
status (	Rstatus"8
DeleteCustomerRequest
customer_id (	R
customerId"0
DeleteCustomerResponse
status (	Rstatus">
GetSuscriptionRequest%
suscription_id (	RsuscriptionId"q
GetSuscriptionResponse?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"H
GetOrganizationPaymentRequest\'
organization_id (RorganizationId"p
GetOrganizationPaymentResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"5
GetCustomerRequest
customer_id (	R
customerId"e
GetCustomerResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"6
GetBilingMonthRequest

invoice_id (	R	invoiceId"h
GetBilingMonthResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"5
GetPaymentsRequest
customer_id (	R
customerId"b
GetPaymentsResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"|
UpdateSuscriptionRequest
customer_id (	R
customerId?
suscription (2.payment.v1alpha1.SuscriptionRsuscription"t
UpdateSuscriptionResponse?
suscription (2.payment.v1alpha1.SuscriptionRsuscription
status (	Rstatus"|
CreateSuscriptionRequest
customer_id (	R
customerId?
suscription (2.payment.v1alpha1.SuscriptionRsuscription"k
CreateSuscriptionResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"l
CreateProjectRequest
customer_id (	R
customerId3
project (2.payment.v1alpha1.ProjectRproject"/
CreateProjectResponse
status (	Rstatus"M
CreateInvoiceRequest

invoice_id (	R	invoiceId
status (	Rstatus"g
CreateInvoiceResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"?
CreateCardRequest*
card (2.payment.v1alpha1.CardRcard"G
CreateCardResponse
token_id (	RtokenId
status (	Rstatus"A
CancelSuscriptionRequest%
suscription_id (	RsuscriptionId"3
CancelSuscriptionResponse
status (	Rstatus"O
CreateCustomerRequest6
customer (2.payment.v1alpha1.CustomerRcustomer"Q
CreateCustomerResponse
customer_id (	R
customerId
status (	Rstatus"l
CreatePaymentRequest
customer_id (	R
customerId3
payment (2.payment.v1alpha1.PaymentRpayment"H
CreatePaymentResponse
card_id (	RcardId
status (	Rstatus"l
UpdatePaymentRequest
customer_id (	R
customerId3
payment (2.payment.v1alpha1.PaymentRpayment"d
UpdatePaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"P
DeletePaymentRequest
card_id (	RcardId
customer_id (	R
customerId"/
DeletePaymentResponse
status (	Rstatus"M
GetPaymentRequest
card_id (	RcardId
customer_id (	R
customerId"a
GetPaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus"5
ListPaymentRequest
customer_id (	R
customerId"b
ListPaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
status (	Rstatus">
ListProjectsRequest\'
organization_id (RorganizationId"p
ListProjectsResponse@
project_list (2.payment.v1alpha1.ProjectListRprojectList
status (	Rstatus"2
GetProjectRequest

project_id (	R	projectId"�
GetProjectResponse6
customer (2.payment.v1alpha1.CustomerRcustomer3
invoice (2.payment.v1alpha1.InvoiceRinvoice0
biling (2.payment.v1alpha1.BilingRbiling3
project (2.payment.v1alpha1.ProjectRproject
status (	Rstatus2�
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

