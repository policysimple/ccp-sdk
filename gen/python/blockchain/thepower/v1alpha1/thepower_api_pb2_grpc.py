# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from blockchain.thepower.v1alpha1 import thepower_api_pb2 as blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2


class BlockchainThePowerServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateTpChain = channel.unary_unary(
        '/blockchain.thepower.v1alpha1.BlockchainThePowerService/CreateTpChain',
        request_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.CreateTpChainRequest.SerializeToString,
        response_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.CreateTpChainResponse.FromString,
        )
    self.GetTpChains = channel.unary_unary(
        '/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChains',
        request_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsRequest.SerializeToString,
        response_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsResponse.FromString,
        )
    self.GetTpChainsByUserId = channel.unary_unary(
        '/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainsByUserId',
        request_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsByUserIdRequest.SerializeToString,
        response_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsByUserIdResponse.FromString,
        )
    self.GetTpChainById = channel.unary_unary(
        '/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainById',
        request_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainByIdRequest.SerializeToString,
        response_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainByIdResponse.FromString,
        )
    self.UpdateTpChain = channel.unary_unary(
        '/blockchain.thepower.v1alpha1.BlockchainThePowerService/UpdateTpChain',
        request_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.UpdateTpChainRequest.SerializeToString,
        response_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.UpdateTpChainResponse.FromString,
        )


class BlockchainThePowerServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateTpChain(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetTpChains(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetTpChainsByUserId(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetTpChainById(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateTpChain(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_BlockchainThePowerServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateTpChain': grpc.unary_unary_rpc_method_handler(
          servicer.CreateTpChain,
          request_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.CreateTpChainRequest.FromString,
          response_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.CreateTpChainResponse.SerializeToString,
      ),
      'GetTpChains': grpc.unary_unary_rpc_method_handler(
          servicer.GetTpChains,
          request_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsRequest.FromString,
          response_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsResponse.SerializeToString,
      ),
      'GetTpChainsByUserId': grpc.unary_unary_rpc_method_handler(
          servicer.GetTpChainsByUserId,
          request_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsByUserIdRequest.FromString,
          response_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainsByUserIdResponse.SerializeToString,
      ),
      'GetTpChainById': grpc.unary_unary_rpc_method_handler(
          servicer.GetTpChainById,
          request_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainByIdRequest.FromString,
          response_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.GetTpChainByIdResponse.SerializeToString,
      ),
      'UpdateTpChain': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateTpChain,
          request_deserializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.UpdateTpChainRequest.FromString,
          response_serializer=blockchain_dot_thepower_dot_v1alpha1_dot_thepower__api__pb2.UpdateTpChainResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'blockchain.thepower.v1alpha1.BlockchainThePowerService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
