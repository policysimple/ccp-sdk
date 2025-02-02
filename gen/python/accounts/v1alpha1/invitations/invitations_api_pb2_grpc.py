# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from accounts.v1alpha1.invitations import invitations_pb2 as accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2


class InvitationServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.SendInvitationUser = channel.unary_unary(
        '/accounts.v1alpha1.invitations.v1.InvitationService/SendInvitationUser',
        request_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.SendInvitationUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.SendInvitationUserResponse.FromString,
        )
    self.GetInvitationUser = channel.unary_unary(
        '/accounts.v1alpha1.invitations.v1.InvitationService/GetInvitationUser',
        request_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.GetInvitationUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.GetInvitationUserResponse.FromString,
        )
    self.AgreeInvitationUser = channel.unary_unary(
        '/accounts.v1alpha1.invitations.v1.InvitationService/AgreeInvitationUser',
        request_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.AgreeInvitationUserRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.AgreeInvitationUserResponse.FromString,
        )
    self.ListInvitationSend = channel.unary_unary(
        '/accounts.v1alpha1.invitations.v1.InvitationService/ListInvitationSend',
        request_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ListInvitationSendRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ListInvitationSendResponse.FromString,
        )
    self.DeleteInvitation = channel.unary_unary(
        '/accounts.v1alpha1.invitations.v1.InvitationService/DeleteInvitation',
        request_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.DeleteInvitationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.DeleteInvitationResponse.FromString,
        )
    self.ReactivateInvitation = channel.unary_unary(
        '/accounts.v1alpha1.invitations.v1.InvitationService/ReactivateInvitation',
        request_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ReactivateInvitationRequest.SerializeToString,
        response_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ReactivateInvitationResponse.FromString,
        )


class InvitationServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def SendInvitationUser(self, request, context):
    """invitation
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetInvitationUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AgreeInvitationUser(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ListInvitationSend(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteInvitation(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ReactivateInvitation(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_InvitationServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'SendInvitationUser': grpc.unary_unary_rpc_method_handler(
          servicer.SendInvitationUser,
          request_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.SendInvitationUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.SendInvitationUserResponse.SerializeToString,
      ),
      'GetInvitationUser': grpc.unary_unary_rpc_method_handler(
          servicer.GetInvitationUser,
          request_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.GetInvitationUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.GetInvitationUserResponse.SerializeToString,
      ),
      'AgreeInvitationUser': grpc.unary_unary_rpc_method_handler(
          servicer.AgreeInvitationUser,
          request_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.AgreeInvitationUserRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.AgreeInvitationUserResponse.SerializeToString,
      ),
      'ListInvitationSend': grpc.unary_unary_rpc_method_handler(
          servicer.ListInvitationSend,
          request_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ListInvitationSendRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ListInvitationSendResponse.SerializeToString,
      ),
      'DeleteInvitation': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteInvitation,
          request_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.DeleteInvitationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.DeleteInvitationResponse.SerializeToString,
      ),
      'ReactivateInvitation': grpc.unary_unary_rpc_method_handler(
          servicer.ReactivateInvitation,
          request_deserializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ReactivateInvitationRequest.FromString,
          response_serializer=accounts_dot_v1alpha1_dot_invitations_dot_invitations__pb2.ReactivateInvitationResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'accounts.v1alpha1.invitations.v1.InvitationService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
