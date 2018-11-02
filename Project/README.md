# Title

# Abstract
We all need to eat to live, but how many of us live to eat? According to World Health Organization (WHO), obesity is increasing. In 2016 39% of adults worldwide were overweight and 13% were obese. We would like to investigate how nutritional content in food affects the health of the population of two different countries, USA and France. We will use the Open Food Facts database for this project. 

The idea is to use nutritional data of food in the same category and compare the two countries. We will couple this with use of health statistics from WHO to see if differences in the nutritional data correspond with the differences in the health statistics.

Our goal is to discover whether the health statistics can be directly correlated to food not only for obesity but also other health factors. How does the food consumed affect the life of a person in the long run?

# Research questions
Is there a nutritional difference in the food consumed in France vs US that correlates with respectively country’s BMI and other health indices? 
Is there a nutritional difference in food targeted to difference age groups? 
Which country have the “best” food in the perspective of nutrition, fat, carbs, sugar and food additives in different categories? The categories will be food type specific such as bread, cereals or semifinished dishes. 

# Dataset
List the dataset(s) you want to use, and some ideas on how do you expect to get, manage, process and enrich it/them. Show us you've read the docs and some examples, and you've a clear idea on what to expect. Discuss data size and format if relevant.
We will be using the Open Food Facts database. This is an open database consisting of information of over 600000 food products, where anybody can add a product and facts about it. The database has around 437000 products which are sold in France and around 175000 products which are sold in the United States. There is a lot of different parameters that can potentially be included for each product, but as different products have different amount of product specification on the packaging, the amount of information will vary greatly between each product. We will primarily be looking at the nutrition facts, which is something that exists for the vast majority of the products. There is also a nutrition grade value called NutriScore for some of the products. This is something we might be able to use as well. Each product are tagged with the categories that they are in, making it convenient for us to use categories to do comparisons. An other interesting parameter that we could use is serving size, given that a sufficient amount of products have it.
The database is in the csv format and the size is around 1.6 GB, meaning that we will not need Spark.

Data for BMI will be taken from the World Health Organization's database of Prevalence of overweight and obesity among adults by country. These are two tables which display the percentage of the population which have a BMI-index of over 25 or 30 respectively. Further population health data regarding for example diabetes in the two countries will also be retrieved from WHO.

# A list of internal milestones up until project milestone 2
Add here a sketch of your planning for the next project milestone.

# Questions for TAa
Add here some questions you have for us, in general or project-specific.
