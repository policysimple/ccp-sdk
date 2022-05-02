// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: payment/v1alpha1/payment_api.proto

package io.cuemby.payment.v1alpha1;

public interface DeletePaymentRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:payment.v1alpha1.DeletePaymentRequest)
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
   * <code>int32 card_number = 4 [json_name = "cardNumber"];</code>
   * @return The cardNumber.
   */
  int getCardNumber();

  /**
   * <code>int32 cvv_number = 5 [json_name = "cvvNumber"];</code>
   * @return The cvvNumber.
   */
  int getCvvNumber();

  /**
   * <code>string expiry_date = 6 [json_name = "expiryDate"];</code>
   * @return The expiryDate.
   */
  java.lang.String getExpiryDate();
  /**
   * <code>string expiry_date = 6 [json_name = "expiryDate"];</code>
   * @return The bytes for expiryDate.
   */
  com.google.protobuf.ByteString
      getExpiryDateBytes();

  /**
   * <code>uint32 organization_id = 7 [json_name = "organizationId"];</code>
   * @return The organizationId.
   */
  int getOrganizationId();

  /**
   * <code>uint32 project_id = 8 [json_name = "projectId"];</code>
   * @return The projectId.
   */
  int getProjectId();

  /**
   * <code>string application_id = 9 [json_name = "applicationId"];</code>
   * @return The applicationId.
   */
  java.lang.String getApplicationId();
  /**
   * <code>string application_id = 9 [json_name = "applicationId"];</code>
   * @return The bytes for applicationId.
   */
  com.google.protobuf.ByteString
      getApplicationIdBytes();
}
