# new feature
# Tags: optional
    
Feature: POS System
    
@smoke @pos @regression
Scenario: User creates product named iPhone that priced 500 dollars
Given user on "Point of Sale - Odoo" page
When user click on Products, page opens with title "Products - Odoo"
And user click on Create, page opens with title "New - Odoo"
And user enters "Iphone" in product name field should be populated
And user enters price of "500" price field should be updated
And saves the product
Then product final product should be displayed with correct name and price



@smoke @pos @delete @regression
Scenario: User delete product named iPhone that priced 1.00 dollar
Given user on "Point of Sale - Odoo" page
When user click on Products, page opens with title "Products - Odoo"
And searches for "Iphone"
