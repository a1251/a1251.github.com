  let timeOut = 0;
    let animationTimeOut = 0;
let common = {
  showToast(str){
    clearTimeout(timeOut);
    clearTimeout(animationTimeOut)
    let span = document.getElementById("toast");
    if(span){
      span.innerText = str;
      span.style.display = 'block';
    }else{
    span = document.createElement('span');
    span.id = 'toast';
    span.innerText = str;
    window.document.body.appendChild(span);
    let sWidth = span.offsetWidth;
    span.style.left = 'calc(50% - '+(sWidth/2)+'px)';
    }
    span.classList.remove('fade-out')

    animationTimeOut = setTimeout(function(){
      span.classList.add('fade-out');
      clearTimeout(animationTimeOut)
    },1500);
    timeOut = setTimeout(function(){
      span.style.display = 'none';
      clearTimeout(timeOut);
    },2500);
  }
}
export default common
