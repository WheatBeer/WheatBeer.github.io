#!/bin/bash

wheatbeer=$PWD
posts=$wheatbeer/posts
docs=$wheatbeer/_docs 

print_help() {
    echo -e "Usage: $0 [post/rm]"
    exit 0
}

# Print usage help.
if [[ "$#" -gt 1 || $1 = '-h' || $1 = '--help' ]];  then
    print_help
fi

# Check arguments
action=$1; shift
if [[ $action != post && $action != rm ]]; then
	print_help
fi

# Check posts' directories
cd $posts; ./pull.sh;
echo -e "\nposts directory(to edit on github):"
ls -d */
post_d=(`ls -d */ | sed -e 's/\///g'`)

# Check _docs' directories
echo -e "_docs directory(to visualize):"
cd $docs; ls -d */
docs_d=(`cd $docs; ls -d */ | sed -e 's/\///g'`)

if [[ $action = 'post' ]]; then
	# Check sync
	if [[ ${#post_d[@]} != ${#docs_d[@]} ]]; then
		echo =e "\nBoth are not synced"	
		exit 1
	else
		for (( i = 0 ; i < ${#post_d[@]} ; i++ )) ; do
			if [[ ${post_d[$i]} != ${docs_d[$i]} ]]; then
				echo =e "\nBoth are not synced"	
				exit 1
			fi
		done
	fi

	# Posting
	read -p "Type a category(directory name) you want to post: " folder
	category="$(tr '[:lower:]' '[:upper:]' <<< ${folder:0:1})${folder:1}"
	echo e "\n $category"
	cd $posts
	if [[ -d $folder ]] ; then
		read -p "Type a title(file name) you want to post: " file
		title="$(tr '[:lower:]' '[:upper:]' <<< ${file:0:1})${file:1}"
		cd $posts/$folder; touch $file.md
		echo -e "[[edit]](https://github.com/WheatBeer/posts/edit/master/$folder/$file.md)" > $file.md 
		cd $docs/$folder; touch $file.md
		echo -e "---\ntitle: $title\ncategory: $category\n---" >> $file.md
		echo -e "\n\n<div id=\"github\"></div>\n<script>\ngetText(\"https://raw.githubusercontent.com/WheatBeer/posts/master/$folder/$file.md\");\n</script>" >> $file.md
	else
		echo -e "$folder does not exist"
		while : 
		do 
			read -p "Do you want to make $folder directory(y/n)? " checker

			if [[ $checker = 'y' || $checker = 'Y' ]]; then
				mkdir $posts/$folder; mkdir $docs/$folder
				read -p "Type a title(file name) you wnat to post: " file
				title="$(tr '[:lower:]' '[:upper:]' <<< ${file:0:1})${file:1}"
				cd $posts/$folder; touch $file.md
				echo -e "[[edit]](https://github.com/WheatBeer/posts/edit/master/$folder/$file.md)" > $file.md 
				cd $docs/$folder; touch $file.md
				echo -e "---\ntitle: $title\ncategory: $category\n---" >> $file.md
				echo -e "\n\n<div id=\"github\"></div>\n<script>\ngetText(\"https://raw.githubusercontent.com/WheatBeer/posts/master/$folder/$file.md\");\n</script>" >> $file.md
				break	
			elif [[ $checker = 'n' || $checker = 'N' ]]; then
				exit 1
			else
				echo -e "Try again"	
			fi
		done
	fi
elif [[ $action = 'rm' ]]; then
	read -p "Type the directory: " folder 
	if [[ -d $posts/$folder || -d $docs/$folder ]] ; then
		echo -e "\nposts directory(to edit on github):"
		cd $posts/$folder; ls 
		echo -e "_docs directory(to visualize):"
		cd $docs/$folder; ls 
		read -p "Type the file name you want to remove: " file 
		cd $posts/$folder; rm $file.md
		cd $docs/$folder; rm $file.md
	else
		echo -e "\n$folder dosen't exist"
		exit 1
	fi
fi
