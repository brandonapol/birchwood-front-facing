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
    nutrition: [
      "Calories: 425",
      "Protein: 15.85g",
      "Carbs: 39g",
      "Fat: 23g",
    ],
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
    nutrition: [
      "Calories: 788",
      "Protein: 19g",
      "Carbs: 49g",
      "Fat: 56g",
    ],
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
    nutrition: [
      "Calories: 410",
      "Protein: 21g",
      "Carbs: 14g",
      "Fat: 30g"
    ],
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
    nutrition: [
      "Calories: 609",
      "Protein: 20g",
      "Carbs: 225g",
      "Fat: 253g"
    ],
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
      "Cayenne to taste"
    ],
    instructions: [
      "1. Cut chicken into bite-size cubes.", 
      "2. Combine chicken, garlic, olive oil, adobo sauce, and seasoning in a large bowl. Cover and let sit for 30 min to two days.",
      "3. Preheat oil in a large pan over medium-high heat. Add chicken to pan and cook.",
      "4. Remove chicken and serve with cheese, lettuce, black beans, fajita vegetables, and rice."
    ],
    notes: [],
    nutrition: [
      "Calories: 267",
      "Protein: 41g",
      "Carbs: 4g",
      "Fat: 6g"
    ],
  },
];

export default recipes;

// "id": gen_id(),
// "title": "",
// "ingredients": [],
// "instructions": [],
// "notes": [],
// "nutrition": []
