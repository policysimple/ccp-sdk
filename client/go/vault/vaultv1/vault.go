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

func CreateSecret(in *vaultpkgv1.CreateSecretRequest) (*vaultpkgv1.CreateSecretResponse, error) {

	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	//convert map to String map secretData
	var data map[string]string
	for k, v := range in.Secret.Data.Data {
		data[k] = v
	}

	//convert array to String array secretWarnings
	var warnings []string
	for _, v := range in.Secret.Warnings.Warnings {
		warnings = append(warnings, v)
	}

	response, err := client.CreateSecret(ctx, &vaultpkgv1.CreateSecretRequest{
		Secret: &vaultpkgv1.Secret{
			ProjectId:     in.Secret.ProjectId,
			ApplicationId: in.Secret.ApplicationId,
			Metadata: &vaultpkgv1.Metadata{
				Key:            in.Secret.Metadata.Key,
				CreatedTime:    in.Secret.Metadata.CreatedTime,
				CustomMetadata: in.Secret.Metadata.CustomMetadata,
				DeletionTime:   in.Secret.Metadata.DeletionTime,
				Destroyed:      in.Secret.Metadata.Destroyed,
				Version:        in.Secret.Metadata.Version,
			},
			Data: &vaultpkgv1.SecretData{
				Data: data,
			},
			Warnings: &vaultpkgv1.SecretWarnings{
				Warnings: warnings,
			},
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

func UpdateSecret(in *vaultpkgv1.UpdateSecretRequest) (*vaultpkgv1.UpdateSecretResponse, error) {
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	//convert map to String map secretData
	var data map[string]string
	for k, v := range in.Secret.Data.Data {
		data[k] = v
	}

	//convert array to String array secretWarnings
	var warnings []string
	for _, v := range in.Secret.Warnings.Warnings {
		warnings = append(warnings, v)
	}

	response, err := client.UpdateSecret(ctx, &vaultpkgv1.UpdateSecretRequest{
		Secret: &vaultpkgv1.Secret{
			ProjectId:     in.Secret.ProjectId,
			ApplicationId: in.Secret.ApplicationId,
			Metadata: &vaultpkgv1.Metadata{
				Key:            in.Secret.Metadata.Key,
				CreatedTime:    in.Secret.Metadata.CreatedTime,
				CustomMetadata: in.Secret.Metadata.CustomMetadata,
				DeletionTime:   in.Secret.Metadata.DeletionTime,
				Destroyed:      in.Secret.Metadata.Destroyed,
				Version:        in.Secret.Metadata.Version,
			},
			Data: &vaultpkgv1.SecretData{
				Data: data,
			},
			Warnings: &vaultpkgv1.SecretWarnings{
				Warnings: warnings,
			},
		},
	})

	if err != nil {
		log.Printf("%s: %v", "Error update secret", err)
	}

	return response, nil
}

func DeleteSecret(projectId uint32) (*vaultpkgv1.DeleteSecretResponse, error) {

	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteSecret(ctx, &vaultpkgv1.DeleteSecretRequest{
		ProjectId: projectId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete secret", err)
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
	})

	if err != nil {
		log.Printf("%s: %v", "Error list secret", err)
	}

	return response, nil
}
