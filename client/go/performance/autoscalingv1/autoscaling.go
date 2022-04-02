package autoscalingclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	autoscalingPkgV1 "github.com/cuemby/ccp-sdk/gen/go/performance/autoscaling/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client autoscalingPkgV1.AutoscalingAPIServiceClient
var doOnce sync.Once

var autoscalingServiceUri string
var autoscalingServiceTimeout string

func init() {
	doOnce.Do(func() {
		autoscalingServiceTimeout = os.Getenv("PERFORMANCE_SERVICE_TIMEOUT")
		if autoscalingServiceTimeout == "" {
			autoscalingServiceTimeout = "30s"
		}
		autoscalingServiceUri = os.Getenv("PERFORMANCE_SERVICE_URI")
		con, err := grpc.Dial(autoscalingServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = autoscalingPkgV1.NewAutoscalingAPIServiceClient(con)
	})
}

func CreateAutoscaling(in *autoscalingPkgV1.CreateAutoscalingRequest) (response *autoscalingPkgV1.CreateAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.CreateAutoscaling(ctx, &autoscalingPkgV1.CreateAutoscalingRequest{
		Autoscaling: in.Autoscaling,
	})
	if err != nil {
		log.Printf("%s: %v", "Error create autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create autoscaling", err),
		)
	}
	response.Autoscaling = res.Autoscaling

	return response, nil
}

func UpdateAutoscaling(in *autoscalingPkgV1.UpdateAutoscalingRequest) (response *autoscalingPkgV1.UpdateAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.UpdateAutoscaling(ctx, &autoscalingPkgV1.UpdateAutoscalingRequest{
		Autoscaling: in.Autoscaling,
	})
	if err != nil {
		log.Printf("%s: %v", "Error update autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update autoscaling", err),
		)
	}
	response.Status = res.Status

	return response, nil
}

func DeleteAutoscaling(in *autoscalingPkgV1.DeleteAutoscalingRequest) (response *autoscalingPkgV1.DeleteAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.DeleteAutoscaling(ctx, &autoscalingPkgV1.DeleteAutoscalingRequest{
		Metadata: in.Metadata,
	})
	if err != nil {
		log.Printf("%s: %v", "Error delete autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete autoscaling", err),
		)
	}
	response.Status = res.Status
	if response.Status != "OK" {
		log.Printf("%s: %v", "Error delete autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete autoscaling", err),
		)
	}
	return response, nil
}

func GetAutoscaling(in *autoscalingPkgV1.GetAutoscalingRequest) (response *autoscalingPkgV1.GetAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	res, err := client.GetAutoscaling(ctx, &autoscalingPkgV1.GetAutoscalingRequest{
		Metadata: in.Metadata,
	})
	if err != nil {
		log.Printf("%s: %v", "Error get autoscaling", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get autoscaling", err),
		)
	}
	response.Autoscaling = res.Autoscaling
	response.Status = res.Status

	return response, nil
}

func ListAutoscaling(in *autoscalingPkgV1.ListAutoscalingRequest) (response *autoscalingPkgV1.ListAutoscalingResponse, err error) {
	d, err := time.ParseDuration(autoscalingServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	response, err = client.ListAutoscaling(ctx, &autoscalingPkgV1.ListAutoscalingRequest{
		Metadata: in.Metadata,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list runtime", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list runtime", err),
		)
	}
	return response, nil
}
