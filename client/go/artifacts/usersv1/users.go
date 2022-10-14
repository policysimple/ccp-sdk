package registryusersclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	clientpkgv1 "github.com/cuemby/ccp-sdk/gen/go/artifacts/users/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client clientpkgv1.RegistryUsersAPIServiceClient
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
		client = clientpkgv1.NewRegistryUsersAPIServiceClient(con)
	})
}

func CreateUserRegistry(in *clientpkgv1.CreateUserRegistryRequest) (response *clientpkgv1.CreateUserRegistryResponse, err error) {
	bylogs.LogInfo("Client: Create user registry")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateUserRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error create user registry", err)
		return nil, fmt.Errorf("[CreateUserRegistry] %w", err)
	}
	return response, nil
}

func DeleteUserRegistry(in *clientpkgv1.DeleteUserRegistryRequest) (response *clientpkgv1.DeleteUserRegistryResponse, err error) {
	bylogs.LogInfo("Client: delete user registry")
	d, err := time.ParseDuration(clientServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteUserRegistry(ctx, in)

	if err != nil {
		bylogs.LogErr("Client: Error delete user registry", err)
		return nil, fmt.Errorf("[DeleteUserRegistry] %w", err)
	}
	return response, nil
}
