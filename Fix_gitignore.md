# How to fix ".gitignore not working" issue?

Sometimes git does not exclude files/folders added `.gitignore` especially if you had commited them before. Here is how to fix it. I am ignoring [node_modules](https://user-images.githubusercontent.com/17564080/51767305-ef21a700-20aa-11e9-98b2-01d7a76b403c.png) from Angular project as an example

1. Update `.gitignore` with the folder/file name you want to ignore. You can use anyone of the formats mentioned below (prefer format1)

```
### Format1  ###
node_modules/
node/

### Format2  ###
**/frontend/node_modules/**
**/frontend/node/**

```

2. Commit all the changes to git. Exclude the folder/files you don't want commit, in my case `node_modules`
3. Execute the following command to clear the cache

```
git rm -r --cached .
```

4. Execute `git status` command and it should output `node_modules` and sub directories marked for deletion
5. Now execute

```
git add .
git commit -m "fixed untracked files"
```

6. That's it. Comment if you any questions.

---

**Update**: Windows users make sure your `.gitignore` uses UTF-8 rather than UTF-16. See
