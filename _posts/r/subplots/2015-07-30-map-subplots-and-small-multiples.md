---
title: Map Subplots And Small Multiples
name: Map Subplots And Small Multiples
permalink: r/map-subplots-and-small-multiples/
description: How to create map subplots and small multiples in R.
layout: base
thumbnail: thumbnail/map-subplots.jpg
language: r
has_thumbnail: true
display_as: multiple_axes
output:
  html_document:
    keep_md: true
---


### New to Plotly?

Plotly's R library is free and open source!<br>
[Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/).<br>
You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode.<br>
We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!

### Version Check

Version 4 of Plotly's R package is now [available](https://plot.ly/r/getting-started/#installation)!<br>
Check out [this post](http://moderndata.plot.ly/upgrading-to-plotly-4-0-and-above/) for more information on breaking changes and new features available in this version.

```r
library(plotly)
packageVersion('plotly')
```

```
## [1] '4.5.2'
```

### Basic Subplots with Maps


```r
library(plotly)
library(dplyr)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/1962_2006_walmart_store_openings.csv')

# common map properties
g <- list(
  scope = 'usa',
  showland = T,
  landcolor = toRGB("gray90"),
  showcountries = F,
  subunitcolor = toRGB("white")
)

one_map <- function(dat) {
  plot_geo(dat) %>%
    add_markers(x = ~LON, y = ~LAT, color = I("blue"), alpha = 0.5) %>%
    add_text(x = -78, y = 47, text = ~unique(YEAR), color = I("black")) %>%
    layout(geo = g)
}

p <- df %>%
  group_by(YEAR) %>%
  do(map = one_map(.)) %>%
  subplot(nrows = 9) %>%
  layout(
    showlegend = FALSE,
    title = 'New Walmart Stores per year 1962-2006<br> Source: <a href="http://www.econ.umn.edu/~holmes/data/WalMart/index.html">University of Minnesota</a>',
    width = 1000,
    height = 900,
    hovermode = FALSE
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="maps-small-multiple")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3173.embed" width="800" height="900" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
