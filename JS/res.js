let  achopen=false;

const resumeBtn=document.querySelector('.resume');
resumeBtn.addEventListener('click',()=>
{
  openLink();
}
);

function openLink()
{
  window.open("https://drive.google.com/file/d/1gvW6hUQ3wgcXmv3PWxmp_cRHxGCEcCfV/view");
  //alert("Hello");
}


const achbtn=document.querySelector('.js-achBtn');
achbtn.addEventListener('click',()=>
{ if(achopen=== false){
showAchieve();}
else
{
  closeAchieve();
}
});

function showAchieve()
{ achopen=true;
  document.querySelector('.pre-js').innerHTML=htmlText;
}

function closeAchieve()
{ achopen=false;
  document.querySelector('.pre-js').innerHTML=``;
}

const htmlText=`
<h2>Research Paper : " Smart Homes: From Conception to Reality with IoT".</h2>
<p>Issued by MANIT BHOPAL, ICET 2023 · Apr 2023</p>
<p>Certificate for presenting our own research paper on, "IoT Home Automation" in Second International Conference On Innovations in Clean Energy Technologies (ICET-2023) at Energy Centre, Maulana Azad National Institute of Technology, Bhopal, Madhya Pradesh, India from 8th-10th April 2023.
Paper is going to get publish in upcoming 2-3 months duration.</p>
<p>
    <a href="https://drive.google.com/file/d/1xQ5RYOjQtG5MOA3M_FbEy5q__A_1c6gm/view"
    target="_blank" class="link2">Certificate</a>
</p>

<h2>"National Engineering Olympiad".</h2>
<p>Issued by NEO 5.0 · Feb 2022</p>
<p>AIR -52 in the Competition.</p>
<p>
    <a href=" https://drive.google.com/file/d/1PAVJmWrOqdqOvj32M-2xb4p9KubL2P3t/view "
    target="_blank" class="link2">Certificate</a>
</p>

`;

let intShow=false;
const intBtn=document.querySelector('.js-inter');
intBtn.addEventListener('click',()=>
{ if(!intShow){
  showInterests();}
  else
  {
    closeInterests();
  }
});

function showInterests()
{ intShow=true;
  document.querySelector('.pre-js2').innerHTML=htmlText2;
}

function closeInterests()
{
  intShow=false;
  document.querySelector('.pre-js2').innerHTML='';


}

const htmlText2=` 
<h3> Android Development </h3>
<h3> Web Development </h3>
<h3> Chess & Cricket </h3>
<h3> IoT </h3>
`;
