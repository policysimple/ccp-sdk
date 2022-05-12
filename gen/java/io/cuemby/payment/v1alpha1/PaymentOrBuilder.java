// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: payment/v1alpha1/payment.proto

package io.cuemby.payment.v1alpha1;

public interface PaymentOrBuilder extends
    // @@protoc_insertion_point(interface_extends:payment.v1alpha1.Payment)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  java.lang.String getId();
  /**
   * <code>string id = 1 [json_name = "id"];</code>
   * @return The bytes for id.
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <code>string card_holder_name = 2 [json_name = "cardHolderName"];</code>
   * @return The cardHolderName.
   */
  java.lang.String getCardHolderName();
  /**
   * <code>string card_holder_name = 2 [json_name = "cardHolderName"];</code>
   * @return The bytes for cardHolderName.
   */
  com.google.protobuf.ByteString
      getCardHolderNameBytes();

  /**
   * <code>string card_type = 3 [json_name = "cardType"];</code>
   * @return The cardType.
   */
  java.lang.String getCardType();
  /**
   * <code>string card_type = 3 [json_name = "cardType"];</code>
   * @return The bytes for cardType.
   */
  com.google.protobuf.ByteString
      getCardTypeBytes();

  /**
   * <code>string card_number = 4 [json_name = "cardNumber"];</code>
   * @return The cardNumber.
   */
  java.lang.String getCardNumber();
  /**
   * <code>string card_number = 4 [json_name = "cardNumber"];</code>
   * @return The bytes for cardNumber.
   */
  com.google.protobuf.ByteString
      getCardNumberBytes();

  /**
   * <code>string cvv_number = 5 [json_name = "cvvNumber"];</code>
   * @return The cvvNumber.
   */
  java.lang.String getCvvNumber();
  /**
   * <code>string cvv_number = 5 [json_name = "cvvNumber"];</code>
   * @return The bytes for cvvNumber.
   */
  com.google.protobuf.ByteString
      getCvvNumberBytes();

  /**
   * <code>string exp_year = 6 [json_name = "expYear"];</code>
   * @return The expYear.
   */
  java.lang.String getExpYear();
  /**
   * <code>string exp_year = 6 [json_name = "expYear"];</code>
   * @return The bytes for expYear.
   */
  com.google.protobuf.ByteString
      getExpYearBytes();

  /**
   * <code>string exp_month = 7 [json_name = "expMonth"];</code>
   * @return The expMonth.
   */
  java.lang.String getExpMonth();
  /**
   * <code>string exp_month = 7 [json_name = "expMonth"];</code>
   * @return The bytes for expMonth.
   */
  com.google.protobuf.ByteString
      getExpMonthBytes();

  /**
   * <code>uint32 organization_id = 8 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  int getOrganizationId();

  /**
   * <code>uint32 project_id = 9 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  int getProjectId();

  /**
   * <code>string application_id = 10 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  java.lang.String getApplicationId();
  /**
   * <code>string application_id = 10 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  com.google.protobuf.ByteString
      getApplicationIdBytes();

  /**
   * <code>string suscription_id = 11 [json_name = "suscriptionId"];</code>
   * @return The suscriptionId.
   */
  java.lang.String getSuscriptionId();
  /**
   * <code>string suscription_id = 11 [json_name = "suscriptionId"];</code>
   * @return The bytes for suscriptionId.
   */
  com.google.protobuf.ByteString
      getSuscriptionIdBytes();
}
