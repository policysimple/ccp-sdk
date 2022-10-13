<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payment/v1alpha1/payment.proto

namespace GPBMetadata\Payment\V1Alpha1;

class Payment
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
payment/v1alpha1/payment.protopayment.v1alpha1"�
Customer
id (	Rid
customer_id (	R
customerId\'
organization_id (RorganizationId
name (	Rname
email (	Remail2
defaultpaymentmethod (	RdefaultpaymentmethodB
subscription (2.payment.v1alpha1.SubscriptionRsubscription9
payments (2.payment.v1alpha1.PaymentListRpayments3
invoice	 (2.payment.v1alpha1.InvoiceRinvoice0
biling
 (2.payment.v1alpha1.BilingRbiling5
projects (2.payment.v1alpha1.ProjectRprojects"�
Project
id (	Rid

project_id (	R	projectId
name (	Rname
image (	Rimage 
description (	Rdescription

created_at (	R	createdAt

updated_at (	R	updatedAt
status (Rstatus!
is_suspended	 (RisSuspended"�
Subscription
id (	Rid\'
subscription_id (	RsubscriptionId0
subscription_item_id (	RsubscriptionItemId

invoice_id (	R	invoiceId
price (	Rprice
	price_cpu (	RpriceCpu
price_bytes (	R
priceBytes%
price_pipeline (	RpricePipeline
currency	 (	Rcurrency
interval
 (	Rinterval"�
Payment
card_id (	RcardId
default (Rdefault
enabled (Renabled
alias (	Ralias

token_card (	R	tokenCard*
card (2.payment.v1alpha1.CardRcard"�
Card
id (	Rid
number (	Rnumber
card_holder (	R
cardHolder
expmonth (	Rexpmonth
expyear (	Rexpyear
cvc (	Rcvc"�
Invoice
id (	Rid
amount (Ramount
period (	Rperiod
	statuspay (	R	statuspay
date (	Rdate
product (	Rproduct"�
Biling
id (	Rid

invoice_id (	R	invoiceId!
account_name (	RaccountName

totalusage (R
totalusage
cpu (Rcpu
ram (Rram
pipeline (Rpipeline
month (	Rmonth
year	 (	Ryear
amount
 (Ramount
period (	Rperiod
	statuspay (	R	statuspay
date (	Rdate
product (	Rproduct"�
SubscriptionItems
id (	Rid0
subscription_item_id (	RsubscriptionItemId
price_id (	RpriceId

product_id (	R	productId"R
SubscriptionItemsList9
items (2#.payment.v1alpha1.SubscriptionItemsRitems">
InvoiceList/
items (2.payment.v1alpha1.InvoiceRitems"@
CustomerList0
items (2.payment.v1alpha1.CustomerRitems"<

BilingList.
items (2.payment.v1alpha1.BilingRitems"H
SubscriptionList4
items (2.payment.v1alpha1.SubscriptionRitems"8
CardList,
items (2.payment.v1alpha1.CardRitems">
PaymentList/
items (2.payment.v1alpha1.PaymentRitems">
ProjectList/
items (2.payment.v1alpha1.ProjectRitemsB8Z6github.com/cuemby/ccp-payment-service/payment/v1alpha1bproto3'
        , true);

        static::$is_initialized = true;
    }
}

