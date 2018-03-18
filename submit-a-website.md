---
layout: page
title: Submit a Website
---

We don't accept all submissions. We try to keep all submissions to as high quality as possible and reserve the right to reject any submissions.

If you would like to submit a site, you can do so through the following methods.

#### Direct Message

You can DM [@OhThatsNice_](https://twitter.com/OhThatsNice_) on Twitter with the name and link to the site you would like to add. After, a maintainer will see to adding the site.

#### Create an issue

[Creating an issue](https://github.com/jjgrainger/ohthatsnice/issues/new) is one of the simplest way to submit a website. Follow these steps to create an issue when submitting a site:

* Give your issue a title - `Add {website name}`
* Copy and paste the full site url in the comments - `https://example.com`
* Label your issue with the `request` label
* Submit the issue

Once you've created an issue a maintainer will see to adding the site to the showcase.

#### Create a pull request

[Creating a pull request](https://github.com/jjgrainger/ohthatsnice/pulls) may take some time but is easier for maintainers to add.

Please note no screenshots are included in the repository so do not commit any images with your pull request. Screenshots are created programatically with [webshot](https://github.com/jjgrainger/webshot) and hosted on an amazon s3 bucket. After submitting your pull request a maintainer will generate the screenshot for you.

* [Clone the repository](https://github.com/jjgrainger/ohthatsnice)
* Install dependencies - `$ bundle install`
* Run the Rake task to create a new post - `$ rake new`
* Follow the prompts, you can modify the post after
* [Create a pull request](https://github.com/jjgrainger/ohthatsnice/pulls)

If you have any questions or need help, please send us a direct message on twitter to [@OhThatsNice_](https://twitter.com/OhThatsNice_) and we'll get back to you as soon as possible.
