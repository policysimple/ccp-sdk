package environmentclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

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
		tektonPipelineServiceTimeout = os.Getenv("TEKTON_PIPELINE_SERVICE_TIMEOUT")
		if tektonPipelineServiceTimeout == "" {
			tektonPipelineServiceTimeout = "30s"
		}
		tektonPipelineServiceUri = os.Getenv("TEKTON_PIPELINE_SERVICE_URI")
		con, err := grpc.Dial(tektonPipelineServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = tektonPipelinepkgv1.NewTektonPipelineAPIServiceClient(con)
	})
}

type ParamsStruct struct {
	Name        string
	ValueType   string
	ValueString string
	ValueArray  []string
}

type TaskParamsStruct struct {
	ParamName      string
	ParamValueType string
	ParamValue     string
}

type TaskStruct struct {
	Id                 string
	TaskName           string
	TaskRefName        string
	TaskKind           string
	TaskRunAfter       []string
	TaskWorkspacesName string
	TaskWorkspacesMain string
	TaskParams         []TaskParamsStruct
	Description        string
}

func CreateTektonPipeline(
	organizationId uint32, projectId uint32, name string, namespace string, workspace string, params []ParamsStruct, tasks []TaskStruct, userId string,
) (response *tektonPipelinepkgv1.CreateTektonPipelineResponse, err error) {
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	var arrayTasks []*tektonPipelinepkgv1.Task
	var arrayTaskParameters []*tektonPipelinepkgv1.TaskParams
	var arrayParams []*tektonPipelinepkgv1.Params

	if len(tasks) == 0 {
		log.Printf("%s: ", "Tasks is required")
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: ", "Tasks is required"),
		)
	}

	for _, item := range params {

		if item.ValueString == "string" {
			arrayParams = append(arrayParams, &tektonPipelinepkgv1.Params{
				Name:        item.Name,
				ValueType:   item.ValueType,
				ValueString: item.ValueString,
			})
		}

		if item.ValueString == "array" {
			arrayParams = append(arrayParams, &tektonPipelinepkgv1.Params{
				Name:       item.Name,
				ValueType:  item.ValueType,
				ValueArray: item.ValueArray,
			})
		}
	}

	for _, item := range tasks {

		for _, itemDetail := range item.TaskParams {
			arrayTaskParameters = append(arrayTaskParameters, &tektonPipelinepkgv1.TaskParams{
				ParamName:      itemDetail.ParamName,
				ParamValueType: itemDetail.ParamValueType,
				ParamValue:     itemDetail.ParamValue,
			})
		}

		arrayTasks = append(arrayTasks, &tektonPipelinepkgv1.Task{
			TaskName:           item.TaskName,
			TaskRefName:        item.TaskRefName,
			TaskKind:           item.TaskKind,
			TaskRunAfter:       item.TaskRunAfter,
			TaskWorkspacesName: item.TaskWorkspacesName,
			TaskWorkspacesMain: item.TaskWorkspacesMain,
			TaskParams:         arrayTaskParameters,
			Description:        item.Description,
		})
	}

	response, err = client.CreateTektonPipeline(ctx, &tektonPipelinepkgv1.CreateTektonPipelineRequest{
		TektonPipeline: &tektonPipelinepkgv1.Pipeline{
			OrganizationId:      organizationId,
			ProjectId:           projectId,
			TypeMetaKind:        "Pipeline",
			TypeMetaApiVersion:  "tekton.dev/v1beta1",
			ObjectMetaName:      name,
			ObjectMetaNamespace: namespace,
			SpecWorkspacesName:  workspace,
			Params:              arrayParams,
			Tasks:               arrayTasks,
		},
		UserId: userId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create tekton pipeline", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create tekton pipeline", err),
		)
	}
	return response, nil
}

func ListTektonPipeline(projectId uint32) (response *tektonPipelinepkgv1.ListTektonPipelineResponse, err error) {
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListTektonPipeline(ctx, &tektonPipelinepkgv1.ListTektonPipelineRequest{
		ProjectId: projectId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list tekton pipeline", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list tekton pipeline", err),
		)
	}
	return response, nil
}

func DeleteTektonPipeline(tektonPipelineId string, userId string) (response *tektonPipelinepkgv1.DeleteTektonPipelineResponse, err error) {
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteTektonPipeline(ctx, &tektonPipelinepkgv1.DeleteTektonPipelineRequest{
		TektonPipelineId: tektonPipelineId,
		UserId:           userId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete tekton pipeline", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete tekton pipeline", err),
		)
	}
	return response, nil
}

func ListTektonTask() (response *tektonPipelinepkgv1.ListTektonTaskResponse, err error) {
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListTektonTask(ctx, &tektonPipelinepkgv1.ListTektonTaskRequest{})

	if err != nil {
		log.Printf("%s: %v", "Error list tekton task", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list tekton task", err),
		)
	}
	return response, nil
}
