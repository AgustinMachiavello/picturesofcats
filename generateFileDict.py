import os

listDir = os.listdir(".")
picturesDict = {}

for indexDir in range(len(listDir)):
    item = listDir[indexDir]
    if os.path.isdir(item):
        if item == 'pictures':
            print('"pictures" folder found 🐱')
            picturesFolder = os.listdir("./pictures")
            for indexFolder in range(len(picturesFolder)):
                folderName = picturesFolder[indexFolder]
                # Ignore hidden folders
                if (folderName[0] != "."):
                    files = os.listdir("./pictures/{0}".format(folderName))
                    print("Found {0} files in '{1}' folder".format(len(files), folderName))
                    for indexFile in range(len(files)):
                        fileName = files[indexFile]
                        if (fileName[0] != "."):
                            if folderName in picturesDict:
                                picturesDict[folderName].append(fileName)
                            else:
                                picturesDict[folderName] = [fileName]
            print("---\nGenerated dict:\n---\n", picturesDict)
            break;
    if indexDir >= len(listDir):
        print('"pictures" folder not found')
