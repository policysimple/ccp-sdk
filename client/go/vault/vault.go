package vaultclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	vaultpkgv1 "github.com/cuemby/ccp-sdk/gen/go/vault/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client vaultpkgv1.VaultAPIServiceClient
var doOnce sync.Once

var vaultServiceUri string
var vaultServiceTimeout string

func init() {
	doOnce.Do(func() {
		vaultServiceTimeout = os.Getenv("VAULT_SERVICE_TIMEOUT")
		if vaultServiceTimeout == "" {
			vaultServiceTimeout = "30s"
		}
		vaultServiceUri = os.Getenv("VAULT_SERVICE_URI")
		con, err := grpc.Dial(vaultServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = vaultpkgv1.NewVaultAPIServiceClient(con)
	})
}

func CreateSecret(ctx context.Context, secret *vaultpkgv1.CreateSecretRequest) (*vaultpkgv1.CreateSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateSecret(ctx, secret)

	if err != nil {
		log.Printf("%s: %v", "Error create secret", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error create secret: %v", err),
		)
	}

	return response, nil
}
