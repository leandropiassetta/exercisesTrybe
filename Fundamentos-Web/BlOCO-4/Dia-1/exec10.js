/* 
9-Write a program that starts with two values in two different variables: the cost of a product and its sales value. From the values, calculate how much profit (sales value discounting the cost of the product) the company will have when selling one thousand of these products.
Pay attention that, over the product's cost, a 20% tax is levied.
Your program should also emit an error message and close in case any of your entrance values is less than zero.
The profit of a product is the result of the subtraction of the sales value by its cost, and the 20% tax is also part of the cost value.
valorCustoTotal = valorCusto + impostoSobreOCusto
profit = valueSale - valueCostTotal (profit of a product)

*/

const costProduct = 0;
const saleValue = 4 ;
const itensProduct = 1000;
function profitFromSale(costProduct, saleValue) {
    const totalCost = (costProduct * 0.2) + costProduct;
    const totalProfit = (saleValue - totalCost) * itensProduct;
    if(totalProfit <= 0) {
        console.log('you no had profit, please! Dedicate yourself more to sales.')
    } else {
        console.log(totalProfit)
    }
}

profitFromSale(costProduct, saleValue)



