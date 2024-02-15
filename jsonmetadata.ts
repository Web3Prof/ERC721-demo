const fs = require("fs");

// Read the JSON file
const directoryPath = "./sepolia-pots-1-100/metadata/";

fs.readdir(directoryPath, (err, files) => {
   if (err) {
      console.error("Error reading directory:", err);
      return;
   }

   for (const file of files) {
      if (file.endsWith(".json")) {
         const filePath = `${directoryPath}/${file}`;
         console.log(file);

         const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8")); // read as JSON string

         const regex = /SePots #(\d+)\.json/; // regex file name format, adjust to your files
         const match = regex.exec(file);
         if (match) {
            console.log(jsonData.image);
            // Rename the file and change image value
            jsonData.image = `https://bafybeigyv6t2hwojyumdmgb2qfmnukvwh4ex7laipa7kdttfmtrlkwfrdm.ipfs.nftstorage.link/ipfs/bafybeigyv6t2hwojyumdmgb2qfmnukvwh4ex7laipa7kdttfmtrlkwfrdm/sepots-%23${match[1]}.png`;

            const newFilePath = `${directoryPath}/${match[1]}`;
            if (!fs.existsSync(newFilePath)) {
               fs.writeFileSync(
                  `${newFilePath}`,
                  JSON.stringify(jsonData, null, 3)
               );
            }
         }
      }
   }
});
