package applicationsclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	applicationpkgv1 "github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client applicationpkgv1.ApplicationServiceClient
var doOnce sync.Once

var applicationServiceUri string
var applicationServiceTimeout string

func init() {
	doOnce.Do(func() {
		applicationServiceTimeout = os.Getenv("APPLICATION_SERVICE_TIMEOUT")
		if applicationServiceTimeout == "" {
			applicationServiceTimeout = "30s"
		}
		applicationServiceUri = os.Getenv("APPLICATION_SERVICE_URI")
		con, err := grpc.Dial(applicationServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = applicationpkgv1.NewApplicationServiceClient(con)
	})
}

func GetOneApplicationById(applicationId string) (response *applicationpkgv1.GetApplicationResponse, err error) {
	bylogs.LogInfo("GetOneApplicationById: ", applicationId)
	d, err := time.ParseDuration(applicationServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetApplication(ctx, &applicationpkgv1.GetApplicationRequest{
		Id: applicationId,
	})

	if err != nil {
		bylogs.LogErr("error GetOneApplicationById: ", err)
		return nil, fmt.Errorf("[GetOneApplicationById] %w", err)

	}
	bylogs.LogInfo("response GetOneApplicationById: ", response)
	return response, nil
}

func ListApplicationByOrganization(organizationId uint32) (response *applicationpkgv1.ListApplicationsByOrganizationResponse, err error) {
	bylogs.LogInfo("client list application")
	d, err := time.ParseDuration(applicationServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListApplicationsByOrganization(ctx, &applicationpkgv1.ListApplicationsByOrganizationRequest{
		OrganizationId: organizationId,
	})

	if err != nil {
		bylogs.LogErr("client list application", err)
		return nil, fmt.Errorf("[ListApplicationByOrganization] %w", err)
	} else {
		bylogs.LogInfo("client list application", response)
	}
	return response, nil
}

func ListApplicationByProject(projectId uint32) (response *applicationpkgv1.ListApplicationResponse, err error) {
	bylogs.LogInfo("client list application")
	d, err := time.ParseDuration(applicationServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListApplication(ctx, &applicationpkgv1.ListApplicationRequest{
		ProjectId: projectId,
	})

	if err != nil {
		bylogs.LogErr("client list application", err)
		return nil, fmt.Errorf("[ListApplicationByProject] %w", err)

	}
	bylogs.LogInfo("client list application", response)
	return response, nil

}

func DeleteApplication(req *applicationpkgv1.DeleteApplicationRequest) (*applicationpkgv1.DeleteApplicationResponse, error) {
	bylogs.LogInfo("client list application")
	d, err := time.ParseDuration(applicationServiceTimeout)
	if err != nil {
		return nil, err
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err := client.DeleteApplication(ctx, req)

	if err != nil {
		bylogs.LogErr("client list application", err)
		return nil, fmt.Errorf("[DeleteApplicationRequest] %w", err)

	}
	bylogs.LogInfo("client list application", response)
	return response, nil
}
