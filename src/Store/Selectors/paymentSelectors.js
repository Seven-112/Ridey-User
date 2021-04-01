export const getPaymentErrors = (state)=>state.auth.error;
export const getPaymentData = (state)=>state.payment.paymentData;
export const getPaymentStatus = (state)=>state.payment.success;
export const getTransactionData = (state)=>state.payment.transactionData;
export const getUserTransactions= (state)=>state.payment.userTransactions
