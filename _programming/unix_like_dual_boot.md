---
title: Dual Booting
category: Unix-like
path: programming/unix_like_dual_boot.md
---

###  Linux + Windows dual-booting (grub-reboot)
<hr>

**1. Change 'GRUB_DEFAULT=0' to 'GRUB_DEFAULT=saved' in /etc/default/grub**

~~~bash
vi /etc/default/grub
~~~

**2. Type the following cmd lines**

~~~bash
sudo update-grub
sudo grub-set-default 0
~~~

**3. Check your windows number (starts from 0)**

~~~bash
grep -Ei 'submenu|menuentry ' /boot/grub/grub.cfg | sed -re "s/(.? )'([^']+)'.*/\1 \2/"
~~~

**4. Type the following cmd lines with windows number (e.g. 2)** 

~~~bash
sudo grub-reboot 2
sudo reboot
~~~

**5. If you want to make a command, type the following code in ~/.bashrc or ~/.zshrc**

~~~bash
function windows {
	NEXT_OS=`grep 'Windows' /boot/grub/grub.cfg|cut -d \' -f 2`
	sudo grub-reboot "$NEXT_OS"
	sudo reboot
}
~~~
