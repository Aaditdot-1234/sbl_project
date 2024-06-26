<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Adit Chaurasia">
    <meta name="Description" content="This page contains all the things I am learning how to create as I learn HTML.">
    <title>Adding Containers</title>
    <link rel="icon" href="public/images/html5.png" type="image/x-icon"> 
    <link rel="stylesheet" href="css/container.css"> 
    <script src="javascript/script.js"></script>  
</head>   
<body> 
    <div class="form_container">
        <form id="productForm" method="post" action="process_form.php"> <!-- PHP form action -->
            <h1 style="font-family: Verdana; margin-bottom: 100px;text-align: center;">Add product</h1> 

            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" placeholder="Name" required>
        
            <label for="productCategory">Product Category:</label>
            <input type="text" id="productCategory" name="productCategory" placeholder="Category" required>
        
            <label for="productPrice">Product Price:</label>
            <input type="number" id="productPrice" name="productPrice" placeholder="Price" required>
            
            <button type="submit" value="submit">Create</button>
        </form>  
    </div>  
    <!-- <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script> -->
    <!-- <script src="javascript/db.js" type="module"></script> --> 
</body>
</html>
