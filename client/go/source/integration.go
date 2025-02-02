package source

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	sourcepkgv1 "github.com/cuemby/ccp-sdk/gen/go/source/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client sourcepkgv1.SourceServiceClient
var doOnce sync.Once

var sourceServiceUri string
var sourceServiceTimeout string

func init() {
	doOnce.Do(func() {
		sourceServiceTimeout = os.Getenv("SOURCE_SERVICE_TIMEOUT")
		if sourceServiceTimeout == "" {
			sourceServiceTimeout = "60s"
		}
		sourceServiceUri = os.Getenv("PORT_CLIENT_SOURCE")
		con, err := grpc.Dial(sourceServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = sourcepkgv1.NewSourceServiceClient(con)
	})
}

func CreateIntegration(req *sourcepkgv1.CreateIntegrationRequest) (*sourcepkgv1.CreateIntegrationResponse, error) {
	log.Println("CreateIntegration")

	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateIntegration(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("[CreateIntegration] %w", err)
	}

	return response, nil
}

func CreateIntegrationWithExternalProvider(req *sourcepkgv1.CreateIntegrationWithExternalProviderRequest) (*sourcepkgv1.CreateIntegrationWithExternalProviderResponse, error) {
	log.Println("CreateIntegrationWithExternalProvider")
	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.CreateIntegrationWithExternalProvider(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("[CreateIntegrationWithExternalProvider] %w", err)
	}

	return response, nil
}

func DeleteIntegration(req *sourcepkgv1.DeleteIntegrationRequest) (*sourcepkgv1.DeleteIntegrationResponse, error) {
	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteIntegration(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("[DeleteIntegration] %w", err)

	}

	return response, nil
}

func DeleteIntegrationsByOrganization(OrganizationId string) (*sourcepkgv1.DeleteIntegrationsByOrganizationResponse, error) {
	log.Println("DeleteIntegrationsByOrganization")

	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteIntegrationsByOrganization(ctx, &sourcepkgv1.DeleteIntegrationsByOrganizationRequest{OrganizationUid: OrganizationId})
	if err != nil {
		return nil, fmt.Errorf("[DeleteIntegrationsByOrganization] %w", err)
	}

	return response, nil
}

func GetRepositoryProvider(integrationId string, name string) (*sourcepkgv1.GetRepositoryProviderResponse, error) {
	log.Println("GetRepositoryProvider")

	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetRepositoryProvider(ctx, &sourcepkgv1.GetRepositoryProviderRequest{IntegrationId: integrationId, Name: name})
	if err != nil {
		return nil, fmt.Errorf("[GetRepositoryProvider] %w", err)
	}

	return response, nil
}

func GetIntegration(req *sourcepkgv1.GetIntegrationRequest) (*sourcepkgv1.GetIntegrationResponse, error) {
	bylogs.LogInfo("client get integration")

	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		bylogs.LogErr("client: get integration failed", err)
		return nil, fmt.Errorf("[GetIntegration] %w", err)
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.GetIntegration(ctx, req)
	if err != nil {
		bylogs.LogErr("client: get integration failed", err)
		return nil, fmt.Errorf("[GetIntegration] %w", err)

	}

	return response, nil
}
