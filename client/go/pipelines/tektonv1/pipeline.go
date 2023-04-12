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

func CreateTektonTaskPipeline(in *tektonPipelinepkgv1.CreateTektonTaskPipelineRequest) (response *tektonPipelinepkgv1.CreateTektonTaskPipelineResponse, err error) {
	bylogs.LogInfo("client: create tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateTektonTaskPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: create tekton task pipeline failed", err)
		return nil, fmt.Errorf("[CreateTektonPipeline] %w", err)
	}
	return response, nil
}

func DeleteTektonTaskPipeline(in *tektonPipelinepkgv1.DeleteTektonTaskPipelineRequest) (response *tektonPipelinepkgv1.DeleteTektonTaskPipelineResponse, err error) {
	bylogs.LogInfo("client: delete tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteTektonTaskPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: delete tekton task pipeline failed", err)
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}

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

// CUSTOM PIPELINES
func CreateCustomPipeline(in *tektonPipelinepkgv1.CreateCustomPipelineRequest) (response *tektonPipelinepkgv1.CreateCustomPipelineResponse, err error) {
	bylogs.LogInfo("client: create tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateCustomPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: create custom pipeline failed", err)
		return nil, fmt.Errorf("[CreateTektonPipeline] %w", err)
	}
	return response, nil
}

func DeleteCustonPipeline(in *tektonPipelinepkgv1.DeleteCustomPipelineRequest) (response *tektonPipelinepkgv1.DeleteCustomPipelineResponse, err error) {
	bylogs.LogInfo("client: delete tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteCustomPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: delete custom pipeline failed", err)
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}

func ListCustomPipeline(in *tektonPipelinepkgv1.ListCustomPipelineRequest) (response *tektonPipelinepkgv1.ListCustomPipelineResponse, err error) {
	bylogs.LogInfo("client: list tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListCustomPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list custom pipeline failed", err)
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}

func GetCustomPipeline(in *tektonPipelinepkgv1.GetCustomPipelineRequest) (response *tektonPipelinepkgv1.GetCustomPipelineResponse, err error) {
	bylogs.LogInfo("client: list tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetCustomPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list custom pipeline failed", err)
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}

func UpdateCustomPipeline(in *tektonPipelinepkgv1.UpdateCustomPipelineRequest) (response *tektonPipelinepkgv1.UpdateCustomPipelineResponse, err error) {
	bylogs.LogInfo("client: list tekton task pipeline")
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateCustomPipeline(ctx, in)

	if err != nil {
		bylogs.LogErr("client: list custom pipeline failed", err)
		return nil, fmt.Errorf("[DeleteTektonPipeline] %w", err)
	}
	return response, nil
}
