
let timerid;
let url=`https://www.themealdb.com/api/json/v1/1/search.php?f=c`;
let container=document.getElementById("container");

const getdata= async(url)=>{
   try{
    let res=await fetch(url);
    let data1= await res.json();
    let data=data1.meals;
    append(data);
 //   console.log(data);
   }
   catch(error){
       console.log("error");
   }
}
getdata(url);


const append=(data)=>{
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
 container.append(div);

  div.onclick=()=>{
 //  console.log("Hello");
   localStorage.setItem("title",JSON.stringify(el.idMeal));
   window.location.href="about.html";
  }

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
    append(dat);
}

const debounce=(main,delay)=>{

if(timerid){
    clearTimeout(timerid);
}
timerid=setTimeout(()=>{
    main();
},delay);


}