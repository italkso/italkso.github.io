## Linux Command Cheatsheet



### 1.Directory

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



### 2.Files

| Command     | Description                                   | Usage                                                 |
| ----------- | --------------------------------------------- | ----------------------------------------------------- |
| `ls`        | List all files in a directory                 | `ls -a` ：list all files (hiden files included)<br /> |
| `less`      | File viewing tool                             |                                                       |
| `more`      | File viewing tool                             |                                                       |
| `cat`       | Concatenate                                   |                                                       |
| `which`     | View the executalbe files                     |                                                       |
| `touch`     | Create new file (when the file dosen’t exist) | `touch name_of_new_file`                              |
| `cp`        | Copy  file                                    |                                                       |
| `mv`        | Move file                                     |                                                       |
| `rm`        | Remove  file                                  | `rm name_of_file`                                     |
| `ln`        | Link files ( soft / hard)                     |                                                       |
| `head/tail` |                                               | 取一个文件的头部和尾部 n 行，利用管道可以取文件中间行 |

```shell
$ head -40 draft.txt | tail -n 20

$ wc -l draft.txt		#Report number of lines
$ wc -c draft.txt   	#Report number of bytes
$ wc -m draft.txt		#Report number of characters
$ wc -w draft.txt		#Report number of words
```



### 3.Text Processing

| Command | Description                      | Example                        |
| ------- | -------------------------------- | ------------------------------ |
| find    | 文件搜索                         |                                |
| grep    | 文本搜索（通用正则表达式解析器） |                                |
| `xargs` | 命令行参数转换                   |                                |
| sort    | Sort                             | 默认按第一列、ASCII 码排序     |
| `uniq`  | 消除重复行                       |                                |
| `cut`   | 按列切分文本                     |                                |
| `paste` | 按列拼接文本                     |                                |
| sed     | Stream Editor                    |                                |
| awk     | 文本处理工具                     |                                |
| `wc`    | Word count                       | 统计文件的行数、单词数、字符数 |



### 4.Access control

| Command  | Description     | Example   |
| -------- | --------------- | --------- |
| `chmod`  | Change mode     | ugo , 421 |
| `chown`  | Change owner    |           |
| `chgrp`  | Change owner    |           |
| `passwd` | Change password |           |



### 5. Show OS info

| Command | Description    | 作用                         | 说明                          |
| ------- | -------------- | ---------------------------- | ----------------------------- |
| top     |                | 动态显示系统进程使用情况     | 进程 ID、CPU 占用、内存使用等 |
| ps      | Process status | 静态显示系统进程             | 便于其他程序捕获结果          |
| kill    |                | 杀死进程                     | 需要的ID 可有 top 或 ps 获得  |
| df      | Disk free      | 查看查看磁盘大小、可用空间等 |                               |
| du      | Disk usage     | 查看目录所占磁盘大小         |                               |



### Others

| Command     | Description  | Example                                     |
| ----------- | ------------ | ------------------------------------------- |
| exit        |              | 正确退出登录                                |
| sh          | script       | 运行脚本                                    |
| gzip、bzip2 |              | 文件压缩工具，在 zip 前加上 un 可表示解压缩 |
| tar         | Tape archive | 打包                                        |

