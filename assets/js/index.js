function getData() {
    var request; 
    if (window.XMLHttpRequest) 
        request = new XMLHttpRequest(); 
    else if (window.ActiveXObject) 
        request = new ActiveXObject("Msxml2.XMLHTTP");
    else 
        throw new Error("Ajax is not supported by your browser");

    var requestURL = '/assets/js/model.js';

    request.onload = function() {
        var todo = JSON.parse(request.response);
        /*console.log(todo[1]["deadline"]);*/
        /*for(i in todo){
            if(todo[i].urgent === true){
                console.log("title: " + todo[i].title + "\n" +
                            "description: " + todo[i].descr + "\n" +
                            "urgency: " + todo[i].urgent + "\n" +
                            "prio: " + todo[i].prio + "\n" +
                            "day: " + todo[i].day + "\n" +
                            "deadline: " + todo[i].deadline
                            );
            }
        }*/
        todo.forEach(item => {
            if(item.urgent === true){
                console.log("title: " + item.title + "\n" +
                            "description: " + item.descr + "\n" +
                            "urgency: " + item.urgent + "\n" +
                            "prio: " + item.prio + "\n" +
                            "day: " + item.day + "\n" +
                            "deadline: " + item.deadline
                            );
            }
        });
    }
    request.open('GET', requestURL);
    request.send();
}