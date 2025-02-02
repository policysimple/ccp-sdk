// source: payment/v1alpha1/payment_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var payment_v1alpha1_payment_pb = require('../../payment/v1alpha1/payment_pb.js');
goog.object.extend(proto, payment_v1alpha1_payment_pb);
goog.exportSymbol('proto.payment.v1alpha1.BlockChainSubscriptionRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.BlockChainSubscriptionResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CancelSubscriptionRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CancelSubscriptionResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ConsumeByProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ConsumeByProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateCardRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateCardResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateCustomerRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateCustomerResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateInvoiceRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateInvoiceResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreatePaymentRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreatePaymentResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateSubscriptionRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.CreateSubscriptionResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.DeleteCustomerRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.DeleteCustomerResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.DeletePaymentRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.DeletePaymentResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.DeleteProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.DeleteProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetBilingMonthRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetBilingMonthResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetCustomerRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetCustomerResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetOrganizationRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetOrganizationResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetPaymentRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetPaymentResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetPaymentsRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetPaymentsResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetSubscriptionByProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetSubscriptionByProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetSubscriptionRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.GetSubscriptionResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.HandleSubscriptionEventsRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.HandleSubscriptionEventsResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.InvoiceFilterRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.InvoiceFilterResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListCustomersRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListCustomersResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListPaymentRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListPaymentResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListProjectByIdRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListProjectByIdResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListProjectsRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListProjectsResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListSubscriptionItemsRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.ListSubscriptionItemsResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.SetDefaultPaymentMethodRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.SetDefaultPaymentMethodResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.StopProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.StopProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.UpdateProjectRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.UpdateProjectResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.UpdateSubscriptionRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.UpdateSubscriptionResponse', null, global);
goog.exportSymbol('proto.payment.v1alpha1.WebHookRequest', null, global);
goog.exportSymbol('proto.payment.v1alpha1.WebHookResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.StopProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.StopProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.StopProjectRequest.displayName = 'proto.payment.v1alpha1.StopProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.StopProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.StopProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.StopProjectResponse.displayName = 'proto.payment.v1alpha1.StopProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.InvoiceFilterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.InvoiceFilterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.InvoiceFilterRequest.displayName = 'proto.payment.v1alpha1.InvoiceFilterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.InvoiceFilterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.InvoiceFilterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.InvoiceFilterResponse.displayName = 'proto.payment.v1alpha1.InvoiceFilterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.DeleteCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.DeleteCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.DeleteCustomerRequest.displayName = 'proto.payment.v1alpha1.DeleteCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.DeleteCustomerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.DeleteCustomerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.DeleteCustomerResponse.displayName = 'proto.payment.v1alpha1.DeleteCustomerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetSubscriptionRequest.displayName = 'proto.payment.v1alpha1.GetSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetSubscriptionResponse.displayName = 'proto.payment.v1alpha1.GetSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetOrganizationRequest.displayName = 'proto.payment.v1alpha1.GetOrganizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetOrganizationResponse.displayName = 'proto.payment.v1alpha1.GetOrganizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetCustomerRequest.displayName = 'proto.payment.v1alpha1.GetCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetCustomerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetCustomerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetCustomerResponse.displayName = 'proto.payment.v1alpha1.GetCustomerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetBilingMonthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetBilingMonthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetBilingMonthRequest.displayName = 'proto.payment.v1alpha1.GetBilingMonthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetBilingMonthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetBilingMonthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetBilingMonthResponse.displayName = 'proto.payment.v1alpha1.GetBilingMonthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetPaymentsRequest.displayName = 'proto.payment.v1alpha1.GetPaymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetPaymentsResponse.displayName = 'proto.payment.v1alpha1.GetPaymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateSubscriptionRequest.displayName = 'proto.payment.v1alpha1.CreateSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateSubscriptionResponse.displayName = 'proto.payment.v1alpha1.CreateSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.UpdateSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.UpdateSubscriptionRequest.displayName = 'proto.payment.v1alpha1.UpdateSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.UpdateSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.UpdateSubscriptionResponse.displayName = 'proto.payment.v1alpha1.UpdateSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateProjectRequest.displayName = 'proto.payment.v1alpha1.CreateProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateProjectResponse.displayName = 'proto.payment.v1alpha1.CreateProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateInvoiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateInvoiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateInvoiceRequest.displayName = 'proto.payment.v1alpha1.CreateInvoiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateInvoiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateInvoiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateInvoiceResponse.displayName = 'proto.payment.v1alpha1.CreateInvoiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateCardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateCardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateCardRequest.displayName = 'proto.payment.v1alpha1.CreateCardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateCardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateCardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateCardResponse.displayName = 'proto.payment.v1alpha1.CreateCardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CancelSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CancelSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CancelSubscriptionRequest.displayName = 'proto.payment.v1alpha1.CancelSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CancelSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CancelSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CancelSubscriptionResponse.displayName = 'proto.payment.v1alpha1.CancelSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateCustomerRequest.displayName = 'proto.payment.v1alpha1.CreateCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreateCustomerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreateCustomerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreateCustomerResponse.displayName = 'proto.payment.v1alpha1.CreateCustomerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreatePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreatePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreatePaymentRequest.displayName = 'proto.payment.v1alpha1.CreatePaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.CreatePaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.CreatePaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.CreatePaymentResponse.displayName = 'proto.payment.v1alpha1.CreatePaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.DeletePaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.DeletePaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.DeletePaymentRequest.displayName = 'proto.payment.v1alpha1.DeletePaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.DeletePaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.DeletePaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.DeletePaymentResponse.displayName = 'proto.payment.v1alpha1.DeletePaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetPaymentRequest.displayName = 'proto.payment.v1alpha1.GetPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetPaymentResponse.displayName = 'proto.payment.v1alpha1.GetPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListPaymentRequest.displayName = 'proto.payment.v1alpha1.ListPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListPaymentResponse.displayName = 'proto.payment.v1alpha1.ListPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListSubscriptionItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListSubscriptionItemsRequest.displayName = 'proto.payment.v1alpha1.ListSubscriptionItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListSubscriptionItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListSubscriptionItemsResponse.displayName = 'proto.payment.v1alpha1.ListSubscriptionItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListProjectsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListProjectsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListProjectsRequest.displayName = 'proto.payment.v1alpha1.ListProjectsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListProjectsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payment.v1alpha1.ListProjectsResponse.repeatedFields_, null);
};
goog.inherits(proto.payment.v1alpha1.ListProjectsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListProjectsResponse.displayName = 'proto.payment.v1alpha1.ListProjectsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetProjectRequest.displayName = 'proto.payment.v1alpha1.GetProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetProjectResponse.displayName = 'proto.payment.v1alpha1.GetProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.DeleteProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.DeleteProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.DeleteProjectRequest.displayName = 'proto.payment.v1alpha1.DeleteProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.DeleteProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.DeleteProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.DeleteProjectResponse.displayName = 'proto.payment.v1alpha1.DeleteProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.SetDefaultPaymentMethodRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.displayName = 'proto.payment.v1alpha1.SetDefaultPaymentMethodRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.SetDefaultPaymentMethodResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.displayName = 'proto.payment.v1alpha1.SetDefaultPaymentMethodResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ConsumeByProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ConsumeByProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ConsumeByProjectRequest.displayName = 'proto.payment.v1alpha1.ConsumeByProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ConsumeByProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ConsumeByProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ConsumeByProjectResponse.displayName = 'proto.payment.v1alpha1.ConsumeByProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.BlockChainSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.BlockChainSubscriptionRequest.displayName = 'proto.payment.v1alpha1.BlockChainSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.BlockChainSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.BlockChainSubscriptionResponse.displayName = 'proto.payment.v1alpha1.BlockChainSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListCustomersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListCustomersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListCustomersRequest.displayName = 'proto.payment.v1alpha1.ListCustomersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListCustomersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payment.v1alpha1.ListCustomersResponse.repeatedFields_, null);
};
goog.inherits(proto.payment.v1alpha1.ListCustomersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListCustomersResponse.displayName = 'proto.payment.v1alpha1.ListCustomersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.UpdateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.UpdateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.UpdateProjectRequest.displayName = 'proto.payment.v1alpha1.UpdateProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.UpdateProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.UpdateProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.UpdateProjectResponse.displayName = 'proto.payment.v1alpha1.UpdateProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.WebHookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.WebHookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.WebHookRequest.displayName = 'proto.payment.v1alpha1.WebHookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.WebHookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.WebHookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.WebHookResponse.displayName = 'proto.payment.v1alpha1.WebHookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListProjectByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListProjectByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListProjectByIdRequest.displayName = 'proto.payment.v1alpha1.ListProjectByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.ListProjectByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.ListProjectByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.ListProjectByIdResponse.displayName = 'proto.payment.v1alpha1.ListProjectByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.displayName = 'proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.displayName = 'proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetSubscriptionByProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetSubscriptionByProjectRequest.displayName = 'proto.payment.v1alpha1.GetSubscriptionByProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.GetSubscriptionByProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.GetSubscriptionByProjectResponse.displayName = 'proto.payment.v1alpha1.GetSubscriptionByProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.HandleSubscriptionEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.HandleSubscriptionEventsRequest.displayName = 'proto.payment.v1alpha1.HandleSubscriptionEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payment.v1alpha1.HandleSubscriptionEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payment.v1alpha1.HandleSubscriptionEventsResponse.displayName = 'proto.payment.v1alpha1.HandleSubscriptionEventsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.StopProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.StopProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.StopProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.StopProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.StopProjectRequest}
 */
proto.payment.v1alpha1.StopProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.StopProjectRequest;
  return proto.payment.v1alpha1.StopProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.StopProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.StopProjectRequest}
 */
proto.payment.v1alpha1.StopProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.StopProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.StopProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.StopProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.StopProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.StopProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.StopProjectRequest} returns this
 */
proto.payment.v1alpha1.StopProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.StopProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.StopProjectRequest} returns this
 */
proto.payment.v1alpha1.StopProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.StopProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.StopProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.StopProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.StopProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.StopProjectResponse}
 */
proto.payment.v1alpha1.StopProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.StopProjectResponse;
  return proto.payment.v1alpha1.StopProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.StopProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.StopProjectResponse}
 */
proto.payment.v1alpha1.StopProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.StopProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.StopProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.StopProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.StopProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.StopProjectResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.StopProjectResponse} returns this
 */
proto.payment.v1alpha1.StopProjectResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.InvoiceFilterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.InvoiceFilterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.InvoiceFilterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoiceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    year: jspb.Message.getFieldWithDefault(msg, 3, ""),
    month: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    cpu: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    ram: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    pipeline: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    customerList: (f = msg.getCustomerList()) && payment_v1alpha1_payment_pb.CustomerList.toObject(includeInstance, f),
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.InvoiceFilterRequest;
  return proto.payment.v1alpha1.InvoiceFilterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.InvoiceFilterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonth(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpu(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRam(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPipeline(value);
      break;
    case 10:
      var value = new payment_v1alpha1_payment_pb.CustomerList;
      reader.readMessage(value,payment_v1alpha1_payment_pb.CustomerList.deserializeBinaryFromReader);
      msg.setCustomerList(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.InvoiceFilterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.InvoiceFilterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.InvoiceFilterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoiceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getYear();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMonth();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCpu();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getRam();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getPipeline();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getCustomerList();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      payment_v1alpha1_payment_pb.CustomerList.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string invoice_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getInvoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setInvoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string year = 3;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getYear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string month = 4;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getMonth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setMonth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string customer_id = 5;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string project_id = 6;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional double cpu = 7;
 * @return {number}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getCpu = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setCpu = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double ram = 8;
 * @return {number}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getRam = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setRam = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double pipeline = 9;
 * @return {number}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getPipeline = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setPipeline = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional CustomerList customer_list = 10;
 * @return {?proto.payment.v1alpha1.CustomerList}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getCustomerList = function() {
  return /** @type{?proto.payment.v1alpha1.CustomerList} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.CustomerList, 10));
};


/**
 * @param {?proto.payment.v1alpha1.CustomerList|undefined} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
*/
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setCustomerList = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.clearCustomerList = function() {
  return this.setCustomerList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.hasCustomerList = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterRequest} returns this
 */
proto.payment.v1alpha1.InvoiceFilterRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.InvoiceFilterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.InvoiceFilterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.InvoiceFilterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && payment_v1alpha1_payment_pb.Customer.toObject(includeInstance, f),
    bilingList: (f = msg.getBilingList()) && payment_v1alpha1_payment_pb.BilingList.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.InvoiceFilterResponse;
  return proto.payment.v1alpha1.InvoiceFilterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.InvoiceFilterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Customer;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = new payment_v1alpha1_payment_pb.BilingList;
      reader.readMessage(value,payment_v1alpha1_payment_pb.BilingList.deserializeBinaryFromReader);
      msg.setBilingList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.InvoiceFilterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.InvoiceFilterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.InvoiceFilterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getBilingList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payment_v1alpha1_payment_pb.BilingList.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Customer customer = 1;
 * @return {?proto.payment.v1alpha1.Customer}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.getCustomer = function() {
  return /** @type{?proto.payment.v1alpha1.Customer} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Customer, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Customer|undefined} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse} returns this
*/
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse} returns this
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BilingList biling_list = 2;
 * @return {?proto.payment.v1alpha1.BilingList}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.getBilingList = function() {
  return /** @type{?proto.payment.v1alpha1.BilingList} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.BilingList, 2));
};


/**
 * @param {?proto.payment.v1alpha1.BilingList|undefined} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse} returns this
*/
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.setBilingList = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse} returns this
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.clearBilingList = function() {
  return this.setBilingList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.hasBilingList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.InvoiceFilterResponse} returns this
 */
proto.payment.v1alpha1.InvoiceFilterResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.DeleteCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.DeleteCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.DeleteCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.DeleteCustomerRequest}
 */
proto.payment.v1alpha1.DeleteCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.DeleteCustomerRequest;
  return proto.payment.v1alpha1.DeleteCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.DeleteCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.DeleteCustomerRequest}
 */
proto.payment.v1alpha1.DeleteCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.DeleteCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.DeleteCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.DeleteCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteCustomerRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteCustomerRequest} returns this
 */
proto.payment.v1alpha1.DeleteCustomerRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteCustomerRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteCustomerRequest} returns this
 */
proto.payment.v1alpha1.DeleteCustomerRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.DeleteCustomerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.DeleteCustomerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.DeleteCustomerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteCustomerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.DeleteCustomerResponse}
 */
proto.payment.v1alpha1.DeleteCustomerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.DeleteCustomerResponse;
  return proto.payment.v1alpha1.DeleteCustomerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.DeleteCustomerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.DeleteCustomerResponse}
 */
proto.payment.v1alpha1.DeleteCustomerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.DeleteCustomerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.DeleteCustomerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.DeleteCustomerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteCustomerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteCustomerResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteCustomerResponse} returns this
 */
proto.payment.v1alpha1.DeleteCustomerResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteCustomerResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteCustomerResponse} returns this
 */
proto.payment.v1alpha1.DeleteCustomerResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetSubscriptionRequest}
 */
proto.payment.v1alpha1.GetSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetSubscriptionRequest;
  return proto.payment.v1alpha1.GetSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetSubscriptionRequest}
 */
proto.payment.v1alpha1.GetSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetSubscriptionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.GetSubscriptionRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subscription_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetSubscriptionRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.GetSubscriptionRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscription: (f = msg.getSubscription()) && payment_v1alpha1_payment_pb.Subscription.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetSubscriptionResponse}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetSubscriptionResponse;
  return proto.payment.v1alpha1.GetSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetSubscriptionResponse}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Subscription;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Subscription subscription = 1;
 * @return {?proto.payment.v1alpha1.Subscription}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.getSubscription = function() {
  return /** @type{?proto.payment.v1alpha1.Subscription} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Subscription, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Subscription|undefined} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionResponse} returns this
*/
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.setSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.GetSubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetOrganizationRequest}
 */
proto.payment.v1alpha1.GetOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetOrganizationRequest;
  return proto.payment.v1alpha1.GetOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetOrganizationRequest}
 */
proto.payment.v1alpha1.GetOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetOrganizationRequest} returns this
 */
proto.payment.v1alpha1.GetOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && payment_v1alpha1_payment_pb.Customer.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetOrganizationResponse}
 */
proto.payment.v1alpha1.GetOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetOrganizationResponse;
  return proto.payment.v1alpha1.GetOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetOrganizationResponse}
 */
proto.payment.v1alpha1.GetOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Customer;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Customer customer = 1;
 * @return {?proto.payment.v1alpha1.Customer}
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.getCustomer = function() {
  return /** @type{?proto.payment.v1alpha1.Customer} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Customer, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Customer|undefined} value
 * @return {!proto.payment.v1alpha1.GetOrganizationResponse} returns this
*/
proto.payment.v1alpha1.GetOrganizationResponse.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetOrganizationResponse} returns this
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetOrganizationResponse} returns this
 */
proto.payment.v1alpha1.GetOrganizationResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetCustomerRequest}
 */
proto.payment.v1alpha1.GetCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetCustomerRequest;
  return proto.payment.v1alpha1.GetCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetCustomerRequest}
 */
proto.payment.v1alpha1.GetCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetCustomerRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetCustomerRequest} returns this
 */
proto.payment.v1alpha1.GetCustomerRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetCustomerRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetCustomerRequest} returns this
 */
proto.payment.v1alpha1.GetCustomerRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetCustomerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetCustomerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetCustomerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && payment_v1alpha1_payment_pb.Customer.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetCustomerResponse}
 */
proto.payment.v1alpha1.GetCustomerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetCustomerResponse;
  return proto.payment.v1alpha1.GetCustomerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetCustomerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetCustomerResponse}
 */
proto.payment.v1alpha1.GetCustomerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Customer;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetCustomerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetCustomerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetCustomerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Customer customer = 1;
 * @return {?proto.payment.v1alpha1.Customer}
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.getCustomer = function() {
  return /** @type{?proto.payment.v1alpha1.Customer} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Customer, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Customer|undefined} value
 * @return {!proto.payment.v1alpha1.GetCustomerResponse} returns this
*/
proto.payment.v1alpha1.GetCustomerResponse.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetCustomerResponse} returns this
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetCustomerResponse} returns this
 */
proto.payment.v1alpha1.GetCustomerResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetBilingMonthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetBilingMonthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetBilingMonthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetBilingMonthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    invoiceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetBilingMonthRequest}
 */
proto.payment.v1alpha1.GetBilingMonthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetBilingMonthRequest;
  return proto.payment.v1alpha1.GetBilingMonthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetBilingMonthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetBilingMonthRequest}
 */
proto.payment.v1alpha1.GetBilingMonthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetBilingMonthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetBilingMonthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetBilingMonthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetBilingMonthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInvoiceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetBilingMonthRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetBilingMonthRequest} returns this
 */
proto.payment.v1alpha1.GetBilingMonthRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string invoice_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetBilingMonthRequest.prototype.getInvoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetBilingMonthRequest} returns this
 */
proto.payment.v1alpha1.GetBilingMonthRequest.prototype.setInvoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetBilingMonthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetBilingMonthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetBilingMonthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    biling: (f = msg.getBiling()) && payment_v1alpha1_payment_pb.Biling.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetBilingMonthResponse}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetBilingMonthResponse;
  return proto.payment.v1alpha1.GetBilingMonthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetBilingMonthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetBilingMonthResponse}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Biling;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Biling.deserializeBinaryFromReader);
      msg.setBiling(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetBilingMonthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetBilingMonthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetBilingMonthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBiling();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Biling.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Biling biling = 1;
 * @return {?proto.payment.v1alpha1.Biling}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.getBiling = function() {
  return /** @type{?proto.payment.v1alpha1.Biling} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Biling, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Biling|undefined} value
 * @return {!proto.payment.v1alpha1.GetBilingMonthResponse} returns this
*/
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.setBiling = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetBilingMonthResponse} returns this
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.clearBiling = function() {
  return this.setBiling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.hasBiling = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetBilingMonthResponse} returns this
 */
proto.payment.v1alpha1.GetBilingMonthResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetPaymentsRequest}
 */
proto.payment.v1alpha1.GetPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetPaymentsRequest;
  return proto.payment.v1alpha1.GetPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetPaymentsRequest}
 */
proto.payment.v1alpha1.GetPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentsRequest} returns this
 */
proto.payment.v1alpha1.GetPaymentsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentsRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentsRequest} returns this
 */
proto.payment.v1alpha1.GetPaymentsRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultCard: jspb.Message.getFieldWithDefault(msg, 1, ""),
    card: (f = msg.getCard()) && payment_v1alpha1_payment_pb.CardList.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetPaymentsResponse}
 */
proto.payment.v1alpha1.GetPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetPaymentsResponse;
  return proto.payment.v1alpha1.GetPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetPaymentsResponse}
 */
proto.payment.v1alpha1.GetPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultCard(value);
      break;
    case 2:
      var value = new payment_v1alpha1_payment_pb.CardList;
      reader.readMessage(value,payment_v1alpha1_payment_pb.CardList.deserializeBinaryFromReader);
      msg.setCard(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultCard();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payment_v1alpha1_payment_pb.CardList.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string default_card = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.getDefaultCard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentsResponse} returns this
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.setDefaultCard = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CardList card = 2;
 * @return {?proto.payment.v1alpha1.CardList}
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.getCard = function() {
  return /** @type{?proto.payment.v1alpha1.CardList} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.CardList, 2));
};


/**
 * @param {?proto.payment.v1alpha1.CardList|undefined} value
 * @return {!proto.payment.v1alpha1.GetPaymentsResponse} returns this
*/
proto.payment.v1alpha1.GetPaymentsResponse.prototype.setCard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetPaymentsResponse} returns this
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.hasCard = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentsResponse} returns this
 */
proto.payment.v1alpha1.GetPaymentsResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subscription: (f = msg.getSubscription()) && payment_v1alpha1_payment_pb.Subscription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateSubscriptionRequest}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateSubscriptionRequest;
  return proto.payment.v1alpha1.CreateSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateSubscriptionRequest}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new payment_v1alpha1_payment_pb.Subscription;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payment_v1alpha1_payment_pb.Subscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Subscription subscription = 3;
 * @return {?proto.payment.v1alpha1.Subscription}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.getSubscription = function() {
  return /** @type{?proto.payment.v1alpha1.Subscription} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Subscription, 3));
};


/**
 * @param {?proto.payment.v1alpha1.Subscription|undefined} value
 * @return {!proto.payment.v1alpha1.CreateSubscriptionRequest} returns this
*/
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.setSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.CreateSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.CreateSubscriptionRequest.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscription: (f = msg.getSubscription()) && payment_v1alpha1_payment_pb.Subscription.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateSubscriptionResponse}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateSubscriptionResponse;
  return proto.payment.v1alpha1.CreateSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateSubscriptionResponse}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Subscription;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Subscription subscription = 1;
 * @return {?proto.payment.v1alpha1.Subscription}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.getSubscription = function() {
  return /** @type{?proto.payment.v1alpha1.Subscription} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Subscription, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Subscription|undefined} value
 * @return {!proto.payment.v1alpha1.CreateSubscriptionResponse} returns this
*/
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.setSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.CreateSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.CreateSubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.UpdateSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.UpdateSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionRequest}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.UpdateSubscriptionRequest;
  return proto.payment.v1alpha1.UpdateSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.UpdateSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionRequest}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.UpdateSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.UpdateSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subscription_id = 3;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.UpdateSubscriptionRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.UpdateSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.UpdateSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionResponse}
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.UpdateSubscriptionResponse;
  return proto.payment.v1alpha1.UpdateSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.UpdateSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionResponse}
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.UpdateSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.UpdateSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.UpdateSubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: (f = msg.getProject()) && payment_v1alpha1_payment_pb.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateProjectRequest}
 */
proto.payment.v1alpha1.CreateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateProjectRequest;
  return proto.payment.v1alpha1.CreateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateProjectRequest}
 */
proto.payment.v1alpha1.CreateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new payment_v1alpha1_payment_pb.Project;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payment_v1alpha1_payment_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateProjectRequest} returns this
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateProjectRequest} returns this
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {?proto.payment.v1alpha1.Project}
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.payment.v1alpha1.Project} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Project, 3));
};


/**
 * @param {?proto.payment.v1alpha1.Project|undefined} value
 * @return {!proto.payment.v1alpha1.CreateProjectRequest} returns this
*/
proto.payment.v1alpha1.CreateProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.CreateProjectRequest} returns this
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.CreateProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateProjectResponse}
 */
proto.payment.v1alpha1.CreateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateProjectResponse;
  return proto.payment.v1alpha1.CreateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateProjectResponse}
 */
proto.payment.v1alpha1.CreateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateProjectResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateProjectResponse} returns this
 */
proto.payment.v1alpha1.CreateProjectResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateProjectResponse} returns this
 */
proto.payment.v1alpha1.CreateProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateInvoiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateInvoiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateInvoiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    invoiceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    year: jspb.Message.getFieldWithDefault(msg, 3, ""),
    month: jspb.Message.getFieldWithDefault(msg, 4, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateInvoiceRequest;
  return proto.payment.v1alpha1.CreateInvoiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateInvoiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonth(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateInvoiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateInvoiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateInvoiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInvoiceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getYear();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMonth();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest} returns this
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string invoice_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.getInvoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest} returns this
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.setInvoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string year = 3;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.getYear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest} returns this
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string month = 4;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.getMonth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest} returns this
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.setMonth = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string project_id = 5;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest} returns this
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceRequest} returns this
 */
proto.payment.v1alpha1.CreateInvoiceRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateInvoiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateInvoiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateInvoiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && payment_v1alpha1_payment_pb.Customer.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateInvoiceResponse}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateInvoiceResponse;
  return proto.payment.v1alpha1.CreateInvoiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateInvoiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateInvoiceResponse}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Customer;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateInvoiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateInvoiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateInvoiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Customer customer = 1;
 * @return {?proto.payment.v1alpha1.Customer}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.getCustomer = function() {
  return /** @type{?proto.payment.v1alpha1.Customer} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Customer, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Customer|undefined} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceResponse} returns this
*/
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.CreateInvoiceResponse} returns this
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateInvoiceResponse} returns this
 */
proto.payment.v1alpha1.CreateInvoiceResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateCardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateCardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    card: (f = msg.getCard()) && payment_v1alpha1_payment_pb.Card.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateCardRequest}
 */
proto.payment.v1alpha1.CreateCardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateCardRequest;
  return proto.payment.v1alpha1.CreateCardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateCardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateCardRequest}
 */
proto.payment.v1alpha1.CreateCardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 3:
      var value = new payment_v1alpha1_payment_pb.Card;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Card.deserializeBinaryFromReader);
      msg.setCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateCardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateCardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payment_v1alpha1_payment_pb.Card.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCardRequest} returns this
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Card card = 3;
 * @return {?proto.payment.v1alpha1.Card}
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.getCard = function() {
  return /** @type{?proto.payment.v1alpha1.Card} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Card, 3));
};


/**
 * @param {?proto.payment.v1alpha1.Card|undefined} value
 * @return {!proto.payment.v1alpha1.CreateCardRequest} returns this
*/
proto.payment.v1alpha1.CreateCardRequest.prototype.setCard = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.CreateCardRequest} returns this
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.CreateCardRequest.prototype.hasCard = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateCardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateCardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateCardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateCardResponse}
 */
proto.payment.v1alpha1.CreateCardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateCardResponse;
  return proto.payment.v1alpha1.CreateCardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateCardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateCardResponse}
 */
proto.payment.v1alpha1.CreateCardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateCardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateCardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateCardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCardResponse.prototype.getTokenId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCardResponse} returns this
 */
proto.payment.v1alpha1.CreateCardResponse.prototype.setTokenId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCardResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCardResponse} returns this
 */
proto.payment.v1alpha1.CreateCardResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CancelSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CancelSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CancelSubscriptionRequest}
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CancelSubscriptionRequest;
  return proto.payment.v1alpha1.CancelSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CancelSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CancelSubscriptionRequest}
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CancelSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CancelSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CancelSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subscription_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CancelSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.CancelSubscriptionRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CancelSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CancelSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CancelSubscriptionResponse}
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CancelSubscriptionResponse;
  return proto.payment.v1alpha1.CancelSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CancelSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CancelSubscriptionResponse}
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CancelSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CancelSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CancelSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.CancelSubscriptionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateCustomerRequest}
 */
proto.payment.v1alpha1.CreateCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateCustomerRequest;
  return proto.payment.v1alpha1.CreateCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateCustomerRequest}
 */
proto.payment.v1alpha1.CreateCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCustomerRequest} returns this
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCustomerRequest} returns this
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCustomerRequest} returns this
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string customer_id = 4;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCustomerRequest} returns this
 */
proto.payment.v1alpha1.CreateCustomerRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreateCustomerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreateCustomerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreateCustomerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCustomerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreateCustomerResponse}
 */
proto.payment.v1alpha1.CreateCustomerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreateCustomerResponse;
  return proto.payment.v1alpha1.CreateCustomerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreateCustomerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreateCustomerResponse}
 */
proto.payment.v1alpha1.CreateCustomerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreateCustomerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreateCustomerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreateCustomerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreateCustomerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCustomerResponse.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCustomerResponse} returns this
 */
proto.payment.v1alpha1.CreateCustomerResponse.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreateCustomerResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreateCustomerResponse} returns this
 */
proto.payment.v1alpha1.CreateCustomerResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreatePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreatePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreatePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payment: (f = msg.getPayment()) && payment_v1alpha1_payment_pb.Payment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreatePaymentRequest}
 */
proto.payment.v1alpha1.CreatePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreatePaymentRequest;
  return proto.payment.v1alpha1.CreatePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreatePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreatePaymentRequest}
 */
proto.payment.v1alpha1.CreatePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new payment_v1alpha1_payment_pb.Payment;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Payment.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreatePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreatePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreatePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payment_v1alpha1_payment_pb.Payment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreatePaymentRequest} returns this
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreatePaymentRequest} returns this
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Payment payment = 3;
 * @return {?proto.payment.v1alpha1.Payment}
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.getPayment = function() {
  return /** @type{?proto.payment.v1alpha1.Payment} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Payment, 3));
};


/**
 * @param {?proto.payment.v1alpha1.Payment|undefined} value
 * @return {!proto.payment.v1alpha1.CreatePaymentRequest} returns this
*/
proto.payment.v1alpha1.CreatePaymentRequest.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.CreatePaymentRequest} returns this
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.CreatePaymentRequest.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.CreatePaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.CreatePaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.CreatePaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreatePaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.CreatePaymentResponse}
 */
proto.payment.v1alpha1.CreatePaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.CreatePaymentResponse;
  return proto.payment.v1alpha1.CreatePaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.CreatePaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.CreatePaymentResponse}
 */
proto.payment.v1alpha1.CreatePaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.CreatePaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.CreatePaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.CreatePaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.CreatePaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string card_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.CreatePaymentResponse.prototype.getCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreatePaymentResponse} returns this
 */
proto.payment.v1alpha1.CreatePaymentResponse.prototype.setCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.payment.v1alpha1.CreatePaymentResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.CreatePaymentResponse} returns this
 */
proto.payment.v1alpha1.CreatePaymentResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.DeletePaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.DeletePaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeletePaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.DeletePaymentRequest}
 */
proto.payment.v1alpha1.DeletePaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.DeletePaymentRequest;
  return proto.payment.v1alpha1.DeletePaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.DeletePaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.DeletePaymentRequest}
 */
proto.payment.v1alpha1.DeletePaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.DeletePaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.DeletePaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeletePaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCardId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeletePaymentRequest} returns this
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string card_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.getCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeletePaymentRequest} returns this
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.setCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeletePaymentRequest} returns this
 */
proto.payment.v1alpha1.DeletePaymentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.DeletePaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.DeletePaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.DeletePaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeletePaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.DeletePaymentResponse}
 */
proto.payment.v1alpha1.DeletePaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.DeletePaymentResponse;
  return proto.payment.v1alpha1.DeletePaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.DeletePaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.DeletePaymentResponse}
 */
proto.payment.v1alpha1.DeletePaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.DeletePaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.DeletePaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.DeletePaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeletePaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.DeletePaymentResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeletePaymentResponse} returns this
 */
proto.payment.v1alpha1.DeletePaymentResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.DeletePaymentResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeletePaymentResponse} returns this
 */
proto.payment.v1alpha1.DeletePaymentResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cardId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetPaymentRequest}
 */
proto.payment.v1alpha1.GetPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetPaymentRequest;
  return proto.payment.v1alpha1.GetPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetPaymentRequest}
 */
proto.payment.v1alpha1.GetPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCardId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentRequest} returns this
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string card_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.getCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentRequest} returns this
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.setCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentRequest} returns this
 */
proto.payment.v1alpha1.GetPaymentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payment: (f = msg.getPayment()) && payment_v1alpha1_payment_pb.Payment.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetPaymentResponse}
 */
proto.payment.v1alpha1.GetPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetPaymentResponse;
  return proto.payment.v1alpha1.GetPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetPaymentResponse}
 */
proto.payment.v1alpha1.GetPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Payment;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Payment.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Payment.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Payment payment = 1;
 * @return {?proto.payment.v1alpha1.Payment}
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.getPayment = function() {
  return /** @type{?proto.payment.v1alpha1.Payment} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Payment, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Payment|undefined} value
 * @return {!proto.payment.v1alpha1.GetPaymentResponse} returns this
*/
proto.payment.v1alpha1.GetPaymentResponse.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetPaymentResponse} returns this
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetPaymentResponse} returns this
 */
proto.payment.v1alpha1.GetPaymentResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListPaymentRequest}
 */
proto.payment.v1alpha1.ListPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListPaymentRequest;
  return proto.payment.v1alpha1.ListPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListPaymentRequest}
 */
proto.payment.v1alpha1.ListPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ListPaymentRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListPaymentRequest} returns this
 */
proto.payment.v1alpha1.ListPaymentRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ListPaymentRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListPaymentRequest} returns this
 */
proto.payment.v1alpha1.ListPaymentRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentList: (f = msg.getPaymentList()) && payment_v1alpha1_payment_pb.PaymentList.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListPaymentResponse}
 */
proto.payment.v1alpha1.ListPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListPaymentResponse;
  return proto.payment.v1alpha1.ListPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListPaymentResponse}
 */
proto.payment.v1alpha1.ListPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.PaymentList;
      reader.readMessage(value,payment_v1alpha1_payment_pb.PaymentList.deserializeBinaryFromReader);
      msg.setPaymentList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.PaymentList.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PaymentList payment_list = 1;
 * @return {?proto.payment.v1alpha1.PaymentList}
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.getPaymentList = function() {
  return /** @type{?proto.payment.v1alpha1.PaymentList} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.PaymentList, 1));
};


/**
 * @param {?proto.payment.v1alpha1.PaymentList|undefined} value
 * @return {!proto.payment.v1alpha1.ListPaymentResponse} returns this
*/
proto.payment.v1alpha1.ListPaymentResponse.prototype.setPaymentList = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.ListPaymentResponse} returns this
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.clearPaymentList = function() {
  return this.setPaymentList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.hasPaymentList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListPaymentResponse} returns this
 */
proto.payment.v1alpha1.ListPaymentResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListSubscriptionItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListSubscriptionItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsRequest}
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListSubscriptionItemsRequest;
  return proto.payment.v1alpha1.ListSubscriptionItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListSubscriptionItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsRequest}
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListSubscriptionItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListSubscriptionItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsRequest} returns this
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subscription_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsRequest} returns this
 */
proto.payment.v1alpha1.ListSubscriptionItemsRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListSubscriptionItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customer: (f = msg.getCustomer()) && payment_v1alpha1_payment_pb.Customer.toObject(includeInstance, f),
    subscriptionItemsList: (f = msg.getSubscriptionItemsList()) && payment_v1alpha1_payment_pb.SubscriptionItemsList.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListSubscriptionItemsResponse;
  return proto.payment.v1alpha1.ListSubscriptionItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Customer;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 2:
      var value = new payment_v1alpha1_payment_pb.SubscriptionItemsList;
      reader.readMessage(value,payment_v1alpha1_payment_pb.SubscriptionItemsList.deserializeBinaryFromReader);
      msg.setSubscriptionItemsList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListSubscriptionItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getSubscriptionItemsList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payment_v1alpha1_payment_pb.SubscriptionItemsList.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Customer customer = 1;
 * @return {?proto.payment.v1alpha1.Customer}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.getCustomer = function() {
  return /** @type{?proto.payment.v1alpha1.Customer} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Customer, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Customer|undefined} value
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} returns this
*/
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} returns this
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SubscriptionItemsList subscription_items_list = 2;
 * @return {?proto.payment.v1alpha1.SubscriptionItemsList}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.getSubscriptionItemsList = function() {
  return /** @type{?proto.payment.v1alpha1.SubscriptionItemsList} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.SubscriptionItemsList, 2));
};


/**
 * @param {?proto.payment.v1alpha1.SubscriptionItemsList|undefined} value
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} returns this
*/
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.setSubscriptionItemsList = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} returns this
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.clearSubscriptionItemsList = function() {
  return this.setSubscriptionItemsList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.hasSubscriptionItemsList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListSubscriptionItemsResponse} returns this
 */
proto.payment.v1alpha1.ListSubscriptionItemsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListProjectsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListProjectsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListProjectsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListProjectsRequest}
 */
proto.payment.v1alpha1.ListProjectsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListProjectsRequest;
  return proto.payment.v1alpha1.ListProjectsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListProjectsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListProjectsRequest}
 */
proto.payment.v1alpha1.ListProjectsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListProjectsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListProjectsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListProjectsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ListProjectsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListProjectsRequest} returns this
 */
proto.payment.v1alpha1.ListProjectsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payment.v1alpha1.ListProjectsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListProjectsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListProjectsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    payment_v1alpha1_payment_pb.Project.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListProjectsResponse}
 */
proto.payment.v1alpha1.ListProjectsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListProjectsResponse;
  return proto.payment.v1alpha1.ListProjectsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListProjectsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListProjectsResponse}
 */
proto.payment.v1alpha1.ListProjectsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new payment_v1alpha1_payment_pb.Project;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListProjectsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListProjectsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      payment_v1alpha1_payment_pb.Project.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListProjectsResponse} returns this
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Project projects = 2;
 * @return {!Array<!proto.payment.v1alpha1.Project>}
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.payment.v1alpha1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, payment_v1alpha1_payment_pb.Project, 2));
};


/**
 * @param {!Array<!proto.payment.v1alpha1.Project>} value
 * @return {!proto.payment.v1alpha1.ListProjectsResponse} returns this
*/
proto.payment.v1alpha1.ListProjectsResponse.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.payment.v1alpha1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payment.v1alpha1.Project}
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.payment.v1alpha1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payment.v1alpha1.ListProjectsResponse} returns this
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListProjectsResponse} returns this
 */
proto.payment.v1alpha1.ListProjectsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetProjectRequest}
 */
proto.payment.v1alpha1.GetProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetProjectRequest;
  return proto.payment.v1alpha1.GetProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetProjectRequest}
 */
proto.payment.v1alpha1.GetProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectRequest} returns this
 */
proto.payment.v1alpha1.GetProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectRequest} returns this
 */
proto.payment.v1alpha1.GetProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && payment_v1alpha1_payment_pb.Project.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetProjectResponse}
 */
proto.payment.v1alpha1.GetProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetProjectResponse;
  return proto.payment.v1alpha1.GetProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetProjectResponse}
 */
proto.payment.v1alpha1.GetProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Project;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Project.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.payment.v1alpha1.Project}
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.getProject = function() {
  return /** @type{?proto.payment.v1alpha1.Project} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Project, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Project|undefined} value
 * @return {!proto.payment.v1alpha1.GetProjectResponse} returns this
*/
proto.payment.v1alpha1.GetProjectResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetProjectResponse} returns this
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectResponse} returns this
 */
proto.payment.v1alpha1.GetProjectResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.DeleteProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.DeleteProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.DeleteProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.DeleteProjectRequest}
 */
proto.payment.v1alpha1.DeleteProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.DeleteProjectRequest;
  return proto.payment.v1alpha1.DeleteProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.DeleteProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.DeleteProjectRequest}
 */
proto.payment.v1alpha1.DeleteProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.DeleteProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.DeleteProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.DeleteProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteProjectRequest} returns this
 */
proto.payment.v1alpha1.DeleteProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteProjectRequest} returns this
 */
proto.payment.v1alpha1.DeleteProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.DeleteProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.DeleteProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.DeleteProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.DeleteProjectResponse}
 */
proto.payment.v1alpha1.DeleteProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.DeleteProjectResponse;
  return proto.payment.v1alpha1.DeleteProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.DeleteProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.DeleteProjectResponse}
 */
proto.payment.v1alpha1.DeleteProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.DeleteProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.DeleteProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.DeleteProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.DeleteProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteProjectResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteProjectResponse} returns this
 */
proto.payment.v1alpha1.DeleteProjectResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.DeleteProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.DeleteProjectResponse} returns this
 */
proto.payment.v1alpha1.DeleteProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cardId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.SetDefaultPaymentMethodRequest;
  return proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCardId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCardId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest} returns this
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest} returns this
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string card_id = 3;
 * @return {string}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.getCardId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodRequest} returns this
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodRequest.prototype.setCardId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.SetDefaultPaymentMethodResponse;
  return proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse} returns this
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.SetDefaultPaymentMethodResponse} returns this
 */
proto.payment.v1alpha1.SetDefaultPaymentMethodResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ConsumeByProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ConsumeByProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    year: jspb.Message.getFieldWithDefault(msg, 2, ""),
    month: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ConsumeByProjectRequest}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ConsumeByProjectRequest;
  return proto.payment.v1alpha1.ConsumeByProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ConsumeByProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ConsumeByProjectRequest}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setYear(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ConsumeByProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ConsumeByProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getYear();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMonth();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ConsumeByProjectRequest} returns this
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string year = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.getYear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ConsumeByProjectRequest} returns this
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string month = 3;
 * @return {string}
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.getMonth = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ConsumeByProjectRequest} returns this
 */
proto.payment.v1alpha1.ConsumeByProjectRequest.prototype.setMonth = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ConsumeByProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ConsumeByProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectBillingList: (f = msg.getProjectBillingList()) && payment_v1alpha1_payment_pb.ProjectBillingList.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ConsumeByProjectResponse}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ConsumeByProjectResponse;
  return proto.payment.v1alpha1.ConsumeByProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ConsumeByProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ConsumeByProjectResponse}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.ProjectBillingList;
      reader.readMessage(value,payment_v1alpha1_payment_pb.ProjectBillingList.deserializeBinaryFromReader);
      msg.setProjectBillingList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ConsumeByProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ConsumeByProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectBillingList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.ProjectBillingList.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProjectBillingList project_billing_list = 1;
 * @return {?proto.payment.v1alpha1.ProjectBillingList}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.getProjectBillingList = function() {
  return /** @type{?proto.payment.v1alpha1.ProjectBillingList} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.ProjectBillingList, 1));
};


/**
 * @param {?proto.payment.v1alpha1.ProjectBillingList|undefined} value
 * @return {!proto.payment.v1alpha1.ConsumeByProjectResponse} returns this
*/
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.setProjectBillingList = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.ConsumeByProjectResponse} returns this
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.clearProjectBillingList = function() {
  return this.setProjectBillingList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.hasProjectBillingList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ConsumeByProjectResponse} returns this
 */
proto.payment.v1alpha1.ConsumeByProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.BlockChainSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockchain: (f = msg.getBlockchain()) && payment_v1alpha1_payment_pb.BlockChain.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionRequest}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.BlockChainSubscriptionRequest;
  return proto.payment.v1alpha1.BlockChainSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionRequest}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = new payment_v1alpha1_payment_pb.BlockChain;
      reader.readMessage(value,payment_v1alpha1_payment_pb.BlockChain.deserializeBinaryFromReader);
      msg.setBlockchain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.BlockChainSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockchain();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payment_v1alpha1_payment_pb.BlockChain.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BlockChain blockchain = 3;
 * @return {?proto.payment.v1alpha1.BlockChain}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.getBlockchain = function() {
  return /** @type{?proto.payment.v1alpha1.BlockChain} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.BlockChain, 3));
};


/**
 * @param {?proto.payment.v1alpha1.BlockChain|undefined} value
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} returns this
*/
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.setBlockchain = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.clearBlockchain = function() {
  return this.setBlockchain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.BlockChainSubscriptionRequest.prototype.hasBlockchain = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.BlockChainSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.BlockChainSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionResponse}
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.BlockChainSubscriptionResponse;
  return proto.payment.v1alpha1.BlockChainSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.BlockChainSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionResponse}
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.BlockChainSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.BlockChainSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.BlockChainSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.BlockChainSubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListCustomersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListCustomersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListCustomersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListCustomersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    empty: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListCustomersRequest}
 */
proto.payment.v1alpha1.ListCustomersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListCustomersRequest;
  return proto.payment.v1alpha1.ListCustomersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListCustomersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListCustomersRequest}
 */
proto.payment.v1alpha1.ListCustomersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmpty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListCustomersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListCustomersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListCustomersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListCustomersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmpty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string empty = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ListCustomersRequest.prototype.getEmpty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListCustomersRequest} returns this
 */
proto.payment.v1alpha1.ListCustomersRequest.prototype.setEmpty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payment.v1alpha1.ListCustomersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListCustomersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListCustomersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListCustomersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customersList: jspb.Message.toObjectList(msg.getCustomersList(),
    payment_v1alpha1_payment_pb.Customer.toObject, includeInstance),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListCustomersResponse}
 */
proto.payment.v1alpha1.ListCustomersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListCustomersResponse;
  return proto.payment.v1alpha1.ListCustomersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListCustomersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListCustomersResponse}
 */
proto.payment.v1alpha1.ListCustomersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Customer;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Customer.deserializeBinaryFromReader);
      msg.addCustomers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListCustomersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListCustomersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListCustomersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Customer customers = 1;
 * @return {!Array<!proto.payment.v1alpha1.Customer>}
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.getCustomersList = function() {
  return /** @type{!Array<!proto.payment.v1alpha1.Customer>} */ (
    jspb.Message.getRepeatedWrapperField(this, payment_v1alpha1_payment_pb.Customer, 1));
};


/**
 * @param {!Array<!proto.payment.v1alpha1.Customer>} value
 * @return {!proto.payment.v1alpha1.ListCustomersResponse} returns this
*/
proto.payment.v1alpha1.ListCustomersResponse.prototype.setCustomersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payment.v1alpha1.Customer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payment.v1alpha1.Customer}
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.addCustomers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payment.v1alpha1.Customer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payment.v1alpha1.ListCustomersResponse} returns this
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListCustomersResponse} returns this
 */
proto.payment.v1alpha1.ListCustomersResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.UpdateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.UpdateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    project: (f = msg.getProject()) && payment_v1alpha1_payment_pb.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.UpdateProjectRequest}
 */
proto.payment.v1alpha1.UpdateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.UpdateProjectRequest;
  return proto.payment.v1alpha1.UpdateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.UpdateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.UpdateProjectRequest}
 */
proto.payment.v1alpha1.UpdateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = new payment_v1alpha1_payment_pb.Project;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.UpdateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.UpdateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payment_v1alpha1_payment_pb.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateProjectRequest} returns this
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Project project = 2;
 * @return {?proto.payment.v1alpha1.Project}
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.payment.v1alpha1.Project} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Project, 2));
};


/**
 * @param {?proto.payment.v1alpha1.Project|undefined} value
 * @return {!proto.payment.v1alpha1.UpdateProjectRequest} returns this
*/
proto.payment.v1alpha1.UpdateProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.UpdateProjectRequest} returns this
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.UpdateProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.UpdateProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.UpdateProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.UpdateProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.UpdateProjectResponse}
 */
proto.payment.v1alpha1.UpdateProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.UpdateProjectResponse;
  return proto.payment.v1alpha1.UpdateProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.UpdateProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.UpdateProjectResponse}
 */
proto.payment.v1alpha1.UpdateProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.UpdateProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.UpdateProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.UpdateProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.UpdateProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateProjectResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateProjectResponse} returns this
 */
proto.payment.v1alpha1.UpdateProjectResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.UpdateProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.UpdateProjectResponse} returns this
 */
proto.payment.v1alpha1.UpdateProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.WebHookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.WebHookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.WebHookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.WebHookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.WebHookRequest}
 */
proto.payment.v1alpha1.WebHookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.WebHookRequest;
  return proto.payment.v1alpha1.WebHookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.WebHookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.WebHookRequest}
 */
proto.payment.v1alpha1.WebHookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.WebHookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.WebHookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.WebHookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.WebHookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.payment.v1alpha1.WebHookRequest.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.WebHookRequest} returns this
 */
proto.payment.v1alpha1.WebHookRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.WebHookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.WebHookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.WebHookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.WebHookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.WebHookResponse}
 */
proto.payment.v1alpha1.WebHookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.WebHookResponse;
  return proto.payment.v1alpha1.WebHookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.WebHookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.WebHookResponse}
 */
proto.payment.v1alpha1.WebHookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.WebHookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.WebHookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.WebHookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.WebHookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.payment.v1alpha1.WebHookResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.WebHookResponse} returns this
 */
proto.payment.v1alpha1.WebHookResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.WebHookResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.WebHookResponse} returns this
 */
proto.payment.v1alpha1.WebHookResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListProjectByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListProjectByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListProjectByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListProjectByIdRequest}
 */
proto.payment.v1alpha1.ListProjectByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListProjectByIdRequest;
  return proto.payment.v1alpha1.ListProjectByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListProjectByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListProjectByIdRequest}
 */
proto.payment.v1alpha1.ListProjectByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListProjectByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListProjectByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListProjectByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.ListProjectByIdRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListProjectByIdRequest} returns this
 */
proto.payment.v1alpha1.ListProjectByIdRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ListProjectByIdRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListProjectByIdRequest} returns this
 */
proto.payment.v1alpha1.ListProjectByIdRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.ListProjectByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.ListProjectByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && payment_v1alpha1_payment_pb.Project.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.ListProjectByIdResponse}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.ListProjectByIdResponse;
  return proto.payment.v1alpha1.ListProjectByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.ListProjectByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.ListProjectByIdResponse}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Project;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.ListProjectByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.ListProjectByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.ListProjectByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Project.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.payment.v1alpha1.Project}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.getProject = function() {
  return /** @type{?proto.payment.v1alpha1.Project} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Project, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Project|undefined} value
 * @return {!proto.payment.v1alpha1.ListProjectByIdResponse} returns this
*/
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.ListProjectByIdResponse} returns this
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.ListProjectByIdResponse} returns this
 */
proto.payment.v1alpha1.ListProjectByIdResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest;
  return proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string subscription_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string organization_id = 3;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string customer_id = 4;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest} returns this
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse;
  return proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse} returns this
 */
proto.payment.v1alpha1.GetProjectTrialEndSubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetSubscriptionByProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetSubscriptionByProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectRequest}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetSubscriptionByProjectRequest;
  return proto.payment.v1alpha1.GetSubscriptionByProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetSubscriptionByProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectRequest}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetSubscriptionByProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetSubscriptionByProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectRequest} returns this
 */
proto.payment.v1alpha1.GetSubscriptionByProjectRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.GetSubscriptionByProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && payment_v1alpha1_payment_pb.Project.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.GetSubscriptionByProjectResponse;
  return proto.payment.v1alpha1.GetSubscriptionByProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payment_v1alpha1_payment_pb.Project;
      reader.readMessage(value,payment_v1alpha1_payment_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.GetSubscriptionByProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payment_v1alpha1_payment_pb.Project.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.payment.v1alpha1.Project}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.getProject = function() {
  return /** @type{?proto.payment.v1alpha1.Project} */ (
    jspb.Message.getWrapperField(this, payment_v1alpha1_payment_pb.Project, 1));
};


/**
 * @param {?proto.payment.v1alpha1.Project|undefined} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse} returns this
*/
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse} returns this
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.GetSubscriptionByProjectResponse} returns this
 */
proto.payment.v1alpha1.GetSubscriptionByProjectResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.HandleSubscriptionEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriptionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    trailEndDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    eventType: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.HandleSubscriptionEventsRequest;
  return proto.payment.v1alpha1.HandleSubscriptionEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriptionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrailEndDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.HandleSubscriptionEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTrailEndDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string subscription_id = 1;
 * @return {string}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.getSubscriptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} returns this
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.setSubscriptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} returns this
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string trail_end_date = 3;
 * @return {string}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.getTrailEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} returns this
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.setTrailEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string event_type = 4;
 * @return {string}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsRequest} returns this
 */
proto.payment.v1alpha1.HandleSubscriptionEventsRequest.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payment.v1alpha1.HandleSubscriptionEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payment.v1alpha1.HandleSubscriptionEventsResponse;
  return proto.payment.v1alpha1.HandleSubscriptionEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payment.v1alpha1.HandleSubscriptionEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse} returns this
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payment.v1alpha1.HandleSubscriptionEventsResponse} returns this
 */
proto.payment.v1alpha1.HandleSubscriptionEventsResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.payment.v1alpha1);
