package vaultclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
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
	bylogs.LogInfo("CreateSecret-clientSdk")
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
		bylogs.LogErr("CreateSecret-clientSdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error create secret: %v", err),
		)
	} else {
		bylogs.LogInfo("CreateSecret Client Sdk", "Success")
	}
	return response, nil
}

func UpdateSecret(in *Secret) (*vaultpkgv1.UpdateSecretResponse, error) {
	bylogs.LogInfo("UpdateSecret Client Sdk")
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
		bylogs.LogErr("UpdateSecret Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error update secret: %v", err),
		)
	} else {
		bylogs.LogInfo("UpdateSecret Client Sdk", "Success")
	}

	return response, nil
}

func DeleteSecret(organizationId uint32, projectId uint32, name string) (*vaultpkgv1.DeleteSecretResponse, error){
	bylogs.LogInfo("DeleteSecret Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteSecret(ctx, &vaultpkgv1.DeleteSecretRequest{
		OrganizationId: organizationId,
		ProjectId:     projectId,
		Name:          name,		
	})

	if err != nil {
		bylogs.LogErr("DeleteSecret Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error delete secret: %v", err),
		)
	} else {
		bylogs.LogInfo("DeleteSecret Client Sdk", "Success")
	}

	return response, nil
}

func GetSecret(organizationId uint32, projectId uint32, name string) (*vaultpkgv1.GetSecretResponse, error) {
	bylogs.LogInfo("GetSecret Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetSecret(ctx, &vaultpkgv1.GetSecretRequest{
		OrganizationId: organizationId,
		ProjectId:     projectId,
		Name:          name,
	})

	if err != nil {
		bylogs.LogErr("GetSecret Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error get secret: %v", err),
		)
	} else {
		bylogs.LogInfo("GetSecret Client Sdk", "Success")
	}

	return response, nil
}

func DeleteOrganization(orgId uint32) (*vaultpkgv1.DeleteOrganizationResponse, error) {
	bylogs.LogInfo("DeleteOrganization Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteOrganization(ctx, &vaultpkgv1.DeleteOrganizationRequest{
		OrganizationId: orgId,
	})

	if err != nil {
		bylogs.LogErr("DeleteOrganization Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error delete organization: %v", err),
		)
	} else {
		bylogs.LogInfo("DeleteOrganization Client Sdk", "Success")
	}

	return response, nil
}

func SaveTokenIntegrations(in *vaultpkgv1.SaveTokenIntegrationsRequest) (*vaultpkgv1.SaveTokenIntegrationsResponse, error) {
	bylogs.LogInfo("SaveTokenIntegrations Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.SaveTokenIntegrations(ctx, &vaultpkgv1.SaveTokenIntegrationsRequest{
		IntegrationId: in.IntegrationId,
		Token:          in.Token,
	})

	if err != nil {
		bylogs.LogErr("SaveTokenIntegrations Client Sdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("Error save token integrations: %v", err),
		)
	} else {
		bylogs.LogInfo("SaveTokenIntegrations Client Sdk", "Success")
	}

	return response, nil
}
