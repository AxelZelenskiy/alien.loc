"use strict";

let elementToUpdate = document.querySelector('p.update-me');


fetch('/ajax/form.php',{
			method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:44}) 
        })
.then(response => response.json())
.then(data => 
	{ 
		console.log(data);
		elementToUpdate.innerHTML = data.id;
	});