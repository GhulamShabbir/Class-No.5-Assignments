let discount = ( discountPercentage : number , productPrice : number = 3500) =>{
    let discountAmount = productPrice * discountPercentage / 100

    if (discountPercentage <= 50){
        console.log(`Orignal Product Price = ${productPrice}`);
        console.log(`Discounted Product Amount = ${discountAmount}`);
        console.log(`Final Product Price = ${productPrice - discountAmount}`);
    }else if (discountPercentage > 50){
        console.log(`Error: Discount Percentage is invalid.`);
        
    }

};


discount(27)