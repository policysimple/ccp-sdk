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
	"google.golang.org/grpc/credentials/insecure"
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

func SaveTokenFirebase(in *vaultpkgv1.SaveTokenFirebaseRequest) (*vaultpkgv1.SaveTokenFirebaseResponse, error) {
	bylogs.LogInfo("SaveTokenFirebase-clientSdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.SaveTokenFirebase(ctx, &vaultpkgv1.SaveTokenFirebaseRequest{
		Secret: in.Secret,
	})

	if err != nil {
		bylogs.LogErr("SaveTokenFirebase-clientSdk", err)
		return nil, fmt.Errorf("[SaveTokenFirebase] %w", err)

	}
	bylogs.LogInfo("SaveTokenFirebase Client Sdk", "Success")
	return response, nil
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
		return nil, fmt.Errorf("[CreateSecret] %w", err)

	}
	bylogs.LogInfo("CreateSecret Client Sdk", "Success")
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
		return nil, fmt.Errorf("[UpdateSecret] %w", err)

	}
	bylogs.LogInfo("UpdateSecret Client Sdk", "Success")

	return response, nil
}

func DeleteSecret(organizationId string, projectId string, name string) (*vaultpkgv1.DeleteSecretResponse, error) {
	bylogs.LogInfo("DeleteSecret Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteSecret(ctx, &vaultpkgv1.DeleteSecretRequest{
		OrganizationId: organizationId,
		ProjectId:      projectId,
		Name:           name,
	})

	if err != nil {
		bylogs.LogErr("DeleteSecret Client Sdk", err)
		return nil, fmt.Errorf("[DeleteSecret] %w", err)
	}
	bylogs.LogInfo("DeleteSecret Client Sdk", "Success")
	return response, nil
}

func GetSecret(organizationId string, projectId string, name string) (*vaultpkgv1.GetSecretResponse, error) {
	bylogs.LogInfo("GetSecret Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetSecret(ctx, &vaultpkgv1.GetSecretRequest{
		OrganizationId: organizationId,
		ProjectId:      projectId,
		Name:           name,
	})

	if err != nil {
		bylogs.LogErr("GetSecret Client Sdk", err)
		return nil, fmt.Errorf("[GetSecret] %w", err)
	}
	bylogs.LogInfo("GetSecret Client Sdk", "Success")
	return response, nil
}

func DeleteOrganization(orgId string) (*vaultpkgv1.DeleteOrganizationResponse, error) {
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
		return nil, fmt.Errorf("[DeleteOrganization] %w", err)
	}
	bylogs.LogInfo("DeleteOrganization Client Sdk", "Success")
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
		IntegrationId:  in.IntegrationId,
		OrganizationId: in.OrganizationId,
		Token:          in.Token,
	})

	if err != nil {
		bylogs.LogErr("SaveTokenIntegrations Client Sdk", err)
		return nil, fmt.Errorf("[SaveTokenIntegrations] %w", err)
	}
	bylogs.LogInfo("SaveTokenIntegrations Client Sdk", "Success")
	return response, nil
}

func GetTokenIntegrations(in *vaultpkgv1.GetTokenIntegrationsRequest) (*vaultpkgv1.GetTokenIntegrationsResponse, error) {
	bylogs.LogInfo("GetTokenIntegrationsRequest Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetTokenIntegrations(ctx, &vaultpkgv1.GetTokenIntegrationsRequest{
		IntegrationId: in.IntegrationId,
	})

	if err != nil {
		bylogs.LogErr("GetTokenIntegrationsRequest Client Sdk", err)
		return nil, fmt.Errorf("[GetTokenIntegrations] %w", err)
	}
	bylogs.LogInfo("GetTokenIntegrationsRequest Client Sdk", "Success")
	return response, nil
}

func SaveTokenBlockChain(in *vaultpkgv1.SaveTokenBlockChainRequest) (*vaultpkgv1.SaveTokenBlockChainResponse, error) {
	bylogs.LogInfo("SaveTokenBlockChain Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.SaveTokenBlockChain(ctx, &vaultpkgv1.SaveTokenBlockChainRequest{
		BlockchainId:   in.BlockchainId,
		BlockchainName: in.BlockchainName,
		Secret:         in.Secret,
	})

	if err != nil {
		bylogs.LogErr("SaveTokenBlockChain Client Sdk", err)
		return nil, fmt.Errorf("[SaveTokenBlockChain] %w", err)
	}
	bylogs.LogInfo("SaveTokenBlockChain Client Sdk", "Success")
	return response, nil
}

func GetTokenBlockChain(in *vaultpkgv1.GetTokenBlockChainRequest) (*vaultpkgv1.GetTokenBlockChainResponse, error) {
	bylogs.LogInfo("GetTokenBlockChainRequest Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetTokenBlockChain(ctx, &vaultpkgv1.GetTokenBlockChainRequest{
		BlockchainId:   in.BlockchainId,
		BlockchainName: in.BlockchainName,
	})

	if err != nil {
		bylogs.LogErr("GetTokenBlockChainRequest Client Sdk", err)
		return nil, fmt.Errorf("[GetTokenBlockChain] %w", err)
	}
	bylogs.LogInfo("GetTokenBlockChainRequest Client Sdk", "Success")
	return response, nil
}

func GetSecretsService(in *vaultpkgv1.GetSecretsServiceRequest) (*vaultpkgv1.GetSecretsServiceResponse, error) {
	bylogs.LogInfo("GetSecretsService Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetSecretsService(ctx, &vaultpkgv1.GetSecretsServiceRequest{
		NameService: in.NameService,
	})

	if err != nil {
		bylogs.LogErr("GetSecretsService Client Sdk", err)
		return nil, fmt.Errorf("[GetSecretsService] %w", err)
	}
	bylogs.LogInfo("GetSecretsService Client Sdk", "Success")
	return response, nil
}

func GetSecretsServiceNotification(in *vaultpkgv1.GetSecretsServiceNotificationRequest) (*vaultpkgv1.GetSecretsServiceNotificationResponse, error) {
	bylogs.LogInfo("GetNotificationSecretsService Client Sdk")
	d, err := time.ParseDuration(vaultServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetSecretsServiceNotification(ctx, &vaultpkgv1.GetSecretsServiceNotificationRequest{
		NameService: in.NameService,
	})

	if err != nil {
		bylogs.LogErr("GetNotificationSecretsService Client Sdk", err)
		return nil, fmt.Errorf("[GetNotificationSecretsService] %w", err)
	}
	bylogs.LogInfo("GetNotificationSecretsService Client Sdk", "Success")
	return response, nil
}
