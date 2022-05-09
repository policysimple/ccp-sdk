package registryquotasclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	clientpkgv1 "github.com/cuemby/ccp-sdk/gen/go/artifacts/quotas/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client clientpkgv1.RegistryQuotasAPIServiceClient
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
		client = clientpkgv1.NewRegistryQuotasAPIServiceClient(con)
	})
}

//rpc ListQuotasRegistry(ListQuotasRegistryRequest) returns (ListQuotasRegistryResponse);
//rpc UpdateQuotaRegistry(UpdateQuotaRegistryRequest) returns (UpdateQuotaRegistryResponse);
//rpc ListQuotaArtifactRegistry(ListQuotaArtifactRegistryRequest) returns (ListQuotaArtifactRegi

func ListQuotasRegistry(in *clientpkgv1.ListQuotasRegistryRequest) (response *clientpkgv1.ListQuotasRegistryResponse, err error) {
	bylogs.LogInfo("Client: list quotas registry")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListQuotasRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error list quotas registry", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list quotas registry", err),
		)
	}
	return response, nil
}

func UpdateQuotaRegistry(in *clientpkgv1.UpdateQuotaRegistryRequest) (response *clientpkgv1.UpdateQuotaRegistryResponse, err error) {
	bylogs.LogInfo("Client: update quotas registry")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateQuotaRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error update quotas registry", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update quotas registry", err),
		)
	}
	return response, nil
}

func ListQuotaArtifactRegistry(in *clientpkgv1.ListQuotaArtifactRegistryRequest) (response *clientpkgv1.ListQuotaArtifactRegistryResponse, err error) {
	bylogs.LogInfo("Client: list quotas artifact registry")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListQuotaArtifactRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error list quotas artifact registry", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list quotas artifact registry", err),
		)
	}
	return response, nil
}
