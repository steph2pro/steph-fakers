
var input=document.querySelector(".todo-input");
var addBtn=document.querySelector('.todo-button');
 addBtn.addEventListener("click",function(event){
 	event.preventDefault();
 	if (input.value!='') {
 		 let url=`https://fakestoreapi.com/products?limit=${input.value}`;
 		 fetch(url)
 		 .then((response)=>
 		 	response.json().then((data)=>{
 		 		console.log(data);
 		 		let i=1;
 		 		for(let prod of data){
 		 			document.querySelector('.container').innerHTML+=`
 		 			<b>produit:${i++}</b>
					<hr>
				<div class="content">

					<div class="img"><img src="${prod.image}"></div>
					<div class="text">
						<div class="titre"><h3>titre:</h3>${prod.title}</div>
						<div class="prix"><h3>prix:</h3>${prod.price} </div>
						<div class="cat"><h3>categories:</h3>${prod.category}</div>
						<div class="des"><h3>description:</h3>${prod.description}</div>
						<div>
						<ion-icon name="pencil-sharp" class="icons"></ion-icon>
							<ion-icon name="trash" class="icons"></ion-icon>
						</div>
					</div>
				</div>`;
 		 		}
 		 	})).catch((erreur)=>console.log("l'erreure est"+erreur));
 	} else {
 		alert("enter le nombre d'article");
 	}
 });
