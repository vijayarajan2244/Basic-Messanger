function sendsms(){
    value1 = document.getElementById("i1").value;   
    value2 = document.getElementById("i2").value;
    createElement = document.createElement("li");// <li>  </li>

    if(value1 !==""){
        person1 = document.createTextNode(value1);// Hi
        createElement.appendChild(person1);// <li> Hi </li>
 

        body = document.getElementById("mydiv2");       
        mydiv2.appendChild(createElement);// <div> <li> Hi </li> </div>
        mydiv2.style.color="green"
        mydiv2.style.fontWeight="500"

        document.getElementById("i1").value=""; 
        
    }
    else if(value2 !==""){
        person2 = document.createTextNode(value2);
        createElement.appendChild(person2);

        body = document.getElementById("mydiv1");
        mydiv1.appendChild(createElement);
        mydiv1.style.color="red"
        mydiv1.style.fontWeight="500"
        document.getElementById("i2").value="";

    }





}


    

