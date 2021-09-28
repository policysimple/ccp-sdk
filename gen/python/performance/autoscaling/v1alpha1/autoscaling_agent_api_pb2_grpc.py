# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from performance.autoscaling.v1alpha1 import autoscaling_agent_api_pb2 as performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2


class AutoscalingAgentAPIServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.AgentCreateAutoscaling = channel.stream_stream(
                '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling',
                request_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentCreateAutoscalingRequest.SerializeToString,
                response_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentCreateAutoscalingResponse.FromString,
                )
        self.AgentUpdateAutoscaling = channel.stream_stream(
                '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling',
                request_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentUpdateAutoscalingRequest.SerializeToString,
                response_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentUpdateAutoscalingResponse.FromString,
                )
        self.AgentDeleteAutoscaling = channel.stream_stream(
                '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling',
                request_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentDeleteAutoscalingRequest.SerializeToString,
                response_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentDeleteAutoscalingResponse.FromString,
                )
        self.AgentGetAutoscaling = channel.stream_stream(
                '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling',
                request_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentGetAutoscalingRequest.SerializeToString,
                response_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentGetAutoscalingResponse.FromString,
                )
        self.AgentListAutoscaling = channel.stream_stream(
                '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling',
                request_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentListAutoscalingRequest.SerializeToString,
                response_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentListAutoscalingResponse.FromString,
                )


class AutoscalingAgentAPIServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def AgentCreateAutoscaling(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AgentUpdateAutoscaling(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AgentDeleteAutoscaling(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AgentGetAutoscaling(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AgentListAutoscaling(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AutoscalingAgentAPIServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'AgentCreateAutoscaling': grpc.stream_stream_rpc_method_handler(
                    servicer.AgentCreateAutoscaling,
                    request_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentCreateAutoscalingRequest.FromString,
                    response_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentCreateAutoscalingResponse.SerializeToString,
            ),
            'AgentUpdateAutoscaling': grpc.stream_stream_rpc_method_handler(
                    servicer.AgentUpdateAutoscaling,
                    request_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentUpdateAutoscalingRequest.FromString,
                    response_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentUpdateAutoscalingResponse.SerializeToString,
            ),
            'AgentDeleteAutoscaling': grpc.stream_stream_rpc_method_handler(
                    servicer.AgentDeleteAutoscaling,
                    request_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentDeleteAutoscalingRequest.FromString,
                    response_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentDeleteAutoscalingResponse.SerializeToString,
            ),
            'AgentGetAutoscaling': grpc.stream_stream_rpc_method_handler(
                    servicer.AgentGetAutoscaling,
                    request_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentGetAutoscalingRequest.FromString,
                    response_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentGetAutoscalingResponse.SerializeToString,
            ),
            'AgentListAutoscaling': grpc.stream_stream_rpc_method_handler(
                    servicer.AgentListAutoscaling,
                    request_deserializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentListAutoscalingRequest.FromString,
                    response_serializer=performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentListAutoscalingResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'performance.autoscaling.v1alpha1.AutoscalingAgentAPIService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class AutoscalingAgentAPIService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def AgentCreateAutoscaling(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentCreateAutoscaling',
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentCreateAutoscalingRequest.SerializeToString,
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentCreateAutoscalingResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AgentUpdateAutoscaling(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentUpdateAutoscaling',
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentUpdateAutoscalingRequest.SerializeToString,
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentUpdateAutoscalingResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AgentDeleteAutoscaling(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentDeleteAutoscaling',
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentDeleteAutoscalingRequest.SerializeToString,
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentDeleteAutoscalingResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AgentGetAutoscaling(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentGetAutoscaling',
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentGetAutoscalingRequest.SerializeToString,
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentGetAutoscalingResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AgentListAutoscaling(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/performance.autoscaling.v1alpha1.AutoscalingAgentAPIService/AgentListAutoscaling',
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentListAutoscalingRequest.SerializeToString,
            performance_dot_autoscaling_dot_v1alpha1_dot_autoscaling__agent__api__pb2.AgentListAutoscalingResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
