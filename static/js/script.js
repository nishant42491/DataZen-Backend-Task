
$(document).ready(function(){
   
    var tag=false;
    var tag2=false;
    var tag3=false;
    $(".boxright").hide();
    $(".boxrightpage").hide();
    $(".boxrightfooter").hide();
    $("#addbox").hide();
    $("#closebtnadd").hide();
    $("#backgroundbox").hide();
    $("#colorbgpage").hide();
//header customize
$("#btnbgdesign").click(function(){
if(tag==false){
    addhtml()
    tag=true;
}
else{
    removehtml();
    tag=false;
}
return false;
});

function addhtml(){
    $(".headerdesign").append("<button type='button'id='btnbgdesign2' class='btn btn-dark'>Background Color<i class='fas fa-fill-drip'></i>&nbsp&nbsp&nbsp Settings<i class='fas fa-sliders-h'></i></button>");
    $(".boxright").show();
}

function removehtml(){
    $("#btnbgdesign2").remove();
}
//themed header
$("#btnbgdesign2").click(function(){
    $(".boxright").show();
});
$("#closebtn").click(function(){
    $(".boxright").hide();
});
$(".nocolor").click(function(){
$(".header").css({ "background-color": "transparent"})
});
$(".color1").click(function(){
    $(".header").css({ "background-color": "#0E2045"})
    });
    $(".color2").click(function(){
        $(".header").css({ "background-color": "black"})
        });
        $(".color3").click(function(){
            $(".header").css({ "background-color": "white"})
            });
            $(".color4").click(function(){
                $(".header").css({ "background-color": "#3d73dd"})
                });
                $(".color5").click(function(){
                    $(".header").css({ "background-color": "#FF5C5C"})
                    });
                    $(".color6").click(function(){
                        $(".header").css({ "background-color": "#A6AFBD"})
                        });
                        $(".color7").click(function(){
                            $(".header").css({ "background-color": "#fE5C18"})
                            });
                            $(".color8").click(function(){
                                $(".header").css({ "background-color": "#522459"})
                                });
                                $(".color9").click(function(){
                                    $(".header").css({ "background-color": "#A3CEB6"})
                                    });
                                    $(".color10").click(function(){
                                        $(".header").css({ "background-color": "#ECB099"})
                                        });
                                        $(".color11").click(function(){
                                            $(".header").css({ "background-color": "#5647B2"})
                                            });
                                            $(".color12").click(function(){
                                                $(".header").css({ "background-color": "#fbae32"})
                                                });
                                                $(".color13").click(function(){
                                                    $(".header").css({ "background-color": "#A899D0"})
                                                    });
   $("#bgcustom").change(function(){                                         
    var bgcustom=$("#bgcustom").val();
    $("#btnbgcustom").click(function(){
        $(".header").css({"background-color":bgcustom});
    });                         
});                
//page customize
$("#btnbgpagedesign").click(function(){
    if(tag2==false){
        addhtml2()
        tag2=true;
    }
    else{
        removehtml2();
        tag2=false;
    }
    return false;
    });
    
    function addhtml2(){
        $(".Pagedesign").prepend("<button type='button'id='btnbgpagedesign2' class='btn btn-dark'>Background Color<i class='fas fa-fill-drip'></i></button>");
    }
    
    function removehtml2(){
        $("#btnbgpagedesign2").remove();
    }
    //themedpage   
$("#btnbgpagedesign").click(function(){
    $(".boxrightpage").show();
});
$("#closebtnpage").click(function(){
    $(".boxrightpage").hide();
});
$(".nocolorpage").click(function(){
$(".page").css({ "background-color": "transparent"})
});
$(".color1page").click(function(){
    $(".page").css({ "background-color": "#0E2045"})
    });
    $(".color2page").click(function(){
        $(".page").css({ "background-color": "black"})
        });
        $(".color3page").click(function(){
            $(".page").css({ "background-color": "white"})
            });
            $(".color4page").click(function(){
                $(".page").css({ "background-color": "#3d73dd"})
                });
                $(".color5page").click(function(){
                    $(".page").css({ "background-color": "#FF5C5C"})
                    });
                    $(".color6page").click(function(){
                        $(".page").css({ "background-color": "#A6AFBD"})
                        });
                        $(".color7page").click(function(){
                            $(".page").css({ "background-color": "#fE5C18"})
                            });
                            $(".color8page").click(function(){
                                $(".page").css({ "background-color": "#522459"})
                                });
                                $(".color9page").click(function(){
                                    $(".page").css({ "background-color": "#A3CEB6"})
                                    });
                                    $(".color10page").click(function(){
                                        $(".page").css({ "background-color": "#ECB099"})
                                        });
                                        $(".color11page").click(function(){
                                            $(".page").css({ "background-color": "#5647B2"})
                                            });
                                            $(".color12page").click(function(){
                                                $(".page").css({ "background-color": "#fbae32"})
                                                });
                                                $(".color13page").click(function(){
                                                    $(".page").css({ "background-color": "#A899D0"})
                                                    });
   $("#bgcustompage").change(function(){                                         
    var bgcustompage=$("#bgcustompage").val();
    $("#btnbgcustompage").click(function(){
        $(".page").css({"background-color":bgcustompage});
    });                         
});                
//footer customize
    $("#btnbgfootdesign").click(function(){
        if(tag3==false){
            addhtml3()
            tag3=true;
        }
        else{
            removehtml3();
            tag3=false;
        }
        return false;
        });
        
        function addhtml3(){
            $(".footerdesign").append("<button type='button'id='btnbgfootdesign3' class='btn btn-dark'>Background Color<i class='fas fa-fill-drip'></i></button>");
        }
        
        function removehtml3(){
            $("#btnbgfootdesign3").remove();
        }
//Themed Footer
$(".footerdesign").click(function(){
    $(".boxrightfooter").show();
});
$("#closebtnfooter").click(function(){
    $(".boxrightfooter").hide();
});
$(".nocolorfooter").click(function(){
$(".footer").css({ "background-color": "transparent"})
});
$(".color1footer").click(function(){
    $(".footer").css({ "background-color": "#0E2045"})
    });
    $(".color2footer").click(function(){
        $(".footer").css({ "background-color": "black"})
        });
        $(".color3footer").click(function(){
            $(".footer").css({ "background-color": "white"})
            });
            $(".color4footer").click(function(){
                $(".footer").css({ "background-color": "#3d73dd"})
                });
                $(".color5footer").click(function(){
                    $(".footer").css({ "background-color": "#FF5C5C"})
                    });
                    $(".color6footer").click(function(){
                        $(".footer").css({ "background-color": "#A6AFBD"})
                        });
                        $(".color7footer").click(function(){
                            $(".footer").css({ "background-color": "#fE5C18"})
                            });
                            $(".color8footer").click(function(){
                                $(".footer").css({ "background-color": "#522459"})
                                });
                                $(".color9footer").click(function(){
                                    $(".footer").css({ "background-color": "#A3CEB6"})
                                    });
                                    $(".color10footer").click(function(){
                                        $(".footer").css({ "background-color": "#ECB099"})
                                        });
                                        $(".color11footer").click(function(){
                                            $(".footer").css({ "background-color": "#5647B2"})
                                            });
                                            $(".color12footer").click(function(){
                                                $(".footer").css({ "background-color": "#fbae32"})
                                                });
                                                $(".color13footer").click(function(){
                                                    $(".footer").css({ "background-color": "#A899D0"})
                                                    });
   $("#bgcustomfooter").change(function(){                                         
    var bgcustomfooter=$("#bgcustomfooter").val();
    $("#btnbgcustomfooter").click(function(){
        $(".footer").css({"background-color":bgcustomfooter});
    });                         
});
//toolbox
$("#closebtnadd").click(function(){
$("#addbox").hide();
$("#closebtnadd").hide();
});
$("#add").click(function(){
    $("#addbox").show();
    $("#closebtnadd").show();
});

$("#backgroundbtn").click(function(){
$("#backgroundbox").show();
});
$("#closebtnbg").click(function(){
    $("#backgroundbox").hide();
});


$("#colorbg").click(function(){
$("#colorbgpage").show();
});

$("#changebgcolor").change(function(){
var colorbgpage=$("#changebgcolor").val();

$("#submitbgcolor").click(function(){
  document.body.style.backgroundColor=colorbgpage;
});
});
$("#heading1").click(function(){
    
$(".header").prepend("<div id='mydiv'style='position:absolute;z-index:9;'> <div contenteditable='true'><h1 id='h1' contenteditable='true'style='width:100%;'>Heading 1</h1></div><br><div id='textsettingicon'><span contenteditable='false'id='textsettingspan' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtn'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtn2'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");


//textsetting
$("#closebtn2").click(function(){
    $("#textsetting").hide();
});
$("#showbtn").click(function(){
    $("#textsetting").show();
});

$("#textsettingspan").one('click',function(){
$("#textsettingicon").append("<br><div id='textsetting' style='overflow:scroll;width:100%;height:30%;'><div id='font'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='h1increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='h1decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='h1reset' value='='></input></div><br><hr><div id='fontcolor'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclr'>&nbsp&nbsp<input type='button'value='Apply'id='clrapply'></input><br><br><hr></div><div id='fontstyle'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='bold2'><i style='font-size:20px;cursor:pointer'id='bold'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italic2'><i style='font-size:20px;cursor:pointer;'id='italic'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underline2'><i style='font-size:20px;cursor:pointer'id='underline' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbg2'><i style='font-size:20px;cursor:pointer;'id='fontbg'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")

//Increse or decrease Font Size
var originalSize = $('#h1').css('font-size');  
   // reset        
    $("#h1reset").click(function(){           
    $('#h1').css('font-size', originalSize);         
     });
     //Increase Font Size
   
    $("#h1increase").click(function(){         
        var currentSize = $('#h1').css('font-size');         
        var currentSize = parseFloat(currentSize)*1.2;          
        $('#h1').css('font-size', currentSize);         
        return false;          
        });        
        
         // Decrease Font Size       
         $("#h1decrease").click(function(){        
         var currentFontSize = $('#h1').css('font-size');        
         var currentSize = $('#h1').css('font-size');        
         var currentSize = parseFloat(currentSize)*0.8;        
         $('#h1').css('font-size', currentSize);         
         return false;         
         });    
             //Change Text Color
        $("#fontclr").change(function(){
            var fontcolor=$("#fontclr").val();
            $("#clrapply").click(function(){
            $("#h1").css({"color": fontcolor});
        });   

});
      //Bold
      $("#bold2").click(function(){
        $("#h1").css({'font-weight':'bold'})
    });
    //Italic
    $("#italic2").click(function(){
        $("#h1").css({'font-style':'italic'})
    });
    //Underline
    $("#underline2").click(function(){
        $("#h1").css({'text-decoration':'underline'})
    });
      //fontbackground
      $("#fontbg2").one('click',function(){
          $("#fontbg2").append("<input type='color' id='fontbgselect'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbg'></input");
          $("#fontbgselect").change(function(){
            var fontbg=$("#fontbgselect").val();
            $("#applyfontbg").click(function(){
                $("#h1").css({'background-color':fontbg});
            });
    });
   

    });
    

        }); 

//Make the DIV element draggagle:
dragElement(document.getElementById('mydiv'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    $("#h1").select();
  }
}
});
//Heading 2

$("#backgroundbtn2").click(function(){
    $("#backgroundbox2").show();
    });
    $("#closebtnbg2").click(function(){
        $("#backgroundbox2").hide();
    });
    
    
    $("#colorbg2").click(function(){
    $("#colorbgpage2").show();
    });
    
    $("#changebgcolor2").change(function(){
    var colorbgpage2=$("#changebgcolor2").val();
    
    $("#submitbgcolor").click(function(){
      document.body.style.backgroundColor=colorbgpage2;
    });
    });
    $("#heading2").click(function(){
        
    $(".header").prepend("<div id='mydiv2'style='position:absolute;z-index:9;'> <div contenteditable='true'><h2 id='h2' contenteditable='true'style='width:100%;'>Heading 2</h2></div><br><div id='textsettingicon2'><span contenteditable='false'id='textsettingspan2' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtn2'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtn2'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
    
    
    //textsetting
    $("#closebtn2").click(function(){
        $("#textsetting2").hide();
    });
    $("#showbtn2").click(function(){
        $("#textsetting2").show();
    });
    
    $("#textsettingspan2").one('click',function(){
    $("#textsettingicon2").append("<br><div id='textsetting2' style='overflow:scroll;width:100%;height:30%;'><div id='font2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='h2increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='h2decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='h2reset' value='='></input></div><br><hr><div id='fontcolor2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclr2'>&nbsp&nbsp<input type='button'value='Apply'id='clrapply2'></input><br><br><hr></div><div id='fontstyle2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='bold3'><i style='font-size:20px;cursor:pointer'id='bold2'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italic3'><i style='font-size:20px;cursor:pointer;'id='italic2'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underline3'><i style='font-size:20px;cursor:pointer'id='underline2' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbg3'><i style='font-size:20px;cursor:pointer;'id='fontbg2'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
    
    //Increse or decrease Font Size
    var originalSize2 = $('#h2').css('font-size');  
       // reset        
        $("#h2reset").click(function(){           
        $('#h2').css('font-size', originalSize2);         
         });
         //Increase Font Size
       
        $("#h2increase").click(function(){         
            var currentSize2 = $('#h2').css('font-size');         
            var currentSize2 = parseFloat(currentSize2)*1.2;          
            $('#h2').css('font-size', currentSize2);         
            return false;          
            });        
            
             // Decrease Font Size       
             $("#h2decrease").click(function(){        
             var currentFontSize2 = $('#h2').css('font-size');        
             var currentSize2 = $('#h2').css('font-size');        
             var currentSize2 = parseFloat(currentSize2)*0.8;        
             $('#h2').css('font-size', currentSize2);         
             return false;         
             });    
                 //Change Text Color
            $("#fontclr2").change(function(){
                var fontcolor2=$("#fontclr2").val();
                $("#clrapply2").click(function(){
                $("#h2").css({"color": fontcolor2});
            });   
    
    });
          //Bold
          $("#bold3").click(function(){
            $("#h2").css({'font-weight':'bold'})
        });
        //Italic
        $("#italic3").click(function(){
            $("#h2").css({'font-style':'italic'})
        });
        //Underline
        $("#underline3").click(function(){
            $("#h2").css({'text-decoration':'underline'})
        });
          //fontbackground
          $("#fontbg3").one('click',function(){
              $("#fontbg3").append("<input type='color' id='fontbgselect2'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbg2'></input");
              $("#fontbgselect2").change(function(){
                var fontbg2=$("#fontbgselect2").val();
                $("#applyfontbg2").click(function(){
                    $("#h2").css({'background-color':fontbg2});
                });
        });
       
    
        });
        
    
            });
    
        
    
    //Make the DIV element draggagle:
    dragElement(document.getElementById('mydiv2'));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + 'header')) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        $("#h2").select();
      }
    }
    });
    //heading 3
    $("#backgroundbtn3").click(function(){
        $("#backgroundbox3").show();
        });
        $("#closebtnbg3").click(function(){
            $("#backgroundbox3").hide();
        });
        
        
        $("#colorbg3").click(function(){
        $("#colorbgpag3").show();
        });
        
        $("#changebgcolor3").change(function(){
        var colorbgpage3=$("#changebgcolor3").val();
        
        $("#submitbgcolor").click(function(){
          document.body.style.backgroundColor=colorbgpage3;
        });
        });
        $("#heading3").click(function(){
            
        $(".header").prepend("<div id='mydiv3'style='position:absolute;z-index:9;'> <div contenteditable='true'><h2 id='h3' contenteditable='true'style='width:100%;'>Heading 3</h3></div><br><div id='textsettingicon3'><span contenteditable='false'id='textsettingspan3' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtn3'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtn3'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
        
        
        //textsetting
        $("#closebtn3").click(function(){
            $("#textsetting3").hide();
        });
        $("#showbtn3").click(function(){
            $("#textsetting3").show();
        });
        
        $("#textsettingspan3").one('click',function(){
        $("#textsettingicon3").append("<br><div id='textsetting3' style='overflow:scroll;width:100%;height:30%;'><div id='font3'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='h3increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='h3decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='h3reset' value='='></input></div><br><hr><div id='fontcolor3'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclr3'>&nbsp&nbsp<input type='button'value='Apply'id='clrapply3'></input><br><br><hr></div><div id='fontstyle3'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='bold4'><i style='font-size:20px;cursor:pointer'id='bold3'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italic4'><i style='font-size:20px;cursor:pointer;'id='italic3'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underline4'><i style='font-size:20px;cursor:pointer'id='underline3' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbg4'><i style='font-size:20px;cursor:pointer;'id='fontbg3'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
        
        //Increse or decrease Font Size
        var originalSize3 = $('#h3').css('font-size');  
           // reset        
            $("#h3reset").click(function(){           
            $('#h3').css('font-size', originalSize3);         
             });
             //Increase Font Size
           
            $("#h3increase").click(function(){         
                var currentSize3 = $('#h3').css('font-size');         
                var currentSize3 = parseFloat(currentSize3)*1.2;          
                $('#h3').css('font-size', currentSize3);         
                return false;          
                });        
                
                 // Decrease Font Size       
                 $("#h3decrease").click(function(){        
                 var currentFontSize3 = $('#h3').css('font-size');        
                 var currentSize3 = $('#h3').css('font-size');        
                 var currentSize3 = parseFloat(currentSize3)*0.8;        
                 $('#h3').css('font-size', currentSize3);         
                 return false;         
                 });    
                     //Change Text Color
                $("#fontclr3").change(function(){
                    var fontcolor3=$("#fontclr3").val();
                    $("#clrapply3").click(function(){
                    $("#h3").css({"color": fontcolor3});
                });   
        
        });
              //Bold
              $("#bold4").click(function(){
                $("#h3").css({'font-weight':'bold'})
            });
            //Italic
            $("#italic4").click(function(){
                $("#h3").css({'font-style':'italic'})
            });
            //Underline
            $("#underline4").click(function(){
                $("#h3").css({'text-decoration':'underline'})
            });
              //fontbackground
              $("#fontbg4").one('click',function(){
                  $("#fontbg4").append("<input type='color' id='fontbgselect3'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbg3'></input");
                  $("#fontbgselect3").change(function(){
                    var fontbg3=$("#fontbgselect3").val();
                    $("#applyfontbg3").click(function(){
                        $("#h3").css({'background-color':fontbg3});
                    });
            });
           
        
            });
            
        
                });
        
            
        
        //Make the DIV element draggagle:
        dragElement(document.getElementById('mydiv3'));
        
        function dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (document.getElementById(elmnt.id + 'header')) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
          } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
            $("#h3").select();
          }
        }
        });
        //Heading 2

$("#backgroundbtn2").click(function(){
    $("#backgroundbox2").show();
    });
    $("#closebtnbg2").click(function(){
        $("#backgroundbox2").hide();
    });
    
    
    $("#colorbg2").click(function(){
    $("#colorbgpage2").show();
    });
    
    $("#changebgcolor2").change(function(){
    var colorbgpage2=$("#changebgcolor2").val();
    
    $("#submitbgcolor").click(function(){
      document.body.style.backgroundColor=colorbgpage2;
    });
    });
    $("#heading2").click(function(){
        
    $(".header").prepend("<div id='mydiv2'style='position:absolute;z-index:9;'> <div contenteditable='true'><h2 id='h2' contenteditable='true'style='width:100%;'>Heading 2</h2></div><br><div id='textsettingicon2'><span contenteditable='false'id='textsettingspan2' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtn2'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtn2'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
    
    
    //textsetting
    $("#closebtn2").click(function(){
        $("#textsetting2").hide();
    });
    $("#showbtn2").click(function(){
        $("#textsetting2").show();
    });
    
    $("#textsettingspan2").one('click',function(){
    $("#textsettingicon2").append("<br><div id='textsetting2' style='overflow:scroll;width:100%;height:30%;'><div id='font2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='h2increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='h2decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='h2reset' value='='></input></div><br><hr><div id='fontcolor2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclr2'>&nbsp&nbsp<input type='button'value='Apply'id='clrapply2'></input><br><br><hr></div><div id='fontstyle2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='bold3'><i style='font-size:20px;cursor:pointer'id='bold2'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italic3'><i style='font-size:20px;cursor:pointer;'id='italic2'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underline3'><i style='font-size:20px;cursor:pointer'id='underline2' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbg3'><i style='font-size:20px;cursor:pointer;'id='fontbg2'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
    
    //Increse or decrease Font Size
    var originalSize2 = $('#h2').css('font-size');  
       // reset        
        $("#h2reset").click(function(){           
        $('#h2').css('font-size', originalSize2);         
         });
         //Increase Font Size
       
        $("#h2increase").click(function(){         
            var currentSize2 = $('#h2').css('font-size');         
            var currentSize2 = parseFloat(currentSize2)*1.2;          
            $('#h2').css('font-size', currentSize2);         
            return false;          
            });        
            
             // Decrease Font Size       
             $("#h2decrease").click(function(){        
             var currentFontSize2 = $('#h2').css('font-size');        
             var currentSize2 = $('#h2').css('font-size');        
             var currentSize2 = parseFloat(currentSize2)*0.8;        
             $('#h2').css('font-size', currentSize2);         
             return false;         
             });    
                 //Change Text Color
            $("#fontclr2").change(function(){
                var fontcolor2=$("#fontclr2").val();
                $("#clrapply2").click(function(){
                $("#h2").css({"color": fontcolor2});
            });   
    
    });
          //Bold
          $("#bold3").click(function(){
            $("#h2").css({'font-weight':'bold'})
        });
        //Italic
        $("#italic3").click(function(){
            $("#h2").css({'font-style':'italic'})
        });
        //Underline
        $("#underline3").click(function(){
            $("#h2").css({'text-decoration':'underline'})
        });
          //fontbackground
          $("#fontbg3").one('click',function(){
              $("#fontbg3").append("<input type='color' id='fontbgselect2'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbg2'></input");
              $("#fontbgselect2").change(function(){
                var fontbg2=$("#fontbgselect2").val();
                $("#applyfontbg2").click(function(){
                    $("#h2").css({'background-color':fontbg2});
                });
        });
       
    
        });
        
    
            });
    
        
    
    //Make the DIV element draggagle:
    dragElement(document.getElementById('mydiv2'));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + 'header')) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        $("#h2").select();
      }
    }
    });
    //heading 4
    $("#backgroundbtn4").click(function(){
        $("#backgroundbox4").show();
        });
        $("#closebtnbg4").click(function(){
            $("#backgroundbox4").hide();
        });
        
        
        $("#colorbg4").click(function(){
        $("#colorbgpag4").show();
        });
        
        $("#changebgcolor4").change(function(){
        var colorbgpage4=$("#changebgcolor4").val();
        
        $("#submitbgcolor").click(function(){
          document.body.style.backgroundColor=colorbgpage4;
        });
        });
        $("#heading4").click(function(){
            
        $(".header").prepend("<div id='mydiv4'style='position:absolute;z-index:9;'> <div contenteditable='true'><h4 id='h4' contenteditable='true'style='width:100%;'>Heading 4</h4></div><br><div id='textsettingicon4'><span contenteditable='false'id='textsettingspan4' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtn4'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtn4'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
        
        
        //textsetting
        $("#closebtn4").click(function(){
            $("#textsetting4").hide();
        });
        $("#showbtn4").click(function(){
            $("#textsetting4").show();
        });
        
        $("#textsettingspan4").one('click',function(){
        $("#textsettingicon4").append("<br><div id='textsetting4' style='overflow:scroll;width:100%;height:30%;'><div id='font4'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='h4increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='h4decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='h4reset' value='='></input></div><br><hr><div id='fontcolor4'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclr4'>&nbsp&nbsp<input type='button'value='Apply'id='clrapply4'></input><br><br><hr></div><div id='fontstyle4'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='bold5'><i style='font-size:20px;cursor:pointer'id='bold4'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italic5'><i style='font-size:20px;cursor:pointer;'id='italic4'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underline5'><i style='font-size:20px;cursor:pointer'id='underline4' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbg5'><i style='font-size:20px;cursor:pointer;'id='fontbg4'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
        
        //Increse or decrease Font Size
        var originalSize4 = $('#h4').css('font-size');  
           // reset        
            $("#h4reset").click(function(){           
            $('#h4').css('font-size', originalSize4);         
             });
             //Increase Font Size
           
            $("#h4increase").click(function(){         
                var currentSize4 = $('#h4').css('font-size');         
                var currentSize4 = parseFloat(currentSize4)*1.2;          
                $('#h4').css('font-size', currentSize4);         
                return false;          
                });        
                
                 // Decrease Font Size       
                 $("#h4decrease").click(function(){        
                 var currentFontSize4 = $('#h4').css('font-size');        
                 var currentSize4 = $('#h4').css('font-size');        
                 var currentSize4 = parseFloat(currentSize4)*0.8;        
                 $('#h4').css('font-size', currentSize4);         
                 return false;         
                 });    
                     //Change Text Color
                $("#fontclr4").change(function(){
                    var fontcolor4=$("#fontclr4").val();
                    $("#clrapply4").click(function(){
                    $("#h4").css({"color": fontcolor4});
                });   
        
        });
              //Bold
              $("#bold5").click(function(){
                $("#h4").css({'font-weight':'bold'})
            });
            //Italic
            $("#italic5").click(function(){
                $("#h4").css({'font-style':'italic'})
            });
            //Underline
            $("#underline5").click(function(){
                $("#h4").css({'text-decoration':'underline'})
            });
              //fontbackground
              $("#fontbg5").one('click',function(){
                  $("#fontbg5").append("<input type='color' id='fontbgselect4'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbg4'></input");
                  $("#fontbgselect4").change(function(){
                    var fontbg4=$("#fontbgselect4").val();
                    $("#applyfontbg4").click(function(){
                        $("#h4").css({'background-color':fontbg4});
                    });
            });
           
        
            });
            
        
                });
        
            
        
        //Make the DIV element draggagle:
        dragElement(document.getElementById('mydiv4'));
        
        function dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (document.getElementById(elmnt.id + 'header')) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
          } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
            $("#h4").select();
          }
        }
        });
//heading 5
$("#backgroundbtn5").click(function(){
    $("#backgroundbox5").show();
    });
    $("#closebtnbg5").click(function(){
        $("#backgroundbox5").hide();
    });
    
    
    $("#colorbg5").click(function(){
    $("#colorbgpag5").show();
    });
    
    $("#changebgcolor5").change(function(){
    var colorbgpage5=$("#changebgcolor5").val();
    
    $("#submitbgcolor").click(function(){
      document.body.style.backgroundColor=colorbgpage5;
    });
    });
    $("#heading5").click(function(){
        
    $(".header").prepend("<div id='mydiv5'style='position:absolute;z-index:9;'> <div contenteditable='true'><h4 id='h5' contenteditable='true'style='width:100%;font-family: Dela Gothic One,cursive;'>Heading 5</h4></div><br><div id='textsettingicon5'><span contenteditable='false'id='textsettingspan5' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtn5'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtn5'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
    
    
    //textsetting
    $("#closebtn5").click(function(){
        $("#textsetting5").hide();
    });
    $("#showbtn5").click(function(){
        $("#textsetting5").show();
    });
    
    $("#textsettingspan5").one('click',function(){
    $("#textsettingicon5").append("<br><div id='textsetting5' style='overflow:scroll;width:100%;height:30%;'><div id='font5'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='h5increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='h5decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='h5reset' value='='></input></div><br><hr><div id='fontcolor5'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclr5'>&nbsp&nbsp<input type='button'value='Apply'id='clrapply5'></input><br><br><hr></div><div id='fontstyle5'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='bold6'><i style='font-size:20px;cursor:pointer'id='bold5'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italic6'><i style='font-size:20px;cursor:pointer;'id='italic5'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underline6'><i style='font-size:20px;cursor:pointer'id='underline5' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbg6'><i style='font-size:20px;cursor:pointer;'id='fontbg5'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
    
    //Increse or decrease Font Size
    var originalSize5 = $('#h5').css('font-size');  
       // reset        
        $("#h5reset").click(function(){           
        $('#h5').css('font-size', originalSize5);         
         });
         //Increase Font Size
       
        $("#h5increase").click(function(){         
            var currentSize5 = $('#h5').css('font-size');         
            var currentSize5 = parseFloat(currentSize5)*1.2;          
            $('#h5').css('font-size', currentSize5);         
            return false;          
            });        
            
             // Decrease Font Size       
             $("#h5decrease").click(function(){        
             var currentFontSize5 = $('#h5').css('font-size');        
             var currentSize5 = $('#h5').css('font-size');        
             var currentSize5 = parseFloat(currentSize5)*0.8;        
             $('#h5').css('font-size', currentSize5);         
             return false;         
             });    
                 //Change Text Color
            $("#fontclr5").change(function(){
                var fontcolor5=$("#fontclr5").val();
                $("#clrapply5").click(function(){
                $("#h5").css({"color": fontcolor5});
            });   
    
    });
          //Bold
          $("#bold6").click(function(){
            $("#h5").css({'font-weight':'bold'})
        });
        //Italic
        $("#italic6").click(function(){
            $("#h5").css({'font-style':'italic'})
        });
        //Underline
        $("#underline6").click(function(){
            $("#h5").css({'text-decoration':'underline'})
        });
          //fontbackground
          $("#fontbg6").one('click',function(){
              $("#fontbg6").append("<input type='color' id='fontbgselect5'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbg5'></input");
              $("#fontbgselect5").change(function(){
                var fontbg5=$("#fontbgselect5").val();
                $("#applyfontbg5").click(function(){
                    $("#h5").css({'background-color':fontbg5});
                });
        });
       
    
        });
        
    
            });
    
        
    
    //Make the DIV element draggagle:
    dragElement(document.getElementById('mydiv5'));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + 'header')) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        $("#h5").select();
      }
    }
    });
    //title 1

    $("#backgroundbtnt1").click(function(){
        $("#backgroundboxt1").show();
        });
        $("#closebtnbgt1").click(function(){
            $("#backgroundboxt1").hide();
        });
        
        
        $("#colorbgt1").click(function(){
        $("#colorbgpagt1").show();
        });
        
        $("#changebgcolort1").change(function(){
        var colorbgpaget1=$("#changebgcolort1").val();
        
        $("#submitbgcolor").click(function(){
          document.body.style.backgroundColor=colorbgpaget1;
        });
        });
        $("#t1").click(function(){
            
        $(".header").prepend("<div id='mydivt1'style='position:absolute;z-index:9;'> <div contenteditable='true'><h1 id='t1' contenteditable='true'style='width:100%;font-family: Dela Gothic One,cursive; text-transform: uppercase;'>Title1</h4></div><br><div id='textsettingicont1'><span contenteditable='false'id='textsettingspant1' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnt1'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnt1'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
        
        
        //textsetting
        $("#closebtnt1").click(function(){
            $("#textsettingt1").hide();
        });
        $("#showbtnt1").click(function(){
            $("#textsettingt1").show();
        });
        
        $("#textsettingspant1").one('click',function(){
        $("#textsettingicont1").append("<br><div id='textsettingt1' style='overflow:scroll;width:100%;height:30%;'><div id='fontt1'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='t1increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='t1decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='t1reset' value='='></input></div><br><hr><div id='fontcolort1'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrt1'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyt1'></input><br><br><hr></div><div id='fontstylet1'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldt1'><i style='font-size:20px;cursor:pointer'id='boldt1'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italict1'><i style='font-size:20px;cursor:pointer;'id='italict1'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinet1'><i style='font-size:20px;cursor:pointer'id='underlinet1' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgt1'><i style='font-size:20px;cursor:pointer;'id='fontbgt1'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
        
        //Increse or decrease Font Size
        var originalSizet1 = $('#t1').css('font-size');  
           // reset        
            $("#t1reset").click(function(){           
            $('#t1').css('font-size', originalSizet1);         
             });
             //Increase Font Size
           
            $("#t1increase").click(function(){         
                var currentSizet1 = $('#t1').css('font-size');         
                var currentSizet1 = parseFloat(currentSizet1)*1.2;          
                $('#t1').css('font-size', currentSizet1);         
                return false;          
                });        
                
                 // Decrease Font Size       
                 $("#t1decrease").click(function(){        
                 var currentFontSizet1 = $('#t1').css('font-size');        
                 var currentSizet1= $('#t1').css('font-size');        
                 var currentSizet1 = parseFloat(currentSizet1)*0.8;        
                 $('#t1').css('font-size', currentSizet1);         
                 return false;         
                 });    
                     //Change Text Color
                $("#fontclrt1").change(function(){
                    var fontcolort1=$("#fontclrt1").val();
                    $("#clrapplyt1").click(function(){
                    $("#t1").css({"color": fontcolort1});
                });   
        
        });
              //Bold
              $("#boldt1").click(function(){
                $("#t1").css({'font-weight':'bold'})
            });
            //Italic
            $("#italict1").click(function(){
                $("#t1").css({'font-style':'italic'})
            });
            //Underline
            $("#underlinet1").click(function(){
                $("#t1").css({'text-decoration':'underline'})
            });
              //fontbackground
              $("#fontbgt1").one('click',function(){
                  $("#fontbgt1").append("<input type='color' id='fontbgselectt1'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgt1'></input");
                  $("#fontbgselectt1").change(function(){
                    var fontbg5=$("#fontbgselectt1").val();
                    $("#applyfontbgt1").click(function(){
                        $("#t1").css({'background-color':fontbg5});
                    });
            });
           
        
            });
            
        
                });
        
            
        
        //Make the DIV element draggagle:
        dragElement(document.getElementById('mydivt1'));
        
        function dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (document.getElementById(elmnt.id + 'header')) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
          } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
            $("#t1").select();
          }
        }
        });
    //Title 2
     $("#backgroundbtnt2").click(function(){
        $("#backgroundboxt2").show();
        });
        $("#closebtnbgt2").click(function(){
            $("#backgroundboxt2").hide();
        });     
        $("#colorbgt2").click(function(){
        $("#colorbgpagt2").show();
        });
        
        $("#changebgcolort2").change(function(){
        var colorbgpaget2=$("#changebgcolort2").val();
        
        $("#submitbgcolor").click(function(){
          document.body.style.backgroundColor=colorbgpaget2;
        });
        });
        $("#t2").click(function(){
            
        $(".header").prepend("<div id='mydivt2'style='position:absolute;z-index:9;'> <div contenteditable='true'><h1 id='t2' contenteditable='true'style='width:100%;font-family: Lobster,cursive; '>Title2</h4></div><br><div id='textsettingicont2'><span contenteditable='false'id='textsettingspant2' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnt2'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnt2'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
        
        
        //textsetting
        $("#closebtnt2").click(function(){
            $("#textsettingt2").hide();
        });
        $("#showbtnt2").click(function(){
            $("#textsettingt2").show();
        });
        
        $("#textsettingspant2").one('click',function(){
        $("#textsettingicont2").append("<br><div id='textsettingt2' style='overflow:scroll;width:100%;height:30%;'><div id='fontt2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='t2increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='t2decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='t2reset' value='='></input></div><br><hr><div id='fontcolort2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrt2'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyt2'></input><br><br><hr></div><div id='fontstylet2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldt2'><i style='font-size:20px;cursor:pointer'id='boldt2'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italict2'><i style='font-size:20px;cursor:pointer;'id='italict2'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinet2'><i style='font-size:20px;cursor:pointer'id='underlinet2' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgt2'><i style='font-size:20px;cursor:pointer;'id='fontbgt2'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
        
        //Increse or decrease Font Size
        var originalSizet2 = $('#t2').css('font-size');  
           // reset        
            $("#t2reset").click(function(){           
            $('#t2').css('font-size', originalSizet2);         
             });
             //Increase Font Size
           
            $("#t2increase").click(function(){         
                var currentSizet2 = $('#t2').css('font-size');         
                var currentSizet2 = parseFloat(currentSizet2)*1.2;          
                $('#t2').css('font-size', currentSizet2);         
                return false;          
                });        
                
                 // Decrease Font Size       
                 $("#t2decrease").click(function(){        
                 var currentFontSizet2 = $('#t2').css('font-size');        
                 var currentSizet2= $('#t2').css('font-size');        
                 var currentSizet2 = parseFloat(currentSizet2)*0.8;        
                 $('#t2').css('font-size', currentSizet2);         
                 return false;         
                 });    
                     //Change Text Color
                $("#fontclrt2").change(function(){
                    var fontcolort2=$("#fontclrt2").val();
                    $("#clrapplyt2").click(function(){
                    $("#t2").css({"color": fontcolort2});
                });   
        
        });
              //Bold
              $("#boldt2").click(function(){
                $("#t2").css({'font-weight':'bold'})
            });
            //Italic
            $("#italict2").click(function(){
                $("#t2").css({'font-style':'italic'})
            });
            //Underline
            $("#underlinet2").click(function(){
                $("#t2").css({'text-decoration':'underline'})
            });
              //fontbackground
              $("#fontbgt2").one('click',function(){
                  $("#fontbgt2").append("<input type='color' id='fontbgselectt2'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgt2'></input");
                  $("#fontbgselectt2").change(function(){
                    var fontbg5=$("#fontbgselectt2").val();
                    $("#applyfontbgt2").click(function(){
                        $("#t2").css({'background-color':fontbg5});
                    });
            });
           
        
            });
            
        
                }); 
        //Make the DIV element draggagle:
        dragElement(document.getElementById('mydivt2'));
        
        function dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (document.getElementById(elmnt.id + 'header')) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
          } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
          }
        
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
            elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
            $("#t2").select();
          }
        }
        });
          //Title 3
     $("#backgroundbtnt3").click(function(){
      $("#backgroundboxt3").show();
      });
      $("#closebtnbgt3").click(function(){
          $("#backgroundboxt3").hide();
      });     
      $("#colorbgt3").click(function(){
      $("#colorbgpagt3").show();
      });
      
      $("#changebgcolort3").change(function(){
      var colorbgpaget3=$("#changebgcolort3").val();
      
      $("#submitbgcolor").click(function(){
        document.body.style.backgroundColor=colorbgpaget3;
      });
      });
      $("#t3").click(function(){
          
      $(".header").prepend("<div id='mydivt3'style='position:absolute;z-index:9;'> <div contenteditable='true'><h1 id='t3' contenteditable='true'style='width:100%;font-family: Fredoka One,cursive; '>Title3</h4></div><br><div id='textsettingicont3'><span contenteditable='false'id='textsettingspant3' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnt3'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnt3'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
      
      
      //textsetting
      $("#closebtnt3").click(function(){
          $("#textsettingt3").hide();
      });
      $("#showbtnt3").click(function(){
          $("#textsettingt3").show();
      });
      
      $("#textsettingspant3").one('click',function(){
      $("#textsettingicont3").append("<br><div id='textsettingt3' style='overflow:scroll;width:100%;height:30%;'><div id='fontt3'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='t3increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='t3decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='t3reset' value='='></input></div><br><hr><div id='fontcolort3'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrt3'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyt3'></input><br><br><hr></div><div id='fontstylet3'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldt3'><i style='font-size:20px;cursor:pointer'id='boldt3'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italict3'><i style='font-size:20px;cursor:pointer;'id='italict3'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinet3'><i style='font-size:20px;cursor:pointer'id='underlinet3' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgt3'><i style='font-size:20px;cursor:pointer;'id='fontbgt3'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
      
      //Increse or decrease Font Size
      var originalSizet3 = $('#t3').css('font-size');  
         // reset        
          $("#t3reset").click(function(){           
          $('#t3').css('font-size', originalSizet2);         
           });
           //Increase Font Size
         
          $("#t3increase").click(function(){         
              var currentSizet3 = $('#t3').css('font-size');         
              var currentSizet3 = parseFloat(currentSizet3)*1.2;          
              $('#t3').css('font-size', currentSizet3);         
              return false;          
              });        
              
               // Decrease Font Size       
               $("#t3decrease").click(function(){        
               var currentFontSizet3 = $('#t3').css('font-size');        
               var currentSizet3= $('#t3').css('font-size');        
               var currentSizet3 = parseFloat(currentSizet3)*0.8;        
               $('#t3').css('font-size', currentSizet3);         
               return false;         
               });    
                   //Change Text Color
              $("#fontclrt3").change(function(){
                  var fontcolort3=$("#fontclrt3").val();
                  $("#clrapplyt3").click(function(){
                  $("#t3").css({"color": fontcolort3});
              });   
      
      });
            //Bold
            $("#boldt3").click(function(){
              $("#t3").css({'font-weight':'bold'})
          });
          //Italic
          $("#italict3").click(function(){
              $("#t3").css({'font-style':'italic'})
          });
          //Underline
          $("#underlinet3").click(function(){
              $("#t3").css({'text-decoration':'underline'})
          });
            //fontbackground
            $("#fontbgt3").one('click',function(){
                $("#fontbgt3").append("<input type='color' id='fontbgselectt3'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgt3'></input");
                $("#fontbgselectt3").change(function(){
                  var fontbg5=$("#fontbgselectt3").val();
                  $("#applyfontbgt3").click(function(){
                      $("#t3").css({'background-color':fontbg5});
                  });
          });
         
      
          });
          
      
              }); 
      //Make the DIV element draggagle:
      dragElement(document.getElementById('mydivt3'));
      
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + 'header')) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
          elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
          $("#t3").select();
        }
      }
      });
      //Title 4
     $("#backgroundbtnt4").click(function(){
      $("#backgroundboxt4").show();
      });
      $("#closebtnbgt4").click(function(){
          $("#backgroundboxt4").hide();
      });     
      $("#colorbgt4").click(function(){
      $("#colorbgpagt4").show();
      });
      
      $("#changebgcolort4").change(function(){
      var colorbgpaget4=$("#changebgcolort4").val();
      
      $("#submitbgcolor").click(function(){
        document.body.style.backgroundColor=colorbgpaget4;
      });
      });
      $("#t4").click(function(){
          
      $(".header").prepend("<div id='mydivt4'style='position:absolute;z-index:9;'> <div contenteditable='true'><h1 id='t4' contenteditable='true'style='width:100%;font-family: Fredoka One,cursive; '>Title3</h4></div><br><div id='textsettingicont4'><span contenteditable='false'id='textsettingspant4' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnt4'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnt4'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
      
      
      //textsetting
      $("#closebtnt4").click(function(){
          $("#textsettingt4").hide();
      });
      $("#showbtnt4").click(function(){
          $("#textsettingt4").show();
      });
      
      $("#textsettingspant4").one('click',function(){
      $("#textsettingicont4").append("<br><div id='textsettingt4' style='overflow:scroll;width:100%;height:30%;'><div id='fontt4'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='t4increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='t4decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='t4reset' value='='></input></div><br><hr><div id='fontcolort4'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrt4'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyt4'></input><br><br><hr></div><div id='fontstylet4'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldt4'><i style='font-size:20px;cursor:pointer'id='boldt4'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italict4'><i style='font-size:20px;cursor:pointer;'id='italict4'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinet4'><i style='font-size:20px;cursor:pointer'id='underlinet4' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgt4'><i style='font-size:20px;cursor:pointer;'id='fontbgt4'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
      
      //Increse or decrease Font Size
      var originalSizet4 = $('#t4').css('font-size');  
         // reset        
          $("#t4reset").click(function(){           
          $('#t4').css('font-size', originalSizet4);         
           });
           //Increase Font Size
         
          $("#t4increase").click(function(){         
              var currentSizet4 = $('#t4').css('font-size');         
              var currentSizet4 = parseFloat(currentSizet4)*1.2;          
              $('#t4').css('font-size', currentSizet4);         
              return false;          
              });        
              
               // Decrease Font Size       
               $("#t4decrease").click(function(){        
               var currentFontSizet4 = $('#t4').css('font-size');        
               var currentSizet4= $('#t4').css('font-size');        
               var currentSizet4 = parseFloat(currentSizet4)*0.8;        
               $('#t4').css('font-size', currentSizet4);         
               return false;         
               });    
                   //Change Text Color
              $("#fontclrt4").change(function(){
                  var fontcolort4=$("#fontclrt4").val();
                  $("#clrapplyt4").click(function(){
                  $("#t4").css({"color": fontcolort4});
              });   
      
      });
            //Bold
            $("#boldt4").click(function(){
              $("#t4").css({'font-weight':'bold'})
          });
          //Italic
          $("#italict4").click(function(){
              $("#t4").css({'font-style':'italic'})
          });
          //Underline
          $("#underlinet4").click(function(){
              $("#t4").css({'text-decoration':'underline'})
          });
            //fontbackground
            $("#fontbgt4").one('click',function(){
                $("#fontbgt4").append("<input type='color' id='fontbgselectt4'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgt4'></input");
                $("#fontbgselectt4").change(function(){
                  var fontbg5=$("#fontbgselectt4").val();
                  $("#applyfontbgt4").click(function(){
                      $("#t4").css({'background-color':fontbg5});
                  });
          });
         
      
          });
          
      
              }); 
      //Make the DIV element draggagle:
      dragElement(document.getElementById('mydivt4'));
      
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + 'header')) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
          elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
          $("#t4").select();
        }
      }
      });
     //Title 5
     $("#backgroundbtnt5").click(function(){
      $("#backgroundboxt5").show();
      });
      $("#closebtnbgt5").click(function(){
          $("#backgroundboxt5").hide();
      });     
      $("#colorbgt5").click(function(){
      $("#colorbgpagt5").show();
      });
      
      $("#changebgcolort5").change(function(){
      var colorbgpaget5=$("#changebgcolort5").val();
      
      $("#submitbgcolor").click(function(){
        document.body.style.backgroundColor=colorbgpaget5;
      });
      });
      $("#t5").click(function(){
          
      $(".header").prepend("<div id='mydivt5'style='position:absolute;z-index:9;'> <div contenteditable='true'><h1 id='t5' contenteditable='true'style='width:100%;font-family: Oi,cursive; '>Title5</h4></div><br><div id='textsettingicont5'><span contenteditable='false'id='textsettingspant5' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnt5'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnt5'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
      
      
      //textsetting
      $("#closebtnt5").click(function(){
          $("#textsettingt5").hide();
      });
      $("#showbtnt5").click(function(){
          $("#textsettingt5").show();
      });
      
      $("#textsettingspant5").one('click',function(){
      $("#textsettingicont5").append("<br><div id='textsettingt5' style='overflow:scroll;width:100%;height:30%;'><div id='fontt5'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='t5increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='t5decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='t5reset' value='='></input></div><br><hr><div id='fontcolort5'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrt5'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyt5'></input><br><br><hr></div><div id='fontstylet5'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldt5'><i style='font-size:20px;cursor:pointer'id='boldt5'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italict5'><i style='font-size:20px;cursor:pointer;'id='italict5'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinet5'><i style='font-size:20px;cursor:pointer'id='underlinet5' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgt5'><i style='font-size:20px;cursor:pointer;'id='fontbgt5'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
      
      //Increse or decrease Font Size
      var originalSizet5 = $('#t5').css('font-size');  
         // reset        
          $("#t5reset").click(function(){           
          $('#t5').css('font-size', originalSizet5);         
           });
           //Increase Font Size
         
          $("#t5increase").click(function(){         
              var currentSizet5 = $('#t5').css('font-size');         
              var currentSizet5 = parseFloat(currentSizet5)*1.2;          
              $('#t5').css('font-size', currentSizet5);         
              return false;          
              });        
              
               // Decrease Font Size       
               $("#t5decrease").click(function(){        
               var currentFontSizet5 = $('#t5').css('font-size');        
               var currentSizet5= $('#t5').css('font-size');        
               var currentSizet5 = parseFloat(currentSizet5)*0.8;        
               $('#t5').css('font-size', currentSizet5);         
               return false;         
               });    
                   //Change Text Color
              $("#fontclrt5").change(function(){
                  var fontcolort5=$("#fontclrt5").val();
                  $("#clrapplyt5").click(function(){
                  $("#t5").css({"color": fontcolort5});
              });   
      
      });
            //Bold
            $("#boldt5").click(function(){
              $("#t5").css({'font-weight':'bold'})
          });
          //Italic
          $("#italict5").click(function(){
              $("#t5").css({'font-style':'italic'})
          });
          //Underline
          $("#underlinet5").click(function(){
              $("#t5").css({'text-decoration':'underline'})
          });
            //fontbackground
            $("#fontbgt5").one('click',function(){
                $("#fontbgt5").append("<input type='color' id='fontbgselectt5'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgt5'></input");
                $("#fontbgselectt5").change(function(){
                  var fontbg5=$("#fontbgselectt5").val();
                  $("#applyfontbgt5").click(function(){
                      $("#t5").css({'background-color':fontbg5});
                  });
          });
         
      
          });
          
      
              }); 
      //Make the DIV element draggagle:
      dragElement(document.getElementById('mydivt5'));
      
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + 'header')) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
          elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
          $("#t5").select();
        }
      }
      });

       //Paragraph 1
     $("#backgroundbtnp1").click(function(){
      $("#backgroundboxp1").show();
      });
      $("#closebtnbgp1").click(function(){
          $("#backgroundboxp1").hide();
      });     
      $("#colorbgp1").click(function(){
      $("#colorbgpagp1").show();
      });
      
      $("#changebgcolorp1").change(function(){
      var colorbgpagep1=$("#changebgcolorp1").val();
      
      $("#submitbgcolor").click(function(){
        document.body.style.backgroundColor=colorbgpagep1;
      });
      });
      $("#p1").click(function(){
          
      $(".header").prepend("<div id='mydivp1'style='position:absolute;font-family:Parisienne, cursive; z-index:9;'> <div contenteditable='true'><p id='p1' contenteditable='true'style='width:100%; '>Paragraph 1</p></div><br><div id='textsettingiconp1'><span contenteditable='false'id='textsettingspanp1' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnp1'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnp1'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
      
      
      //textsetting
      $("#closebtnp1").click(function(){
          $("#textsettingp1").hide();
      });
      $("#showbtnp1").click(function(){
          $("#textsettingp1").show();
      });
      
      $("#textsettingspanp1").one('click',function(){
      $("#textsettingiconp1").append("<br><div id='textsettingp1' style='overflow:scroll;width:100%;height:30%;'><div id='fontp1'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='p1increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='p1decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='p1reset' value='='></input></div><br><hr><div id='fontcolorp1'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrp1'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyp1'></input><br><br><hr></div><div id='fontstylep1'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldp1'><i style='font-size:20px;cursor:pointer'id='boldp1'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italicp1'><i style='font-size:20px;cursor:pointer;'id='italicp1'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinep1'><i style='font-size:20px;cursor:pointer'id='underlinep1' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgp1'><i style='font-size:20px;cursor:pointer;'id='fontbgp1'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
      
      //Increse or decrease Font Size
      var originalSizep1 = $('#p1').css('font-size');  
         // reset        
          $("#p1reset").click(function(){           
          $('#p1').css('font-size', originalSizep1);         
           });
           //Increase Font Size
          $("#p1increase").click(function(){         
              var currentSizep1 = $('#p1').css('font-size');         
              var currentSizep1= parseFloat(currentSizep1)*1.2;          
              $('#p1').css('font-size', currentSizep1);         
              return false;          
              });        
              
               // Decrease Font Size       
               $("#p1decrease").click(function(){        
               var currentFontSizep1 = $('#p1').css('font-size');        
               var currentSizep1= $('#p1').css('font-size');        
               var currentSizep1 = parseFloat(currentSizep1)*0.8;        
               $('#p1').css('font-size', currentSizep1);         
               return false;         
               });    
                   //Change Text Color
              $("#fontclrp1").change(function(){
                  var fontcolorp1=$("#fontclrp1").val();
                  $("#clrapplyp1").click(function(){
                  $("#p1").css({"color": fontcolorp1});
              });   
      
      });
            //Bold
            $("#boldp1").click(function(){
              $("#p1").css({'font-weight':'bold'})
          });
          //Italic
          $("#italicp1").click(function(){
              $("#p1").css({'font-style':'italic'})
          });
          //Underline
          $("#underlinep1").click(function(){
              $("#p1").css({'text-decoration':'underline'})
          });
            //fontbackground
            $("#fontbgp1").one('click',function(){
                $("#fontbgp1").append("<input type='color' id='fontbgselectp1'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgp1'></input");
                $("#fontbgselectp1").change(function(){
                  var fontbg5=$("#fontbgselectp1").val();
                  $("#applyfontbgp1").click(function(){
                      $("#p1").css({'background-color':fontbg5});
                  });
          });
          });
              }); 
      //Make the DIV element draggagle:
      dragElement(document.getElementById('mydivp1'));
      
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + 'header')) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
          elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
          $("#p1").select();
        }
      }
      });

       //Paragraph 2
     $("#backgroundbtnp2").click(function(){
      $("#backgroundboxp2").show();
      });
      $("#closebtnbgp2").click(function(){
          $("#backgroundboxp2").hide();
      });     
      $("#colorbgp2").click(function(){
      $("#colorbgpagp2").show();
      });
      
      $("#changebgcolorp2").change(function(){
      var colorbgpagep2=$("#changebgcolorp2").val();
      
      $("#submitbgcolor").click(function(){
        document.body.style.backgroundColor=colorbgpagep2;
      });
      });
      $("#p2").click(function(){
          
      $(".header").prepend("<div id='mydivp2'style='position:absolute; z-index:9;'> <div contenteditable='true'><p id='p2' contenteditable='true'style='width:100%; '>Paragraph 2</p></div><br><div id='textsettingiconp2'><span contenteditable='false'id='textsettingspanp2' style='cursor:pointer;'><i class='fas fa-sliders-h'></i>&nbsp&nbspTextSetting</span><p id='showbtnp2'><i style='font-size:20px;cursor:pointer;float:right;' class='fas fa-arrow-down'></i></p>&nbsp&nbsp<p id='closebtnp2'><i style='font-size:20px;cursor:pointer;' class='fas fa-arrow-up'></i></p></div></div>");
      
      
      //textsetting
      $("#closebtnp2").click(function(){
          $("#textsettingp2").hide();
      });
      $("#showbtnp2").click(function(){
          $("#textsettingp2").show();
      });
      
      $("#textsettingspanp2").one('click',function(){
      $("#textsettingiconp2").append("<br><div id='textsettingp2' style='overflow:scroll;width:100%;height:30%;'><div id='fontp2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontsSize</h4><br><input type='button' id='p2increase' value='+'>&nbsp&nbsp&nbsp</input><input type='button' id='p2decrease' value='-'>&nbsp&nbsp&nbsp<input type='button' id='p2reset' value='='></input></div><br><hr><div id='fontcolorp2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>Fontcolor</h4><br><input type='color' id='fontclrp2'>&nbsp&nbsp<input type='button'value='Apply'id='clrapplyp2'></input><br><br><hr></div><div id='fontstylep2'><h4 style='background-color:aqua;font-size:20px;border-radius:5px;'>FontStyle</h4><br><br><button id='boldp2'><i style='font-size:20px;cursor:pointer'id='boldp2'class='fas fa-bold'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='italicp2'><i style='font-size:20px;cursor:pointer;'id='italicp2'class='fas fa-italic'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='underlinep2'><i style='font-size:20px;cursor:pointer'id='underlinep2' class='fas fa-underline'></i></button>&nbsp&nbsp&nbsp&nbsp<button id='fontbgp2'><i style='font-size:20px;cursor:pointer;'id='fontbgp2'class='fas fa-highlighter'></i></button>&nbsp&nbsp&nbsp&nbsp<i style='font-size:20px;cursor:pointer;'class='fas fa-link'></i></div>")
      
      //Increse or decrease Font Size
      var originalSizep2 = $('#p2').css('font-size');  
         // reset        
          $("#p1reset").click(function(){           
          $('#p2').css('font-size', originalSizep1);         
           });
           //Increase Font Size
          $("#p2increase").click(function(){         
              var currentSizep2 = $('#p2').css('font-size');         
              var currentSizep2= parseFloat(currentSizep2)*1.2;          
              $('#p2').css('font-size', currentSizep2);         
              return false;          
              });        
              
               // Decrease Font Size       
               $("#p2decrease").click(function(){        
               var currentFontSizep2 = $('#p2').css('font-size');        
               var currentSizep2= $('#p2').css('font-size');        
               var currentSizep2 = parseFloat(currentSizep2)*0.8;        
               $('#p2').css('font-size', currentSizep2);         
               return false;         
               });    
                   //Change Text Color
              $("#fontclrp2").change(function(){
                  var fontcolorp2=$("#fontclrp2").val();
                  $("#clrapplyp2").click(function(){
                  $("#p2").css({"color": fontcolorp2});
              });   
      
      });
            //Bold
            $("#boldp2").click(function(){
              $("#p2").css({'font-weight':'bold'})
          });
          //Italic
          $("#italicp2").click(function(){
              $("#p2").css({'font-style':'italic'})
          });
          //Underline
          $("#underlinep2").click(function(){
              $("#p2").css({'text-decoration':'underline'})
          });
            //fontbackground
            $("#fontbgp2").one('click',function(){
                $("#fontbgp2").append("<input type='color' id='fontbgselectp2'></input>&nbsp&nbsp<input type='button' value='apply'id='applyfontbgp2'></input");
                $("#fontbgselectp2").change(function(){
                  var fontbg5=$("#fontbgselectp2").val();
                  $("#applyfontbgp2").click(function(){
                      $("#p2").css({'background-color':fontbg5});
                  });
          });
          });
              }); 
      //Make the DIV element draggagle:
      dragElement(document.getElementById('mydivp2'));
      
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + 'header')) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
          elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
          $("#p2").select();
        }
      }
      });
   
   
   
           
});

