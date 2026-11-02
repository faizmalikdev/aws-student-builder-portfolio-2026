(function(){
'use strict';
document.getElementById('yr').textContent=new Date().getFullYear();

var burger=document.getElementById('burger'),menu=document.getElementById('menu');
burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}});

var els=document.querySelectorAll('.card,.stats div,h2');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
  els.forEach(function(e){e.classList.add('reveal');io.observe(e)});
}

var out=document.getElementById('out'),form=document.getElementById('form'),input=document.getElementById('cmd');
var history=[],hi=0;

function line(text,cls){var p=document.createElement('p');p.className='ln '+(cls||'');p.textContent=text;out.appendChild(p);return p}
function link(label,url){var p=document.createElement('p');p.className='ln';p.appendChild(document.createTextNode(label+': '));var a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=url.replace('mailto:','');p.appendChild(a);out.appendChild(p)}
function lines(arr,cls){arr.forEach(function(t){line(t,cls)})}

var C={
 help:function(){line('Available commands:','h');
  [['help','show this list'],['about','who I am'],['skills','my tech stack'],['projects','featured projects'],['experience','internship details'],['education','MCA & BCA'],['contact','how to reach me'],['clear','clear the screen']].forEach(function(c){line('  '+c[0].padEnd(12)+'- '+c[1])})},
 about:function(){line('Faiz Malik — MCA Student | Full Stack Developer','h');
  lines(['Based in Hathras, Uttar Pradesh, India.','Strong foundations in JavaScript, C++, DSA, databases and web development.','Builds MERN apps, RESTful APIs, JWT auth, real-time communication and responsive UIs.','Learning AWS and DevOps. Seeking Software / Full Stack Developer roles.'])},
 skills:function(){line('Tech Superpowers','h');
  lines(['Languages  : JavaScript (ES6+), C++','Frontend   : HTML5, CSS3, React.js, Tailwind CSS','Backend    : Node.js, Express.js, RESTful APIs','Databases  : MongoDB, Mongoose, MySQL','Tools      : Git, GitHub, VS Code, Postman, Hoppscotch','Concepts   : DSA, OOP, JWT Auth, Authorization, CRUD, MVC, Responsive Design, WebRTC, Socket.io']);
  line('Learning interests: AWS, DevOps (not certifications)','dim')},
 projects:function(){line('Featured Projects','h');
  line('1. SyncMeet — Video Conferencing (React, Node, Express, WebRTC, Socket.io)','ok');
  lines(['   Peer-to-peer video for 2+ participants, Socket.io signaling for rooms,','   mic/video toggles, screen sharing, call termination, live text chat.']);
  link('   GitHub','https://github.com/faizmalikdev/syncmeet-app');link('   Live  ','https://syncmeet-frontend-iby8.onrender.com/');
  line('2. AirNest — Airbnb Clone (MongoDB, Express, React, Node)','ok');
  lines(['   Property listings, JWT auth & authorization, CRUD, REST APIs,','   search/listing/booking workflows, Mongoose schemas for users, listings, bookings.']);
  link('   GitHub','https://github.com/faizmalikdev/Airnest-airbnb-');link('   Live  ','https://airnest-airbnb.onrender.com/')},
 experience:function(){line('Full Stack Web Development Intern','h');
  lines(['International Institute of SDGs and Public Policy Research — New Delhi','May 2026 – July 2026','- Developed and maintained 2+ full-stack web features','- Built 5+ responsive frontend components, integrated backend APIs','- Used Git/GitHub; collaborated on 10+ modular, maintainable code tasks'])},
 education:function(){line('Education','h');
  lines(['MCA  — Mangalayatan University, Aligarh (2025 – Present)','BCA  — Dr. MPS Group of Institutions College of Business Studies, Agra (2022 – 2025), CGPA 7.4/10','Coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks, Software Engineering'])},
 contact:function(){line('Contact','h');
  link('Email','mailto:faizmalik93320@gmail.com');line('Phone: +91-7902069364');
  link('GitHub','https://github.com/faizmalikdev');link('LinkedIn','https://linkedin.com/in/faizmalikdev')},
 clear:function(){out.textContent=''}
};

function run(raw){
  var cmd=raw.trim().toLowerCase();
  if(!cmd)return;
  var p=document.createElement('p');p.className='ln cmdln';
  var b=document.createElement('b');b.textContent='visitor@faiz.dev:~$ ';p.appendChild(b);p.appendChild(document.createTextNode(raw.trim()));out.appendChild(p);
  if(Object.prototype.hasOwnProperty.call(C,cmd))C[cmd]();
  else line("command not found: "+cmd+". Type 'help' to see available commands.",'err');
  out.scrollTop=out.scrollHeight;
}

form.addEventListener('submit',function(e){
  e.preventDefault();var v=input.value;
  if(v.trim()){history.push(v);hi=history.length}
  run(v);input.value='';
});
input.addEventListener('keydown',function(e){
  if(e.key==='ArrowUp'){e.preventDefault();if(hi>0){hi--;input.value=history[hi]}}
  else if(e.key==='ArrowDown'){e.preventDefault();if(hi<history.length-1){hi++;input.value=history[hi]}else{hi=history.length;input.value=''}}
  else if(e.key==='Tab'){e.preventDefault();var m=Object.keys(C).filter(function(k){return k.indexOf(input.value.toLowerCase())===0});if(input.value&&m.length===1)input.value=m[0]}
});
document.getElementById('term').addEventListener('click',function(e){if(!window.getSelection().toString()&&e.target.tagName!=='A')input.focus()});

var q=document.querySelector('.quick');
Object.keys(C).forEach(function(k){var b=document.createElement('button');b.type='button';b.textContent=k;b.addEventListener('click',function(){run(k);history.push(k);hi=history.length;input.focus({preventScroll:true})});q.appendChild(b)});

line('FAIZ.DEV — Developer Superpower Terminal v1.0','h');
line("Welcome! Type 'help' to see what I can do.",'dim');
})();
