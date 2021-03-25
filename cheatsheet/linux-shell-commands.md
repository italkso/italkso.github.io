## Linux Command

### Directory

| Command | Description             | Usage                                   |
| ------- | ----------------------- | --------------------------------------- |
| `pwd`   | Print working directory | `pwd`                                   |
| `cd`    | Change directory        | `cd {{relative_path_of_new_directory}}` |
| `mkdir` | Make new directory      | `mkdir {{name_of_a_directory}}`         |

```shell
$ cd /	# Enter the root directory
$ cd -	# Back to the directory visited last time
$ cd ~	# Back to home directory
$ cd 		# Back to home directory
$ cd ../	# Back to home directory
$ cd Path	# Enter a specific directory
```

### Files

| Command | Description                                   | Usage                                                 |
| ------- | --------------------------------------------- | ----------------------------------------------------- |
| `ls`    | List all files in a directory                 | `ls -a` ：list all files (hiden files included)<br /> |
| `less`  | File viewing tool                             |                                                       |
| `more`  | File viewing tool                             |                                                       |
| `cat`   | Concatenate                                   |                                                       |
| `which` | View the executalbe files                     |                                                       |
| `touch` | Create new file (when the file dosen’t exist) | `touch name_of_new_file`                              |
| `cp`    | Copy  file                                    |                                                       |
| `mv`    | Move file                                     |                                                       |
| `rm`    | Remove  file                                  | `rm name_of_file`                                     |
| `ln`    | Link files ( soft / hard)                     |                                                       |

```shell
$ head -40 draft.txt | tail -n 20

$ wc -l draft.txt		#Report number of lines
$ wc -c draft.txt   	#Report number of bytes
$ wc -m draft.txt		#Report number of characters
$ wc -w draft.txt		#Report number of words
```



### Text Processing

`find`, `grep`, `xargs`, `sort`, `uniq`, `cut`, `paste`, `sed`, `awk`, `wc`.



### Access control

| Command  | Description     | Example   |
| -------- | --------------- | --------- |
| `chmod`  | Change mode     | ugo , 421 |
| `chown`  | Change owner    |           |
| `chgrp`  | Change owner    |           |
| `passwd` | Change password |           |



### Show OS info

| Command | Description                  |
| ------- | ---------------------------- |
| top     | Show Process info dynamiclly |
| ps      | Process status               |
| kill    | Kill Process                 |
| df      | Disk free                    |
| du      | Disk usage                   |



### Others

| Command     | Description  |
| ----------- | ------------ |
| exit        | Exit         |
| sh          | Script       |
| gzip、bzip2 | Zip/unzip    |
| tar         | Tape archive |

