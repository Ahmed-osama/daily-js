# Tajawal tsask guide
- pick a task with its periority
- 1st make sure you pulled latest updates using `git pull`
- `TJW-release-hot-<release number>` for example  `git checkout TJW-release-hot-07`
- `git checkout -b <task-id> ` for example `git checkout -b HOT-745 `
- creat a card to expose task current state & asign your self to the card
- read the details more than one time and carefully
- make sure you understand the requiremnts
- if you got confused with any thing ask your colleagues
- dont start coding unless you understand every detail
- understand business value & the proplem you will solve well
- make sure you match the acceptance criateria

## Doing the code
- define the task scope for ex : "session-timeout-modal"
- figure a way to find the targted files for example "use global search for a class or id"
- know affected pages 
- dont leav debuggers
- make sure the constants are right
- before pushing  review your own code
- commit reqularly `git commit -am <commit message>`
- push you final code `git push`
- is your task done?
- create pull request
- make your merge base to the `<relase-branch>`
- write meaningful name for the PR
- assign reviewers 1 from your own & another one from another team
- provide a screenshot for the task output
- fix conflict
- check the reviews
- wait for approve
- done with code review
- card is moved for QA
- align with qa if there is a fix
- make the fix and the QA should test again

