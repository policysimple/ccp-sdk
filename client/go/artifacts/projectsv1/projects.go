package registryprojectsclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	clientpkgv1 "github.com/cuemby/ccp-sdk/gen/go/artifacts/projects/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client clientpkgv1.RegistryProjectsAPIServiceClient
var doOnce sync.Once

var clientServiceUri string
var clientServiceTimeout string

func init() {
	doOnce.Do(func() {
		clientServiceTimeout = os.Getenv("ARTIFACT_SERVICE_TIMEOUT")
		if clientServiceTimeout == "" {
			clientServiceTimeout = "30s"
		}
		clientServiceUri = os.Getenv("ARTIFACT_SERVICE_URI")
		con, err := grpc.Dial(clientServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = clientpkgv1.NewRegistryProjectsAPIServiceClient(con)
	})
}

func CreateProjectRegistry(in *clientpkgv1.CreateProjectRegistryRequest) (response *clientpkgv1.CreateProjectRegistryResponse, err error) {
	bylogs.LogInfo("Client: Create registry project")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateProjectRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error create project registry", err)
		return nil, fmt.Errorf("[CreateProjectRegistry] %w", err)
	}
	return response, nil
}

func ListProjectsRegistry(in *clientpkgv1.ListProjectsRegistryRequest) (response *clientpkgv1.ListProjectsRegistryResponse, err error) {
	bylogs.LogInfo("Client: List registry projects")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListProjectsRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error list projects registry", err)
		return nil, fmt.Errorf("[ListProjectsRegistry] %w", err)
	}
	return response, nil
}

func UpdateProjectRegistry(in *clientpkgv1.UpdateProjectRegistryRequest) (response *clientpkgv1.UpdateProjectRegistryResponse, err error) {
	bylogs.LogInfo("Client: Update registry project")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateProjectRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error Update project registry", err)
		return nil, fmt.Errorf("[UpdateProjectRegistry] %w", err)
	}
	return response, nil
}

func DeleteProjectRegistry(in *clientpkgv1.DeleteProjectRegistryRequest) (response *clientpkgv1.DeleteProjectRegistryResponse, err error) {
	bylogs.LogInfo("Client: Delete registry project")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteProjectRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error Delete project registry", err)
		return nil, fmt.Errorf("[DeleteProjectRegistry] %w", err)
	}
	return response, nil
}
