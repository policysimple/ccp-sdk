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
	"google.golang.org/grpc/credentials/insecure"
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
		return nil, fmt.Errorf("[CreateTektonPipeline] %w", err)
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
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}
