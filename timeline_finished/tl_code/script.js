"use strict";


window.addEventListener("DOMContentLoaded", loadSVG);

//window.addEventListener("DOMContentLoaded", loadEpisodes);

function loadSVG() {
  //   console.log("Load the SVG");
  fetch("timelinefin1.svg")
    .then(response => response.text())
    .then(svgdata => {
      //   document.querySelector("#svg_timeline").innerHTML = svgdata;
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

     startAnimate();
    
    });
}



function startAnimate() {



    var controller = new ScrollMagic.Controller();
    //var target1 = document.getElementById("lines").getElementsById("line3").getElementsByClassName("cls-4");
    
      
    // build scene
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#onetext"
    })
    .setTween("#fourtext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    



    var controller = new ScrollMagic.Controller();
    //var target1 = document.getElementById("lines").getElementsById("line3").getElementsByClassName("cls-4");
    
      
    // build scene
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#twotext"
    })
    .setTween(".img1", 1.9, {opacity: 0.7}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#onetext"
    })
    .setTween(".img2", 1.9, {opacity: 0.7}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#fourtext"
    })
    .setTween(".img3", 1.9, {opacity: 0.7}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
    var controller = new ScrollMagic.Controller();
    //var target1 = document.getElementById("lines").getElementsById("line3").getElementsByClassName("cls-4");
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#ninetext"
    })
    .setTween(".img4", 1.9, {opacity: 0.7}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
    var controller = new ScrollMagic.Controller();
    //var target1 = document.getElementById("lines").getElementsById("line3").getElementsByClassName("cls-4");
    var scene = new ScrollMagic.Scene({
      triggerElement: "#fivetext"
    })
    .setTween(".img5", 1.9, {opacity: 0.7}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
    
      
    var controller = new ScrollMagic.Controller();
    //var target1 = document.getElementById("lines").getElementsById("line3").getElementsByClassName("cls-4");
    var scene = new ScrollMagic.Scene({
      triggerElement: "#fivetext"
    })
    .setTween(".img6", 1.9, {opacity: 0.7}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
      
    // build scene
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#twotext"
    })
    .setTween("#threetext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#onetext"
    })
    .setTween("#fourtext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
    

     
    var scene = new ScrollMagic.Scene({
        triggerElement: "#threetext"
      })
      .setTween("#fivetext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
      
    
    

    var scene = new ScrollMagic.Scene({
        triggerElement: "#fivetext"
      })
      .setTween("#sixtext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
      
    

    var scene = new ScrollMagic.Scene({
        triggerElement: "#eighttext"
      })
      .setTween("#ninetext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
      
    
      var scene = new ScrollMagic.Scene({
        triggerElement: "#ninetext"
      })
      .setTween("#seventext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
      
      var scene = new ScrollMagic.Scene({
        triggerElement: "#sixtext"
      })
      .setTween("#eighttext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
      
    
      var scene = new ScrollMagic.Scene({
        triggerElement: "#threetext"
      })
      .setTween("#fivetext", 1.9, {fill: "white", scale: 1.03}) // trigger a TweenMax.to tween
      .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      .addTo(controller);
      
    
    }

    /*const template = document.querySelector("#stories").content;
    const wrapper = document.querySelector("#wrapper");
    
   function loadEpisodes() {
      //fetch data from json
      fetch("json/episodes.json")
        .then(res => res.json())
        .then(episodedata => {
          console.log(episodedata);
          showEpisodes(episodedata);
        });
    };
    
  
    
    function showEpisodes(episodedata) {
      //create an article for each phone in the JSON-file from template
      episodedata.forEach(episode => {
        const copy = template.cloneNode(true);
        copy.querySelector("article").id = episode.id;
        console.log(episode.id);
        copy.querySelector(".episode").textContent = episode.episode;
        copy.querySelector(".date").textContent = episode.date;
        
    
        //append article to wrapper
        wrapper.appendChild(copy);
      });
    }    

    window.addEventListener("click", getTemplate)

    
    */




    