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

type TaskParamsStruct struct {
	Name  string
	Value string
}

type TaskStruct struct {
	Id            string
	Name          string
	TaskRefName   string
	WorkspaceName string
	TaskType      int8
	TaskParams    []TaskParamsStruct
}

func CreateTektonPipeline(
	organizationId uint32, projectId uint32, name string, workspaces string, tasks []TaskStruct, userId string,
) (response *tektonPipelinepkgv1.CreateTektonPipelineResponse, err error) {
	d, err := time.ParseDuration(tektonPipelineServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	var arrayTasks []*tektonPipelinepkgv1.Task
	var arrayTaskParameters []*tektonPipelinepkgv1.TaskParams

	if len(tasks) == 0 {
		log.Printf("%s: ", "Tasks is required")
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: ", "Tasks is required"),
		)
	}

	for _, item := range tasks {

		for _, itemDetail := range item.TaskParams {
			arrayTaskParameters = append(arrayTaskParameters, &tektonPipelinepkgv1.TaskParams{
				Name:  itemDetail.Name,
				Value: itemDetail.Value,
			})
		}

		arrayTasks = append(arrayTasks, &tektonPipelinepkgv1.Task{
			Name:          item.Name,
			TaskRefName:   item.TaskRefName,
			WorkspaceName: item.WorkspaceName,
			TaskType:      tektonPipelinepkgv1.TaskType(item.TaskType),
			TaskParams:    arrayTaskParameters,
		})
	}

	response, err = client.CreateTektonPipeline(ctx, &tektonPipelinepkgv1.CreateTektonPipelineRequest{
		TektonPipeline: &tektonPipelinepkgv1.Pipeline{
			OrganizationId: organizationId,
			ProjectId:      projectId,
			Name:           name,
			Workspaces:     workspaces,
			Tasks:          arrayTasks,
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
