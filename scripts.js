const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages
        this.militaryImages = militaryImages
    }
    
    getRandomCivil() {
        return this.civilImages[parseInt(Math.random()*5)]        
    }
    
    getRandomMilitary() {        
        return this.militaryImages[parseInt(Math.random()*5)]   
    }

    getAll() {
        return this.civilImages.concat(this.militaryImages)
    }
}

class Painter {
    constructor() {
        this.galery = document.createElement("section");
        this.createGallery()
    }

    createGallery() {
        document.querySelector("body").appendChild(this.galery);
    }

    createImageTag(imageUrl) {
        let picture_element = document.createElement("picture");
        let img = document.createElement("img");
        let attr = document.createAttribute("src");
        attr.value = imageUrl;
        img.setAttributeNode(attr);
        picture_element.appendChild(img);
        document.querySelector("section:last-child").appendChild(picture_element);       
    }

    paintSingleImage(imageUrl) {
        this.createImageTag(imageUrl)
    }

    paintMultipleImages(arrayOfImages) {
        for (let i = 0; i < arrayOfImages.length; i++) {
            this.createImageTag(arrayOfImages[i])
        }
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();