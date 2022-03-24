package autoscalingclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	autoscalingAgentPkgV1 "github.com/cuemby/ccp-sdk/gen/go/performance/autoscaling/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client autoscalingAgentPkgV1.AutoscalingAgentAPIServiceClient
var doOnce sync.Once

var autoscalingServiceUri string
var autoscalingServiceTimeout string

func init() {
	doOnce.Do(func() {
		autoscalingServiceTimeout = os.Getenv("AUTOSCALING_SERVICE_TIMEOUT")
		if autoscalingServiceTimeout == "" {
			autoscalingServiceTimeout = "30s"
		}
		autoscalingServiceUri = os.Getenv("AUTOSCALING_SERVICE_URI")
		con, err := grpc.Dial(autoscalingServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = autoscalingAgentPkgV1.NewAutoscalingAgentAPIServiceClient(con)
	})
}

func CreateAutoscaling(in *autoscalingAgentPkgV1.AgentCreateAutoscalingRequest) (response *autoscalingAgentPkgV1.AgentCreateAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.AgentCreateAutoscaling(ctx, &autoscalingAgentPkgV1.AgentCreateAutoscalingRequest{
		Autoscaling: in.Autoscaling,
		Status:      in.Status,
		Origin:      in.Origin,
	})
	if err != nil {
		log.Printf("%s: %v", "Error create autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create autoscaling", err),
		)
	}
	if response, err = res.Recv(); err != nil {
		log.Printf("%s: %v", "Error create autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create autoscaling", err),
		)
	}
	return response, nil
}

func UpdateAutoscaling(in *autoscalingAgentPkgV1.AgentUpdateAutoscalingRequest) (response *autoscalingAgentPkgV1.AgentUpdateAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.AgentUpdateAutoscaling(ctx, &autoscalingAgentPkgV1.AgentUpdateAutoscalingRequest{
		Autoscaling: in.Autoscaling,
		Status:      in.Status,
		Origin:      in.Origin,
	})
	if err != nil {
		log.Printf("%s: %v", "Error update autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update autoscaling", err),
		)
	}
	if response, err = res.Recv(); err != nil {
		log.Printf("%s: %v", "Error update autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update autoscaling", err),
		)
	}
	return response, nil
}

func DeleteAutoscaling(in *autoscalingAgentPkgV1.AgentDeleteAutoscalingRequest) (response *autoscalingAgentPkgV1.AgentDeleteAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.AgentDeleteAutoscaling(ctx, &autoscalingAgentPkgV1.AgentDeleteAutoscalingRequest{
		Metadata: in.Metadata,
	})
	if err != nil {
		log.Printf("%s: %v", "Error delete autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete autoscaling", err),
		)
	}
	if response, err = res.Recv(); err != nil {
		log.Printf("%s: %v", "Error delete autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete autoscaling", err),
		)
	}
	return response, nil
}

func GetAutoscaling(in *autoscalingAgentPkgV1.AgentGetAutoscalingRequest) (response *autoscalingAgentPkgV1.AgentGetAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.AgentGetAutoscaling(ctx, &autoscalingAgentPkgV1.AgentGetAutoscalingRequest{
		Autoscaling: in.Autoscaling,
	})
	if err != nil {
		log.Printf("%s: %v", "Error get autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get autoscaling", err),
		)
	}
	if response, err = res.Recv(); err != nil {
		log.Printf("%s: %v", "Error get autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get autoscaling", err),
		)
	}
	return response, nil
}

func ListAutoscaling(in *autoscalingAgentPkgV1.AgentListAutoscalingRequest) (response *autoscalingAgentPkgV1.AgentListAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.AgentListAutoscaling(ctx, &autoscalingAgentPkgV1.AgentListAutoscalingRequest{
		Metadata: in.Metadata,
	})
	if err != nil {
		log.Printf("%s: %v", "Error list autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list autoscaling", err),
		)
	}
	if response, err = res.Recv(); err != nil {
		log.Printf("%s: %v", "Error list autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list autoscaling", err),
		)
	}
	return response, nil
}
