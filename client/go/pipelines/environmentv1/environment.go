package environmentclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	environmentpkgv1 "github.com/cuemby/ccp-sdk/gen/go/pipelines/environment/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client environmentpkgv1.EnvironmentAPIServiceClient
var doOnce sync.Once

var environmentServiceUri string
var environmentServiceTimeout string

func init() {
	doOnce.Do(func() {
		environmentServiceTimeout = os.Getenv("PIPELINE_SERVICE_TIMEOUT")
		if environmentServiceTimeout == "" {
			environmentServiceTimeout = "30s"
		}
		environmentServiceUri = os.Getenv("PIPELINE_SERVICE_URI")
		con, err := grpc.Dial(environmentServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = environmentpkgv1.NewEnvironmentAPIServiceClient(con)
	})
}

func CreateEnvironment(in *environmentpkgv1.CreateEnvironmentRequest) (response *environmentpkgv1.CreateEnvironmentResponse, err error) {
	bylogs.LogInfo("client: create environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error create environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error create environment", err),
		)
	}
	return response, nil
}

func ListEnvironment(in *environmentpkgv1.ListEnvironmentRequest) (response *environmentpkgv1.ListEnvironmentResponse, err error) {
	bylogs.LogInfo("client: list environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error list environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error list environment", err),
		)
	}
	return response, nil
}

func DeleteEnvironment(in *environmentpkgv1.DeleteEnvironmentRequest) (response *environmentpkgv1.DeleteEnvironmentResponse, err error) {
	bylogs.LogInfo("client: delete environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error delete environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error delete environment", err),
		)
	}
	return response, nil
}

func GetOneEnvironment(in *environmentpkgv1.GetOneEnvironmentRequest) (response *environmentpkgv1.GetOneEnvironmentResponse, err error) {
	bylogs.LogInfo("client: get one environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetOneEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error get one environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error get one environment", err),
		)
	}
	return response, nil
}

func UpdateEnvironment(in *environmentpkgv1.UpdateEnvironmentRequest) (response *environmentpkgv1.UpdateEnvironmentResponse, err error) {
	bylogs.LogInfo("client: update environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error update environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error update environment", err),
		)
	}
	return response, nil
}

func GetByNameEnvironment(in *environmentpkgv1.GetByNameEnvironmentRequest) (response *environmentpkgv1.GetByNameEnvironmentResponse, err error) {
	bylogs.LogInfo("client: get by name environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetByNameEnvironment(ctx, in)

	if err != nil {
		bylogs.LogErr("client: error get by name environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error get by name environment", err),
		)
	}
	return response, nil
}
