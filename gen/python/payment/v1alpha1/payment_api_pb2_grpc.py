# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from payment.v1alpha1 import payment_api_pb2 as payment_dot_v1alpha1_dot_payment__api__pb2


class PaymentAPIServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

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
    self.CreateCard = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreateCard',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCardRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCardResponse.FromString,
        )
    self.CancelSuscription = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CancelSuscription',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionResponse.FromString,
        )
    self.GetOrganization = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/GetOrganization',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetOrganizationRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetOrganizationResponse.FromString,
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
    self.GetCustomer = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/GetCustomer',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetCustomerRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetCustomerResponse.FromString,
        )
    self.GetBilingMonth = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/GetBilingMonth',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetBilingMonthRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetBilingMonthResponse.FromString,
        )
    self.GetPayments = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/GetPayments',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentsRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentsResponse.FromString,
        )
    self.CreatePayment = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreatePayment',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentResponse.FromString,
        )
    self.CreateProject = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreateProject',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateProjectRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateProjectResponse.FromString,
        )
    self.ListProjects = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/ListProjects',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListProjectsRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListProjectsResponse.FromString,
        )
    self.DeleteProject = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/DeleteProject',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteProjectRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteProjectResponse.FromString,
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
    self.CreateInvoice = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/CreateInvoice',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateInvoiceRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateInvoiceResponse.FromString,
        )
    self.InvoiceFilter = channel.unary_unary(
        '/payment.v1alpha1.PaymentAPIService/InvoiceFilter',
        request_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.InvoiceFilterRequest.SerializeToString,
        response_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.InvoiceFilterResponse.FromString,
        )


class PaymentAPIServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateSuscription(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def CreateCard(self, request, context):
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

  def GetOrganization(self, request, context):
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

  def GetCustomer(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetBilingMonth(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetPayments(self, request, context):
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

  def CreateProject(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListProjects(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteProject(self, request, context):
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

  def CreateInvoice(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def InvoiceFilter(self, request, context):
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
      'CreateCard': grpc.unary_unary_rpc_method_handler(
          servicer.CreateCard,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCardRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateCardResponse.SerializeToString,
      ),
      'CancelSuscription': grpc.unary_unary_rpc_method_handler(
          servicer.CancelSuscription,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CancelSuscriptionResponse.SerializeToString,
      ),
      'GetOrganization': grpc.unary_unary_rpc_method_handler(
          servicer.GetOrganization,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetOrganizationRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetOrganizationResponse.SerializeToString,
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
      'GetCustomer': grpc.unary_unary_rpc_method_handler(
          servicer.GetCustomer,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetCustomerRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetCustomerResponse.SerializeToString,
      ),
      'GetBilingMonth': grpc.unary_unary_rpc_method_handler(
          servicer.GetBilingMonth,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetBilingMonthRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetBilingMonthResponse.SerializeToString,
      ),
      'GetPayments': grpc.unary_unary_rpc_method_handler(
          servicer.GetPayments,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentsRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.GetPaymentsResponse.SerializeToString,
      ),
      'CreatePayment': grpc.unary_unary_rpc_method_handler(
          servicer.CreatePayment,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreatePaymentResponse.SerializeToString,
      ),
      'CreateProject': grpc.unary_unary_rpc_method_handler(
          servicer.CreateProject,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateProjectRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateProjectResponse.SerializeToString,
      ),
      'ListProjects': grpc.unary_unary_rpc_method_handler(
          servicer.ListProjects,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListProjectsRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.ListProjectsResponse.SerializeToString,
      ),
      'DeleteProject': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteProject,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteProjectRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.DeleteProjectResponse.SerializeToString,
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
      'CreateInvoice': grpc.unary_unary_rpc_method_handler(
          servicer.CreateInvoice,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateInvoiceRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.CreateInvoiceResponse.SerializeToString,
      ),
      'InvoiceFilter': grpc.unary_unary_rpc_method_handler(
          servicer.InvoiceFilter,
          request_deserializer=payment_dot_v1alpha1_dot_payment__api__pb2.InvoiceFilterRequest.FromString,
          response_serializer=payment_dot_v1alpha1_dot_payment__api__pb2.InvoiceFilterResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'payment.v1alpha1.PaymentAPIService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
