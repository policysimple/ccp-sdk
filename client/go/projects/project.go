package projectsclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	projectspkgv1 "github.com/cuemby/ccp-sdk/gen/go/accounts/v1alpha1/projects"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	client                projectspkgv1.ProjectServiceClient
	doOnce                sync.Once
	projectServiceUri     string
	projectServiceTimeout string
)

func init() {
	doOnce.Do(func() {
		projectServiceTimeout = os.Getenv("PROJECT_SERVICE_TIMEOUT")

		if projectServiceTimeout == "" {
			projectServiceTimeout = "30s"
		}

		projectServiceUri = os.Getenv("PROJECT_SERVICE_URI")
		con, err := grpc.Dial(projectServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = projectspkgv1.NewProjectServiceClient(con)
	})

}

func ListProjects(orgId string) (response *projectspkgv1.ListProjectResponse, err error) {
	log.Println("List Project SDK")
	dur, err := time.ParseDuration(projectServiceTimeout)

	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(dur))
	defer cancel()

	response, err = client.ListProject(ctx, &projectspkgv1.ListProjectRequest{
		OrganizationId: orgId,
	})

	if err != nil {
		log.Println("SDK Error", err)
		return nil, fmt.Errorf("[ListProjects] %w", err)
	}

	return response, nil
}
