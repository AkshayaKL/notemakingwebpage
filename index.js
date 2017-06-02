var addnote = document.querySelector('.add');
var  actualnote=[];
var count=0;
addnote.onclick=function()
{ var note=document.getElementById("fielddd").value; 
 alert(note);
 actualnote.push(note);
 count++;
}
var deletenote=document.querySelector('.delete') ;
deletenote.onclick=function()
{
var deleteval= prompt("which one?")-1;
  var newt=[];
  var p;
  p;
 
   for(p=0;p<deleteval;p++)
     newt[p]=actualnote[p];
   for(p=deleteval;p<count-1;p++)
     {
       for(k=deleteval+1;k<count;k++)
         newt[p]=actualnote[k];
     }
 count--;
   for
     (var s=0;s<count;s++)
   {actualnote[s]=newt[s];
}

   
  
}
var see=document.querySelector('.see');
see.onclick=function()
{
  
  
 for(var t=0;t<count;t++)
 {
   document.getElementById(t+1).innerHTML=(actualnote[t]);
   
 
 } 
  
  
}


  

