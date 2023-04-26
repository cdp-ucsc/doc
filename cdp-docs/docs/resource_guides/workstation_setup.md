---
sidebar_position: 6
---

# Mac OS Python Setup

* The post [Installing pyenv on macOS for Zsh using Homebrew](https://gist.github.com/josemarimanio/9e0c177c90dee97808bad163587e80f8) was a great help in finally understanding the value of virtual environments on the mac. 

Assuming pyenv and virtualenv are installed locally I would suggest creating a new virtual environment 

* `pyenv versions` - will list the versions of python currently managed by pyenv
* `pyenv virtualenv 3.10.7 cdp` - creates new virtual env called `cdp` based on python 3.10.7 ( your version may differ)
* `pyenv activate cdp` - switches your active python environment to the recently created cdp virtual environment
* `git clone git@github.com:cdp-ucsc/dbt-pilot.git` - you may already have this cloned, but if not get a fresh copy and cd into the repo and from the main branch do a `git pull` to make sure you are current
* `pip install -r requirements.txt` - this will install the correct version of dbt, snowflake connector, sqlfluff etc into the new virtual env, nicely isolated from other python environments like say permifrost

