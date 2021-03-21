#### Basic Commands

```bash
# Command format
$ command -option argument list

# Short vs long format
$ ls -r
$ ls --reverse

# Check available shells in your OS
$ cat /etc/shells		

# Show shell which you use
$ echo $SHELL	

# Start bash
$ bash					

# Exit bash
$ exit					

# Check your bash version
$ bash --version		
$ echo $BASH_VERSION

# Show current date 
$ date 

# Show current user 
$ who

# pipe command
$ command1 | command2

# Communication
$ write user[ttyname]
$ mail
$ mesg[-n][-y]
```

#### echo

```shell
# Cancle CR（Carriage return，aka '\n'） using -n
$ echo -n hello world
$ echo -n a;echo b

# Output Control Character using -e
$ echo -e "Hello\nWorld"

# The following two commands are the same
$ echo foo bar
$ echo foo \
bar
```

