---
title: vimrc
category: Templates
path: programming/templates/vimrc.md
---

## Useful Links
* Vim을 IDE처럼 사용하기: https://blog.b1ue.sh/vim-ide/
* .ycm_extra_conf.py 설정
: https://neverapple88.tistory.com/26 (Korean)
 https://programmer.group/installation-of-vim-plug-in-youcompleteme-for-mac.html (English)

~~~bash
echo | gcc -std=c++11 -v -E -x c++ -                       // gcc를 사용할 경우
echo | clang -std=c++11 -stdlib=libc++ -v -E -x c++ -      // clang을 사용할 경우
~~~

* .vimrc examples</br>
: https://xevolts.tistory.com/19 
https://code4rain.wordpress.com/2015/03/02/vi%EC%84%A4%EC%A0%95vimrc/
* Vim & Tmux에서 Mac/리눅스 클립보드(clipboard)로 copy & paste 하기
https://rampart81.github.io/post/vim-clipboard-share/

## vim plugin
- Requirement

~~~
echo -e "Plugin 'VundleVim/Vundle.vim'      " plugin installer package" >> ~/.vimrc
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
~~~

- Using

~~~txt
Plugin 'scrooloose/nerdtree'       " show filelist
Plugin 'vim-airline'               " show beautiful airline
Plugin 'vim-airline/vim-airline-themes'
Plugin 'Valloric/YouCompleteMe'    " https://github.com/ycm-core/YouCompleteMe
Plugin 'morhetz/gruvbox'           " vim theme gruvbox
Plugin 'jiangmiao/auto-pairs'
~~~

- Not Using

~~~txt
Plugin 'scrooloose/syntastic' "syntax checker
Plugin 'Chiel92/vim-autoformat'
Plugin 'rdnetto/YCM-Generator', { 'branch': 'stable'}
Plugin 'davidhalter/jedi-vim'      " autocompletion for python
Plugin 'vim-scripts/L9'            " basic plugin
Plugin 'majutsushi/tagbar'         " show class, function, variable those have been used in current file (instead of 'taglist-plus')
Plugin 'kien/ctrlp.vim'            " find file by name (instead of 'command-t')
Plugin 'easymotion/vim-easymotion' " easily finding words
Plugin 'sjl/gundo.vim'             " show editted code log looks like git branch
Plugin 'tpope/vim-fugitive'        " git controller with vim (instead of 'vim-conflicted')
Plugin 'airblade/vim-gitgutter'    " show git file status diff</br>
Plugin 'godlygeek/tabular'         " aligning multilines with same form (ex select lines + :Tab + / + <char>
Plugin 'Tuxdude/mark.vim'
~~~
