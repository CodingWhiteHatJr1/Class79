Student_list_array = [];

function submit(){
   var display_Student_list_array = [];
   for (var j=1; j<=4; j++){
       var name=document.getElementById("Name_of_the_students_"+j).value;
       console.log(name);
       Student_list_array.push(name);
   }
   console.log(Student_list_array);
   var length=Student_list_array.length;
   console.log(length);

   for(var k=0; k<length; k++){
    display_Student_list_array.push("<h4>NAME- "+Student_list_array[k]+"</h4>");
    console.log(display_Student_list_array);
   }
   console.log(display_Student_list_array);
   document.getElementById("display_name_with_commas").innerHTML=display_Student_list_array;

   var remove=display_Student_list_array.join(" ");
   console.log(remove);
   document.getElementById("display_name_without_commas").innerHTML=remove;

   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    Student_list_array.sort();
    console.log(Student_list_array);

    var display_Student_list_array_sort = [];
    var length=Student_list_array.length;
    console.log(length);

    for(var k=0; k<length; k++){
        display_Student_list_array_sort.push("<h4>NAME- "+Student_list_array[k]+"</h4>");
        console.log(display_Student_list_array_sort);
    }
    var remove=display_Student_list_array_sort.join(" ");
    console.log(remove);
   document.getElementById("display_name_without_commas").innerHTML=remove;
}
function New_Update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+Student_list_array+"</h1>";
}