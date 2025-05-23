import type { Blog } from "../types";
let iterator: number = 0;

const gen_id = (): number => {
  return iterator++;
};

const recipes: Blog[] = [
  {
    id: gen_id(),
    title: "Smoky Chorizo and Red Bean Ragout",
    ingredients: [
      "1 Chorizo Sausage",
      "700g Butterbeans",
      "1/2 a shallot or red onion",
      "500g Jar of red peppers",
      "4 cloves of garlic",
      "2 tbsp tomato paste",
      "1 tsp smoked paprika",
      "1/2 a tsp cayenne pepper",
      "1 tsp oregano",
      "200 ml veg stock",
      "1 tbsp chopped basil",
      "1 tbsp chopped parsley",
      "1 tbsp chopped chives",
      "1/2 tbsp minced garlic",
      "1/2 a lemon, juiced",
      "2-3 tbsp olive oil",
    ],
    instructions: [
      "1. Dice the onion, peppers, and chorizo. If using real chorizo, fry it first for 5 minutes to get crispy edges and then remove and cook the rest in the chorizo oils. ",
      "One of the main tricks to this recipe is separation of ingredients and then reuiniting them at the right time. ",
      "2. Saute the onion in olive oil for 5 minutes and then add the peppers and the garlic. ",
      "3. Cook down for another 5 minutes and then add the spices, chorizo, and tomato paste. ",
      "4. Mix well and cook for another minute before adding the beans and stock. ",
      "5. Stir it all up and let simmer for 10 minutes until thick. ",
      "6. I recommend adding the lemon juice straight to whatever I'm going to call this. ",
    ],
    notes: [
      "Basically anything red and savory will go in here well - Lentils. Also, butterbean alternatives include chickpeas and Great Northern beans, which are easier to get a hold of. ",
    ],
    nutrition: ["Calories: 425", "Protein: 15.85g", "Carbs: 39g", "Fat: 23g"],
  },
  {
    id: gen_id(),
    title: "Pork Belly Tacos",
    ingredients: [
      "1 lb Pork Belly",
      "1 tsp smoked paprika",
      "1 tsp cumin",
      "1 tsp garlic powder",
      "2-4 Chipotle peppers in adobo sauce",
      "Grilled corn kernels",
      "1 cup Greek yogurt",
      "1 lime, juiced",
      "1 tsp honey (or to taste)",
      "Small tortillas",
      "1-2 ripe avocados, sliced",
      "Cilantro for garnish",
      "Lime wedges for serving",
      "Optional: thin sliced red onion, feta cheese, black beans",
    ],
    instructions: [
      '1. Cut pork belly into 1/2" to 1" cubes. Toss these in a very lightly oiled pan (the pork belly fat will prevent sticking anyways), and stir in the paprika, cumin, and garlic powder.',
      "2. While that cooks, mix together the peppers, yogurt, lime juice, and honey. ",
      "3. Slice the avocados. Sometimes I just mash them. Doesn't really matter other than aesthetics.",
      "4. The pork belly is hard to tell if it's cooked, so I usually just put it on medium heat for about fifteen minutes. If the edges start searing I know I'm in the right territory, just stir regularly so all sides cook.",
      "5. Serve on tacos. Beans are good for extra protein. Add cilantro, red onion, feta etc for visible flair.",
    ],
    notes: [
      "Increase number of chipotle peppers for passive heat in the meal. Alternatively you can add cayenne to the pork belly, just be cautious with it. I also tend to be licentious with the honey.",
    ],
    nutrition: ["Calories: 788", "Protein: 19g", "Carbs: 49g", "Fat: 56g"],
  },
  {
    id: gen_id(),
    title: "Protein Pasta Lemon Chicken",
    ingredients: [
      "8 oz (about 225 grams) of high-protein pasta (e.g., chickpea pasta, lentil pasta)",
      "2 large chicken breasts",
      "1 tablespoon olive oil",
      "2 cloves garlic, minced",
      "Zest and juice of 1 large lemon",
      "1/4 cup low-sodium chicken broth",
      "1/4 cup non-fat Greek yogurt",
      "1/4 cup grated Parmesan cheese (optional, for extra flavor)",
      "1/4 cup fresh parsley, chopped",
      "Red pepper flakes (optional, for a spicy kick)",
      "1 tablespoon paprika",
      "1 teaspoon salt",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1 teaspoon ground black pepper",
      "1/2 teaspoon cayenne pepper (adjust based on your heat preference)",
      "1/2 teaspoon dried thyme",
      "1/2 teaspoon dried oregano",
    ],
    instructions: [
      "1. Cook the Pasta: Bring a large pot of water to a boil. Add the pasta and cook according to package instructions until al dente. Drain and set aside.",
      "2. Prepare the Chicken: While the pasta is cooking, heat the olive oil in a large skillet over medium-high heat. Season the chicken pieces with spices, then add to the skillet. Cook until golden and no longer pink in the center, about 5-7 minutes. Remove the chicken from the skillet and set aside.",
      "3. Make the Sauce: In the same skillet, add a bit more olive oil if needed, and sauté the minced garlic until fragrant, about 1 minute. Add the lemon zest and juice, and chicken broth to deglaze the pan, scraping up any browned bits from the bottom.",
      "4. Combine: Reduce heat to low. Stir in the Greek yogurt and Parmesan cheese until well combined and creamy. Add the cooked pasta and chicken back to the skillet, tossing to coat evenly with the sauce. Cook for another 2-3 minutes until everything is heated through.",
      "5. Garnish and Serve: Remove from heat, toss with chopped parsley, and sprinkle with red pepper flakes if using. Serve immediately.",
    ],
    notes: [
      "Blackening the chicken rather than cooking it normally really takes this up a notch, you don't have to blacken it but if you can it's well worth it.",
    ],
    nutrition: [
      "Calories: 800 (pasta) + 800 (chicken) + 195 (yogurt) + 42 (cheese) = 1837 calories",
      "Protein: 56 (pasta) + 150 (chicken) + 34.5 (yogurt) + 3.8 (cheese) = 244.3 grams",
      "Carbs: 128 (pasta) + 0 (chicken) + 13.5 (yogurt) + 0.4 (cheese) = 141.9 grams",
      "Fat: 14 (pasta) + 17 (chicken) + 0 (yogurt) + 2.8 (cheese) = 33.8 grams",
    ],
  },
  {
    id: gen_id(),
    title: "Britling's Macaroni and Cheese",
    ingredients: [
      "1 1/2 cups elbow noodles",
      "12 oz sharp cheddar cheese, grated",
      "3 eggs, beaten",
      "1 1/2 cups milk",
      "1/2 stick butter",
      "1/2 tbsp pepper",
      "salt to taste",
    ],
    instructions: [
      "1. Cook elbow and drain",
      "2. Add all non-egg ingredients; stir",
      "3. Add eggs last to avoid scrambling them",
      "4. Pour into greased 9x9 casserole dish",
      "Bake uncovered at 375-400 approximately 30 minutes or until middle is set",
    ],
    notes: ['"It goes hard trust me" - Hunter W'],
    nutrition: ["Calories: 410", "Protein: 21g", "Carbs: 14g", "Fat: 30g"],
  },
  {
    id: gen_id(),
    title: "Polish Tacos",
    ingredients: [
      "Kielbasa: 1 lb, sliced into bite-sized pieces",
      "Sauerkraut: 1 cup, drained and rinsed",
      "Pierogi: 6-8 pieces, choose your favorite filling",
      "Taco Shells: 6-8 hard or soft, based on preference",
      "Onion: 1 large, thinly sliced",
      "Cheddar Cheese: 1 cup, shredded (optional for topping)",
      "Sour Cream: For topping",
      "Mustard: 1 tablespoon, whole grain, for dressing",
      "Apple Cider Vinegar: 2 tablespoons, for dressing",
      "Olive Oil: 1 tablespoon, for cooking",
      "Salt and Pepper: To taste",
      "Fresh Dill: For garnish",
    ],
    instructions: [
      "1. Prepare the Pierogi and Kielbasa: In a skillet, heat olive oil over medium heat. Add the sliced kielbasa and cook until browned and crispy, about 5-7 minutes. Remove and set aside. In the same skillet, add pierogi (if they're frozen, thaw them first). Cook according to package instructions or until they're golden on both sides. Set aside with the kielbasa.",
      "2. Sauté Onions and Sauerkraut: In the same skillet, add a bit more oil if needed and toss in the onions. Sauté until they start to become translucent. Add the sauerkraut to the skillet with the onions, stirring occasionally, until it's heated through and begins to caramelize slightly. Add apple cider vinegar, salt, and pepper to taste.",
      "3. Assemble the Tacos: Warm your taco shells as per the package's instructions to make them pliable and toasty. Start with a layer of sauerkraut and onions, followed by slices of kielbasa and a pierogi in each taco shell. Top with shredded cheddar cheese (if using), a dollop of sour cream, and a drizzle of whole grain mustard.",
      "4. Garnish and Serve: Sprinkle each taco with fresh dill for a burst of color and freshness. Serve immediately, letting each bite take you on a delicious journey through Polish flavors wrapped in the convenience of a taco.",
    ],
    notes: [],
    nutrition: ["Calories: 609", "Protein: 20g", "Carbs: 225g", "Fat: 253g"],
  },
  {
    id: gen_id(),
    title: "Chipotle Chicken Bowl",
    ingredients: [
      "2 lbs boneless skinless chicken breasts",
      "2 cloves minced garlic",
      "2 tablespoons adobo sauce and optional chopped chipotle peppers",
      "1 tbsp chili powder",
      "1 teaspoon cumin",
      "1/2 teaspoon oregano",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper",
      "Cayenne to taste",
    ],
    instructions: [
      "1. Cut chicken into bite-size cubes.",
      "2. Combine chicken, garlic, olive oil, adobo sauce, and seasoning in a large bowl. Cover and let sit for 30 min to two days.",
      "3. Preheat oil in a large pan over medium-high heat. Add chicken to pan and cook.",
      "4. Remove chicken and serve with cheese, lettuce, black beans, fajita vegetables, and rice.",
    ],
    notes: [],
    nutrition: ["Calories: 267", "Protein: 41g", "Carbs: 4g", "Fat: 6g"],
  },
  {
    id: gen_id(),
    title: "Slow Cooker Korean Beef",
    ingredients: [
      "2.5 lbs Chuck roast",
      "1/2 cup soy sauce",
      "1/3 cup brown sugar",
      "1/4 cup rice vinegar",
      "1/4 cup sesame oil",
      "4 garlic cloves, minced",
      "1 inch ginger, minced",
      "1/2 cup beef broth",
      "1 tsp red pepper flakes",
      "2 tbsp gochujang",
      "1 large onion, sliced",
      "2 green onions, chopped",
      "1 tbsp sesame seeds",
      "Rice",
    ],
    instructions: [
      "1. Prepare the chuck roast: Cut chuck roast into large chunks.",
      "2. Mix the sauce: whisk together soy sauce, brown sugar, rice vinegar, sesame oil, garlic, ginger, red pepper flakes, beef broth, and gochujang until well combined.",
      "3. Assemble in crock pot: Place sliced onion at the bottom of the crock pot. Place the chunks of roast on top of the onion, then pour sauce over the meat. It's ok if the meat isn't fully submerged, but get a good coating over all of it.",
      "4. Cook: 7-8 hours on low heat. The beef should be easy to shred with a fork.",
      "5. Serve: Place spoonfuls over cooked rice, and garnish with chopped green onions and sesame seeds. The juices are super high calorie so feel free to remove the meat and onions from it before serving.",
    ],
    notes: [
      "I replaced the red pepper flakes with chili oil which was pretty good. Getting the meat out of the juice goes a long ways as well. Recommend a side of steamed broccoli. The onions and meat break down a lot so by the time it's cooked it will all be submerged.",
    ],
    nutrition: [
      "Calories: 410",
      "Protein: 30g",
      "Fat: 23g",
      "Carbohydrates: 20g",
    ],
  },
  {
    id: gen_id(),
    title: "Blackened Chicken",
    ingredients: [
      "1 teaspoon chipotle powder (for smokiness and heat)",
      "1 teaspoon chile powder (for warmth and a bit of color)",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1 teaspoon dried oregano",
      "1 teaspoon dried thyme",
      "1/2 teaspoon cumin (optional, for extra smokiness)",
      "1/2 teaspoon black pepper",
      "1/2 teaspoon salt",
      "1/4 to 1/2 teaspoon cayenne pepper (optional, for extra heat - adjust to taste)",
    ],
    instructions: [
      "Prepare the Chicken: Coat the chicken breasts with olive oil or melted butter.",
      "Mix the Seasoning: In a small bowl, combine all the spices.",
      "Season and Cook: Rub the spice mixture generously on both sides of the chicken and cook using your preferred method—either stovetop or grill.",
      "Rest and Slice: After cooking, allow the chicken to rest for 5 minutes, then slice and serve.",
    ],
    notes: [
      "Butter only works if the chicken is reasonably warm to begin with, as cold chicken will make the butter coagulate.",
    ],
    nutrition: [],
  },
  {
    id: gen_id(),
    title: "Bulgogi Tacos",
    ingredients: [
      "2 lbs (900g) beef ribeye or sirloin, very thinly sliced",
      "3 tbsp neutral oil",
      "2 medium onions, thinly sliced",
      "6 green onions, chopped (separate white and green parts)",
      // Bulgogi Sauce
      "3/4 cup (12 tbsp) soy sauce",
      "6 tbsp sesame oil",
      "6 tbsp sugar (or honey)",
      "3 tbsp rice vinegar",
      "3 tbsp gochujang",
      "3 tbsp minced garlic",
      "3 tbsp grated ginger",
      "3/4 tsp black pepper",
      "3 tbsp sesame seeds",
      // For Serving
      "20-24 small flour or corn tortillas, warmed",
      "3 cups kimchi, chopped",
      "2 cucumbers, cut into matchsticks",
      "5-6 radishes, thinly sliced (optional)",
      "1 bunch fresh cilantro, roughly chopped",
      "4 limes, cut into wedges",
      // Gochujang Mayo
      "6 tbsp mayo",
      "2 tsp gochujang (adjust to taste)",
    ],
    instructions: [
      // Make the Sauce
      "1. Combine all sauce ingredients (soy sauce, sesame oil, sugar, rice vinegar, gochujang, garlic, ginger, black pepper, sesame seeds) in a bowl.",
      // Cook the Beef & Onions
      "2. Heat oil in a large skillet or wok over medium-high heat.",
      "3. Cook the beef and onions in batches to avoid steaming. As each batch starts to brown, pour in some sauce and cook for 5-7 minutes until glazed.",
      "4. Stir in white parts of green onions near the end of cooking.",
      // Mix the Gochujang Mayo
      "5. Combine mayo and gochujang until smooth. Taste and adjust heat.",
      // Assemble the Tacos
      "6. Warm tortillas in a pan or on a grill.",
      "7. Add beef, kimchi, cucumber, radish (optional), and cilantro.",
      "8. Drizzle with gochujang mayo and finish with a squeeze of lime.",
      // Serve
      "9. Serve hot, family-style, with extra lime and sauce on the side.",
    ],
    notes: ["Better with less onions, closer to 3/4 of an onion is pretty good. I like to add a bit more sauce to the beef to make it more flavorful."],
    nutrition: [
      "Macros (Per Serving, ~2-3 tacos):",
      "Protein: 60-75g",
      "Carbs: 45-60g",
      "Fat: 35-50g",
      "Calories: 800-950 kcal",
    ],
  },
  {
    id: gen_id(),
    title: "Beer Brat Pasta",
    ingredients: [
      "Sweet onion",
      "Garlic",
      "1-2 red bell peppers",
      "Beer brats",
      "Penne pasta",
      "1lb of SHARP cheddar cheese, shredded",
      "Medium-light beer, like a pilsner or hefeweisen (optional)",
    ],
    instructions: [
      "1. Preheat oven to 425. Veggies always first, because they take the longest. Cut up the onion, bell pepper[s] and garlic (make up how much garlic you want) and lay them on a baking tray with olive oil. I like laying a sheet of tinfoil down to keep the tray cleaner.",
      "2. Cook the veggies for 15-20 minutes. I usually use a fork and test the bell pepper chunks near the center for tenderness. You can also grill these if you don't want your house to smell like garlic.",
      "3. De-sleeve the bratwurst (squeeze the ground meat out of the tube) and discard the sleeves. You can also buy bratwurst pre-removed but that's less fun. Toss a 1/2 cup of beer in to fry the bratwurst in for flavor. Drink the rest of the beer.",
      "4. Boil some water and cook the pasta. Hopefully your cheese is already shredded but now while the ingredients are all cooking is not a bad time to shred cheese too.",
      "5. When the pasta is done, drain it. Add the vegetables and cheese next, then depending on how much grease you want you can either just dump the browned bratwurst in or remove the meat from the grease and add it.",
      "6. That's basically it. Stir it up and serve.",
    ],
    notes: [
      "I have made this recipe with caribou and moose meat, I've made gluten-free/vegan versions with plant based sausage, used white onions instead of sweet onions, pre-minced garlic, green bell peppers instead of red. You can replace whatever you like. The moose version remains the greatest but the above recipe is my norm now. It's hard to screw it up and the cheese covers a host of sins.",
    ],
    nutrition: [
      "Honestly I don't want to know the macros. Probably a million calories per serving. Yum",
    ],
  },
  {
    id: gen_id(),
    title: "Sausage Kale Chickpea",
    ingredients: [
      "1lb Italian Sausage",
      "1 Large Bunch of Kale",
      "1 Large or 2 Small Potatoes",
      "1 White Onion",
      "Some garlic",
      "1 Can Chickpeas",
    ],
    instructions: [
      "Start out by cutting up the potatoes into small cubes and roasting in the oven. 425 degrees for around 30 minutes. Alternatively air fryer will work great at 400 for 15 minutes.",
      "In a large pot, caramelize the onions and garlic in olive oil. In a separate pan brown the sausage.",
      "As the potatoes are nearly ready, throw the chickpeas into the large pot.",
      "Add the potatoes and kale to the large pot. Add salt and pepper.",
      "Feel free to add red pepper flakes or other spices to add excitement. Serve when the kale is reasonably softened.",
    ],
    notes: [
      "The trick with this recipe is figuring out how to time the different ingredients need to go on. You don't want the potatoes to mush or the onions to dry out.",
    ],
    nutrition: [],
  },
  {
    id: gen_id(),
    title: "Campfire Chili",
    ingredients: [
      "2lbs ground beef",
      "2 cloves of garlic",
      "2-3 cans of diced tomatoes",
      "1 can of tomato paste",
      "1/2 cup of flour",
      "Dark chocolate to taste",
      "Optional jalapenos",
      "Some amount of cumin, garlic powder, salt, paprika, cayenne",
      "2 cans of kidney and/or black beans",
    ],
    instructions: [
      "1. Brown the ground beef by lowering the cast iron into the coals.",
      "2. Add the tomatoes and beans once the meat is browned. Raise the pot higher to a more moderate temperature.",
      "3. Add the spices and chocolate and flour. Simmer for around 45 minutes.",
    ],
    notes: ["Coals on top of the cast iron pot help keep things warm, be aware that you can accidentally get ashes in the food though."],
    nutrition: [],
  },
  {
    id: gen_id(),
    title: "Tantanmen Ramen",
    ingredients: [
      "2 cups chicken stock (or vegetable stock for vegetarian)",
      "1 cup unsweetened soy milk", 
      "2 tbsp sesame paste (or tahini)",
      "1 tbsp peanut butter (optional, for extra nuttiness)",
      "1 tbsp soy sauce",
      "1 tbsp mirin",
      "1 tsp rice vinegar",
      "1 tsp sugar",
      "1 tbsp chili oil (or to taste)",
      "2 cloves garlic, minced",
      "1 tsp grated ginger",
      "150g ground pork (or plant-based meat alternative)", 
      "1 tbsp sesame oil",
      "1 tbsp miso paste",
      "1 tsp chili flakes",
      "2 soft-boiled eggs (optional)",
      "Green onions, finely chopped",
      "Bok choy or spinach, lightly blanched",
      "Toasted sesame seeds",
      "2 portions of fresh ramen noodles (or dried, if unavailable)"
    ],
    instructions: [
      "1. Prepare the Toppings: Heat sesame oil in a skillet over medium heat. Add ground pork and cook until browned. Stir in miso paste, soy sauce, and chili flakes, cooking for 2-3 more minutes. Set aside.",
      "2. Make the Broth: In a pot over medium heat, sauté garlic and ginger until fragrant. Add chicken stock and soy milk, stirring to combine. Whisk in sesame paste, peanut butter (if using), soy sauce, mirin, rice vinegar, and sugar. Simmer for 5-7 minutes, adjusting seasoning to taste. Stir in chili oil for a spicy kick.", 
      "3. Cook the Noodles: Bring a pot of water to a boil. Cook ramen noodles according to package instructions. Drain and set aside.",
      "4. Assemble the Ramen: Divide noodles into two bowls. Ladle the creamy broth over the noodles. Top with ground pork mixture, blanched greens, soft-boiled eggs, green onions, and a sprinkle of sesame seeds. Drizzle extra chili oil for added heat, if desired."
    ],
    notes: ["Feeds two."],
    nutrition: [
      "Calories: 715",
      "Protein: 42g",
      "Carbs: 46.5g",
      "Fat: 40g"
    ]
  },
  {
    "id": "gen_id()",
    "title": "Crispy Honey Sriracha Chicken Bowl",
    "ingredients": [
      "1 lb chicken breast",
      "1/2 tsp salt",
      "1/2 tsp garlic powder",
      "1/4 tsp black pepper",
      "1/2 cup cornstarch",
      "2 eggs, beaten",
      "1 cup panko breadcrumbs (or a mix of panko and flour)",
      "Neutral oil for frying (avocado, peanut, or vegetable)",
      "3 tbsp honey",
      "2 tbsp sriracha (adjust to taste)",
      "1 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp grated ginger",
      "1 tsp sesame oil (optional)",
      "1 cup cooked jasmine or brown rice",
      "1/2 cucumber, thinly sliced",
      "1/2 avocado, sliced",
      "Sesame seeds (for garnish)",
      "Green onions, sliced (for garnish)"
    ],
    "instructions": [
      "1. Pound the Chicken: Place the chicken breast between plastic wrap and pound to 1/2-inch thickness. Season both sides with salt, garlic powder, and black pepper.",
      "2. Coat the Chicken: Dredge the chicken in cornstarch, dip in beaten egg, then coat thoroughly with panko breadcrumbs. Press gently to help the coating stick.",
      "3. Fry the Chicken: Heat about 1/2 inch of oil in a pan to 350°F (175°C). Fry the chicken for 4-5 minutes per side until golden brown. Drain on a wire rack.",
      "4. Make the Sauce: In a small pan, mix honey, sriracha, soy sauce, rice vinegar, and grated ginger. Simmer for 2 minutes until slightly thickened. Remove from heat and stir in sesame oil.",
      "5. Assemble the Bowl: Slice the crispy chicken into strips. Drizzle or brush with sauce to lightly coat. Serve over a bowl of warm rice with cucumber and avocado.",
      "6. Garnish & Serve: Sprinkle with sesame seeds and sliced green onions. Serve with extra sauce on the side."
    ],
    "notes": [
      "Feeds two.",
      "For extra crispiness, double-fry the chicken by frying once at 325°F (160°C) and again at 375°F (190°C).",
      "Adjust sriracha for desired spice level."
    ],
    "nutrition": [
      "Calories: 720",
      "Protein: 44g",
      "Carbs: 68g",
      "Fat: 30g"
    ]
  },
  {
    id: gen_id(),
    title: "Non-Alcoholic Tiramisu (9x13 Pan)",
    ingredients: [
      "9 large egg yolks",
      "1 1/4 cups granulated sugar",
      "12 oz mascarpone cheese, at room temperature",
      "1 1/2 cups heavy whipping cream",
      "2 1/4 cups concentrated cold brew coffee",
      "1 1/2 teaspoons vanilla extract",
      "36-40 ladyfinger biscuits (Savoiardi)",
      "Unsweetened cocoa powder for dusting",
      "Dark chocolate shavings (optional, for garnish)"
    ],
    instructions: [
      "1. Prepare the Mascarpone Mixture: In a heatproof bowl, whisk together the egg yolks and sugar.",
      "2. Place the bowl over a saucepan of simmering water (double boiler) and whisk constantly for about 5 minutes until the mixture thickens slightly. Remove from heat and let cool.",
      "3. In a separate bowl, beat the heavy whipping cream until stiff peaks form.",
      "4. Gently fold the mascarpone cheese into the egg mixture until smooth. Then, fold in the whipped cream until fully combined.",
      "5. Prepare the Coffee Dip: Mix the cold brew with vanilla extract in a shallow dish.",
      "6. Assemble the Tiramisu: Quickly dip each ladyfinger into the coffee mixture (do not soak too long) and arrange in a single layer in the bottom of a 9x13-inch pan.",
      "7. Spread half of the mascarpone mixture over the ladyfingers.",
      "8. Repeat with another layer of dipped ladyfingers, then spread the remaining mascarpone mixture on top.",
      "9. Chill & Serve: Cover and refrigerate for at least 4 hours (preferably overnight) to let the flavors meld.",
      "10. Before serving, dust with unsweetened cocoa powder and add chocolate shavings if desired."
    ],
    notes: [
      "This recipe makes a 9x13-inch tiramisu, serving 12-15 people.",
      "Use concentrated cold brew (1:2 ratio) for a stronger coffee flavor.",
      "Ladyfingers should be dipped quickly to avoid oversaturation.",
      "For an alcoholic version, replace 1/2 cup of the cold brew with 1/2 cup coffee liqueur (like Kahlúa or Tia Maria) or 1/4 cup dark rum.",
      "For an extra decadent texture, chill overnight before serving."
    ],
    nutrition: [
      "Calories: ~350 per serving",
      "Protein: ~6g",
      "Carbs: ~35g",
      "Fat: ~20g"
    ]
  },
  {
    id: gen_id(),
    title: "Beet Salad with Goat Cheese and Walnuts",
    ingredients: [
      "4 medium-sized beets, scrubbed, roasted, peeled, and diced",
      "1/3 cup goat cheese, crumbled", 
      "1/4 cup walnuts, toasted and roughly chopped",
      "2 cups fresh mixed greens (such as arugula, spinach, or baby kale)",
      "2 tablespoons balsamic vinegar",
      "3 tablespoons extra virgin olive oil",
      "1 teaspoon honey (optional, for the dressing)",
      "1 teaspoon Dijon mustard",
      "Salt and pepper, to taste",
      "Fresh dill or parsley, for garnish"
    ],
    instructions: [
      "1. Prepare the Beets: Preheat your oven to 400°F (200°C). Wrap the beets in aluminum foil and roast them in the preheated oven for about 50-60 minutes, or until tender when pierced with a fork. Once cool enough to handle, peel off the skin and dice the beets into bite-sized pieces.",
      "2. Make the Dressing: In a small bowl, whisk together the balsamic vinegar, olive oil, honey (if using), Dijon mustard, salt, and pepper until emulsified.",
      "3. Assemble the Salad: In a large bowl, toss the mixed greens with half of the dressing to lightly coat. Arrange the dressed greens on a serving platter or in a salad bowl; Scatter the diced beets over the greens, followed by the crumbled goat cheese and toasted walnuts.", 
      "4. Finish and Serve: Drizzle the remaining dressing over the salad. Garnish with fresh dill or parsley for an extra touch of freshness. Give a final sprinkle of salt and pepper to taste, if needed."
    ],
    notes: [],
    nutrition: [
      "Calories: 285",
      "Protein: 7g",
      "Carbs: 14g",
      "Fat: 23g"
    ]
  },
  {
    id: gen_id(),
    title: "Japanese Curry in the Crock Pot",
    ingredients: [
      "1 box Medium Hot curry paste",
      "1-2 lbs flank steak, cut into bite size pieces (or stew meat)",
      "1 bag baby carrots",
      "3 potatoes, cut into chunks",
      "1-2 little fresh hot peppers, diced very small (or 1 tsp red pepper flakes)",
      "2 beef bouillon cubes",
      "2 cups water"
    ],
    instructions: [
      "1. Put the carrots and potatoes in the crock pot and add the meat, then add the pepper on the top.",
      "2. Mix 2 cups of water with the bouillon cubes and dissolve, add to the crock pot and cover on low 7-8 hours.",
      "3. Half an hour before serving, add the curry paste. Allow it to sit a minute and then stir it in to dissolve. Once it is mixed thoroughly, allow the crock pot to continue on low for another 20-30 minutes.",
      "4. Serve over rice. Japanese rice is best, but Calrose brand (in a yellow bag) or Jasmine rice is good."
    ],
    notes: [
      "The curry paste comes in a small box about the size of a business envelope and about 1/2\" deep.",
      "Can use stew meat instead of flank steak for a cheaper option.",
      "A side dish of fresh fruit or salad with Asian dressing is good.",
      "Fresh strawberries with a bit of sweetened condensed milk is a Japanese dessert that pairs well with this."
    ],
    nutrition: [
      "Calories: 425",
      "Protein: 35g",
      "Carbs: 30g", 
      "Fat: 18g"
    ]
  },
  {
    "id": "gen_id()",
    "title": "Stovetop Harissa Honey Chicken with Roasted Vegetables and Couscous",
    "ingredients": [
      "4 boneless, skinless chicken thighs or breasts",
      "1-2 tablespoons harissa paste",
      "2-3 tablespoons honey",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Juice of half a lemon",
      "1 teaspoon paprika",
      "1/2 teaspoon garam masala",
      "1/2 teaspoon za'atar",
      "Salt and pepper",
      "1 red bell pepper, chopped into 1-inch pieces",
      "1 zucchini, sliced into half-moons",
      "1 small eggplant, cubed",
      "1 red onion, cut into wedges",
      "2 tablespoons olive oil (for vegetables)",
      "1 teaspoon dried herbs (thyme, oregano, or herbes de Provence)",
      "1 cup couscous",
      "1¼ cups vegetable or chicken broth",
      "1 tablespoon olive oil (for couscous)",
      "1/2 teaspoon salt (for couscous)",
      "2 tablespoons fresh herbs (parsley, mint, or cilantro), chopped",
      "Juice of half a lemon (for finishing)",
      "1/4 cup crumbled chèvre (goat cheese)"
    ],
    "instructions": [
      "1. Preheat oven to 425°F for the vegetables.",
      "2. Prep vegetables: Chop bell pepper, zucchini, eggplant, and red onion. Toss with 2 tablespoons olive oil, dried herbs, salt, and pepper on a baking sheet.",
      "3. Start roasting vegetables: Place in the oven for 25-30 minutes until tender and slightly caramelized.",
      "4. Prepare chicken marinade: In a bowl, mix harissa paste, honey, minced garlic, lemon juice, paprika, garam masala, za'atar, salt and pepper.",
      "5. Prep chicken: Pat chicken dry and season with salt and pepper.",
      "6. Cook couscous: Bring broth to a boil, remove from heat, stir in couscous, 1 tablespoon olive oil, and 1/2 teaspoon salt. Cover and let stand for 5 minutes, then fluff with a fork.",
      "7. Cook chicken: Heat 2 tablespoons olive oil in a large skillet over medium-high heat. Add chicken and cook until golden brown on both sides, about 4-5 minutes per side.",
      "8. Finish chicken: Pour the harissa-honey mixture over the chicken. Reduce heat to medium-low and simmer for 5-7 minutes, spooning sauce over chicken until it thickens and chicken reaches 165°F internal temperature.",
      "9. Combine: Fold roasted vegetables, fresh herbs, and lemon juice into the couscous.",
      "10. Serve: Place couscous with vegetables on plates, top with chicken and sauce, then crumble chèvre over the top."
    ],
    "notes": [
      "Can substitute chicken breasts for thighs if preferred.",
      "Couscous can be prepared in a rice cooker using the white rice setting for convenience. Quinoa also works well for gluten free.",
      "Adjust harissa paste amount based on spice preference - start with less and add more if needed.",
      "Fresh herbs can be parsley, mint, cilantro, or a combination.",
      "The paprika, garam masala, and za'atar add depth and warmth to complement the harissa."
    ],
    "nutrition": [
      "Calories: 485",
      "Protein: 32g",
      "Carbs: 45g",
      "Fat: 22g"
    ]
  }
];

export default recipes;

// "id": gen_id(),
// "title": "",
// "ingredients": [],
// "instructions": [],
// "notes": [],
// "nutrition": []
