---
layout: post
title:  "Installing GalliumOS on Asus C300SA"
date:   2017-01-16 23:33:00
categories: learning
comments: yes
---

Trust me - it's hard, but it's worth it! This took me many hours, and in writing this I hope to save you some.
Note: I installed it using chrx because it was faster and I had class to attend. A fresh install should still work.

Step 1. Read the entire post and [wiki](https://wiki.galliumos.org/)

Step 2. If you check [Hardware Compatibility](https://wiki.galliumos.org/Hardware_Compatibility) you will see that
my chromebook is a Braswell. This is important because now we know a few things: we have to flash firmware with MrChromebox

Step 3. Personally I had to do this step after I had an issue of GalliumOS boot screen flashing. The only way to fix this was to make a Recover flashdrive
by using a chrome extension called [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/jndclpdbaamdhonoechobihbbiimdgai?hl=en)
This amazing redditor posted a bunch of older recovery images [here](https://www.reddit.com/r/GalliumOS/comments/5juby5/asus_202a_braswell_blinkingflashing_screen_after/).
The one that worked for me was 8743.87.0, so download it then make recovery flashdrive from that file.

Step 4. Unscrew your chromebook, take it apart and take the Write Protect Screw off, there is a [nice guide](http://www.matws.org/c300/). When I did this part I found out
that a good way to take out a stripped screw is by using a drill bit.

Step 5. Does it turn back on? Ok, good. If not - plug the power cord in your laptop, then does it turn on? Maybe unplug it? One of those worked for me.

Step 6. Boot ChromeOS

Step 7. Enable Developer Mode: Press Ctrl+F3+Power, then Ctrl+D, then Enter

Step 8. Ctrl+D to boot ChromeOS, configure Wi-Fi, DO NOT CLICK NEXT, Ctrl+Alt+F3 (some say F2 aka right or left error), log in as "chronos" when you see a black screen. There is no password, so don't assign it one.

Step 9. Update firmware: curl -OL https://mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh

Note: Before we go next, if you do not want to have dual boot ChromeOS and GalliumOS, then create a bootable flashdrive with a Brasswell image from [nightly releases](https://galliumos.org/releases/nightly/), reboot it and press Ctrl+L. Wiki has a more detailed guide for this.

Step 10. Run chrx: curl -O https://chrx.org/go && sh go -r nightly, reboot

Step 11. Ctrl+D to boot ChromeOS, let it "repair", reboot

Step 12. Ctrl+D to boot ChromeOS, configure Wi-Fi, Ctrl+Alt+F2, log in as "chronos"

Step 13. Run chrx: curl -O https://chrx.org/go && sh go -r nightly, reboot

Step 14. Ctrl+L to boot GalliumOS, Ctrl+D to boot to ChromeOS

Issues:
* There is no sound, sort of anticipated that, but I have my bluetooth headphones that work after I did [this](http://askubuntu.com/questions/833322/pair-bose-quietcomfort-35-with-ubuntu-16-04-over-bluetooth)

* When I restart the touchpad sensitivity goes waaaay low, so I type this in my terminal xinput set-prop "Elan Touchpad" "Synaptics Finger" 5 10 50  
  You can change the values, but it works for me.

* To update packages you can do apt-get update, but there is actually a GalliumOS Update app that will update the OS. You already have it, just look for it.

* If you are a developer - you will need to install all of your packages, there is nothing there, not even ssh

Lastly, I might have missed something, or maybe you run into some problem. Don't sweat about it - it probably can be fixed, or there is a work around it. If it works - you got a cool, light weight laptop for under $200.

Good luck! Now go read Step 2 if you are ready.
