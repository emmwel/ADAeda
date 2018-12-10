import pandas as pd
import numpy as np
import functools
import re


def select_entries(df, tag_list):
    cols = ['categories_en', 'categories', 'product_name']
    combinations = [df[col].str.contains(tag, na=False, flags=re.IGNORECASE)
                    for tag in tag_list for col in cols]
    mask = functools.reduce(lambda x, y: x | y, combinations)
    return df[mask]


def clean_categories(df, wrong_strings, wrong_ingredients=[]):
    cols = ['categories_en', 'categories', 'product_name']
    combinations = [df[col].str.contains(wrong, na=False, flags=re.IGNORECASE)
                    for wrong in wrong_strings for col in cols]
    ingredient_combinations = [
        df['ingredients_text'].str.contains(
            wrong, na=False, flags=re.IGNORECASE
        )
        for wrong in wrong_ingredients
    ]
    mask = functools.reduce(
        lambda x, y: x | y, combinations + ingredient_combinations
    )
    return df[~mask]

def re_arrange_for_boxplot(df,country):
    new_df = pd.DataFrame(columns=['Y','X','country'])
    column_names = list(df)
    for i in range(df.shape[0]):
        for j in range(df.shape[1]):
            fat_sort = column_names[j]
            value = df.iloc[i,j]
            newRow = pd.DataFrame([[value,fat_sort,country]],columns=['Y','X','country'])
            new_df = new_df.append(newRow)
        
    return new_df