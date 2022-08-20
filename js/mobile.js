document.getElementById('mobile-btn-plus').addEventListener('click',function(){
    const mobileValuePlus=forPlusMinus('mobile-input-field',true);
    const productValue=1219;
    const mobileValuePlusTotal=setprice('mobile-price',mobileValuePlus,productValue);
    const SubTotalPlusMobile=SubTotalTaxTotal();
})
document.getElementById('mobile-minus-btn').addEventListener('click',function(){
    const mobileValueMinus=forPlusMinus('mobile-input-field',false);
    const productValue=1219;
    const mobileValueMinusTotal= setprice('mobile-price',mobileValueMinus,productValue);
    const SubTotalMinusMobile=SubTotalTaxTotal();
})