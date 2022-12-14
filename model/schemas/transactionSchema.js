export const transactionSchema = {
    name: 'transactions',
    title: 'Transactions',
    type: 'document',
    fields:[
        {
            name: 'txHash',
            title: 'Transacton Hash',
            type: 'string',
        },
        {
            name: 'fromAddress',
            title: 'From (wallet Address)',
            type: 'string',
        },
        {
            name: 'toAddress',
            title: 'To (wallet Address)',
            type: 'string',
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        },
    ] ,
}