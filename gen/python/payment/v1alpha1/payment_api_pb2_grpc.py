# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from payment.v1alpha1 import payment_api_pb2 as payment_dot_v1alpha1_dot_payment__api__pb2


class PaymentAPIServiceStub(object):
  """import "payment.proto";
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateSuscription = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreateSuscription',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateSuscriptionRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateSuscriptionResponse.FromString,
        )
    self.UpdateSuscription = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/UpdateSuscription',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdateSuscriptionRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdateSuscriptionResponse.FromString,
        )
    self.CancelSuscription = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CancelSuscription',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionResponse.FromString,
        )
    self.GetSuscription = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/GetSuscription',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetSuscriptionRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetSuscriptionResponse.FromString,
        )
    self.CreateCustomer = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreateCustomer',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCustomerRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCustomerResponse.FromString,
        )
    self.DeleteCustomer = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/DeleteCustomer',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteCustomerRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteCustomerResponse.FromString,
        )
    self.GetPayment = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/GetPayment',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentResponse.FromString,
        )
    self.CreatePayment = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreatePayment',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentResponse.FromString,
        )
    self.UpdatePayment = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/UpdatePayment',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdatePaymentRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdatePaymentResponse.FromString,
        )
    self.DeletePayment = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/DeletePayment',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeletePaymentRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeletePaymentResponse.FromString,
        )
    self.ListPayment = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/ListPayment',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListPaymentRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListPaymentResponse.FromString,
        )


class PaymentAPIServiceServicer(object):
  """import "payment.proto";
  """

  def CreateSuscription(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateSuscription(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CancelSuscription(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetSuscription(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateCustomer(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteCustomer(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetPayment(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreatePayment(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdatePayment(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeletePayment(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListPayment(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_PaymentAPIServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateSuscription': grpc.unary_unary_rpc_method_handler(
          servicer.CreateSuscription,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateSuscriptionRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateSuscriptionResponse.SerializeToString,
      ),
      'UpdateSuscription': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateSuscription,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdateSuscriptionRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdateSuscriptionResponse.SerializeToString,
      ),
      'CancelSuscription': grpc.unary_unary_rpc_method_handler(
          servicer.CancelSuscription,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionResponse.SerializeToString,
      ),
      'GetSuscription': grpc.unary_unary_rpc_method_handler(
          servicer.GetSuscription,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetSuscriptionRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetSuscriptionResponse.SerializeToString,
      ),
      'CreateCustomer': grpc.unary_unary_rpc_method_handler(
          servicer.CreateCustomer,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCustomerRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCustomerResponse.SerializeToString,
      ),
      'DeleteCustomer': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteCustomer,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteCustomerRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteCustomerResponse.SerializeToString,
      ),
      'GetPayment': grpc.unary_unary_rpc_method_handler(
          servicer.GetPayment,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentResponse.SerializeToString,
      ),
      'CreatePayment': grpc.unary_unary_rpc_method_handler(
          servicer.CreatePayment,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentResponse.SerializeToString,
      ),
      'UpdatePayment': grpc.unary_unary_rpc_method_handler(
          servicer.UpdatePayment,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdatePaymentRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.UpdatePaymentResponse.SerializeToString,
      ),
      'DeletePayment': grpc.unary_unary_rpc_method_handler(
          servicer.DeletePayment,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeletePaymentRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeletePaymentResponse.SerializeToString,
      ),
      'ListPayment': grpc.unary_unary_rpc_method_handler(
          servicer.ListPayment,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListPaymentRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListPaymentResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'payment.v1alpha1.PaymentAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
