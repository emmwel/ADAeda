# The food championship - France VS USA

# Abstract
We all need to eat to live, but how many of us live to eat? According to World Health Organization (WHO), obesity is increasing. In 2016 39% of adults worldwide were overweight and 13% were obese. We would like to investigate how nutritional content in food affects the health of the population of two different countries, USA and France. We will use the Open Food Facts database for this project. 

The idea is to use nutritional data of food in the same category and compare the two countries. We will couple this with use of health statistics from WHO to see if differences in the nutritional data correspond with the differences in the health statistics.

Our goal is to discover whether there are main differences in the food consumed in France and US and if they can be related to the country’s respectively health indices.  

# Research questions
Is there a nutritional difference in the food consumed in France vs US?
Which country have the “best” food in the perspective of nutrition such as saturated fat, sugars, vitamins and minerals in different food categories? 
Is it possible to view a correlation between the food statistics and the country’s health indices like BMI, life expectancy, HALE and causes of death related to diet?

# Dataset
We will be using the Open Food Facts database. This is an open database consisting of information of over 600000 food products, where anybody can add a product and facts about it. The database has around 437000 products which are sold in France and around 175000 products which are sold in the United States. There is a lot of different parameters that can potentially be included for each product, but as different products have different amount of product specification on the packaging, the amount of information will vary greatly between each product. We will primarily be looking at the nutrition facts, which is something that exists for the vast majority of the products. There is also a nutrition grade value called NutriScore for some of the products. This is something we might be able to use as well. Each product are tagged with the categories that they are in, making it convenient for us to use categories to do comparisons. An other interesting parameter that we could use is serving size, given that a sufficient amount of products have it.
The database is in the csv format and the size is around 1.6 GB, meaning that we will not need Spark.

The World Health Organization's database has been used to gain some reference values regarding the overall health in France and US. From their data sets, the following values have been extracted for each country:

“Life expectancy”, “Number of deaths” (with causes related with food and diet), “BMI” (mean, %overweight, %obesity) and “% with diabetes”.

These values will be used to deepen the research and give a new dimension of the results. 

# Food categories
Initially 4 categories will be used; “Dairy”, “Snacks”, “Bread and Dry goods” and “Meat, Poultry, Fish, Seafood, etc.” 
The categories might be extended and modified as the project continues. 

# Project limitations
Originally the idea was to investigate nutrient differences between products targeted towards different age groups. However, since there was no possibility to extract information regarding the age groups from the food data, this focus point was rejected. 

This project will mainly focus on the aspects of health regarding overeating and consuming to mush fat, sugar etc. Some investigations concerning mineral deficiencies might be done but no comparison in the field of under-weight, starvation and hunger will be made. The purpose of this is to limit the subject a bit and to be able to display the most relevant data for the chosen countries. 

# Detailed project plan
26/11 - Finalize each food category

•	Make sure we have collected all possible product data in each category – using both the category label and product name to sort them.

•	Decide which feature (such as sugar, saturated fat, minerals etc.)  of each food category to further investigate and compare between the countries. This will be done by both investigating the features in the data set but also by reading relevant nutrition studies. 

3/12 - Comparison

•	Comparison of the statistics from each food category. 

•	Overall comparison of the food data from each country (e.g. which types of products is in the data set for each country? Does the most popular products correlates with food prejudices for each country?)

•	Does the food statistic correlate with the chosen health indices?

•	Are there any surprises? 

Analyse which features of the data that would be most interesting to present in the rapport and start prepare visualizations.

10/12 - Report

•	Finalize the plots and visualisations, preferable some interactive elements
•	Write a story and descriptions

16/12
Done!
