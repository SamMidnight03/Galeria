document.addEventListener('DOMContentLoaded', function(){
    const FilterBtn = document.querySelectorAll(".Filter-btn");
    const GaleryIten = document.querySelectorAll(".item");
   
    FilterBtn.forEach(Button => {
        Button.addEventListener('click', ()=>{
            //si tiene a clase "active" la quita
            FilterBtn.forEach(btn => btn.classList.remove('active'));
            //si no tiene la clase "active" la agrga
            Button.classList.add('active');
    
            //Toma lo que tiene el atributo "data-filter"
            const FilterValue = Button.getAttribute('data-filter');
    
            //Muestra solo los elementos con la categoria escogida
            GaleryIten.forEach(item =>{
                if(FilterValue === 'all' || item.classList.contains(FilterValue)){
                    item.style.display = 'block';
                }else{
                    item.style.display = 'none';
                }
            })
    
        })
    });
});