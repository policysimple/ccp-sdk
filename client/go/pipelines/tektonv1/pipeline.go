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

// CUSTOM PIPELINES
func ListTektonTaskPipeline(in *tektonPipelinepkgv1.ListTektonTaskPipelineRequest) (response *tektonPipelinepkgv1.ListTektonTaskPipelineResponse, err error) {
	bylogs.LogInfo("client: list tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListTektonTaskPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list tekton task pipeline failed", err)
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}

// PIPELINE RUN
func GetPipelineRun(in *tektonPipelinepkgv1.GetPipelineRunRequest) (response *tektonPipelinepkgv1.GetPipelineRunResponse, err error) {
	bylogs.LogInfo("client: get pipeline run")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetPipelineRun(ctx, in)

	if err != nil {
		bylogs.LogErr("client: get pipeline run failed", err)
		return nil, fmt.Errorf("[GetPipelineRun] %w", err)
	}
	return response, nil
}

func ListPipelineRun(in *tektonPipelinepkgv1.ListPipelineRunRequest) (response *tektonPipelinepkgv1.ListPipelineRunResponse, err error) {
	bylogs.LogInfo("client: list pipeline run")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListPipelineRun(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list pipeline run failed", err)
		return nil, fmt.Errorf("[ListPipelineRun] %w", err)
	}
	return response, nil
}

func GetStatusRuntime(in *tektonPipelinepkgv1.GetStatusRuntimeRequest) (response tektonPipelinepkgv1.TektonPipelineAPIService_GetStatusRuntimeClient, err error) {
	bylogs.LogInfo("client: GetStatusRuntime")

	response, err = client.GetStatusRuntime(context.TODO(), in)

	if err != nil {
		bylogs.LogErr("client: GetStatusRuntime failed", err)
		return nil, fmt.Errorf("[GetStatusRuntime] %w", err)
	}
	return response, nil
}

func ChangeStatusRuntimeAndApplication(in *tektonPipelinepkgv1.ChangeStatusRuntimeAndApplicationRequest) (response *tektonPipelinepkgv1.ChangeStatusRuntimeAndApplicationResponse, err error) {
	bylogs.LogInfo("client: ChangeStatusRuntimeAndApplication run")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ChangeStatusRuntimeAndApplication(ctx, in)

	if err != nil {
		bylogs.LogErr("client: ChangeStatusRuntimeAndApplication failed", err)
		return nil, fmt.Errorf("[ChangeStatusRuntimeAndApplication] %w", err)
	}
	return response, nil
}

func RebuildTektonPipeline(in *tektonPipelinepkgv1.RebuildTektonPipelineRequest) (response *tektonPipelinepkgv1.RebuildTektonPipelineResponse, err error) {
	bylogs.LogInfo("client: create tekton pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.RebuildTektonPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: create tekton pipeline failed", err)
		return nil, fmt.Errorf("[RebuildTektonPipeline] %w", err)
	}
	return response, nil
}

func MakeRollbackRuntime(in *tektonPipelinepkgv1.MakeRollbackRuntimeRequest) (response *tektonPipelinepkgv1.MakeRollbackRuntimeResponse, err error) {
	bylogs.LogInfo("client: MakeRollbackRuntime")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.MakeRollbackRuntime(ctx, in)

	if err != nil {
		bylogs.LogErr("client: create tekton pipeline failed", err)
		return nil, fmt.Errorf("[MakeRollbackRuntime] %w", err)
	}
	return response, nil
}
