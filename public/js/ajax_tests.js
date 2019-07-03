console.log('This scripts created for test of ajax');
// create new request
let xhr = new XMLHttpRequest();
// configuration of request
xhr.open('GET','test-xhr.json',true);
// send request
xhr.send();
// reprocess responce 
xhr.onreadystatechange = function(){
	if (this.readyState != 4 )  return;

		if (xhr.status != 200) {
			// reprocess error
			console.log(xhr.status+' : '+xhr.statusText);
			return;
		} else {
			// console.log(xhr.responseText);
			let new_list = document.createElement('ul');
			document.getElementById('data').appendChild(new_list);
			let result_of_ajax = JSON.parse(xhr.responseText);
			// console.log(typeof result_of_ajax);
			result_of_ajax.forEach((element) => {
					let new_li = document.createElement('li');
					new_li.innerHTML = element.name;
					new_list.appendChild(new_li);
			});
		}
};



