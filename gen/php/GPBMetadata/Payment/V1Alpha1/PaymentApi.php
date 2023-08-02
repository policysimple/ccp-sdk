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
        \GPBMetadata\Google\Protobuf\GPBEmpty::initOnce();
        \GPBMetadata\Payment\V1Alpha1\Payment::initOnce();
        $pool->internalAddGeneratedFile(
            '
ėJ
"payment/v1alpha1/payment_api.protopayment.v1alpha1payment/v1alpha1/payment.proto"\\
StopProjectRequest\'
organization_id (	RorganizationId

project_id (	R	projectId"-
StopProjectResponse
status (	Rstatus"Ķ
InvoiceFilterRequest

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
 (2.payment.v1alpha1.CustomerListRcustomerList\'
organization_id (	RorganizationId"¦
InvoiceFilterResponse6
customer (2.payment.v1alpha1.CustomerRcustomer=
biling_list (2.payment.v1alpha1.BilingListR
bilingList
status (	Rstatus"a
DeleteCustomerRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId"F
DeleteCustomerResponse
status (	Rstatus
error (	Rerror"j
GetSubscriptionRequest\'
organization_id (	RorganizationId\'
subscription_id (	RsubscriptionId"s
GetSubscriptionResponseB
subscription (2.payment.v1alpha1.SubscriptionRsubscription
error (	Rerror"A
GetOrganizationRequest\'
organization_id (	RorganizationId"g
GetOrganizationResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
error (	Rerror"^
GetCustomerRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId"c
GetCustomerResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
error (	Rerror"_
GetBilingMonthRequest\'
organization_id (	RorganizationId

invoice_id (	R	invoiceId"`
GetBilingMonthResponse0
biling (2.payment.v1alpha1.BilingRbiling
error (	Rerror"^
GetPaymentsRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId"~
GetPaymentsResponse!
default_card (	RdefaultCard.
card (2.payment.v1alpha1.CardListRcard
error (	Rerror"©
CreateSubscriptionRequest\'
organization_id (	RorganizationId
customer_id (	R
customerIdB
subscription (2.payment.v1alpha1.SubscriptionRsubscription"v
CreateSubscriptionResponseB
subscription (2.payment.v1alpha1.SubscriptionRsubscription
error (	Rerror"
UpdateSubscriptionRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId\'
subscription_id (	RsubscriptionId"J
UpdateSubscriptionResponse
status (	Rstatus
error (	Rerror"
CreateProjectRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId3
project (2.payment.v1alpha1.ProjectRproject"E
CreateProjectResponse
status (	Rstatus
error (	Rerror"æ
CreateInvoiceRequest\'
organization_id (	RorganizationId

invoice_id (	R	invoiceId
year (	Ryear
month (	Rmonth

project_id (	R	projectId
status (	Rstatus"g
CreateInvoiceResponse6
customer (2.payment.v1alpha1.CustomerRcustomer
status (	Rstatus"h
CreateCardRequest\'
organization_id (	RorganizationId*
card (2.payment.v1alpha1.CardRcard"G
CreateCardResponse
token_id (	RtokenId
status (	Rstatus"m
CancelSubscriptionRequest\'
organization_id (	RorganizationId\'
subscription_id (	RsubscriptionId"4
CancelSubscriptionResponse
status (	Rstatus"
CreateCustomerRequest\'
organization_id (	RorganizationId
name (	Rname
email (	Remail
customer_id (	R
customerId"O
CreateCustomerResponse
customer_id (	R
customerId
error (	Rerror"
CreatePaymentRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId3
payment (2.payment.v1alpha1.PaymentRpayment"H
CreatePaymentResponse
card_id (	RcardId
status (	Rstatus"y
DeletePaymentRequest\'
organization_id (	RorganizationId
card_id (	RcardId
customer_id (	R
customerId"E
DeletePaymentResponse
status (	Rstatus
error (	Rerror"v
GetPaymentRequest\'
organization_id (	RorganizationId
card_id (	RcardId
customer_id (	R
customerId"_
GetPaymentResponse3
payment (2.payment.v1alpha1.PaymentRpayment
error (	Rerror"^
ListPaymentRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId"m
ListPaymentResponse@
payment_list (2.payment.v1alpha1.PaymentListRpaymentList
error (	Rerror"p
ListSubscriptionItemsRequest\'
organization_id (	RorganizationId\'
subscription_id (	RsubscriptionId"Š
ListSubscriptionItemsResponse6
customer (2.payment.v1alpha1.CustomerRcustomer_
subscription_items_list (2\'.payment.v1alpha1.SubscriptionItemsListRsubscriptionItemsList
status (	Rstatus">
ListProjectsRequest\'
organization_id (	RorganizationId"
ListProjectsResponse
customer_id (	R
customerId5
projects (2.payment.v1alpha1.ProjectRprojects
status (	Rstatus"[
GetProjectRequest\'
organization_id (	RorganizationId

project_id (	R	projectId"a
GetProjectResponse3
project (2.payment.v1alpha1.ProjectRproject
status (	Rstatus"^
DeleteProjectRequest\'
organization_id (	RorganizationId

project_id (	R	projectId"E
DeleteProjectResponse
status (	Rstatus
error (	Rerror"
SetDefaultPaymentMethodRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId
card_id (	RcardId"O
SetDefaultPaymentMethodResponse
status (	Rstatus
error (	Rerror"l
ConsumeByProjectRequest\'
organization_id (	RorganizationId
year (	Ryear
month (	Rmonth"
ConsumeByProjectResponseV
project_billing_list (2$.payment.v1alpha1.ProjectBillingListRprojectBillingList
error (	Rerror"§
BlockChainSubscriptionRequest\'
organization_id (	RorganizationId
customer_id (	R
customerId<

blockchain (2.payment.v1alpha1.BlockChainR
blockchain"N
BlockChainSubscriptionResponse
status (	Rstatus
error (	Rerror",
ListCustomersRequest
empty (	Rempty"g
ListCustomersResponse8
	customers (2.payment.v1alpha1.CustomerR	customers
error (	Rerror"t
UpdateProjectRequest\'
organization_id (	RorganizationId3
project (2.payment.v1alpha1.ProjectRproject"E
UpdateProjectResponse
status (	Rstatus
error (	Rerror"Ē
WebHookRequest\'
organization_id (	RorganizationId

event_type (	R	eventType
event_id (	ReventId

event_date (	R	eventDate3
webhook (2.payment.v1alpha1.WebhookRwebhook"\\
WebHookResponse3
webhook (2.payment.v1alpha1.WebhookRwebhook
error (	Rerror2į
PaymentAPIServicee
CreateCustomer\'.payment.v1alpha1.CreateCustomerRequest(.payment.v1alpha1.CreateCustomerResponse" q
CreateSubscription+.payment.v1alpha1.CreateSubscriptionRequest,.payment.v1alpha1.CreateSubscriptionResponse" b
CreatePayment&.payment.v1alpha1.CreatePaymentRequest\'.payment.v1alpha1.CreatePaymentResponse" Y

CreateCard#.payment.v1alpha1.CreateCardRequest$.payment.v1alpha1.CreateCardResponse" b
CreateInvoice&.payment.v1alpha1.CreateInvoiceRequest\'.payment.v1alpha1.CreateInvoiceResponse" h
GetOrganization(.payment.v1alpha1.GetOrganizationRequest).payment.v1alpha1.GetOrganizationResponse" h
GetSubscription(.payment.v1alpha1.GetSubscriptionRequest).payment.v1alpha1.GetSubscriptionResponse" Y

GetPayment#.payment.v1alpha1.GetPaymentRequest$.payment.v1alpha1.GetPaymentResponse" \\
GetCustomer$.payment.v1alpha1.GetCustomerRequest%.payment.v1alpha1.GetCustomerResponse" e
GetBilingMonth\'.payment.v1alpha1.GetBilingMonthRequest(.payment.v1alpha1.GetBilingMonthResponse" \\
GetPayments$.payment.v1alpha1.GetPaymentsRequest%.payment.v1alpha1.GetPaymentsResponse" _
ListProjects%.payment.v1alpha1.ListProjectsRequest&.payment.v1alpha1.ListProjectsResponse" \\
ListPayment$.payment.v1alpha1.ListPaymentRequest%.payment.v1alpha1.ListPaymentResponse" z
ListSubscriptionItems..payment.v1alpha1.ListSubscriptionItemsRequest/.payment.v1alpha1.ListSubscriptionItemsResponse" b
ListCustomers&.payment.v1alpha1.ListCustomersRequest\'.payment.v1alpha1.ListCustomersResponse" q
UpdateSubscription+.payment.v1alpha1.UpdateSubscriptionRequest,.payment.v1alpha1.UpdateSubscriptionResponse" 
SetDefaultPaymentMethod0.payment.v1alpha1.SetDefaultPaymentMethodRequest1.payment.v1alpha1.SetDefaultPaymentMethodResponse" b
DeleteProject&.payment.v1alpha1.DeleteProjectRequest\'.payment.v1alpha1.DeleteProjectResponse" b
DeletePayment&.payment.v1alpha1.DeletePaymentRequest\'.payment.v1alpha1.DeletePaymentResponse" q
CancelSubscription+.payment.v1alpha1.CancelSubscriptionRequest,.payment.v1alpha1.CancelSubscriptionResponse" e
DeleteCustomer\'.payment.v1alpha1.DeleteCustomerRequest(.payment.v1alpha1.DeleteCustomerResponse" b
InvoiceFilter&.payment.v1alpha1.InvoiceFilterRequest\'.payment.v1alpha1.InvoiceFilterResponse" k
ConsumeByProject).payment.v1alpha1.ConsumeByProjectRequest*.payment.v1alpha1.ConsumeByProjectResponse" b
CreateProject&.payment.v1alpha1.CreateProjectRequest\'.payment.v1alpha1.CreateProjectResponse" b
UpdateProject&.payment.v1alpha1.UpdateProjectRequest\'.payment.v1alpha1.UpdateProjectResponse" \\
StopProject$.payment.v1alpha1.StopProjectRequest%.payment.v1alpha1.StopProjectResponse" }
BlockChainSubscription/.payment.v1alpha1.BlockChainSubscriptionRequest0.payment.v1alpha1.BlockChainSubscriptionResponse" P
WebHook .payment.v1alpha1.WebHookRequest!.payment.v1alpha1.WebHookResponse" B8Z6github.com/cuemby/ccp-payment-service/payment/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

