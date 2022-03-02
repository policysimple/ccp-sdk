package environmentclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	runtimepkgv1 "github.com/cuemby/ccp-sdk/gen/go/pipelines/runtime/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client runtimepkgv1.RuntimeAPIServiceClient
var doOnce sync.Once

var runtimeServiceUri string
var runtimeServiceTimeout string

func init() {
	doOnce.Do(func() {
		runtimeServiceTimeout = os.Getenv("RUNTIME_SERVICE_TIMEOUT")
		if runtimeServiceTimeout == "" {
			runtimeServiceTimeout = "30s"
		}
		runtimeServiceUri = os.Getenv("RUNTIME_SERVICE_URI")
		con, err := grpc.Dial(runtimeServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = runtimepkgv1.NewRuntimeAPIServiceClient(con)
	})
}

func CreateRuntime(
	id string, name string, namespace string, projectId uint32, applicationId string,
	workspaceId string, integration, environments, commands map[string]string, secrets map[string]string,
) (response *runtimepkgv1.CreateRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateRuntime(ctx, &runtimepkgv1.CreateRuntimeRequest{
		Runtime: &runtimepkgv1.Runtime{
			Id:            id,
			Name:          name,
			Namespace:     namespace,
			ProjectId:     projectId,
			ApplicationId: applicationId,
			WorkspaceId:   workspaceId,
			Integration:   integration,
			Environments:  environments,
			Commands:      commands,
			Secrets:       secrets,
		},
	})

	if err != nil {
		log.Printf("%s: %v", "Error create runtime", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create runtime", err),
		)
	}
	return response, nil
}

func GetRuntime(runtimeId string) (response *runtimepkgv1.GetRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetRuntime(ctx, &runtimepkgv1.GetRuntimeRequest{
		RuntimeId: runtimeId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get runtime", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get runtime", err),
		)
	}
	return response, nil
}

func UpdateRuntime(
	id string, name string, namespace string, projectId uint32, applicationId string,
	workspaceId string, integration, envVariables, commands map[string]string, secrets map[string]string,
) (response *runtimepkgv1.UpdateRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateRuntime(ctx, &runtimepkgv1.UpdateRuntimeRequest{
		Runtime: &runtimepkgv1.Runtime{
			Id:            id,
			Name:          name,
			Namespace:     namespace,
			ProjectId:     projectId,
			ApplicationId: applicationId,
			WorkspaceId:   workspaceId,
			Integration:   integration,
			Environments:  environments,
			Commands:      commands,
			Secrets:       secrets,
		},
	})

	if err != nil {
		log.Printf("%s: %v", "Error update runtime", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update runtime", err),
		)
	}
	return response, nil
}

func DeleteRuntime(runtimeId string) (response *runtimepkgv1.DeleteRuntimeResponse, err error) {
	d, err := time.ParseDuration(runtimeServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteRuntime(ctx, &runtimepkgv1.DeleteRuntimeRequest{
		RuntimeId: runtimeId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete runtime", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete runtime", err),
		)
	}
	return response, nil
}
