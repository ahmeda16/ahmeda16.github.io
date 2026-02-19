# Website Template (Jekyll + Bulma)

This personal website is based and extended from [Keunhong Park](https://keunhong.com/). 
It is built with [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) and [Bulma](https://bulma.io/), and is designed to be deployed for free using [GitHub Pages](https://pages.github.com/).

### Adapt the website for yourself
- Clone the repository
- Change the personal information in `_config.yaml`, and `_data/`
- Ensure your images have an aspect ratio of 1:1, and 320px


### Run Locally (Linux, Debian)

1) Install Dependancies
```bash
sudo apt install ruby-full
gem install bundler
```
2) Clone and Install Gems
```bash
git clone {git link}
cd {workspace folder}
sudo bundle install
```

3) Serve the Website
```bash
bundle exec jekyll serve 
```
You can also use `--trace` and `--livereload` as tags for live updating and tracing.

# License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 