function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let r=document.getElementById('radius').value;
	const v=document.getElementById('volume');
	r=+r;
	// alert(r);
	if(isNaN(r)|| r<0){
		v.value=NaN;
		return ;
	}
	let ans=(Math.PI)*(Math.pow(r,3))*4/3;
	// alert(ans);
	v.value=ans.toFixed(4);
	
	// return ;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
