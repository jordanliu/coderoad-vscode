import * as TT from 'typings/tutorial'
import { exec, exists } from '../node'
import logger from '../logger'

export const gitOrigin = 'coderoad'

const stashAllFiles = async (): Promise<never | void> => {
  // stash files including untracked (eg. newly created file)
  const { stdout, stderr } = await exec({ command: `git stash --include-untracked` })
  if (stderr) {
    console.error(stderr)
    throw new Error('Error stashing files')
  }
}

const cherryPickCommit = async (commit: string, count = 0): Promise<never | void> => {
  if (count > 1) {
    console.warn('cherry-pick failed')
    return
  }
  try {
    // cherry-pick pulls commits from another branch
    // -X theirs merges and accepts incoming changes over existing changes
    const { stdout } = await exec({ command: `git cherry-pick -X theirs ${commit}` })
    if (!stdout) {
      throw new Error('No cherry-pick output')
    }
  } catch (error) {
    console.log('cherry-pick-commit failed')
    // stash all files if cherry-pick fails
    await stashAllFiles()
    return cherryPickCommit(commit, ++count)
  }
}

/*
    SINGLE git cherry-pick %COMMIT%
    if fails, will stash all and retry
*/
export function loadCommit(commit: string): Promise<never | void> {
  return cherryPickCommit(commit)
}

/* 
    save commit
    git commit -am '${level}/${step} complete'
*/

export async function saveCommit(message: string): Promise<never | void> {
  const { stdout, stderr } = await exec({ command: `git commit -am '${message}'` })
  if (stderr) {
    console.error(stderr)
    throw new Error('Error saving progress to Git')
  }
  logger(['save with commit & continue stdout', stdout])
}

export async function clear(): Promise<Error | void> {
  try {
    // commit progress to git
    const { stderr } = await exec({ command: 'git reset HEAD --hard && git clean -fd' })
    if (!stderr) {
      return
    }
    console.error(stderr)
  } catch (error) {
    console.error(error)
  }
  throw new Error('Error cleaning up current unsaved work')
}

async function init(): Promise<Error | void> {
  const { stderr } = await exec({ command: 'git init' })
  if (stderr) {
    throw new Error('Error initializing Git')
  }
}

export async function initIfNotExists(): Promise<never | void> {
  const hasGitInit = exists('.git')
  if (!hasGitInit) {
    await init()
  }
}

export async function checkRemoteConnects(repo: TT.TutorialRepo): Promise<never | void> {
  // check for git repo
  const externalRepoExists = await exec({ command: `git ls-remote --exit-code --heads ${repo.uri}` })
  if (externalRepoExists.stderr) {
    // no repo found or no internet connection
    throw new Error(externalRepoExists.stderr)
  }
  // check for git repo branch
  const { stderr, stdout } = await exec({ command: `git ls-remote --exit-code --heads ${repo.uri} ${repo.branch}` })
  if (stderr) {
    throw new Error(stderr)
  }
  if (!stdout || !stdout.length) {
    throw new Error('Tutorial branch does not exist')
  }
}

export async function addRemote(repo: string): Promise<never | void> {
  const { stderr } = await exec({ command: `git remote add ${gitOrigin} ${repo} && git fetch ${gitOrigin}` })
  if (stderr) {
    const alreadyExists = stderr.match(`${gitOrigin} already exists.`)
    const successfulNewBranch = stderr.match('new branch')

    // validate the response is acceptable
    if (!alreadyExists && !successfulNewBranch) {
      console.error(stderr)
      throw new Error('Error adding git remote')
    }
  }
}

export async function checkRemoteExists(): Promise<boolean> {
  try {
    const { stdout, stderr } = await exec({ command: 'git remote -v' })
    if (stderr) {
      return false
    }
    // string match on remote output
    // TODO improve the specificity of this regex
    return !!stdout.match(gitOrigin)
  } catch (error) {
    return false
  }
}

export async function setupCodeRoadRemote(repo: string): Promise<never | void> {
  // check coderoad remote not taken
  const hasRemote = await checkRemoteExists()
  // git remote add coderoad tutorial
  // git fetch coderoad
  if (hasRemote) {
    // TODO: verify the remote is the same
    return
  }
  await addRemote(repo)
}

export async function loadCommitHistory(): Promise<string[]> {
  try {
    // returns an list of commit hashes
    const { stdout, stderr } = await exec({ command: 'git log --pretty=format:"%h"' })
    if (stderr) {
      return []
    }
    // string match on remote output
    return stdout.split('\n')
  } catch (error) {
    // likely no git setup or no commits
    return []
  }
}

// return the short form of a hash (first 7 characters)
// using `git rev-parse` seems unnecessarily slower
export function getShortHash(hash: string): string {
  return hash.slice(0, 7)
}
