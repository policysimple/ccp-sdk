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
		CustomerId: in.CustomerId,
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

func CreateSuscription(in *paymentpkgv1.CreateSuscriptionRequest) (response *paymentpkgv1.CreateSuscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateSuscription(ctx, &paymentpkgv1.CreateSuscriptionRequest{
		Suscription: in.Suscription,
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

func CreateInvoice(in *paymentpkgv1.CreateInvoiceRequest) (response *paymentpkgv1.CreateInvoiceResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CreateInvoice(ctx, &paymentpkgv1.CreateInvoiceRequest{
		CustomerId: in.CustomerId,
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

func UpdateSuscription(in *paymentpkgv1.UpdateSuscriptionRequest) (response *paymentpkgv1.UpdateSuscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdateSuscription(ctx, &paymentpkgv1.UpdateSuscriptionRequest{
		Suscription: in.Suscription,
	})

	if err != nil {
		log.Printf("%s: %v", "Error update subscription", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update subscription", err),
		)
	}
	return response, nil
}

func CancelSuscription(in *paymentpkgv1.CancelSuscriptionRequest) (response *paymentpkgv1.CancelSuscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.CancelSuscription(ctx, &paymentpkgv1.CancelSuscriptionRequest{
		SuscriptionId: in.SuscriptionId,
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

func GetSuscription(in *paymentpkgv1.GetSuscriptionRequest) (response *paymentpkgv1.GetSuscriptionResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetSuscription(ctx, &paymentpkgv1.GetSuscriptionRequest{
		SuscriptionId: in.SuscriptionId,
	})

	if err != nil {
		log.Printf("%s: %v", "Error get suscription", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error get suscription", err),
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
		Payment: in.Payment,
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
		CustomerId: in.CustomerId,
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

func GetOrganizationPayments(organizationId uint32) (response *paymentpkgv1.GetOrganizationPaymentResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.GetOrganizationPayment(ctx, &paymentpkgv1.GetOrganizationPaymentRequest{
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

func UpdatePayment(in *paymentpkgv1.UpdatePaymentRequest) (response *paymentpkgv1.UpdatePaymentResponse, err error) {
	d, err := time.ParseDuration(paymentServiceTimeout)
	if err != nil {
		return
	}
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(d))
	defer cancel()

	response, err = client.UpdatePayment(ctx, &paymentpkgv1.UpdatePaymentRequest{
		Payment: in.Payment,
	})

	if err != nil {
		log.Printf("%s: %v", "Error update payment", err)
		return nil, status.Errorf(
			codes.InvalidArgument,
			fmt.Sprintf("%s: %v", "Error update payment", err),
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
		CardId: in.CardId,
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
		SuscriptionId: in.SuscriptionId,
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
