package applicationsclientv1

import (
	"context"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	applicationpkgv1 "github.com/cuemby/ccp-sdk/gen/go/application/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
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
func ListApplicationByOrganization(organizationId uint32) (response *applicationpkgv1.ListApplicationsByOrganizationResponse, err error) {
	bylogs.LogInfo("ListApplication-clientSdk")
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
		bylogs.LogErr("ListApplicationByOrganization-clientSdk", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			err.Error(),
		)
	} else {
		bylogs.LogInfo("ListApplicationByOrganization-clientSdk", response)
	}
	return response, nil
}
