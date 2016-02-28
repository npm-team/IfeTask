var myEvent={
       //添加句柄
       addHandler:function(element,type,handler){
          if(element.addEventListener){
             element.addEventListener(type,handler,false);
          }else if(element.attachEvent){
             elements.attachEvent('on'+type,handler);
          }else{
            element['on'+type]=handler;
          }
       },
       //删除句柄
       removeEvent:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;
        }
       },
       getEvent:function(event){
        return event?event:window.event;
       },
       getType:function(event){
          return event.type;
       },
       getElement:function(evetn){
         return event.target||event.srcElement;
       },
       preventDefault:function(event){
        if(event.preventDefault){
          event.preventDefault();
        }else{
          event.returnValue=false;
        }
       },
       stopPropagation:function(){
          if(event.stopPropagation()){
              event.stopPropagation();
          }else{
            event.cancelBubble=true;
          }
       }    
      }