function forPlusMinus(inputId,isIncrease){
    const InputField= document.getElementById(inputId);
    const Value= parseInt(InputField.value);
    let newValue;
    if(isIncrease==true){
         newValue=Value+1;
    }else{
         newValue=Value-1;
    }
    
     return InputField.value=newValue;
}
function setprice(priceId,price,productPrice){
    const priceField= document.getElementById(priceId); 
    const priceFieldValue= parseInt(price)*productPrice;
    priceField.innerText=priceFieldValue;
    return priceFieldValue;
}

function findTheValue(idName){
     const fieldIdValue=document.getElementById(idName);
     const fieldValue = parseInt(fieldIdValue.innerText);
     return fieldValue
}
function setText(Textid,amount){
     const totalField = document.getElementById(Textid);
     totalField.innerText=amount;
}
function SubTotalTaxTotal(){
     const subTotal= findTheValue('case-price')+findTheValue('mobile-price');
     setText('sub-total',subTotal)
     const tax= subTotal* 0.1;
     setText('tax',tax);
     const total= subTotal+parseInt(tax);
     setText('total',total);
}