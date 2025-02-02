package paymentclientv1

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	paymentpkgv1 "github.com/cuemby/ccp-sdk/gen/go/payment/v1alpha1"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client paymentpkgv1.PaymentAPIServiceClient
var doOnce sync.Once

var paymentServiceUri string
var paymentServiceTimeout string

func init() {
	doOnce.Do(func() {
		paymentServiceTimeout = os.Getenv("PAYMENT_SERVICE_TIMEOUT")
		if paymentServiceTimeout == "" {
			paymentServiceTimeout = "30s"
		}
		paymentServiceUri = os.Getenv("PAYMENT_SERVICE_URI")
		con, err := grpc.Dial(paymentServiceUri, grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			panic(err)
		}
		client = paymentpkgv1.NewPaymentAPIServiceClient(con)
	})
}

func CreateCustomer(in *paymentpkgv1.CreateCustomerRequest) (response *paymentpkgv1.CreateCustomerResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateCustomer(ctx, &paymentpkgv1.CreateCustomerRequest{
		OrganizationId: in.OrganizationId,
		Name:           in.Name,
		Email:          in.Email,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create customer", err)
		return nil, fmt.Errorf("[CreateCustomer] %w", err)
	}
	return response, nil
}

func DeleteCustomer(in *paymentpkgv1.DeleteCustomerRequest) (response *paymentpkgv1.DeleteCustomerResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteCustomer(ctx, &paymentpkgv1.DeleteCustomerRequest{
		OrganizationId: in.OrganizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete customer", err)
		return nil, fmt.Errorf("[DeleteCustomer] %w", err)
	}
	return response, nil
}

func CreateSubscription(in *paymentpkgv1.CreateSubscriptionRequest) (response *paymentpkgv1.CreateSubscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateSubscription(ctx, &paymentpkgv1.CreateSubscriptionRequest{
		OrganizationId: in.OrganizationId,
		Subscription:   in.Subscription,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create subscription", err)
		return nil, fmt.Errorf("[CreateSubscription] %w", err)
	}
	return response, nil
}

func CreateProject(in *paymentpkgv1.CreateProjectRequest) (response *paymentpkgv1.CreateProjectResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateProject(ctx, &paymentpkgv1.CreateProjectRequest{
		OrganizationId: in.OrganizationId,
		Project:        in.Project,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create Project", err)
		return nil, fmt.Errorf("[CreateProject] %w", err)
	}
	return response, nil
}

func CreateInvoice(in *paymentpkgv1.CreateInvoiceRequest) (response *paymentpkgv1.CreateInvoiceResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateInvoice(ctx, &paymentpkgv1.CreateInvoiceRequest{
		InvoiceId: in.InvoiceId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create subscription", err)
		return nil, fmt.Errorf("[CreateInvoice] %w", err)
	}
	return response, nil
}

func CancelSubscription(in *paymentpkgv1.CancelSubscriptionRequest) (response *paymentpkgv1.CancelSubscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CancelSubscription(ctx, &paymentpkgv1.CancelSubscriptionRequest{
		SubscriptionId: in.SubscriptionId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error cancel subscription", err)
		return nil, fmt.Errorf("[CancelSubscription] %w", err)
	}
	return response, nil
}

func GetSubscription(in *paymentpkgv1.GetSubscriptionRequest) (response *paymentpkgv1.GetSubscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetSubscription(ctx, &paymentpkgv1.GetSubscriptionRequest{
		SubscriptionId: in.SubscriptionId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get susbcription", err)
		return nil, fmt.Errorf("[GetSubscription] %w", err)
	}
	return response, nil
}

func GetBilingMonth(in *paymentpkgv1.GetBilingMonthRequest) (response *paymentpkgv1.GetBilingMonthResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetBilingMonth(ctx, &paymentpkgv1.GetBilingMonthRequest{
		InvoiceId: in.InvoiceId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get GetBilingMonth", err)
		return nil, fmt.Errorf("[GetBilingMonth] %w", err)
	}
	return response, nil
}

func GetCustomer(in *paymentpkgv1.GetCustomerRequest) (response *paymentpkgv1.GetCustomerResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetCustomer(ctx, &paymentpkgv1.GetCustomerRequest{
		OrganizationId: in.OrganizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get Customer", err)
		return nil, fmt.Errorf("[GetCustomer] %w", err)
	}
	return response, nil
}

func CreatePayment(in *paymentpkgv1.CreatePaymentRequest) (response *paymentpkgv1.CreatePaymentResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	fmt.Println("CreatePayment---", in)
	response, err = client.CreatePayment(ctx, &paymentpkgv1.CreatePaymentRequest{
		OrganizationId: in.OrganizationId,
		Payment:        in.Payment,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create payment", err)
		return nil, fmt.Errorf("[CreatePayment] %w", err)
	}
	return response, nil
}

func GetPayment(in *paymentpkgv1.GetPaymentRequest) (response *paymentpkgv1.GetPaymentResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetPayment(ctx, &paymentpkgv1.GetPaymentRequest{
		CardId: in.CardId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get payment", err)
		return nil, fmt.Errorf("[GetPayment] %w", err)
	}
	return response, nil
}

func GetPayments(in *paymentpkgv1.GetPaymentsRequest) (response *paymentpkgv1.GetPaymentsResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetPayments(ctx, &paymentpkgv1.GetPaymentsRequest{
		OrganizationId: in.OrganizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get payments", err)
		return nil, fmt.Errorf("[GetPayments] %w", err)
	}
	return response, nil
}

func GetOrganization(organizationId string) (response *paymentpkgv1.GetOrganizationResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetOrganization(ctx, &paymentpkgv1.GetOrganizationRequest{
		OrganizationId: organizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get payments", err)
		return nil, fmt.Errorf("[GetOrganization] %w", err)
	}
	return response, nil
}

func ListProjects(organizationId string) (response *paymentpkgv1.ListProjectsResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListProjects(ctx, &paymentpkgv1.ListProjectsRequest{
		OrganizationId: organizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get  ListProjects", err)
		return nil, fmt.Errorf("[ListProjects] %w", err)
	}
	return response, nil
}

func DeletePayment(in *paymentpkgv1.DeletePaymentRequest) (response *paymentpkgv1.DeletePaymentResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	messageLastPayment := "You can’t remove this Payment Method until you are current with your payment or add another Payment Method."
	response, err = client.DeletePayment(ctx, &paymentpkgv1.DeletePaymentRequest{
		OrganizationId: in.OrganizationId,
		CardId:         in.CardId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete payment", err)
		if err != nil {
			log.Printf("%s: %v", "Error delete payment", err)
			return nil, fmt.Errorf("%s ", messageLastPayment)
		}
	}
	return response, nil
}

func DeleteProject(in *paymentpkgv1.DeleteProjectRequest) (response *paymentpkgv1.DeleteProjectResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.DeleteProject(ctx, &paymentpkgv1.DeleteProjectRequest{
		OrganizationId: in.OrganizationId,
		ProjectId:      in.ProjectId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete payment", err)
		return nil, fmt.Errorf("%s: %w", "Error delete payment", err)
	}
	return response, nil
}

func ListPayment(in *paymentpkgv1.ListPaymentRequest) (response *paymentpkgv1.ListPaymentResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListPayment(ctx, &paymentpkgv1.ListPaymentRequest{
		OrganizationId: in.OrganizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list payment", err)
		return nil, fmt.Errorf("%s: %w", "Error list payment", err)

	}
	return response, nil
}

func InvoiceFilter(in *paymentpkgv1.InvoiceFilterRequest) (response *paymentpkgv1.InvoiceFilterResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.InvoiceFilter(ctx, &paymentpkgv1.InvoiceFilterRequest{
		Year:           in.Year,
		Month:          in.Month,
		CustomerList:   in.CustomerList,
		OrganizationId: in.OrganizationId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get InvoiceFilter", err)
		return nil, fmt.Errorf("%s: %w", "Error get InvoiceFilter", err)

	}
	return response, nil
}

func StopProject(in *paymentpkgv1.StopProjectRequest) (response *paymentpkgv1.StopProjectResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.StopProject(ctx, &paymentpkgv1.StopProjectRequest{
		OrganizationId: in.OrganizationId,
		ProjectId:      in.ProjectId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error stop project", err)
		return nil, fmt.Errorf("%s: %w", "Error stop project", err)
	}
	return response, nil
}

func SetDefaultPaymentMethod(in *paymentpkgv1.SetDefaultPaymentMethodRequest) (response *paymentpkgv1.SetDefaultPaymentMethodResponse, err error) {
	fmt.Println("SetDefaultPaymentMethod")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.SetDefaultPaymentMethod(ctx, &paymentpkgv1.SetDefaultPaymentMethodRequest{
		OrganizationId: in.OrganizationId,
		CardId:         in.CardId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error set default payment method", err)
		return nil, fmt.Errorf("%s: %w", "Error set default payment method", err)
	}
	return response, nil
}

func ConsumeByProject(in *paymentpkgv1.ConsumeByProjectRequest) (response *paymentpkgv1.ConsumeByProjectResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ConsumeByProject(ctx, &paymentpkgv1.ConsumeByProjectRequest{
		OrganizationId: in.OrganizationId,
		Year:           in.Year,
		Month:          in.Month,
	})

	if err != nil {
		log.Printf("%s: %v", "Error consume by project", err)
		return nil, fmt.Errorf("%s: %w", "Error consume by project", err)
	}
	return response, nil
}

func CreateBlockchainNodeSubscription(in *paymentpkgv1.BlockChainSubscriptionRequest) (response *paymentpkgv1.BlockChainSubscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.BlockChainSubscription(ctx, &paymentpkgv1.BlockChainSubscriptionRequest{
		OrganizationId: in.OrganizationId,
		CustomerId:     in.CustomerId,
		Blockchain:     in.Blockchain,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create blockchain node", err)
		return nil, fmt.Errorf("%s: %w", "Error create blockchain node", err)
	}
	return response, nil
}

func ListCustomers(in *paymentpkgv1.ListCustomersRequest) (response *paymentpkgv1.ListCustomersResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.ListCustomers(ctx, &paymentpkgv1.ListCustomersRequest{
		Empty: in.Empty,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list customers", err)
		return nil, fmt.Errorf("%s: %w", "Error list customers", err)
	}
	return response, nil
}

func UpdateProject(in *paymentpkgv1.UpdateProjectRequest) (response *paymentpkgv1.UpdateProjectResponse, err error) {
	fmt.Println("UpdateProject")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()
	response, err = client.UpdateProject(ctx, &paymentpkgv1.UpdateProjectRequest{
		OrganizationId: in.OrganizationId,
		Project:        in.Project,
	})

	if err != nil {
		log.Printf("%s: %v", "Error update project", err)
		return nil, fmt.Errorf("%s: %w", "Error update project", err)
	}
	return response, nil
}

func Webhook(in *paymentpkgv1.WebHookRequest) (response *paymentpkgv1.WebHookResponse, err error) {
	fmt.Println("Webhook")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))

	defer cancel()
	response, err = client.WebHook(ctx, &paymentpkgv1.WebHookRequest{
		Data: in.Data,
	})

	if err != nil {
		log.Printf("%s: %v", "Error webhook", err)
		return nil, fmt.Errorf("%s: %w", "Error webhook", err)
	}
	return response, nil
}

func ListProjectById(in *paymentpkgv1.ListProjectByIdRequest) (response *paymentpkgv1.ListProjectByIdResponse, err error) {
	fmt.Println("ListProjectById")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))

	defer cancel()
	response, err = client.ListProjectById(ctx, &paymentpkgv1.ListProjectByIdRequest{
		OrganizationId: in.OrganizationId,
		ProjectId:      in.ProjectId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error ListProjectById", err)
		return nil, fmt.Errorf("%s: %w", "Error ListProjectById", err)
	}
	return response, nil
}

func GetProjectTrialEndSubscription(in *paymentpkgv1.GetProjectTrialEndSubscriptionRequest) (response *paymentpkgv1.GetProjectTrialEndSubscriptionResponse, err error) {
	fmt.Println("GetProjectTrialEndSubscription")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))

	defer cancel()
	response, err = client.GetProjectTrialEndSubscription(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error GetProjectTrialEndSubscription", err)
		return nil, fmt.Errorf("%s: %w", "Error GetProjectTrialEndSubscription", err)
	}
	return response, nil
}

func GetSubscriptionByProject(in *paymentpkgv1.GetSubscriptionByProjectRequest) (response *paymentpkgv1.GetSubscriptionByProjectResponse, err error) {
	fmt.Println("GetSubscriptionByProject")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))

	defer cancel()
	response, err = client.GetSubscriptionByProject(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error GetSubscriptionByProject", err)
		return nil, fmt.Errorf("%s: %w", "Error GetSubscriptionByProject", err)
	}
	return response, nil
}

func HandleSubscriptionEvents(in *paymentpkgv1.HandleSubscriptionEventsRequest) (response *paymentpkgv1.HandleSubscriptionEventsResponse, err error) {
	fmt.Println("HandleSubscriptionEvents")
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))

	defer cancel()
	response, err = client.HandleSubscriptionEvents(ctx, in)

	if err != nil {
		log.Printf("%s: %v", "Error HandleSubscriptionEvents", err)
		return nil, fmt.Errorf("%s: %w", "Error HandleSubscriptionEvents", err)
	}
	return response, nil
}
