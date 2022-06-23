---
title: Tmux
category: Templates
path: docs/tp_tmux.conf.md
---

## **~/.tmux_conf** for MacOS
<hr>

~~~bash
# refresh 
bind r source-file ~/.tmux.conf\; display "Reloaded ~/.tmux.conf" 

# remap prefix from 'C-b' to 'C-a'
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix

# set mouse off/on 
set -g mouse on
 
# 256 colours
set -g default-terminal "screen-256color"
 
# start with window 1 (instead of 0)
set -g base-index 1

# start with pane 1
set -g pane-base-index 1

# splitting panes
bind '\' split-window -h -c '#{pane_current_path}'
bind '-' split-window -v -c '#{pane_current_path}'
unbind '"'
unbind %

# switching panes
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# statusbar
set -g status-position top
set -g window-status-separator ""
set -g status-style bg=colour18
set -g status-left " #S >> "
set -g status-left-style bg=colour22
set -g status-left-length 100
set -g status-right "  %m/%d | %H:%M  "
set -g status-right-style bg=colour22
set -g window-status-format " #I: #W "
set -g window-status-current-format " #I: #W "
set -g window-status-current-style fg=black
set -g window-status-current-style bg=blue

# copy & paste
setw -g mode-keys vi
unbind -Tcopy-mode-vi Enter
bind-key -T copy-mode-vi 'v' send -X begin-selection
bind-key -T copy-mode-vi 'V' send -X select-line
bind-key -T copy-mode-vi 'r' send -X rectangle-toggle
bind -Tcopy-mode-vi 'y' send -X copy-pipe-and-cancel "reattach-to-user-namespace pbcopy"
~~~
