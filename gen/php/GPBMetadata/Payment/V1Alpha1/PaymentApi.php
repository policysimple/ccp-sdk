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
�@
"payment/v1alpha1/payment_api.protopayment.v1alpha1"\\
StopProjectRequest\'
organization_id (RorganizationId

project_id (R	projectId"-
StopProjectResponse
status (	Rstatus"�
InvoiceFilterRequest\'
organization_id (RorganizationId

invoice_id (	R	invoiceId
year (	Ryear
month (	Rmonth
customer_id (	R
customerId

project_id (	R	projectId
cpu (Rcpu
ram (Rram
pipeline	 (RpipelineC
customer_list
 (2.payment.v1alpha1.CustomerListRcustomerList"�
InvoiceFilterResponse6
customer (2.payment.v1alpha1.CustomerRcustomer=
biling_list (2.payment.v1alpha1.BilingListR
bilingList
status (	Rstatus"a
DeleteCustomerRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"h
DeleteCustomerResponse
status (	Rstatus6
customer (2.payment.v1alpha1.CustomerRcustomer"j
GetSubscriptionRequest\'
organization_id (RorganizationId\'
subscription_id (	RsubscriptionId"u
GetSubscriptionResponseB
subscription (2.payment.v1alpha1.SubscriptionRsubscription
status (	Rstatus"A
GetOrganizationRequest\'
organization_id (RorganizationId"i
GetOrganizationResponse6
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

invoice_id (	R	invoiceId"b
GetBilingMonthResponse0
biling (2.payment.v1alpha1.BilingRbiling
status (	Rstatus"^
GetPaymentsRequest\'
organization_id (RorganizationId
customer_id (	R
customerId"]
GetPaymentsResponse.
card (2.payment.v1alpha1.CardListRcard
status (	Rstatus"�
CreateSubscriptionRequest\'
organization_id (RorganizationId
customer_id (	R
customerIdB
subscription (2.payment.v1alpha1.SubscriptionRsubscription"x
CreateSubscriptionResponseB
subscription (2.payment.v1alpha1.SubscriptionRsubscription
status (	Rstatus"m
UpdateSubscriptionRequest\'
subscription_id (	RsubscriptionId\'
organization_id (RorganizationId"l
UpdateSubscriptionResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"t
CreateProjectRequest\'
organization_id (RorganizationId3
project (2.payment.v1alpha1.ProjectRproject"/
CreateProjectResponse
status (	Rstatus"�
CreateInvoiceRequest\'
organization_id (RorganizationId

invoice_id (	R	invoiceId
year (	Ryear
month (	Rmonth
customer_id (	R
customerId

project_id (	R	projectId
status (	Rstatus"g
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
CancelSubscriptionRequest\'
organization_id (RorganizationId
customer_id (	R
customerId\'
subscription_id (	RsubscriptionId"4
CancelSubscriptionResponse
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
status (	Rstatus"y
DeletePaymentRequest\'
organization_id (RorganizationId
customer_id (	R
customerId
card_id (	RcardId"L
DeletePaymentResponse
status (	Rstatus
	msg_error (	RmsgError"v
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
customerId"m
ListPaymentResponse@
payment_list (2.payment.v1alpha1.PaymentListRpaymentList
error (	Rerror"p
ListSubscriptionItemsRequest\'
organization_id (RorganizationId\'
subscription_id (	RsubscriptionId"�
ListSubscriptionItemsResponse6
customer (2.payment.v1alpha1.CustomerRcustomer_
subscription_items_list (2\'.payment.v1alpha1.SubscriptionItemsListRsubscriptionItemsList
status (	Rstatus">
ListProjectsRequest\'
organization_id (RorganizationId"f
ListProjectsResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"[
GetProjectRequest\'
organization_id (	RorganizationId

project_id (	R	projectId"d
GetProjectResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"�
DeleteProjectRequest\'
organization_id (RorganizationId

project_id (	R	projectId3
project (2.payment.v1alpha1.ProjectRproject"/
DeleteProjectResponse
status (	Rstatus"b
SetDefaultPaymentMethodRequest\'
organization_id (RorganizationId
card_id (	RcardId"I
SetDefaultPaymentMethodResponse
msg (	Rmsg
error (	Rerror"l
ConsumeByProjectRequest\'
organization_id (RorganizationId
year (	Ryear
month (	Rmonth"�
ConsumeByProjectResponseV
project_billing_list (2$.payment.v1alpha1.ProjectBillingListRprojectBillingList
status (	Rstatus2�
PaymentAPIServicee
CreateCustomer\'.payment.v1alpha1.CreateCustomerRequest(.payment.v1alpha1.CreateCustomerResponse" q
CreateSubscription+.payment.v1alpha1.CreateSubscriptionRequest,.payment.v1alpha1.CreateSubscriptionResponse" b
CreatePayment&.payment.v1alpha1.CreatePaymentRequest\'.payment.v1alpha1.CreatePaymentResponse" Y

CreateCard#.payment.v1alpha1.CreateCardRequest$.payment.v1alpha1.CreateCardResponse" b
CreateProject&.payment.v1alpha1.CreateProjectRequest\'.payment.v1alpha1.CreateProjectResponse" b
CreateInvoice&.payment.v1alpha1.CreateInvoiceRequest\'.payment.v1alpha1.CreateInvoiceResponse" h
GetOrganization(.payment.v1alpha1.GetOrganizationRequest).payment.v1alpha1.GetOrganizationResponse" h
GetSubscription(.payment.v1alpha1.GetSubscriptionRequest).payment.v1alpha1.GetSubscriptionResponse" Y

GetPayment#.payment.v1alpha1.GetPaymentRequest$.payment.v1alpha1.GetPaymentResponse" \\
GetCustomer$.payment.v1alpha1.GetCustomerRequest%.payment.v1alpha1.GetCustomerResponse" e
GetBilingMonth\'.payment.v1alpha1.GetBilingMonthRequest(.payment.v1alpha1.GetBilingMonthResponse" \\
GetPayments$.payment.v1alpha1.GetPaymentsRequest%.payment.v1alpha1.GetPaymentsResponse" _
ListProjects%.payment.v1alpha1.ListProjectsRequest&.payment.v1alpha1.ListProjectsResponse" \\
ListPayment$.payment.v1alpha1.ListPaymentRequest%.payment.v1alpha1.ListPaymentResponse" z
ListSubscriptionItems..payment.v1alpha1.ListSubscriptionItemsRequest/.payment.v1alpha1.ListSubscriptionItemsResponse" q
UpdateSubscription+.payment.v1alpha1.UpdateSubscriptionRequest,.payment.v1alpha1.UpdateSubscriptionResponse" �
SetDefaultPaymentMethod0.payment.v1alpha1.SetDefaultPaymentMethodRequest1.payment.v1alpha1.SetDefaultPaymentMethodResponse" b
DeleteProject&.payment.v1alpha1.DeleteProjectRequest\'.payment.v1alpha1.DeleteProjectResponse" b
DeletePayment&.payment.v1alpha1.DeletePaymentRequest\'.payment.v1alpha1.DeletePaymentResponse" q
CancelSubscription+.payment.v1alpha1.CancelSubscriptionRequest,.payment.v1alpha1.CancelSubscriptionResponse" e
DeleteCustomer\'.payment.v1alpha1.DeleteCustomerRequest(.payment.v1alpha1.DeleteCustomerResponse" b
InvoiceFilter&.payment.v1alpha1.InvoiceFilterRequest\'.payment.v1alpha1.InvoiceFilterResponse" k
ConsumeByProject).payment.v1alpha1.ConsumeByProjectRequest*.payment.v1alpha1.ConsumeByProjectResponse" \\
StopProject$.payment.v1alpha1.StopProjectRequest%.payment.v1alpha1.StopProjectResponse" B8Z6github.com/cuemby/ccp-payment-service/payment/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

