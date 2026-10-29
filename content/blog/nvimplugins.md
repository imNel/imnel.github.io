---
title: The beauty of Neovim: The API
date: 2023-07-22
tags: neovim, lua
---

I've been using neovim for a while now, but only recently do I think
I've unlocked the true power of the editor, making your own plugins.

## The Problem

When you install neovim, there will probably be a plugin for most issues
you come across, but what if there isn't? The beauty of NOT using VS Code 
or a preconfigured IDE is the ability to get your development environment to 
be exactly how you like, whether that would be to make it "fit like a glove" or 
"good enough". 

You could ask on a forum like reddit or find a similar plugin, but there's 
no guarantee what you're looking for is actually out there. With a normal 
editor, you'd probably have to stop there or learn how to make plugins for 
that ecosystem (Best of luck if you use IntelliJ), but the nature of neovim 
is that you're already so close to the plugin ecosystem, as neovim configurations
are mostly written in lua.

If you're familiar with coding and you've been writing your config for a 
while, it'll be a breeze to learn. With [lua-language-server](https://github.com/LuaLS/lua-language-server) 
and [neodev.nvim](https://github.com/folke/neodev.nvim) you can get the neovim 
api, documented, at your fingertips, in minutes. 

## My Experience

Once you're familiar with the api, it's incredibly easy to turn your ideas
into plugins, or solve your problems. 

Feel like you're accidentally closing splits too ofen and wish you could have 
similar to `ctrl+shift+t` in a browser? In 30mins to 1hr you could have a functioning
plugin. I wrote [whoops.nvim](https://github.com/imNel/whoops.nvim) which 
solved this for me! The beauty of it being so quick to write was that when 
I realised I didn't actually need it, I could delete it instantly, knowing 
that there was no suffering involved that would justify me keeping it around. 
And with the magic of GitHub, I can keep it around until someone else requests 
it on Reddit, where they will inevitably realise it's useless and move on 
with their life too.

## A good example...

Let's talk about a plugin I made that I use almost every day, [monorepo.nvim](https://github.com/imNel/monorepo.nvim).

While working on monorepos with 4 node projects that do the same thing, I found 
it hard to figure out which one I was working in when using telescope's `find_files()`.
It also became hard to use other plugins like harpoon to jump around, since I had 
the same "save" for the whole monorepo. I looked at a few plugins for changing 
the scope of nvim but found none that I liked, so I decided to make my own. 

The plugin interfaces with telescope for picking the sub-project, as well as using 
plenary to persist the information at a project basis. It's basically a glorified `:cd` machine, 
but damn if it isn't useful. Oh, and it was fun to make too!

Anyway, if you haven't already, I encourage you to try making your own plugins or just 
simply interacting with the nvim API more inside your own config, even if it's 
just a small little script, it'll make you fall in love with neovim even more.

