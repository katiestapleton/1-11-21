//Author: Katie Stapleton, SKC student

//[U2 Lab 2: Exploring a MongoDB database](https://skilledkc.valor.training/mod/assign/view.php?id=11657)

/* INSTRUCTION ISSUE: 2. Create the mongoose schema and model
 * Note: I watched all videos over the last 2 days that contained any Mongo teachings.
 * However, I couldn't find anything about creating a Mongoose schema. 
 *I think it was supposed to be covered 1/12 afternoon, but we never got around to it.$set
*/



//7. Insert 3 new recipes and their ingredients, amounts, and measures in to the Database
// array storing all recipes and related information. creates collection for each recipe
// (CRUD: create)
const recipeArr = [ 
    {
        "recipeName": "Fruit Loops Shake",
        "recipeDesc": "Vanilla shake with Fruit Loops Cereal",
        "instructions": "Placed fruit loops into blender. Place ice cream on top of fruit loop. Press ice cream setting on blender. Then serve.",
        // array needed to store all ingredients for given recipe in one collection
        "ingredients": [
            {
                "ingredientName": "soft vanilla ice ceam",
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
                "ingredientName": "ice cream",
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
        "recipeName": "Hot Fudge Sunday",
        "recipeDesc": "ice cream topped with hot fudge",
        "instructions": "Heat up fudge in microwave. Place ice cream into bowl. Place fudge on top of ice cream",
        // array needed to store all ingredients for given recipe in one collection
        "ingredients": [
            {
                "ingredientName": "fudge syrup",
                "measurement": "tspn",
                "quantity": "2"
            },
            {
                "ingredientName": "ice cream",
                "measurement": "scoop",
                "quantity": "3"
            }
        ] 
    }

];


// produce list of all recipes (CRUD: read)
db.recipes.find();

// find recipes that use a specific ingredient (CRUD: read)
db.recipes.find({"ingredients.ingredientName": "ice cream"});

// update stored recipe (CRUD: update)
// I pulled this off of stack overflow and partially from mongo's official manual
db.recipes.updateOne(
    {    
        recipeName: "Hot Fudge Sunday",
        "ingredients.ingredientName": "fudge syrup"
    },
    {
        $set: {"ingredients.$.ingredientName": "fudge topping"}
    }
);