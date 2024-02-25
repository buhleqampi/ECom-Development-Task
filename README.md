Theme Setup using Shopify CLI (Windows): Installing Required Technologies: Check installed versions:
git --version
ruby --version
node --version
shopify version
gem list bundler

Install missing technologies:
npm install -g @shopify/cli @shopify/theme

Setting Up Store Theme:
Navigate to desired directory:
mkdir ECom-Development-Task
cd ECom-Development-Task

shopify theme pull --store ecom-development-task.myshopify.com
Log in to Shopify.
Encounter bundler error, update:
gem install bundler
Choose theme and place liquid files in your folder.
Initialize Git repository:
git init
Regularly push changes to Git.

Summary of Theme Changes:
Added and customized theme from library.
Added a featured product.
Created a product page.

Adding and Configuring a New Section (Shopify Admin):
Go to Shopify admin > Online Store > Themes.
Click "Customize" on the Dawn theme.
Under "Sections," click "Add Section" and create "feature-section.liquid."
Implement necessary changes within the section.

Note: Save and publish changes in Shopify admin.






