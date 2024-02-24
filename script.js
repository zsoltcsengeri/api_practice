function dataFetch() {
    const API_URL = "https://dummyjson.com/products";

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            // Extracting data using method 1: Object with properties
            const extractedData1 = data.products.map(product => ({
                brand: product.brand,
                name: product.title,
                category: product.category,
                price: product.price + "£"
            }));
            console.table(extractedData1)
            
            // Extracting data using method 2: HTML string
            const extractedData2 = data.products.map(product =>
                `<div>${product.brand}, ${product.title}, ${product.category}, ${product.price + "£"}</div>`
            );

            // Log the full products data object
            console.log(data);

            // Log the extracted data for inspection
            console.log("Extracted Data (Method 1):", extractedData1);
            console.log("Extracted Data (Method 2):", extractedData2);

            // Joining extracted data to HTML strings for further use
            const dataString1 = extractedData1.map(item => `<div>${item.brand}, ${item.name}, ${item.category}, ${item.price}</div>`).join("");
            const dataString2 = extractedData2.join("");

            // Log the dataStrings
            console.log("Data String (Method 1):", dataString1);
            console.log("Data String (Method 2):", dataString2);

            // Display the extracted data on the webpage
            document.body.innerHTML = dataString1 + "<br><br>" + dataString2;
        })
        .catch(error => console.error("Something went wrong:", error));
}

dataFetch();
