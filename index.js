
//array
let array=[1,2,3,4];
console.log(array);
//insert array last
array.push("halo");
console.log(array);
array.pop();
console.log(array);
//insert depan
array.unshift("testing");
console.log(array);
array.shift();
console.log(array);

//array multidimensional
let arrayMulti = ['a','b',3,[4,5,'d'],true];
console.log(arrayMulti[3][2]);

//arrow function
let hitung= (a,b)=>a+b;
console.log(hitung(5,10));
//anonymous function
let hitungAnon= function(x,y){
    return x+y;
}
console.log(hitungAnon(10,15));


const nilai = 50;
console.log(nilai);

//object
const mhs={
    nim:"a112000",
    name:"budi",
    age:50,
    hobby:['mancing','tawuran','ngoding'],
    isActive:true
}

const user = {};
user.username = "budi";
user.password = "1234";

console.log(mhs.hobby[2]);

// array of object

const animals = [
    {name:"budi",species:"dog",class:{name:"mamalia"}},
    {name:"nemo",species:"fish",class:{name:"invertebrata"}},
    {name:"bayu",species:"dog",class:{name:"mamalia"}},
    {name:"jalin",species:"dog",class:{name:"mamalia"}},
    {name:"dory",species:"fish",class:{name:"invertebrata"}}
]

//buat sebuah fungsi untuk mengambil object yg speciesnya dog,
//lalu dimasukkan ke dalam variabel OnlyDog

//jika fish ubah class menjadi ovipar
let OnlyDog = [];

animals.forEach(animal => {
    if(animal.species =="dog"){
        OnlyDog.push(animal) ;
    }
});

let onlyDogFilter = animals.filter(animal=>animal.species=="dog");
let isDog = animals.map(animal=>{
    return {
        name : animal.name,
        isDog : animal.species == "dog" ? true:false
    }
})
console.log(isDog);

// let judul = document.getElementById("judul");
// let paragrafAja = document.getElementsByTagName("p")[0];
// paragrafAja.style.backgroundColor = "blue";

// let paragrafAja2 = document.querySelector(".list:nth-child(3)")


// judul.onclick = function(){
//     judul.innerHTML = "berubah";
// }
// judul.onclick = function(){
//     judul.style.backgroundColor = "red";
// }

// function berubah(){
//     console.log("tes");
//     let judul = document.getElementById("judul");
//     judul.style.backgroundColor = "red";
//     judul.innerHTML = "beru\bah";
// }

// judul.addEventListener('click',function(){
//     judul.innerHTML = "masuk";
// });
// judul.addEventListener('click',function(){
//     judul.style.backgroundColor = "red";
// });

// $(".list:nth-child(3)").on('click',function(){
//     $(".list:nth-child(3)").html("ini diubah dari Jquery");
// });

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/", 
}).done((res)=>{
    
    let temp="";
    $.each(res.results,function(key,val){
        // literal template
        temp += `<tr>
                    <td>${key+1}</td>
                    <td>${val.name}</td>
                    
                    <td><button class="btn btn-primary" onclick="detailPoke('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalDetailPoke">Detail</button></td>
                </tr>`;
    })
    // console.log(temp);
    $("#tablePoke").html(temp);

}).fail((err)=>{
    console.log(err);
});





function detailPoke(url){
    $.ajax({
        url: url
    }).done((res)=>{
        console.log(res);
        $(".modal-title").html(res.name);
        $("#gambarPoke").attr('src',res.sprites.other.dream_world.front_default)


        let typePoke = ""
        $.each(res.types,function(key,val){
            // literal template
           
             typePoke += `
             <span class="badge rounded-pill bg-warning text-dark">${val.type.name}</span> 
                    `
            
        })
        $("#type").html(typePoke);




        let abilityPoke= ""
        $.each(res.abilities,function(key,val){
            abilityPoke += `<tr>
                    
            <td>${val.ability.name}</td>
            </tr>`
        })
        $("#ability").html(abilityPoke);

   
       
        

       
       
        $("#gantiPoke").text(res.name)
        $("#hp").html(res.stats[0].stat.name)
        $('#Php').html(res.stats[0].base_stat)

        $("#attack").text(res.stats[1].stat.name)
        $('#PAttack').html(res.stats[1].base_stat)

        $("#defense").text(res.stats[2].stat.name)
        $("#PDefense").text(res.stats[2].base_stat)

        $("#special-attack").text(res.stats[3].stat.name)
        $("#Psa").text(res.stats[3].base_stat)

        $("#special-defense").text(res.stats[4].stat.name)
        $("#Psd").text(res.stats[4].base_stat)

        


        
         $("#Weight").html(res.weight)
     
        $("#Height").html(res.height)
       

    });

}


