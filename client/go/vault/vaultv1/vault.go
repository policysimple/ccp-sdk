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

func CreateSecret(
	projectId uint32, applicationId string, metadata Metadata,
	environment string, secretData SecretData, secretWarning SecretWarnings,
) (*vaultpkgv1.CreateSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateSecret(ctx, &vaultpkgv1.CreateSecretRequest{
		Secret: &vaultpkgv1.Secret{
			ProjectId:     projectId,
			ApplicationId: applicationId,
			Metadata: &vaultpkgv1.Metadata{
				Key:            metadata.Key,
				CreatedTime:    metadata.CreatedTime,
				CustomMetadata: metadata.CustomMetadata,
				DeletionTime:   metadata.DeletionTime,
				Destroyed:      metadata.Destroyed,
				Version:        metadata.Version,
			},
			Environment: environment,
			Data:        secretData.SecretData,
			Warnings:    secretWarning.SecretWarnings,
		},
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

func UpdateSecret(environment string, secretData SecretData) (*vaultpkgv1.UpdateSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.UpdateSecret(ctx, &vaultpkgv1.UpdateSecretRequest{
		Environment: environment,
		Data:        secretData.SecretData,
	})

	if err != nil {
		log.Printf("%s: %v", "Error update secret", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error update secret: %v", err),
		)
	}

	return response, nil
}

func DeleteSecret(environment string) (*vaultpkgv1.DeleteSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteSecret(ctx, &vaultpkgv1.DeleteSecretRequest{
		Environment: environment,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete secret", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error delete secret: %v", err),
		)
	}

	return response, nil
}

func GetSecret(projectId uint32) (*vaultpkgv1.GetSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetSecret(ctx, &vaultpkgv1.GetSecretRequest{
		ProjectId: projectId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get secret", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error get secret: %v", err),
		)
	}

	return response, nil
}

func ListSecret(environment string) (*vaultpkgv1.ListSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.ListSecret(ctx, &vaultpkgv1.ListSecretRequest{
		Environment: environment,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list secrets", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error list secrets: %v", err),
		)
	}

	return response, nil
}
