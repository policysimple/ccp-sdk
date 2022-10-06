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
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
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
		Customer: in.Customer,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create customer", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create customer", err),
		)
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
		CustomerId:     in.CustomerId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete customer", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete customer", err),
		)
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
		CustomerId:   in.CustomerId,
		Subscription: in.Subscription,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create subscription", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create subscription", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create Project", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create subscription", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error cancel subscription", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get subscription", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get GetBilingMonth", err),
		)
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
		CustomerId: in.CustomerId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get Customer", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get Customer", err),
		)
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

	response, err = client.CreatePayment(ctx, &paymentpkgv1.CreatePaymentRequest{
		CustomerId: in.CustomerId,
		Payment:    in.Payment,
	})

	if err != nil {
		log.Printf("%s: %v", "Error create payment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error create payment", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get payment", err),
		)
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
		CustomerId:     in.CustomerId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get payments", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get payments", err),
		)
	}
	return response, nil
}

func GetOrganization(organizationId uint32) (response *paymentpkgv1.GetOrganizationResponse, err error) {
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get payments", err),
		)
	}
	return response, nil
}

func ListProjects(organizationId uint32) (response *paymentpkgv1.ListProjectsResponse, err error) {
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get  ListProjects", err),
		)
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

	response, err = client.DeletePayment(ctx, &paymentpkgv1.DeletePaymentRequest{
		CardId:     in.CardId,
		CustomerId: in.CustomerId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error delete payment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete payment", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error delete payment", err),
		)
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
		CustomerId: in.CustomerId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error list payment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error list payment", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get InvoiceFilter", err),
		)
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
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error stop project", err),
		)
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
		CardId:     in.CardId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error set default payment method", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error set default payment method", err),
		)
	}
	return response, nil
}