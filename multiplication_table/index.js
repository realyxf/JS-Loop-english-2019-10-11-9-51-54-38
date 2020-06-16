var str = "";
for(var x=1;x<=9;x++){
  for(var y=1;y<=x;y++){
    str += x + "*" + y + "=" + x*y + " ";
    if(x === y){
      str += "\n";
    }
  }
}
console.log(str);