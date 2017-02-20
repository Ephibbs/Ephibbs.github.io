---
layout: project
title: Neural Headset Quadcopter
permalink: /projects/neural-headset
---

In the spring of my freshman year, my friend, Garrett, and I decided to make a quadcopter to be controlled with a neural headset to enter in Engineering Open House at UIUC. We wanted to make as much as we could from scratch so that we could learn about 3D printing, wireless transceivers, motors, lipo batteries, speed controllers, flight controllers, and machine learning on neural signals.

## 3D Printing

We started by looking up designs of 3D printed quadcopters online. The majority of them were quite similar and were designed with certain components in mind. We settled on emulating a design called the vampire on Grabcad.com. The design was posted in 2012 and some of the electrical components linked in its description were discontinued. While Garrett began the process of transferring the outdated cad files into his newer cadding program. I began learning a bit more about motors, propellers, voltage and current draw requirements until I came up with a group of components that seemed to like they should work together. With these new components, Garrett tweaked the cad file to support the new measurements.

Finally, we were ready to print! We headed off to BIF's 3D Printing lab to print our parts. 3D printing is an incredible technology that allows you to print in a variety of plastics of different physical parameters and colors! We decided on orange and blue PLA as it was the cheapest, strongest, and most school spirited of those available at the lab. So then over the course of 3 days we got enough printing time to finish printing all of our components.

## Electronics

We purchased all of our electronics online and they arrived about a week later. It took a couple days to assemble everything and Garrett and I began calibrating  and testing it.

## Neural Headset

My whole inspiration for the project came from when I borrowed an Emotiv Insight neural headset from the Biomedial Engineering Society. It worked very well in the simulation software included with the headset. I then began to try to find a way to get access to the raw data, which as Emotic's website states, is only available in the research version for an extra $400. As a poor, starving college student, I didn't have that kind of mula so we decided to take the results from Emotiv's own software to control the quadcopter.

## Programming and Wireless Transeivers

I researched transceivers online and found about a great  company making so-called zigbees. I bought a pair that could communicate over a mile just to be safe. Using an adapter, Garrett was able to connect one to his computer and another to the quadcopter. Lastly, I coded a small program to take data from the Emotiv software and send it over serial on the zigbees using python and multithreading to reduce delay between signal generation and the quadcopter acting on it.

## Results

We presented our project on Engineering Open House weekend and allowed people to wear the headset and train themselves to fly the quadcopter. People seemed to really enjoy it. It seemed to work fairly accurately and promptly for most participants as well. At the end of the 2 day event we were awarded third place in Interdisciplinary Collaberation amongst over 50 projects in the category, many of which had been running for several years.


