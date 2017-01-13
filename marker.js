function Marker(buttonID,textID,panelID){
    this.btn=document.getElementById(buttonID);
    this.txt=document.getElementById(textID);
    this.panel=document.getElementById(panelID);
    this.oldCon=this.panel.innerHTML;
    this.keyColor='red';
    this.getRedKey=function(key){
        return "<span style='color:"+this.keyColor+"'>"+key+"</span>";
    }
    this.replace=function(){
        var newCon=this.panel.innerHTML;
        var key=this.txt.value;
        var redKey=this.getRedKey(key);
        var keyReg=new RegExp(key,'gm');
        var replaced=oldCon.replace(keyReg,redKey);
        this.panel.innerHTML=replaced;
    }
    this.btn.onclick=function(){
        replace();
    }
}
