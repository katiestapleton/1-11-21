/*
    ### Assignment for Today 01/11 (due at midnight tonight)

[U2 Lab 2: Exploring a MongoDB database](https://skilledkc.valor.training/mod/assign/view.php?id=11657)

In this assignment, we'll create a recipe database - this time in Mongo instead of SQL.  Please follow these instructions instead of the instructions listed in the assignment:

1. This lab is going to be relatively simple, since this is all new. We're going to create a recipe ingredients database with Mongoose similar to the SQL database from before.

7. Comment the code and clearly explain what the script is doing.
8. Put your  commands in a file in a Github repo and submit the repo link to Lab 2
*/


//2. Create the mongoose schema and model

//7. Insert 3 new recipes and their ingredients, amounts, and measures in to the Database
// array storing all recipes and related information. creates collection for each recipe
[ 
    {
        "recipeName": "Fruit Loops Shake",
        "recipeDesc": "Vanilla shake with Fruit Loops Cereal",
        "instructions": "Placed fruit loops into blender. Place ice cream on top of fruit loop. Press ice cream setting on blender. Then serve.",
        // array needed to store all ingredients for given recipe in one collection
        "ingredients": [
            {
                "ingredientName": "Soften vanilla ice ceam",
                "measurement": "cups",
                "quantity": "3"
            },
            {
                "ingredientName": "Fruit Loops cereal",
                "measurement": "oz",
                "quantity": "1"
            }
        ] 
    },

    {
        "recipeName": "Root Beer Float",
        "recipeDesc": "Root beer drink containing ice cream and whipped cream",
        "instructions": "Pour root bear into large cup. Add ice cream into cup. Swirl whipped cream on top",
        // array needed to store all ingredients for given recipe in one collection
        "ingredients": [
            {
                "ingredientName": "Root beer",
                "measurement": "can",
                "quantity": "1"
            },
            {
                "ingredientName": "hard vanilla ice cream",
                "measurement": "scoop",
                "quantity": "2"
            },
            {
                "ingredientName": "whipped cream",
                "measurement": "Tbls",
                "quantity": "3"
            }
        ] 
    },

    {
        "recipeName": "Fudge Sunday",
        "recipeDesc": "Chocolate ice cream topped with hot fudge",
        "instructions": "Heat up fudge in microwave. Place ice cream into bowl. Place fudge on top of ice cream",
        // array needed to store all ingredients for given recipe in one collection
        "ingredients": [
            {
                "ingredientName": "fudge syrup",
                "measurement": "tspn",
                "quantity": "2"
            },
            {
                "ingredientName": "chocolate ice cream",
                "measurement": "scoop",
                "quantity": "3"
            }
        ] 
    }

]

// produce list of all recipes


// find recipes that use a specific ingredient


// update stored recipe



/*
8. Write a query to get a list of all the Recipes
9. Write a query to get a list of Recipes that use a certain Ingredient
10. Write a query to update a recipe you added
*/
//db.collection.find