/* Create and set the images */

// Pictures container
var picturesContainer = document.getElementById("pictures");

// Dictionary with folder as key and array with image name as value
var picturesFolderFileNamesDict = {'funny': ['IMG_1976.jpeg', 'IMG_2004.jpeg', 'IMG_1917.jpeg', 'IMG_1690.jpeg', 'IMG_2069.jpeg', 'IMG_1887.jpeg', 'IMG_1604.jpeg', 'IMG_1983.jpeg', 'IMG_1982.jpeg', 'IMG_1644.jpeg', 'b5ea74bf-81db-48e5-a1ca-879c6c7f2cc8.jpeg', 'IMG_1989.jpeg', 'IMG_1731.jpeg', 'IMG_1592.jpeg', '1999B7B5-2CB9-47D1-91E0-5B01F576E7AD-2803-000001C7631A9F05.jpeg', 'IMG_1694.jpeg', 'IMG_1913.jpeg', 'IMG_1856.jpeg', 'IMG_2145.jpeg', 'CFFB8425-AD02-4310-82F9-1C5A4A45AAD5-9074-0000075D96E2BF77.jpeg', 'IMG_1841.jpeg', 'IMG_1688.jpeg', 'IMG_1919.jpeg', 'IMG_1847.jpeg', 'IMG_1754.jpeg', 'IMG_1607.jpeg', 'IMG_1888.jpeg', 'IMG_2070.jpeg'], 'eating': ['IMG_1872.jpeg', 'IMG_1842.jpeg']};

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
            var blockWrapper = document.createElement("div");
            var image = document.createElement("img");

            blockWrapper.classList.add("block-wrapper");
            image.classList.add("image-wrapper");

            image.setAttribute("alt", fileName);
            image.setAttribute("src", `../pictures/${folderName}/${fileName}`);

            blockWrapper.appendChild(image);
            picturesContainer.appendChild(blockWrapper);

            console.log(fileName)
            console.log(`../pictures/${folderName}/${fileName}`);
        }
    }
}
