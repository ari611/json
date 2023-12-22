let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
    { 
        "itemTitle": "inutte_iina",
        "category": "dolls",
        "id": "inutte_iina",
        "description": "Description for inutte_iina", 
        "image": "https://picsum.photos/200" 
    },
    { 
        "itemTitle": "rrpp_official",
        "category": "dolls", 
        "id": "rrpp_official", 
        "description": "Description for rrpp_official", 
        "image": "https://picsum.photos/200" 
    },
    { 
        "itemTitle": "muunyu", 
        "category": "dolls", 
        "id": "muunyu", 
        "description": "Description for muunyu",
        "image": "https://picsum.photos/200" 
    },
    { 
        "itemTitle": "chacounite", 
        "category": "nails", 
        "id": "chacounite", 
        "description": "Description for chacounite", 
        "image": "https://picsum.photos/200" },
    { 
        "itemTitle": "n40536", 
        "category": "nails", 
        "id": "n40536", 
        "description": "Description for n40536", 
        "image": "https://picsum.photos/200" 
    },
    { 
        "itemTitle": "ohnelly", 
        "category": "nails", 
        "id": "ohnelly", 
        "description": "Description for ohnelly", 
        "image": "https://picsum.photos/200" 
    }
];

document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") { 

    
    if (urlSection == "dolls") {
      pageTitleElement.innerText = "Dolls:";
    }
    else if (urlSection == "nails") {
      pageTitleElement.innerText = "Nails:";
    }

    
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(portfolioCollection[i]);
      }
    }

  }

  else {
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }

});


function createProjectPreview(incomingJSON) {
    let newPreviewLink = document.createElement("A");
    newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

    let newPreviewElement = document.createElement("DIV");
    newPreviewLink.appendChild(newPreviewElement);

    let newPreviewTitle = document.createElement("P");
    newPreviewTitle.classList.add("previewTitle");
    newPreviewTitle.innerText = incomingJSON["itemTitle"];
    newPreviewElement.appendChild(newPreviewTitle);

    let newPreviewThumbnail = document.createElement("IMG");
    newPreviewThumbnail.classList.add("thumbnail");
    newPreviewThumbnail.src = incomingJSON["image"];
    newPreviewElement.appendChild(newPreviewThumbnail);

    outputGridElement.appendChild(newPreviewLink);
}

function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
