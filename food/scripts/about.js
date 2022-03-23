let timerid;
//let url=`https://www.themealdb.com/api/json/v1/1/random.php`;
let title=JSON.parse(localStorage.getItem("title"));
const day=async ()=>{
    try{
     let res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${title}`);
     let data1= await res.json();
     let data=data1.meals;
     append(data);
    }
    catch(error){
        console.log(error);
    }
}
day();
let pic=document.getElementById("pic");
let write=document.getElementById("write");
let description=document.getElementById("description");
let Name=document.getElementById("Name");
let measure=document.getElementById("measure");
const append=(data)=>{
 pic.innerHTML=null;
 write.innerHTML=null;
 Name.innerHTML=null;
 description.innerHTML=null;
 measure.innerHTML=null;
 data.map((el)=>{

 let name=document.createElement("h2");
 name.innerText=("Name :")+el.strMeal;
 let category=document.createElement("h2");
 category.innerText=("Category :")+el.strCategory;
 let Area=document.createElement("h2");
 Area.innerText=("Area :")+el.strArea;
 Name.append(name,category,Area);
 //console.log(name);
 
 let image=document.createElement("img");
 image.src=el.strMealThumb;
 
 let div_inf = document.createElement('div')
div_inf.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${el.strYoutube.substr(32)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
 

let h2=document.createElement("h2");
h2.innerHTML=("Ingridients")
 let ingridients=document.createElement("h3");
 let ingridients1=document.createElement("h3");
 let ingridients2=document.createElement("h3");
 let ingridients3=document.createElement("h3");
 let ingridients4=document.createElement("h3");
 let ingridients5=document.createElement("h3");
 let ingridients6=document.createElement("h3");
 let ingridients7=document.createElement("h3");
 let ingridients8=document.createElement("h3");
 let ingridients9=document.createElement("h3");
 ingridients.innerText=el.strIngredient1+(" :");
 ingridients1.innerText=el.strIngredient2+(" :");
 ingridients2.innerText=el.strIngredient3+(" :");
 ingridients3.innerText=el.strIngredient4+(" :");
 ingridients4.innerText=el.strIngredient5+(" :");
 ingridients5.innerText=el.strIngredient6+(" :");
 ingridients6.innerText=el.strIngredient7+(" :");
 ingridients7.innerText=el.strIngredient8+(" :");
 ingridients8.innerText=el.strIngredient9+(" :");
 ingridients9.innerText=el.strIngredient10+(" :");



 write.append(h2,ingridients,ingridients1,ingridients2,ingridients3,ingridients4,ingridients5,ingridients6,ingridients7,ingridients8,ingridients9);

   let h=document.createElement("h2");
   h.innerText="Measurement"
 
      let Measure1 = document.createElement('h3')
        Measure1.innerText = el.strMeasure1

        let Measure2 = document.createElement('h3')
        Measure2.innerText = el.strMeasure2

        let Measure3 = document.createElement('h3')
        Measure3.innerText = el.strMeasure3

        let Measure4 = document.createElement('h3')
        Measure4.innerText = el.strMeasure4

        let Measure5 = document.createElement('h3')
        Measure5.innerText = el.strMeasure5

        let Measure6 = document.createElement('h3')
        Measure6.innerText = el.strMeasure6

        let Measure7 = document.createElement('h3')
        Measure7.innerText = el.strMeasure7

        let Measure8 = document.createElement('h3')
        Measure8.innerText = el.strMeasure8

        let Measure9 = document.createElement('h3')
        Measure9.innerText = el.strMeasure9

        let Measure10 = document.createElement('h3')
        Measure10.innerText = el.strMeasure10

        measure.append(h,Measure1,Measure2,Measure3,Measure4,Measure5,Measure6,Measure7,Measure8,Measure9,Measure10);

 pic.append(image, div_inf);
 
 let desc=document.createElement("h3");
 desc.innerText=el.strInstructions;

 description.append(desc);
 });
}


let input_box=document.getElementById('search');

input_box.addEventListener('input', ()=>{

debounce(main,1200);

});
//input=input.value;
const searchfun=async()=>{
    let input=input_box.value;
    let url1=`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    try{
     let res=await fetch(url1);
     let data1=await res.json();
     let dat=data1.meals;
     return dat;
    }
    catch(error){
     console.log(error);
    }
}

const main=async()=>{
    let dat=await searchfun();
    if(dat==undefined){
        return false;
    }
    append1(dat);
}

const debounce=(main,delay)=>{

if(timerid){
    clearTimeout(timerid);
}
timerid=setTimeout(()=>{
    main();
},delay);


}
let container1=document.getElementById("container1");

const append1=(data)=>{
 container.innerHTML=null;
 data.forEach((el)=>{
  
 let div=document.createElement("div");

 let name=document.createElement("h3");
 name.innerText=("Name :")+el.strMeal;
 let category=document.createElement("h3");
 category.innerText=("Category :")+el.strCategory;

 let image=document.createElement("img");
 image.src=el.strMealThumb;

 div.append(image,name,category);
 container1.append(div);

  div.onclick=()=>{
 //  console.log("Hello");
   localStorage.setItem("title",JSON.stringify(el.idMeal));
   window.location.href="about.html";
  }

 });
}
