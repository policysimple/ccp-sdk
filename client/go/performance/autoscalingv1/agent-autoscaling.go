package autoscalingclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	agentautoscalingpkgv1 "github.com/cuemby/ccp-sdk/gen/go/performance/autoscaling/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var clientAgent agentautoscalingpkgv1.AutoscalingAgentAPIServiceClient
var doOnceAgent sync.Once

var agentautoscalingServiceUri string
var agentautoscalingServiceTimeout string

func init() {
	doOnceAgent.Do(func() {
		agentautoscalingServiceTimeout = os.Getenv("AUTOSCALING_SERVICE_TIMEOUT")
		if agentautoscalingServiceTimeout == "" {
			agentautoscalingServiceTimeout = "30s"
		}
		agentautoscalingServiceUri = os.Getenv("AUTOSCALING_SERVICE_URI")
		con, err := grpc.Dial(agentautoscalingServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		clientAgent = agentautoscalingpkgv1.NewAutoscalingAgentAPIServiceClient(con)
	})
}

func AgentCreateAutoscaling(in *agentautoscalingpkgv1.AgentCreateAutoscalingRequest) (response *agentautoscalingpkgv1.AgentCreateAutoscalingResponse, err error) {
	bylogs.LogInfo("client: agent create autoscaling")
	d, err := time.ParseDuration(agentautoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = clientAgent.AgentCreateAutoscaling(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error agent create autoscaling", err)
		return nil, fmt.Errorf("[AgentCreateAutoscaling] %w", err)
	}
	return response, nil
}

func AgentUpdateAutoscaling(in *agentautoscalingpkgv1.AgentUpdateAutoscalingRequest) (response *agentautoscalingpkgv1.AgentUpdateAutoscalingResponse, err error) {
	bylogs.LogInfo("client: agent update autoscaling")
	d, err := time.ParseDuration(agentautoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = clientAgent.AgentUpdateAutoscaling(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error agent update autoscaling", err)
		return nil, fmt.Errorf("[AgentUpdateAutoscaling] %w", err)
	}
	return response, nil
}

func AgentDeleteAutoscaling(in *agentautoscalingpkgv1.AgentDeleteAutoscalingRequest) (response *agentautoscalingpkgv1.AgentDeleteAutoscalingResponse, err error) {
	bylogs.LogInfo("client: agent delete autoscaling")
	d, err := time.ParseDuration(agentautoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = clientAgent.AgentDeleteAutoscaling(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error agent delete autoscaling", err)
		return nil, fmt.Errorf("[AgentDeleteAutoscaling] %w", err)
	}
	return response, nil
}

func AgentGetAutoscaling(in *agentautoscalingpkgv1.AgentGetAutoscalingRequest) (response *agentautoscalingpkgv1.AgentGetAutoscalingResponse, err error) {
	bylogs.LogInfo("client: agent get autoscaling")
	d, err := time.ParseDuration(agentautoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = clientAgent.AgentGetAutoscaling(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error agent get autoscaling", err)
		return nil, fmt.Errorf("[AgentGetAutoscaling] %w", err)
	}
	return response, nil
}

func AgentListAutoscaling(in *agentautoscalingpkgv1.AgentListAutoscalingRequest) (response *agentautoscalingpkgv1.AgentListAutoscalingResponse, err error) {
	bylogs.LogInfo("client: agent list autoscaling")
	d, err := time.ParseDuration(agentautoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = clientAgent.AgentListAutoscaling(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error agent list autoscaling", err)
		return nil, fmt.Errorf("[AgentListAutoscaling] %w", err)
	}
	return response, nil
}
