package registryprojectsclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	clientpkgv1 "github.com/cuemby/ccp-sdk/gen/go/artifacts/artifacts/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client clientpkgv1.RegistryArtifactsAPIServiceClient
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
		client = clientpkgv1.NewRegistryArtifactsAPIServiceClient(con)
	})
}

func ListArtifactsRegistry(in *clientpkgv1.ListArtifactsRegistryRequest) (response *clientpkgv1.ListArtifactsRegistryResponse, err error) {
	bylogs.LogInfo("Client: List registry projects")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListArtifactsRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error list projects registry", err)
		return nil, fmt.Errorf("[ListArtifactsRegistry] %w", err)
	}
	return response, nil
}
