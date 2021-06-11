function fun()
{
   var inp1=$("#p1");
   var inp2=$("#p2");
   var h=$("#b");
   var val1=inp1.val();
   var val2=inp2.val();
   if((isNaN(val1)&&isNaN(val2))||(val1==""&&val2==""))
   {
       h.html("Enter valid value for feet and inch");
   }
   else if((val1==""&&val1!=0)||isNaN(val1))
   {
         h.html("Enter valid value for feet");
   }
   else if(isNaN(val2)||(val2==""&&val2!=0))
   {
         h.html("Enter valid value for inch");
   }
   else
   {
         var res=val1*(30.48)+val2*2.54;
         res=res.toFixed(2);
         h.html(res +" cm");
   }
}