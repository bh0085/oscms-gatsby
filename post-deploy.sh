echo 'please wait, pushing CNAME to gh-pages'
# get current branch name
currentBranch=$( git rev-parse --abbrev-ref HEAD )
currentTime=$(date +"%D_%I:%M_%p")
# stash any changes
git stash push -ul -m $currentTime
# switch to github pages branch
git checkout gh-pages
# create CNAME file and push
echo 'osms.dev' > CNAME
git add .
git commit -m 'Add CNAME'
git push
# switch back to original branch
git checkout $currentBranch
# reapply any changes
git stash pop

echo 'CNAME file pushed, operation complete.'
