document.getElementById('case-btn-plus').addEventListener('click',function(){
   const caseValuePlus= forPlusMinus('case-input-field',true);
   const productValue=59;
   const caseValuePlusTotal= setprice('case-price',caseValuePlus,productValue);
   const SubTotalPlusCase=SubTotalTaxTotal();
})
document.getElementById('case-btn-minus').addEventListener('click',function(){
   const caseValueMinus= forPlusMinus('case-input-field',false);
   const productValue=59;
   const caseValueMinusTotal= setprice('case-price', caseValueMinus,productValue);
   const subTotalMinusCase= SubTotalTaxTotal();

})