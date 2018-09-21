function markdown2Json(md, mdx, gfm){
 var lines = md.split("\n");
 var obj = {};
 
}
function lineTextFormat(line, mdx, gfm){
 var r = [];
 var i = 0;
 var open = [];
 var that = {type: "", text: ""};
 while(i < line.length){
  var thisChar = line[i];
  var nextChar = line[i + 1];
  if(thisChar === "*" || thisChar === "_"){
   if(thisChar === nextChar && thisChar === "*"){
    if(open[open.length - 1] === "bold"){
     open.pop()
    }else{
     open.push("bold")
    };
   }else{
    if(thisChar !== nextChar){
    if(open[open.length - 1] === "ital"){
     open.pop()
    }else{
     open.push("ital")
    };
    };
   };
  };
 };
};
