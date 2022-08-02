package environmentclientv1

import (
	"context"
	"fmt"
	"os"
	"sync"
	"time"

	bylogs "github.com/cuemby/by-go-utils/pkg/bylogger"
	tektonPipelinepkgv1 "github.com/cuemby/ccp-sdk/gen/go/pipelines/tekton/v1alpha1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

var client tektonPipelinepkgv1.TektonPipelineAPIServiceClient
var doOnce sync.Once

var tektonPipelineServiceUri string
var tektonPipelineServiceTimeout string

func init() {
	doOnce.Do(func() {
		tektonPipelineServiceTimeout = os.Getenv("PIPELINE_SERVICE_TIMEOUT")
		if tektonPipelineServiceTimeout == "" {
			tektonPipelineServiceTimeout = "30s"
		}
		tektonPipelineServiceUri = os.Getenv("PIPELINE_SERVICE_URI")
		con, err := grpc.Dial(tektonPipelineServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = tektonPipelinepkgv1.NewTektonPipelineAPIServiceClient(con)
	})
}

func CreateTektonPipeline(in *tektonPipelinepkgv1.CreateTektonPipelineRequest) (response *tektonPipelinepkgv1.CreateTektonPipelineResponse, err error) {
	bylogs.LogInfo("client: create tekton pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateTektonPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: create tekton pipeline failed", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error create tekton pipeline", err),
		)
	}
	return response, nil
}

func ListTektonPipeline(in *tektonPipelinepkgv1.ListTektonPipelineRequest) (response *tektonPipelinepkgv1.ListTektonPipelineResponse, err error) {
	bylogs.LogInfo("client: list tekton pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListTektonPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list tekton pipeline failed", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error list tekton pipeline", err),
		)
	}
	return response, nil
}

func DeleteTektonPipeline(in *tektonPipelinepkgv1.DeleteTektonPipelineRequest) (response *tektonPipelinepkgv1.DeleteTektonPipelineResponse, err error) {
	bylogs.LogInfo("client: delete tekton pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteTektonPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: delete tekton pipeline failed", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error delete tekton pipeline", err),
		)
	}
	return response, nil
}

func ListTektonTask(in *tektonPipelinepkgv1.ListTektonTaskRequest) (response *tektonPipelinepkgv1.ListTektonTaskResponse, err error) {
	bylogs.LogInfo("client: list tekton task")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListTektonTask(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list tekton task failed", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "error list tekton task", err),
		)
	}
	return response, nil
}
