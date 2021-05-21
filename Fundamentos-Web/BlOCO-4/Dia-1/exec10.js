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



