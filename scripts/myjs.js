$(document).ready(function(){
    $("#tag2").css("background-color","rgb(120,120,120)");
    $("#tag3").css("background-color","rgb(120,120,120)");
    $("#tag4").css("background-color","rgb(120,120,120)");
    $("#tag5").css("background-color","rgb(120,120,120)");
    $("#tag6").css("background-color","rgb(120,120,120)");
    $("#tag1").click(function(){
        $("#tag1").css("background-color","#FFFFFF");
        $("#tag2").css("background-color","rgb(120,120,120)");
        $("#tag3").css("background-color","rgb(120,120,120)");
        $("#tag4").css("background-color","rgb(120,120,120)");
        $("#tag5").css("background-color","rgb(120,120,120)");
        $("#tag6").css("background-color","rgb(120,120,120)");
        $("#digitalsales").css("display","none");
        $("#eba").css("display","none");
        $("#xxsearcher").css("display","none");
        $("#zookeeper").css("display","none");     
        $("#recent").css("display","none");    
        $("#sharemi").show(400);
    });
    $("#tag2").click(function(){
        $("#tag2").css("background-color","#FFFFFF");
        $("#tag1").css("background-color","rgb(120,120,120)");
        $("#tag3").css("background-color","rgb(120,120,120)");
        $("#tag4").css("background-color","rgb(120,120,120)");
        $("#tag5").css("background-color","rgb(120,120,120)");
        $("#tag6").css("background-color","rgb(120,120,120)");
        $("#eba").css("display","none");
        $("#xxsearcher").css("display","none");
        $("#zookeeper").css("display","none");   
        $("#sharemi").css("display","none");
        $("#recent").css("display","none");    
        $("#digitalsales").show(400);
    });
    $("#tag3").click(function(){
        $("#tag3").css("background-color","#FFFFFF");
        $("#tag2").css("background-color","rgb(120,120,120)");
        $("#tag1").css("background-color","rgb(120,120,120)");
        $("#tag4").css("background-color","rgb(120,120,120)");
        $("#tag5").css("background-color","rgb(120,120,120)");
        $("#tag6").css("background-color","rgb(120,120,120)");
        $("#xxsearcher").css("display","none");
        $("#zookeeper").css("display","none");       
        $("#sharemi").css("display","none");
        $("#digitalsales").css("display","none");
        $("#recent").css("display","none");    
        $("#eba").show(400);
    });
    $("#tag4").click(function(){
        $("#tag4").css("background-color","#FFFFFF");
        $("#tag2").css("background-color","rgb(120,120,120)");
        $("#tag1").css("background-color","rgb(120,120,120)");
        $("#tag3").css("background-color","rgb(120,120,120)");
        $("#tag5").css("background-color","rgb(120,120,120)");
        $("#tag6").css("background-color","rgb(120,120,120)");
        $("#zookeeper").css("display","none");      
        $("#sharemi").css("display","none");
        $("#digitalsales").css("display","none");
        $("#eba").css("display","none");
        $("#recent").css("display","none");    
        $("#xxsearcher").show(400);
    });
    $("#tag5").click(function(){
        $("#tag5").css("background-color","#FFFFFF");
        $("#tag2").css("background-color","rgb(120,120,120)");
        $("#tag1").css("background-color","rgb(120,120,120)");
        $("#tag3").css("background-color","rgb(120,120,120)");
        $("#tag4").css("background-color","rgb(120,120,120)");
        $("#tag6").css("background-color","rgb(120,120,120)");
        $("#sharemi").css("display","none");
        $("#digitalsales").css("display","none");
        $("#eba").css("display","none");
        $("#xxsearcher").css("display","none");
        $("#recent").css("display","none");    
        $("#zookeeper").show(400);  
    });
    $("#tag6").click(function(){
        $("#tag6").css("background-color","#FFFFFF");
        $("#tag2").css("background-color","rgb(120,120,120)");
        $("#tag1").css("background-color","rgb(120,120,120)");
        $("#tag3").css("background-color","rgb(120,120,120)");
        $("#tag4").css("background-color","rgb(120,120,120)");
        $("#tag5").css("background-color","rgb(120,120,120)");
        $("#sharemi").css("display","none");
        $("#digitalsales").css("display","none");
        $("#eba").css("display","none");
        $("#xxsearcher").css("display","none");
        $("#zookeeper").css("display","none");    
        $("#recent").show(400);  
    });
});