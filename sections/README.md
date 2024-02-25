<!-- Instructions for cloning and setting up the theme using Shopify CLI. -->
Theme Setup using Shopify CLI (Windows):
Installing Required Technologies: 
Check installed versions: git --version ruby --version node --version shopify version gem list bundler

Install missing technologies: npm install -g @shopify/cli @shopify/theme

Setting Up Store Theme: 
Navigate to desired directory: mkdir ECom-Development-Task cd ECom-Development-Task

shopify theme pull --store ecom-development-task.myshopify.com 
Log in to Shopify. 
Encounter bundler error, update: gem install bundler 
Choose theme and place liquid files in your folder. 
Initialize Git repository: git init 
Regularly push changes to Git.

To check there are errors and analyze your theme code for errors and to ensure that it follows theme and Liquid best practices:
shopify theme check

To upload the current theme to a store so you can preview it:
shopify theme dev

 Preview your theme                                                          │
│    • http://127.0.0.1:9292 [1]                                               │
│                                                                              │
│  Next steps                                                                  │
│    • Customize your theme at the theme editor [2] https://ecom-development-task.myshopify.com/admin/themes/140866289903/editor                           │
│    • Share your theme preview [3] (https://ecom-development-task.myshopify.  │
│      com/?preview_theme_id=140866289903)                                     │
│

The visitors password is botsog
<!-- A summary of the changes made to the theme. -->
Summary of Theme Changes: Added and customized theme from library. 
Added a featured product.
Created a product page.

<!-- Guidance on how to add and configure the new section through the Shopify admin. -->
Adding and Configuring a New Section (Shopify Admin):
 Go to Shopify admin > Online Store > Themes. 
 Click "Customize" on the Dawn theme. 
 Under "Sections," click "Add Section" and create "feature-section.liquid." 
 Implement necessary changes within the section.

Note: Save and publish changes in Shopify admin.