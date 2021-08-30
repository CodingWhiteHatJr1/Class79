Student_list_array = [];

function submit(){
    var name1=document.getElementById("Name_of_the_students_1").value;
    var name2=document.getElementById("Name_of_the_students_2").value;
    var name3=document.getElementById("Name_of_the_students_3").value;
    var name4=document.getElementById("Name_of_the_students_4").value;

    Student_list_array.push(name1);
    Student_list_array.push(name2);
    Student_list_array.push(name3);
    Student_list_array.push(name4);
    
    console.log(Student_list_array);
    document.getElementById("display_name").innerHTML= Student_list_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort(){

    Student_list_array.sort();
    console.log(Student_list_array);
    document.getElementById("display_name").innerHTML= Student_list_array;
}