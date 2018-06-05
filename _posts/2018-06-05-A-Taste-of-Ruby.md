---
layout: post
title: "A Taste of Ruby"
date: 2018-06-05 02:00:00
categories: ruby
comments: yes
---

I was going to write a blog post about finishing one year of being a paid software engineer, but this repository was not on my freshly installed macOS.
None of my 32 repositories were on it, and because I am a lazy human I decided to write a script for this purpose. I figured this would be a useful thing to share with people who have not seen Ruby.

I am just a couple years older than Ruby 🤯  so it has a lot of gems (packages) by people way smarter than me.

So I asked my friend Google for a good gem that gives me access to user repositories on Github. When looking for a gem I usually pick the one that has the clearest docs and starting point. [`github_api`](https://github.com/piotrmurach/github) fit the bill. Your gems are listed in a Gemfile.

_Seriously, the naming game is strong with people of Ruby._

Create a file `Gemfile` (no extension) with following contents:

```ruby
source 'https://rubygems.org'
gem "github_api"
```

Basically we tell some gem installer to go to rubygems.org and get us the latest published version of github_api gem, stat!

What is this gem installer? I use Bundler because it is pretty cool and for this we don't need to create a virtual environment an a whole bunch of other stuff... So we might have to run `gem install bundler` just this once.

Alright, we are back to the actual problem. When we run `bundle install` it will create `Gemfile.lock` and it is basically Bundler giving us a receipt saying _I went where you sent me and I came back with X.X version of X gem and other gems that this one is dependent on_. This way we know it did not create an AI and it is now plotting against the human race.

We now have this gem available to us in this directory, so make a file where your script will live, mine is called `fetch.rb`. The `rb` extension is short for Ruby, but I think you knew this already 😉

To run this file at any point you can type this in your terminal, in your current directory `ruby fetch.rb`. My favorite thing to do is to use Ruby console to try things out, you can do so by typing `irb`. Don't forget to press enter 🙃

Everything in Ruby is an object (Ruby is an Object Oriented Programming language), so gem is just a bunch of objects written by someone else. To access these objects in our Ruby file we have to require/import it like so `require 'github_api'`. After reading the docs I know that I can instantiate class (object) Github and save it in a variable like so `github = Github.new`. Just roll with it.

So we have this variable `github` and it has a lot of functions/methods for us to call. It turns out we can do something like `repositories = github.repos.list user: 'maria-kravtsova'` to get the list of repositories of a username `maria-kravtsova` and let's just save this to a variable named `repositories`. This new variable is a list where each item looks like:

`#<Github::Mash archive_url="https://api.github.com/repos/maria-kravtsova/maria-kravtsova.github.io/{archive_format}{/ref}" archived=false assignees_url="https://api.github.com/repos/maria-kravtsova/maria-kravtsova.github.io/assignees{/user}" blobs_url="https://api.github.com/repos/maria-kravtsova/maria-kravtsova.github.io/git/blobs{/sha}" branches_url="ht...`

You can clone a repository from Github with HTTPS or SSH, it depends on how you are logged in with git. In my case it's SSH because it is safe and passwords are hard. So out of all the options that each item of `repositories` provides me I noticed the string of `ssh_url` looked promising. So I could go over each item and print my url/string like so:

```ruby
repositories.each do |repo|
  puts " #{repo.ssh_url}"
end
```

Awesome! Now I know that if I had to do this by hand I would type `git clone my_github_url`. In this case I could do `puts "git clone #{repo.ssh_url}"` but it would just print it. My friend Google told me I can substitute that `puts` into `system` and computer would just type that string in the terminal for me.

So far we have:

```ruby
require 'github_api'

github = Github.new
repositories = github.repos.list user: 'maria-kravtsova'
repositories.each do |repo|
  system "git clone #{repo.ssh_url}"
end
puts "Done!"
```

I sprinkled a puts at the end, so I know what's up when I get back from getting my cup of coffee ☕

So, you got back with your coffee and you are yelling at me because now you have all of your Github repositories in the same folder as this Ruby file? Well, we are not perfect, making mistakes is part of all the fun. One fix I propose is when we run our Ruby file we can pass/type it the location on the computer that we want it to run the git clone call in. `ARGV` is an array that will store this magic so you can do `ruby fetch.rb one two three` and your `ARGV` is `['one', 'two', 'three']`.

In your terminal you can move from one directory by typing `cd` and then path or directory name (ex. `cd ~/Desktop`). Another cool trick is you can append system calls so you can do `cd ~/Desktop && pwd` which will change directory into user's Desktop folder and then print working directory on the screen. Yeah it's two & symbols, computer needs to double check?

My final `fetch.rb` looks like:
```ruby
require 'github_api'

github = Github.new
repositories = github.repos.list user: 'maria-kravtsova'
repositories.each do |repo|
  system "cd #{ARGV[0]} && git clone #{repo.ssh_url}"
end
puts "Done!"
```
and I run it by typing `ruby fetch.rb ~/code` because I am cool like that 😎

I know this probably is the most random pseudo-tutorial you have probably read. But two things I am proud of here:
- After a year of being paid to write code I finally feel somewhat confident enough to make a more technical post.
- I choose Ruby for this task instead of Python, I kind of feel like language choice is really becoming the least of my worries.