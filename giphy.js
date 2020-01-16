$(document).ready(function(){
    const animals = ["dog", "cat", "bird", "horse", "monkey", "pig", "goat", "cow"];
    
    function makeButtons(array) {
        $("#animal-list").empty()
        for(let i = 0; i < array.length; i++) {
            let button = $("<button class = 'animalBtn' id ='"+array[i]+"'>" + array[i] + "</button>")
            $("#animal-list").append(button)
         
        }
        
    }
    
    makeButtons(animals);

    $(document).on("click", ".animalBtn", function(){
        $("#animal-gifs").empty()
        console.log(this.id)
        let queryURL = "https://api.giphy.com/v1/gifs/search?q="+this.id+"&api_key=ynwLzEYQAosrIjqOu2OV844SYe2qtBTS"
        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(res) {
            let data = res.data
            for(let i = 0; i<data.length; i++) {
                let animalGifURL = data[i].images.fixed_height.url
                let animalGif = $('<img src="' + animalGifURL +'"class=animal-img>"')
                
                // Can't find out how to pause Gif :/

                $("#animal-gifs").append(animalGif)
                
                console.log(animalGifURL)
                
            }
        })
    })

    $(document).on("click", "#submit", function() {
        event.preventDefault()
        animals.push($("input").val())
        makeButtons(animals)
    })


})
