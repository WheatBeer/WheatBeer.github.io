---
title: Vim
category: Templates
path: docs/tp_vimrc.md
---
{% comment %}
## Outline
<hr>
[~/.vimrc](#vimrc for MacOS)
{% endcomment %}

#### vimrc
## **~/.vimrc** for MacOS
<hr>

~~~txt
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'       " show filelist
Plugin 'vim-airline'               " show beautiful airline
Plugin 'vim-airline/vim-airline-themes'
Plugin 'Valloric/YouCompleteMe'
Plugin 'morhetz/gruvbox'           " vim theme gruvbox
Plugin 'jiangmiao/auto-pairs'

call vundle#end()            " required
filetype plugin indent on    " required

""" nerdtree
nmap <LEADER>nt <ESC>:NERDTree<CR>
let g:NERDTreeShowHidden = 1 
let g:NERDTreeIgnore = ['\~$']
let g:lNERDTreeWinSize = 20 
let g:NERDTreeMinimalUI = 1
"let g:NERDTreeShowLineNumbers = 1

""" vim-airline
let g:airline#extensions#tabline#enabled = 1		" show buffer list
let g:airline#extensions#tabline#fnamemod = ':t'	" show only filename
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline#extensions#tabline#left_sep = '|'
let g:airline#extensions#tabline#buffer_idx_mode = 1
if !exists('g:airline_symbols')
	let g:airline_symbols = {}
endif
" unicode symbols
let g:airline_left_sep = '▶'
let g:airline_right_sep = '◀'
let g:airline_symbols.linenr = '¶'
let g:airline_symbols.branch = '⎇'
let g:airline_symbols.paste = 'ρ'
let g:airline_symbols.whitespace = 'Ξ'

nmap <leader>1 <Plug>AirlineSelectTab1
nmap <leader>2 <Plug>AirlineSelectTab2
nmap <leader>3 <Plug>AirlineSelectTab3
nmap <leader>4 <Plug>AirlineSelectTab4
nmap <leader>5 <Plug>AirlineSelectTab5
nmap <leader>6 <Plug>AirlineSelectTab6
nmap <leader>7 <Plug>AirlineSelectTab7
nmap <leader>8 <Plug>AirlineSelectTab8
nmap <leader>9 <Plug>AirlineSelectTab9

nmap <LEADER>T :enew<CR>
nmap <LEADER>l :bnext<CR>
nmap <LEADER>h :bprevious<CR>
nmap <LEADER>bq :bp <BAR> bd #<CR>
nmap <LEADER>b :vert sb #<CR>

""" airline_theme
let g:airline_theme = 'bubblegum'

""" YouCompleteMe
let g:ycm_use_clangd = 1
let g:ycm_global_ycm_extra_conf = '~/.vim/bundle/YouCompleteMe/.ycm_extra_conf.py'

let uname = substitute(system('uname'), '\n', '', '')
if uname == "Darwin"
	let g:ycm_python_binary_path = '/usr/local/bin/python3'
elseif uname == "Linux"
	let g:ycm_python_binary_path = '/usr/bin/python3'
elseif uname == "Windows"
endif

let g:ycm_key_list_select_completion = ['<C-n>']
let g:ycm_key_list_previous_completion = ['<C-p>']
let g:ycm_seed_identifiers_with_syntax = 1
let g:ycm_confirm_extra_conf = 0	" avoid YCM Whether to load or not is prompted by the user each time the load is loaded
let g:ycm_autoclose_preview_window_after_completion = 1
let g:ycm_complete_in_comments = 1  " It can also be completed in comment input
let g:ycm_complete_in_strings = 1   " It can also be completed in string input
let g:ycm_collect_identifiers_from_comments_and_strings = 1   " Texts in comments and strings are also supplemented by revenue.
let g:ycm_min_num_of_chars_for_completion = 1
"let g:ycm_auto_trigger = 0
"
nnoremap <LEADER>g :YcmCompleter GoTo<CR>
nnoremap <LEADER>gg :YcmCompleter GoToImprecise<CR>
nnoremap <LEADER>d :YcmCompleter GoToDeclaration<CR>
nnoremap <LEADER>t :YcmCompleter GetType<CR>
nnoremap <LEADER>p :YcmCompleter GetParent<CR> 

""" gruvbox
colorscheme gruvbox
let g:gruvbox_contrast_dark ='hard' 

""" auto-pairs
"let g:AutoPairsFlyMode = 1
"let g:AutoPairsShortcutBackInsert = '<M-b>'

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

" Syntax Highlighting
if has("syntax")
    syntax on
endif
" Indent
set autoindent
set cindent " indent for C
set smartindent
" format/layout
set background=dark
set title
set nu " line number
set tabstop=4 shiftwidth=4 expandtab
set ruler
"set paste " no auto-indenting when pasting 
set wrap
set linebreak
set scrolloff=4
" command line completion
set wildmenu
" etc. 
set cursorline
set hlsearch " highlight search
set incsearch
set ignorecase " ignore uppercase and lowercase when searching
set laststatus=2 " status line
set showmode
set showcmd
set showmatch " show the pair bracket
set history=1000
set nobackup
set backspace=eol,start,indent
set mouse=a
set autowrite
set autoread
set hidden " for buffer
set clipboard=unnamed " use OS clipboard

" Uncomment the following to have Vim jump to the last position when reopening a file
au BufReadPost *
\ if line("'\"") > 0 && line("'\"") <= line("$") |
\   exe "norm g`\"" |
\ endif

" encoding ko
if $LANG[0]=='k' && $LANG[1]=='o'
  set fileencoding=korea
endif

" Spell check
autocmd BufNewFile,BufRead *.tex set spell
~~~

{% comment %}
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
{% endcomment %}
