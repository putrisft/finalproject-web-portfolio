// let span = document.getElementById('slider').getElementsByTagName('span');

// // let portfolio = document.getElementsById('portfolio')
// let portfolio = document.getElementsByClassName('card')

// let portfolio_page = Math.ceil(latest_recipe.length/3);

// let l = 0;
// let movePer = 25.34;
// let maxMove = 203;

// // mobile_view	
// let mob_view = window.matchMedia("(max-width: 768px)");
// if (mob_view.matches)
// {
// 	movePer = 50.36;
// 	maxMove = 504;
// }

// let moveRight = ()=>{
// 	l = l + movePer;
// 	if (portfolio == 1){
//         l = 0; 
//     }

// 	for(const i of portfolio)
// 	{
// 		if (l > maxMove){
//             l = l - movePer;
//         }
// 		i.style.left = '-' + l + '%';
// 	}
// }

// let moveLeft = ()=>{
// 	l = l - movePer;
// 	if (l<=0){l = 0;}
// 	for(const i of portfolio){
// 		if (portfolio_page>1){
// 			i.style.left = '-' + l + '%';
// 		}
// 	}
// }

// span[1].onclick = ()=>{
//     moveRight();
// }

// span[0].onclick = ()=>{
//     moveLeft();
// }
	
let span = document.getElementById('portfolio').getElementsByTagName('span');

let latest_recipe = document.getElementsByClassName('portfolio')

let recipe_page = Math.ceil(latest_recipe.length/2);

let l = 0;
let movePer = 35;
let maxMove = 40;

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
{
	movePer = 50.36;
	maxMove = 504;
}

let moveRight = ()=>{
	l = l + movePer;
	if (latest_recipe == 1){
        l = 0; 
    }

	for(const i of latest_recipe)
	{
		if (l > maxMove){
            l = l - movePer;
        }
		i.style.left = '-' + l + '%';
	}
}

let moveLeft = ()=>{
	l = l - movePer;
	if (l<=0){l = 0;}
	for(const i of latest_recipe){
		if (recipe_page>1){
			i.style.left = '-' + l + '%';
		}
	}
}

span[1].onclick = ()=>{
    moveRight();
}

span[0].onclick = ()=>{
    moveLeft();
}
	