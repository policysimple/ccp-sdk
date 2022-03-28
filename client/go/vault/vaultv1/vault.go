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

type Metadata struct {
	*vaultpkgv1.Metadata
}

type SecretData struct {
	*vaultpkgv1.SecretData
}

type SecretWarnings struct {
	*vaultpkgv1.SecretWarnings
}

type Secret struct {
	*vaultpkgv1.Secret
}

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

func CreateSecret(in *vaultpkgv1.CreateSecretRequest) (*vaultpkgv1.CreateSecretResponse, error) {

	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateSecret(ctx, &vaultpkgv1.CreateSecretRequest{
		Secret: in.Secret,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create secret", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error create secret: %v", err),
		)
	}

	return response, nil
}

func UpdateSecret(in *Secret) (*vaultpkgv1.UpdateSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateSecret(ctx, &vaultpkgv1.UpdateSecretRequest{
		Secret: in.Secret,
	})

	if err != nil {
		log.Printf("%s: %v", "Error update secret", err)
	}

	return response, nil
}

func DeleteSecret(projectId uint32, namespace string) (*vaultpkgv1.DeleteSecretResponse, error) {

	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteSecret(ctx, &vaultpkgv1.DeleteSecretRequest{
		ProjectId: projectId,
		Namespace: namespace,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete secret", err)
	}

	return response, nil
}

func GetSecret(projectId uint32, namespace string) (*vaultpkgv1.GetSecretResponse, error) {

	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetSecret(ctx, &vaultpkgv1.GetSecretRequest{
		ProjectId: projectId,
		Namespace: namespace,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get secret", err)
	}

	return response, nil
}

func ListSecret(in *vaultpkgv1.ListSecretRequest) (*vaultpkgv1.ListSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListSecret(ctx, &vaultpkgv1.ListSecretRequest{
		ProjectId: in.ProjectId,
		Namespace: in.Namespace,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list secret", err)
	}

	return response, nil
}
