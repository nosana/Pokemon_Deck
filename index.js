

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
             <span class="badge rounded-pill text-capitalize ${val.type.name}">${val.type.name}</span> 
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

   
       
        let progressbarStats="";
        $.each(res.stats,function(key,val){
            let statPercentage = Math.round((val.base_stat/200)*100);
            progressbarStats += 
                `<p class="statNames">${val.stat.name}</p>
                <div class="progress" style="height: 30px;">
                    <div class="progress-bar progress-bar-striped bg-success ${val.stat.name}" role="progressbar" style="width: ${statPercentage}%;" aria-valuenow="${val.base_stat}" aria-valuemin="0" aria-valuemax="255">${val.base_stat}</div>
                </div>`;        
        })
        $("#stats").html(progressbarStats);

       
       
        $("#gantiPoke").text(res.name.toUpperCase())
        // $("#hp").html(res.stats[0].stat.name)
        // $('#Php').html(res.stats[0].base_stat)

        // $("#attack").text(res.stats[1].stat.name)
        // $('#PAttack').html(res.stats[1].base_stat)

        // $("#defense").text(res.stats[2].stat.name)
        // $("#PDefense").text(res.stats[2].base_stat)

        // $("#special-attack").text(res.stats[3].stat.name)
        // $("#Psa").text(res.stats[3].base_stat)

        // $("#special-defense").text(res.stats[4].stat.name)
        // $("#Psd").text(res.stats[4].base_stat)

        
        let weightPoke= "";
        weightPoke = `
        <h4>Weight</h4>
        <div>${res.weight} kg</div>
        `
        $("#Weight").html(weightPoke);

        let heightPoke= "";
        heightPoke = `
        <h4>Height</h4>
        <div>0.${res.height} m</div>
        `
        $("#Height").html(heightPoke);


        
        //  $("#Weight").html(res.weight)
     
        // $("#Height").html(res.height)
       poke_species_details(res.species.url);

        function poke_species_details(url){
            $.ajax({
              url:url
            }).done((res)=>{
              console.log(res.flavor_text_entries[37].flavor_text);
              let pokemon_desc = "";
              pokemon_desc = `${res.flavor_text_entries[37].flavor_text}`
              $("#pokemon-desc").html(pokemon_desc);
            })
          }

          mencoba(res.species.url);

        function mencoba(url){
            $.ajax({
              url:url
            }).done((res)=>{
              console.log(res.flavor_text_entries);
             
            })
          }

    });

}


