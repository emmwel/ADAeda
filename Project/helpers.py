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
