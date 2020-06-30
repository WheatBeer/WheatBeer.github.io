#!/bin/bash

ruby -v
gem install jekyll bundler
jekyll -v
echo export PATH=/usr/local/lib/ruby/gems/2.7.0/bin:$PATH
bundle install
