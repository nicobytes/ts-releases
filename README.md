Open each version in Cursor separately.

# Example

```
cd 5.4
cursor .
```

### Create a new version

```
make new-version v=<version>
```

Change the baseUrl and rootDir in tsconfig.json to the new version.

```
"rootDir": "./src",  
"baseUrl": "./src",  
```


