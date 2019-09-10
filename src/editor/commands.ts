import * as vscode from 'vscode'
import ReactWebView from './ReactWebView'
import runTest from '../actions/runTest'
import {isEmptyWorkspace} from './workspace'

const COMMANDS = {
	START: 'coderoad.start',
	OPEN_WEBVIEW: 'coderoad.open_webview',
	RUN_TEST: 'coderoad.run_test',
	SET_CURRENT_STEP: 'coderoad.set_current_step',
}

interface CreateCommandProps {
	vscodeExt: vscode.ExtensionContext
}

export const createCommands = ({vscodeExt}: CreateCommandProps) => {
	// React panel webview
	let webview: any
	let currentStepId = ''
	return {
		// initialize
		[COMMANDS.START]: async () => {
			console.log('start')

			// TODO: replace with a prompt to open a workspace
			await isEmptyWorkspace()

			let webviewState: 'INITIALIZING' | 'RESTARTING'
			if (!webview) {
				webviewState = 'INITIALIZING'
			} else if (webview.loaded) {
				// already loaded
				vscode.window.showInformationMessage('CodeRoad already open')
				return
			} else {
				webviewState = 'RESTARTING'
			}

			// activate machine
			webview = new ReactWebView(vscodeExt.extensionPath)
		},
		// open React webview
		[COMMANDS.OPEN_WEBVIEW]: (column: number = vscode.ViewColumn.Two) => {
			console.log('open webview')
			// setup 1x1 horizontal layout

			// reset layout
			vscode.commands.executeCommand('vscode.setEditorLayout', {
				orientation: 0,
				groups: [{groups: [{}], size: 0.6}, {groups: [{}], size: 0.4}],
			})

			webview.createOrShow(column)
		},
		[COMMANDS.SET_CURRENT_STEP]: ({stepId}: {stepId: string}) => {
			// NOTE: as async, may sometimes be inaccurate
			// set from last setup stepAction
			currentStepId = stepId
		},
		[COMMANDS.RUN_TEST]: (current: {stepId: string} | undefined) => {
			// use stepId from client, or last set stepId
			const payload = {stepId: current ? current.stepId : currentStepId}
			runTest({
				onSuccess: () => {
					console.log('COMMAND TEST_PASS')
					webview.send({type: 'TEST_PASS', payload})
					vscode.window.showInformationMessage('PASS')
				},
				onFail: () => {
					console.log('COMMAND TEST_FAIL')
					webview.send({type: 'TEST_FAIL', payload})
					vscode.window.showWarningMessage('FAIL')
				},
				onError: () => {
					console.log('COMMAND TEST_ERROR')
					webview.send({type: 'TEST_ERROR', payload})
				},
				onRun: () => {
					console.log('COMMAND TEST_RUN')
					webview.send({type: 'TEST_RUN', payload})
				}
			})
		},
	}
}