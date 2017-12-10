# Oh That's Nice

> [Oh Thats Nice](https://ohthatsnice.net) is a showcase of beautiful websites.

Behind the scenes, this project is an opportunity to experiment with automated workflows particularly focusing on builds, deploys, screenshot and submission generation.

Built and curated by [@jjgrainger](https://twitter.com/jjgrainger).

You can follow Oh Thats Nice on [Twitter](https://twitter.com/OhThatsNice_), [Github](https://github.com/jjgrainger/ohthatsnice) or subscribe via [RSS](http://feeds.feedburner.com/OhThatsNiceWeb).

## Submissions

We don't accept all submissions. We try to keep all submissions to as high quality as possible and reserve the right to reject any submissions.

If you would like to submit a site, you can do so through the following methods.

#### Create an issue

[Creating an issue](https://github.com/jjgrainger/ohthatsnice/issues/new) is the simplest way to submit a website. Follow these steps to create an issue when submitting a site:

* Give your issue a title - `Add {website name}`
* Copy and paste the full site url in the comments - `https://example.com`
* Label your issue with the `request` label
* Submit the issue

Once you've created an issue a maintainer will see to adding the site to the showcase.

#### Create a pull request

[Creating a pull request](#) may take some time but is easier for maintainers to add.

Please note no screenshots are included in the repository so do not commit any images with your pull request. Screenshots are created programatically with [webshot](https://github.com/jjgrainger/webshot) and hosted on an amazon s3 bucket. After submitting your pull request a maintainer will generate the screenshot for you.

* Clone the repository - `$ git clone git@github.com:jjgrainger/ohthatsnice.git`
* Install dependencies - `$ bundle install`
* Run the Rake task to create a new post - `$ rake new`
* Follow the prompts, you can modify the post after
* Create a pull request

## About the site

* Built with [Jekyll](https://jekyllrb.com/)
* Build and deploys managed by [Travis](https://travis-ci.org)
* Hosted on [Surge](http://surge.sh/)
* Screenshots created with [webshot](https://github.com/jjgrainger/webshot)
* Screenshots hosted on [Amazon S3](https://aws.amazon.com/s3)

## Maintainers

** Joe Grainger **

* [http://jjgrainger.co.uk](http://jjgrainger.co.uk)
* [http://twitter.com/jjgrainger](http://twitter.com/jjgrainger)
