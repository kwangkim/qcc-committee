var sorted=true;// Sorted in an increasing order.
var schedules={
  seminars:[
    {
      month:9, day:30, year :2015, speaker:" Dr. Donley, Robert", affiliation:"QCC",
      title:"TBA",
      description:"TBA"
    },
    {
      month:10, day:7, year :2015, speaker:" Dr. Gill, Tepper", affiliation:"Howard University",
      title:"The Remarkable Jones Strong Distribution Hilbert Space",
      description:"The purpose of this talk is to construct a new Hilbert space, \\(SD^2 (\\mathbb{R}^3 )\\) . This space provides the basis for a rigorous development of Feynman's path integral formulation of quantum mechanics and the Heisenberg and Schr&#246;dinger theories. The standard space used \\(L^2 (\\mathbb{R}^3)\\), allows for the Heisenberg and Schr&#246;dinger formulations, but does not allow for Feynman&#8217;s formulation. We call it the Jones strong distribution Hilbert space, after Frank Jones of Rice University, because we use a remarkable function discovered by him. Our new space \(SD^2 (\mathbb{R}^3 )\) also contains the \\(D'[\\mathbb{R}^3 ]\\) , the spaces of Schwartz distributions, the kernel for the Feynman path integral and the Dirac delta function as norm bounded function."
    },
    {
      month:12, day:2, year :2015, speaker:" Dr. Davide N. Pham", affiliation:"QCC",
      title:"TBA",
      description:"TBA"
    },
  ]
};
// Find the active index
//Sort
var datecompare=function(e1,e2){
  return Date(e1.year,e1.month,e1.day).getTime()-Date(e1.year,e1.month,e1.day).getTime();
};
if(!sorted){
  schedules.seminars.sort(datecompare);  
}
// find_if return the first index which satisfies the condition. Otherwise return -1
var find_if=function(arr, cond){
  for(var i=0;i<arr.length;i++){
    if(typeof cond=== "function" && cond(arr[i])){ return i;}
  }
  return -1; //if not return -1
};

// Find the first day  which is equal or later than today. If it does not exist, the last day.
//var today=new Date.now();
var today=new Date(2015,10,5).getTime();
var cond= function(e){
  var datetime= new Date(e.year,e.month,e.day).getTime();
  if(datetime-today>=0){return true;}
  else{ return false;}
};
var activeindex=find_if(schedules.seminars,cond);
if(activeindex===-1){activeindex=schedules.seminars.length-1;}
console.log(activeindex);


