//Square Star Pattern in Javascript
/*
*****
*****
*****
*****
*****
*/
function squre(){
    var row=5; //define rows
    var str=""; // define empty string
    for(i=1;i<=row;i++){ // external loop
        for(j=1;j<=row;j++){ //internal loop
            str=str+"*";
        }
        str=str+"\n"; // new line after loop
    }
    console.log(str);
}
squre();


//2. Hollow Square Pattern
/*
*****
*   *
*   *
*   *
*****
*/
function hollowsqure(){
    var row=5;
    var str="";
    for(i=1;i<=row;i++){
        for(j=1;j<=row;j++){
                if(i==1 || i==row){
                    str=str+"*";
                }else if(j==1 || j==5){
                    str=str+"*";
                }
                else{
                    str=str+" ";
                }
        }
        str=str+"\n";
    }
    console.log(str);
}
hollowsqure();


//3. Right Triangle Pattern in Javascript
/*
----*
---**
--***
-****
*****
*/
function righttrangle(){
    var row=5;
    var str="";
    for(var i=1;i<=row;i++){
        for(var j=0;j<row-i;j++){
            str+="-"; //" - " relpace with space to get right pattern
        }
        for(var k=1;k<=i;k++){
            str+="*";
        }
        str+="\n";
    }
    console.log(str)
}
righttrangle();


//4. Left Triangle Pattern in Javascript
/*
*
**
***
****
*****
*/
function lefttrangle(){
    var row=5;
    var str="";
    for(var i=1;i<=row;i++){
        for(var j=1;j<=i;j++){
            str+="*";
        }
        str+="\n";
    }
    console.log(str);
}
lefttrangle();

//5. Downward Triangle Star Pattern
/*
*****
****
***
**
*
*/
function downtrangle(){
    var row=5;
    var str="";
    for(i=1;i<=row;i++){
        for(j=row;j>=i;j--){
            str+="*";
        }
        str+="\n"
    }
    console.log(str);
}
downtrangle();

//6. Hollow Triangle Star Pattern
/*
*
**
* *
*  *
*   *
******
*/
function hollowtrangle(){
    var row=6;
    var str="";
    for(i=1;i<=row;i++){
        for(j=0;j<=i;j++){
            if(i==row){str+="*";} 
            else if(j==0 || j==i-1) {str+="*";}
            else str+=" ";
        }
        str+="\n"
    }
    console.log(str);
}
hollowtrangle();

//7. Javascript Pyramid Pattern
/*
    *
   ***
  *****
 *******
*********
*/
function pyramidtrangle(){
    var row=5;
    var str="";
    for(i=1;i<=row;i++){
        for(j=row;j>i;j--){
            str+=" ";
        }
        for(k=1;k<=(2*i-1);k++){
            str+="*"
        }
        str+="\n";
    }
    console.log(str);
}
pyramidtrangle();

//8. Reversed Pyramid Star Pattern
/*
*********
 *******
  *****
   ***
    *
*/
function revpyramidtrangle(){
    var row=5;
    var str="";
    for(i=1;i<=row;i++){
        for(j=1;j<i;j++){
            str+=" ";
        }
        for(k=0;k<=2*(row-i);k++){
            str+="*"
        }
        str+="\n";
    }
    console.log(str);
}
revpyramidtrangle();

//9. Hollow Pyramid Star Pattern
/*
    *
   * *
  *   *
 *     *
*********
*/
function hollowpyramidtrangle(){
    var row=5;
    var str="";
    for(i=1;i<=row;i++){
        for(j=1;j<=row-i;j++){
            str+=" ";
        }
        for(k=0;k<(2*i-1);k++){
           if(i==1||i==row){str+="*";}
           else if(k==0||k==(2*i-2)){str+="*";}
           else {str+=" ";}
        }
        str+="\n";
    } 
    console.log(str);
}
hollowpyramidtrangle();
