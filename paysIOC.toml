// A high-level component that creates its own service instant
class ShoppingCart {
    private paymentService: PaymentService;

    constructor(paymentServiceType: string) {
	// ShoppingCart directly creates instancesof PaymentService implementations
	if (paymentServiceType === 'paypal') {
	    this.paymentService = new PaypalService();
	} else if (paymnetServiceType === 'stripe') {
	 this.paymentService = new StripeService();
	} else {
	    throw new Error('Invalid payment service type');
	}

	checkout(amount: number); void {
	    // The high-level component calls the low-level component
	    this.paymentService.processPayment(amount);
	}
  }
