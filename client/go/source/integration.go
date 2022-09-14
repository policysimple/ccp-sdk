package source

import (
	"context"
	"errors"
	"log"
	"os"
	"sync"
	"time"

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

func DeleteIntegration(req *sourcepkgv1.DeleteIntegrationRequest) (*sourcepkgv1.DeleteIntegrationResponse, error) {
	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteIntegration(ctx, req)
	if err != nil {
		return nil, errors.New("error DeleteIntegration")
	}

	return response, nil
}

func DeleteIntegrationsByOrganization(OrganizationId uint32) (*sourcepkgv1.DeleteIntegrationsByOrganizationResponse, error) {
	log.Println("DeleteIntegrationsByOrganization")

	d, err := time.ParseDuration(sourceServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteIntegrationsByOrganization(ctx, &sourcepkgv1.DeleteIntegrationsByOrganizationRequest{OrganizationId: OrganizationId})
	if err != nil {
		return nil, err
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
		return nil, err
	}

	return response, nil
}
