// Pictures container
var picturesContainer = document.getElementById("pictures");

// Dictionary with folder as key and array with image name as value
var picturesFolderFileNamesDict = {'funny': ['IMG_1731.jpeg', '1999B7B5-2CB9-47D1-91E0-5B01F576E7AD-2803-000001C7631A9F05.jpeg', 'IMG_1694.jpeg', 'IMG_1841.jpeg', 'IMG_1688.jpeg'], 'eating': ['IMG_1842.jpeg']};

// Load pictures
var dictKeys = Object.keys(picturesFolderFileNamesDict);

for (let indexFolder=0; indexFolder < dictKeys.length; indexFolder++) {
    // Check if the property/key is defined in the object itself, not in parent
    var folderName = dictKeys[indexFolder];
    console.log(folderName)
    if (picturesFolderFileNamesDict.hasOwnProperty(folderName)) {
        var dictKeyValues = picturesFolderFileNamesDict[folderName]
        // Iterate over files inside folder
        for (let indexFile=0; indexFile < dictKeyValues.length; indexFile++) {
            var fileName = dictKeyValues[indexFile]
            console.log(fileName)
            var image = document.createElement("img");   // Create a <img> element
            image.setAttribute("alt", fileName);
            console.log(`../pictures/${folderName}/${fileName}`);
            image.setAttribute("src", `../pictures/${folderName}/${fileName}`);
            image.classList.add("image-wrapper"); // Add wrapper class
            picturesContainer.appendChild(image);
        }
    }
}
