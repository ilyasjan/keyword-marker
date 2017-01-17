
//findbtnID - 查找
//nextbtnID - 下一个
//prevbtnID - 上一个
//textID    - 输入框
//panelID   - 内容容器
//display   - 现是数量
function Marker(findbtnID,nextbtnID,prevbtnID,textID,panelID,display){
    this.findbtn=document.getElementById(findbtnID);
    this.nextbtn=document.getElementById(nextbtnID);
    this.prevbtn=document.getElementById(prevbtnID);
    this.display=document.getElementById(display);
    this.txt=document.getElementById(textID);
    this.panel=document.getElementById(panelID);
    this.oldCon=this.panel.innerHTML;
    this.keyColor='red';
    this.cursor=0;
    this.elements=[];
    
    this.getRedKey=function(key){
        return "<stan style='color:"+this.keyColor+"'>"+key+"</stan>";
    }
    this.replace=function(){
        var newCon=this.panel.innerHTML;
        var key=this.txt.value;
        var redKey=this.getRedKey(key);
        var keyReg=new RegExp(key,'gm');
        var replaced=oldCon.replace(keyReg,redKey);
        this.panel.innerHTML=replaced;
        this.elements=this.panel.getElementsByTagName('stan');
        this.display.innerText=this.elements.length;
    }
    
    this.intoView=function(e){
        this.clean();
        e.style.color='blue';
        e.scrollIntoView();
    }

    this.clean=function(){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].style.color=this.keyColor;
        }
    }
    this.next=function(){
        if(this.elements.length>this.cursor){
            intoView(this.elements[this.cursor]);
            this.cursor=this.cursor+1;
        }
    }       
    
    this.prev=function(){
        if(this.cursor>-1){
            this.cursor=this.cursor-1;
            intoView(this.elements[this.cursor]);
        }
    }
    
    this.findbtn.onclick=function(){
        replace();
    }

    this.nextbtn.onclick=function(){
        next();
    }

    this.prevbtn.onclick=function(){
        prev();
    }
}
