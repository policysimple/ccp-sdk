// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: payment/v1alpha1/payment_api.proto

package io.cuemby.payment.v1alpha1;

public interface ListPaymentResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:payment.v1alpha1.ListPaymentResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.payment.v1alpha1.PaymentList payment_list = 1 [json_name = "paymentList"];</code>
   * @return Whether the paymentList field is set.
   */
  boolean hasPaymentList();
  /**
   * <code>.payment.v1alpha1.PaymentList payment_list = 1 [json_name = "paymentList"];</code>
   * @return The paymentList.
   */
  io.cuemby.payment.v1alpha1.PaymentList getPaymentList();
  /**
   * <code>.payment.v1alpha1.PaymentList payment_list = 1 [json_name = "paymentList"];</code>
   */
  io.cuemby.payment.v1alpha1.PaymentListOrBuilder getPaymentListOrBuilder();

  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The status.
   */
  java.lang.String getStatus();
  /**
   * <code>string status = 2 [json_name = "status"];</code>
   * @return The bytes for status.
   */
  com.google.protobuf.ByteString
      getStatusBytes();
}