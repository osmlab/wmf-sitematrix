# WMF SiteMatrix

The goal of this project is to provide filtered versions of [Wikimedia's site matrix](https://meta.wikimedia.org/wiki/Special:SiteMatrix), as reported by the MediaWiki API in JSON format. Filtering allows Web applications like [iD](https://github.com/openstreetmap/iD) to avoid loading the entire matrix just to integrate with a single project, such as Wikipedia.

The data/ directory contains a prettified JSON file and a minified JSON file for each Wikimedia project. The all.json and all.min.json files include all the Wikimedia wikis, including not only the projects that have their own JSON files but also multilingual and special wikis.

To update the JSON files, run `make`.


## Running on toolforge
To run on toolforge log into the tool accounnt:
```
ssh myuser@login.toolforge.org
myuser@tools-sgebastion-10:$ become wmf-sitematrix
wmf-sitematrix@tools-sgebastion-10:$
```

Start a build to pick up the new code
```
wmf-sitematrix@tools-sgebastion-10:$ toolforge build start https://github.com/osmlab/wmf-sitematrix
... takes a minute
```


Start/restart the webservice mounting the NFS:
```
wmf-sitematrix@tools-sgebastion-10:$ toolforge webservice buildservice --mount=all restart
```

And create the job if it's not there to update `public_html/data/*json`:
```
wmf-sitematrix@tools-sgebastion-10:$ toolforge jobs run \
    --schedule '0 0 */15 * *' \
    --filelog \
    --mount=all \
    --image tool-wmf-sitematrix/tool-wmf-sitematrix:latest \
    --command 'update' \
    cron-tools.wmf-sitematrix-1
```

Or restart it if it exists and you want to run it right away:
```
wmf-sitematrix@tools-sgebastion-10:$ toolforge jobs restart cron-tools.wmf-sitematrix-1
```

Otherwise the next run will pull the new code.
