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

func CreateEnvironment(organizationId uint32, projectId uint32, name string, userId string) (response *environmentpkgv1.CreateEnvironmentResponse, err error) {
	bylogs.LogInfo("Client: Create environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateEnvironment(ctx, &environmentpkgv1.CreateEnvironmentRequest{
		Environment: &environmentpkgv1.Environment{
			OrganizationId: organizationId,
			ProjectId:      projectId,
			Name:           name,
		},
		UserId: userId,
	})

	if err != nil {
		bylogs.LogErr("Client: Error create environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create environment", err),
		)
	}
	return response, nil
}

func ListEnvironment(projectId uint32) (response *environmentpkgv1.ListEnvironmentResponse, err error) {
	bylogs.LogInfo("Client: List environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListEnvironment(ctx, &environmentpkgv1.ListEnvironmentRequest{
		ProjectId: projectId,
	})

	if err != nil {
		bylogs.LogErr("Client: Error list environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list environment", err),
		)
	}
	return response, nil
}

func DeleteEnvironment(environmentId string, userId string) (response *environmentpkgv1.DeleteEnvironmentResponse, err error) {
	bylogs.LogInfo("Client: Delete environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteEnvironment(ctx, &environmentpkgv1.DeleteEnvironmentRequest{
		EnvironmentId: environmentId,
		UserId:        userId,
	})

	if err != nil {
		bylogs.LogErr("Client: Error delete environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete environment", err),
		)
	}
	return response, nil
}

func GetOneEnvironment(environmentId string) (response *environmentpkgv1.GetOneEnvironmentResponse, err error) {
	bylogs.LogInfo("Client: Get One environment")
	d, err := time.ParseDuration(environmentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetOneEnvironment(ctx, &environmentpkgv1.GetOneEnvironmentRequest{
		EnvironmentId: environmentId,
	})

	if err != nil {
		bylogs.LogErr("Client: Error get one environment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get one environment", err),
		)
	}
	return response, nil
}
